// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.read = (function om_tutorial$core$read(p__31278,key,params){
var map__31282 = p__31278;
var map__31282__$1 = ((((!((map__31282 == null)))?((((map__31282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31282):map__31282);
var env = map__31282__$1;
var state = cljs.core.get.call(null,map__31282__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31284 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__31284,(0),null);
var value = cljs.core.nth.call(null,vec__31284,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.core.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","foo","node/foo",1263479614),new cljs.core.Keyword("foo","value","foo/value",307455555),(42),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","foo","node/foo",1263479614),new cljs.core.Keyword("bar","value","bar/value",307459966),(43),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","bar","node/bar",-1380720574),new cljs.core.Keyword("bar","value","bar/value",307459966),(99),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","bar","node/bar",-1380720574),new cljs.core.Keyword("bar","value","bar/value",307459966),(101),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"children-2","children-2",1667960814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","foo","node/foo",1263479614),new cljs.core.Keyword("bar","value","bar/value",307459966),(43),new cljs.core.Keyword(null,"children-2","children-2",1667960814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","bar","node/bar",-1380720574),new cljs.core.Keyword("bar","value","bar/value",307459966),(99),new cljs.core.Keyword(null,"children-2","children-2",1667960814),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("node","bar","node/bar",-1380720574),new cljs.core.Keyword("bar","value","bar/value",307459966),(101),new cljs.core.Keyword(null,"children-2","children-2",1667960814),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null);
/**
 * @constructor
 */
om_tutorial.core.BarNode = (function om_tutorial$core$BarNode(){
var this__20072__auto__ = this;
React.Component.apply(this__20072__auto__,arguments);

if(!((this__20072__auto__.initLocalState == null))){
this__20072__auto__.state = this__20072__auto__.initLocalState();
} else {
this__20072__auto__.state = {};
}

return this__20072__auto__;
});

om_tutorial.core.BarNode.prototype = goog.object.clone(React.Component.prototype);

var x31289_31294 = om_tutorial.core.BarNode.prototype;
x31289_31294.componentWillUpdate = ((function (x31289_31294){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
if(((!((this__20007__auto__ == null)))?(((false) || (this__20007__auto__.om$next$Ident$))?true:false):false)){
var ident__20011__auto___31295 = om.next.ident.call(null,this__20007__auto__,om.next.props.call(null,this__20007__auto__));
var next_ident__20012__auto___31296 = om.next.ident.call(null,this__20007__auto__,om.next._next_props.call(null,next_props__20008__auto__,this__20007__auto__));
if(cljs.core.not_EQ_.call(null,ident__20011__auto___31295,next_ident__20012__auto___31296)){
var idxr__20013__auto___31297 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20013__auto___31297 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20013__auto___31297),((function (idxr__20013__auto___31297,ident__20011__auto___31295,next_ident__20012__auto___31296,this__20007__auto__,x31289_31294){
return (function (indexes__20014__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20014__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20011__auto___31295], null),cljs.core.disj,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20012__auto___31296], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20007__auto__);
});})(idxr__20013__auto___31297,ident__20011__auto___31295,next_ident__20012__auto___31296,this__20007__auto__,x31289_31294))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20007__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20007__auto__);
});})(x31289_31294))
;

x31289_31294.shouldComponentUpdate = ((function (x31289_31294){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
var next_children__20010__auto__ = next_props__20008__auto__.children;
var next_props__20008__auto____$1 = goog.object.get(next_props__20008__auto__,"omcljs$value");
var next_props__20008__auto____$2 = (function (){var G__31291 = next_props__20008__auto____$1;
var G__31291__$1 = (((next_props__20008__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__31291):G__31291);
return G__31291__$1;
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
});})(x31289_31294))
;

x31289_31294.componentWillUnmount = ((function (x31289_31294){
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
});})(x31289_31294))
;

x31289_31294.componentDidUpdate = ((function (x31289_31294){
return (function (prev_props__20015__auto__,prev_state__20016__auto__){
var this__20007__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20007__auto__);
});})(x31289_31294))
;

