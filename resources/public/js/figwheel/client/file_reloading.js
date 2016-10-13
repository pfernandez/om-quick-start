// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24873_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24873_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24878 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24879 = null;
var count__24880 = (0);
var i__24881 = (0);
while(true){
if((i__24881 < count__24880)){
var n = cljs.core._nth.call(null,chunk__24879,i__24881);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24882 = seq__24878;
var G__24883 = chunk__24879;
var G__24884 = count__24880;
var G__24885 = (i__24881 + (1));
seq__24878 = G__24882;
chunk__24879 = G__24883;
count__24880 = G__24884;
i__24881 = G__24885;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24878);
if(temp__4425__auto__){
var seq__24878__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24878__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24878__$1);
var G__24886 = cljs.core.chunk_rest.call(null,seq__24878__$1);
var G__24887 = c__17574__auto__;
var G__24888 = cljs.core.count.call(null,c__17574__auto__);
var G__24889 = (0);
seq__24878 = G__24886;
chunk__24879 = G__24887;
count__24880 = G__24888;
i__24881 = G__24889;
continue;
} else {
var n = cljs.core.first.call(null,seq__24878__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24890 = cljs.core.next.call(null,seq__24878__$1);
var G__24891 = null;
var G__24892 = (0);
var G__24893 = (0);
seq__24878 = G__24890;
chunk__24879 = G__24891;
count__24880 = G__24892;
i__24881 = G__24893;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24932_24939 = cljs.core.seq.call(null,deps);
var chunk__24933_24940 = null;
var count__24934_24941 = (0);
var i__24935_24942 = (0);
while(true){
if((i__24935_24942 < count__24934_24941)){
var dep_24943 = cljs.core._nth.call(null,chunk__24933_24940,i__24935_24942);
topo_sort_helper_STAR_.call(null,dep_24943,(depth + (1)),state);

var G__24944 = seq__24932_24939;
var G__24945 = chunk__24933_24940;
var G__24946 = count__24934_24941;
var G__24947 = (i__24935_24942 + (1));
seq__24932_24939 = G__24944;
chunk__24933_24940 = G__24945;
count__24934_24941 = G__24946;
i__24935_24942 = G__24947;
continue;
} else {
var temp__4425__auto___24948 = cljs.core.seq.call(null,seq__24932_24939);
if(temp__4425__auto___24948){
var seq__24932_24949__$1 = temp__4425__auto___24948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24932_24949__$1)){
var c__17574__auto___24950 = cljs.core.chunk_first.call(null,seq__24932_24949__$1);
var G__24951 = cljs.core.chunk_rest.call(null,seq__24932_24949__$1);
var G__24952 = c__17574__auto___24950;
var G__24953 = cljs.core.count.call(null,c__17574__auto___24950);
var G__24954 = (0);
seq__24932_24939 = G__24951;
chunk__24933_24940 = G__24952;
count__24934_24941 = G__24953;
i__24935_24942 = G__24954;
continue;
} else {
var dep_24955 = cljs.core.first.call(null,seq__24932_24949__$1);
topo_sort_helper_STAR_.call(null,dep_24955,(depth + (1)),state);

var G__24956 = cljs.core.next.call(null,seq__24932_24949__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__24932_24939 = G__24956;
chunk__24933_24940 = G__24957;
count__24934_24941 = G__24958;
i__24935_24942 = G__24959;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24936){
var vec__24938 = p__24936;
var x = cljs.core.nth.call(null,vec__24938,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24938,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24938,x,xs,get_deps__$1){
return (function (p1__24894_SHARP_){
return clojure.set.difference.call(null,p1__24894_SHARP_,x);
});})(vec__24938,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24972 = cljs.core.seq.call(null,provides);
var chunk__24973 = null;
var count__24974 = (0);
var i__24975 = (0);
while(true){
if((i__24975 < count__24974)){
var prov = cljs.core._nth.call(null,chunk__24973,i__24975);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24976_24984 = cljs.core.seq.call(null,requires);
var chunk__24977_24985 = null;
var count__24978_24986 = (0);
var i__24979_24987 = (0);
while(true){
if((i__24979_24987 < count__24978_24986)){
var req_24988 = cljs.core._nth.call(null,chunk__24977_24985,i__24979_24987);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24988,prov);

var G__24989 = seq__24976_24984;
var G__24990 = chunk__24977_24985;
var G__24991 = count__24978_24986;
var G__24992 = (i__24979_24987 + (1));
seq__24976_24984 = G__24989;
chunk__24977_24985 = G__24990;
count__24978_24986 = G__24991;
i__24979_24987 = G__24992;
continue;
} else {
var temp__4425__auto___24993 = cljs.core.seq.call(null,seq__24976_24984);
if(temp__4425__auto___24993){
var seq__24976_24994__$1 = temp__4425__auto___24993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24976_24994__$1)){
var c__17574__auto___24995 = cljs.core.chunk_first.call(null,seq__24976_24994__$1);
var G__24996 = cljs.core.chunk_rest.call(null,seq__24976_24994__$1);
var G__24997 = c__17574__auto___24995;
var G__24998 = cljs.core.count.call(null,c__17574__auto___24995);
var G__24999 = (0);
seq__24976_24984 = G__24996;
chunk__24977_24985 = G__24997;
count__24978_24986 = G__24998;
i__24979_24987 = G__24999;
continue;
} else {
var req_25000 = cljs.core.first.call(null,seq__24976_24994__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25000,prov);

var G__25001 = cljs.core.next.call(null,seq__24976_24994__$1);
var G__25002 = null;
var G__25003 = (0);
var G__25004 = (0);
seq__24976_24984 = G__25001;
chunk__24977_24985 = G__25002;
count__24978_24986 = G__25003;
i__24979_24987 = G__25004;
continue;
}
} else {
}
}
break;
}

var G__25005 = seq__24972;
var G__25006 = chunk__24973;
var G__25007 = count__24974;
var G__25008 = (i__24975 + (1));
seq__24972 = G__25005;
chunk__24973 = G__25006;
count__24974 = G__25007;
i__24975 = G__25008;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24972);
if(temp__4425__auto__){
var seq__24972__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24972__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24972__$1);
var G__25009 = cljs.core.chunk_rest.call(null,seq__24972__$1);
var G__25010 = c__17574__auto__;
var G__25011 = cljs.core.count.call(null,c__17574__auto__);
var G__25012 = (0);
seq__24972 = G__25009;
chunk__24973 = G__25010;
count__24974 = G__25011;
i__24975 = G__25012;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24972__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24980_25013 = cljs.core.seq.call(null,requires);
var chunk__24981_25014 = null;
var count__24982_25015 = (0);
var i__24983_25016 = (0);
while(true){
if((i__24983_25016 < count__24982_25015)){
var req_25017 = cljs.core._nth.call(null,chunk__24981_25014,i__24983_25016);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25017,prov);

var G__25018 = seq__24980_25013;
var G__25019 = chunk__24981_25014;
var G__25020 = count__24982_25015;
var G__25021 = (i__24983_25016 + (1));
seq__24980_25013 = G__25018;
chunk__24981_25014 = G__25019;
count__24982_25015 = G__25020;
i__24983_25016 = G__25021;
continue;
} else {
var temp__4425__auto___25022__$1 = cljs.core.seq.call(null,seq__24980_25013);
if(temp__4425__auto___25022__$1){
var seq__24980_25023__$1 = temp__4425__auto___25022__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24980_25023__$1)){
var c__17574__auto___25024 = cljs.core.chunk_first.call(null,seq__24980_25023__$1);
var G__25025 = cljs.core.chunk_rest.call(null,seq__24980_25023__$1);
var G__25026 = c__17574__auto___25024;
var G__25027 = cljs.core.count.call(null,c__17574__auto___25024);
var G__25028 = (0);
seq__24980_25013 = G__25025;
chunk__24981_25014 = G__25026;
count__24982_25015 = G__25027;
i__24983_25016 = G__25028;
continue;
} else {
var req_25029 = cljs.core.first.call(null,seq__24980_25023__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25029,prov);

var G__25030 = cljs.core.next.call(null,seq__24980_25023__$1);
var G__25031 = null;
var G__25032 = (0);
var G__25033 = (0);
seq__24980_25013 = G__25030;
chunk__24981_25014 = G__25031;
count__24982_25015 = G__25032;
i__24983_25016 = G__25033;
continue;
}
} else {
}
}
break;
}

