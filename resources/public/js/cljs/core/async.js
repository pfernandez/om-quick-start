// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21975 = [];
var len__17829__auto___21981 = arguments.length;
var i__17830__auto___21982 = (0);
while(true){
if((i__17830__auto___21982 < len__17829__auto___21981)){
args21975.push((arguments[i__17830__auto___21982]));

var G__21983 = (i__17830__auto___21982 + (1));
i__17830__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var G__21977 = args21975.length;
switch (G__21977) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21975.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21978 = (function (f,blockable,meta21979){
this.f = f;
this.blockable = blockable;
this.meta21979 = meta21979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21980,meta21979__$1){
var self__ = this;
var _21980__$1 = this;
return (new cljs.core.async.t_cljs$core$async21978(self__.f,self__.blockable,meta21979__$1));
});

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21980){
var self__ = this;
var _21980__$1 = this;
return self__.meta21979;
});

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21979","meta21979",122660477,null)], null);
});

cljs.core.async.t_cljs$core$async21978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21978";

cljs.core.async.t_cljs$core$async21978.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21978");
});

cljs.core.async.__GT_t_cljs$core$async21978 = (function cljs$core$async$__GT_t_cljs$core$async21978(f__$1,blockable__$1,meta21979){
return (new cljs.core.async.t_cljs$core$async21978(f__$1,blockable__$1,meta21979));
});

}

return (new cljs.core.async.t_cljs$core$async21978(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21987 = [];
var len__17829__auto___21990 = arguments.length;
var i__17830__auto___21991 = (0);
while(true){
if((i__17830__auto___21991 < len__17829__auto___21990)){
args21987.push((arguments[i__17830__auto___21991]));

var G__21992 = (i__17830__auto___21991 + (1));
i__17830__auto___21991 = G__21992;
continue;
} else {
}
break;
}

var G__21989 = args21987.length;
switch (G__21989) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21987.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21994 = [];
var len__17829__auto___21997 = arguments.length;
var i__17830__auto___21998 = (0);
while(true){
if((i__17830__auto___21998 < len__17829__auto___21997)){
args21994.push((arguments[i__17830__auto___21998]));

var G__21999 = (i__17830__auto___21998 + (1));
i__17830__auto___21998 = G__21999;
continue;
} else {
}
break;
}

var G__21996 = args21994.length;
switch (G__21996) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21994.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22001 = [];
var len__17829__auto___22004 = arguments.length;
var i__17830__auto___22005 = (0);
while(true){
if((i__17830__auto___22005 < len__17829__auto___22004)){
args22001.push((arguments[i__17830__auto___22005]));

var G__22006 = (i__17830__auto___22005 + (1));
i__17830__auto___22005 = G__22006;
continue;
} else {
}
break;
}

var G__22003 = args22001.length;
switch (G__22003) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22001.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22008 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22008);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22008,ret){
return (function (){
return fn1.call(null,val_22008);
});})(val_22008,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22009 = [];
var len__17829__auto___22012 = arguments.length;
var i__17830__auto___22013 = (0);
while(true){
if((i__17830__auto___22013 < len__17829__auto___22012)){
args22009.push((arguments[i__17830__auto___22013]));

var G__22014 = (i__17830__auto___22013 + (1));
i__17830__auto___22013 = G__22014;
continue;
} else {
}
break;
}

var G__22011 = args22009.length;
switch (G__22011) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22009.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___22016 = n;
var x_22017 = (0);
while(true){
if((x_22017 < n__17674__auto___22016)){
(a[x_22017] = (0));

var G__22018 = (x_22017 + (1));
x_22017 = G__22018;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22019 = (i + (1));
i = G__22019;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22023 = (function (alt_flag,flag,meta22024){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22024 = meta22024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22025,meta22024__$1){
var self__ = this;
var _22025__$1 = this;
return (new cljs.core.async.t_cljs$core$async22023(self__.alt_flag,self__.flag,meta22024__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22025){
var self__ = this;
var _22025__$1 = this;
return self__.meta22024;
});})(flag))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22023.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22024","meta22024",1073372548,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22023";

cljs.core.async.t_cljs$core$async22023.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22023");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22023 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22023(alt_flag__$1,flag__$1,meta22024){
return (new cljs.core.async.t_cljs$core$async22023(alt_flag__$1,flag__$1,meta22024));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22023(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22029 = (function (alt_handler,flag,cb,meta22030){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22030 = meta22030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22031,meta22030__$1){
var self__ = this;
var _22031__$1 = this;
return (new cljs.core.async.t_cljs$core$async22029(self__.alt_handler,self__.flag,self__.cb,meta22030__$1));
});

cljs.core.async.t_cljs$core$async22029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22031){
var self__ = this;
var _22031__$1 = this;
return self__.meta22030;
});

cljs.core.async.t_cljs$core$async22029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22030","meta22030",16595107,null)], null);
});

cljs.core.async.t_cljs$core$async22029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22029";

cljs.core.async.t_cljs$core$async22029.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22029");
});

cljs.core.async.__GT_t_cljs$core$async22029 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22029(alt_handler__$1,flag__$1,cb__$1,meta22030){
return (new cljs.core.async.t_cljs$core$async22029(alt_handler__$1,flag__$1,cb__$1,meta22030));
});

}