x31289_31294.isMounted = ((function (x31289_31294){
return (function (){
var this__20007__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20007__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31289_31294))
;

x31289_31294.componentWillMount = ((function (x31289_31294){
return (function (){
var this__20007__auto__ = this;
var indexer__20017__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20017__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20017__auto__,this__20007__auto__);
}
});})(x31289_31294))
;


om_tutorial.core.BarNode.prototype.constructor = om_tutorial.core.BarNode;

om_tutorial.core.BarNode.prototype.constructor.displayName = "om-tutorial.core/BarNode";

om_tutorial.core.BarNode.prototype.om$isComponent = true;

var x31292_31298 = om_tutorial.core.BarNode;
x31292_31298.om$next$IQuery$ = true;

x31292_31298.om$next$IQuery$query$arity$1 = ((function (x31292_31298){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("bar","value","bar/value",307459966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
});})(x31292_31298))
;


var x31293_31299 = om_tutorial.core.BarNode.prototype;
x31293_31299.om$next$IQuery$ = true;

x31293_31299.om$next$IQuery$query$arity$1 = ((function (x31293_31299){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("bar","value","bar/value",307459966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
});})(x31293_31299))
;


om_tutorial.core.BarNode.cljs$lang$type = true;

om_tutorial.core.BarNode.cljs$lang$ctorStr = "om-tutorial.core/BarNode";

om_tutorial.core.BarNode.cljs$lang$ctorPrWriter = (function (this__20074__auto__,writer__20075__auto__,opt__20076__auto__){
return cljs.core._write.call(null,writer__20075__auto__,"om-tutorial.core/BarNode");
});
/**
 * @constructor
 */
om_tutorial.core.FooNode = (function om_tutorial$core$FooNode(){
var this__20072__auto__ = this;
React.Component.apply(this__20072__auto__,arguments);

if(!((this__20072__auto__.initLocalState == null))){
this__20072__auto__.state = this__20072__auto__.initLocalState();
} else {
this__20072__auto__.state = {};
}

return this__20072__auto__;
});

om_tutorial.core.FooNode.prototype = goog.object.clone(React.Component.prototype);

var x31304_31309 = om_tutorial.core.FooNode.prototype;
x31304_31309.componentWillUpdate = ((function (x31304_31309){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
if(((!((this__20007__auto__ == null)))?(((false) || (this__20007__auto__.om$next$Ident$))?true:false):false)){
var ident__20011__auto___31310 = om.next.ident.call(null,this__20007__auto__,om.next.props.call(null,this__20007__auto__));
var next_ident__20012__auto___31311 = om.next.ident.call(null,this__20007__auto__,om.next._next_props.call(null,next_props__20008__auto__,this__20007__auto__));
if(cljs.core.not_EQ_.call(null,ident__20011__auto___31310,next_ident__20012__auto___31311)){
var idxr__20013__auto___31312 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20013__auto___31312 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20013__auto___31312),((function (idxr__20013__auto___31312,ident__20011__auto___31310,next_ident__20012__auto___31311,this__20007__auto__,x31304_31309){
return (function (indexes__20014__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20014__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20011__auto___31310], null),cljs.core.disj,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20012__auto___31311], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20007__auto__);
});})(idxr__20013__auto___31312,ident__20011__auto___31310,next_ident__20012__auto___31311,this__20007__auto__,x31304_31309))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20007__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20007__auto__);
});})(x31304_31309))
;

x31304_31309.shouldComponentUpdate = ((function (x31304_31309){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
var next_children__20010__auto__ = next_props__20008__auto__.children;
var next_props__20008__auto____$1 = goog.object.get(next_props__20008__auto__,"omcljs$value");
var next_props__20008__auto____$2 = (function (){var G__31306 = next_props__20008__auto____$1;
var G__31306__$1 = (((next_props__20008__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__31306):G__31306);
return G__31306__$1;
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
});})(x31304_31309))
;

x31304_31309.componentWillUnmount = ((function (x31304_31309){
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
});})(x31304_31309))
;

x31304_31309.componentDidUpdate = ((function (x31304_31309){
return (function (prev_props__20015__auto__,prev_state__20016__auto__){
var this__20007__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20007__auto__);
});})(x31304_31309))
;