var G__25034 = cljs.core.next.call(null,seq__24972__$1);
var G__25035 = null;
var G__25036 = (0);
var G__25037 = (0);
seq__24972 = G__25034;
chunk__24973 = G__25035;
count__24974 = G__25036;
i__24975 = G__25037;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25042_25046 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25043_25047 = null;
var count__25044_25048 = (0);
var i__25045_25049 = (0);
while(true){
if((i__25045_25049 < count__25044_25048)){
var ns_25050 = cljs.core._nth.call(null,chunk__25043_25047,i__25045_25049);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25050);

var G__25051 = seq__25042_25046;
var G__25052 = chunk__25043_25047;
var G__25053 = count__25044_25048;
var G__25054 = (i__25045_25049 + (1));
seq__25042_25046 = G__25051;
chunk__25043_25047 = G__25052;
count__25044_25048 = G__25053;
i__25045_25049 = G__25054;
continue;
} else {
var temp__4425__auto___25055 = cljs.core.seq.call(null,seq__25042_25046);
if(temp__4425__auto___25055){
var seq__25042_25056__$1 = temp__4425__auto___25055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25042_25056__$1)){
var c__17574__auto___25057 = cljs.core.chunk_first.call(null,seq__25042_25056__$1);
var G__25058 = cljs.core.chunk_rest.call(null,seq__25042_25056__$1);
var G__25059 = c__17574__auto___25057;
var G__25060 = cljs.core.count.call(null,c__17574__auto___25057);
var G__25061 = (0);
seq__25042_25046 = G__25058;
chunk__25043_25047 = G__25059;
count__25044_25048 = G__25060;
i__25045_25049 = G__25061;
continue;
} else {
var ns_25062 = cljs.core.first.call(null,seq__25042_25056__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25062);

var G__25063 = cljs.core.next.call(null,seq__25042_25056__$1);
var G__25064 = null;
var G__25065 = (0);
var G__25066 = (0);
seq__25042_25046 = G__25063;
chunk__25043_25047 = G__25064;
count__25044_25048 = G__25065;
i__25045_25049 = G__25066;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25067__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25068__i = 0, G__25068__a = new Array(arguments.length -  0);
while (G__25068__i < G__25068__a.length) {G__25068__a[G__25068__i] = arguments[G__25068__i + 0]; ++G__25068__i;}
  args = new cljs.core.IndexedSeq(G__25068__a,0);
} 
return G__25067__delegate.call(this,args);};
G__25067.cljs$lang$maxFixedArity = 0;
G__25067.cljs$lang$applyTo = (function (arglist__25069){
var args = cljs.core.seq(arglist__25069);
return G__25067__delegate(args);
});
G__25067.cljs$core$IFn$_invoke$arity$variadic = G__25067__delegate;
return G__25067;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25071 = cljs.core._EQ_;
var expr__25072 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25071.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25072))){
var path_parts = ((function (pred__25071,expr__25072){
return (function (p1__25070_SHARP_){
return clojure.string.split.call(null,p1__25070_SHARP_,/[\/\\]/);
});})(pred__25071,expr__25072))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25071,expr__25072){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25074){if((e25074 instanceof Error)){
var e = e25074;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25074;

}
}})());
});
;})(path_parts,sep,root,pred__25071,expr__25072))
} else {
if(cljs.core.truth_(pred__25071.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25072))){
return ((function (pred__25071,expr__25072){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25071,expr__25072){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25071,expr__25072))
);

return deferred.addErrback(((function (deferred,pred__25071,expr__25072){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25071,expr__25072))
);
});
;})(pred__25071,expr__25072))
} else {
return ((function (pred__25071,expr__25072){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25071,expr__25072))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25075,callback){
var map__25078 = p__25075;
var map__25078__$1 = ((((!((map__25078 == null)))?((((map__25078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25078):map__25078);
var file_msg = map__25078__$1;
var request_url = cljs.core.get.call(null,map__25078__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25078,map__25078__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25078,map__25078__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__){
return (function (state_25102){
var state_val_25103 = (state_25102[(1)]);
if((state_val_25103 === (7))){
var inst_25098 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25104_25124 = state_25102__$1;
(statearr_25104_25124[(2)] = inst_25098);

(statearr_25104_25124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (1))){
var state_25102__$1 = state_25102;
var statearr_25105_25125 = state_25102__$1;
(statearr_25105_25125[(2)] = null);

(statearr_25105_25125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (4))){
var inst_25082 = (state_25102[(7)]);
var inst_25082__$1 = (state_25102[(2)]);
var state_25102__$1 = (function (){var statearr_25106 = state_25102;
(statearr_25106[(7)] = inst_25082__$1);

return statearr_25106;
})();
if(cljs.core.truth_(inst_25082__$1)){
var statearr_25107_25126 = state_25102__$1;
(statearr_25107_25126[(1)] = (5));

} else {
var statearr_25108_25127 = state_25102__$1;
(statearr_25108_25127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (6))){
var state_25102__$1 = state_25102;
var statearr_25109_25128 = state_25102__$1;
(statearr_25109_25128[(2)] = null);

(statearr_25109_25128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (3))){
var inst_25100 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25102__$1,inst_25100);
} else {
if((state_val_25103 === (2))){
var state_25102__$1 = state_25102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25102__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25103 === (11))){
var inst_25094 = (state_25102[(2)]);
var state_25102__$1 = (function (){var statearr_25110 = state_25102;
(statearr_25110[(8)] = inst_25094);

return statearr_25110;
})();
var statearr_25111_25129 = state_25102__$1;
(statearr_25111_25129[(2)] = null);

(statearr_25111_25129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (9))){
var inst_25086 = (state_25102[(9)]);
var inst_25088 = (state_25102[(10)]);
var inst_25090 = inst_25088.call(null,inst_25086);
var state_25102__$1 = state_25102;
var statearr_25112_25130 = state_25102__$1;
(statearr_25112_25130[(2)] = inst_25090);

(statearr_25112_25130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (5))){
var inst_25082 = (state_25102[(7)]);
var inst_25084 = figwheel.client.file_reloading.blocking_load.call(null,inst_25082);
var state_25102__$1 = state_25102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25102__$1,(8),inst_25084);
} else {
if((state_val_25103 === (10))){
var inst_25086 = (state_25102[(9)]);
var inst_25092 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25086);
var state_25102__$1 = state_25102;
var statearr_25113_25131 = state_25102__$1;
(statearr_25113_25131[(2)] = inst_25092);

(statearr_25113_25131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (8))){
var inst_25082 = (state_25102[(7)]);
var inst_25088 = (state_25102[(10)]);
var inst_25086 = (state_25102[(2)]);
var inst_25087 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25088__$1 = cljs.core.get.call(null,inst_25087,inst_25082);
var state_25102__$1 = (function (){var statearr_25114 = state_25102;
(statearr_25114[(9)] = inst_25086);

(statearr_25114[(10)] = inst_25088__$1);

return statearr_25114;
})();
if(cljs.core.truth_(inst_25088__$1)){
var statearr_25115_25132 = state_25102__$1;
(statearr_25115_25132[(1)] = (9));

} else {
var statearr_25116_25133 = state_25102__$1;
(statearr_25116_25133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21930__auto__))
;
return ((function (switch__21818__auto__,c__21930__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21819__auto__ = null;
var figwheel$client$file_reloading$state_machine__21819__auto____0 = (function (){
var statearr_25120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25120[(0)] = figwheel$client$file_reloading$state_machine__21819__auto__);

(statearr_25120[(1)] = (1));

return statearr_25120;
});
var figwheel$client$file_reloading$state_machine__21819__auto____1 = (function (state_25102){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_25102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e25121){if((e25121 instanceof Object)){
var ex__21822__auto__ = e25121;
var statearr_25122_25134 = state_25102;
(statearr_25122_25134[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25135 = state_25102;
state_25102 = G__25135;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21819__auto__ = function(state_25102){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21819__auto____1.call(this,state_25102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21819__auto____0;
figwheel$client$file_reloading$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21819__auto____1;
return figwheel$client$file_reloading$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__))
})();
var state__21932__auto__ = (function (){var statearr_25123 = f__21931__auto__.call(null);
(statearr_25123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_25123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__))
);

return c__21930__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25136,callback){
var map__25139 = p__25136;
var map__25139__$1 = ((((!((map__25139 == null)))?((((map__25139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25139):map__25139);
var file_msg = map__25139__$1;
var namespace = cljs.core.get.call(null,map__25139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25139,map__25139__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25139,map__25139__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25141){
var map__25144 = p__25141;
var map__25144__$1 = ((((!((map__25144 == null)))?((((map__25144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25144):map__25144);
var file_msg = map__25144__$1;
var namespace = cljs.core.get.call(null,map__25144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25146,callback){
var map__25149 = p__25146;
var map__25149__$1 = ((((!((map__25149 == null)))?((((map__25149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25149):map__25149);
var file_msg = map__25149__$1;
var request_url = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21930__auto___25237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___25237,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___25237,out){
return (function (state_25219){
var state_val_25220 = (state_25219[(1)]);
if((state_val_25220 === (1))){
var inst_25197 = cljs.core.nth.call(null,files,(0),null);
var inst_25198 = cljs.core.nthnext.call(null,files,(1));
var inst_25199 = files;
var state_25219__$1 = (function (){var statearr_25221 = state_25219;
(statearr_25221[(7)] = inst_25199);

(statearr_25221[(8)] = inst_25197);

(statearr_25221[(9)] = inst_25198);

return statearr_25221;
})();
var statearr_25222_25238 = state_25219__$1;
(statearr_25222_25238[(2)] = null);

(statearr_25222_25238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (2))){
var inst_25199 = (state_25219[(7)]);
var inst_25202 = (state_25219[(10)]);
var inst_25202__$1 = cljs.core.nth.call(null,inst_25199,(0),null);
var inst_25203 = cljs.core.nthnext.call(null,inst_25199,(1));
var inst_25204 = (inst_25202__$1 == null);
var inst_25205 = cljs.core.not.call(null,inst_25204);
var state_25219__$1 = (function (){var statearr_25223 = state_25219;
(statearr_25223[(11)] = inst_25203);

(statearr_25223[(10)] = inst_25202__$1);

return statearr_25223;
})();
if(inst_25205){
var statearr_25224_25239 = state_25219__$1;
(statearr_25224_25239[(1)] = (4));

} else {
var statearr_25225_25240 = state_25219__$1;
(statearr_25225_25240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (3))){
var inst_25217 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25219__$1,inst_25217);
} else {
if((state_val_25220 === (4))){
var inst_25202 = (state_25219[(10)]);
var inst_25207 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25202);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25219__$1,(7),inst_25207);
} else {
if((state_val_25220 === (5))){
var inst_25213 = cljs.core.async.close_BANG_.call(null,out);
var state_25219__$1 = state_25219;
var statearr_25226_25241 = state_25219__$1;
(statearr_25226_25241[(2)] = inst_25213);

(statearr_25226_25241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (6))){
var inst_25215 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25227_25242 = state_25219__$1;
(statearr_25227_25242[(2)] = inst_25215);

(statearr_25227_25242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (7))){
var inst_25203 = (state_25219[(11)]);
var inst_25209 = (state_25219[(2)]);
var inst_25210 = cljs.core.async.put_BANG_.call(null,out,inst_25209);
var inst_25199 = inst_25203;
var state_25219__$1 = (function (){var statearr_25228 = state_25219;
(statearr_25228[(12)] = inst_25210);

(statearr_25228[(7)] = inst_25199);

return statearr_25228;
})();
var statearr_25229_25243 = state_25219__$1;
(statearr_25229_25243[(2)] = null);

(statearr_25229_25243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21930__auto___25237,out))
;
return ((function (switch__21818__auto__,c__21930__auto___25237,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto____0 = (function (){
var statearr_25233 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25233[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto__);

(statearr_25233[(1)] = (1));

return statearr_25233;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto____1 = (function (state_25219){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_25219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object)){
var ex__21822__auto__ = e25234;
var statearr_25235_25244 = state_25219;
(statearr_25235_25244[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25245 = state_25219;
state_25219 = G__25245;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___25237,out))
})();
var state__21932__auto__ = (function (){var statearr_25236 = f__21931__auto__.call(null);
(statearr_25236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___25237);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___25237,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25246,opts){
var map__25250 = p__25246;
var map__25250__$1 = ((((!((map__25250 == null)))?((((map__25250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25250):map__25250);
var eval_body__$1 = cljs.core.get.call(null,map__25250__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25252){var e = e25252;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25253_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25253_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25258){
var vec__25259 = p__25258;
var k = cljs.core.nth.call(null,vec__25259,(0),null);
var v = cljs.core.nth.call(null,vec__25259,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25260){
var vec__25261 = p__25260;
var k = cljs.core.nth.call(null,vec__25261,(0),null);
var v = cljs.core.nth.call(null,vec__25261,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25265,p__25266){
var map__25513 = p__25265;
var map__25513__$1 = ((((!((map__25513 == null)))?((((map__25513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25513):map__25513);
var opts = map__25513__$1;
var before_jsload = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25514 = p__25266;
var map__25514__$1 = ((((!((map__25514 == null)))?((((map__25514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25514):map__25514);
var msg = map__25514__$1;
var files = cljs.core.get.call(null,map__25514__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25514__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25514__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25667){
var state_val_25668 = (state_25667[(1)]);
if((state_val_25668 === (7))){
var inst_25530 = (state_25667[(7)]);
var inst_25531 = (state_25667[(8)]);
var inst_25528 = (state_25667[(9)]);
var inst_25529 = (state_25667[(10)]);
var inst_25536 = cljs.core._nth.call(null,inst_25529,inst_25531);
var inst_25537 = figwheel.client.file_reloading.eval_body.call(null,inst_25536,opts);
var inst_25538 = (inst_25531 + (1));
var tmp25669 = inst_25530;
var tmp25670 = inst_25528;
var tmp25671 = inst_25529;
var inst_25528__$1 = tmp25670;
var inst_25529__$1 = tmp25671;
var inst_25530__$1 = tmp25669;
var inst_25531__$1 = inst_25538;
var state_25667__$1 = (function (){var statearr_25672 = state_25667;
(statearr_25672[(11)] = inst_25537);

(statearr_25672[(7)] = inst_25530__$1);

(statearr_25672[(8)] = inst_25531__$1);

(statearr_25672[(9)] = inst_25528__$1);

(statearr_25672[(10)] = inst_25529__$1);

return statearr_25672;
})();
var statearr_25673_25759 = state_25667__$1;
(statearr_25673_25759[(2)] = null);

(statearr_25673_25759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (20))){
var inst_25571 = (state_25667[(12)]);
var inst_25579 = figwheel.client.file_reloading.sort_files.call(null,inst_25571);
var state_25667__$1 = state_25667;
var statearr_25674_25760 = state_25667__$1;
(statearr_25674_25760[(2)] = inst_25579);

(statearr_25674_25760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (27))){
var state_25667__$1 = state_25667;
var statearr_25675_25761 = state_25667__$1;
(statearr_25675_25761[(2)] = null);

(statearr_25675_25761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (1))){
var inst_25520 = (state_25667[(13)]);
var inst_25517 = before_jsload.call(null,files);
var inst_25518 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25519 = (function (){return ((function (inst_25520,inst_25517,inst_25518,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25262_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25262_SHARP_);
});
;})(inst_25520,inst_25517,inst_25518,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25520__$1 = cljs.core.filter.call(null,inst_25519,files);
var inst_25521 = cljs.core.not_empty.call(null,inst_25520__$1);
var state_25667__$1 = (function (){var statearr_25676 = state_25667;
(statearr_25676[(14)] = inst_25518);

(statearr_25676[(13)] = inst_25520__$1);

(statearr_25676[(15)] = inst_25517);

return statearr_25676;
})();
if(cljs.core.truth_(inst_25521)){
var statearr_25677_25762 = state_25667__$1;
(statearr_25677_25762[(1)] = (2));

} else {
var statearr_25678_25763 = state_25667__$1;
(statearr_25678_25763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (24))){
var state_25667__$1 = state_25667;
var statearr_25679_25764 = state_25667__$1;
(statearr_25679_25764[(2)] = null);

(statearr_25679_25764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (39))){
var inst_25621 = (state_25667[(16)]);
var state_25667__$1 = state_25667;
var statearr_25680_25765 = state_25667__$1;
(statearr_25680_25765[(2)] = inst_25621);

(statearr_25680_25765[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (46))){
var inst_25662 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25681_25766 = state_25667__$1;
(statearr_25681_25766[(2)] = inst_25662);

(statearr_25681_25766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (4))){
var inst_25565 = (state_25667[(2)]);
var inst_25566 = cljs.core.List.EMPTY;
var inst_25567 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25566);
var inst_25568 = (function (){return ((function (inst_25565,inst_25566,inst_25567,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25263_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25263_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25263_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_25565,inst_25566,inst_25567,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25569 = cljs.core.filter.call(null,inst_25568,files);
var inst_25570 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25571 = cljs.core.concat.call(null,inst_25569,inst_25570);
var state_25667__$1 = (function (){var statearr_25682 = state_25667;
(statearr_25682[(12)] = inst_25571);

(statearr_25682[(17)] = inst_25567);

(statearr_25682[(18)] = inst_25565);

return statearr_25682;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25683_25767 = state_25667__$1;
(statearr_25683_25767[(1)] = (16));

} else {
var statearr_25684_25768 = state_25667__$1;
(statearr_25684_25768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (15))){
var inst_25555 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25685_25769 = state_25667__$1;
(statearr_25685_25769[(2)] = inst_25555);

(statearr_25685_25769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (21))){
var inst_25581 = (state_25667[(19)]);
var inst_25581__$1 = (state_25667[(2)]);
var inst_25582 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25581__$1);
var state_25667__$1 = (function (){var statearr_25686 = state_25667;
(statearr_25686[(19)] = inst_25581__$1);

return statearr_25686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25667__$1,(22),inst_25582);
} else {
if((state_val_25668 === (31))){
var inst_25665 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25667__$1,inst_25665);
} else {
if((state_val_25668 === (32))){
var inst_25621 = (state_25667[(16)]);
var inst_25626 = inst_25621.cljs$lang$protocol_mask$partition0$;
var inst_25627 = (inst_25626 & (64));
var inst_25628 = inst_25621.cljs$core$ISeq$;
var inst_25629 = (inst_25627) || (inst_25628);
var state_25667__$1 = state_25667;
if(cljs.core.truth_(inst_25629)){
var statearr_25687_25770 = state_25667__$1;
(statearr_25687_25770[(1)] = (35));

} else {
var statearr_25688_25771 = state_25667__$1;
(statearr_25688_25771[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (40))){
var inst_25642 = (state_25667[(20)]);
var inst_25641 = (state_25667[(2)]);
var inst_25642__$1 = cljs.core.get.call(null,inst_25641,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25643 = cljs.core.get.call(null,inst_25641,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25644 = cljs.core.not_empty.call(null,inst_25642__$1);
var state_25667__$1 = (function (){var statearr_25689 = state_25667;
(statearr_25689[(21)] = inst_25643);

(statearr_25689[(20)] = inst_25642__$1);

return statearr_25689;
})();
if(cljs.core.truth_(inst_25644)){
var statearr_25690_25772 = state_25667__$1;
(statearr_25690_25772[(1)] = (41));

} else {
var statearr_25691_25773 = state_25667__$1;
(statearr_25691_25773[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (33))){
var state_25667__$1 = state_25667;
var statearr_25692_25774 = state_25667__$1;
(statearr_25692_25774[(2)] = false);

(statearr_25692_25774[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (13))){
var inst_25541 = (state_25667[(22)]);
var inst_25545 = cljs.core.chunk_first.call(null,inst_25541);
var inst_25546 = cljs.core.chunk_rest.call(null,inst_25541);
var inst_25547 = cljs.core.count.call(null,inst_25545);
var inst_25528 = inst_25546;
var inst_25529 = inst_25545;
var inst_25530 = inst_25547;
var inst_25531 = (0);
var state_25667__$1 = (function (){var statearr_25693 = state_25667;
(statearr_25693[(7)] = inst_25530);

(statearr_25693[(8)] = inst_25531);

(statearr_25693[(9)] = inst_25528);

(statearr_25693[(10)] = inst_25529);

return statearr_25693;
})();
var statearr_25694_25775 = state_25667__$1;
(statearr_25694_25775[(2)] = null);

(statearr_25694_25775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (22))){
var inst_25581 = (state_25667[(19)]);
var inst_25584 = (state_25667[(23)]);
var inst_25585 = (state_25667[(24)]);
var inst_25589 = (state_25667[(25)]);
var inst_25584__$1 = (state_25667[(2)]);
var inst_25585__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25584__$1);
var inst_25586 = (function (){var all_files = inst_25581;
var res_SINGLEQUOTE_ = inst_25584__$1;
var res = inst_25585__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25581,inst_25584,inst_25585,inst_25589,inst_25584__$1,inst_25585__$1,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25264_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25264_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25581,inst_25584,inst_25585,inst_25589,inst_25584__$1,inst_25585__$1,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25587 = cljs.core.filter.call(null,inst_25586,inst_25584__$1);
var inst_25588 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25589__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25588);
var inst_25590 = cljs.core.not_empty.call(null,inst_25589__$1);
var state_25667__$1 = (function (){var statearr_25695 = state_25667;
(statearr_25695[(23)] = inst_25584__$1);

(statearr_25695[(26)] = inst_25587);

(statearr_25695[(24)] = inst_25585__$1);

(statearr_25695[(25)] = inst_25589__$1);

return statearr_25695;
})();
if(cljs.core.truth_(inst_25590)){
var statearr_25696_25776 = state_25667__$1;
(statearr_25696_25776[(1)] = (23));

} else {
var statearr_25697_25777 = state_25667__$1;
(statearr_25697_25777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (36))){
var state_25667__$1 = state_25667;
var statearr_25698_25778 = state_25667__$1;
(statearr_25698_25778[(2)] = false);

(statearr_25698_25778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (41))){
var inst_25642 = (state_25667[(20)]);
var inst_25646 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25647 = cljs.core.map.call(null,inst_25646,inst_25642);
var inst_25648 = cljs.core.pr_str.call(null,inst_25647);
var inst_25649 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25648)].join('');
var inst_25650 = figwheel.client.utils.log.call(null,inst_25649);
var state_25667__$1 = state_25667;
var statearr_25699_25779 = state_25667__$1;
(statearr_25699_25779[(2)] = inst_25650);

(statearr_25699_25779[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (43))){
var inst_25643 = (state_25667[(21)]);
var inst_25653 = (state_25667[(2)]);
var inst_25654 = cljs.core.not_empty.call(null,inst_25643);
var state_25667__$1 = (function (){var statearr_25700 = state_25667;
(statearr_25700[(27)] = inst_25653);

return statearr_25700;
})();
if(cljs.core.truth_(inst_25654)){
var statearr_25701_25780 = state_25667__$1;
(statearr_25701_25780[(1)] = (44));

} else {
var statearr_25702_25781 = state_25667__$1;
(statearr_25702_25781[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (29))){
var inst_25581 = (state_25667[(19)]);
var inst_25584 = (state_25667[(23)]);
var inst_25587 = (state_25667[(26)]);
var inst_25585 = (state_25667[(24)]);
var inst_25621 = (state_25667[(16)]);
var inst_25589 = (state_25667[(25)]);
var inst_25617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25620 = (function (){var all_files = inst_25581;
var res_SINGLEQUOTE_ = inst_25584;
var res = inst_25585;
var files_not_loaded = inst_25587;
var dependencies_that_loaded = inst_25589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25621,inst_25589,inst_25617,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25619){
var map__25703 = p__25619;
var map__25703__$1 = ((((!((map__25703 == null)))?((((map__25703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25703):map__25703);
var namespace = cljs.core.get.call(null,map__25703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25621,inst_25589,inst_25617,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25621__$1 = cljs.core.group_by.call(null,inst_25620,inst_25587);
var inst_25623 = (inst_25621__$1 == null);
var inst_25624 = cljs.core.not.call(null,inst_25623);
var state_25667__$1 = (function (){var statearr_25705 = state_25667;
(statearr_25705[(16)] = inst_25621__$1);

(statearr_25705[(28)] = inst_25617);

return statearr_25705;
})();
if(inst_25624){
var statearr_25706_25782 = state_25667__$1;
(statearr_25706_25782[(1)] = (32));

} else {
var statearr_25707_25783 = state_25667__$1;
(statearr_25707_25783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (44))){
var inst_25643 = (state_25667[(21)]);
var inst_25656 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25643);
var inst_25657 = cljs.core.pr_str.call(null,inst_25656);
var inst_25658 = [cljs.core.str("not required: "),cljs.core.str(inst_25657)].join('');
var inst_25659 = figwheel.client.utils.log.call(null,inst_25658);
var state_25667__$1 = state_25667;
var statearr_25708_25784 = state_25667__$1;
(statearr_25708_25784[(2)] = inst_25659);

(statearr_25708_25784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (6))){
var inst_25562 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25709_25785 = state_25667__$1;
(statearr_25709_25785[(2)] = inst_25562);

(statearr_25709_25785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (28))){
var inst_25587 = (state_25667[(26)]);
var inst_25614 = (state_25667[(2)]);
var inst_25615 = cljs.core.not_empty.call(null,inst_25587);
var state_25667__$1 = (function (){var statearr_25710 = state_25667;
(statearr_25710[(29)] = inst_25614);

return statearr_25710;
})();
if(cljs.core.truth_(inst_25615)){
var statearr_25711_25786 = state_25667__$1;
(statearr_25711_25786[(1)] = (29));

} else {
var statearr_25712_25787 = state_25667__$1;
(statearr_25712_25787[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (25))){
var inst_25585 = (state_25667[(24)]);
var inst_25601 = (state_25667[(2)]);
var inst_25602 = cljs.core.not_empty.call(null,inst_25585);
var state_25667__$1 = (function (){var statearr_25713 = state_25667;
(statearr_25713[(30)] = inst_25601);

return statearr_25713;
})();
if(cljs.core.truth_(inst_25602)){
var statearr_25714_25788 = state_25667__$1;
(statearr_25714_25788[(1)] = (26));

} else {
var statearr_25715_25789 = state_25667__$1;
(statearr_25715_25789[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (34))){
var inst_25636 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
if(cljs.core.truth_(inst_25636)){
var statearr_25716_25790 = state_25667__$1;
(statearr_25716_25790[(1)] = (38));

} else {
var statearr_25717_25791 = state_25667__$1;
(statearr_25717_25791[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (17))){
var state_25667__$1 = state_25667;
var statearr_25718_25792 = state_25667__$1;
(statearr_25718_25792[(2)] = recompile_dependents);

(statearr_25718_25792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (3))){
var state_25667__$1 = state_25667;
var statearr_25719_25793 = state_25667__$1;
(statearr_25719_25793[(2)] = null);

(statearr_25719_25793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (12))){
var inst_25558 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25720_25794 = state_25667__$1;
(statearr_25720_25794[(2)] = inst_25558);

(statearr_25720_25794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (2))){
var inst_25520 = (state_25667[(13)]);
var inst_25527 = cljs.core.seq.call(null,inst_25520);
var inst_25528 = inst_25527;
var inst_25529 = null;
var inst_25530 = (0);
var inst_25531 = (0);
var state_25667__$1 = (function (){var statearr_25721 = state_25667;
(statearr_25721[(7)] = inst_25530);

(statearr_25721[(8)] = inst_25531);

(statearr_25721[(9)] = inst_25528);

(statearr_25721[(10)] = inst_25529);

return statearr_25721;
})();
var statearr_25722_25795 = state_25667__$1;
(statearr_25722_25795[(2)] = null);

(statearr_25722_25795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (23))){
var inst_25581 = (state_25667[(19)]);
var inst_25584 = (state_25667[(23)]);
var inst_25587 = (state_25667[(26)]);
var inst_25585 = (state_25667[(24)]);
var inst_25589 = (state_25667[(25)]);
var inst_25592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25594 = (function (){var all_files = inst_25581;
var res_SINGLEQUOTE_ = inst_25584;
var res = inst_25585;
var files_not_loaded = inst_25587;
var dependencies_that_loaded = inst_25589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25589,inst_25592,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25593){
var map__25723 = p__25593;
var map__25723__$1 = ((((!((map__25723 == null)))?((((map__25723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25723):map__25723);
var request_url = cljs.core.get.call(null,map__25723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25589,inst_25592,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25595 = cljs.core.reverse.call(null,inst_25589);
var inst_25596 = cljs.core.map.call(null,inst_25594,inst_25595);
var inst_25597 = cljs.core.pr_str.call(null,inst_25596);
var inst_25598 = figwheel.client.utils.log.call(null,inst_25597);
var state_25667__$1 = (function (){var statearr_25725 = state_25667;
(statearr_25725[(31)] = inst_25592);

return statearr_25725;
})();
var statearr_25726_25796 = state_25667__$1;
(statearr_25726_25796[(2)] = inst_25598);

(statearr_25726_25796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (35))){
var state_25667__$1 = state_25667;
var statearr_25727_25797 = state_25667__$1;
(statearr_25727_25797[(2)] = true);

(statearr_25727_25797[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (19))){
var inst_25571 = (state_25667[(12)]);
var inst_25577 = figwheel.client.file_reloading.expand_files.call(null,inst_25571);
var state_25667__$1 = state_25667;
var statearr_25728_25798 = state_25667__$1;
(statearr_25728_25798[(2)] = inst_25577);

(statearr_25728_25798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (11))){
var state_25667__$1 = state_25667;
var statearr_25729_25799 = state_25667__$1;
(statearr_25729_25799[(2)] = null);

(statearr_25729_25799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (9))){
var inst_25560 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25730_25800 = state_25667__$1;
(statearr_25730_25800[(2)] = inst_25560);

(statearr_25730_25800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (5))){
var inst_25530 = (state_25667[(7)]);
var inst_25531 = (state_25667[(8)]);
var inst_25533 = (inst_25531 < inst_25530);
var inst_25534 = inst_25533;
var state_25667__$1 = state_25667;
if(cljs.core.truth_(inst_25534)){
var statearr_25731_25801 = state_25667__$1;
(statearr_25731_25801[(1)] = (7));

} else {
var statearr_25732_25802 = state_25667__$1;
(statearr_25732_25802[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (14))){
var inst_25541 = (state_25667[(22)]);
var inst_25550 = cljs.core.first.call(null,inst_25541);
var inst_25551 = figwheel.client.file_reloading.eval_body.call(null,inst_25550,opts);
var inst_25552 = cljs.core.next.call(null,inst_25541);
var inst_25528 = inst_25552;
var inst_25529 = null;
var inst_25530 = (0);
var inst_25531 = (0);
var state_25667__$1 = (function (){var statearr_25733 = state_25667;
(statearr_25733[(7)] = inst_25530);

(statearr_25733[(8)] = inst_25531);

(statearr_25733[(32)] = inst_25551);

(statearr_25733[(9)] = inst_25528);

(statearr_25733[(10)] = inst_25529);

return statearr_25733;
})();
var statearr_25734_25803 = state_25667__$1;
(statearr_25734_25803[(2)] = null);

(statearr_25734_25803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (45))){
var state_25667__$1 = state_25667;
var statearr_25735_25804 = state_25667__$1;
(statearr_25735_25804[(2)] = null);

(statearr_25735_25804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (26))){
var inst_25581 = (state_25667[(19)]);
var inst_25584 = (state_25667[(23)]);
var inst_25587 = (state_25667[(26)]);
var inst_25585 = (state_25667[(24)]);
var inst_25589 = (state_25667[(25)]);
var inst_25604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25606 = (function (){var all_files = inst_25581;
var res_SINGLEQUOTE_ = inst_25584;
var res = inst_25585;
var files_not_loaded = inst_25587;
var dependencies_that_loaded = inst_25589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25589,inst_25604,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25605){
var map__25736 = p__25605;
var map__25736__$1 = ((((!((map__25736 == null)))?((((map__25736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25736):map__25736);
var namespace = cljs.core.get.call(null,map__25736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25589,inst_25604,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25607 = cljs.core.map.call(null,inst_25606,inst_25585);
var inst_25608 = cljs.core.pr_str.call(null,inst_25607);
var inst_25609 = figwheel.client.utils.log.call(null,inst_25608);
var inst_25610 = (function (){var all_files = inst_25581;
var res_SINGLEQUOTE_ = inst_25584;
var res = inst_25585;
var files_not_loaded = inst_25587;
var dependencies_that_loaded = inst_25589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25589,inst_25604,inst_25606,inst_25607,inst_25608,inst_25609,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25581,inst_25584,inst_25587,inst_25585,inst_25589,inst_25604,inst_25606,inst_25607,inst_25608,inst_25609,state_val_25668,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25611 = setTimeout(inst_25610,(10));
var state_25667__$1 = (function (){var statearr_25738 = state_25667;
(statearr_25738[(33)] = inst_25609);

(statearr_25738[(34)] = inst_25604);

return statearr_25738;
})();
var statearr_25739_25805 = state_25667__$1;
(statearr_25739_25805[(2)] = inst_25611);

(statearr_25739_25805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (16))){
var state_25667__$1 = state_25667;
var statearr_25740_25806 = state_25667__$1;
(statearr_25740_25806[(2)] = reload_dependents);

(statearr_25740_25806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (38))){
var inst_25621 = (state_25667[(16)]);
var inst_25638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25621);
var state_25667__$1 = state_25667;
var statearr_25741_25807 = state_25667__$1;
(statearr_25741_25807[(2)] = inst_25638);

(statearr_25741_25807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (30))){
var state_25667__$1 = state_25667;
var statearr_25742_25808 = state_25667__$1;
(statearr_25742_25808[(2)] = null);

(statearr_25742_25808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (10))){
var inst_25541 = (state_25667[(22)]);
var inst_25543 = cljs.core.chunked_seq_QMARK_.call(null,inst_25541);
var state_25667__$1 = state_25667;
if(inst_25543){
var statearr_25743_25809 = state_25667__$1;
(statearr_25743_25809[(1)] = (13));

} else {
var statearr_25744_25810 = state_25667__$1;
(statearr_25744_25810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (18))){
var inst_25575 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
if(cljs.core.truth_(inst_25575)){
var statearr_25745_25811 = state_25667__$1;
(statearr_25745_25811[(1)] = (19));

} else {
var statearr_25746_25812 = state_25667__$1;
(statearr_25746_25812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (42))){
var state_25667__$1 = state_25667;
var statearr_25747_25813 = state_25667__$1;
(statearr_25747_25813[(2)] = null);

(statearr_25747_25813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (37))){
var inst_25633 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25748_25814 = state_25667__$1;
(statearr_25748_25814[(2)] = inst_25633);

(statearr_25748_25814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (8))){
var inst_25541 = (state_25667[(22)]);
var inst_25528 = (state_25667[(9)]);
var inst_25541__$1 = cljs.core.seq.call(null,inst_25528);
var state_25667__$1 = (function (){var statearr_25749 = state_25667;
(statearr_25749[(22)] = inst_25541__$1);

return statearr_25749;
})();
if(inst_25541__$1){
var statearr_25750_25815 = state_25667__$1;
(statearr_25750_25815[(1)] = (10));

} else {
var statearr_25751_25816 = state_25667__$1;
(statearr_25751_25816[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21818__auto__,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto____0 = (function (){
var statearr_25755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25755[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto__);

(statearr_25755[(1)] = (1));

return statearr_25755;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto____1 = (function (state_25667){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_25667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e25756){if((e25756 instanceof Object)){
var ex__21822__auto__ = e25756;
var statearr_25757_25817 = state_25667;
(statearr_25757_25817[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25818 = state_25667;
state_25667 = G__25818;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto__ = function(state_25667){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto____1.call(this,state_25667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21932__auto__ = (function (){var statearr_25758 = f__21931__auto__.call(null);
(statearr_25758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__,map__25513,map__25513__$1,opts,before_jsload,on_jsload,reload_dependents,map__25514,map__25514__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21930__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25821,link){
var map__25824 = p__25821;
var map__25824__$1 = ((((!((map__25824 == null)))?((((map__25824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25824):map__25824);
var file = cljs.core.get.call(null,map__25824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25824,map__25824__$1,file){
return (function (p1__25819_SHARP_,p2__25820_SHARP_){
if(cljs.core._EQ_.call(null,p1__25819_SHARP_,p2__25820_SHARP_)){
return p1__25819_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25824,map__25824__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25830){
var map__25831 = p__25830;
var map__25831__$1 = ((((!((map__25831 == null)))?((((map__25831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25831):map__25831);
var match_length = cljs.core.get.call(null,map__25831__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25831__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25826_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25826_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25833 = [];
var len__17829__auto___25836 = arguments.length;
var i__17830__auto___25837 = (0);
while(true){
if((i__17830__auto___25837 < len__17829__auto___25836)){
args25833.push((arguments[i__17830__auto___25837]));

var G__25838 = (i__17830__auto___25837 + (1));
i__17830__auto___25837 = G__25838;
continue;
} else {
}
break;
}

var G__25835 = args25833.length;
switch (G__25835) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25833.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25840_SHARP_,p2__25841_SHARP_){
return cljs.core.assoc.call(null,p1__25840_SHARP_,cljs.core.get.call(null,p2__25841_SHARP_,key),p2__25841_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25842){
var map__25845 = p__25842;
var map__25845__$1 = ((((!((map__25845 == null)))?((((map__25845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25845):map__25845);
var f_data = map__25845__$1;
var file = cljs.core.get.call(null,map__25845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25847,files_msg){
var map__25854 = p__25847;
var map__25854__$1 = ((((!((map__25854 == null)))?((((map__25854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25854):map__25854);
var opts = map__25854__$1;
var on_cssload = cljs.core.get.call(null,map__25854__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25856_25860 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25857_25861 = null;
var count__25858_25862 = (0);
var i__25859_25863 = (0);
while(true){
if((i__25859_25863 < count__25858_25862)){
var f_25864 = cljs.core._nth.call(null,chunk__25857_25861,i__25859_25863);
figwheel.client.file_reloading.reload_css_file.call(null,f_25864);

var G__25865 = seq__25856_25860;
var G__25866 = chunk__25857_25861;
var G__25867 = count__25858_25862;
var G__25868 = (i__25859_25863 + (1));
seq__25856_25860 = G__25865;
chunk__25857_25861 = G__25866;
count__25858_25862 = G__25867;
i__25859_25863 = G__25868;
continue;
} else {
var temp__4425__auto___25869 = cljs.core.seq.call(null,seq__25856_25860);
if(temp__4425__auto___25869){
var seq__25856_25870__$1 = temp__4425__auto___25869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25856_25870__$1)){
var c__17574__auto___25871 = cljs.core.chunk_first.call(null,seq__25856_25870__$1);
var G__25872 = cljs.core.chunk_rest.call(null,seq__25856_25870__$1);
var G__25873 = c__17574__auto___25871;
var G__25874 = cljs.core.count.call(null,c__17574__auto___25871);
var G__25875 = (0);
seq__25856_25860 = G__25872;
chunk__25857_25861 = G__25873;
count__25858_25862 = G__25874;
i__25859_25863 = G__25875;
continue;
} else {
var f_25876 = cljs.core.first.call(null,seq__25856_25870__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25876);

var G__25877 = cljs.core.next.call(null,seq__25856_25870__$1);
var G__25878 = null;
var G__25879 = (0);
var G__25880 = (0);
seq__25856_25860 = G__25877;
chunk__25857_25861 = G__25878;
count__25858_25862 = G__25879;
i__25859_25863 = G__25880;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25854,map__25854__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25854,map__25854__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map