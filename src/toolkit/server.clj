(ns toolkit.server
  (:require [com.stuartsierra.component :as component]
            [clojure.java.jdbc :as jdbc]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.response :refer :all]
            [ring.middleware.resource :refer [wrap-resource]]
            [cognitect.transit :as transit]
            [bidi.bidi :as bidi]
            [om.next.server :as om]
            [clojure.walk :as walk]
            [taoensso.timbre :as log])
  (:import [java.io ByteArrayOutputStream]))

(defrecord Database [db-spec]
  component/Lifecycle
  (start [component]
    (println ";; Starting database")
    (let [conn (jdbc/get-connection db-spec)]
      (assoc component :connection conn)))
  (stop [component]
    (println ";; Stopping database")
    (try (.close (:connection component))
         (catch Throwable t
           (log/warn t "Error when stopping component")))
    (assoc component :connection nil)))

(defn database [db-spec]
  (map->Database {:db-spec db-spec}))

(defrecord WebServer [port handler container connection]
  component/Lifecycle
  (start [component]
    (let [conn (:connection connection)]
      (if container
        (let [req-handler (handler conn)
              container (run-jetty req-handler
                          {:port port :join? false})]
          (assoc component :container container))
        (assoc component :handler (handler conn)))))
  (stop [component]
    (.stop container)))

(defn write [x t opts]
  (let [baos (ByteArrayOutputStream.)
        w    (transit/writer baos t opts)
        _    (transit/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn transit-request? [request]
  (if-let [type (:content-type request)]
    (let [mtch (re-find #"^application/transit\+(json|msgpack)" type)]
      [(not (empty? mtch)) (keyword (second mtch))])))

(defn read-transit [request {:keys [opts]}]
  (let [[res t] (transit-request? request)]
    (if res
      (if-let [body (:body request)]
        (let [rdr (transit/reader body t opts)]
          (try
            [true (transit/read rdr)]
            (catch Exception ex
              [false nil])))))))

(def ^{:doc "The default response to return when a Transit request is malformed."}
default-malformed-response
  {:status 400
   :headers {"Content-Type" "text/plain"}
   :body "Malformed Transit in request body."})

(defn wrap-transit-body
  "Middleware that parses the body of Transit request maps, and replaces the :body
  key with the parsed data structure. Requests without a Transit content type are
  unaffected.
  Accepts the following options:
  :keywords?          - true if the keys of maps should be turned into keywords
  :opts               - a map of options to be passed to the transit reader
  :malformed-response - a response map to return when the JSON is malformed"
  {:arglists '([handler] [handler options])}
  [handler & [{:keys [malformed-response]
               :or {malformed-response default-malformed-response}
               :as options}]]
  (fn [request]
    (if-let [[valid? transit] (read-transit request options)]
      (if valid?
        (handler (assoc request :body transit))
        malformed-response)
      (handler request))))

(defn- assoc-transit-params [request transit]
  (let [request (assoc request :transit-params transit)]
    (if (map? transit)
      (update-in request [:params] merge transit)
      request)))

(defn wrap-transit-params
  "Middleware that parses the body of Transit requests into a map of parameters,
  which are added to the request map on the :transit-params and :params keys.
  Accepts the following options:
  :malformed-response - a response map to return when the JSON is malformed
  :opts               - a map of options to be passed to the transit reader
  Use the standard Ring middleware, ring.middleware.keyword-params, to
  convert the parameters into keywords."
  {:arglists '([handler] [handler options])}
  [handler & [{:keys [malformed-response]
               :or {malformed-response default-malformed-response}
               :as options}]]
  (fn [request]
    (if-let [[valid? transit] (read-transit request options)]
      (if valid?
        (handler (assoc-transit-params request transit))
        malformed-response)
      (handler request))))

(defn wrap-transit-response
  "Middleware that converts responses with a map or a vector for a body into a
  Transit response.
  Accepts the following options:
  :encoding - one of #{:json :json-verbose :msgpack}
  :opts     - a map of options to be passed to the transit writer"
  {:arglists '([handler] [handler options])}
  [handler & [{:as options}]]
  (let [{:keys [encoding opts] :or {encoding :json}} options]
    (assert (#{:json :json-verbose :msgpack} encoding) "The encoding must be one of #{:json :json-verbose :msgpack}.")
    (fn [request]
      (let [response (handler request)]
        (if (coll? (:body response))
          (let [transit-response (update-in response [:body] write encoding opts)]
            (if (contains? (:headers response) "Content-Type")
              transit-response
              (content-type transit-response (format "application/transit+%s; charset=utf-8" (name encoding)))))
          response)))))

;; =============================================================================
;; Routes

(def routes
  ["" {"/" :index
       "/api"
        {:get  {[""] :api}
         :post {[""] :api}}}])

;; =============================================================================
;; Reads

(defmulti readf (fn [env k params] k))

(defmethod readf :default
  [_ k _]
  {:value {:error (str "No handler for read key " k)}})

;; =============================================================================
;; Mutations

(defmulti mutatef (fn [env k params] k))

(defmethod mutatef :default
  [_ k _]
  {:value {:error (str "No handler for mutation key " k)}})

;; =============================================================================
;; Handlers

(defn index [req]
  (assoc (resource-response (str "html/index.html") {:root "public"})
    :headers {"Content-Type" "text/html"}))

(defn generate-response [data & [status]]
  {:status  (or status 200)
   :headers {"Content-Type" "application/transit+json"}
   :body    data})

(defn api [req]
  (let [data ((om/parser {:read readf :mutate mutatef})
              {:conn (:database req)} (:transit-params req))
        data' (walk/postwalk (fn [x]
                               (if (and (sequential? x) (= :result (first x)))
                                 [(first x) (dissoc (second x) :db-before :db-after :tx-data)]
                                 x))
                data)]
    (generate-response data')))

;;;; PRIMARY HANDLER

(defn handler [req]
  (let [match (bidi/match-route routes (:uri req)
                :request-method (:request-method req))]
    (case (:handler match)
      :index (index req)
      :api   (api req)
      req)))

(defn wrap-connection [handler conn]
  (fn [req] (handler (assoc req :database conn))))

(defn todomvc-handler [conn]
  (wrap-resource
    (wrap-transit-response
      (wrap-transit-params (wrap-connection handler conn)))
    "public"))

(defn todomvc-handler-dev [conn]
  (fn [req]
    ((todomvc-handler conn) req)))

(defn dev-server [web-port]
  (WebServer. web-port todomvc-handler-dev true nil))

(defn prod-server []
  (WebServer. nil todomvc-handler false nil))

(defn dev-system [config-options]
  (let [{:keys [db-spec web-port]} config-options]
    (component/system-map
      :db (database db-spec)
      :webserver
      (component/using
        (dev-server web-port)
        {:database :db}))))

(defn prod-system [config-options]
  (let [{:keys [db-spec]} config-options]
    (component/system-map
      :db (database db-spec)
      :webserver
      (component/using
        (prod-server)
        {:database :db}))))