x31304_31309.isMounted = ((function (x31304_31309){
return (function (){
var this__20007__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20007__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31304_31309))
;

x31304_31309.componentWillMount = ((function (x31304_31309){
return (function (){
var this__20007__auto__ = this;
var indexer__20017__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20017__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20017__auto__,this__20007__auto__);
}
});})(x31304_31309))
;


om_tutorial.core.FooNode.prototype.constructor = om_tutorial.core.FooNode;

om_tutorial.core.FooNode.prototype.constructor.displayName = "om-tutorial.core/FooNode";

om_tutorial.core.FooNode.prototype.om$isComponent = true;

var x31307_31313 = om_tutorial.core.FooNode;
x31307_31313.om$next$IQuery$ = true;

x31307_31313.om$next$IQuery$query$arity$1 = ((function (x31307_31313){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("foo","value","foo/value",307455555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children-2","children-2",1667960814),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
});})(x31307_31313))
;


var x31308_31314 = om_tutorial.core.FooNode.prototype;
x31308_31314.om$next$IQuery$ = true;

x31308_31314.om$next$IQuery$query$arity$1 = ((function (x31308_31314){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("node","type","node/type",1170314126),new cljs.core.Keyword("foo","value","foo/value",307455555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children-2","children-2",1667960814),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
});})(x31308_31314))
;


om_tutorial.core.FooNode.cljs$lang$type = true;

om_tutorial.core.FooNode.cljs$lang$ctorStr = "om-tutorial.core/FooNode";

om_tutorial.core.FooNode.cljs$lang$ctorPrWriter = (function (this__20074__auto__,writer__20075__auto__,opt__20076__auto__){
return cljs.core._write.call(null,writer__20075__auto__,"om-tutorial.core/FooNode");
});
/**
 * @constructor
 */
om_tutorial.core.ItemNode = (function om_tutorial$core$ItemNode(){
var this__20072__auto__ = this;
React.Component.apply(this__20072__auto__,arguments);

if(!((this__20072__auto__.initLocalState == null))){
this__20072__auto__.state = this__20072__auto__.initLocalState();
} else {
this__20072__auto__.state = {};
}

return this__20072__auto__;
});

om_tutorial.core.ItemNode.prototype = goog.object.clone(React.Component.prototype);

var x31319_31330 = om_tutorial.core.ItemNode.prototype;
x31319_31330.componentWillUpdate = ((function (x31319_31330){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
if(((!((this__20007__auto__ == null)))?(((false) || (this__20007__auto__.om$next$Ident$))?true:false):false)){
var ident__20011__auto___31331 = om.next.ident.call(null,this__20007__auto__,om.next.props.call(null,this__20007__auto__));
var next_ident__20012__auto___31332 = om.next.ident.call(null,this__20007__auto__,om.next._next_props.call(null,next_props__20008__auto__,this__20007__auto__));
if(cljs.core.not_EQ_.call(null,ident__20011__auto___31331,next_ident__20012__auto___31332)){
var idxr__20013__auto___31333 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20013__auto___31333 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20013__auto___31333),((function (idxr__20013__auto___31333,ident__20011__auto___31331,next_ident__20012__auto___31332,this__20007__auto__,x31319_31330){
return (function (indexes__20014__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20014__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20011__auto___31331], null),cljs.core.disj,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20012__auto___31332], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20007__auto__);
});})(idxr__20013__auto___31333,ident__20011__auto___31331,next_ident__20012__auto___31332,this__20007__auto__,x31319_31330))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20007__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20007__auto__);
});})(x31319_31330))
;

x31319_31330.shouldComponentUpdate = ((function (x31319_31330){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
var next_children__20010__auto__ = next_props__20008__auto__.children;
var next_props__20008__auto____$1 = goog.object.get(next_props__20008__auto__,"omcljs$value");
var next_props__20008__auto____$2 = (function (){var G__31321 = next_props__20008__auto____$1;
var G__31321__$1 = (((next_props__20008__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__31321):G__31321);
return G__31321__$1;
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
});})(x31319_31330))
;

x31319_31330.componentWillUnmount = ((function (x31319_31330){
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
});})(x31319_31330))
;

