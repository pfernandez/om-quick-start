(ns toolkit.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [toolkit.client :as tc]))

(def app-state
  (atom
    {:app/title "Animals"
     :animals/list
     [[1 "Ant"] [2 "Antelope"] [3 "Bird"] [4 "Cat"] [5 "Dog"]
      [6 "Lion"] [7 "Mouse"] [8 "Monkey"] [9 "Snake"] [10 "Zebra"]]
     :counter 0}))

(defmethod tc/read :animals/list
  [{:keys [state] :as env} key {:keys [start end]}]
  {:value (subvec (:animals/list @state) start end)})

(defui AnimalsList
  static om/IQueryParams
  (params [this]
    {:start 0 :end 10})
  static om/IQuery
  (query [this]
    '[:app/title (:animals/list {:start ?start :end ?end})
      :counter])
  Object
  (render [this]
    (let [{:keys [app/title animals/list counter]} (om/props this)
          inc-count #(tc/set-in! this :counter (inc counter))]
      (dom/div nil
        (dom/h2 nil title)
        (apply dom/ul nil
          (map
            (fn [[i name]]
              (dom/li nil (str i ". " name)))
            list))
        (dom/h3 nil "Count: " counter)
        (dom/button #js {:onClick inc-count} "+")))))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser tc/parser}))

(om/add-root! reconciler
  AnimalsList (gdom/getElement "app"))
