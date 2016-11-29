(ns toolkit.core
  (:require [goog.dom :as gdom]
            [cognitect.transit :as transit]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
         ;;   [toolkit.client :as tc]
            [cljs.pprint :as pprint])
  (:import [goog.net XhrIo]))

(enable-console-print!)

(def init-data
  {:list/one [{:name "John" :points 0}
              {:name "Mary" :points 0}
              {:name "Bob"  :points 0}]
   :list/two [{:name "Mary" :points 0 :age 27}
              {:name "Gwen" :points 0}
              {:name "Jeff" :points 0}]})

;; -----------------------------------------------------------------------------
;; Parsing

(defmulti read om/dispatch)

(defn get-people [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defmethod read :list/one
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defmethod read :list/two
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'points/increment
  [{:keys [state]} _ {:keys [name]}]
  {:action (fn []
             (swap! state update-in
               [:person/by-name name :points]
               inc))
   :remote true})

(defmethod mutate 'points/decrement
  [{:keys [state]} _ {:keys [name]}]
  {:action (fn []
             (swap! state update-in
               [:person/by-name name :points]
               #(let [n (dec %)] (if (neg? n) 0 n))))
   :remote true})

;; -----------------------------------------------------------------------------
;; Components

(defui Person
  static om/Ident
  (ident [this {:keys [name]}]
    [:person/by-name name])
  static om/IQuery
  (query [this]
    '[:name :points :age])
  Object
  (render [this]
    (println "Render Person" (-> this om/props :name))
    (let [{:keys [points name] :as props} (om/props this)]
      (dom/li nil
        (dom/label nil (str name ", points: " points))
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! this
                   `[(points/increment ~props)]))}
          "+")
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! this
                   `[(points/decrement ~props)]))}
          "-")))))

(def person (om/factory Person {:keyfn :name}))

(defui ListView
  Object
  (render [this]
    (println "Render ListView" (-> this om/path first))
    (let [list (om/props this)]
      (apply dom/ul nil
        (map person list)))))

(def list-view (om/factory ListView))

(defui RootView
  static om/IQuery
  (query [this]
    (let [subquery (om/get-query Person)]
      `[{:list/one ~subquery} {:list/two ~subquery}]))
  Object
  (render [this]
    (println "Render RootView")
    (let [{:keys [list/one list/two]} (om/props this)]
      (apply dom/div nil
        [(dom/h2 nil "List A")
         (list-view one)
         (dom/h2 nil "List B")
         (list-view two)]))))

;;(defonce app-state (atom (om/tree->db RootView init-data true)))

(defn send [url]
  (fn [{:keys [remote]} cb]
    (.send XhrIo url
      (fn [e]
        (this-as this
          (cb (transit/read (om/reader) (.getResponseText this)))))
      "POST" (transit/write (om/writer) remote)
      #js {"Content-Type" "application/transit+json"})))

(def reconciler
  (om/reconciler
    {:state init-data
     :parser (om/parser {:read read :mutate mutate})
     :send (send "/api")}))

(om/add-root! reconciler
  RootView (gdom/getElement "app"))