x31319_31330.componentDidUpdate = ((function (x31319_31330){
return (function (prev_props__20015__auto__,prev_state__20016__auto__){
var this__20007__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20007__auto__);
});})(x31319_31330))
;

x31319_31330.isMounted = ((function (x31319_31330){
return (function (){
var this__20007__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20007__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31319_31330))
;

x31319_31330.componentWillMount = ((function (x31319_31330){
return (function (){
var this__20007__auto__ = this;
var indexer__20017__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20017__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20017__auto__,this__20007__auto__);
}
});})(x31319_31330))
;


om_tutorial.core.ItemNode.prototype.constructor = om_tutorial.core.ItemNode;

om_tutorial.core.ItemNode.prototype.constructor.displayName = "om-tutorial.core/ItemNode";

om_tutorial.core.ItemNode.prototype.om$isComponent = true;

var x31322_31334 = om_tutorial.core.ItemNode;
x31322_31334.om$next$Ident$ = true;

x31322_31334.om$next$Ident$ident$arity$2 = ((function (x31322_31334){
return (function (this$,p__31323){
var map__31324 = p__31323;
var map__31324__$1 = ((((!((map__31324 == null)))?((((map__31324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31324):map__31324);
var type = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword("node","type","node/type",1170314126));
var id = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x31322_31334))
;

x31322_31334.om$next$IQuery$ = true;

x31322_31334.om$next$IQuery$query$arity$1 = ((function (x31322_31334){
return (function (this$){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("node","foo","node/foo",1263479614)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tutorial.core.FooNode)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("node","bar","node/bar",-1380720574)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tutorial.core.BarNode))))));
});})(x31322_31334))
;


var x31326_31335 = om_tutorial.core.ItemNode.prototype;
x31326_31335.om$next$Ident$ = true;

x31326_31335.om$next$Ident$ident$arity$2 = ((function (x31326_31335){
return (function (this$,p__31327){
var map__31328 = p__31327;
var map__31328__$1 = ((((!((map__31328 == null)))?((((map__31328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31328):map__31328);
var type = cljs.core.get.call(null,map__31328__$1,new cljs.core.Keyword("node","type","node/type",1170314126));
var id = cljs.core.get.call(null,map__31328__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x31326_31335))
;

x31326_31335.om$next$IQuery$ = true;

x31326_31335.om$next$IQuery$query$arity$1 = ((function (x31326_31335){
return (function (this$){
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("node","foo","node/foo",1263479614)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tutorial.core.FooNode)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("node","bar","node/bar",-1380720574)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tutorial.core.BarNode))))));
});})(x31326_31335))
;


om_tutorial.core.ItemNode.cljs$lang$type = true;

om_tutorial.core.ItemNode.cljs$lang$ctorStr = "om-tutorial.core/ItemNode";

om_tutorial.core.ItemNode.cljs$lang$ctorPrWriter = (function (this__20074__auto__,writer__20075__auto__,opt__20076__auto__){
return cljs.core._write.call(null,writer__20075__auto__,"om-tutorial.core/ItemNode");
});
/**
 * @constructor
 */
om_tutorial.core.Tree = (function om_tutorial$core$Tree(){
var this__20072__auto__ = this;
React.Component.apply(this__20072__auto__,arguments);

if(!((this__20072__auto__.initLocalState == null))){
this__20072__auto__.state = this__20072__auto__.initLocalState();
} else {
this__20072__auto__.state = {};
}

return this__20072__auto__;
});

om_tutorial.core.Tree.prototype = goog.object.clone(React.Component.prototype);

var x31340_31350 = om_tutorial.core.Tree.prototype;
x31340_31350.componentWillUpdate = ((function (x31340_31350){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
if(((!((this__20007__auto__ == null)))?(((false) || (this__20007__auto__.om$next$Ident$))?true:false):false)){
var ident__20011__auto___31351 = om.next.ident.call(null,this__20007__auto__,om.next.props.call(null,this__20007__auto__));
var next_ident__20012__auto___31352 = om.next.ident.call(null,this__20007__auto__,om.next._next_props.call(null,next_props__20008__auto__,this__20007__auto__));
if(cljs.core.not_EQ_.call(null,ident__20011__auto___31351,next_ident__20012__auto___31352)){
var idxr__20013__auto___31353 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20013__auto___31353 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20013__auto___31353),((function (idxr__20013__auto___31353,ident__20011__auto___31351,next_ident__20012__auto___31352,this__20007__auto__,x31340_31350){
return (function (indexes__20014__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20014__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20011__auto___31351], null),cljs.core.disj,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20012__auto___31352], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20007__auto__);
});})(idxr__20013__auto___31353,ident__20011__auto___31351,next_ident__20012__auto___31352,this__20007__auto__,x31340_31350))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20007__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20007__auto__);
});})(x31340_31350))
;