return (new cljs.core.async.t_cljs$core$async22029(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22032_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22033_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22034 = (i + (1));
i = G__22034;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___22040 = arguments.length;
var i__17830__auto___22041 = (0);
while(true){
if((i__17830__auto___22041 < len__17829__auto___22040)){
args__17836__auto__.push((arguments[i__17830__auto___22041]));

var G__22042 = (i__17830__auto___22041 + (1));
i__17830__auto___22041 = G__22042;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22037){
var map__22038 = p__22037;
var map__22038__$1 = ((((!((map__22038 == null)))?((((map__22038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22038):map__22038);
var opts = map__22038__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22035){
var G__22036 = cljs.core.first.call(null,seq22035);
var seq22035__$1 = cljs.core.next.call(null,seq22035);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22036,seq22035__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22043 = [];
var len__17829__auto___22093 = arguments.length;
var i__17830__auto___22094 = (0);
while(true){
if((i__17830__auto___22094 < len__17829__auto___22093)){
args22043.push((arguments[i__17830__auto___22094]));

var G__22095 = (i__17830__auto___22094 + (1));
i__17830__auto___22094 = G__22095;
continue;
} else {
}
break;
}

var G__22045 = args22043.length;
switch (G__22045) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22043.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21930__auto___22097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___22097){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___22097){
return (function (state_22069){
var state_val_22070 = (state_22069[(1)]);
if((state_val_22070 === (7))){
var inst_22065 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22071_22098 = state_22069__$1;
(statearr_22071_22098[(2)] = inst_22065);

(statearr_22071_22098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (1))){
var state_22069__$1 = state_22069;
var statearr_22072_22099 = state_22069__$1;
(statearr_22072_22099[(2)] = null);

(statearr_22072_22099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (4))){
var inst_22048 = (state_22069[(7)]);
var inst_22048__$1 = (state_22069[(2)]);
var inst_22049 = (inst_22048__$1 == null);
var state_22069__$1 = (function (){var statearr_22073 = state_22069;
(statearr_22073[(7)] = inst_22048__$1);

return statearr_22073;
})();
if(cljs.core.truth_(inst_22049)){
var statearr_22074_22100 = state_22069__$1;
(statearr_22074_22100[(1)] = (5));

} else {
var statearr_22075_22101 = state_22069__$1;
(statearr_22075_22101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (13))){
var state_22069__$1 = state_22069;
var statearr_22076_22102 = state_22069__$1;
(statearr_22076_22102[(2)] = null);

(statearr_22076_22102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (6))){
var inst_22048 = (state_22069[(7)]);
var state_22069__$1 = state_22069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22069__$1,(11),to,inst_22048);
} else {
if((state_val_22070 === (3))){
var inst_22067 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22069__$1,inst_22067);
} else {
if((state_val_22070 === (12))){
var state_22069__$1 = state_22069;
var statearr_22077_22103 = state_22069__$1;
(statearr_22077_22103[(2)] = null);

(statearr_22077_22103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (2))){
var state_22069__$1 = state_22069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22069__$1,(4),from);
} else {
if((state_val_22070 === (11))){
var inst_22058 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
if(cljs.core.truth_(inst_22058)){
var statearr_22078_22104 = state_22069__$1;
(statearr_22078_22104[(1)] = (12));

} else {
var statearr_22079_22105 = state_22069__$1;
(statearr_22079_22105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (9))){
var state_22069__$1 = state_22069;
var statearr_22080_22106 = state_22069__$1;
(statearr_22080_22106[(2)] = null);

(statearr_22080_22106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (5))){
var state_22069__$1 = state_22069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22081_22107 = state_22069__$1;
(statearr_22081_22107[(1)] = (8));

} else {
var statearr_22082_22108 = state_22069__$1;
(statearr_22082_22108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (14))){
var inst_22063 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22083_22109 = state_22069__$1;
(statearr_22083_22109[(2)] = inst_22063);

(statearr_22083_22109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (10))){
var inst_22055 = (state_22069[(2)]);
var state_22069__$1 = state_22069;
var statearr_22084_22110 = state_22069__$1;
(statearr_22084_22110[(2)] = inst_22055);

(statearr_22084_22110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22070 === (8))){
var inst_22052 = cljs.core.async.close_BANG_.call(null,to);
var state_22069__$1 = state_22069;
var statearr_22085_22111 = state_22069__$1;
(statearr_22085_22111[(2)] = inst_22052);

(statearr_22085_22111[(1)] = (10));


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
});})(c__21930__auto___22097))
;
return ((function (switch__21818__auto__,c__21930__auto___22097){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_22089 = [null,null,null,null,null,null,null,null];
(statearr_22089[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_22089[(1)] = (1));

return statearr_22089;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_22069){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22090){if((e22090 instanceof Object)){
var ex__21822__auto__ = e22090;
var statearr_22091_22112 = state_22069;
(statearr_22091_22112[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22113 = state_22069;
state_22069 = G__22113;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_22069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_22069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___22097))
})();
var state__21932__auto__ = (function (){var statearr_22092 = f__21931__auto__.call(null);
(statearr_22092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___22097);

return statearr_22092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___22097))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22297){
var vec__22298 = p__22297;
var v = cljs.core.nth.call(null,vec__22298,(0),null);
var p = cljs.core.nth.call(null,vec__22298,(1),null);
var job = vec__22298;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21930__auto___22480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___22480,res,vec__22298,v,p,job,jobs,results){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___22480,res,vec__22298,v,p,job,jobs,results){
return (function (state_22303){
var state_val_22304 = (state_22303[(1)]);
if((state_val_22304 === (1))){
var state_22303__$1 = state_22303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22303__$1,(2),res,v);
} else {
if((state_val_22304 === (2))){
var inst_22300 = (state_22303[(2)]);
var inst_22301 = cljs.core.async.close_BANG_.call(null,res);
var state_22303__$1 = (function (){var statearr_22305 = state_22303;
(statearr_22305[(7)] = inst_22300);

return statearr_22305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22303__$1,inst_22301);
} else {
return null;
}
}
});})(c__21930__auto___22480,res,vec__22298,v,p,job,jobs,results))
;
return ((function (switch__21818__auto__,c__21930__auto___22480,res,vec__22298,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0 = (function (){
var statearr_22309 = [null,null,null,null,null,null,null,null];
(statearr_22309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__);

(statearr_22309[(1)] = (1));

return statearr_22309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1 = (function (state_22303){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22310){if((e22310 instanceof Object)){
var ex__21822__auto__ = e22310;
var statearr_22311_22481 = state_22303;
(statearr_22311_22481[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22482 = state_22303;
state_22303 = G__22482;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = function(state_22303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1.call(this,state_22303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___22480,res,vec__22298,v,p,job,jobs,results))
})();
var state__21932__auto__ = (function (){var statearr_22312 = f__21931__auto__.call(null);
(statearr_22312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___22480);

return statearr_22312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___22480,res,vec__22298,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22313){
var vec__22314 = p__22313;
var v = cljs.core.nth.call(null,vec__22314,(0),null);
var p = cljs.core.nth.call(null,vec__22314,(1),null);
var job = vec__22314;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___22483 = n;
var __22484 = (0);
while(true){
if((__22484 < n__17674__auto___22483)){
var G__22315_22485 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22315_22485) {
case "compute":
var c__21930__auto___22487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22484,c__21930__auto___22487,G__22315_22485,n__17674__auto___22483,jobs,results,process,async){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (__22484,c__21930__auto___22487,G__22315_22485,n__17674__auto___22483,jobs,results,process,async){
return (function (state_22328){
var state_val_22329 = (state_22328[(1)]);
if((state_val_22329 === (1))){
var state_22328__$1 = state_22328;
var statearr_22330_22488 = state_22328__$1;
(statearr_22330_22488[(2)] = null);

(statearr_22330_22488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22329 === (2))){
var state_22328__$1 = state_22328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22328__$1,(4),jobs);
} else {
if((state_val_22329 === (3))){
var inst_22326 = (state_22328[(2)]);
var state_22328__$1 = state_22328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22328__$1,inst_22326);
} else {
if((state_val_22329 === (4))){
var inst_22318 = (state_22328[(2)]);
var inst_22319 = process.call(null,inst_22318);
var state_22328__$1 = state_22328;
if(cljs.core.truth_(inst_22319)){
var statearr_22331_22489 = state_22328__$1;
(statearr_22331_22489[(1)] = (5));

} else {
var statearr_22332_22490 = state_22328__$1;
(statearr_22332_22490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22329 === (5))){
var state_22328__$1 = state_22328;
var statearr_22333_22491 = state_22328__$1;
(statearr_22333_22491[(2)] = null);

(statearr_22333_22491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22329 === (6))){
var state_22328__$1 = state_22328;
var statearr_22334_22492 = state_22328__$1;
(statearr_22334_22492[(2)] = null);

(statearr_22334_22492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22329 === (7))){
var inst_22324 = (state_22328[(2)]);
var state_22328__$1 = state_22328;
var statearr_22335_22493 = state_22328__$1;
(statearr_22335_22493[(2)] = inst_22324);

(statearr_22335_22493[(1)] = (3));


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
});})(__22484,c__21930__auto___22487,G__22315_22485,n__17674__auto___22483,jobs,results,process,async))
;
return ((function (__22484,switch__21818__auto__,c__21930__auto___22487,G__22315_22485,n__17674__auto___22483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0 = (function (){
var statearr_22339 = [null,null,null,null,null,null,null];
(statearr_22339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__);

(statearr_22339[(1)] = (1));

return statearr_22339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1 = (function (state_22328){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22340){if((e22340 instanceof Object)){
var ex__21822__auto__ = e22340;
var statearr_22341_22494 = state_22328;
(statearr_22341_22494[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22495 = state_22328;
state_22328 = G__22495;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = function(state_22328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1.call(this,state_22328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__;
})()
;})(__22484,switch__21818__auto__,c__21930__auto___22487,G__22315_22485,n__17674__auto___22483,jobs,results,process,async))
})();
var state__21932__auto__ = (function (){var statearr_22342 = f__21931__auto__.call(null);
(statearr_22342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___22487);

return statearr_22342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(__22484,c__21930__auto___22487,G__22315_22485,n__17674__auto___22483,jobs,results,process,async))
);


break;
case "async":
var c__21930__auto___22496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22484,c__21930__auto___22496,G__22315_22485,n__17674__auto___22483,jobs,results,process,async){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (__22484,c__21930__auto___22496,G__22315_22485,n__17674__auto___22483,jobs,results,process,async){
return (function (state_22355){
var state_val_22356 = (state_22355[(1)]);
if((state_val_22356 === (1))){
var state_22355__$1 = state_22355;
var statearr_22357_22497 = state_22355__$1;
(statearr_22357_22497[(2)] = null);

(statearr_22357_22497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22356 === (2))){
var state_22355__$1 = state_22355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22355__$1,(4),jobs);
} else {
if((state_val_22356 === (3))){
var inst_22353 = (state_22355[(2)]);
var state_22355__$1 = state_22355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22355__$1,inst_22353);
} else {
if((state_val_22356 === (4))){
var inst_22345 = (state_22355[(2)]);
var inst_22346 = async.call(null,inst_22345);
var state_22355__$1 = state_22355;
if(cljs.core.truth_(inst_22346)){
var statearr_22358_22498 = state_22355__$1;
(statearr_22358_22498[(1)] = (5));

} else {
var statearr_22359_22499 = state_22355__$1;
(statearr_22359_22499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22356 === (5))){
var state_22355__$1 = state_22355;
var statearr_22360_22500 = state_22355__$1;
(statearr_22360_22500[(2)] = null);

(statearr_22360_22500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22356 === (6))){
var state_22355__$1 = state_22355;
var statearr_22361_22501 = state_22355__$1;
(statearr_22361_22501[(2)] = null);

(statearr_22361_22501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22356 === (7))){
var inst_22351 = (state_22355[(2)]);
var state_22355__$1 = state_22355;
var statearr_22362_22502 = state_22355__$1;
(statearr_22362_22502[(2)] = inst_22351);

(statearr_22362_22502[(1)] = (3));


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
});})(__22484,c__21930__auto___22496,G__22315_22485,n__17674__auto___22483,jobs,results,process,async))
;
return ((function (__22484,switch__21818__auto__,c__21930__auto___22496,G__22315_22485,n__17674__auto___22483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0 = (function (){
var statearr_22366 = [null,null,null,null,null,null,null];
(statearr_22366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__);

(statearr_22366[(1)] = (1));

return statearr_22366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1 = (function (state_22355){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22367){if((e22367 instanceof Object)){
var ex__21822__auto__ = e22367;
var statearr_22368_22503 = state_22355;
(statearr_22368_22503[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22504 = state_22355;
state_22355 = G__22504;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = function(state_22355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1.call(this,state_22355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__;
})()
;})(__22484,switch__21818__auto__,c__21930__auto___22496,G__22315_22485,n__17674__auto___22483,jobs,results,process,async))
})();
var state__21932__auto__ = (function (){var statearr_22369 = f__21931__auto__.call(null);
(statearr_22369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___22496);

return statearr_22369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(__22484,c__21930__auto___22496,G__22315_22485,n__17674__auto___22483,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22505 = (__22484 + (1));
__22484 = G__22505;
continue;
} else {
}
break;
}

var c__21930__auto___22506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___22506,jobs,results,process,async){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___22506,jobs,results,process,async){
return (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (1))){
var state_22391__$1 = state_22391;
var statearr_22393_22507 = state_22391__$1;
(statearr_22393_22507[(2)] = null);

(statearr_22393_22507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (2))){
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22391__$1,(4),from);
} else {
if((state_val_22392 === (3))){
var inst_22389 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22391__$1,inst_22389);
} else {
if((state_val_22392 === (4))){
var inst_22372 = (state_22391[(7)]);
var inst_22372__$1 = (state_22391[(2)]);
var inst_22373 = (inst_22372__$1 == null);
var state_22391__$1 = (function (){var statearr_22394 = state_22391;
(statearr_22394[(7)] = inst_22372__$1);

return statearr_22394;
})();
if(cljs.core.truth_(inst_22373)){
var statearr_22395_22508 = state_22391__$1;
(statearr_22395_22508[(1)] = (5));

} else {
var statearr_22396_22509 = state_22391__$1;
(statearr_22396_22509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (5))){
var inst_22375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22391__$1 = state_22391;
var statearr_22397_22510 = state_22391__$1;
(statearr_22397_22510[(2)] = inst_22375);

(statearr_22397_22510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (6))){
var inst_22377 = (state_22391[(8)]);
var inst_22372 = (state_22391[(7)]);
var inst_22377__$1 = cljs.core.async.chan.call(null,(1));
var inst_22378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22379 = [inst_22372,inst_22377__$1];
var inst_22380 = (new cljs.core.PersistentVector(null,2,(5),inst_22378,inst_22379,null));
var state_22391__$1 = (function (){var statearr_22398 = state_22391;
(statearr_22398[(8)] = inst_22377__$1);

return statearr_22398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22391__$1,(8),jobs,inst_22380);
} else {
if((state_val_22392 === (7))){
var inst_22387 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
var statearr_22399_22511 = state_22391__$1;
(statearr_22399_22511[(2)] = inst_22387);

(statearr_22399_22511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22392 === (8))){
var inst_22377 = (state_22391[(8)]);
var inst_22382 = (state_22391[(2)]);
var state_22391__$1 = (function (){var statearr_22400 = state_22391;
(statearr_22400[(9)] = inst_22382);

return statearr_22400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22391__$1,(9),results,inst_22377);
} else {
if((state_val_22392 === (9))){
var inst_22384 = (state_22391[(2)]);
var state_22391__$1 = (function (){var statearr_22401 = state_22391;
(statearr_22401[(10)] = inst_22384);

return statearr_22401;
})();
var statearr_22402_22512 = state_22391__$1;
(statearr_22402_22512[(2)] = null);

(statearr_22402_22512[(1)] = (2));


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
});})(c__21930__auto___22506,jobs,results,process,async))
;
return ((function (switch__21818__auto__,c__21930__auto___22506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0 = (function (){
var statearr_22406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__);

(statearr_22406[(1)] = (1));

return statearr_22406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1 = (function (state_22391){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22407){if((e22407 instanceof Object)){
var ex__21822__auto__ = e22407;
var statearr_22408_22513 = state_22391;
(statearr_22408_22513[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22514 = state_22391;
state_22391 = G__22514;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___22506,jobs,results,process,async))
})();
var state__21932__auto__ = (function (){var statearr_22409 = f__21931__auto__.call(null);
(statearr_22409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___22506);

return statearr_22409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___22506,jobs,results,process,async))
);


var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__,jobs,results,process,async){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__,jobs,results,process,async){
return (function (state_22447){
var state_val_22448 = (state_22447[(1)]);
if((state_val_22448 === (7))){
var inst_22443 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
var statearr_22449_22515 = state_22447__$1;
(statearr_22449_22515[(2)] = inst_22443);

(statearr_22449_22515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (20))){
var state_22447__$1 = state_22447;
var statearr_22450_22516 = state_22447__$1;
(statearr_22450_22516[(2)] = null);

(statearr_22450_22516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (1))){
var state_22447__$1 = state_22447;
var statearr_22451_22517 = state_22447__$1;
(statearr_22451_22517[(2)] = null);

(statearr_22451_22517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (4))){
var inst_22412 = (state_22447[(7)]);
var inst_22412__$1 = (state_22447[(2)]);
var inst_22413 = (inst_22412__$1 == null);
var state_22447__$1 = (function (){var statearr_22452 = state_22447;
(statearr_22452[(7)] = inst_22412__$1);

return statearr_22452;
})();
if(cljs.core.truth_(inst_22413)){
var statearr_22453_22518 = state_22447__$1;
(statearr_22453_22518[(1)] = (5));

} else {
var statearr_22454_22519 = state_22447__$1;
(statearr_22454_22519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (15))){
var inst_22425 = (state_22447[(8)]);
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22447__$1,(18),to,inst_22425);
} else {
if((state_val_22448 === (21))){
var inst_22438 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
var statearr_22455_22520 = state_22447__$1;
(statearr_22455_22520[(2)] = inst_22438);

(statearr_22455_22520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (13))){
var inst_22440 = (state_22447[(2)]);
var state_22447__$1 = (function (){var statearr_22456 = state_22447;
(statearr_22456[(9)] = inst_22440);

return statearr_22456;
})();
var statearr_22457_22521 = state_22447__$1;
(statearr_22457_22521[(2)] = null);

(statearr_22457_22521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (6))){
var inst_22412 = (state_22447[(7)]);
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22447__$1,(11),inst_22412);
} else {
if((state_val_22448 === (17))){
var inst_22433 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
if(cljs.core.truth_(inst_22433)){
var statearr_22458_22522 = state_22447__$1;
(statearr_22458_22522[(1)] = (19));

} else {
var statearr_22459_22523 = state_22447__$1;
(statearr_22459_22523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (3))){
var inst_22445 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22447__$1,inst_22445);
} else {
if((state_val_22448 === (12))){
var inst_22422 = (state_22447[(10)]);
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22447__$1,(14),inst_22422);
} else {
if((state_val_22448 === (2))){
var state_22447__$1 = state_22447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22447__$1,(4),results);
} else {
if((state_val_22448 === (19))){
var state_22447__$1 = state_22447;
var statearr_22460_22524 = state_22447__$1;
(statearr_22460_22524[(2)] = null);

(statearr_22460_22524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (11))){
var inst_22422 = (state_22447[(2)]);
var state_22447__$1 = (function (){var statearr_22461 = state_22447;
(statearr_22461[(10)] = inst_22422);

return statearr_22461;
})();
var statearr_22462_22525 = state_22447__$1;
(statearr_22462_22525[(2)] = null);

(statearr_22462_22525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (9))){
var state_22447__$1 = state_22447;
var statearr_22463_22526 = state_22447__$1;
(statearr_22463_22526[(2)] = null);

(statearr_22463_22526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (5))){
var state_22447__$1 = state_22447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22464_22527 = state_22447__$1;
(statearr_22464_22527[(1)] = (8));

} else {
var statearr_22465_22528 = state_22447__$1;
(statearr_22465_22528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (14))){
var inst_22425 = (state_22447[(8)]);
var inst_22427 = (state_22447[(11)]);
var inst_22425__$1 = (state_22447[(2)]);
var inst_22426 = (inst_22425__$1 == null);
var inst_22427__$1 = cljs.core.not.call(null,inst_22426);
var state_22447__$1 = (function (){var statearr_22466 = state_22447;
(statearr_22466[(8)] = inst_22425__$1);

(statearr_22466[(11)] = inst_22427__$1);

return statearr_22466;
})();
if(inst_22427__$1){
var statearr_22467_22529 = state_22447__$1;
(statearr_22467_22529[(1)] = (15));

} else {
var statearr_22468_22530 = state_22447__$1;
(statearr_22468_22530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (16))){
var inst_22427 = (state_22447[(11)]);
var state_22447__$1 = state_22447;
var statearr_22469_22531 = state_22447__$1;
(statearr_22469_22531[(2)] = inst_22427);

(statearr_22469_22531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (10))){
var inst_22419 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
var statearr_22470_22532 = state_22447__$1;
(statearr_22470_22532[(2)] = inst_22419);

(statearr_22470_22532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (18))){
var inst_22430 = (state_22447[(2)]);
var state_22447__$1 = state_22447;
var statearr_22471_22533 = state_22447__$1;
(statearr_22471_22533[(2)] = inst_22430);

(statearr_22471_22533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22448 === (8))){
var inst_22416 = cljs.core.async.close_BANG_.call(null,to);
var state_22447__$1 = state_22447;
var statearr_22472_22534 = state_22447__$1;
(statearr_22472_22534[(2)] = inst_22416);

(statearr_22472_22534[(1)] = (10));


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
});})(c__21930__auto__,jobs,results,process,async))
;
return ((function (switch__21818__auto__,c__21930__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0 = (function (){
var statearr_22476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__);

(statearr_22476[(1)] = (1));

return statearr_22476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1 = (function (state_22447){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22477){if((e22477 instanceof Object)){
var ex__21822__auto__ = e22477;
var statearr_22478_22535 = state_22447;
(statearr_22478_22535[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22536 = state_22447;
state_22447 = G__22536;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__ = function(state_22447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1.call(this,state_22447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__,jobs,results,process,async))
})();
var state__21932__auto__ = (function (){var statearr_22479 = f__21931__auto__.call(null);
(statearr_22479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_22479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__,jobs,results,process,async))
);

return c__21930__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22537 = [];
var len__17829__auto___22540 = arguments.length;
var i__17830__auto___22541 = (0);
while(true){
if((i__17830__auto___22541 < len__17829__auto___22540)){
args22537.push((arguments[i__17830__auto___22541]));

var G__22542 = (i__17830__auto___22541 + (1));
i__17830__auto___22541 = G__22542;
continue;
} else {
}
break;
}

var G__22539 = args22537.length;
switch (G__22539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22537.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22544 = [];
var len__17829__auto___22547 = arguments.length;
var i__17830__auto___22548 = (0);
while(true){
if((i__17830__auto___22548 < len__17829__auto___22547)){
args22544.push((arguments[i__17830__auto___22548]));

var G__22549 = (i__17830__auto___22548 + (1));
i__17830__auto___22548 = G__22549;
continue;
} else {
}
break;
}

var G__22546 = args22544.length;
switch (G__22546) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22544.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22551 = [];
var len__17829__auto___22604 = arguments.length;
var i__17830__auto___22605 = (0);
while(true){
if((i__17830__auto___22605 < len__17829__auto___22604)){
args22551.push((arguments[i__17830__auto___22605]));

var G__22606 = (i__17830__auto___22605 + (1));
i__17830__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var G__22553 = args22551.length;
switch (G__22553) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22551.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21930__auto___22608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___22608,tc,fc){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___22608,tc,fc){
return (function (state_22579){
var state_val_22580 = (state_22579[(1)]);
if((state_val_22580 === (7))){
var inst_22575 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22581_22609 = state_22579__$1;
(statearr_22581_22609[(2)] = inst_22575);

(statearr_22581_22609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (1))){
var state_22579__$1 = state_22579;
var statearr_22582_22610 = state_22579__$1;
(statearr_22582_22610[(2)] = null);

(statearr_22582_22610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (4))){
var inst_22556 = (state_22579[(7)]);
var inst_22556__$1 = (state_22579[(2)]);
var inst_22557 = (inst_22556__$1 == null);
var state_22579__$1 = (function (){var statearr_22583 = state_22579;
(statearr_22583[(7)] = inst_22556__$1);

return statearr_22583;
})();
if(cljs.core.truth_(inst_22557)){
var statearr_22584_22611 = state_22579__$1;
(statearr_22584_22611[(1)] = (5));

} else {
var statearr_22585_22612 = state_22579__$1;
(statearr_22585_22612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (13))){
var state_22579__$1 = state_22579;
var statearr_22586_22613 = state_22579__$1;
(statearr_22586_22613[(2)] = null);

(statearr_22586_22613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (6))){
var inst_22556 = (state_22579[(7)]);
var inst_22562 = p.call(null,inst_22556);
var state_22579__$1 = state_22579;
if(cljs.core.truth_(inst_22562)){
var statearr_22587_22614 = state_22579__$1;
(statearr_22587_22614[(1)] = (9));

} else {
var statearr_22588_22615 = state_22579__$1;
(statearr_22588_22615[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (3))){
var inst_22577 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22579__$1,inst_22577);
} else {
if((state_val_22580 === (12))){
var state_22579__$1 = state_22579;
var statearr_22589_22616 = state_22579__$1;
(statearr_22589_22616[(2)] = null);

(statearr_22589_22616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (2))){
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22579__$1,(4),ch);
} else {
if((state_val_22580 === (11))){
var inst_22556 = (state_22579[(7)]);
var inst_22566 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22579__$1,(8),inst_22566,inst_22556);
} else {
if((state_val_22580 === (9))){
var state_22579__$1 = state_22579;
var statearr_22590_22617 = state_22579__$1;
(statearr_22590_22617[(2)] = tc);

(statearr_22590_22617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (5))){
var inst_22559 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22560 = cljs.core.async.close_BANG_.call(null,fc);
var state_22579__$1 = (function (){var statearr_22591 = state_22579;
(statearr_22591[(8)] = inst_22559);

return statearr_22591;
})();
var statearr_22592_22618 = state_22579__$1;
(statearr_22592_22618[(2)] = inst_22560);

(statearr_22592_22618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (14))){
var inst_22573 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22593_22619 = state_22579__$1;
(statearr_22593_22619[(2)] = inst_22573);

(statearr_22593_22619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (10))){
var state_22579__$1 = state_22579;
var statearr_22594_22620 = state_22579__$1;
(statearr_22594_22620[(2)] = fc);

(statearr_22594_22620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (8))){
var inst_22568 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
if(cljs.core.truth_(inst_22568)){
var statearr_22595_22621 = state_22579__$1;
(statearr_22595_22621[(1)] = (12));

} else {
var statearr_22596_22622 = state_22579__$1;
(statearr_22596_22622[(1)] = (13));

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
});})(c__21930__auto___22608,tc,fc))
;
return ((function (switch__21818__auto__,c__21930__auto___22608,tc,fc){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_22600 = [null,null,null,null,null,null,null,null,null];
(statearr_22600[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_22600[(1)] = (1));

return statearr_22600;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_22579){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22601){if((e22601 instanceof Object)){
var ex__21822__auto__ = e22601;
var statearr_22602_22623 = state_22579;
(statearr_22602_22623[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22624 = state_22579;
state_22579 = G__22624;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_22579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_22579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___22608,tc,fc))
})();
var state__21932__auto__ = (function (){var statearr_22603 = f__21931__auto__.call(null);
(statearr_22603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___22608);

return statearr_22603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___22608,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__){
return (function (state_22688){
var state_val_22689 = (state_22688[(1)]);
if((state_val_22689 === (7))){
var inst_22684 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22690_22711 = state_22688__$1;
(statearr_22690_22711[(2)] = inst_22684);

(statearr_22690_22711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (1))){
var inst_22668 = init;
var state_22688__$1 = (function (){var statearr_22691 = state_22688;
(statearr_22691[(7)] = inst_22668);

return statearr_22691;
})();
var statearr_22692_22712 = state_22688__$1;
(statearr_22692_22712[(2)] = null);

(statearr_22692_22712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (4))){
var inst_22671 = (state_22688[(8)]);
var inst_22671__$1 = (state_22688[(2)]);
var inst_22672 = (inst_22671__$1 == null);
var state_22688__$1 = (function (){var statearr_22693 = state_22688;
(statearr_22693[(8)] = inst_22671__$1);

return statearr_22693;
})();
if(cljs.core.truth_(inst_22672)){
var statearr_22694_22713 = state_22688__$1;
(statearr_22694_22713[(1)] = (5));

} else {
var statearr_22695_22714 = state_22688__$1;
(statearr_22695_22714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (6))){
var inst_22668 = (state_22688[(7)]);
var inst_22675 = (state_22688[(9)]);
var inst_22671 = (state_22688[(8)]);
var inst_22675__$1 = f.call(null,inst_22668,inst_22671);
var inst_22676 = cljs.core.reduced_QMARK_.call(null,inst_22675__$1);
var state_22688__$1 = (function (){var statearr_22696 = state_22688;
(statearr_22696[(9)] = inst_22675__$1);

return statearr_22696;
})();
if(inst_22676){
var statearr_22697_22715 = state_22688__$1;
(statearr_22697_22715[(1)] = (8));

} else {
var statearr_22698_22716 = state_22688__$1;
(statearr_22698_22716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (3))){
var inst_22686 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22688__$1,inst_22686);
} else {
if((state_val_22689 === (2))){
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22688__$1,(4),ch);
} else {
if((state_val_22689 === (9))){
var inst_22675 = (state_22688[(9)]);
var inst_22668 = inst_22675;
var state_22688__$1 = (function (){var statearr_22699 = state_22688;
(statearr_22699[(7)] = inst_22668);

return statearr_22699;
})();
var statearr_22700_22717 = state_22688__$1;
(statearr_22700_22717[(2)] = null);

(statearr_22700_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (5))){
var inst_22668 = (state_22688[(7)]);
var state_22688__$1 = state_22688;
var statearr_22701_22718 = state_22688__$1;
(statearr_22701_22718[(2)] = inst_22668);

(statearr_22701_22718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (10))){
var inst_22682 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22702_22719 = state_22688__$1;
(statearr_22702_22719[(2)] = inst_22682);

(statearr_22702_22719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (8))){
var inst_22675 = (state_22688[(9)]);
var inst_22678 = cljs.core.deref.call(null,inst_22675);
var state_22688__$1 = state_22688;
var statearr_22703_22720 = state_22688__$1;
(statearr_22703_22720[(2)] = inst_22678);

(statearr_22703_22720[(1)] = (10));


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
});})(c__21930__auto__))
;
return ((function (switch__21818__auto__,c__21930__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21819__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21819__auto____0 = (function (){
var statearr_22707 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22707[(0)] = cljs$core$async$reduce_$_state_machine__21819__auto__);

(statearr_22707[(1)] = (1));

return statearr_22707;
});
var cljs$core$async$reduce_$_state_machine__21819__auto____1 = (function (state_22688){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22708){if((e22708 instanceof Object)){
var ex__21822__auto__ = e22708;
var statearr_22709_22721 = state_22688;
(statearr_22709_22721[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22722 = state_22688;
state_22688 = G__22722;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21819__auto__ = function(state_22688){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21819__auto____1.call(this,state_22688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21819__auto____0;
cljs$core$async$reduce_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21819__auto____1;
return cljs$core$async$reduce_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__))
})();
var state__21932__auto__ = (function (){var statearr_22710 = f__21931__auto__.call(null);
(statearr_22710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_22710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__))
);

return c__21930__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22723 = [];
var len__17829__auto___22775 = arguments.length;
var i__17830__auto___22776 = (0);
while(true){
if((i__17830__auto___22776 < len__17829__auto___22775)){
args22723.push((arguments[i__17830__auto___22776]));

var G__22777 = (i__17830__auto___22776 + (1));
i__17830__auto___22776 = G__22777;
continue;
} else {
}
break;
}

var G__22725 = args22723.length;
switch (G__22725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22723.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__){
return (function (state_22750){
var state_val_22751 = (state_22750[(1)]);
if((state_val_22751 === (7))){
var inst_22732 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22752_22779 = state_22750__$1;
(statearr_22752_22779[(2)] = inst_22732);

(statearr_22752_22779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (1))){
var inst_22726 = cljs.core.seq.call(null,coll);
var inst_22727 = inst_22726;
var state_22750__$1 = (function (){var statearr_22753 = state_22750;
(statearr_22753[(7)] = inst_22727);

return statearr_22753;
})();
var statearr_22754_22780 = state_22750__$1;
(statearr_22754_22780[(2)] = null);

(statearr_22754_22780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (4))){
var inst_22727 = (state_22750[(7)]);
var inst_22730 = cljs.core.first.call(null,inst_22727);
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22750__$1,(7),ch,inst_22730);
} else {
if((state_val_22751 === (13))){
var inst_22744 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22755_22781 = state_22750__$1;
(statearr_22755_22781[(2)] = inst_22744);

(statearr_22755_22781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (6))){
var inst_22735 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
if(cljs.core.truth_(inst_22735)){
var statearr_22756_22782 = state_22750__$1;
(statearr_22756_22782[(1)] = (8));

} else {
var statearr_22757_22783 = state_22750__$1;
(statearr_22757_22783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (3))){
var inst_22748 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22750__$1,inst_22748);
} else {
if((state_val_22751 === (12))){
var state_22750__$1 = state_22750;
var statearr_22758_22784 = state_22750__$1;
(statearr_22758_22784[(2)] = null);

(statearr_22758_22784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (2))){
var inst_22727 = (state_22750[(7)]);
var state_22750__$1 = state_22750;
if(cljs.core.truth_(inst_22727)){
var statearr_22759_22785 = state_22750__$1;
(statearr_22759_22785[(1)] = (4));

} else {
var statearr_22760_22786 = state_22750__$1;
(statearr_22760_22786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (11))){
var inst_22741 = cljs.core.async.close_BANG_.call(null,ch);
var state_22750__$1 = state_22750;
var statearr_22761_22787 = state_22750__$1;
(statearr_22761_22787[(2)] = inst_22741);

(statearr_22761_22787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (9))){
var state_22750__$1 = state_22750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22762_22788 = state_22750__$1;
(statearr_22762_22788[(1)] = (11));

} else {
var statearr_22763_22789 = state_22750__$1;
(statearr_22763_22789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (5))){
var inst_22727 = (state_22750[(7)]);
var state_22750__$1 = state_22750;
var statearr_22764_22790 = state_22750__$1;
(statearr_22764_22790[(2)] = inst_22727);

(statearr_22764_22790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (10))){
var inst_22746 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22765_22791 = state_22750__$1;
(statearr_22765_22791[(2)] = inst_22746);

(statearr_22765_22791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (8))){
var inst_22727 = (state_22750[(7)]);
var inst_22737 = cljs.core.next.call(null,inst_22727);
var inst_22727__$1 = inst_22737;
var state_22750__$1 = (function (){var statearr_22766 = state_22750;
(statearr_22766[(7)] = inst_22727__$1);

return statearr_22766;
})();
var statearr_22767_22792 = state_22750__$1;
(statearr_22767_22792[(2)] = null);

(statearr_22767_22792[(1)] = (2));


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
});})(c__21930__auto__))
;
return ((function (switch__21818__auto__,c__21930__auto__){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_22771 = [null,null,null,null,null,null,null,null];
(statearr_22771[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_22771[(1)] = (1));

return statearr_22771;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_22750){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_22750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e22772){if((e22772 instanceof Object)){
var ex__21822__auto__ = e22772;
var statearr_22773_22793 = state_22750;
(statearr_22773_22793[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22794 = state_22750;
state_22750 = G__22794;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_22750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_22750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__))
})();
var state__21932__auto__ = (function (){var statearr_22774 = f__21931__auto__.call(null);
(statearr_22774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_22774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__))
);

return c__21930__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23016 = (function (mult,ch,cs,meta23017){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23017 = meta23017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23018,meta23017__$1){
var self__ = this;
var _23018__$1 = this;
return (new cljs.core.async.t_cljs$core$async23016(self__.mult,self__.ch,self__.cs,meta23017__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23018){
var self__ = this;
var _23018__$1 = this;
return self__.meta23017;
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23017","meta23017",-2035036876,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23016";

cljs.core.async.t_cljs$core$async23016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23016");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23016 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23016(mult__$1,ch__$1,cs__$1,meta23017){
return (new cljs.core.async.t_cljs$core$async23016(mult__$1,ch__$1,cs__$1,meta23017));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23016(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21930__auto___23237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___23237,cs,m,dchan,dctr,done){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___23237,cs,m,dchan,dctr,done){
return (function (state_23149){
var state_val_23150 = (state_23149[(1)]);
if((state_val_23150 === (7))){
var inst_23145 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23151_23238 = state_23149__$1;
(statearr_23151_23238[(2)] = inst_23145);

(statearr_23151_23238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (20))){
var inst_23050 = (state_23149[(7)]);
var inst_23060 = cljs.core.first.call(null,inst_23050);
var inst_23061 = cljs.core.nth.call(null,inst_23060,(0),null);
var inst_23062 = cljs.core.nth.call(null,inst_23060,(1),null);
var state_23149__$1 = (function (){var statearr_23152 = state_23149;
(statearr_23152[(8)] = inst_23061);

return statearr_23152;
})();
if(cljs.core.truth_(inst_23062)){
var statearr_23153_23239 = state_23149__$1;
(statearr_23153_23239[(1)] = (22));

} else {
var statearr_23154_23240 = state_23149__$1;
(statearr_23154_23240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (27))){
var inst_23097 = (state_23149[(9)]);
var inst_23092 = (state_23149[(10)]);
var inst_23090 = (state_23149[(11)]);
var inst_23021 = (state_23149[(12)]);
var inst_23097__$1 = cljs.core._nth.call(null,inst_23090,inst_23092);
var inst_23098 = cljs.core.async.put_BANG_.call(null,inst_23097__$1,inst_23021,done);
var state_23149__$1 = (function (){var statearr_23155 = state_23149;
(statearr_23155[(9)] = inst_23097__$1);

return statearr_23155;
})();
if(cljs.core.truth_(inst_23098)){
var statearr_23156_23241 = state_23149__$1;
(statearr_23156_23241[(1)] = (30));

} else {
var statearr_23157_23242 = state_23149__$1;
(statearr_23157_23242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (1))){
var state_23149__$1 = state_23149;
var statearr_23158_23243 = state_23149__$1;
(statearr_23158_23243[(2)] = null);

(statearr_23158_23243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (24))){
var inst_23050 = (state_23149[(7)]);
var inst_23067 = (state_23149[(2)]);
var inst_23068 = cljs.core.next.call(null,inst_23050);
var inst_23030 = inst_23068;
var inst_23031 = null;
var inst_23032 = (0);
var inst_23033 = (0);
var state_23149__$1 = (function (){var statearr_23159 = state_23149;
(statearr_23159[(13)] = inst_23030);

(statearr_23159[(14)] = inst_23033);

(statearr_23159[(15)] = inst_23032);

(statearr_23159[(16)] = inst_23067);

(statearr_23159[(17)] = inst_23031);

return statearr_23159;
})();
var statearr_23160_23244 = state_23149__$1;
(statearr_23160_23244[(2)] = null);

(statearr_23160_23244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (39))){
var state_23149__$1 = state_23149;
var statearr_23164_23245 = state_23149__$1;
(statearr_23164_23245[(2)] = null);

(statearr_23164_23245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (4))){
var inst_23021 = (state_23149[(12)]);
var inst_23021__$1 = (state_23149[(2)]);
var inst_23022 = (inst_23021__$1 == null);
var state_23149__$1 = (function (){var statearr_23165 = state_23149;
(statearr_23165[(12)] = inst_23021__$1);

return statearr_23165;
})();
if(cljs.core.truth_(inst_23022)){
var statearr_23166_23246 = state_23149__$1;
(statearr_23166_23246[(1)] = (5));

} else {
var statearr_23167_23247 = state_23149__$1;
(statearr_23167_23247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (15))){
var inst_23030 = (state_23149[(13)]);
var inst_23033 = (state_23149[(14)]);
var inst_23032 = (state_23149[(15)]);
var inst_23031 = (state_23149[(17)]);
var inst_23046 = (state_23149[(2)]);
var inst_23047 = (inst_23033 + (1));
var tmp23161 = inst_23030;
var tmp23162 = inst_23032;
var tmp23163 = inst_23031;
var inst_23030__$1 = tmp23161;
var inst_23031__$1 = tmp23163;
var inst_23032__$1 = tmp23162;
var inst_23033__$1 = inst_23047;
var state_23149__$1 = (function (){var statearr_23168 = state_23149;
(statearr_23168[(13)] = inst_23030__$1);

(statearr_23168[(14)] = inst_23033__$1);

(statearr_23168[(15)] = inst_23032__$1);

(statearr_23168[(17)] = inst_23031__$1);

(statearr_23168[(18)] = inst_23046);

return statearr_23168;
})();
var statearr_23169_23248 = state_23149__$1;
(statearr_23169_23248[(2)] = null);

(statearr_23169_23248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (21))){
var inst_23071 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23173_23249 = state_23149__$1;
(statearr_23173_23249[(2)] = inst_23071);

(statearr_23173_23249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (31))){
var inst_23097 = (state_23149[(9)]);
var inst_23101 = done.call(null,null);
var inst_23102 = cljs.core.async.untap_STAR_.call(null,m,inst_23097);
var state_23149__$1 = (function (){var statearr_23174 = state_23149;
(statearr_23174[(19)] = inst_23101);

return statearr_23174;
})();
var statearr_23175_23250 = state_23149__$1;
(statearr_23175_23250[(2)] = inst_23102);

(statearr_23175_23250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (32))){
var inst_23089 = (state_23149[(20)]);
var inst_23091 = (state_23149[(21)]);
var inst_23092 = (state_23149[(10)]);
var inst_23090 = (state_23149[(11)]);
var inst_23104 = (state_23149[(2)]);
var inst_23105 = (inst_23092 + (1));
var tmp23170 = inst_23089;
var tmp23171 = inst_23091;
var tmp23172 = inst_23090;
var inst_23089__$1 = tmp23170;
var inst_23090__$1 = tmp23172;
var inst_23091__$1 = tmp23171;
var inst_23092__$1 = inst_23105;
var state_23149__$1 = (function (){var statearr_23176 = state_23149;
(statearr_23176[(20)] = inst_23089__$1);

(statearr_23176[(22)] = inst_23104);

(statearr_23176[(21)] = inst_23091__$1);

(statearr_23176[(10)] = inst_23092__$1);

(statearr_23176[(11)] = inst_23090__$1);

return statearr_23176;
})();
var statearr_23177_23251 = state_23149__$1;
(statearr_23177_23251[(2)] = null);

(statearr_23177_23251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (40))){
var inst_23117 = (state_23149[(23)]);
var inst_23121 = done.call(null,null);
var inst_23122 = cljs.core.async.untap_STAR_.call(null,m,inst_23117);
var state_23149__$1 = (function (){var statearr_23178 = state_23149;
(statearr_23178[(24)] = inst_23121);

return statearr_23178;
})();
var statearr_23179_23252 = state_23149__$1;
(statearr_23179_23252[(2)] = inst_23122);

(statearr_23179_23252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (33))){
var inst_23108 = (state_23149[(25)]);
var inst_23110 = cljs.core.chunked_seq_QMARK_.call(null,inst_23108);
var state_23149__$1 = state_23149;
if(inst_23110){
var statearr_23180_23253 = state_23149__$1;
(statearr_23180_23253[(1)] = (36));

} else {
var statearr_23181_23254 = state_23149__$1;
(statearr_23181_23254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (13))){
var inst_23040 = (state_23149[(26)]);
var inst_23043 = cljs.core.async.close_BANG_.call(null,inst_23040);
var state_23149__$1 = state_23149;
var statearr_23182_23255 = state_23149__$1;
(statearr_23182_23255[(2)] = inst_23043);

(statearr_23182_23255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (22))){
var inst_23061 = (state_23149[(8)]);
var inst_23064 = cljs.core.async.close_BANG_.call(null,inst_23061);
var state_23149__$1 = state_23149;
var statearr_23183_23256 = state_23149__$1;
(statearr_23183_23256[(2)] = inst_23064);

(statearr_23183_23256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (36))){
var inst_23108 = (state_23149[(25)]);
var inst_23112 = cljs.core.chunk_first.call(null,inst_23108);
var inst_23113 = cljs.core.chunk_rest.call(null,inst_23108);
var inst_23114 = cljs.core.count.call(null,inst_23112);
var inst_23089 = inst_23113;
var inst_23090 = inst_23112;
var inst_23091 = inst_23114;
var inst_23092 = (0);
var state_23149__$1 = (function (){var statearr_23184 = state_23149;
(statearr_23184[(20)] = inst_23089);

(statearr_23184[(21)] = inst_23091);

(statearr_23184[(10)] = inst_23092);

(statearr_23184[(11)] = inst_23090);

return statearr_23184;
})();
var statearr_23185_23257 = state_23149__$1;
(statearr_23185_23257[(2)] = null);

(statearr_23185_23257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (41))){
var inst_23108 = (state_23149[(25)]);
var inst_23124 = (state_23149[(2)]);
var inst_23125 = cljs.core.next.call(null,inst_23108);
var inst_23089 = inst_23125;
var inst_23090 = null;
var inst_23091 = (0);
var inst_23092 = (0);
var state_23149__$1 = (function (){var statearr_23186 = state_23149;
(statearr_23186[(27)] = inst_23124);

(statearr_23186[(20)] = inst_23089);

(statearr_23186[(21)] = inst_23091);

(statearr_23186[(10)] = inst_23092);

(statearr_23186[(11)] = inst_23090);

return statearr_23186;
})();
var statearr_23187_23258 = state_23149__$1;
(statearr_23187_23258[(2)] = null);

(statearr_23187_23258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (43))){
var state_23149__$1 = state_23149;
var statearr_23188_23259 = state_23149__$1;
(statearr_23188_23259[(2)] = null);

(statearr_23188_23259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (29))){
var inst_23133 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23189_23260 = state_23149__$1;
(statearr_23189_23260[(2)] = inst_23133);

(statearr_23189_23260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (44))){
var inst_23142 = (state_23149[(2)]);
var state_23149__$1 = (function (){var statearr_23190 = state_23149;
(statearr_23190[(28)] = inst_23142);

return statearr_23190;
})();
var statearr_23191_23261 = state_23149__$1;
(statearr_23191_23261[(2)] = null);

(statearr_23191_23261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (6))){
var inst_23081 = (state_23149[(29)]);
var inst_23080 = cljs.core.deref.call(null,cs);
var inst_23081__$1 = cljs.core.keys.call(null,inst_23080);
var inst_23082 = cljs.core.count.call(null,inst_23081__$1);
var inst_23083 = cljs.core.reset_BANG_.call(null,dctr,inst_23082);
var inst_23088 = cljs.core.seq.call(null,inst_23081__$1);
var inst_23089 = inst_23088;
var inst_23090 = null;
var inst_23091 = (0);
var inst_23092 = (0);
var state_23149__$1 = (function (){var statearr_23192 = state_23149;
(statearr_23192[(29)] = inst_23081__$1);

(statearr_23192[(20)] = inst_23089);

(statearr_23192[(21)] = inst_23091);

(statearr_23192[(10)] = inst_23092);

(statearr_23192[(11)] = inst_23090);

(statearr_23192[(30)] = inst_23083);

return statearr_23192;
})();
var statearr_23193_23262 = state_23149__$1;
(statearr_23193_23262[(2)] = null);

(statearr_23193_23262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (28))){
var inst_23089 = (state_23149[(20)]);
var inst_23108 = (state_23149[(25)]);
var inst_23108__$1 = cljs.core.seq.call(null,inst_23089);
var state_23149__$1 = (function (){var statearr_23194 = state_23149;
(statearr_23194[(25)] = inst_23108__$1);

return statearr_23194;
})();
if(inst_23108__$1){
var statearr_23195_23263 = state_23149__$1;
(statearr_23195_23263[(1)] = (33));

} else {
var statearr_23196_23264 = state_23149__$1;
(statearr_23196_23264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (25))){
var inst_23091 = (state_23149[(21)]);
var inst_23092 = (state_23149[(10)]);
var inst_23094 = (inst_23092 < inst_23091);
var inst_23095 = inst_23094;
var state_23149__$1 = state_23149;
if(cljs.core.truth_(inst_23095)){
var statearr_23197_23265 = state_23149__$1;
(statearr_23197_23265[(1)] = (27));

} else {
var statearr_23198_23266 = state_23149__$1;
(statearr_23198_23266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (34))){
var state_23149__$1 = state_23149;
var statearr_23199_23267 = state_23149__$1;
(statearr_23199_23267[(2)] = null);

(statearr_23199_23267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (17))){
var state_23149__$1 = state_23149;
var statearr_23200_23268 = state_23149__$1;
(statearr_23200_23268[(2)] = null);

(statearr_23200_23268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (3))){
var inst_23147 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23149__$1,inst_23147);
} else {
if((state_val_23150 === (12))){
var inst_23076 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23201_23269 = state_23149__$1;
(statearr_23201_23269[(2)] = inst_23076);

(statearr_23201_23269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (2))){
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23149__$1,(4),ch);
} else {
if((state_val_23150 === (23))){
var state_23149__$1 = state_23149;
var statearr_23202_23270 = state_23149__$1;
(statearr_23202_23270[(2)] = null);

(statearr_23202_23270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (35))){
var inst_23131 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23203_23271 = state_23149__$1;
(statearr_23203_23271[(2)] = inst_23131);

(statearr_23203_23271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (19))){
var inst_23050 = (state_23149[(7)]);
var inst_23054 = cljs.core.chunk_first.call(null,inst_23050);
var inst_23055 = cljs.core.chunk_rest.call(null,inst_23050);
var inst_23056 = cljs.core.count.call(null,inst_23054);
var inst_23030 = inst_23055;
var inst_23031 = inst_23054;
var inst_23032 = inst_23056;
var inst_23033 = (0);
var state_23149__$1 = (function (){var statearr_23204 = state_23149;
(statearr_23204[(13)] = inst_23030);

(statearr_23204[(14)] = inst_23033);

(statearr_23204[(15)] = inst_23032);

(statearr_23204[(17)] = inst_23031);

return statearr_23204;
})();
var statearr_23205_23272 = state_23149__$1;
(statearr_23205_23272[(2)] = null);

(statearr_23205_23272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (11))){
var inst_23050 = (state_23149[(7)]);
var inst_23030 = (state_23149[(13)]);
var inst_23050__$1 = cljs.core.seq.call(null,inst_23030);
var state_23149__$1 = (function (){var statearr_23206 = state_23149;
(statearr_23206[(7)] = inst_23050__$1);

return statearr_23206;
})();
if(inst_23050__$1){
var statearr_23207_23273 = state_23149__$1;
(statearr_23207_23273[(1)] = (16));

} else {
var statearr_23208_23274 = state_23149__$1;
(statearr_23208_23274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (9))){
var inst_23078 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23209_23275 = state_23149__$1;
(statearr_23209_23275[(2)] = inst_23078);

(statearr_23209_23275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (5))){
var inst_23028 = cljs.core.deref.call(null,cs);
var inst_23029 = cljs.core.seq.call(null,inst_23028);
var inst_23030 = inst_23029;
var inst_23031 = null;
var inst_23032 = (0);
var inst_23033 = (0);
var state_23149__$1 = (function (){var statearr_23210 = state_23149;
(statearr_23210[(13)] = inst_23030);

(statearr_23210[(14)] = inst_23033);

(statearr_23210[(15)] = inst_23032);

(statearr_23210[(17)] = inst_23031);

return statearr_23210;
})();
var statearr_23211_23276 = state_23149__$1;
(statearr_23211_23276[(2)] = null);

(statearr_23211_23276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (14))){
var state_23149__$1 = state_23149;
var statearr_23212_23277 = state_23149__$1;
(statearr_23212_23277[(2)] = null);

(statearr_23212_23277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (45))){
var inst_23139 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23213_23278 = state_23149__$1;
(statearr_23213_23278[(2)] = inst_23139);

(statearr_23213_23278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (26))){
var inst_23081 = (state_23149[(29)]);
var inst_23135 = (state_23149[(2)]);
var inst_23136 = cljs.core.seq.call(null,inst_23081);
var state_23149__$1 = (function (){var statearr_23214 = state_23149;
(statearr_23214[(31)] = inst_23135);

return statearr_23214;
})();
if(inst_23136){
var statearr_23215_23279 = state_23149__$1;
(statearr_23215_23279[(1)] = (42));

} else {
var statearr_23216_23280 = state_23149__$1;
(statearr_23216_23280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (16))){
var inst_23050 = (state_23149[(7)]);
var inst_23052 = cljs.core.chunked_seq_QMARK_.call(null,inst_23050);
var state_23149__$1 = state_23149;
if(inst_23052){
var statearr_23217_23281 = state_23149__$1;
(statearr_23217_23281[(1)] = (19));

} else {
var statearr_23218_23282 = state_23149__$1;
(statearr_23218_23282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (38))){
var inst_23128 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23219_23283 = state_23149__$1;
(statearr_23219_23283[(2)] = inst_23128);

(statearr_23219_23283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (30))){
var state_23149__$1 = state_23149;
var statearr_23220_23284 = state_23149__$1;
(statearr_23220_23284[(2)] = null);

(statearr_23220_23284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (10))){
var inst_23033 = (state_23149[(14)]);
var inst_23031 = (state_23149[(17)]);
var inst_23039 = cljs.core._nth.call(null,inst_23031,inst_23033);
var inst_23040 = cljs.core.nth.call(null,inst_23039,(0),null);
var inst_23041 = cljs.core.nth.call(null,inst_23039,(1),null);
var state_23149__$1 = (function (){var statearr_23221 = state_23149;
(statearr_23221[(26)] = inst_23040);

return statearr_23221;
})();
if(cljs.core.truth_(inst_23041)){
var statearr_23222_23285 = state_23149__$1;
(statearr_23222_23285[(1)] = (13));

} else {
var statearr_23223_23286 = state_23149__$1;
(statearr_23223_23286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (18))){
var inst_23074 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23224_23287 = state_23149__$1;
(statearr_23224_23287[(2)] = inst_23074);

(statearr_23224_23287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (42))){
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23149__$1,(45),dchan);
} else {
if((state_val_23150 === (37))){
var inst_23108 = (state_23149[(25)]);
var inst_23117 = (state_23149[(23)]);
var inst_23021 = (state_23149[(12)]);
var inst_23117__$1 = cljs.core.first.call(null,inst_23108);
var inst_23118 = cljs.core.async.put_BANG_.call(null,inst_23117__$1,inst_23021,done);
var state_23149__$1 = (function (){var statearr_23225 = state_23149;
(statearr_23225[(23)] = inst_23117__$1);

return statearr_23225;
})();
if(cljs.core.truth_(inst_23118)){
var statearr_23226_23288 = state_23149__$1;
(statearr_23226_23288[(1)] = (39));

} else {
var statearr_23227_23289 = state_23149__$1;
(statearr_23227_23289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (8))){
var inst_23033 = (state_23149[(14)]);
var inst_23032 = (state_23149[(15)]);
var inst_23035 = (inst_23033 < inst_23032);
var inst_23036 = inst_23035;
var state_23149__$1 = state_23149;
if(cljs.core.truth_(inst_23036)){
var statearr_23228_23290 = state_23149__$1;
(statearr_23228_23290[(1)] = (10));

} else {
var statearr_23229_23291 = state_23149__$1;
(statearr_23229_23291[(1)] = (11));

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
});})(c__21930__auto___23237,cs,m,dchan,dctr,done))
;
return ((function (switch__21818__auto__,c__21930__auto___23237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21819__auto__ = null;
var cljs$core$async$mult_$_state_machine__21819__auto____0 = (function (){
var statearr_23233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23233[(0)] = cljs$core$async$mult_$_state_machine__21819__auto__);

(statearr_23233[(1)] = (1));

return statearr_23233;
});
var cljs$core$async$mult_$_state_machine__21819__auto____1 = (function (state_23149){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_23149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e23234){if((e23234 instanceof Object)){
var ex__21822__auto__ = e23234;
var statearr_23235_23292 = state_23149;
(statearr_23235_23292[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23293 = state_23149;
state_23149 = G__23293;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21819__auto__ = function(state_23149){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21819__auto____1.call(this,state_23149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21819__auto____0;
cljs$core$async$mult_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21819__auto____1;
return cljs$core$async$mult_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___23237,cs,m,dchan,dctr,done))
})();
var state__21932__auto__ = (function (){var statearr_23236 = f__21931__auto__.call(null);
(statearr_23236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___23237);

return statearr_23236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___23237,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23294 = [];
var len__17829__auto___23297 = arguments.length;
var i__17830__auto___23298 = (0);
while(true){
if((i__17830__auto___23298 < len__17829__auto___23297)){
args23294.push((arguments[i__17830__auto___23298]));

var G__23299 = (i__17830__auto___23298 + (1));
i__17830__auto___23298 = G__23299;
continue;
} else {
}
break;
}

var G__23296 = args23294.length;
switch (G__23296) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23294.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___23311 = arguments.length;
var i__17830__auto___23312 = (0);
while(true){
if((i__17830__auto___23312 < len__17829__auto___23311)){
args__17836__auto__.push((arguments[i__17830__auto___23312]));

var G__23313 = (i__17830__auto___23312 + (1));
i__17830__auto___23312 = G__23313;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23305){
var map__23306 = p__23305;
var map__23306__$1 = ((((!((map__23306 == null)))?((((map__23306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23306):map__23306);
var opts = map__23306__$1;
var statearr_23308_23314 = state;
(statearr_23308_23314[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23306,map__23306__$1,opts){
return (function (val){
var statearr_23309_23315 = state;
(statearr_23309_23315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23306,map__23306__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23310_23316 = state;
(statearr_23310_23316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23301){
var G__23302 = cljs.core.first.call(null,seq23301);
var seq23301__$1 = cljs.core.next.call(null,seq23301);
var G__23303 = cljs.core.first.call(null,seq23301__$1);
var seq23301__$2 = cljs.core.next.call(null,seq23301__$1);
var G__23304 = cljs.core.first.call(null,seq23301__$2);
var seq23301__$3 = cljs.core.next.call(null,seq23301__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23302,G__23303,G__23304,seq23301__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23480 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23481){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23481 = meta23481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23482,meta23481__$1){
var self__ = this;
var _23482__$1 = this;
return (new cljs.core.async.t_cljs$core$async23480(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23481__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23482){
var self__ = this;
var _23482__$1 = this;
return self__.meta23481;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23481","meta23481",-1286615595,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23480";

cljs.core.async.t_cljs$core$async23480.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23480");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23480 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23481){
return (new cljs.core.async.t_cljs$core$async23480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23481));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23480(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21930__auto___23643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___23643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___23643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23580){
var state_val_23581 = (state_23580[(1)]);
if((state_val_23581 === (7))){
var inst_23498 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23582_23644 = state_23580__$1;
(statearr_23582_23644[(2)] = inst_23498);

(statearr_23582_23644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (20))){
var inst_23510 = (state_23580[(7)]);
var state_23580__$1 = state_23580;
var statearr_23583_23645 = state_23580__$1;
(statearr_23583_23645[(2)] = inst_23510);

(statearr_23583_23645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (27))){
var state_23580__$1 = state_23580;
var statearr_23584_23646 = state_23580__$1;
(statearr_23584_23646[(2)] = null);

(statearr_23584_23646[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (1))){
var inst_23486 = (state_23580[(8)]);
var inst_23486__$1 = calc_state.call(null);
var inst_23488 = (inst_23486__$1 == null);
var inst_23489 = cljs.core.not.call(null,inst_23488);
var state_23580__$1 = (function (){var statearr_23585 = state_23580;
(statearr_23585[(8)] = inst_23486__$1);

return statearr_23585;
})();
if(inst_23489){
var statearr_23586_23647 = state_23580__$1;
(statearr_23586_23647[(1)] = (2));

} else {
var statearr_23587_23648 = state_23580__$1;
(statearr_23587_23648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (24))){
var inst_23533 = (state_23580[(9)]);
var inst_23540 = (state_23580[(10)]);
var inst_23554 = (state_23580[(11)]);
var inst_23554__$1 = inst_23533.call(null,inst_23540);
var state_23580__$1 = (function (){var statearr_23588 = state_23580;
(statearr_23588[(11)] = inst_23554__$1);

return statearr_23588;
})();
if(cljs.core.truth_(inst_23554__$1)){
var statearr_23589_23649 = state_23580__$1;
(statearr_23589_23649[(1)] = (29));

} else {
var statearr_23590_23650 = state_23580__$1;
(statearr_23590_23650[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (4))){
var inst_23501 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23501)){
var statearr_23591_23651 = state_23580__$1;
(statearr_23591_23651[(1)] = (8));

} else {
var statearr_23592_23652 = state_23580__$1;
(statearr_23592_23652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (15))){
var inst_23527 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23527)){
var statearr_23593_23653 = state_23580__$1;
(statearr_23593_23653[(1)] = (19));

} else {
var statearr_23594_23654 = state_23580__$1;
(statearr_23594_23654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (21))){
var inst_23532 = (state_23580[(12)]);
var inst_23532__$1 = (state_23580[(2)]);
var inst_23533 = cljs.core.get.call(null,inst_23532__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23534 = cljs.core.get.call(null,inst_23532__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23535 = cljs.core.get.call(null,inst_23532__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23580__$1 = (function (){var statearr_23595 = state_23580;
(statearr_23595[(9)] = inst_23533);

(statearr_23595[(12)] = inst_23532__$1);

(statearr_23595[(13)] = inst_23534);

return statearr_23595;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23580__$1,(22),inst_23535);
} else {
if((state_val_23581 === (31))){
var inst_23562 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23562)){
var statearr_23596_23655 = state_23580__$1;
(statearr_23596_23655[(1)] = (32));

} else {
var statearr_23597_23656 = state_23580__$1;
(statearr_23597_23656[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (32))){
var inst_23539 = (state_23580[(14)]);
var state_23580__$1 = state_23580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23580__$1,(35),out,inst_23539);
} else {
if((state_val_23581 === (33))){
var inst_23532 = (state_23580[(12)]);
var inst_23510 = inst_23532;
var state_23580__$1 = (function (){var statearr_23598 = state_23580;
(statearr_23598[(7)] = inst_23510);

return statearr_23598;
})();
var statearr_23599_23657 = state_23580__$1;
(statearr_23599_23657[(2)] = null);

(statearr_23599_23657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (13))){
var inst_23510 = (state_23580[(7)]);
var inst_23517 = inst_23510.cljs$lang$protocol_mask$partition0$;
var inst_23518 = (inst_23517 & (64));
var inst_23519 = inst_23510.cljs$core$ISeq$;
var inst_23520 = (inst_23518) || (inst_23519);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23520)){
var statearr_23600_23658 = state_23580__$1;
(statearr_23600_23658[(1)] = (16));

} else {
var statearr_23601_23659 = state_23580__$1;
(statearr_23601_23659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (22))){
var inst_23540 = (state_23580[(10)]);
var inst_23539 = (state_23580[(14)]);
var inst_23538 = (state_23580[(2)]);
var inst_23539__$1 = cljs.core.nth.call(null,inst_23538,(0),null);
var inst_23540__$1 = cljs.core.nth.call(null,inst_23538,(1),null);
var inst_23541 = (inst_23539__$1 == null);
var inst_23542 = cljs.core._EQ_.call(null,inst_23540__$1,change);
var inst_23543 = (inst_23541) || (inst_23542);
var state_23580__$1 = (function (){var statearr_23602 = state_23580;
(statearr_23602[(10)] = inst_23540__$1);

(statearr_23602[(14)] = inst_23539__$1);

return statearr_23602;
})();
if(cljs.core.truth_(inst_23543)){
var statearr_23603_23660 = state_23580__$1;
(statearr_23603_23660[(1)] = (23));

} else {
var statearr_23604_23661 = state_23580__$1;
(statearr_23604_23661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (36))){
var inst_23532 = (state_23580[(12)]);
var inst_23510 = inst_23532;
var state_23580__$1 = (function (){var statearr_23605 = state_23580;
(statearr_23605[(7)] = inst_23510);

return statearr_23605;
})();
var statearr_23606_23662 = state_23580__$1;
(statearr_23606_23662[(2)] = null);

(statearr_23606_23662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (29))){
var inst_23554 = (state_23580[(11)]);
var state_23580__$1 = state_23580;
var statearr_23607_23663 = state_23580__$1;
(statearr_23607_23663[(2)] = inst_23554);

(statearr_23607_23663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (6))){
var state_23580__$1 = state_23580;
var statearr_23608_23664 = state_23580__$1;
(statearr_23608_23664[(2)] = false);

(statearr_23608_23664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (28))){
var inst_23550 = (state_23580[(2)]);
var inst_23551 = calc_state.call(null);
var inst_23510 = inst_23551;
var state_23580__$1 = (function (){var statearr_23609 = state_23580;
(statearr_23609[(7)] = inst_23510);

(statearr_23609[(15)] = inst_23550);

return statearr_23609;
})();
var statearr_23610_23665 = state_23580__$1;
(statearr_23610_23665[(2)] = null);

(statearr_23610_23665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (25))){
var inst_23576 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23611_23666 = state_23580__$1;
(statearr_23611_23666[(2)] = inst_23576);

(statearr_23611_23666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (34))){
var inst_23574 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23612_23667 = state_23580__$1;
(statearr_23612_23667[(2)] = inst_23574);

(statearr_23612_23667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (17))){
var state_23580__$1 = state_23580;
var statearr_23613_23668 = state_23580__$1;
(statearr_23613_23668[(2)] = false);

(statearr_23613_23668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (3))){
var state_23580__$1 = state_23580;
var statearr_23614_23669 = state_23580__$1;
(statearr_23614_23669[(2)] = false);

(statearr_23614_23669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (12))){
var inst_23578 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23580__$1,inst_23578);
} else {
if((state_val_23581 === (2))){
var inst_23486 = (state_23580[(8)]);
var inst_23491 = inst_23486.cljs$lang$protocol_mask$partition0$;
var inst_23492 = (inst_23491 & (64));
var inst_23493 = inst_23486.cljs$core$ISeq$;
var inst_23494 = (inst_23492) || (inst_23493);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23494)){
var statearr_23615_23670 = state_23580__$1;
(statearr_23615_23670[(1)] = (5));

} else {
var statearr_23616_23671 = state_23580__$1;
(statearr_23616_23671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (23))){
var inst_23539 = (state_23580[(14)]);
var inst_23545 = (inst_23539 == null);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23545)){
var statearr_23617_23672 = state_23580__$1;
(statearr_23617_23672[(1)] = (26));

} else {
var statearr_23618_23673 = state_23580__$1;
(statearr_23618_23673[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (35))){
var inst_23565 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23565)){
var statearr_23619_23674 = state_23580__$1;
(statearr_23619_23674[(1)] = (36));

} else {
var statearr_23620_23675 = state_23580__$1;
(statearr_23620_23675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (19))){
var inst_23510 = (state_23580[(7)]);
var inst_23529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23510);
var state_23580__$1 = state_23580;
var statearr_23621_23676 = state_23580__$1;
(statearr_23621_23676[(2)] = inst_23529);

(statearr_23621_23676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (11))){
var inst_23510 = (state_23580[(7)]);
var inst_23514 = (inst_23510 == null);
var inst_23515 = cljs.core.not.call(null,inst_23514);
var state_23580__$1 = state_23580;
if(inst_23515){
var statearr_23622_23677 = state_23580__$1;
(statearr_23622_23677[(1)] = (13));

} else {
var statearr_23623_23678 = state_23580__$1;
(statearr_23623_23678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (9))){
var inst_23486 = (state_23580[(8)]);
var state_23580__$1 = state_23580;
var statearr_23624_23679 = state_23580__$1;
(statearr_23624_23679[(2)] = inst_23486);

(statearr_23624_23679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (5))){
var state_23580__$1 = state_23580;
var statearr_23625_23680 = state_23580__$1;
(statearr_23625_23680[(2)] = true);

(statearr_23625_23680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (14))){
var state_23580__$1 = state_23580;
var statearr_23626_23681 = state_23580__$1;
(statearr_23626_23681[(2)] = false);

(statearr_23626_23681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (26))){
var inst_23540 = (state_23580[(10)]);
var inst_23547 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23540);
var state_23580__$1 = state_23580;
var statearr_23627_23682 = state_23580__$1;
(statearr_23627_23682[(2)] = inst_23547);

(statearr_23627_23682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (16))){
var state_23580__$1 = state_23580;
var statearr_23628_23683 = state_23580__$1;
(statearr_23628_23683[(2)] = true);

(statearr_23628_23683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (38))){
var inst_23570 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23629_23684 = state_23580__$1;
(statearr_23629_23684[(2)] = inst_23570);

(statearr_23629_23684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (30))){
var inst_23533 = (state_23580[(9)]);
var inst_23540 = (state_23580[(10)]);
var inst_23534 = (state_23580[(13)]);
var inst_23557 = cljs.core.empty_QMARK_.call(null,inst_23533);
var inst_23558 = inst_23534.call(null,inst_23540);
var inst_23559 = cljs.core.not.call(null,inst_23558);
var inst_23560 = (inst_23557) && (inst_23559);
var state_23580__$1 = state_23580;
var statearr_23630_23685 = state_23580__$1;
(statearr_23630_23685[(2)] = inst_23560);

(statearr_23630_23685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (10))){
var inst_23486 = (state_23580[(8)]);
var inst_23506 = (state_23580[(2)]);
var inst_23507 = cljs.core.get.call(null,inst_23506,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23508 = cljs.core.get.call(null,inst_23506,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23509 = cljs.core.get.call(null,inst_23506,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23510 = inst_23486;
var state_23580__$1 = (function (){var statearr_23631 = state_23580;
(statearr_23631[(16)] = inst_23507);

(statearr_23631[(17)] = inst_23509);

(statearr_23631[(7)] = inst_23510);

(statearr_23631[(18)] = inst_23508);

return statearr_23631;
})();
var statearr_23632_23686 = state_23580__$1;
(statearr_23632_23686[(2)] = null);

(statearr_23632_23686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (18))){
var inst_23524 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23633_23687 = state_23580__$1;
(statearr_23633_23687[(2)] = inst_23524);

(statearr_23633_23687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (37))){
var state_23580__$1 = state_23580;
var statearr_23634_23688 = state_23580__$1;
(statearr_23634_23688[(2)] = null);

(statearr_23634_23688[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (8))){
var inst_23486 = (state_23580[(8)]);
var inst_23503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23486);
var state_23580__$1 = state_23580;
var statearr_23635_23689 = state_23580__$1;
(statearr_23635_23689[(2)] = inst_23503);

(statearr_23635_23689[(1)] = (10));


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
});})(c__21930__auto___23643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21818__auto__,c__21930__auto___23643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21819__auto__ = null;
var cljs$core$async$mix_$_state_machine__21819__auto____0 = (function (){
var statearr_23639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23639[(0)] = cljs$core$async$mix_$_state_machine__21819__auto__);

(statearr_23639[(1)] = (1));

return statearr_23639;
});
var cljs$core$async$mix_$_state_machine__21819__auto____1 = (function (state_23580){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_23580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e23640){if((e23640 instanceof Object)){
var ex__21822__auto__ = e23640;
var statearr_23641_23690 = state_23580;
(statearr_23641_23690[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23691 = state_23580;
state_23580 = G__23691;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21819__auto__ = function(state_23580){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21819__auto____1.call(this,state_23580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21819__auto____0;
cljs$core$async$mix_$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21819__auto____1;
return cljs$core$async$mix_$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___23643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21932__auto__ = (function (){var statearr_23642 = f__21931__auto__.call(null);
(statearr_23642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___23643);

return statearr_23642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___23643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23692 = [];
var len__17829__auto___23695 = arguments.length;
var i__17830__auto___23696 = (0);
while(true){
if((i__17830__auto___23696 < len__17829__auto___23695)){
args23692.push((arguments[i__17830__auto___23696]));

var G__23697 = (i__17830__auto___23696 + (1));
i__17830__auto___23696 = G__23697;
continue;
} else {
}
break;
}

var G__23694 = args23692.length;
switch (G__23694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23692.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23700 = [];
var len__17829__auto___23825 = arguments.length;
var i__17830__auto___23826 = (0);
while(true){
if((i__17830__auto___23826 < len__17829__auto___23825)){
args23700.push((arguments[i__17830__auto___23826]));

var G__23827 = (i__17830__auto___23826 + (1));
i__17830__auto___23826 = G__23827;
continue;
} else {
}
break;
}

var G__23702 = args23700.length;
switch (G__23702) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23700.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__23699_SHARP_){
if(cljs.core.truth_(p1__23699_SHARP_.call(null,topic))){
return p1__23699_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23699_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23704 = meta23704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23705,meta23704__$1){
var self__ = this;
var _23705__$1 = this;
return (new cljs.core.async.t_cljs$core$async23703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23704__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23705){
var self__ = this;
var _23705__$1 = this;
return self__.meta23704;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23704","meta23704",-92389708,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23703";

cljs.core.async.t_cljs$core$async23703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23703");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23703 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23704){
return (new cljs.core.async.t_cljs$core$async23703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23704));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21930__auto___23829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___23829,mults,ensure_mult,p){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___23829,mults,ensure_mult,p){
return (function (state_23777){
var state_val_23778 = (state_23777[(1)]);
if((state_val_23778 === (7))){
var inst_23773 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
var statearr_23779_23830 = state_23777__$1;
(statearr_23779_23830[(2)] = inst_23773);

(statearr_23779_23830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (20))){
var state_23777__$1 = state_23777;
var statearr_23780_23831 = state_23777__$1;
(statearr_23780_23831[(2)] = null);

(statearr_23780_23831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (1))){
var state_23777__$1 = state_23777;
var statearr_23781_23832 = state_23777__$1;
(statearr_23781_23832[(2)] = null);

(statearr_23781_23832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (24))){
var inst_23756 = (state_23777[(7)]);
var inst_23765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23756);
var state_23777__$1 = state_23777;
var statearr_23782_23833 = state_23777__$1;
(statearr_23782_23833[(2)] = inst_23765);

(statearr_23782_23833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (4))){
var inst_23708 = (state_23777[(8)]);
var inst_23708__$1 = (state_23777[(2)]);
var inst_23709 = (inst_23708__$1 == null);
var state_23777__$1 = (function (){var statearr_23783 = state_23777;
(statearr_23783[(8)] = inst_23708__$1);

return statearr_23783;
})();
if(cljs.core.truth_(inst_23709)){
var statearr_23784_23834 = state_23777__$1;
(statearr_23784_23834[(1)] = (5));

} else {
var statearr_23785_23835 = state_23777__$1;
(statearr_23785_23835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (15))){
var inst_23750 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
var statearr_23786_23836 = state_23777__$1;
(statearr_23786_23836[(2)] = inst_23750);

(statearr_23786_23836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (21))){
var inst_23770 = (state_23777[(2)]);
var state_23777__$1 = (function (){var statearr_23787 = state_23777;
(statearr_23787[(9)] = inst_23770);

return statearr_23787;
})();
var statearr_23788_23837 = state_23777__$1;
(statearr_23788_23837[(2)] = null);

(statearr_23788_23837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (13))){
var inst_23732 = (state_23777[(10)]);
var inst_23734 = cljs.core.chunked_seq_QMARK_.call(null,inst_23732);
var state_23777__$1 = state_23777;
if(inst_23734){
var statearr_23789_23838 = state_23777__$1;
(statearr_23789_23838[(1)] = (16));

} else {
var statearr_23790_23839 = state_23777__$1;
(statearr_23790_23839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (22))){
var inst_23762 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
if(cljs.core.truth_(inst_23762)){
var statearr_23791_23840 = state_23777__$1;
(statearr_23791_23840[(1)] = (23));

} else {
var statearr_23792_23841 = state_23777__$1;
(statearr_23792_23841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (6))){
var inst_23756 = (state_23777[(7)]);
var inst_23758 = (state_23777[(11)]);
var inst_23708 = (state_23777[(8)]);
var inst_23756__$1 = topic_fn.call(null,inst_23708);
var inst_23757 = cljs.core.deref.call(null,mults);
var inst_23758__$1 = cljs.core.get.call(null,inst_23757,inst_23756__$1);
var state_23777__$1 = (function (){var statearr_23793 = state_23777;
(statearr_23793[(7)] = inst_23756__$1);

(statearr_23793[(11)] = inst_23758__$1);

return statearr_23793;
})();
if(cljs.core.truth_(inst_23758__$1)){
var statearr_23794_23842 = state_23777__$1;
(statearr_23794_23842[(1)] = (19));

} else {
var statearr_23795_23843 = state_23777__$1;
(statearr_23795_23843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (25))){
var inst_23767 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
var statearr_23796_23844 = state_23777__$1;
(statearr_23796_23844[(2)] = inst_23767);

(statearr_23796_23844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (17))){
var inst_23732 = (state_23777[(10)]);
var inst_23741 = cljs.core.first.call(null,inst_23732);
var inst_23742 = cljs.core.async.muxch_STAR_.call(null,inst_23741);
var inst_23743 = cljs.core.async.close_BANG_.call(null,inst_23742);
var inst_23744 = cljs.core.next.call(null,inst_23732);
var inst_23718 = inst_23744;
var inst_23719 = null;
var inst_23720 = (0);
var inst_23721 = (0);
var state_23777__$1 = (function (){var statearr_23797 = state_23777;
(statearr_23797[(12)] = inst_23721);

(statearr_23797[(13)] = inst_23720);

(statearr_23797[(14)] = inst_23718);

(statearr_23797[(15)] = inst_23719);

(statearr_23797[(16)] = inst_23743);

return statearr_23797;
})();
var statearr_23798_23845 = state_23777__$1;
(statearr_23798_23845[(2)] = null);

(statearr_23798_23845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (3))){
var inst_23775 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23777__$1,inst_23775);
} else {
if((state_val_23778 === (12))){
var inst_23752 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
var statearr_23799_23846 = state_23777__$1;
(statearr_23799_23846[(2)] = inst_23752);

(statearr_23799_23846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (2))){
var state_23777__$1 = state_23777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23777__$1,(4),ch);
} else {
if((state_val_23778 === (23))){
var state_23777__$1 = state_23777;
var statearr_23800_23847 = state_23777__$1;
(statearr_23800_23847[(2)] = null);

(statearr_23800_23847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (19))){
var inst_23758 = (state_23777[(11)]);
var inst_23708 = (state_23777[(8)]);
var inst_23760 = cljs.core.async.muxch_STAR_.call(null,inst_23758);
var state_23777__$1 = state_23777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23777__$1,(22),inst_23760,inst_23708);
} else {
if((state_val_23778 === (11))){
var inst_23732 = (state_23777[(10)]);
var inst_23718 = (state_23777[(14)]);
var inst_23732__$1 = cljs.core.seq.call(null,inst_23718);
var state_23777__$1 = (function (){var statearr_23801 = state_23777;
(statearr_23801[(10)] = inst_23732__$1);

return statearr_23801;
})();
if(inst_23732__$1){
var statearr_23802_23848 = state_23777__$1;
(statearr_23802_23848[(1)] = (13));

} else {
var statearr_23803_23849 = state_23777__$1;
(statearr_23803_23849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (9))){
var inst_23754 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
var statearr_23804_23850 = state_23777__$1;
(statearr_23804_23850[(2)] = inst_23754);

(statearr_23804_23850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (5))){
var inst_23715 = cljs.core.deref.call(null,mults);
var inst_23716 = cljs.core.vals.call(null,inst_23715);
var inst_23717 = cljs.core.seq.call(null,inst_23716);
var inst_23718 = inst_23717;
var inst_23719 = null;
var inst_23720 = (0);
var inst_23721 = (0);
var state_23777__$1 = (function (){var statearr_23805 = state_23777;
(statearr_23805[(12)] = inst_23721);

(statearr_23805[(13)] = inst_23720);

(statearr_23805[(14)] = inst_23718);

(statearr_23805[(15)] = inst_23719);

return statearr_23805;
})();
var statearr_23806_23851 = state_23777__$1;
(statearr_23806_23851[(2)] = null);

(statearr_23806_23851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (14))){
var state_23777__$1 = state_23777;
var statearr_23810_23852 = state_23777__$1;
(statearr_23810_23852[(2)] = null);

(statearr_23810_23852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (16))){
var inst_23732 = (state_23777[(10)]);
var inst_23736 = cljs.core.chunk_first.call(null,inst_23732);
var inst_23737 = cljs.core.chunk_rest.call(null,inst_23732);
var inst_23738 = cljs.core.count.call(null,inst_23736);
var inst_23718 = inst_23737;
var inst_23719 = inst_23736;
var inst_23720 = inst_23738;
var inst_23721 = (0);
var state_23777__$1 = (function (){var statearr_23811 = state_23777;
(statearr_23811[(12)] = inst_23721);

(statearr_23811[(13)] = inst_23720);

(statearr_23811[(14)] = inst_23718);

(statearr_23811[(15)] = inst_23719);

return statearr_23811;
})();
var statearr_23812_23853 = state_23777__$1;
(statearr_23812_23853[(2)] = null);

(statearr_23812_23853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (10))){
var inst_23721 = (state_23777[(12)]);
var inst_23720 = (state_23777[(13)]);
var inst_23718 = (state_23777[(14)]);
var inst_23719 = (state_23777[(15)]);
var inst_23726 = cljs.core._nth.call(null,inst_23719,inst_23721);
var inst_23727 = cljs.core.async.muxch_STAR_.call(null,inst_23726);
var inst_23728 = cljs.core.async.close_BANG_.call(null,inst_23727);
var inst_23729 = (inst_23721 + (1));
var tmp23807 = inst_23720;
var tmp23808 = inst_23718;
var tmp23809 = inst_23719;
var inst_23718__$1 = tmp23808;
var inst_23719__$1 = tmp23809;
var inst_23720__$1 = tmp23807;
var inst_23721__$1 = inst_23729;
var state_23777__$1 = (function (){var statearr_23813 = state_23777;
(statearr_23813[(12)] = inst_23721__$1);

(statearr_23813[(13)] = inst_23720__$1);

(statearr_23813[(14)] = inst_23718__$1);

(statearr_23813[(15)] = inst_23719__$1);

(statearr_23813[(17)] = inst_23728);

return statearr_23813;
})();
var statearr_23814_23854 = state_23777__$1;
(statearr_23814_23854[(2)] = null);

(statearr_23814_23854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (18))){
var inst_23747 = (state_23777[(2)]);
var state_23777__$1 = state_23777;
var statearr_23815_23855 = state_23777__$1;
(statearr_23815_23855[(2)] = inst_23747);

(statearr_23815_23855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23778 === (8))){
var inst_23721 = (state_23777[(12)]);
var inst_23720 = (state_23777[(13)]);
var inst_23723 = (inst_23721 < inst_23720);
var inst_23724 = inst_23723;
var state_23777__$1 = state_23777;
if(cljs.core.truth_(inst_23724)){
var statearr_23816_23856 = state_23777__$1;
(statearr_23816_23856[(1)] = (10));

} else {
var statearr_23817_23857 = state_23777__$1;
(statearr_23817_23857[(1)] = (11));

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
});})(c__21930__auto___23829,mults,ensure_mult,p))
;
return ((function (switch__21818__auto__,c__21930__auto___23829,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_23821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23821[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_23821[(1)] = (1));

return statearr_23821;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_23777){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_23777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e23822){if((e23822 instanceof Object)){
var ex__21822__auto__ = e23822;
var statearr_23823_23858 = state_23777;
(statearr_23823_23858[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23859 = state_23777;
state_23777 = G__23859;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_23777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_23777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___23829,mults,ensure_mult,p))
})();
var state__21932__auto__ = (function (){var statearr_23824 = f__21931__auto__.call(null);
(statearr_23824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___23829);

return statearr_23824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___23829,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23860 = [];
var len__17829__auto___23863 = arguments.length;
var i__17830__auto___23864 = (0);
while(true){
if((i__17830__auto___23864 < len__17829__auto___23863)){
args23860.push((arguments[i__17830__auto___23864]));

var G__23865 = (i__17830__auto___23864 + (1));
i__17830__auto___23864 = G__23865;
continue;
} else {
}
break;
}

var G__23862 = args23860.length;
switch (G__23862) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23860.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23867 = [];
var len__17829__auto___23870 = arguments.length;
var i__17830__auto___23871 = (0);
while(true){
if((i__17830__auto___23871 < len__17829__auto___23870)){
args23867.push((arguments[i__17830__auto___23871]));

var G__23872 = (i__17830__auto___23871 + (1));
i__17830__auto___23871 = G__23872;
continue;
} else {
}
break;
}

var G__23869 = args23867.length;
switch (G__23869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23867.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23874 = [];
var len__17829__auto___23945 = arguments.length;
var i__17830__auto___23946 = (0);
while(true){
if((i__17830__auto___23946 < len__17829__auto___23945)){
args23874.push((arguments[i__17830__auto___23946]));

var G__23947 = (i__17830__auto___23946 + (1));
i__17830__auto___23946 = G__23947;
continue;
} else {
}
break;
}

var G__23876 = args23874.length;
switch (G__23876) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23874.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21930__auto___23949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___23949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___23949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23915){
var state_val_23916 = (state_23915[(1)]);
if((state_val_23916 === (7))){
var state_23915__$1 = state_23915;
var statearr_23917_23950 = state_23915__$1;
(statearr_23917_23950[(2)] = null);

(statearr_23917_23950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (1))){
var state_23915__$1 = state_23915;
var statearr_23918_23951 = state_23915__$1;
(statearr_23918_23951[(2)] = null);

(statearr_23918_23951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (4))){
var inst_23879 = (state_23915[(7)]);
var inst_23881 = (inst_23879 < cnt);
var state_23915__$1 = state_23915;
if(cljs.core.truth_(inst_23881)){
var statearr_23919_23952 = state_23915__$1;
(statearr_23919_23952[(1)] = (6));

} else {
var statearr_23920_23953 = state_23915__$1;
(statearr_23920_23953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (15))){
var inst_23911 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
var statearr_23921_23954 = state_23915__$1;
(statearr_23921_23954[(2)] = inst_23911);

(statearr_23921_23954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (13))){
var inst_23904 = cljs.core.async.close_BANG_.call(null,out);
var state_23915__$1 = state_23915;
var statearr_23922_23955 = state_23915__$1;
(statearr_23922_23955[(2)] = inst_23904);

(statearr_23922_23955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (6))){
var state_23915__$1 = state_23915;
var statearr_23923_23956 = state_23915__$1;
(statearr_23923_23956[(2)] = null);

(statearr_23923_23956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (3))){
var inst_23913 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23915__$1,inst_23913);
} else {
if((state_val_23916 === (12))){
var inst_23901 = (state_23915[(8)]);
var inst_23901__$1 = (state_23915[(2)]);
var inst_23902 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23901__$1);
var state_23915__$1 = (function (){var statearr_23924 = state_23915;
(statearr_23924[(8)] = inst_23901__$1);

return statearr_23924;
})();
if(cljs.core.truth_(inst_23902)){
var statearr_23925_23957 = state_23915__$1;
(statearr_23925_23957[(1)] = (13));

} else {
var statearr_23926_23958 = state_23915__$1;
(statearr_23926_23958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (2))){
var inst_23878 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23879 = (0);
var state_23915__$1 = (function (){var statearr_23927 = state_23915;
(statearr_23927[(7)] = inst_23879);

(statearr_23927[(9)] = inst_23878);

return statearr_23927;
})();
var statearr_23928_23959 = state_23915__$1;
(statearr_23928_23959[(2)] = null);

(statearr_23928_23959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (11))){
var inst_23879 = (state_23915[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23915,(10),Object,null,(9));
var inst_23888 = chs__$1.call(null,inst_23879);
var inst_23889 = done.call(null,inst_23879);
var inst_23890 = cljs.core.async.take_BANG_.call(null,inst_23888,inst_23889);
var state_23915__$1 = state_23915;
var statearr_23929_23960 = state_23915__$1;
(statearr_23929_23960[(2)] = inst_23890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (9))){
var inst_23879 = (state_23915[(7)]);
var inst_23892 = (state_23915[(2)]);
var inst_23893 = (inst_23879 + (1));
var inst_23879__$1 = inst_23893;
var state_23915__$1 = (function (){var statearr_23930 = state_23915;
(statearr_23930[(7)] = inst_23879__$1);

(statearr_23930[(10)] = inst_23892);

return statearr_23930;
})();
var statearr_23931_23961 = state_23915__$1;
(statearr_23931_23961[(2)] = null);

(statearr_23931_23961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (5))){
var inst_23899 = (state_23915[(2)]);
var state_23915__$1 = (function (){var statearr_23932 = state_23915;
(statearr_23932[(11)] = inst_23899);

return statearr_23932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23915__$1,(12),dchan);
} else {
if((state_val_23916 === (14))){
var inst_23901 = (state_23915[(8)]);
var inst_23906 = cljs.core.apply.call(null,f,inst_23901);
var state_23915__$1 = state_23915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23915__$1,(16),out,inst_23906);
} else {
if((state_val_23916 === (16))){
var inst_23908 = (state_23915[(2)]);
var state_23915__$1 = (function (){var statearr_23933 = state_23915;
(statearr_23933[(12)] = inst_23908);

return statearr_23933;
})();
var statearr_23934_23962 = state_23915__$1;
(statearr_23934_23962[(2)] = null);

(statearr_23934_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (10))){
var inst_23883 = (state_23915[(2)]);
var inst_23884 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23915__$1 = (function (){var statearr_23935 = state_23915;
(statearr_23935[(13)] = inst_23883);

return statearr_23935;
})();
var statearr_23936_23963 = state_23915__$1;
(statearr_23936_23963[(2)] = inst_23884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23916 === (8))){
var inst_23897 = (state_23915[(2)]);
var state_23915__$1 = state_23915;
var statearr_23937_23964 = state_23915__$1;
(statearr_23937_23964[(2)] = inst_23897);

(statearr_23937_23964[(1)] = (5));


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
});})(c__21930__auto___23949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21818__auto__,c__21930__auto___23949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_23941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23941[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_23941[(1)] = (1));

return statearr_23941;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_23915){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_23915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e23942){if((e23942 instanceof Object)){
var ex__21822__auto__ = e23942;
var statearr_23943_23965 = state_23915;
(statearr_23943_23965[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23966 = state_23915;
state_23915 = G__23966;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_23915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_23915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___23949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21932__auto__ = (function (){var statearr_23944 = f__21931__auto__.call(null);
(statearr_23944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___23949);

return statearr_23944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___23949,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23968 = [];
var len__17829__auto___24024 = arguments.length;
var i__17830__auto___24025 = (0);
while(true){
if((i__17830__auto___24025 < len__17829__auto___24024)){
args23968.push((arguments[i__17830__auto___24025]));

var G__24026 = (i__17830__auto___24025 + (1));
i__17830__auto___24025 = G__24026;
continue;
} else {
}
break;
}

var G__23970 = args23968.length;
switch (G__23970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23968.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21930__auto___24028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___24028,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___24028,out){
return (function (state_24000){
var state_val_24001 = (state_24000[(1)]);
if((state_val_24001 === (7))){
var inst_23980 = (state_24000[(7)]);
var inst_23979 = (state_24000[(8)]);
var inst_23979__$1 = (state_24000[(2)]);
var inst_23980__$1 = cljs.core.nth.call(null,inst_23979__$1,(0),null);
var inst_23981 = cljs.core.nth.call(null,inst_23979__$1,(1),null);
var inst_23982 = (inst_23980__$1 == null);
var state_24000__$1 = (function (){var statearr_24002 = state_24000;
(statearr_24002[(7)] = inst_23980__$1);

(statearr_24002[(8)] = inst_23979__$1);

(statearr_24002[(9)] = inst_23981);

return statearr_24002;
})();
if(cljs.core.truth_(inst_23982)){
var statearr_24003_24029 = state_24000__$1;
(statearr_24003_24029[(1)] = (8));

} else {
var statearr_24004_24030 = state_24000__$1;
(statearr_24004_24030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (1))){
var inst_23971 = cljs.core.vec.call(null,chs);
var inst_23972 = inst_23971;
var state_24000__$1 = (function (){var statearr_24005 = state_24000;
(statearr_24005[(10)] = inst_23972);

return statearr_24005;
})();
var statearr_24006_24031 = state_24000__$1;
(statearr_24006_24031[(2)] = null);

(statearr_24006_24031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (4))){
var inst_23972 = (state_24000[(10)]);
var state_24000__$1 = state_24000;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24000__$1,(7),inst_23972);
} else {
if((state_val_24001 === (6))){
var inst_23996 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24007_24032 = state_24000__$1;
(statearr_24007_24032[(2)] = inst_23996);

(statearr_24007_24032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (3))){
var inst_23998 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24000__$1,inst_23998);
} else {
if((state_val_24001 === (2))){
var inst_23972 = (state_24000[(10)]);
var inst_23974 = cljs.core.count.call(null,inst_23972);
var inst_23975 = (inst_23974 > (0));
var state_24000__$1 = state_24000;
if(cljs.core.truth_(inst_23975)){
var statearr_24009_24033 = state_24000__$1;
(statearr_24009_24033[(1)] = (4));

} else {
var statearr_24010_24034 = state_24000__$1;
(statearr_24010_24034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (11))){
var inst_23972 = (state_24000[(10)]);
var inst_23989 = (state_24000[(2)]);
var tmp24008 = inst_23972;
var inst_23972__$1 = tmp24008;
var state_24000__$1 = (function (){var statearr_24011 = state_24000;
(statearr_24011[(10)] = inst_23972__$1);

(statearr_24011[(11)] = inst_23989);

return statearr_24011;
})();
var statearr_24012_24035 = state_24000__$1;
(statearr_24012_24035[(2)] = null);

(statearr_24012_24035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (9))){
var inst_23980 = (state_24000[(7)]);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24000__$1,(11),out,inst_23980);
} else {
if((state_val_24001 === (5))){
var inst_23994 = cljs.core.async.close_BANG_.call(null,out);
var state_24000__$1 = state_24000;
var statearr_24013_24036 = state_24000__$1;
(statearr_24013_24036[(2)] = inst_23994);

(statearr_24013_24036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (10))){
var inst_23992 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24014_24037 = state_24000__$1;
(statearr_24014_24037[(2)] = inst_23992);

(statearr_24014_24037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (8))){
var inst_23972 = (state_24000[(10)]);
var inst_23980 = (state_24000[(7)]);
var inst_23979 = (state_24000[(8)]);
var inst_23981 = (state_24000[(9)]);
var inst_23984 = (function (){var cs = inst_23972;
var vec__23977 = inst_23979;
var v = inst_23980;
var c = inst_23981;
return ((function (cs,vec__23977,v,c,inst_23972,inst_23980,inst_23979,inst_23981,state_val_24001,c__21930__auto___24028,out){
return (function (p1__23967_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23967_SHARP_);
});
;})(cs,vec__23977,v,c,inst_23972,inst_23980,inst_23979,inst_23981,state_val_24001,c__21930__auto___24028,out))
})();
var inst_23985 = cljs.core.filterv.call(null,inst_23984,inst_23972);
var inst_23972__$1 = inst_23985;
var state_24000__$1 = (function (){var statearr_24015 = state_24000;
(statearr_24015[(10)] = inst_23972__$1);

return statearr_24015;
})();
var statearr_24016_24038 = state_24000__$1;
(statearr_24016_24038[(2)] = null);

(statearr_24016_24038[(1)] = (2));


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
});})(c__21930__auto___24028,out))
;
return ((function (switch__21818__auto__,c__21930__auto___24028,out){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_24020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24020[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_24020[(1)] = (1));

return statearr_24020;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_24000){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24021){if((e24021 instanceof Object)){
var ex__21822__auto__ = e24021;
var statearr_24022_24039 = state_24000;
(statearr_24022_24039[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24040 = state_24000;
state_24000 = G__24040;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_24000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_24000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___24028,out))
})();
var state__21932__auto__ = (function (){var statearr_24023 = f__21931__auto__.call(null);
(statearr_24023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___24028);

return statearr_24023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___24028,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24041 = [];
var len__17829__auto___24090 = arguments.length;
var i__17830__auto___24091 = (0);
while(true){
if((i__17830__auto___24091 < len__17829__auto___24090)){
args24041.push((arguments[i__17830__auto___24091]));

var G__24092 = (i__17830__auto___24091 + (1));
i__17830__auto___24091 = G__24092;
continue;
} else {
}
break;
}

var G__24043 = args24041.length;
switch (G__24043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24041.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21930__auto___24094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___24094,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___24094,out){
return (function (state_24067){
var state_val_24068 = (state_24067[(1)]);
if((state_val_24068 === (7))){
var inst_24049 = (state_24067[(7)]);
var inst_24049__$1 = (state_24067[(2)]);
var inst_24050 = (inst_24049__$1 == null);
var inst_24051 = cljs.core.not.call(null,inst_24050);
var state_24067__$1 = (function (){var statearr_24069 = state_24067;
(statearr_24069[(7)] = inst_24049__$1);

return statearr_24069;
})();
if(inst_24051){
var statearr_24070_24095 = state_24067__$1;
(statearr_24070_24095[(1)] = (8));

} else {
var statearr_24071_24096 = state_24067__$1;
(statearr_24071_24096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (1))){
var inst_24044 = (0);
var state_24067__$1 = (function (){var statearr_24072 = state_24067;
(statearr_24072[(8)] = inst_24044);

return statearr_24072;
})();
var statearr_24073_24097 = state_24067__$1;
(statearr_24073_24097[(2)] = null);

(statearr_24073_24097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (4))){
var state_24067__$1 = state_24067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24067__$1,(7),ch);
} else {
if((state_val_24068 === (6))){
var inst_24062 = (state_24067[(2)]);
var state_24067__$1 = state_24067;
var statearr_24074_24098 = state_24067__$1;
(statearr_24074_24098[(2)] = inst_24062);

(statearr_24074_24098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (3))){
var inst_24064 = (state_24067[(2)]);
var inst_24065 = cljs.core.async.close_BANG_.call(null,out);
var state_24067__$1 = (function (){var statearr_24075 = state_24067;
(statearr_24075[(9)] = inst_24064);

return statearr_24075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24067__$1,inst_24065);
} else {
if((state_val_24068 === (2))){
var inst_24044 = (state_24067[(8)]);
var inst_24046 = (inst_24044 < n);
var state_24067__$1 = state_24067;
if(cljs.core.truth_(inst_24046)){
var statearr_24076_24099 = state_24067__$1;
(statearr_24076_24099[(1)] = (4));

} else {
var statearr_24077_24100 = state_24067__$1;
(statearr_24077_24100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (11))){
var inst_24044 = (state_24067[(8)]);
var inst_24054 = (state_24067[(2)]);
var inst_24055 = (inst_24044 + (1));
var inst_24044__$1 = inst_24055;
var state_24067__$1 = (function (){var statearr_24078 = state_24067;
(statearr_24078[(8)] = inst_24044__$1);

(statearr_24078[(10)] = inst_24054);

return statearr_24078;
})();
var statearr_24079_24101 = state_24067__$1;
(statearr_24079_24101[(2)] = null);

(statearr_24079_24101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (9))){
var state_24067__$1 = state_24067;
var statearr_24080_24102 = state_24067__$1;
(statearr_24080_24102[(2)] = null);

(statearr_24080_24102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (5))){
var state_24067__$1 = state_24067;
var statearr_24081_24103 = state_24067__$1;
(statearr_24081_24103[(2)] = null);

(statearr_24081_24103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (10))){
var inst_24059 = (state_24067[(2)]);
var state_24067__$1 = state_24067;
var statearr_24082_24104 = state_24067__$1;
(statearr_24082_24104[(2)] = inst_24059);

(statearr_24082_24104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24068 === (8))){
var inst_24049 = (state_24067[(7)]);
var state_24067__$1 = state_24067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24067__$1,(11),out,inst_24049);
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
});})(c__21930__auto___24094,out))
;
return ((function (switch__21818__auto__,c__21930__auto___24094,out){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_24086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24086[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_24086[(1)] = (1));

return statearr_24086;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_24067){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24087){if((e24087 instanceof Object)){
var ex__21822__auto__ = e24087;
var statearr_24088_24105 = state_24067;
(statearr_24088_24105[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24106 = state_24067;
state_24067 = G__24106;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_24067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_24067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___24094,out))
})();
var state__21932__auto__ = (function (){var statearr_24089 = f__21931__auto__.call(null);
(statearr_24089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___24094);

return statearr_24089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___24094,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24114 = (function (map_LT_,f,ch,meta24115){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24115 = meta24115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24116,meta24115__$1){
var self__ = this;
var _24116__$1 = this;
return (new cljs.core.async.t_cljs$core$async24114(self__.map_LT_,self__.f,self__.ch,meta24115__$1));
});

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24116){
var self__ = this;
var _24116__$1 = this;
return self__.meta24115;
});

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24117 = (function (map_LT_,f,ch,meta24115,_,fn1,meta24118){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24115 = meta24115;
this._ = _;
this.fn1 = fn1;
this.meta24118 = meta24118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24119,meta24118__$1){
var self__ = this;
var _24119__$1 = this;
return (new cljs.core.async.t_cljs$core$async24117(self__.map_LT_,self__.f,self__.ch,self__.meta24115,self__._,self__.fn1,meta24118__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24119){
var self__ = this;
var _24119__$1 = this;
return self__.meta24118;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24107_SHARP_){
return f1.call(null,(((p1__24107_SHARP_ == null))?null:self__.f.call(null,p1__24107_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24117.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24115","meta24115",134429781,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24114","cljs.core.async/t_cljs$core$async24114",1060364048,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24118","meta24118",1801534590,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24117";

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24117");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24117 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24117(map_LT___$1,f__$1,ch__$1,meta24115__$1,___$2,fn1__$1,meta24118){
return (new cljs.core.async.t_cljs$core$async24117(map_LT___$1,f__$1,ch__$1,meta24115__$1,___$2,fn1__$1,meta24118));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24117(self__.map_LT_,self__.f,self__.ch,self__.meta24115,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24115","meta24115",134429781,null)], null);
});

cljs.core.async.t_cljs$core$async24114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24114";

cljs.core.async.t_cljs$core$async24114.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24114");
});

cljs.core.async.__GT_t_cljs$core$async24114 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24114(map_LT___$1,f__$1,ch__$1,meta24115){
return (new cljs.core.async.t_cljs$core$async24114(map_LT___$1,f__$1,ch__$1,meta24115));
});

}

return (new cljs.core.async.t_cljs$core$async24114(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24123 = (function (map_GT_,f,ch,meta24124){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24124 = meta24124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24125,meta24124__$1){
var self__ = this;
var _24125__$1 = this;
return (new cljs.core.async.t_cljs$core$async24123(self__.map_GT_,self__.f,self__.ch,meta24124__$1));
});

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24125){
var self__ = this;
var _24125__$1 = this;
return self__.meta24124;
});

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24124","meta24124",183593930,null)], null);
});

cljs.core.async.t_cljs$core$async24123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24123";

cljs.core.async.t_cljs$core$async24123.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24123");
});

cljs.core.async.__GT_t_cljs$core$async24123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24123(map_GT___$1,f__$1,ch__$1,meta24124){
return (new cljs.core.async.t_cljs$core$async24123(map_GT___$1,f__$1,ch__$1,meta24124));
});

}

return (new cljs.core.async.t_cljs$core$async24123(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24129 = (function (filter_GT_,p,ch,meta24130){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24130 = meta24130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24131,meta24130__$1){
var self__ = this;
var _24131__$1 = this;
return (new cljs.core.async.t_cljs$core$async24129(self__.filter_GT_,self__.p,self__.ch,meta24130__$1));
});

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24131){
var self__ = this;
var _24131__$1 = this;
return self__.meta24130;
});

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24130","meta24130",1927023415,null)], null);
});

cljs.core.async.t_cljs$core$async24129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24129";

cljs.core.async.t_cljs$core$async24129.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24129");
});

cljs.core.async.__GT_t_cljs$core$async24129 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24129(filter_GT___$1,p__$1,ch__$1,meta24130){
return (new cljs.core.async.t_cljs$core$async24129(filter_GT___$1,p__$1,ch__$1,meta24130));
});

}

return (new cljs.core.async.t_cljs$core$async24129(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24132 = [];
var len__17829__auto___24176 = arguments.length;
var i__17830__auto___24177 = (0);
while(true){
if((i__17830__auto___24177 < len__17829__auto___24176)){
args24132.push((arguments[i__17830__auto___24177]));

var G__24178 = (i__17830__auto___24177 + (1));
i__17830__auto___24177 = G__24178;
continue;
} else {
}
break;
}

var G__24134 = args24132.length;
switch (G__24134) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24132.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21930__auto___24180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___24180,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___24180,out){
return (function (state_24155){
var state_val_24156 = (state_24155[(1)]);
if((state_val_24156 === (7))){
var inst_24151 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24157_24181 = state_24155__$1;
(statearr_24157_24181[(2)] = inst_24151);

(statearr_24157_24181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (1))){
var state_24155__$1 = state_24155;
var statearr_24158_24182 = state_24155__$1;
(statearr_24158_24182[(2)] = null);

(statearr_24158_24182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (4))){
var inst_24137 = (state_24155[(7)]);
var inst_24137__$1 = (state_24155[(2)]);
var inst_24138 = (inst_24137__$1 == null);
var state_24155__$1 = (function (){var statearr_24159 = state_24155;
(statearr_24159[(7)] = inst_24137__$1);

return statearr_24159;
})();
if(cljs.core.truth_(inst_24138)){
var statearr_24160_24183 = state_24155__$1;
(statearr_24160_24183[(1)] = (5));

} else {
var statearr_24161_24184 = state_24155__$1;
(statearr_24161_24184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (6))){
var inst_24137 = (state_24155[(7)]);
var inst_24142 = p.call(null,inst_24137);
var state_24155__$1 = state_24155;
if(cljs.core.truth_(inst_24142)){
var statearr_24162_24185 = state_24155__$1;
(statearr_24162_24185[(1)] = (8));

} else {
var statearr_24163_24186 = state_24155__$1;
(statearr_24163_24186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (3))){
var inst_24153 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24155__$1,inst_24153);
} else {
if((state_val_24156 === (2))){
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(4),ch);
} else {
if((state_val_24156 === (11))){
var inst_24145 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24164_24187 = state_24155__$1;
(statearr_24164_24187[(2)] = inst_24145);

(statearr_24164_24187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (9))){
var state_24155__$1 = state_24155;
var statearr_24165_24188 = state_24155__$1;
(statearr_24165_24188[(2)] = null);

(statearr_24165_24188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (5))){
var inst_24140 = cljs.core.async.close_BANG_.call(null,out);
var state_24155__$1 = state_24155;
var statearr_24166_24189 = state_24155__$1;
(statearr_24166_24189[(2)] = inst_24140);

(statearr_24166_24189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (10))){
var inst_24148 = (state_24155[(2)]);
var state_24155__$1 = (function (){var statearr_24167 = state_24155;
(statearr_24167[(8)] = inst_24148);

return statearr_24167;
})();
var statearr_24168_24190 = state_24155__$1;
(statearr_24168_24190[(2)] = null);

(statearr_24168_24190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (8))){
var inst_24137 = (state_24155[(7)]);
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24155__$1,(11),out,inst_24137);
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
});})(c__21930__auto___24180,out))
;
return ((function (switch__21818__auto__,c__21930__auto___24180,out){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_24172 = [null,null,null,null,null,null,null,null,null];
(statearr_24172[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_24172[(1)] = (1));

return statearr_24172;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_24155){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24173){if((e24173 instanceof Object)){
var ex__21822__auto__ = e24173;
var statearr_24174_24191 = state_24155;
(statearr_24174_24191[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24192 = state_24155;
state_24155 = G__24192;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_24155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_24155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___24180,out))
})();
var state__21932__auto__ = (function (){var statearr_24175 = f__21931__auto__.call(null);
(statearr_24175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___24180);

return statearr_24175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___24180,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24193 = [];
var len__17829__auto___24196 = arguments.length;
var i__17830__auto___24197 = (0);
while(true){
if((i__17830__auto___24197 < len__17829__auto___24196)){
args24193.push((arguments[i__17830__auto___24197]));

var G__24198 = (i__17830__auto___24197 + (1));
i__17830__auto___24197 = G__24198;
continue;
} else {
}
break;
}

var G__24195 = args24193.length;
switch (G__24195) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24193.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto__){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto__){
return (function (state_24365){
var state_val_24366 = (state_24365[(1)]);
if((state_val_24366 === (7))){
var inst_24361 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24367_24408 = state_24365__$1;
(statearr_24367_24408[(2)] = inst_24361);

(statearr_24367_24408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (20))){
var inst_24331 = (state_24365[(7)]);
var inst_24342 = (state_24365[(2)]);
var inst_24343 = cljs.core.next.call(null,inst_24331);
var inst_24317 = inst_24343;
var inst_24318 = null;
var inst_24319 = (0);
var inst_24320 = (0);
var state_24365__$1 = (function (){var statearr_24368 = state_24365;
(statearr_24368[(8)] = inst_24320);

(statearr_24368[(9)] = inst_24318);

(statearr_24368[(10)] = inst_24319);

(statearr_24368[(11)] = inst_24317);

(statearr_24368[(12)] = inst_24342);

return statearr_24368;
})();
var statearr_24369_24409 = state_24365__$1;
(statearr_24369_24409[(2)] = null);

(statearr_24369_24409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (1))){
var state_24365__$1 = state_24365;
var statearr_24370_24410 = state_24365__$1;
(statearr_24370_24410[(2)] = null);

(statearr_24370_24410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (4))){
var inst_24306 = (state_24365[(13)]);
var inst_24306__$1 = (state_24365[(2)]);
var inst_24307 = (inst_24306__$1 == null);
var state_24365__$1 = (function (){var statearr_24371 = state_24365;
(statearr_24371[(13)] = inst_24306__$1);

return statearr_24371;
})();
if(cljs.core.truth_(inst_24307)){
var statearr_24372_24411 = state_24365__$1;
(statearr_24372_24411[(1)] = (5));

} else {
var statearr_24373_24412 = state_24365__$1;
(statearr_24373_24412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (15))){
var state_24365__$1 = state_24365;
var statearr_24377_24413 = state_24365__$1;
(statearr_24377_24413[(2)] = null);

(statearr_24377_24413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (21))){
var state_24365__$1 = state_24365;
var statearr_24378_24414 = state_24365__$1;
(statearr_24378_24414[(2)] = null);

(statearr_24378_24414[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (13))){
var inst_24320 = (state_24365[(8)]);
var inst_24318 = (state_24365[(9)]);
var inst_24319 = (state_24365[(10)]);
var inst_24317 = (state_24365[(11)]);
var inst_24327 = (state_24365[(2)]);
var inst_24328 = (inst_24320 + (1));
var tmp24374 = inst_24318;
var tmp24375 = inst_24319;
var tmp24376 = inst_24317;
var inst_24317__$1 = tmp24376;
var inst_24318__$1 = tmp24374;
var inst_24319__$1 = tmp24375;
var inst_24320__$1 = inst_24328;
var state_24365__$1 = (function (){var statearr_24379 = state_24365;
(statearr_24379[(8)] = inst_24320__$1);

(statearr_24379[(14)] = inst_24327);

(statearr_24379[(9)] = inst_24318__$1);

(statearr_24379[(10)] = inst_24319__$1);

(statearr_24379[(11)] = inst_24317__$1);

return statearr_24379;
})();
var statearr_24380_24415 = state_24365__$1;
(statearr_24380_24415[(2)] = null);

(statearr_24380_24415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (22))){
var state_24365__$1 = state_24365;
var statearr_24381_24416 = state_24365__$1;
(statearr_24381_24416[(2)] = null);

(statearr_24381_24416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (6))){
var inst_24306 = (state_24365[(13)]);
var inst_24315 = f.call(null,inst_24306);
var inst_24316 = cljs.core.seq.call(null,inst_24315);
var inst_24317 = inst_24316;
var inst_24318 = null;
var inst_24319 = (0);
var inst_24320 = (0);
var state_24365__$1 = (function (){var statearr_24382 = state_24365;
(statearr_24382[(8)] = inst_24320);

(statearr_24382[(9)] = inst_24318);

(statearr_24382[(10)] = inst_24319);

(statearr_24382[(11)] = inst_24317);

return statearr_24382;
})();
var statearr_24383_24417 = state_24365__$1;
(statearr_24383_24417[(2)] = null);

(statearr_24383_24417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (17))){
var inst_24331 = (state_24365[(7)]);
var inst_24335 = cljs.core.chunk_first.call(null,inst_24331);
var inst_24336 = cljs.core.chunk_rest.call(null,inst_24331);
var inst_24337 = cljs.core.count.call(null,inst_24335);
var inst_24317 = inst_24336;
var inst_24318 = inst_24335;
var inst_24319 = inst_24337;
var inst_24320 = (0);
var state_24365__$1 = (function (){var statearr_24384 = state_24365;
(statearr_24384[(8)] = inst_24320);

(statearr_24384[(9)] = inst_24318);

(statearr_24384[(10)] = inst_24319);

(statearr_24384[(11)] = inst_24317);

return statearr_24384;
})();
var statearr_24385_24418 = state_24365__$1;
(statearr_24385_24418[(2)] = null);

(statearr_24385_24418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (3))){
var inst_24363 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24365__$1,inst_24363);
} else {
if((state_val_24366 === (12))){
var inst_24351 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24386_24419 = state_24365__$1;
(statearr_24386_24419[(2)] = inst_24351);

(statearr_24386_24419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (2))){
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24365__$1,(4),in$);
} else {
if((state_val_24366 === (23))){
var inst_24359 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24387_24420 = state_24365__$1;
(statearr_24387_24420[(2)] = inst_24359);

(statearr_24387_24420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (19))){
var inst_24346 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24388_24421 = state_24365__$1;
(statearr_24388_24421[(2)] = inst_24346);

(statearr_24388_24421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (11))){
var inst_24331 = (state_24365[(7)]);
var inst_24317 = (state_24365[(11)]);
var inst_24331__$1 = cljs.core.seq.call(null,inst_24317);
var state_24365__$1 = (function (){var statearr_24389 = state_24365;
(statearr_24389[(7)] = inst_24331__$1);

return statearr_24389;
})();
if(inst_24331__$1){
var statearr_24390_24422 = state_24365__$1;
(statearr_24390_24422[(1)] = (14));

} else {
var statearr_24391_24423 = state_24365__$1;
(statearr_24391_24423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (9))){
var inst_24353 = (state_24365[(2)]);
var inst_24354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24365__$1 = (function (){var statearr_24392 = state_24365;
(statearr_24392[(15)] = inst_24353);

return statearr_24392;
})();
if(cljs.core.truth_(inst_24354)){
var statearr_24393_24424 = state_24365__$1;
(statearr_24393_24424[(1)] = (21));

} else {
var statearr_24394_24425 = state_24365__$1;
(statearr_24394_24425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (5))){
var inst_24309 = cljs.core.async.close_BANG_.call(null,out);
var state_24365__$1 = state_24365;
var statearr_24395_24426 = state_24365__$1;
(statearr_24395_24426[(2)] = inst_24309);

(statearr_24395_24426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (14))){
var inst_24331 = (state_24365[(7)]);
var inst_24333 = cljs.core.chunked_seq_QMARK_.call(null,inst_24331);
var state_24365__$1 = state_24365;
if(inst_24333){
var statearr_24396_24427 = state_24365__$1;
(statearr_24396_24427[(1)] = (17));

} else {
var statearr_24397_24428 = state_24365__$1;
(statearr_24397_24428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (16))){
var inst_24349 = (state_24365[(2)]);
var state_24365__$1 = state_24365;
var statearr_24398_24429 = state_24365__$1;
(statearr_24398_24429[(2)] = inst_24349);

(statearr_24398_24429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24366 === (10))){
var inst_24320 = (state_24365[(8)]);
var inst_24318 = (state_24365[(9)]);
var inst_24325 = cljs.core._nth.call(null,inst_24318,inst_24320);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24365__$1,(13),out,inst_24325);
} else {
if((state_val_24366 === (18))){
var inst_24331 = (state_24365[(7)]);
var inst_24340 = cljs.core.first.call(null,inst_24331);
var state_24365__$1 = state_24365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24365__$1,(20),out,inst_24340);
} else {
if((state_val_24366 === (8))){
var inst_24320 = (state_24365[(8)]);
var inst_24319 = (state_24365[(10)]);
var inst_24322 = (inst_24320 < inst_24319);
var inst_24323 = inst_24322;
var state_24365__$1 = state_24365;
if(cljs.core.truth_(inst_24323)){
var statearr_24399_24430 = state_24365__$1;
(statearr_24399_24430[(1)] = (10));

} else {
var statearr_24400_24431 = state_24365__$1;
(statearr_24400_24431[(1)] = (11));

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
});})(c__21930__auto__))
;
return ((function (switch__21818__auto__,c__21930__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21819__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21819__auto____0 = (function (){
var statearr_24404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24404[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21819__auto__);

(statearr_24404[(1)] = (1));

return statearr_24404;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21819__auto____1 = (function (state_24365){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24405){if((e24405 instanceof Object)){
var ex__21822__auto__ = e24405;
var statearr_24406_24432 = state_24365;
(statearr_24406_24432[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24433 = state_24365;
state_24365 = G__24433;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21819__auto__ = function(state_24365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21819__auto____1.call(this,state_24365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21819__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21819__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto__))
})();
var state__21932__auto__ = (function (){var statearr_24407 = f__21931__auto__.call(null);
(statearr_24407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto__);

return statearr_24407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto__))
);

return c__21930__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24434 = [];
var len__17829__auto___24437 = arguments.length;
var i__17830__auto___24438 = (0);
while(true){
if((i__17830__auto___24438 < len__17829__auto___24437)){
args24434.push((arguments[i__17830__auto___24438]));

var G__24439 = (i__17830__auto___24438 + (1));
i__17830__auto___24438 = G__24439;
continue;
} else {
}
break;
}

var G__24436 = args24434.length;
switch (G__24436) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24434.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24441 = [];
var len__17829__auto___24444 = arguments.length;
var i__17830__auto___24445 = (0);
while(true){
if((i__17830__auto___24445 < len__17829__auto___24444)){
args24441.push((arguments[i__17830__auto___24445]));

var G__24446 = (i__17830__auto___24445 + (1));
i__17830__auto___24445 = G__24446;
continue;
} else {
}
break;
}

var G__24443 = args24441.length;
switch (G__24443) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24441.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24448 = [];
var len__17829__auto___24499 = arguments.length;
var i__17830__auto___24500 = (0);
while(true){
if((i__17830__auto___24500 < len__17829__auto___24499)){
args24448.push((arguments[i__17830__auto___24500]));

var G__24501 = (i__17830__auto___24500 + (1));
i__17830__auto___24500 = G__24501;
continue;
} else {
}
break;
}

var G__24450 = args24448.length;
switch (G__24450) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24448.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21930__auto___24503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___24503,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___24503,out){
return (function (state_24474){
var state_val_24475 = (state_24474[(1)]);
if((state_val_24475 === (7))){
var inst_24469 = (state_24474[(2)]);
var state_24474__$1 = state_24474;
var statearr_24476_24504 = state_24474__$1;
(statearr_24476_24504[(2)] = inst_24469);

(statearr_24476_24504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (1))){
var inst_24451 = null;
var state_24474__$1 = (function (){var statearr_24477 = state_24474;
(statearr_24477[(7)] = inst_24451);

return statearr_24477;
})();
var statearr_24478_24505 = state_24474__$1;
(statearr_24478_24505[(2)] = null);

(statearr_24478_24505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (4))){
var inst_24454 = (state_24474[(8)]);
var inst_24454__$1 = (state_24474[(2)]);
var inst_24455 = (inst_24454__$1 == null);
var inst_24456 = cljs.core.not.call(null,inst_24455);
var state_24474__$1 = (function (){var statearr_24479 = state_24474;
(statearr_24479[(8)] = inst_24454__$1);

return statearr_24479;
})();
if(inst_24456){
var statearr_24480_24506 = state_24474__$1;
(statearr_24480_24506[(1)] = (5));

} else {
var statearr_24481_24507 = state_24474__$1;
(statearr_24481_24507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (6))){
var state_24474__$1 = state_24474;
var statearr_24482_24508 = state_24474__$1;
(statearr_24482_24508[(2)] = null);

(statearr_24482_24508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (3))){
var inst_24471 = (state_24474[(2)]);
var inst_24472 = cljs.core.async.close_BANG_.call(null,out);
var state_24474__$1 = (function (){var statearr_24483 = state_24474;
(statearr_24483[(9)] = inst_24471);

return statearr_24483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24474__$1,inst_24472);
} else {
if((state_val_24475 === (2))){
var state_24474__$1 = state_24474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24474__$1,(4),ch);
} else {
if((state_val_24475 === (11))){
var inst_24454 = (state_24474[(8)]);
var inst_24463 = (state_24474[(2)]);
var inst_24451 = inst_24454;
var state_24474__$1 = (function (){var statearr_24484 = state_24474;
(statearr_24484[(10)] = inst_24463);

(statearr_24484[(7)] = inst_24451);

return statearr_24484;
})();
var statearr_24485_24509 = state_24474__$1;
(statearr_24485_24509[(2)] = null);

(statearr_24485_24509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (9))){
var inst_24454 = (state_24474[(8)]);
var state_24474__$1 = state_24474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24474__$1,(11),out,inst_24454);
} else {
if((state_val_24475 === (5))){
var inst_24454 = (state_24474[(8)]);
var inst_24451 = (state_24474[(7)]);
var inst_24458 = cljs.core._EQ_.call(null,inst_24454,inst_24451);
var state_24474__$1 = state_24474;
if(inst_24458){
var statearr_24487_24510 = state_24474__$1;
(statearr_24487_24510[(1)] = (8));

} else {
var statearr_24488_24511 = state_24474__$1;
(statearr_24488_24511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (10))){
var inst_24466 = (state_24474[(2)]);
var state_24474__$1 = state_24474;
var statearr_24489_24512 = state_24474__$1;
(statearr_24489_24512[(2)] = inst_24466);

(statearr_24489_24512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (8))){
var inst_24451 = (state_24474[(7)]);
var tmp24486 = inst_24451;
var inst_24451__$1 = tmp24486;
var state_24474__$1 = (function (){var statearr_24490 = state_24474;
(statearr_24490[(7)] = inst_24451__$1);

return statearr_24490;
})();
var statearr_24491_24513 = state_24474__$1;
(statearr_24491_24513[(2)] = null);

(statearr_24491_24513[(1)] = (2));


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
});})(c__21930__auto___24503,out))
;
return ((function (switch__21818__auto__,c__21930__auto___24503,out){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_24495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24495[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_24495[(1)] = (1));

return statearr_24495;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_24474){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24496){if((e24496 instanceof Object)){
var ex__21822__auto__ = e24496;
var statearr_24497_24514 = state_24474;
(statearr_24497_24514[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24515 = state_24474;
state_24474 = G__24515;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_24474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_24474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___24503,out))
})();
var state__21932__auto__ = (function (){var statearr_24498 = f__21931__auto__.call(null);
(statearr_24498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___24503);

return statearr_24498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___24503,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24516 = [];
var len__17829__auto___24586 = arguments.length;
var i__17830__auto___24587 = (0);
while(true){
if((i__17830__auto___24587 < len__17829__auto___24586)){
args24516.push((arguments[i__17830__auto___24587]));

var G__24588 = (i__17830__auto___24587 + (1));
i__17830__auto___24587 = G__24588;
continue;
} else {
}
break;
}

var G__24518 = args24516.length;
switch (G__24518) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24516.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21930__auto___24590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___24590,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___24590,out){
return (function (state_24556){
var state_val_24557 = (state_24556[(1)]);
if((state_val_24557 === (7))){
var inst_24552 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24558_24591 = state_24556__$1;
(statearr_24558_24591[(2)] = inst_24552);

(statearr_24558_24591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (1))){
var inst_24519 = (new Array(n));
var inst_24520 = inst_24519;
var inst_24521 = (0);
var state_24556__$1 = (function (){var statearr_24559 = state_24556;
(statearr_24559[(7)] = inst_24520);

(statearr_24559[(8)] = inst_24521);

return statearr_24559;
})();
var statearr_24560_24592 = state_24556__$1;
(statearr_24560_24592[(2)] = null);

(statearr_24560_24592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (4))){
var inst_24524 = (state_24556[(9)]);
var inst_24524__$1 = (state_24556[(2)]);
var inst_24525 = (inst_24524__$1 == null);
var inst_24526 = cljs.core.not.call(null,inst_24525);
var state_24556__$1 = (function (){var statearr_24561 = state_24556;
(statearr_24561[(9)] = inst_24524__$1);

return statearr_24561;
})();
if(inst_24526){
var statearr_24562_24593 = state_24556__$1;
(statearr_24562_24593[(1)] = (5));

} else {
var statearr_24563_24594 = state_24556__$1;
(statearr_24563_24594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (15))){
var inst_24546 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24564_24595 = state_24556__$1;
(statearr_24564_24595[(2)] = inst_24546);

(statearr_24564_24595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (13))){
var state_24556__$1 = state_24556;
var statearr_24565_24596 = state_24556__$1;
(statearr_24565_24596[(2)] = null);

(statearr_24565_24596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (6))){
var inst_24521 = (state_24556[(8)]);
var inst_24542 = (inst_24521 > (0));
var state_24556__$1 = state_24556;
if(cljs.core.truth_(inst_24542)){
var statearr_24566_24597 = state_24556__$1;
(statearr_24566_24597[(1)] = (12));

} else {
var statearr_24567_24598 = state_24556__$1;
(statearr_24567_24598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (3))){
var inst_24554 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24556__$1,inst_24554);
} else {
if((state_val_24557 === (12))){
var inst_24520 = (state_24556[(7)]);
var inst_24544 = cljs.core.vec.call(null,inst_24520);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24556__$1,(15),out,inst_24544);
} else {
if((state_val_24557 === (2))){
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24556__$1,(4),ch);
} else {
if((state_val_24557 === (11))){
var inst_24536 = (state_24556[(2)]);
var inst_24537 = (new Array(n));
var inst_24520 = inst_24537;
var inst_24521 = (0);
var state_24556__$1 = (function (){var statearr_24568 = state_24556;
(statearr_24568[(10)] = inst_24536);

(statearr_24568[(7)] = inst_24520);

(statearr_24568[(8)] = inst_24521);

return statearr_24568;
})();
var statearr_24569_24599 = state_24556__$1;
(statearr_24569_24599[(2)] = null);

(statearr_24569_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (9))){
var inst_24520 = (state_24556[(7)]);
var inst_24534 = cljs.core.vec.call(null,inst_24520);
var state_24556__$1 = state_24556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24556__$1,(11),out,inst_24534);
} else {
if((state_val_24557 === (5))){
var inst_24520 = (state_24556[(7)]);
var inst_24524 = (state_24556[(9)]);
var inst_24521 = (state_24556[(8)]);
var inst_24529 = (state_24556[(11)]);
var inst_24528 = (inst_24520[inst_24521] = inst_24524);
var inst_24529__$1 = (inst_24521 + (1));
var inst_24530 = (inst_24529__$1 < n);
var state_24556__$1 = (function (){var statearr_24570 = state_24556;
(statearr_24570[(12)] = inst_24528);

(statearr_24570[(11)] = inst_24529__$1);

return statearr_24570;
})();
if(cljs.core.truth_(inst_24530)){
var statearr_24571_24600 = state_24556__$1;
(statearr_24571_24600[(1)] = (8));

} else {
var statearr_24572_24601 = state_24556__$1;
(statearr_24572_24601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (14))){
var inst_24549 = (state_24556[(2)]);
var inst_24550 = cljs.core.async.close_BANG_.call(null,out);
var state_24556__$1 = (function (){var statearr_24574 = state_24556;
(statearr_24574[(13)] = inst_24549);

return statearr_24574;
})();
var statearr_24575_24602 = state_24556__$1;
(statearr_24575_24602[(2)] = inst_24550);

(statearr_24575_24602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (10))){
var inst_24540 = (state_24556[(2)]);
var state_24556__$1 = state_24556;
var statearr_24576_24603 = state_24556__$1;
(statearr_24576_24603[(2)] = inst_24540);

(statearr_24576_24603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24557 === (8))){
var inst_24520 = (state_24556[(7)]);
var inst_24529 = (state_24556[(11)]);
var tmp24573 = inst_24520;
var inst_24520__$1 = tmp24573;
var inst_24521 = inst_24529;
var state_24556__$1 = (function (){var statearr_24577 = state_24556;
(statearr_24577[(7)] = inst_24520__$1);

(statearr_24577[(8)] = inst_24521);

return statearr_24577;
})();
var statearr_24578_24604 = state_24556__$1;
(statearr_24578_24604[(2)] = null);

(statearr_24578_24604[(1)] = (2));


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
});})(c__21930__auto___24590,out))
;
return ((function (switch__21818__auto__,c__21930__auto___24590,out){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_24582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24582[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_24582[(1)] = (1));

return statearr_24582;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_24556){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24583){if((e24583 instanceof Object)){
var ex__21822__auto__ = e24583;
var statearr_24584_24605 = state_24556;
(statearr_24584_24605[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24606 = state_24556;
state_24556 = G__24606;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_24556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_24556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___24590,out))
})();
var state__21932__auto__ = (function (){var statearr_24585 = f__21931__auto__.call(null);
(statearr_24585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___24590);

return statearr_24585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___24590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24607 = [];
var len__17829__auto___24681 = arguments.length;
var i__17830__auto___24682 = (0);
while(true){
if((i__17830__auto___24682 < len__17829__auto___24681)){
args24607.push((arguments[i__17830__auto___24682]));

var G__24683 = (i__17830__auto___24682 + (1));
i__17830__auto___24682 = G__24683;
continue;
} else {
}
break;
}

var G__24609 = args24607.length;
switch (G__24609) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24607.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21930__auto___24685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21930__auto___24685,out){
return (function (){
var f__21931__auto__ = (function (){var switch__21818__auto__ = ((function (c__21930__auto___24685,out){
return (function (state_24651){
var state_val_24652 = (state_24651[(1)]);
if((state_val_24652 === (7))){
var inst_24647 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
var statearr_24653_24686 = state_24651__$1;
(statearr_24653_24686[(2)] = inst_24647);

(statearr_24653_24686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (1))){
var inst_24610 = [];
var inst_24611 = inst_24610;
var inst_24612 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24651__$1 = (function (){var statearr_24654 = state_24651;
(statearr_24654[(7)] = inst_24612);

(statearr_24654[(8)] = inst_24611);

return statearr_24654;
})();
var statearr_24655_24687 = state_24651__$1;
(statearr_24655_24687[(2)] = null);

(statearr_24655_24687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (4))){
var inst_24615 = (state_24651[(9)]);
var inst_24615__$1 = (state_24651[(2)]);
var inst_24616 = (inst_24615__$1 == null);
var inst_24617 = cljs.core.not.call(null,inst_24616);
var state_24651__$1 = (function (){var statearr_24656 = state_24651;
(statearr_24656[(9)] = inst_24615__$1);

return statearr_24656;
})();
if(inst_24617){
var statearr_24657_24688 = state_24651__$1;
(statearr_24657_24688[(1)] = (5));

} else {
var statearr_24658_24689 = state_24651__$1;
(statearr_24658_24689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (15))){
var inst_24641 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
var statearr_24659_24690 = state_24651__$1;
(statearr_24659_24690[(2)] = inst_24641);

(statearr_24659_24690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (13))){
var state_24651__$1 = state_24651;
var statearr_24660_24691 = state_24651__$1;
(statearr_24660_24691[(2)] = null);

(statearr_24660_24691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (6))){
var inst_24611 = (state_24651[(8)]);
var inst_24636 = inst_24611.length;
var inst_24637 = (inst_24636 > (0));
var state_24651__$1 = state_24651;
if(cljs.core.truth_(inst_24637)){
var statearr_24661_24692 = state_24651__$1;
(statearr_24661_24692[(1)] = (12));

} else {
var statearr_24662_24693 = state_24651__$1;
(statearr_24662_24693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (3))){
var inst_24649 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24651__$1,inst_24649);
} else {
if((state_val_24652 === (12))){
var inst_24611 = (state_24651[(8)]);
var inst_24639 = cljs.core.vec.call(null,inst_24611);
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24651__$1,(15),out,inst_24639);
} else {
if((state_val_24652 === (2))){
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24651__$1,(4),ch);
} else {
if((state_val_24652 === (11))){
var inst_24615 = (state_24651[(9)]);
var inst_24619 = (state_24651[(10)]);
var inst_24629 = (state_24651[(2)]);
var inst_24630 = [];
var inst_24631 = inst_24630.push(inst_24615);
var inst_24611 = inst_24630;
var inst_24612 = inst_24619;
var state_24651__$1 = (function (){var statearr_24663 = state_24651;
(statearr_24663[(7)] = inst_24612);

(statearr_24663[(8)] = inst_24611);

(statearr_24663[(11)] = inst_24629);

(statearr_24663[(12)] = inst_24631);

return statearr_24663;
})();
var statearr_24664_24694 = state_24651__$1;
(statearr_24664_24694[(2)] = null);

(statearr_24664_24694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (9))){
var inst_24611 = (state_24651[(8)]);
var inst_24627 = cljs.core.vec.call(null,inst_24611);
var state_24651__$1 = state_24651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24651__$1,(11),out,inst_24627);
} else {
if((state_val_24652 === (5))){
var inst_24615 = (state_24651[(9)]);
var inst_24619 = (state_24651[(10)]);
var inst_24612 = (state_24651[(7)]);
var inst_24619__$1 = f.call(null,inst_24615);
var inst_24620 = cljs.core._EQ_.call(null,inst_24619__$1,inst_24612);
var inst_24621 = cljs.core.keyword_identical_QMARK_.call(null,inst_24612,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24622 = (inst_24620) || (inst_24621);
var state_24651__$1 = (function (){var statearr_24665 = state_24651;
(statearr_24665[(10)] = inst_24619__$1);

return statearr_24665;
})();
if(cljs.core.truth_(inst_24622)){
var statearr_24666_24695 = state_24651__$1;
(statearr_24666_24695[(1)] = (8));

} else {
var statearr_24667_24696 = state_24651__$1;
(statearr_24667_24696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (14))){
var inst_24644 = (state_24651[(2)]);
var inst_24645 = cljs.core.async.close_BANG_.call(null,out);
var state_24651__$1 = (function (){var statearr_24669 = state_24651;
(statearr_24669[(13)] = inst_24644);

return statearr_24669;
})();
var statearr_24670_24697 = state_24651__$1;
(statearr_24670_24697[(2)] = inst_24645);

(statearr_24670_24697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (10))){
var inst_24634 = (state_24651[(2)]);
var state_24651__$1 = state_24651;
var statearr_24671_24698 = state_24651__$1;
(statearr_24671_24698[(2)] = inst_24634);

(statearr_24671_24698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24652 === (8))){
var inst_24615 = (state_24651[(9)]);
var inst_24619 = (state_24651[(10)]);
var inst_24611 = (state_24651[(8)]);
var inst_24624 = inst_24611.push(inst_24615);
var tmp24668 = inst_24611;
var inst_24611__$1 = tmp24668;
var inst_24612 = inst_24619;
var state_24651__$1 = (function (){var statearr_24672 = state_24651;
(statearr_24672[(7)] = inst_24612);

(statearr_24672[(8)] = inst_24611__$1);

(statearr_24672[(14)] = inst_24624);

return statearr_24672;
})();
var statearr_24673_24699 = state_24651__$1;
(statearr_24673_24699[(2)] = null);

(statearr_24673_24699[(1)] = (2));


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
});})(c__21930__auto___24685,out))
;
return ((function (switch__21818__auto__,c__21930__auto___24685,out){
return (function() {
var cljs$core$async$state_machine__21819__auto__ = null;
var cljs$core$async$state_machine__21819__auto____0 = (function (){
var statearr_24677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24677[(0)] = cljs$core$async$state_machine__21819__auto__);

(statearr_24677[(1)] = (1));

return statearr_24677;
});
var cljs$core$async$state_machine__21819__auto____1 = (function (state_24651){
while(true){
var ret_value__21820__auto__ = (function (){try{while(true){
var result__21821__auto__ = switch__21818__auto__.call(null,state_24651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21821__auto__;
}
break;
}
}catch (e24678){if((e24678 instanceof Object)){
var ex__21822__auto__ = e24678;
var statearr_24679_24700 = state_24651;
(statearr_24679_24700[(5)] = ex__21822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24701 = state_24651;
state_24651 = G__24701;
continue;
} else {
return ret_value__21820__auto__;
}
break;
}
});
cljs$core$async$state_machine__21819__auto__ = function(state_24651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21819__auto____1.call(this,state_24651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21819__auto____0;
cljs$core$async$state_machine__21819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21819__auto____1;
return cljs$core$async$state_machine__21819__auto__;
})()
;})(switch__21818__auto__,c__21930__auto___24685,out))
})();
var state__21932__auto__ = (function (){var statearr_24680 = f__21931__auto__.call(null);
(statearr_24680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21930__auto___24685);

return statearr_24680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21932__auto__);
});})(c__21930__auto___24685,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map