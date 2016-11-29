(defproject toolkit "0.1.0-SNAPSHOT"

  :description "Helpers for the Om Next framework"

  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.omcljs/om "1.0.0-alpha47"]
                 [ring/ring "1.5.0"]
                 [bidi "2.0.14"]
                 [com.cognitect/transit-clj "0.8.295"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.stuartsierra/component "0.3.1"]
                 [org.postgresql/postgresql "9.4.1208.jre7"]
                 [com.layerware/hugsql "0.4.7"]
                 [com.taoensso/timbre "4.7.4"]]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.8" :scope "test"]
                                  [org.clojure/test.check "0.9.0" :scope "test"]]
                   :source-paths ["dev"]}}

  :cljsbuild {:builds [{:id "dev"
                        :figwheel true
                        :source-paths ["src" "dev"]
                        :compiler {:main toolkit.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]}

  :clean-targets ^{:protect false} [:target-path "out" "resources/public/js"])