x31340_31350.shouldComponentUpdate = ((function (x31340_31350){
return (function (next_props__20008__auto__,next_state__20009__auto__){
var this__20007__auto__ = this;
var next_children__20010__auto__ = next_props__20008__auto__.children;
var next_props__20008__auto____$1 = goog.object.get(next_props__20008__auto__,"omcljs$value");
var next_props__20008__auto____$2 = (function (){var G__31342 = next_props__20008__auto____$1;
var G__31342__$1 = (((next_props__20008__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__31342):G__31342);
return G__31342__$1;
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
});})(x31340_31350))
;

x31340_31350.componentWillUnmount = ((function (x31340_31350){
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
});})(x31340_31350))
;

x31340_31350.componentDidUpdate = ((function (x31340_31350){
return (function (prev_props__20015__auto__,prev_state__20016__auto__){
var this__20007__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20007__auto__);
});})(x31340_31350))
;

x31340_31350.isMounted = ((function (x31340_31350){
return (function (){
var this__20007__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20007__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31340_31350))
;

x31340_31350.componentWillMount = ((function (x31340_31350){
return (function (){
var this__20007__auto__ = this;
var indexer__20017__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20007__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20017__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20017__auto__,this__20007__auto__);
}
});})(x31340_31350))
;

x31340_31350.render = ((function (x31340_31350){
return (function (){
var this__20006__auto__ = this;
var this$ = this__20006__auto__;
var _STAR_reconciler_STAR_31343 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31344 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31345 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31346 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31347 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20006__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20006__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20006__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20006__auto__);

om.next._STAR_parent_STAR_ = this__20006__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,cljs.pprint.pprint.call(null,om.next.get_query.call(null,this$))),om.util.force_children.call(null,cljs.pprint.pprint.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31347;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31346;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31345;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31344;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31343;
}});})(x31340_31350))
;


om_tutorial.core.Tree.prototype.constructor = om_tutorial.core.Tree;

om_tutorial.core.Tree.prototype.constructor.displayName = "om-tutorial.core/Tree";

om_tutorial.core.Tree.prototype.om$isComponent = true;

var x31348_31354 = om_tutorial.core.Tree;
x31348_31354.om$next$IQuery$ = true;

x31348_31354.om$next$IQuery$query$arity$1 = ((function (x31348_31354){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tree","tree",-196312028)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tutorial.core.ItemNode)))))))))));
});})(x31348_31354))
;


var x31349_31355 = om_tutorial.core.Tree.prototype;
x31349_31355.om$next$IQuery$ = true;

x31349_31355.om$next$IQuery$query$arity$1 = ((function (x31349_31355){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tree","tree",-196312028)),cljs.core._conj.call(null,cljs.core.List.EMPTY,om.next.get_query.call(null,om_tutorial.core.ItemNode)))))))))));
});})(x31349_31355))
;


om_tutorial.core.Tree.cljs$lang$type = true;

om_tutorial.core.Tree.cljs$lang$ctorStr = "om-tutorial.core/Tree";

om_tutorial.core.Tree.cljs$lang$ctorPrWriter = (function (this__20074__auto__,writer__20075__auto__,opt__20076__auto__){
return cljs.core._write.call(null,writer__20075__auto__,"om-tutorial.core/Tree");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Tree,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map