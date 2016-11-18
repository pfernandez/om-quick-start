(ns toolkit.client
  (:require [om.next :as om]
            [clojure.string :as s]))


(defmulti read om/dispatch)
(defmulti mutate om/dispatch)

(def parser
  (om/parser
    {:read read
     :mutate mutate}))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Read

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Mutate

(defn deep-merge
  "Recursively descends into every nested map,
  only replacing values that differ."
  [& xs]
  (if (every? map? xs)
    (apply merge-with deep-merge xs)
    (last xs)))

;; TODO: Collapse into a single `swap!`.
(defn merge-state!
  "Performs a `deep-merge` of `data` and `tables` into `state` at `ref`."
  ([state data tables]
   (merge-state! state data tables nil))
  ([state data tables ref]
   (if ref
     (swap! state update-in ref deep-merge data)
     (swap! state deep-merge data))
   (swap! state deep-merge tables)))

(defn normalize
  [state component props ref]
  (let [data (om/tree->db component props)]
    [data (meta data)]))

(defn normalize-into-state!
  [state component props ref]
  (let [[data tables] (normalize state component props ref)]
    (merge-state! state data tables ref)))

(defmethod mutate 'tx/set
  [{:keys [state component ref ast]} _ {:keys [props remote]}]
  {:action #(normalize-into-state! state component props ref)
   :remote (when remote
             (let [entity-id (:db/id props)
                   remote-params (if entity-id (assoc props :db/id (last ref)) props)]
               (assoc ast :params remote-params)))})

(defmethod mutate 'tx/add
  [{:keys [state component ref ast]} _ {:keys [props remote]}]
  {:action #(normalize-into-state! state component props ref)
   :remote (when remote (merge ast remote))})

(defn vec-remove
  "Remove an item at a specified index from a vector."
  [v idx]
  (vec (concat (subvec v 0 idx) (subvec v (inc idx)))))

