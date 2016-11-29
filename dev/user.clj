(ns user
  (:require
   [figwheel-sidecar.repl-api :as ra]
   [com.stuartsierra.component :as component]
   [clojure.tools.namespace.repl :refer (refresh)]
   [toolkit.server :as server]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Client REPL & autobuilder

(defn start-figwheel [] (ra/start-figwheel!))

(defn stop-figwheel [] (ra/stop-figwheel!))

(defn cljs-repl [] (ra/cljs-repl "dev"))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Server & database

(def config
  {:db-spec {:dbtype "postgresql"
             :dbname "test"
             ;; Optional:
             :host "localhost"
             :port "5432"
             :user "postgres"
             :password "postgres"}
   :web-port 8081})

(def system nil)

(defn init []
  (alter-var-root #'system
    (constantly (server/dev-system config))))

(defn start []
  (alter-var-root #'system component/start))

(defn stop []
  (alter-var-root #'system
    (fn [s] (when s (component/stop s)))))

#_(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (refresh :after 'user/go))
