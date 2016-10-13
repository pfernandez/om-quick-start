// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25897_25911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25898_25912 = null;
var count__25899_25913 = (0);
var i__25900_25914 = (0);
while(true){
if((i__25900_25914 < count__25899_25913)){
var f_25915 = cljs.core._nth.call(null,chunk__25898_25912,i__25900_25914);
cljs.core.println.call(null,"  ",f_25915);

var G__25916 = seq__25897_25911;
var G__25917 = chunk__25898_25912;
var G__25918 = count__25899_25913;
var G__25919 = (i__25900_25914 + (1));
seq__25897_25911 = G__25916;
chunk__25898_25912 = G__25917;
count__25899_25913 = G__25918;
i__25900_25914 = G__25919;
continue;
} else {
var temp__4425__auto___25920 = cljs.core.seq.call(null,seq__25897_25911);
if(temp__4425__auto___25920){
var seq__25897_25921__$1 = temp__4425__auto___25920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25897_25921__$1)){
var c__17574__auto___25922 = cljs.core.chunk_first.call(null,seq__25897_25921__$1);
var G__25923 = cljs.core.chunk_rest.call(null,seq__25897_25921__$1);
var G__25924 = c__17574__auto___25922;
var G__25925 = cljs.core.count.call(null,c__17574__auto___25922);
var G__25926 = (0);
seq__25897_25911 = G__25923;
chunk__25898_25912 = G__25924;
count__25899_25913 = G__25925;
i__25900_25914 = G__25926;
continue;
} else {
var f_25927 = cljs.core.first.call(null,seq__25897_25921__$1);
cljs.core.println.call(null,"  ",f_25927);

var G__25928 = cljs.core.next.call(null,seq__25897_25921__$1);
var G__25929 = null;
var G__25930 = (0);
var G__25931 = (0);
seq__25897_25911 = G__25928;
chunk__25898_25912 = G__25929;
count__25899_25913 = G__25930;
i__25900_25914 = G__25931;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25932 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25932);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25932)))?cljs.core.second.call(null,arglists_25932):arglists_25932));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25902 = null;
var count__25903 = (0);
var i__25904 = (0);
while(true){
if((i__25904 < count__25903)){
var vec__25905 = cljs.core._nth.call(null,chunk__25902,i__25904);
var name = cljs.core.nth.call(null,vec__25905,(0),null);
var map__25906 = cljs.core.nth.call(null,vec__25905,(1),null);
var map__25906__$1 = ((((!((map__25906 == null)))?((((map__25906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25906):map__25906);
var doc = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25933 = seq__25901;
var G__25934 = chunk__25902;
var G__25935 = count__25903;
var G__25936 = (i__25904 + (1));
seq__25901 = G__25933;
chunk__25902 = G__25934;
count__25903 = G__25935;
i__25904 = G__25936;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25901);
if(temp__4425__auto__){
var seq__25901__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25901__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25901__$1);
var G__25937 = cljs.core.chunk_rest.call(null,seq__25901__$1);
var G__25938 = c__17574__auto__;
var G__25939 = cljs.core.count.call(null,c__17574__auto__);
var G__25940 = (0);
seq__25901 = G__25937;
chunk__25902 = G__25938;
count__25903 = G__25939;
i__25904 = G__25940;
continue;
} else {
var vec__25908 = cljs.core.first.call(null,seq__25901__$1);
var name = cljs.core.nth.call(null,vec__25908,(0),null);
var map__25909 = cljs.core.nth.call(null,vec__25908,(1),null);
var map__25909__$1 = ((((!((map__25909 == null)))?((((map__25909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25909):map__25909);
var doc = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25941 = cljs.core.next.call(null,seq__25901__$1);
var G__25942 = null;
var G__25943 = (0);
var G__25944 = (0);
seq__25901 = G__25941;
chunk__25902 = G__25942;
count__25903 = G__25943;
i__25904 = G__25944;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map