(defmethod mutate 'tx/remove
  [{:keys [state component ref ast]} _ {:keys [path ref-id remote]}]
  (let [keywd (last path)]
    {:action #(let [full-path (concat ref path)]
               (if (> (count full-path) 1)
                 (if ref-id (let [list (keywd (om/props component))
                                  item-idx (.indexOf (mapv :db/id list) ref-id)]
                              (swap! state update-in full-path vec-remove item-idx))
                            (swap! state update-in (drop-last full-path) dissoc keywd))
                 (swap! state dissoc keywd)))
     :remote (when remote
               (merge ast {:params {:db/id      (or (:db/id (om/props component)) (last ref))
                                    (last path) (when ref-id #{ref-id})}
                           :key    (if ref-id 'tx/remove 'tx/set)}))}))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helpers

(defn- deep-select* [A B]
  (map (fn [[ka va] [kb vb]]
         (if (every? map? [va vb])
           {ka (into {} (deep-select* va vb))}
           {kb vb}))
    A (select-keys B (keys A))))

(defn deep-select
  "Recursively creates a map with the nested keys of `a` and nested values of `b`."
  [a b] (into {} (deep-select* a b)))

(defn get-path
  "Accepts either a `:keyword` or `[:vector :of :keywords]` and returns a vector
  suitable for use in `get-in` style functions."
  [key-or-path]
  (if (vector? key-or-path) key-or-path (vector key-or-path)))

(defn is-link?
  "Does the given path in state begin from root?"
  [path]
  (= '_ (last path)))

(defn app-reconciler
  "For use in `get-components`, allowing a rendered component to be retrieved by class name."
  []
  (if (.hasOwnProperty js/window "survey_response")
    (.. js/window -survey_response -core -taker -state -reconciler)
    (.. js/window -survey -core -app -state -reconciler)))

(defn- class->components
  "Get all components from the indexer that match the component class name."
  [x class]
  (let [indexer (if (om/reconciler? x) (om/get-indexer x) x)]
    (get-in @indexer [:class->components class])))

(defn list-component-classes
  "Returns a list of all *rendered* React component ClassNames."
  []
  (keys (:class->components @(om/get-indexer (app-reconciler)))))

(defn list-component-refs
  "Returns a list of all *rendered* component idents."
  []
  (keys (:key->components @(om/get-indexer (app-reconciler)))))

(defn get-components
  "Given `context`, returns a set of all *rendered* React components found, if any exist.
     `context` can be a component instance (i.e. `this`) or an arbitrary component ClassName or ident."
  [context]
  (if (om.util/ident? context)
    (om/ref->components (app-reconciler) context)
    (class->components (app-reconciler) context)))

(defn get-component
  "Given `context`, returns the first *rendered* React component found, if one exists.
     `context` can be a component instance (i.e. `this`) or an arbitrary component's ClassName or ident."
  [context]
  (if (om/component? context) context (first (get-components context))))

(defn get-root
  "Get the root ancestor component of a given context.

     **Usage Example**
     ```
     (set-in! (get-root this) [:path :in :app-state] new-value)
     "
  [context]
  (om/app-root (om/get-reconciler (get-component context))))

(defn get-props
  "Mirrors `om/props`, but also allows and extra keyword or `get-in` style path to be used to get a single prop.

     **Params**
     `context`     A React component (i.e. `this`), or an arbitrary component's ClassName or ident.
     `key-or-path` (optional) A keyword or `get-in` style path pointing to the desired prop.
     "
  ([context] (om/props (get-component context)))
  ([context key-or-path]
   (let [component (get-component context)
         path (get-path key-or-path)
         props (om/props component)]
     (get-in props path))))

(defn set-params [component props & [remote?]]
  (let [old-props (om/props component)
        filtered-props (select-keys old-props (conj (keys props) :db/id))
        new-props (deep-merge filtered-props props)]
    {:props new-props :remote remote?}))

(defn set-props!
  "Modify a component's props.

     **Required params**
     `context`  A React component (i.e. `this`), or an arbitrary component's ClassName or ident.
     `props`    A map of one or more props (in the same form as the data returned by `om/props`) to be merged
                with the component's existing props via `deep-merge`.

     **Options**
     `:remote`  A boolean indicating whether to send the new data to the server.
     `:reload`  A list of keywords from the queries of any additional components that should be reloaded.

     **Basic example**
     ```
     (set-props! this {:visible true})
     ```

     **Advanced example**
     ```
     ;; Old props: {:db/id 0
     ;;             :children 2
     ;;             :names {:a \"Larry\" :b \"Darrell\"}

     (set-props! Widget {:children 3 :names {:c \"Darrell\"}
       :remote true
       :reload [:widget2-prop :widget3-prop])  ; any components with these props will also be rerendered

     ;; New props (also updated on server):
     ;; {:db/id 0
     ;;  :children 3
     ;;  :names {:a \"Larry\" :b \"Darrell\" :c \"Darrell\"}
     ```
     "
  [context props & {:keys [remote reload]}]
  (let [component (get-component context)
        params (set-params component props remote)]
    (om/transact! component `[(tx/set ~params) ~@reload])))

(defn add-params
  [component key-or-path item-props & [remote?]]
  (let [path (get-path key-or-path)
        component-props (om/props component)
        item-id (or (:db/id item-props) (om/tempid))
        old-list (or (get-in component-props path) [])
        new-item-props (assoc item-props :db/id item-id)
        new-list (conj old-list new-item-props)
        filtered-props (select-keys component-props (conj (subvec path 0 1) :db/id))
        new-component-props (assoc-in filtered-props path new-list)
        component-id (:db/id component-props)
        is-root? (not component-id)
        is-new-item? (om/tempid? item-id)]
    {:props  new-component-props
     :remote (when remote?
               (if is-root?
                 {:params new-item-props :key 'tx/create}
                 {:params (if is-new-item?
                            (assoc-in filtered-props path
                              (conj (mapv #(select-keys % [:db/id]) old-list) new-item-props))
                            (assoc-in {:db/id component-id} path #{item-id}))}))}))

(defn add!
  "Add an entity to a list.

     **Required params**
     `context`     A React component (i.e. `this`), or an arbitrary component's ClassName or ident.
     `key-or-path` A keyword or `get-in` style path pointing to the list where the new props should be inserted.
     `item-props` A map of props containing either `:db/id` of an existing entity, or an `(om/tempid)`.

     **Options**
     `:remote`     A boolean indicating whether to send the new data to the server.
     `:reload`     A list of keywords from the queries of any additional components that should be reloaded.

     **Example**
     ```
     ;; Old component props: {:db/id 0
     ;;                       :list-items [{:db/id 1 :color \"red\"}}

     (add! Widget :list-items {:db/id (om/tempid) :color \"blue\"})

     ;; New component props: {:db/id 0
     ;;                       :list-items [{:db/id 1 :color \"red\"}
     ;;                                    {:db/id 2 :color \"blue\"}]}
     ```
     "
  [context key-or-path item-props & {:keys [remote reload]}]
  (let [component (get-component context)
        params (add-params component key-or-path item-props remote)]
    (om/transact! component `[(tx/add ~params) ~@reload])))

(defn remove!
  "Remove a component prop.

     **Params**
     `context`     A React component (i.e. `this`), or an arbitrary component's ClassName or ident.
     `key-or-path` A keyword or `get-in` style path pointing to the prop to be removed.

     **Options**
     `:ref-id`      If the prop to remove is part of a list and has a :db/id, use this to remove the ref.
     `:remote`  A boolean indicating whether to also remove the data from the server.
     `:reload`  A list of keywords from the queries of any additional components that should be reloaded.

     **Examples**
     ```
     ;; Old props: {:db/id 0
     ;;             :visible true}

     (remove! this :visible)

     ;; New props: {:db/id 0}

     ;; Old props: {:db/id 0
     ;;             :tags [{:db/id 1} {:db/id 2}]}

     (remove! this :tags :ref-id 2)

     ;; New props: {:db/id 0
                    :tags [{:db/id 1}]}
     ```
     "
  [context key-or-path & {:keys [ref-id remote reload]}]
  (let [params {:path (get-path key-or-path) :ref-id ref-id :remote remote}]
    (om/transact! (get-component context) `[(tx/remove ~params) ~@reload])))

(defn set-in!
  "Like `set-props! but with a more concise syntax for targeting a single value.

     **Required params**
     `context`     A React component (i.e. `this`), or an arbitrary component's ClassName or ident.
     `key-or-path` A keyword or `get-in` style path pointing to the prop to be modified.

     **Options**
     `:remote`  A boolean indicating whether to also remove the data from the server.
     `:reload`  A list of keywords from the queries of any additional components that should be reloaded.

     **Example**
     ```
     ;; Old props: {:db/id 0
     ;;             :color \"red\"}

     (set-in! Widget :color \"blue\")

     ;; New props: {:db/id 0
     ;;             :color \"blue\"}
     ```
     "
  [context key-or-path value & {:keys [remote reload]}]
  (let [path (get-path key-or-path)
        props (assoc-in {} path value)]
    (set-props! context props :remote remote :reload reload)))

(defn toggle!
  "Toggle a single boolean component prop's value.

     **Required params**
     `context`     A React component (i.e. `this`), or an arbitrary component's ClassName or ident.
     `key-or-path` A keyword or `get-in` style path pointing to the prop to be toggled.

     **Options**
     `:remote`  A boolean indicating whether to also remove the data from the server.
     `:reload`  A list of keywords from the queries of any additional components that should be reloaded.

     **Example**
     ```
     ;; Old props: {:db/id 0
     ;;             :visible false}

     (toggle! Widget :visible)

     ;; New props: {:db/id 0
     ;;             :visible true}
     ```
     "
  [context key-or-path & {:keys [remote reload]}]
  (let [component (get-component context)
        path (get-path key-or-path)
        old-val (get-props component path)
        props (assoc-in {} path (not old-val))]
    (set-props! context props :remote remote :reload reload)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Experiments below!

; (defn class->keyword [Class]
;   (let [str-array (s/split (.-name Class) "$")
;         ns-path (s/join "." (pop str-array))
;         class-name (last str-array)
;         full-name (s/join "/" [ns-path class-name])]
;     (keyword full-name)))

; (defn render-child [parent Child & [queried-props computed-props validator]]
;   (let [query (om/get-query Child)
;         state-key (class->keyword Child)
;         parent-component (get-component parent)]

;     (js/console.log parent-component)
;     (js/console.log state-key query queried-props)

;     #_(om/update-query! parent-component #(update % :query conj {state-key query})) ; causes error

;     (js/console.log (om/get-query parent-component))

;     ((om/factory Child {:validator validator :keyfn :id})
;     (om/computed queried-props computed-props))))
