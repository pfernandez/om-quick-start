(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(defn read
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

;; heterogeneous recursive state
(def state
  {:tree {:id 0
          :node/type :node/foo
          :foo/value 42
          :children [{:id 1 :node/type :node/foo
                      :bar/value 43
                      :children [{:id 2 :node/type :node/bar
                                  :bar/value 99
                                  :children []}]}
                     {:id 3 :node/type :node/bar
                                 :bar/value 101
                                 :children []}]
          :children-2 [{:id 1 :node/type :node/foo
                        :bar/value 43
                        :children-2 [{:id 2 :node/type :node/bar
                                    :bar/value 99
                                    :children-2 []}]}
                       {:id 3 :node/type :node/bar
                                   :bar/value 101
                                   :children-2 []}]}})

;; ':node/bar' nodes contain `:bar/value`
(defui BarNode
  static om/IQuery
  (query [this]
    '[:id :node/type :bar/value {:children ...}]))

;; ':node/foo' nodes contain `:foo/value`
(defui FooNode
  static om/IQuery
  (query [this]
    '[:id :node/type :foo/value {:children ...} {:children-2 ...}]))

;; An ItemNode can be either FooNode or BarNode
(defui ItemNode
  static om/Ident
  (ident [this {:keys [node/type id]}]
    [type id])
  static om/IQuery
  (query [this]
    `{:node/foo ~(om/get-query FooNode)
      :node/bar ~(om/get-query BarNode)}))

(defui Tree
  static om/IQuery
  (query [this]
    `[{:tree ~(om/get-query ItemNode)}])
  Object
  (render [this]
          (dom/div nil
                   (pprint (om/get-query this))
                   (pprint (om/props this)))))

(def reconciler
  (om/reconciler
    {:state state
     :parser (om/parser {:read read})}))

(om/add-root! reconciler
  Tree (gdom/getElement "app"))
