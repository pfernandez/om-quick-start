// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26316 = cljs.core._EQ_;
var expr__26317 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26316.call(null,"true",expr__26317))){
return true;
} else {
if(cljs.core.truth_(pred__26316.call(null,"false",expr__26317))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26317)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26319__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26320__i = 0, G__26320__a = new Array(arguments.length -  0);
while (G__26320__i < G__26320__a.length) {G__26320__a[G__26320__i] = arguments[G__26320__i + 0]; ++G__26320__i;}
  args = new cljs.core.IndexedSeq(G__26320__a,0);
} 
return G__26319__delegate.call(this,args);};
G__26319.cljs$lang$maxFixedArity = 0;
G__26319.cljs$lang$applyTo = (function (arglist__26321){
var args = cljs.core.seq(arglist__26321);
return G__26319__delegate(args);
});
G__26319.cljs$core$IFn$_invoke$arity$variadic = G__26319__delegate;
return G__26319;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26322){
var map__26325 = p__26322;
var map__26325__$1 = ((((!((map__26325 == null)))?((((map__26325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var message = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21930__auto___26487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___26487,ch){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___26487,ch){
return (function (state_26456){
var state_val_26457 = (state_26456[(1)]);
if((state_val_26457 === (7))){
var inst_26452 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26458_26488 = state_26456__$1;
(statearr_26458_26488[(2)] = inst_26452);

(statearr_26458_26488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (1))){
var state_26456__$1 = state_26456;
var statearr_26459_26489 = state_26456__$1;
(statearr_26459_26489[(2)] = null);

(statearr_26459_26489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (4))){
var inst_26409 = (state_26456[(7)]);
var inst_26409__$1 = (state_26456[(2)]);
var state_26456__$1 = (function (){var statearr_26460 = state_26456;
(statearr_26460[(7)] = inst_26409__$1);

return statearr_26460;
})();
if(cljs.core.truth_(inst_26409__$1)){
var statearr_26461_26490 = state_26456__$1;
(statearr_26461_26490[(1)] = (5));

} else {
var statearr_26462_26491 = state_26456__$1;
(statearr_26462_26491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (15))){
var inst_26416 = (state_26456[(8)]);
var inst_26431 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26416);
var inst_26432 = cljs.core.first.call(null,inst_26431);
var inst_26433 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26432);
var inst_26434 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26433)].join('');
var inst_26435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26434);
var state_26456__$1 = state_26456;
var statearr_26463_26492 = state_26456__$1;
(statearr_26463_26492[(2)] = inst_26435);

(statearr_26463_26492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (13))){
var inst_26440 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26464_26493 = state_26456__$1;
(statearr_26464_26493[(2)] = inst_26440);

(statearr_26464_26493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (6))){
var state_26456__$1 = state_26456;
var statearr_26465_26494 = state_26456__$1;
(statearr_26465_26494[(2)] = null);

(statearr_26465_26494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (17))){
var inst_26438 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26466_26495 = state_26456__$1;
(statearr_26466_26495[(2)] = inst_26438);

(statearr_26466_26495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (3))){
var inst_26454 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26456__$1,inst_26454);
} else {
if((state_val_26457 === (12))){
var inst_26415 = (state_26456[(9)]);
var inst_26429 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26415,opts);
var state_26456__$1 = state_26456;
if(cljs.core.truth_(inst_26429)){
var statearr_26467_26496 = state_26456__$1;
(statearr_26467_26496[(1)] = (15));

} else {
var statearr_26468_26497 = state_26456__$1;
(statearr_26468_26497[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (2))){
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26456__$1,(4),ch);
} else {
if((state_val_26457 === (11))){
var inst_26416 = (state_26456[(8)]);
var inst_26421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26422 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26416);
var inst_26423 = cljs.core.async.timeout.call(null,(1000));
var inst_26424 = [inst_26422,inst_26423];
var inst_26425 = (new cljs.core.PersistentVector(null,2,(5),inst_26421,inst_26424,null));
var state_26456__$1 = state_26456;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26456__$1,(14),inst_26425);
} else {
if((state_val_26457 === (9))){
var inst_26416 = (state_26456[(8)]);
var inst_26442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26443 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26416);
var inst_26444 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26443);
var inst_26445 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26444)].join('');
var inst_26446 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26445);
var state_26456__$1 = (function (){var statearr_26469 = state_26456;
(statearr_26469[(10)] = inst_26442);

return statearr_26469;
})();
var statearr_26470_26498 = state_26456__$1;
(statearr_26470_26498[(2)] = inst_26446);

(statearr_26470_26498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (5))){
var inst_26409 = (state_26456[(7)]);
var inst_26411 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26412 = (new cljs.core.PersistentArrayMap(null,2,inst_26411,null));
var inst_26413 = (new cljs.core.PersistentHashSet(null,inst_26412,null));
var inst_26414 = figwheel.client.focus_msgs.call(null,inst_26413,inst_26409);
var inst_26415 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26414);
var inst_26416 = cljs.core.first.call(null,inst_26414);
var inst_26417 = figwheel.client.autoload_QMARK_.call(null);
var state_26456__$1 = (function (){var statearr_26471 = state_26456;
(statearr_26471[(8)] = inst_26416);

(statearr_26471[(9)] = inst_26415);

return statearr_26471;
})();
if(cljs.core.truth_(inst_26417)){
var statearr_26472_26499 = state_26456__$1;
(statearr_26472_26499[(1)] = (8));

} else {
var statearr_26473_26500 = state_26456__$1;
(statearr_26473_26500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (14))){
var inst_26427 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26474_26501 = state_26456__$1;
(statearr_26474_26501[(2)] = inst_26427);

(statearr_26474_26501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (16))){
var state_26456__$1 = state_26456;
var statearr_26475_26502 = state_26456__$1;
(statearr_26475_26502[(2)] = null);

(statearr_26475_26502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (10))){
var inst_26448 = (state_26456[(2)]);
var state_26456__$1 = (function (){var statearr_26476 = state_26456;
(statearr_26476[(11)] = inst_26448);

return statearr_26476;
})();
var statearr_26477_26503 = state_26456__$1;
(statearr_26477_26503[(2)] = null);

(statearr_26477_26503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (8))){
var inst_26415 = (state_26456[(9)]);
var inst_26419 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26415,opts);
var state_26456__$1 = state_26456;
if(cljs.core.truth_(inst_26419)){
var statearr_26478_26504 = state_26456__$1;
(statearr_26478_26504[(1)] = (11));

} else {
var statearr_26479_26505 = state_26456__$1;
(statearr_26479_26505[(1)] = (12));

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
});})(c__21930__auto___26487,ch))
;
return ((function (switch__21818__auto__,c__21930__auto___26487,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21819__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21819__auto____0 = (function (){
var statearr_26483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26483[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21819__auto__);

(statearr_26483[(1)] = (1));

return statearr_26483;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21819__auto____1 = (function (state_26456){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_26456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object)){
var ex__21822__auto__ = e26484;
var statearr_26485_26506 = state_26456;
(statearr_26485_26506[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26507 = state_26456;
state_26456 = G__26507;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21819__auto__ = function(state_26456){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21819__auto____1.call(this,state_26456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21819__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21819__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___26487,ch))
})();
var state__21932__auto__ = (function (){var statearr_26486 = f__21931__auto__.call(null);
(statearr_26486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___26487);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___26487,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26508_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26508_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26515 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26515){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26513 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26514 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26513,_STAR_print_newline_STAR_26514,base_path_26515){
return (function() { 
var G__26516__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26517__i = 0, G__26517__a = new Array(arguments.length -  0);
while (G__26517__i < G__26517__a.length) {G__26517__a[G__26517__i] = arguments[G__26517__i + 0]; ++G__26517__i;}
  args = new cljs.core.IndexedSeq(G__26517__a,0);
} 
return G__26516__delegate.call(this,args);};
G__26516.cljs$lang$maxFixedArity = 0;
G__26516.cljs$lang$applyTo = (function (arglist__26518){
var args = cljs.core.seq(arglist__26518);
return G__26516__delegate(args);
});
G__26516.cljs$core$IFn$_invoke$arity$variadic = G__26516__delegate;
return G__26516;
})()
;})(_STAR_print_fn_STAR_26513,_STAR_print_newline_STAR_26514,base_path_26515))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26514;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26513;
}}catch (e26512){if((e26512 instanceof Error)){
var e = e26512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26515], null));
} else {
var e = e26512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26515))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26519){
var map__26526 = p__26519;
var map__26526__$1 = ((((!((map__26526 == null)))?((((map__26526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26526):map__26526);
var opts = map__26526__$1;
var build_id = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26526,map__26526__$1,opts,build_id){
return (function (p__26528){
var vec__26529 = p__26528;
var map__26530 = cljs.core.nth.call(null,vec__26529,(0),null);
var map__26530__$1 = ((((!((map__26530 == null)))?((((map__26530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26530):map__26530);
var msg = map__26530__$1;
var msg_name = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26529,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26529,map__26530,map__26530__$1,msg,msg_name,_,map__26526,map__26526__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26529,map__26530,map__26530__$1,msg,msg_name,_,map__26526,map__26526__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26526,map__26526__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26536){
var vec__26537 = p__26536;
var map__26538 = cljs.core.nth.call(null,vec__26537,(0),null);
var map__26538__$1 = ((((!((map__26538 == null)))?((((map__26538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26538):map__26538);
var msg = map__26538__$1;
var msg_name = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26537,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26540){
var map__26550 = p__26540;
var map__26550__$1 = ((((!((map__26550 == null)))?((((map__26550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26550):map__26550);
var on_compile_warning = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26550,map__26550__$1,on_compile_warning,on_compile_fail){
return (function (p__26552){
var vec__26553 = p__26552;
var map__26554 = cljs.core.nth.call(null,vec__26553,(0),null);
var map__26554__$1 = ((((!((map__26554 == null)))?((((map__26554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26554):map__26554);
var msg = map__26554__$1;
var msg_name = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26553,(1));
var pred__26556 = cljs.core._EQ_;
var expr__26557 = msg_name;
if(cljs.core.truth_(pred__26556.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26557))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26556.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26557))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26550,map__26550__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__,msg_hist,msg_names,msg){
return (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (7))){
var inst_26697 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26697)){
var statearr_26775_26821 = state_26773__$1;
(statearr_26775_26821[(1)] = (8));

} else {
var statearr_26776_26822 = state_26773__$1;
(statearr_26776_26822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (20))){
var inst_26767 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26777_26823 = state_26773__$1;
(statearr_26777_26823[(2)] = inst_26767);

(statearr_26777_26823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (27))){
var inst_26763 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26778_26824 = state_26773__$1;
(statearr_26778_26824[(2)] = inst_26763);

(statearr_26778_26824[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (1))){
var inst_26690 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26690)){
var statearr_26779_26825 = state_26773__$1;
(statearr_26779_26825[(1)] = (2));

} else {
var statearr_26780_26826 = state_26773__$1;
(statearr_26780_26826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (24))){
var inst_26765 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26781_26827 = state_26773__$1;
(statearr_26781_26827[(2)] = inst_26765);

(statearr_26781_26827[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (4))){
var inst_26771 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
if((state_val_26774 === (15))){
var inst_26769 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26782_26828 = state_26773__$1;
(statearr_26782_26828[(2)] = inst_26769);

(statearr_26782_26828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (21))){
var inst_26728 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26783_26829 = state_26773__$1;
(statearr_26783_26829[(2)] = inst_26728);

(statearr_26783_26829[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (31))){
var inst_26752 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26752)){
var statearr_26784_26830 = state_26773__$1;
(statearr_26784_26830[(1)] = (34));

} else {
var statearr_26785_26831 = state_26773__$1;
(statearr_26785_26831[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (32))){
var inst_26761 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26786_26832 = state_26773__$1;
(statearr_26786_26832[(2)] = inst_26761);

(statearr_26786_26832[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (33))){
var inst_26750 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26787_26833 = state_26773__$1;
(statearr_26787_26833[(2)] = inst_26750);

(statearr_26787_26833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (13))){
var inst_26711 = figwheel.client.heads_up.clear.call(null);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(16),inst_26711);
} else {
if((state_val_26774 === (22))){
var inst_26732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26733 = figwheel.client.heads_up.append_message.call(null,inst_26732);
var state_26773__$1 = state_26773;
var statearr_26788_26834 = state_26773__$1;
(statearr_26788_26834[(2)] = inst_26733);

(statearr_26788_26834[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (36))){
var inst_26759 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26789_26835 = state_26773__$1;
(statearr_26789_26835[(2)] = inst_26759);

(statearr_26789_26835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (29))){
var inst_26743 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26790_26836 = state_26773__$1;
(statearr_26790_26836[(2)] = inst_26743);

(statearr_26790_26836[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (6))){
var inst_26692 = (state_26773[(7)]);
var state_26773__$1 = state_26773;
var statearr_26791_26837 = state_26773__$1;
(statearr_26791_26837[(2)] = inst_26692);

(statearr_26791_26837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (28))){
var inst_26739 = (state_26773[(2)]);
var inst_26740 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26741 = figwheel.client.heads_up.display_warning.call(null,inst_26740);
var state_26773__$1 = (function (){var statearr_26792 = state_26773;
(statearr_26792[(8)] = inst_26739);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(29),inst_26741);
} else {
if((state_val_26774 === (25))){
var inst_26737 = figwheel.client.heads_up.clear.call(null);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(28),inst_26737);
} else {
if((state_val_26774 === (34))){
var inst_26754 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(37),inst_26754);
} else {
if((state_val_26774 === (17))){
var inst_26719 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26793_26838 = state_26773__$1;
(statearr_26793_26838[(2)] = inst_26719);

(statearr_26793_26838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (3))){
var inst_26709 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26709)){
var statearr_26794_26839 = state_26773__$1;
(statearr_26794_26839[(1)] = (13));

} else {
var statearr_26795_26840 = state_26773__$1;
(statearr_26795_26840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (12))){
var inst_26705 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26796_26841 = state_26773__$1;
(statearr_26796_26841[(2)] = inst_26705);

(statearr_26796_26841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (2))){
var inst_26692 = (state_26773[(7)]);
var inst_26692__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26773__$1 = (function (){var statearr_26797 = state_26773;
(statearr_26797[(7)] = inst_26692__$1);

return statearr_26797;
})();
if(cljs.core.truth_(inst_26692__$1)){
var statearr_26798_26842 = state_26773__$1;
(statearr_26798_26842[(1)] = (5));

} else {
var statearr_26799_26843 = state_26773__$1;
(statearr_26799_26843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (23))){
var inst_26735 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26735)){
var statearr_26800_26844 = state_26773__$1;
(statearr_26800_26844[(1)] = (25));

} else {
var statearr_26801_26845 = state_26773__$1;
(statearr_26801_26845[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (35))){
var state_26773__$1 = state_26773;
var statearr_26802_26846 = state_26773__$1;
(statearr_26802_26846[(2)] = null);

(statearr_26802_26846[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (19))){
var inst_26730 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26730)){
var statearr_26803_26847 = state_26773__$1;
(statearr_26803_26847[(1)] = (22));

} else {
var statearr_26804_26848 = state_26773__$1;
(statearr_26804_26848[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (11))){
var inst_26701 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26805_26849 = state_26773__$1;
(statearr_26805_26849[(2)] = inst_26701);

(statearr_26805_26849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (9))){
var inst_26703 = figwheel.client.heads_up.clear.call(null);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(12),inst_26703);
} else {
if((state_val_26774 === (5))){
var inst_26694 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26773__$1 = state_26773;
var statearr_26806_26850 = state_26773__$1;
(statearr_26806_26850[(2)] = inst_26694);

(statearr_26806_26850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (14))){
var inst_26721 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26721)){
var statearr_26807_26851 = state_26773__$1;
(statearr_26807_26851[(1)] = (18));

} else {
var statearr_26808_26852 = state_26773__$1;
(statearr_26808_26852[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (26))){
var inst_26745 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26745)){
var statearr_26809_26853 = state_26773__$1;
(statearr_26809_26853[(1)] = (30));

} else {
var statearr_26810_26854 = state_26773__$1;
(statearr_26810_26854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (16))){
var inst_26713 = (state_26773[(2)]);
var inst_26714 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26715 = figwheel.client.format_messages.call(null,inst_26714);
var inst_26716 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26717 = figwheel.client.heads_up.display_error.call(null,inst_26715,inst_26716);
var state_26773__$1 = (function (){var statearr_26811 = state_26773;
(statearr_26811[(9)] = inst_26713);

return statearr_26811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(17),inst_26717);
} else {
if((state_val_26774 === (30))){
var inst_26747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26748 = figwheel.client.heads_up.display_warning.call(null,inst_26747);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(33),inst_26748);
} else {
if((state_val_26774 === (10))){
var inst_26707 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26812_26855 = state_26773__$1;
(statearr_26812_26855[(2)] = inst_26707);

(statearr_26812_26855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (18))){
var inst_26723 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26724 = figwheel.client.format_messages.call(null,inst_26723);
var inst_26725 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26726 = figwheel.client.heads_up.display_error.call(null,inst_26724,inst_26725);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(21),inst_26726);
} else {
if((state_val_26774 === (37))){
var inst_26756 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26813_26856 = state_26773__$1;
(statearr_26813_26856[(2)] = inst_26756);

(statearr_26813_26856[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (8))){
var inst_26699 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(11),inst_26699);
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
});})(c__21930__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21818__auto__,c__21930__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto____0 = (function (){
var statearr_26817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26817[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto__);

(statearr_26817[(1)] = (1));

return statearr_26817;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto____1 = (function (state_26773){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e26818){if((e26818 instanceof Object)){
var ex__21822__auto__ = e26818;
var statearr_26819_26857 = state_26773;
(statearr_26819_26857[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26858 = state_26773;
state_26773 = G__26858;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__,msg_hist,msg_names,msg))
})();
var state__21932__auto__ = (function (){var statearr_26820 = f__21931__auto__.call(null);
(statearr_26820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_26820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__,msg_hist,msg_names,msg))
);

return c__21930__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21930__auto___26921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___26921,ch){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___26921,ch){
return (function (state_26904){
var state_val_26905 = (state_26904[(1)]);
if((state_val_26905 === (1))){
var state_26904__$1 = state_26904;
var statearr_26906_26922 = state_26904__$1;
(statearr_26906_26922[(2)] = null);

(statearr_26906_26922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (2))){
var state_26904__$1 = state_26904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26904__$1,(4),ch);
} else {
if((state_val_26905 === (3))){
var inst_26902 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26904__$1,inst_26902);
} else {
if((state_val_26905 === (4))){
var inst_26892 = (state_26904[(7)]);
var inst_26892__$1 = (state_26904[(2)]);
var state_26904__$1 = (function (){var statearr_26907 = state_26904;
(statearr_26907[(7)] = inst_26892__$1);

return statearr_26907;
})();
if(cljs.core.truth_(inst_26892__$1)){
var statearr_26908_26923 = state_26904__$1;
(statearr_26908_26923[(1)] = (5));

} else {
var statearr_26909_26924 = state_26904__$1;
(statearr_26909_26924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (5))){
var inst_26892 = (state_26904[(7)]);
var inst_26894 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26892);
var state_26904__$1 = state_26904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26904__$1,(8),inst_26894);
} else {
if((state_val_26905 === (6))){
var state_26904__$1 = state_26904;
var statearr_26910_26925 = state_26904__$1;
(statearr_26910_26925[(2)] = null);

(statearr_26910_26925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (7))){
var inst_26900 = (state_26904[(2)]);
var state_26904__$1 = state_26904;
var statearr_26911_26926 = state_26904__$1;
(statearr_26911_26926[(2)] = inst_26900);

(statearr_26911_26926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26905 === (8))){
var inst_26896 = (state_26904[(2)]);
var state_26904__$1 = (function (){var statearr_26912 = state_26904;
(statearr_26912[(8)] = inst_26896);

return statearr_26912;
})();
var statearr_26913_26927 = state_26904__$1;
(statearr_26913_26927[(2)] = null);

(statearr_26913_26927[(1)] = (2));


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
});})(c__21930__auto___26921,ch))
;
return ((function (switch__21818__auto__,c__21930__auto___26921,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21819__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21819__auto____0 = (function (){
var statearr_26917 = [null,null,null,null,null,null,null,null,null];
(statearr_26917[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21819__auto__);

(statearr_26917[(1)] = (1));

return statearr_26917;
});
var figwheel$client$heads_up_plugin_$_state_machine__21819__auto____1 = (function (state_26904){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_26904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e26918){if((e26918 instanceof Object)){
var ex__21822__auto__ = e26918;
var statearr_26919_26928 = state_26904;
(statearr_26919_26928[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26929 = state_26904;
state_26904 = G__26929;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21819__auto__ = function(state_26904){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21819__auto____1.call(this,state_26904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21819__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21819__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___26921,ch))
})();
var state__21932__auto__ = (function (){var statearr_26920 = f__21931__auto__.call(null);
(statearr_26920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___26921);

return statearr_26920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___26921,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__){
return (function (state_26950){
var state_val_26951 = (state_26950[(1)]);
if((state_val_26951 === (1))){
var inst_26945 = cljs.core.async.timeout.call(null,(3000));
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(2),inst_26945);
} else {
if((state_val_26951 === (2))){
var inst_26947 = (state_26950[(2)]);
var inst_26948 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26950__$1 = (function (){var statearr_26952 = state_26950;
(statearr_26952[(7)] = inst_26947);

return statearr_26952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else {
return null;
}
}
});})(c__21930__auto__))
;
return ((function (switch__21818__auto__,c__21930__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21819__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21819__auto____0 = (function (){
var statearr_26956 = [null,null,null,null,null,null,null,null];
(statearr_26956[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21819__auto__);

(statearr_26956[(1)] = (1));

return statearr_26956;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21819__auto____1 = (function (state_26950){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_26950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e26957){if((e26957 instanceof Object)){
var ex__21822__auto__ = e26957;
var statearr_26958_26960 = state_26950;
(statearr_26958_26960[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26961 = state_26950;
state_26950 = G__26961;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21819__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21819__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21819__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21819__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21819__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__))
})();
var state__21932__auto__ = (function (){var statearr_26959 = f__21931__auto__.call(null);
(statearr_26959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__))
);

return c__21930__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26962){
var map__26969 = p__26962;
var map__26969__$1 = ((((!((map__26969 == null)))?((((map__26969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26969):map__26969);
var ed = map__26969__$1;
var formatted_exception = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26971_26975 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26972_26976 = null;
var count__26973_26977 = (0);
var i__26974_26978 = (0);
while(true){
if((i__26974_26978 < count__26973_26977)){
var msg_26979 = cljs.core._nth.call(null,chunk__26972_26976,i__26974_26978);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26979);

var G__26980 = seq__26971_26975;
var G__26981 = chunk__26972_26976;
var G__26982 = count__26973_26977;
var G__26983 = (i__26974_26978 + (1));
seq__26971_26975 = G__26980;
chunk__26972_26976 = G__26981;
count__26973_26977 = G__26982;
i__26974_26978 = G__26983;
continue;
} else {
var temp__4425__auto___26984 = cljs.core.seq.call(null,seq__26971_26975);
if(temp__4425__auto___26984){
var seq__26971_26985__$1 = temp__4425__auto___26984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26971_26985__$1)){
var c__17574__auto___26986 = cljs.core.chunk_first.call(null,seq__26971_26985__$1);
var G__26987 = cljs.core.chunk_rest.call(null,seq__26971_26985__$1);
var G__26988 = c__17574__auto___26986;
var G__26989 = cljs.core.count.call(null,c__17574__auto___26986);
var G__26990 = (0);
seq__26971_26975 = G__26987;
chunk__26972_26976 = G__26988;
count__26973_26977 = G__26989;
i__26974_26978 = G__26990;
continue;
} else {
var msg_26991 = cljs.core.first.call(null,seq__26971_26985__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26991);

var G__26992 = cljs.core.next.call(null,seq__26971_26985__$1);
var G__26993 = null;
var G__26994 = (0);
var G__26995 = (0);
seq__26971_26975 = G__26992;
chunk__26972_26976 = G__26993;
count__26973_26977 = G__26994;
i__26974_26978 = G__26995;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26996){
var map__26999 = p__26996;
var map__26999__$1 = ((((!((map__26999 == null)))?((((map__26999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26999):map__26999);
var w = map__26999__$1;
var message = cljs.core.get.call(null,map__26999__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27007 = cljs.core.seq.call(null,plugins);
var chunk__27008 = null;
var count__27009 = (0);
var i__27010 = (0);
while(true){
if((i__27010 < count__27009)){
var vec__27011 = cljs.core._nth.call(null,chunk__27008,i__27010);
var k = cljs.core.nth.call(null,vec__27011,(0),null);
var plugin = cljs.core.nth.call(null,vec__27011,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27007,chunk__27008,count__27009,i__27010,pl_27013,vec__27011,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27013.call(null,msg_hist);
});})(seq__27007,chunk__27008,count__27009,i__27010,pl_27013,vec__27011,k,plugin))
);
} else {
}

var G__27014 = seq__27007;
var G__27015 = chunk__27008;
var G__27016 = count__27009;
var G__27017 = (i__27010 + (1));
seq__27007 = G__27014;
chunk__27008 = G__27015;
count__27009 = G__27016;
i__27010 = G__27017;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27007);
if(temp__4425__auto__){
var seq__27007__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27007__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__27007__$1);
var G__27018 = cljs.core.chunk_rest.call(null,seq__27007__$1);
var G__27019 = c__17574__auto__;
var G__27020 = cljs.core.count.call(null,c__17574__auto__);
var G__27021 = (0);
seq__27007 = G__27018;
chunk__27008 = G__27019;
count__27009 = G__27020;
i__27010 = G__27021;
continue;
} else {
var vec__27012 = cljs.core.first.call(null,seq__27007__$1);
var k = cljs.core.nth.call(null,vec__27012,(0),null);
var plugin = cljs.core.nth.call(null,vec__27012,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27007,chunk__27008,count__27009,i__27010,pl_27022,vec__27012,k,plugin,seq__27007__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27022.call(null,msg_hist);
});})(seq__27007,chunk__27008,count__27009,i__27010,pl_27022,vec__27012,k,plugin,seq__27007__$1,temp__4425__auto__))
);
} else {
}

var G__27023 = cljs.core.next.call(null,seq__27007__$1);
var G__27024 = null;
var G__27025 = (0);
var G__27026 = (0);
seq__27007 = G__27023;
chunk__27008 = G__27024;
count__27009 = G__27025;
i__27010 = G__27026;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27027 = [];
var len__17829__auto___27030 = arguments.length;
var i__17830__auto___27031 = (0);
while(true){
if((i__17830__auto___27031 < len__17829__auto___27030)){
args27027.push((arguments[i__17830__auto___27031]));

var G__27032 = (i__17830__auto___27031 + (1));
i__17830__auto___27031 = G__27032;
continue;
} else {
}
break;
}

var G__27029 = args27027.length;
switch (G__27029) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27027.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___27038 = arguments.length;
var i__17830__auto___27039 = (0);
while(true){
if((i__17830__auto___27039 < len__17829__auto___27038)){
args__17836__auto__.push((arguments[i__17830__auto___27039]));

var G__27040 = (i__17830__auto___27039 + (1));
i__17830__auto___27039 = G__27040;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27035){
var map__27036 = p__27035;
var map__27036__$1 = ((((!((map__27036 == null)))?((((map__27036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var opts = map__27036__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27034){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27034));
});

//# sourceMappingURL=client.js.map