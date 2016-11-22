(ns client
  (:require [clojure.spec :as s]
            [toolkit.client :as t]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Id

(def id 0)

(s/def :db/id int?)

(s/valid? :db/id id)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Ident

(def ident [:item/by-id id])

(s/def ::ident
  (s/and
    vector?
    (s/tuple keyword? :db/id)))

(s/valid? ::ident ident)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Ref-one

(s/def ::ref
  (s/or
    :id    :db/id
    :ident ::ident))

(s/valid? ::ref id)
(s/valid? ::ref ident)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Ref-many

(def ref-many [ident])

(s/def ::ref-many
  (s/or
    :ids    (s/coll-of :db/id
              :distinct true)
    :idents (s/coll-of ::ident
              :distinct true)))

(s/valid? ::ref-many ref-many)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Entity

(def entity {:db/id id})

(s/def ::entity
  (s/keys
    :req [:db/id]
    :opt [::ref ::ref-many]))

(s/valid? ::entity entity)
