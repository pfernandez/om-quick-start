// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__){
return (function (env,key,params){
return key;
});})(method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20888,key,params){
var map__20889 = p__20888;
var map__20889__$1 = ((((!((map__20889 == null)))?((((map__20889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20889):map__20889);
var env = map__20889__$1;
var state = cljs.core.get.call(null,map__20889__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20891 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__20891,(0),null);
var value = cljs.core.nth.call(null,vec__20891,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__20892,key,p__20893){
var map__20894 = p__20892;
var map__20894__$1 = ((((!((map__20894 == null)))?((((map__20894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20894):map__20894);
var env = map__20894__$1;
var state = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20895 = p__20893;
var map__20895__$1 = ((((!((map__20895 == null)))?((((map__20895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20895):map__20895);
var start = cljs.core.get.call(null,map__20895__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__20895__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__20072__auto__ = this;
React.Component.apply(this__20072__auto__,arguments);

if(!((this__20072__auto__.initLocalState == null))){
this__20072__auto__.state = this__20072__auto__.initLocalState();
} else {
this__20072__auto__.state = {};
}

return this__20072__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x20902_20916 = om_tutorial.core.AnimalsList.prototype;
x20902_20916.componentWillUpdate = ((function (x20902_20916){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
if(((!((this__20007__auto__ == null)))?(((false) || (this__20007__auto__.om$next$Ident$))?true:false):false)){
var ident__20011__auto___20917 = om.next.ident.call(null,this__20007__auto__,om.next.props.call(null,this__20007__auto__));
var next_ident__20012__auto___20918 = om.next.ident.call(null,this__20007__auto__,om.next._next_props.call(null,next_props__20008__auto__,this__20007__auto__));
if(cljs.core.not_EQ_.call(null,ident__20011__auto___20917,next_ident__20012__auto___20918)){
var idxr__20013__auto___20919 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20013__auto___20919 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20013__auto___20919),((function (idxr__20013__auto___20919,ident__20011__auto___20917,next_ident__20012__auto___20918,this__20007__auto__,x20902_20916){
return (function (indexes__20014__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20014__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20011__auto___20917], null),cljs.core.disj,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20012__auto___20918], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20007__auto__);
});})(idxr__20013__auto___20919,ident__20011__auto___20917,next_ident__20012__auto___20918,this__20007__auto__,x20902_20916))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20007__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20007__auto__);
});})(x20902_20916))
;

x20902_20916.shouldComponentUpdate = ((function (x20902_20916){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
var next_children__20010__auto__ = next_props__20008__auto__.children;
var next_props__20008__auto____$1 = goog.object.get(next_props__20008__auto__,"omcljs$value");
var next_props__20008__auto____$2 = (function (){var G__20904 = next_props__20008__auto____$1;
var G__20904__$1 = (((next_props__20008__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20904):G__20904);
return G__20904__$1;
})();
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20007__auto__),next_props__20008__auto____$2);
if(or__16771__auto__){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = (function (){var and__16759__auto__ = this__20007__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20007__auto__.state,"omcljs$state"),goog.object.get(next_state__20009__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20007__auto__.props.children,next_children__20010__auto__);
}
}
});})(x20902_20916))
;

x20902_20916.componentWillUnmount = ((function (x20902_20916){
return (function (){
var this__20007__auto__ = this;
var r__20018__auto__ = om.next.get_reconciler.call(null,this__20007__auto__);
var cfg__20019__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20018__auto__);
var st__20020__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20019__auto__);
var indexer__20017__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20019__auto__);
if(cljs.core.truth_((function (){var and__16759__auto__ = !((st__20020__auto__ == null));
if(and__16759__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20020__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20007__auto__], null));
} else {
return and__16759__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20020__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20007__auto__);
} else {
}

if((indexer__20017__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20017__auto__,this__20007__auto__);
}
});})(x20902_20916))
;

x20902_20916.componentDidUpdate = ((function (x20902_20916){
return (function (prev_props__20015__auto__,prev_state__20016__auto__){
var this__20007__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20007__auto__);
});})(x20902_20916))
;

x20902_20916.isMounted = ((function (x20902_20916){
return (function (){
var this__20007__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20007__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20902_20916))
;

x20902_20916.componentWillMount = ((function (x20902_20916){
return (function (){
var this__20007__auto__ = this;
var indexer__20017__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20017__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20017__auto__,this__20007__auto__);
}
});})(x20902_20916))
;

x20902_20916.render = ((function (x20902_20916){
return (function (){
var this__20006__auto__ = this;
var this$ = this__20006__auto__;
var _STAR_reconciler_STAR_20905 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20906 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20907 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20908 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20909 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20006__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20006__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20006__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20006__auto__);

om.next._STAR_parent_STAR_ = this__20006__auto__;

try{var map__20910 = om.next.props.call(null,this$);
var map__20910__$1 = ((((!((map__20910 == null)))?((((map__20910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20910):map__20910);
var title = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__20910,map__20910__$1,title,list,_STAR_reconciler_STAR_20905,_STAR_depth_STAR_20906,_STAR_shared_STAR_20907,_STAR_instrument_STAR_20908,_STAR_parent_STAR_20909,this$,this__20006__auto__,x20902_20916){
return (function (p__20912){
var vec__20913 = p__20912;
var i = cljs.core.nth.call(null,vec__20913,(0),null);
var name = cljs.core.nth.call(null,vec__20913,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__20910,map__20910__$1,title,list,_STAR_reconciler_STAR_20905,_STAR_depth_STAR_20906,_STAR_shared_STAR_20907,_STAR_instrument_STAR_20908,_STAR_parent_STAR_20909,this$,this__20006__auto__,x20902_20916))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20909;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20908;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20907;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20906;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20905;
}});})(x20902_20916))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.constructor.displayName = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x20914_20920 = om_tutorial.core.AnimalsList;
x20914_20920.om$next$IQueryParams$ = true;

x20914_20920.om$next$IQueryParams$params$arity$1 = ((function (x20914_20920){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x20914_20920))
;

x20914_20920.om$next$IQuery$ = true;

x20914_20920.om$next$IQuery$query$arity$1 = ((function (x20914_20920){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x20914_20920))
;


var x20915_20921 = om_tutorial.core.AnimalsList.prototype;
x20915_20921.om$next$IQueryParams$ = true;

x20915_20921.om$next$IQueryParams$params$arity$1 = ((function (x20915_20921){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x20915_20921))
;

x20915_20921.om$next$IQuery$ = true;

x20915_20921.om$next$IQuery$query$arity$1 = ((function (x20915_20921){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x20915_20921))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__20074__auto__,writer__20075__auto__,opt__20076__auto__){
return cljs.core._write.call(null,writer__20075__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map