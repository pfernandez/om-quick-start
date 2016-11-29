(ns toolkit.spec.client
  (:require [clojure.spec :as s]
            [clojure.test.check.generators :as gen]
            [toolkit.client :as t]))


; (def data-keys #{:item :thingy :bowr? :foo})

; (s/def :db/id int?)

; (s/def ::ref-many
;   (s/coll-of ::id :distinct true))

; (s/def ::table-key
;   (set (map #(-> % name (keyword "by-id")) data-keys)))

; (s/def ::data-table
;   (s/map-of ::table-key ::entity))

; (s/def ::ident
;   (s/tuple ::table-key :db/id))

; (s/def ::ident-list
;   (s/coll-of ::ident :distinct true))

; (s/def ::data-key data-keys)

; (s/def ::data-index (s/map-of ::data-key ::ident-list))

; (s/def ::entity
;   (s/keys
;     :req [:db/id]
;     :opt [::entity ::data-index ::data-table]))

:db {}
#:things {:db/id 123
          :name "asdf"}

(s/def ::snake-optionally-eating-its-own-tail
  (s/keys :opt [::snake-optionally-eating-its-own-tail]))

(cljs.pprint/pprint (gen/sample (s/gen ::snake-optionally-eating-its-own-tail)))
