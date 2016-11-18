(defproject om-quick-start "0.1.0-SNAPSHOT"

  :description "A Launchpad for Om Next experiments."

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.omcljs/om "1.0.0-alpha47"]]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.8" :scope "test"]]
                   :source-paths ["dev"]}}

  :cljsbuild {:builds [{:id "dev"
                        :figwheel true
                        :source-paths ["src"]
                        :compiler {:main om-quick-start.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :verbose true
                                   :optimizations :none
                                   :source-map true}}]}

  :clean-targets ^{:protect false} [:target-path "out" "resources/public/js"])
