var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=re,w=function(){ie.postMessage(null)}}else w=function(){_(re,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),A=`__reactFiber$`+mt,ht=`__reactProps$`+mt,gt=`__reactContainer$`+mt,_t=`__reactEvents$`+mt,vt=`__reactListeners$`+mt,yt=`__reactHandles$`+mt,bt=`__reactResources$`+mt,xt=`__reactMarker$`+mt;function St(e){delete e[A],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[A];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[A]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[A])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[A]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return ke.call(Pt,e)?!0:ke.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),j=Dn(h({},On,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=Dn(h({},An,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=Dn(h({},On,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=_n&&`CompositionEvent`in window,er=null;_n&&`documentMode`in document&&(er=document.documentMode);var tr=_n&&`TextEvent`in window&&!er,nr=_n&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Cn(),Sn=xn=bn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ut(Tt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(_n){var yr;if(_n){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,un(e)),hn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=_n&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Wt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};_n&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),At(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=hi(31,n,t,a),e.elementType=T,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ke(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[A]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=pe(null),Qi=null,$i=null;function ea(e,t,n){k(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,O(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?k(Ca,Ca.current):k(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(le(t)||oe(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Wl,k(io,e),k(ro,t),Wl=e|t.baseLanes}function oo(){k(io,Wl),k(ro,ro.current)}function so(){Wl=io.current,O(ro),O(io)}var co=pe(null),lo=null;function uo(e){var t=e.alternate;k(F,F.current&1),k(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){k(F,F.current),k(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(k(F,F.current),k(co,e),lo===null&&(lo=e)):mo(e)}function mo(){k(F,F.current),k(co,co.current)}function ho(e){O(co),lo===e&&(lo=null),O(F)}var F=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){E.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(F.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&aa(e)))}function Nc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[A]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=me.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=me.current,qi(t))Gi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[A]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[A]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[A]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[A]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[A]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(O(F),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return k(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=F.current,k(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(F),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&O(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:O(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&O(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[A]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[A]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[A]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[A]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?ft():dd()}function mu(){if(Jl===0){if(!(J&536870912)||N){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912}return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,E.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=ui(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=zn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c)){if(vr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new j(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new j(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[A]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/patent-law-site/`+e},x={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=b(t,n),t=s(t),t in x)return;x[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:y,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function te(e,t){return t+e.replace(/\\/g,`/`)}var ne=`popstate`;function re(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return se(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ce(t)}return E(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function ie(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function E(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=re(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=re(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return D(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ne,d),c=e,()=>{i.removeEventListener(ne,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function D(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function ue(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=Oe((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??fe(e),s=null,c=De(a);for(let e=0;s==null&&e<o.length;++e)s=Ce(o[e],c,r);return s}function fe(e){let t=pe(e);return k(t),t}function pe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ie([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),pe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:xe(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ee(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of O(e.path))a(e,t,!0,n)}),t}function O(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=O(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function k(e){e.sort((e,t)=>e.score===t.score?Se(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var me=/^:[\w-]+$/,he=3,ge=2,_e=1,ve=10,ye=-2,be=e=>e===`*`;function xe(e,t){let n=e.split(`/`),r=n.length;return n.some(be)&&(r+=ye),t&&(r+=ge),n.filter(e=>!be(e)).reduce((e,t)=>e+(me.test(t)?he:t===``?_e:ve),r)}function Se(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Te(u,l,s.matcher,s.compiledParams):we(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ie([a,d.pathname]),pathnameBase:Re(Ie([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Ie([a,d.pathnameBase]))}return o}function we(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end);return Te(e,t,n,r)}function Te(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ee(e,t=!1,n=!0){ie(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function De(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ie(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Oe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function ke(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Fe(n),a=n.startsWith(`/`)?Ae(n.substring(1),`/`):Ae(n,t)):a=t,{pathname:a,search:ze(r),hash:Be(i)}}function Ae(e,t){let n=Le(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function je(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Me(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ne(e){let t=Me(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Pe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),je(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),je(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),je(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ke(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Fe=e=>e.replace(/[\\/]{2,}/g,`/`),Ie=e=>Fe(e.join(`/`)),Le=e=>e.replace(/\/+$/,``),Re=e=>Le(e).replace(/^\/*/,`/`),ze=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Be=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ve=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function He(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ue(e){return Ie(e.map(e=>e.route.path).filter(Boolean))||`/`}var We=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ge(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(We)try{let e=new URL(window.location.href),r=C.test(n)?new URL(te(n,e.protocol)):new URL(n),a=Oe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ie(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ke=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ke);var qe=[`GET`,...Ke];new Set(qe);var Je=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ye(e){try{return Je.includes(new URL(e).protocol)}catch{return!1}}var Xe=_.createContext(null);Xe.displayName=`DataRouter`;var Ze=_.createContext(null);Ze.displayName=`DataRouterState`;var Qe=_.createContext(!1);function $e(){return _.useContext(Qe)}var et=_.createContext({isTransitioning:!1});et.displayName=`ViewTransition`;var tt=_.createContext(new Map);tt.displayName=`Fetchers`;var nt=_.createContext(null);nt.displayName=`Await`;var rt=_.createContext(null);rt.displayName=`Navigation`;var it=_.createContext(null);it.displayName=`Location`;var at=_.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName=`Route`;var ot=_.createContext(null);ot.displayName=`RouteError`;var st=`REACT_ROUTER_ERROR`,ct=`REDIRECT`,lt=`ROUTE_ERROR_RESPONSE`;function ut(e){if(e.startsWith(`${st}:${ct}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function dt(e){if(e.startsWith(`${st}:${lt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ve(t.status,t.statusText,t.data)}catch{}}function ft(e,{relative:t}={}){T(pt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(rt),{hash:i,pathname:a,search:o}=yt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ie([n,a])),r.createHref({pathname:s,search:o,hash:i})}function pt(){return _.useContext(it)!=null}function mt(){return T(pt(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(it).location}var A=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ht(e){_.useContext(rt).static||_.useLayoutEffect(e)}function gt(){let{isDataRoute:e}=_.useContext(at);return e?It():_t()}function _t(){T(pt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Xe),{basename:t,navigator:n}=_.useContext(rt),{matches:r}=_.useContext(at),{pathname:i}=mt(),a=JSON.stringify(Ne(r)),o=_.useRef(!1);return ht(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(ie(o.current,A),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Pe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ie([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function vt(){let{matches:e}=_.useContext(at);return e[e.length-1]?.params??{}}function yt(e,{relative:t}={}){let{matches:n}=_.useContext(at),{pathname:r}=mt(),i=JSON.stringify(Ne(n));return _.useMemo(()=>Pe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function bt(e,t){return xt(e,t)}function xt(e,t,n){T(pt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(rt),{matches:i}=_.useContext(at),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Rt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=mt(),d;if(t){let e=typeof t==`string`?le(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ue(e,{pathname:p});ie(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ie(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ot(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ie([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ie([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(it.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function St(){let e=Ft(),t=He(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var Ct=_.createElement(St,null),wt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=dt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(at.Provider,{value:this.props.routeContext},_.createElement(ot.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(Et,{error:e},t):t}};wt.contextType=Qe;var Tt=new WeakMap;function Et({children:e,error:t}){let{basename:n}=_.useContext(rt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ut(t.digest);if(e){let r=Tt.get(t);if(r)throw r;let i=Ge(e.location,n),a=i.absoluteURL||i.to;if(Ye(a))throw Error(`Invalid redirect location`);if(We&&!Tt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Tt.set(t,n),n}}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Dt({routeContext:e,match:t,children:n}){let r=_.useContext(Xe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(at.Provider,{value:e},n)}function Ot(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ue(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ct,o&&(s<0&&c===0?(Rt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Dt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(wt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function kt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function At(e){let t=_.useContext(Xe);return T(t,kt(e)),t}function jt(e){let t=_.useContext(Ze);return T(t,kt(e)),t}function Mt(e){let t=_.useContext(at);return T(t,kt(e)),t}function Nt(e){let t=Mt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pt(){return Nt(`useRouteId`)}function Ft(){let e=_.useContext(ot),t=jt(`useRouteError`),n=Nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function It(){let{router:e}=At(`useNavigate`),t=Nt(`useNavigate`),n=_.useRef(!1);return ht(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{ie(n.current,A),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Lt={};function Rt(e,t,n){!t&&!Lt[e]&&(Lt[e]=!0,ie(!1,n))}_.memo(zt);function zt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return xt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Bt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Vt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!pt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Oe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ie(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(rt.Provider,{value:c},_.createElement(it.Provider,{children:t,value:h}))}function Ht({children:e,location:t}){return bt(Ut(e),t)}_.Component;function Ut(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Ut(e.props.children,i));return}T(e.type===Bt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ut(e.props.children,i)),n.push(a)}),n}var Wt=`get`,Gt=`application/x-www-form-urlencoded`;function Kt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function qt(e){return Kt(e)&&e.tagName.toLowerCase()===`button`}function Jt(e){return Kt(e)&&e.tagName.toLowerCase()===`form`}function Yt(e){return Kt(e)&&e.tagName.toLowerCase()===`input`}function Xt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zt(e,t){return e.button===0&&(!t||t===`_self`)&&!Xt(e)}var Qt=null;function $t(){if(Qt===null)try{new FormData(document.createElement(`form`),0),Qt=!1}catch{Qt=!0}return Qt}var en=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function tn(e){return e!=null&&!en.has(e)?(ie(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gt}"`),null):e}function nn(e,t){let n,r,i,a,o;if(Jt(e)){let o=e.getAttribute(`action`);r=o?Oe(o,t):null,n=e.getAttribute(`method`)||Wt,i=tn(e.getAttribute(`enctype`))||Gt,a=new FormData(e)}else if(qt(e)||Yt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Oe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Wt,i=tn(e.getAttribute(`formenctype`))||tn(o.getAttribute(`enctype`))||Gt,a=new FormData(o,e),!$t()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Kt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Wt,r=null,i=Gt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Oe(i.pathname,t)===`/`?`${Le(t)}/_root.${r}`:`${Le(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=_.useContext(Xe);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=_.useContext(Ze);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=_.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=_.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=_.useContext(_n),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=$e(),{nonce:r}=vn(),{router:i}=hn(),a=_.useMemo(()=>ue(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(Cn,{page:e,matches:a,...t}):_.createElement(wn,{page:e,matches:a,...t})):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=mt(),{future:i}=vn(),{basename:a}=hn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=mt(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=_.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.18.2`)}catch{}function Dn({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=w({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Vt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var On=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(rt),y=typeof l==`string`&&S.test(l),b=Ge(l,h);l=b.to;let x=ft(l,{relative:r}),ee=mt(),C=null;if(o){let e=Pe(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ie([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=yn(n,p),w=Nn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function T(t){e&&e(t),t.defaultPrevented||w(t)}let ie=!(b.isExternal||i),ae=_.createElement(`a`,{...p,...re,href:(ie?C:void 0)||b.absoluteURL||x,onClick:ie?T:e,ref:Tn(m,ne),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return te&&!y?_.createElement(_.Fragment,null,ae,_.createElement(xn,{page:x})):ae});On.displayName=`Link`;var kn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=yt(a,{relative:c.relative}),d=mt(),f=_.useContext(Ze),{navigator:p,basename:m}=_.useContext(rt),h=f!=null&&Rn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Oe(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return _.createElement(On,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});kn.displayName=`NavLink`;var An=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Wt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(rt),g=In(),v=Ln(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&S.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mn(e){let t=_.useContext(Xe);return T(t,jn(e)),t}function Nn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=gt(),d=mt(),f=yt(e,{relative:o});return _.useCallback(p=>{if(Zt(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Pn=0,Fn=()=>`__${String(++Pn)}__`;function In(){let{router:e}=Mn(`useSubmit`),{basename:t}=_.useContext(rt),n=Pt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=nn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Fn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ln(e,{relative:t}={}){let{basename:n}=_.useContext(rt),r=_.useContext(at);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...yt(e||`.`,{relative:t})},o=mt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ie([n,a.pathname])),ce(a)}function Rn(e,{relative:t}={}){let n=_.useContext(et);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mn(`useViewTransitionState`),i=yt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Oe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Oe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return we(i.pathname,o)!=null||we(i.pathname,a)!=null}var zn={title:`특허법 체계도`,categories:[{id:`general`,number:1,title:`총칙·부칙`,items:[{title:`목적`,articles:[`1`]},{title:`정의`,articles:[`2`]},{title:`행위능력`,articles:[`3`,`4`,`5`]},{title:`대리인`,articles:[`3②`,`5`,`12`]},{title:`복수당사자 대표`,articles:[`11`]},{title:`재외자의 재판관할`,articles:[`13`]},{title:`기일과 기간`,articles:[`14`,`15`]},{title:`특허에 관한 절차 일반`,articles:[`16`,`28`,`28의2`,`28의3`,`28의4`,`28의5`]},{title:`추후보완`,articles:[`17`,`67의3`]},{title:`절차의 효력의 승계 및 절차의 수행`,articles:[`18`,`19`]},{title:`절차의 정지`,articles:[`20`,`21`,`22`,`23`,`24`,`78`,`164`]},{title:`보칙`,articles:[`215`,`216`,`217`,`217의2`,`218`,`219`,`220`,`221`,`222`,`223`,`224`,`224의2`]}]},{id:`requirements`,number:2,title:`특허요건`,groups:[{title:`특허를 받을 수 있는 발명`,items:[{title:`협의의 특허요건`,articles:[`29`]},{title:`선출원주의`,articles:[`36`]}]},{title:`특허를 받을 수 없는 발명`,items:[{title:`불특허발명`,articles:[`32`]},{title:`국방상 필요한 발명`,articles:[`41`,`106`]}]},{title:`특허를 받을 수 있는 자`,items:[{title:`출원인`,articles:[`25`,`33`,`44`]},{title:`특허를 받을 수 있는 권리`,articles:[`37`,`38`]},{title:`직무발명`,articles:[`발명진흥법 2`,`발명진흥법 10`,`발명진흥법 11`,`발명진흥법 12`,`발명진흥법 13`,`발명진흥법 14`,`발명진흥법 15`,`발명진흥법 16`,`발명진흥법 17`,`발명진흥법 18`,`발명진흥법 19`,`발명진흥법 58`]}]},{title:`특허를 받을 수 있는 출원`,items:[{title:`특허출원`,articles:[`42`,`42의2`,`42의3`,`43`]},{title:`하나의 특허출원의 범위`,articles:[`45`]}]}]},{id:`benefit-system`,number:3,title:`이익제도`,groups:[{title:`공지예외`,items:[{title:`공지예외적용주장출원`,articles:[`30`]}]},{title:`출원일 소급제도`,items:[{title:`정당한 권리자의 보호`,articles:[`34`,`35`,`99의2`]},{title:`보정`,articles:[`46`,`47`,`51`]},{title:`분할출원`,articles:[`52`]},{title:`분리출원`,articles:[`52의2`]},{title:`변경출원`,articles:[`53`]}]},{title:`판단시점 소급제도`,items:[{title:`조약우선권주장출원`,articles:[`54`]},{title:`국내우선권주장출원`,articles:[`55`,`56`]}]}]},{id:`examination`,number:4,title:`심사제도`,groups:[{title:`주체`,items:[{title:`심사관`,articles:[`57`,`68`]},{title:`전문기관`,articles:[`58`,`58의2`]}]},{title:`청구`,items:[{title:`심사청구제도`,articles:[`59`,`60`]},{title:`우선심사제도`,articles:[`61`]}]},{title:`진행`,items:[{title:`심사의 진행`,articles:[`62`,`63`,`63의3`]}]},{title:`종료`,items:[{title:`출원의 무효·취하·포기`,articles:[]},{title:`특허여부결정`,articles:[`62`,`63`,`66`,`67`,`67의2`,`67의3`]}]},{title:`관련`,items:[{title:`정보제공제도`,articles:[`63의2`]},{title:`출원공개제도`,articles:[`64`,`65`]},{title:`타절차와의 관계`,articles:[`78`]}]}]},{id:`patent-right`,number:5,title:`특허권`,groups:[{title:`발생`,items:[{title:`특허료의 납부 등`,articles:[`79`,`80`,`81`,`81의2`,`81의3`,`82`,`83`,`84`,`85`,`86`]},{title:`설정등록 및 등록공고`,articles:[`87`]}]},{title:`효력`,groups:[{title:`범위`,groups:[{title:`시간적`,items:[{title:`존속기간`,articles:[`88`]},{title:`존속기간의 연장`,articles:[`89`,`90`,`91`,`92`,`93`,`95`]}]},{title:`내용적`,items:[{title:`청구범위`,articles:[]}]},{title:`지역적`,items:[{title:`속지주의`,articles:[]}]}]},{title:`내용`,items:[{title:`적극적 효력`,articles:[`94`]},{title:`소극적 효력`,articles:[],note:`침해`},{title:`제한`,articles:[`81의3④`,`96`,`181`,`198`]},{title:`확장`,articles:[`127`]}]},{title:`침해`,groups:[{title:`종류`,items:[{title:`직접침해`,articles:[`97`,`98`]},{title:`간접침해`,articles:[`127`]}]},{title:`조치`,items:[{title:`민사적 조치`,articles:[`126`,`127`,`128`,`128의2`,`129`,`130`,`131`,`132`]},{title:`형사적 조치`,articles:[`225`,`226`,`227`,`228`,`229`,`230`,`231`,`232`]}]}]}]},{title:`변동`,groups:[{title:`이전 및 공유`,items:[{title:`이전 및 공유`,articles:[`99`,`99의2`]}]},{title:`실시권`,items:[{title:`일반론`,articles:[`100`,`101`,`102`,`118`]},{title:`법정실시권`,articles:[`81의3`,`103`,`104`,`105`,`122`,`182`,`183`,`발명진흥법 10①`]},{title:`강제실시권`,articles:[`106의2`,`107`,`108`,`109`,`110`,`111`,`112`,`113`,`114`,`115`,`138`]}]}]},{title:`질권`,items:[{title:`질권`,articles:[`121`,`122`,`123`]}]},{title:`소멸`,groups:[{title:`원인`,items:[{title:`소급소멸`,articles:[]}]},{title:`효과`,items:[{title:`장래소멸`,articles:[`119`,`120`,`124`]}]}]},{title:`관련`,items:[{title:`실시보고`,articles:[`125`]},{title:`집행권원`,articles:[`125의2`]}]}]},{id:`trial`,number:6,title:`심판제도`,groups:[{title:`심판절차 일반`,groups:[{title:`주체`,items:[{title:`심판원`,articles:[`132의16`,`143`,`144`,`145`,`146`,`147`,`148`,`149`,`150`,`151`,`152`,`153`,`153의2`]},{title:`심판의 당사자`,articles:[`139`]},{title:`심판의 참가인`,articles:[`155`,`156`]},{title:`국선대리인·전문심리위원·참고인`,articles:[`139의2`,`154의2`,`154의3`]}]},{title:`청구`,items:[{title:`심판의 청구`,articles:[`140`,`140의2`]},{title:`심판청구서의 보정`,articles:[`140②`,`140의2②`]},{title:`중복심판청구금지`,articles:[`154⑧`,`민사소송법 259`]}]},{title:`진행`,items:[{title:`방식심리`,articles:[`141`]},{title:`적법성 심리`,articles:[`142`]},{title:`본안심리`,articles:[`154`,`157`,`158`,`159`,`160`]}]},{title:`종료`,items:[{title:`심판청구의 취하`,articles:[`161`]},{title:`심결`,articles:[`162`,`163`]}]},{title:`관련`,items:[{title:`타절차와의 관계`,articles:[`164`]},{title:`조정위원회 회부`,articles:[`164의2`]},{title:`심판비용`,articles:[`165`,`166`]}]}]},{title:`심판의 종류`,groups:[{title:`결정계 심판`,items:[{title:`거절결정불복심판`,articles:[`132의17`,`170`,`171`,`172`,`176`]},{title:`정정심판`,articles:[`136`]}]},{title:`당사자계 심판`,items:[{title:`무효심판`,articles:[`133`,`134`,`137`]},{title:`권리범위확인심판`,articles:[`135`]},{title:`통상실시권허락심판`,articles:[`138`]}]},{title:`기타`,items:[{title:`특허취소신청`,articles:[`132의2`,`132의3`,`132의4`,`132의5`,`132의6`,`132의7`,`132의8`,`132의9`,`132의10`,`132의11`,`132의12`,`132의13`,`132의14`,`132의15`]},{title:`재심`,articles:[`178`,`179`,`180`,`181`,`182`,`183`,`184`,`185`]}]}]}]},{id:`litigation`,number:7,title:`소송`,groups:[{title:`심결취소소송`,articles:[`186`,`187`,`188`,`189`]},{title:`보상금·대가에 대한 소송`,articles:[`190`,`191`]},{title:`변리사 보수`,articles:[`191의2`]},{title:`소송 일반`,groups:[{title:`소송요건`,items:[{title:`소송물`,articles:[]},{title:`소의 이익`,articles:[]},{title:`관할`,articles:[]},{title:`당사자`,articles:[]},{title:`제소기간`,articles:[`186`,`187`]}]},{title:`소송제기`,items:[{title:`소장 제출`,articles:[]},{title:`심판원장에게 통지`,articles:[`188`]},{title:`소장의 심사`,articles:[]}]},{title:`소송심리`,items:[{title:`소송요건의 심리`,articles:[]},{title:`본안심리`,articles:[]},{title:`기술심리관의 관여`,articles:[`188의2`]},{title:`변론주의 원칙`,articles:[],note:`직권주의 가미`},{title:`위법판단의 기준시점`,articles:[]},{title:`심리범위`,articles:[]},{title:`주장증명책임`,articles:[]},{title:`자백`,articles:[]}]},{title:`소송종료`,items:[{title:`당사자에 의한 종결`,articles:[]},{title:`종국판결에 의한 종결`,articles:[`189`]}]}]}]},{id:`pct`,number:8,title:`PCT`,items:[{title:`특허출원절차`,articles:[`192`,`193`,`194`,`195`,`196`,`197`,`198`]},{title:`국제조사 및 국제예비심사`,articles:[`198의2`]},{title:`국제특허출원에 관한 특례`,articles:[`199`,`200`,`201`,`202`,`203`,`204`,`205`,`206`,`207`,`208`,`209`,`210`,`211`,`212`,`213`,`214`]}]}]},Bn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=Bn()}))();function Vn(){return(0,j.jsxs)(`main`,{className:`app`,children:[(0,j.jsx)(`h1`,{children:`특허법 체계도`}),(0,j.jsx)(`div`,{className:`category-grid`,children:zn.categories.map(e=>(0,j.jsxs)(On,{to:`/category/${e.id}`,className:`category-card`,children:[(0,j.jsx)(`span`,{className:`category-number`,children:e.number}),(0,j.jsx)(`span`,{className:`category-title`,children:e.title})]},e.id))})]})}function Hn({title:e,children:t}){let[n,r]=(0,_.useState)(!1);return(0,j.jsxs)(`div`,{className:`accordion`,children:[(0,j.jsxs)(`button`,{className:`accordion-button`,onClick:()=>r(!n),children:[(0,j.jsx)(`span`,{children:e}),(0,j.jsx)(`span`,{children:n?`−`:`+`})]}),n&&(0,j.jsx)(`div`,{className:`accordion-content`,children:t})]})}function Un(e){let t=e.split(`의`);return t.length===1?`제${e}조`:`제${t[0]}조의${t[1]}`}function Wn(e){let t=e.trim();return/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/.test(t)?`paragraph-level`:/^\d+\.\s*/.test(t)?`item-level`:/^[가나다라마바사아자차카타파하]\.\s*/.test(t)?`subitem-level`:`normal-level`}function Gn({articleNumber:e,title:t,content:n}){let r=n.split(/\n\s*\n/).filter(e=>e.trim()!==``);return(0,j.jsxs)(`div`,{className:`article-view`,children:[(0,j.jsxs)(`div`,{className:`article-heading`,children:[Un(e),` (`,t,`)`]}),(0,j.jsx)(`div`,{className:`article-content`,children:r.map((e,t)=>{let n=Wn(e);return(0,j.jsx)(`p`,{className:`article-paragraph ${n}`,children:e},t)})})]})}var Kn={1:{title:`목적`,content:`이 법은 발명을 보호ㆍ장려하고 그 이용을 도모함으로써 기술의 발전을 촉진하여 산업발전에 이바지함을 목적으로 한다.`},2:{title:`정의`,content:`이 법에서 사용하는 용어의 뜻은 다음과 같다.

1. “발명”이란 자연법칙을 이용한 기술적 사상의 창작으로서 고도(高度)한 것을 말한다.

2. “특허발명”이란 특허를 받은 발명을 말한다.

3. “실시”란 다음 각 목의 구분에 따른 행위를 말한다.

가. 물건의 발명인 경우: 그 물건을 생산ㆍ사용ㆍ양도ㆍ대여ㆍ수출 또는 수입하거나 그 물건의 양도 또는 대여의 청약(양도 또는 대여를 위한 전시를 포함한다. 이하 같다)을 하는 행위

나. 방법의 발명인 경우: 그 방법을 사용하는 행위 또는 그 방법의 사용을 청약하는 행위

다. 물건을 생산하는 방법의 발명인 경우: 나목의 행위 외에 그 방법에 의하여 생산한 물건을 사용ㆍ양도ㆍ대여ㆍ 수출 또는 수입하거나 그 물건의 양도 또는 대여의 청약을 하는 행위`},3:{title:`미성년자 등의 행위능력`,content:`① 미성년자ㆍ피한정후견인 또는 피성년후견인은 법정대리인에 의하지 아니하면 특허 에 관한 출원ㆍ청구, 그 밖의 절차(이하 “특허에 관한 절차”라 한다)를 밟을 수 없다. 다만, 미성년자와 피한정후견인 이 독립하여 법률행위를 할 수 있는 경우에는 그러하지 아니하다.

② 제1항의 법정대리인은 후견감독인의 동의 없이 제132조의2에 따른 특허취소신청(이하 “특허취소신청”이라 한다 )이나 상대방이 청구한 심판 또는 재심에 대한 절차를 밟을 수 있다.`},4:{title:`법인이 아닌 사단 등`,content:`법인이 아닌 사단 또는 재단으로서 대표자나 관리인이 정하여져 있는 경우에는 그 사단 또 는 재단의 이름으로 출원심사의 청구인, 특허취소신청인, 심판의 청구인ㆍ피청구인 또는 재심의 청구인ㆍ피청구인 이 될 수 있다.`},5:{title:`재외자의 특허관리인`,content:`① 국내에 주소 또는 영업소가 없는 자(이하 “재외자”라 한다)는 재외자(법인의 경우에는 그 대표자)가 국내에 체류하는 경우를 제외하고는 그 재외자의 특허에 관한 대리인으로서 국내에 주소 또는 영업소 가 있는 자(이하 “특허관리인”이라 한다)에 의해서만 특허에 관한 절차를 밟거나 이 법 또는 이 법에 따른 명령에 따 라 행정청이 한 처분에 대하여 소(訴)를 제기할 수 있다.

② 특허관리인은 위임된 권한의 범위에서 특허에 관한 모든 절차 및 이 법 또는 이 법에 따른 명령에 따라 행정청이 한 처분에 관한 소송에서 본인을 대리한다.`},6:{title:`대리권의 범위`,content:`국내에 주소 또는 영업소가 있는 자로부터 특허에 관한 절차를 밟을 것을 위임받은 대리인은 특 별히 권한을 위임받아야만 다음 각 호의 어느 하나에 해당하는 행위를 할 수 있다. 특허관리인의 경우에도 또한 같다 .

1. 특허출원의 변경ㆍ포기ㆍ취하

2. 특허권의 포기

3. 특허권 존속기간의 연장등록출원의 취하

4. 신청의 취하

5. 청구의 취하

6. 제55조제1항에 따른 우선권 주장 또는 그 취하

7. 제132조의17에 따른 심판청구

8. 복대리인의 선임`},7:{title:`대리권의 증명`,content:`특허에 관한 절차를 밟는 자의 대리인(특허관리인을 포함한다. 이하 같다)의 대리권은 서면으로 써 증명하여야 한다.`},"7의2":{title:`행위능력 등의 흠에 대한 추인`,content:`행위능력 또는 법정대리권이 없거나 특허에 관한 절차를 밟는 데 필요한 권한 의 위임에 흠이 있는 자가 밟은 절차는 보정(補正)된 당사자나 법정대리인이 추인하면 행위를 한 때로 소급하여 그 효력이 발생한다.`},8:{title:`대리권의 불소멸`,content:`특허에 관한 절차를 밟는 자의 위임을 받은 대리인의 대리권은 다음 각 호의 어느 하나에 해당 하는 사유가 있어도 소멸하지 아니한다.

1. 본인의 사망이나 행위능력의 상실

2. 본인인 법인의 합병에 의한 소멸

3. 본인인 수탁자(受託者)의 신탁임무 종료

4. 법정대리인의 사망이나 행위능력의 상실

5. 법정대리인의 대리권 소멸이나 변경`},9:{title:`개별대리`,content:`특허에 관한 절차를 밟는 자의 대리인이 2인 이상이면 지식재산처장 또는 특허심판원장에 대하여 각 각의 대리인이 본인을 대리한다.`},10:{title:`대리인의 선임 또는 교체 명령 등`,content:`① 지식재산처장 또는 제145조제1항에 따라 지정된 심판장(이하 “심판장”이 라 한다)은 특허에 관한 절차를 밟는 자가 그 절차를 원활히 수행할 수 없거나 구술심리(口述審理)에서 진술할 능력 이 없다고 인정되는 등 그 절차를 밟는 데 적당하지 아니하다고 인정되면 대리인을 선임하여 그 절차를 밟을 것을 명할 수 있다.

② 지식재산처장 또는 심판장은 특허에 관한 절차를 밟는 자의 대리인이 그 절차를 원활히 수행할 수 없거나 구술 심리에서 진술할 능력이 없다고 인정되는 등 그 절차를 밟는 데 적당하지 아니하다고 인정되면 그 대리인을 바꿀 것을 명할 수 있다.

③ 지식재산처장 또는 심판장은 제1항 및 제2항의 경우에 변리사로 하여금 대리하게 할 것을 명할 수 있다.<개정 2025. 10. 1.>

④ 지식재산처장 또는 심판장은 제1항 또는 제2항에 따라 대리인의 선임 또는 교체 명령을 한 경우에는 제1항에 따 른 특허에 관한 절차를 밟는 자 또는 제2항에 따른 대리인이 그 전에 지식재산처장 또는 특허심판원장에 대하여 한 특허에 관한 절차의 전부 또는 일부를 무효로 할 수 있다.`},11:{title:`복수당사자의 대표`,content:`① 2인 이상이 특허에 관한 절차를 밟을 때에는 다음 각 호의 어느 하나에 해당하는 사항을 제외하고는 각자가 모두를 대표한다. 다만, 대표자를 선정하여 지식재산처장 또는 특허심판원장에게 신고하면 그 대 표자만이 모두를 대표할 수 있다.

1. 특허출원의 변경ㆍ포기ㆍ취하

2. 특허권 존속기간의 연장등록출원의 취하

3. 신청의 취하

4. 청구의 취하

5. 제55조제1항에 따른 우선권 주장 또는 그 취하

6. 제132조의17에 따른 심판청구

② 제1항 단서에 따라 대표자를 선정하여 신고하는 경우에는 대표자로 선임된 사실을 서면으로 증명하여야 한다.`},12:{title:`「민사소송법」의 준용`,content:`대리인에 관하여는 이 법에 특별한 규정이 있는 경우를 제외하고는 「민사소송법」 제1편 제2장제4절을 준용한다.`},13:{title:`재외자의 재판관할`,content:`재외자의 특허권 또는 특허에 관한 권리에 관하여 특허관리인이 있으면 그 특허관리인의 주소 또는 영업소를, 특허관리인이 없으면 지식재산처 소재지를 「민사소송법」 제11조에 따른 재산이 있는 곳으로 본다.`},14:{title:`기간의 계산`,content:`이 법 또는 이 법에 따른 명령에서 정한 기간의 계산은 다음 각 호에 따른다.

1. 기간의 첫날은 계산에 넣지 아니한다. 다만, 그 기간이 오전 0시부터 시작하는 경우에는 계산에 넣는다.

2. 기간을 월 또는 연(年)으로 정한 경우에는 역(曆)에 따라 계산한다.

3. 월 또는 연의 처음부터 기간을 기산(起算)하지 아니하는 경우에는 마지막의 월 또는 연에서 그 기산일에 해당하 는 날의 전날로 기간이 만료한다. 다만, 월 또는 연으로 정한 경우에 마지막 월에 해당하는 날이 없으면 그 월의 마지막 날로 기간이 만료한다.

4. 특허에 관한 절차에서 기간의 마지막 날이 공휴일(「노동절 제정에 관한 법률」에 따른 노동절 및 토요일을 포함한 다)에 해당하면 기간은 그 다음 날로 만료한다.`},15:{title:`기간의 연장 등`,content:`① 지식재산처장은 청구에 따라 또는 직권으로 제132조의17에 따른 심판의 청구기간을 30일 이내에서 한 차례만 연장할 수 있다. 다만, 도서ㆍ벽지 등 교통이 불편한 지역에 있는 자의 경우에는 총리령으로 정 하는 바에 따라 그 횟수 및 기간을 추가로 연장할 수 있다.

② 지식재산처장ㆍ특허심판원장ㆍ심판장 또는 제57조제1항에 따른 심사관(이하 “심사관”이라 한다)은 이 법에 따 라 특허에 관한 절차를 밟을 기간을 정한 경우에는 청구에 따라 그 기간을 단축 또는 연장하거나 직권으로 그 기간 을 연장할 수 있다. 이 경우 지식재산처장 등은 그 절차의 이해관계인의 이익이 부당하게 침해되지 아니하도록 단축 또는 연장 여부를 결정하여야 한다.

③ 심판장은 이 법에 따라 특허에 관한 절차를 밟을 기일을 정한 경우에는 청구에 따라 또는 직권으로 그 기일을 변 경할 수 있다.`},16:{title:`절차의 무효`,content:`① 지식재산처장 또는 특허심판원장은 제46조에 따른 보정명령을 받은 자가 지정된 기간에 그 보 정을 하지 아니하면 특허에 관한 절차를 무효로 할 수 있다. 다만, 제82조제2항에 따른 심사청구료를 내지 아니하여 보정명령을 받은 자가 지정된 기간에 그 심사청구료를 내지 아니하면 특허출원서에 첨부한 명세서에 관한 보정을 무효로 할 수 있다.

② 지식재산처장 또는 특허심판원장은 제1항에 따라 특허에 관한 절차가 무효로 된 경우로서 지정된 기간을 지키지 못한 것이 정당한 사유에 의한 것으로 인정될 때에는 그 사유가 소멸한 날부터 2개월 이내에 보정명령을 받은 자의 청구에 따라 그 무효처분을 취소할 수 있다. 다만, 지정된 기간의 만료일부터 1년이 지났을 때에는 그러하지 아니하

다.

③ 지식재산처장 또는 특허심판원장은 제1항 본문ㆍ단서에 따른 무효처분 또는 제2항 본문에 따른 무효처분의 취 소처분을 할 때에는 그 보정명령을 받은 자에게 처분통지서를 송달하여야 한다.`},17:{title:`절차의 추후보완`,content:`특허에 관한 절차를 밟은 자가 책임질 수 없는 사유로 다음 각 호의 어느 하나에 해당하는 기 간을 지키지 못한 경우에는 그 사유가 소멸한 날부터 2개월 이내에 지키지 못한 절차를 추후 보완할 수 있다. 다만, 그 기간의 만료일부터 1년이 지났을 때에는 그러하지 아니하다.

1. 제132조의17에 따른 심판의 청구기간

2. 제180조제1항에 따른 재심의 청구기간`},18:{title:`절차의 효력 승계`,content:`특허권 또는 특허에 관한 권리에 관하여 밟은 절차의 효력은 그 특허권 또는 특허에 관한 권 리의 승계인에게 미친다.`},19:{title:`절차의 속행`,content:`지식재산처장 또는 심판장은 특허에 관한 절차가 지식재산처 또는 특허심판원에 계속(係屬) 중일 때 특허권 또는 특허에 관한 권리가 이전되면 그 특허권 또는 특허에 관한 권리의 승계인에 대하여 그 절차를 속행 (續行)하게 할 수 있다.`},20:{title:`절차의 중단`,content:`특허에 관한 절차가 다음 각 호의 어느 하나에 해당하는 경우에는 지식재산처 또는 특허심판원에 계속 중인 절차는 중단된다. 다만, 절차를 밟을 것을 위임받은 대리인이 있는 경우에는 그러하지 아니하다. <개정 2025. 10. 1.>

1. 당사자가 사망한 경우

2. 당사자인 법인이 합병에 따라 소멸한 경우

3. 당사자가 절차를 밟을 능력을 상실한 경우

4. 당사자의 법정대리인이 사망하거나 그 대리권을 상실한 경우

5. 당사자의 신탁에 의한 수탁자의 임무가 끝난 경우

6. 제11조제1항 각 호 외의 부분 단서에 따른 대표자가 사망하거나 그 자격을 상실한 경우

7. 파산관재인 등 일정한 자격에 따라 자기 이름으로 남을 위하여 당사자가 된 자가 그 자격을 잃거나 사망한 경우`},21:{title:`중단된 절차의 수계`,content:`제20조에 따라 지식재산처 또는 특허심판원에 계속 중인 절차가 중단된 경우에는 다음 각 호의 구분에 따른 자가 그 절차를 수계(受繼)하여야 한다.

1. 제20조제1호의 경우: 사망한 당사자의 상속인ㆍ상속재산관리인 또는 법률에 따라 절차를 속행할

자. 다만, 상속 인은 상속을 포기할 수 있을 때까지 그 절차를 수계하지 못한다.

2. 제20조제2호의 경우: 합병에 따라 설립되거나 합병 후 존속하는 법인

3. 제20조제3호 및 제4호의 경우: 절차를 밟을 능력을 회복한 당사자 또는 법정대리인이 된 자

4. 제20조제5호의 경우: 새로운 수탁자

5. 제20조제6호의 경우: 새로운 대표자 또는 각 당사자

6. 제20조제7호의 경우: 같은 자격을 가진 자`},22:{title:`수계신청`,content:`① 제20조에 따라 중단된 절차에 관한 수계신청은 제21조 각 호의 어느 하나에 해당하는 자가 할 수 있다. 이 경우 그 상대방은 지식재산처장 또는 제143조에 따른 심판관(이하 “심판관”이라 한다)에게 제21조 각 호의 어느 하나에 해당하는 자에 대하여 수계신청할 것을 명하도록 요청할 수 있다.

② 지식재산처장 또는 심판장은 제20조에 따라 중단된 절차에 관한 수계신청이 있으면 그 사실을 상대방에게 알려 야 한다.

③ 지식재산처장 또는 심판관은 제20조에 따라 중단된 절차에 관한 수계신청에 대하여 직권으로 조사하여 이유 없 다고 인정하면 결정으로 기각하여야 한다.

④ 지식재산처장 또는 심판관은 결정 또는 심결의 등본을 송달한 후에 중단된 절차에 관한 수계신청에 대해서는 수 계하게 할 것인지를 결정하여야 한다.

⑤ 지식재산처장 또는 심판관은 제21조 각 호의 어느 하나에 해당하는 자가 중단된 절차를 수계하지 아니하면 직권 으로 기간을 정하여 수계를 명하여야 한다.

⑥ 제5항에 따른 기간에 수계가 없는 경우에는 그 기간이 끝나는 날의 다음 날에 수계가 있는 것으로 본다.

⑦ 지식재산처장 또는 심판장은 제6항에 따라 수계가 있는 것으로 본 경우에는 그 사실을 당사자에게 알려야 한다.`},23:{title:`절차의 중지`,content:`① 지식재산처장 또는 심판관이 천재지변이나 그 밖의 불가피한 사유로 그 직무를 수행할 수 없을 때에는 지식재산처 또는 특허심판원에 계속 중인 절차는 그 사유가 없어질 때까지 중지된다.

② 당사자에게 일정하지 아니한 기간 동안 지식재산처 또는 특허심판원에 계속 중인 절차를 속행할 수 없는 장애사 유가 생긴 경우에는 지식재산처장 또는 심판관은 결정으로 장애사유가 해소될 때까지 그 절차의 중지를 명할 수 있

다.

③ 지식재산처장 또는 심판관은 제2항에 따른 결정을 취소할 수 있다.

④ 제1항 또는 제2항에 따른 중지나 제3항에 따른 취소를 하였을 때에는 지식재산처장 또는 심판장은 그 사실을 각 각 당사자에게 알려야 한다.`},24:{title:`중단 또는 중지의 효과`,content:`특허에 관한 절차가 중단되거나 중지된 경우에는 그 기간의 진행은 정지되고, 그 절차 의 수계통지를 하거나 그 절차를 속행하였을 때부터 다시 모든 기간이 진행된다.`},25:{title:`외국인의 권리능력`,content:`재외자 중 외국인은 다음 각 호의 어느 하나에 해당하는 경우를 제외하고는 특허권 또는 특 허에 관한 권리를 누릴 수 없다.

1. 그 외국인이 속하는 국가에서 대한민국 국민에 대하여 그 국가의 국민과 같은 조건으로 특허권 또는 특허에 관한 권리를 인정하는 경우

2. 대한민국이 그 외국인에 대하여 특허권 또는 특허에 관한 권리를 인정하는 경우에는 그 외국인이 속하는 국가에 서 대한민국 국민에 대하여 그 국가의 국민과 같은 조건으로 특허권 또는 특허에 관한 권리를 인정하는 경우

3. 조약 또는 이에 준하는 것(이하 “조약”이라 한다)에 따라 특허권 또는 특허에 관한 권리가 인정되는 경우`},26:{title:`삭제`,content:`삭제 <2011.

12. 2.>`},27:{title:`삭제`,content:`삭제 <2001.

2. 3.>`},28:{title:`서류제출의 효력발생시기`,content:`① 이 법 또는 이 법에 따른 명령에 따라 지식재산처장 또는 특허심판원장에게 제출 하는 출원서, 청구서, 그 밖의 서류(물건을 포함한다. 이하 이 조에서 같다)는 지식재산처장 또는 특허심판원장에게 도달한 날부터 제출의 효력이 발생한다.

② 제1항의 출원서, 청구서, 그 밖의 서류를 우편으로 지식재산처장 또는 특허심판원장에게 제출하는 경우에는 다 음 각 호의 구분에 따른 날에 지식재산처장 또는 특허심판원장에게 도달한 것으로 본다. 다만, 특허권 및 특허에 관 한 권리의 등록신청서류와 「특허협력조약」 제2조(vii)에 따른 국제출원(이하 “국제출원”이라 한다)에 관한 서류를 우편으로 제출하는 경우에는 그 서류가 지식재산처장 또는 특허심판원장에게 도달한 날부터 효력이 발생한다.<개 정 2014.

6. 11., 2025.

10. 1.>

1. 우편물의 통신일부인(通信日附印)에 표시된 날이 분명한 경우: 표시된 날

2. 우편물의 통신일부인에 표시된 날이 분명하지 아니한 경우: 우체국에 제출한 날을 우편물 수령증에 의하여 증명 한 날

③ 삭제<1998.

9. 23.>

④ 제1항 및 제2항에서 규정한 사항 외에 우편물의 지연, 우편물의 망실(亡失) 및 우편업무의 중단으로 인한 서류제 출에 필요한 사항은 총리령으로 정한다.`},"28의2":{title:`고유번호의 기재`,content:`① 특허에 관한 절차를 밟는 자 중 총리령으로 정하는 자는 지식재산처장 또는 특허심판 원장에게 자신의 고유번호의 부여를 신청하여야 한다.

② 지식재산처장 또는 특허심판원장은 제1항에 따른 신청을 받으면 신청인에게 고유번호를 부여하고, 그 사실을 알 려야 한다.

③ 지식재산처장 또는 특허심판원장은 특허에 관한 절차를 밟는 자가 제1항에 따라 고유번호를 신청하지 아니하면 그에게 직권으로 고유번호를 부여하고, 그 사실을 알려야 한다.

④ 제2항 또는 제3항에 따라 고유번호를 부여받은 자가 특허에 관한 절차를 밟는 경우에는 총리령으로 정하는 서류 에 자신의 고유번호를 적어야 한다. 이 경우 이 법 또는 이 법에 따른 명령에도 불구하고 그 서류에 주소(법인인 경 우에는 영업소의 소재지를 말한다)를 적지 아니할 수 있다.

⑤ 특허에 관한 절차를 밟는 자의 대리인에 관하여는 제1항부터 제4항까지의 규정을 준용한다.

⑥ 고유번호의 부여 신청, 고유번호의 부여 및 통지, 그 밖에 고유번호에 관하여 필요한 사항은 총리령으로 정한다.`},"28의3":{title:`전자문서에 의한 특허에 관한 절차의 수행`,content:`① 특허에 관한 절차를 밟는 자는 이 법에 따라 지식재산처장 또 는 특허심판원장에게 제출하는 특허출원서, 그 밖의 서류를 총리령으로 정하는 방식에 따라 전자문서화하고, 이를 정보통신망을 이용하여 제출하거나 이동식 저장장치 등 전자적 기록매체에 수록하여 제출할 수 있다. <개정 2025. 10. 1.>

② 제1항에 따라 제출된 전자문서는 이 법에 따라 제출된 서류와 같은 효력을 가진다.

③ 제1항에 따라 정보통신망을 이용하여 제출된 전자문서는 그 문서의 제출인이 정보통신망을 통하여 접수번호를 확인할 수 있는 때에 지식재산처 또는 특허심판원에서 사용하는 접수용 전산정보처리조직의 파일에 기록된 내용으 로 접수된 것으로 본다.

④ 제1항에 따라 전자문서로 제출할 수 있는 서류의 종류ㆍ제출방법, 그 밖에 전자문서에 의한 서류의 제출에 필요 한 사항은 총리령으로 정한다.`},"28의4":{title:`전자문서 이용신고 및 전자서명`,content:`① 전자문서로 특허에 관한 절차를 밟으려는 자는 미리 지식재산처장 또는 특허심판원장에게 전자문서 이용신고를 하여야 하며, 지식재산처장 또는 특허심판원장에게 제출하는 전자문서에 제 출인을 알아볼 수 있도록 전자서명을 하여야 한다.

② 제28조의3에 따라 제출된 전자문서는 제1항에 따른 전자서명을 한 자가 제출한 것으로 본다.

③ 제1항에 따른 전자문서 이용신고 절차, 전자서명 방법 등에 관하여 필요한 사항은 총리령으로 정한다.<개정 2025. 10. 1.>`},"28의5":{title:`정보통신망을 이용한 통지 등의 수행`,content:`① 지식재산처장ㆍ특허심판원장ㆍ심판장ㆍ심판관 또는 심사관은 제 28조의4제1항에 따라 전자문서 이용신고를 한 자에게 서류의 통지 및 송달(이하 “통지등”이라 한다)을 하려는 경우 에는 정보통신망을 이용하여 통지등을 할 수 있다.

② 제1항에 따라 정보통신망을 이용하여 한 서류의 통지등은 서면으로 한 것과 같은 효력을 가진다.

③ 제1항에 따른 서류의 통지등은 그 통지등을 받을 자가 자신이 사용하는 전산정보처리조직을 통하여 그 서류를 확인한 때에 지식재산처 또는 특허심판원에서 사용하는 발송용 전산정보처리조직의 파일에 기록된 내용으로 도달 한 것으로 본다.

④ 제1항에 따라 정보통신망을 이용하여 하는 통지등의 종류ㆍ방법 등에 관하여 필요한 사항은 총리령으로 정한다.`},29:{title:`특허요건`,content:`① 산업상 이용할 수 있는 발명으로서 다음 각 호의 어느 하나에 해당하는 것을 제외하고는 그 발명 에 대하여 특허를 받을 수 있다.

1. 특허출원 전에 국내 또는 국외에서 공지(公知)되었거나 공연(公然)히 실시된 발명

2. 특허출원 전에 국내 또는 국외에서 반포된 간행물에 게재되었거나 전기통신회선을 통하여 공중(公衆)이 이용할 수 있는 발명

② 특허출원 전에 그 발명이 속하는 기술분야에서 통상의 지식을 가진 사람이 제1항 각 호의 어느 하나에 해당하는 발명에 의하여 쉽게 발명할 수 있으면 그 발명에 대해서는 제1항에도 불구하고 특허를 받을 수 없다.

③ 특허출원한 발명이 다음 각 호의 요건을 모두 갖춘 다른 특허출원의 출원서에 최초로 첨부된 명세서 또는 도면 에 기재된 발명과 동일한 경우에 그 발명은 제1항에도 불구하고 특허를 받을 수 없다. 다만, 그 특허출원의 발명자 와 다른 특허출원의 발명자가 같거나 그 특허출원을 출원한 때의 출원인과 다른 특허출원의 출원인이 같은 경우에 는 그러하지 아니하다.

1. 그 특허출원일 전에 출원된 특허출원일 것

2. 그 특허출원 후 제64조에 따라 출원공개되거나 제87조제3항에 따라 등록공고된 특허출원일 것

④ 특허출원한 발명이 다음 각 호의 요건을 모두 갖춘 실용신안등록출원의 출원서에 최초로 첨부된 명세서 또는 도 면에 기재된 고안(考案)과 동일한 경우에 그 발명은 제1항에도 불구하고 특허를 받을 수 없다. 다만, 그 특허출원의 발명자와 실용신안등록출원의 고안자가 같거나 그 특허출원을 출원한 때의 출원인과 실용신안등록출원의 출원인 이 같은 경우에는 그러하지 아니하다.

1. 그 특허출원일 전에 출원된 실용신안등록출원일 것

2. 그 특허출원 후 「실용신안법」 제15조에 따라 준용되는 이 법 제64조에 따라 출원공개되거나 「실용신안법」 제 21조제3항에 따라 등록공고된 실용신안등록출원일 것

⑤ 제3항을 적용할 때 다른 특허출원이 제199조제2항에 따른 국제특허출원(제214조제4항에 따라 특허출원으로 보 는 국제출원을 포함한다)인 경우 제3항 본문 중 “출원서에 최초로 첨부된 명세서 또는 도면”은 “국제출원일까지 제 출한 발명의 설명, 청구범위 또는 도면”으로, 같은 항 제2호 중 “출원공개”는 “출원공개 또는 「특허협력조약」 제 21조에 따라 국제공개”로 본다.

⑥ 제4항을 적용할 때 실용신안등록출원이 「실용신안법」 제34조제2항에 따른 국제실용신안등록출원(같은 법 제 40조제4항에 따라 실용신안등록출원으로 보는 국제출원을 포함한다)인 경우 제4항 본문 중 “출원서에 최초로 첨부 된 명세서 또는 도면”은 “국제출원일까지 제출한 고안의 설명, 청구범위 또는 도면”으로, 같은 항 제2호 중 “출원공 개”는 “출원공개 또는 「특허협력조약」 제21조에 따라 국제공개”로 본다.

⑦ 제3항 또는 제4항을 적용할 때 제201조제4항에 따라 취하한 것으로 보는 국제특허출원 또는 「실용신안법」 제 35조제4항에 따라 취하한 것으로 보는 국제실용신안등록출원은 다른 특허출원 또는 실용신안등록출원으로 보지 아니한다.`},30:{title:`공지 등이 되지 아니한 발명으로 보는 경우`,content:`① 특허를 받을 수 있는 권리를 가진 자의 발명이 다음 각 호의 어 느 하나에 해당하게 된 경우 그 날부터 12개월 이내에 특허출원을 하면 그 특허출원된 발명에 대하여 제29조제1항 또는 제2항을 적용할 때에는 그 발명은 같은 조 제1항 각 호의 어느 하나에 해당하지 아니한 것으로 본다.

1. 특허를 받을 수 있는 권리를 가진 자에 의하여 그 발명이 제29조제1항 각 호의 어느 하나에 해당하게 된 경우. 다 만, 조약 또는 법률에 따라 국내 또는 국외에서 출원공개되거나 등록공고된 경우는 제외한다.

2. 특허를 받을 수 있는 권리를 가진 자의 의사에 반하여 그 발명이 제29조제1항 각 호의 어느 하나에 해당하게 된 경우

② 제1항제1호를 적용받으려는 자는 특허출원서에 그 취지를 적어 출원하여야 하고, 이를 증명할 수 있는 서류를 총리령으로 정하는 방법에 따라 특허출원일부터 30일 이내에 지식재산처장에게 제출하여야 한다.<개정 2025. 10. 1.>

③ 제2항에도 불구하고 총리령으로 정하는 보완수수료를 납부한 경우에는 다음 각 호의 어느 하나에 해당하는 기간 에 제1항제1호를 적용받으려는 취지를 적은 서류 또는 이를 증명할 수 있는 서류를 제출할 수 있다.<신설 2015. 1. 28., 2025. 10. 1.>

1. 제47조제1항에 따라 보정할 수 있는 기간

2. 제66조에 따른 특허결정 또는 제176조제1항에 따른 특허거절결정 취소심결(특허등록을 결정한 심결에 한정하되, 재심심결을 포함한다)의 등본을 송달받은 날부터 3개월 이내의 기간. 다만, 제79조에 따른 설정등록을 받으려는 날이 3개월보다 짧은 경우에는 그 날까지의 기간`},31:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},32:{title:`특허를 받을 수 없는 발명`,content:`공공의 질서 또는 선량한 풍속에 어긋나거나 공중의 위생을 해칠 우려가 있는 발명 에 대해서는 제29조제1항에도 불구하고 특허를 받을 수 없다.`},33:{title:`특허를 받을 수 있는 자`,content:`① 발명을 한 사람 또는 그 승계인은 이 법에서 정하는 바에 따라 특허를 받을 수 있는 권리를 가진다. 다만, 지식재산처 직원 및 특허심판원 직원은 상속이나 유증(遺贈)의 경우를 제외하고는 재직 중 특 허를 받을 수 없다.

② 2명 이상이 공동으로 발명한 경우에는 특허를 받을 수 있는 권리를 공유한다.`},34:{title:`무권리자의 특허출원과 정당한 권리자의 보호`,content:`발명자가 아닌 자로서 특허를 받을 수 있는 권리의 승계인이 아 닌 자(이하 “무권리자”라 한다)가 한 특허출원이 제33조제1항 본문에 따른 특허를 받을 수 있는 권리를 가지지 아니 한 사유로 제62조제2호에 해당하여 특허를 받지 못하게 된 경우에는 그 무권리자의 특허출원 후에 한 정당한 권리 자의 특허출원은 무권리자가 특허출원한 때에 특허출원한 것으로 본다. 다만, 무권리자가 특허를 받지 못하게 된 날 부터 30일이 지난 후에 정당한 권리자가 특허출원을 한 경우에는 그러하지 아니하다.`},35:{title:`무권리자의 특허와 정당한 권리자의 보호`,content:`제33조제1항 본문에 따른 특허를 받을 수 있는 권리를 가지지 아니 한 사유로 제133조제1항제2호에 해당하여 특허를 무효로 한다는 심결이 확정된 경우에는 그 무권리자의 특허출원 후에 한 정당한 권리자의 특허출원은 무효로 된 그 특허의 출원 시에 특허출원한 것으로 본다. 다만, 심결이 확정된 날부터 30일이 지난 후에 정당한 권리자가 특허출원을 한 경우에는 그러하지 아니하다.`},36:{title:`선출원`,content:`① 동일한 발명에 대하여 다른 날에 둘 이상의 특허출원이 있는 경우에는 먼저 특허출원한 자만이 그 발명에 대하여 특허를 받을 수 있다.

② 동일한 발명에 대하여 같은 날에 둘 이상의 특허출원이 있는 경우에는 특허출원인 간에 협의하여 정한 하나의 특허출원인만이 그 발명에 대하여 특허를 받을 수 있다. 다만, 협의가 성립하지 아니하거나 협의를 할 수 없는 경우 에는 어느 특허출원인도 그 발명에 대하여 특허를 받을 수 없다.

③ 특허출원된 발명과 실용신안등록출원된 고안이 동일한 경우 그 특허출원과 실용신안등록출원이 다른 날에 출원 된 것이면 제1항을 준용하고, 그 특허출원과 실용신안등록출원이 같은 날에 출원된 것이면 제2항을 준용한다.

④ 특허출원 또는 실용신안등록출원이 다음 각 호의 어느 하나에 해당하는 경우 그 특허출원 또는 실용신안등록출 원은 제1항부터 제3항까지의 규정을 적용할 때에는 처음부터 없었던 것으로 본다. 다만, 제2항 단서(제3항에 따라 준용되는 경우를 포함한다)에 해당하여 그 특허출원 또는 실용신안등록출원에 대하여 거절결정이나 거절한다는 취 지의 심결이 확정된 경우에는 그러하지 아니하다.

1. 포기, 무효 또는 취하된 경우

2. 거절결정이나 거절한다는 취지의 심결이 확정된 경우

⑤ 발명자 또는 고안자가 아닌 자로서 특허를 받을 수 있는 권리 또는 실용신안등록을 받을 수 있는 권리의 승계인 이 아닌 자가 한 특허출원 또는 실용신안등록출원은 제1항부터 제3항까지의 규정을 적용할 때에는 처음부터 없었 던 것으로 본다.

⑥ 지식재산처장은 제2항의 경우에 특허출원인에게 기간을 정하여 협의의 결과를 신고할 것을 명하고, 그 기간에 신고가 없으면 제2항에 따른 협의는 성립되지 아니한 것으로 본다.`},37:{title:`특허를 받을 수 있는 권리의 이전 등`,content:`① 특허를 받을 수 있는 권리는 이전할 수 있다.

② 특허를 받을 수 있는 권리는 질권의 목적으로 할 수 없다.

③ 특허를 받을 수 있는 권리가 공유인 경우에는 각 공유자는 다른 공유자 모두의 동의를 받아야만 그 지분을 양도 할 수 있다.`},38:{title:`특허를 받을 수 있는 권리의 승계`,content:`① 특허출원 전에 이루어진 특허를 받을 수 있는 권리의 승계는 그 승계인이 특허출원을 하여야 제3자에게 대항할 수 있다.

② 동일한 자로부터 동일한 특허를 받을 수 있는 권리를 승계한 자가 둘 이상인 경우 그 승계한 권리에 대하여 같은 날에 둘 이상의 특허출원이 있으면 특허출원인 간에 협의하여 정한 자에게만 승계의 효력이 발생한다.

③ 동일한 자로부터 동일한 발명 및 고안에 대한 특허를 받을 수 있는 권리 및 실용신안등록을 받을 수 있는 권리를 승계한 자가 둘 이상인 경우 그 승계한 권리에 대하여 같은 날에 특허출원 및 실용신안등록출원이 있으면 특허출원 인 및 실용신안등록출원인 간에 협의하여 정한 자에게만 승계의 효력이 발생한다.

④ 특허출원 후에는 특허를 받을 수 있는 권리의 승계는 상속, 그 밖의 일반승계의 경우를 제외하고는 특허출원인변 경신고를 하여야만 그 효력이 발생한다.

⑤ 특허를 받을 수 있는 권리의 상속, 그 밖의 일반승계가 있는 경우에는 승계인은 지체 없이 그 취지를 지식재산처 장에게 신고하여야 한다.

⑥ 동일한 자로부터 동일한 특허를 받을 수 있는 권리를 승계한 자가 둘 이상인 경우 그 승계한 권리에 대하여 같은 날에 둘 이상의 특허출원인변경신고가 있으면 신고를 한 자 간에 협의하여 정한 자에게만 신고의 효력이 발생한다.

⑦ 제2항ㆍ제3항 또는 제6항의 경우에는 제36조제6항을 준용한다.`},39:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},40:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},41:{title:`국방상 필요한 발명 등`,content:`① 정부는 국방상 필요한 경우 외국에 특허출원하는 것을 금지하거나 발명자ㆍ출원인 및 대리인에게 그 특허출원의 발명을 비밀로 취급하도록 명할 수 있다. 다만, 정부의 허가를 받은 경우에는 외국에 특허출원을 할 수 있다.

② 정부는 특허출원된 발명이 국방상 필요한 경우에는 특허를 하지 아니할 수 있으며, 전시ㆍ사변 또는 이에 준하는 비상시에 국방상 필요한 경우에는 특허를 받을 수 있는 권리를 수용할 수 있다.

③ 제1항에 따른 외국에의 특허출원 금지 또는 비밀취급에 따른 손실에 대해서는 정부는 정당한 보상금을 지급하여 야 한다.

④ 제2항에 따라 특허하지 아니하거나 수용한 경우에는 정부는 정당한 보상금을 지급하여야 한다.

⑤ 제1항에 따른 외국에의 특허출원 금지 또는 비밀취급명령을 위반한 경우에는 그 발명에 대하여 특허를 받을 수 있는 권리를 포기한 것으로 본다.

⑥ 제1항에 따른 외국에의 특허출원 금지 또는 비밀취급명령을 위반한 경우에는 외국에의 특허출원 금지 또는 비밀 취급에 따른 손실보상금의 청구권을 포기한 것으로 본다.

⑦ 제1항에 따른 외국에의 특허출원 금지 및 비밀취급의 절차, 제2항부터 제4항까지의 규정에 따른 수용, 보상금 지 급의 절차, 그 밖에 필요한 사항은 대통령령으로 정한다.`},42:{title:`특허출원`,content:`① 특허를 받으려는 자는 다음 각 호의 사항을 적은 특허출원서를 지식재산처장에게 제출하여야 한

다.

1. 특허출원인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 특허출원인의 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법 인(유한)인 경우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

3. 발명의 명칭

4. 발명자의 성명 및 주소

② 제1항에 따른 특허출원서에는 발명의 설명ㆍ청구범위를 적은 명세서와 필요한 도면 및 요약서를 첨부하여야 한

다.

③ 제2항에 따른 발명의 설명은 다음 각 호의 요건을 모두 충족하여야 한다.

1. 그 발명이 속하는 기술분야에서 통상의 지식을 가진 사람이 그 발명을 쉽게 실시할 수 있도록 명확하고 상세하게 적을 것

2. 그 발명의 배경이 되는 기술을 적을 것

④ 제2항에 따른 청구범위에는 보호받으려는 사항을 적은 항(이하 “청구항”이라 한다)이 하나 이상 있어야 하며, 그 청구항은 다음 각 호의 요건을 모두 충족하여야 한다.

1. 발명의 설명에 의하여 뒷받침될 것

2. 발명이 명확하고 간결하게 적혀 있을 것

⑤ 삭제<2014.

6. 11.>

⑥ 제2항에 따른 청구범위에는 보호받으려는 사항을 명확히 할 수 있도록 발명을 특정하는 데 필요하다고 인정되는 구조ㆍ방법ㆍ기능ㆍ물질 또는 이들의 결합관계 등을 적어야 한다.

⑦ 삭제<2014.

6. 11.>

⑧ 제2항에 따른 청구범위의 기재방법에 관하여 필요한 사항은 대통령령으로 정한다.

⑨ 제2항에 따른 발명의 설명, 도면 및 요약서의 기재방법 등에 관하여 필요한 사항은 총리령으로 정한다.<개정 2014. 6. 11., 2025. 10. 1.>`},"42의2":{title:`특허출원일 등`,content:`① 특허출원일은 명세서 및 필요한 도면을 첨부한 특허출원서가 지식재산처장에게 도달한 날로 한다. 이 경우 명세서에 청구범위는 적지 아니할 수 있으나, 발명의 설명은 적어야 한다.

② 특허출원인은 제1항 후단에 따라 특허출원서에 최초로 첨부한 명세서에 청구범위를 적지 아니한 경우에는 제 64조제1항 각 호의 구분에 따른 날부터 1년 2개월이 되는 날까지 명세서에 청구범위를 적는 보정을 하여야 한다. 다만, 본문에 따른 기한 이전에 제60조제3항에 따른 출원심사 청구의 취지를 통지받은 경우에는 그 통지를 받은 날 부터 3개월이 되는 날 또는 제64조제1항 각 호의 구분에 따른 날부터 1년 2개월이 되는 날 중 빠른 날까지 보정을 하여야 한다.

③ 특허출원인이 제2항에 따른 보정을 하지 아니한 경우에는 제2항에 따른 기한이 되는 날의 다음 날에 해당 특허 출원을 취하한 것으로 본다.`},"42의3":{title:`외국어특허출원 등`,content:`① 특허출원인이 명세서 및 도면(도면 중 설명부분에 한정한다. 이하 제2항 및 제5항에 서 같다)을 국어가 아닌 총리령으로 정하는 언어로 적겠다는 취지를 특허출원을 할 때 특허출원서에 적은 경우에는 그 언어로 적을 수 있다.

② 특허출원인이 특허출원서에 최초로 첨부한 명세서 및 도면을 제1항에 따른 언어로 적은 특허출원(이하 “외국어 특허출원”이라 한다)을 한 경우에는 제64조제1항 각 호의 구분에 따른 날부터 1년 2개월이 되는 날까지 그 명세서 및 도면의 국어번역문을 총리령으로 정하는 방법에 따라 제출하여야 한다. 다만, 본문에 따른 기한 이전에 제60조제 3항에 따른 출원심사 청구의 취지를 통지받은 경우에는 그 통지를 받은 날부터 3개월이 되는 날 또는 제64조제1항 각 호의 구분에 따른 날부터 1년 2개월이 되는 날 중 빠른 날까지 제출하여야 한다.

③ 제2항에 따라 국어번역문을 제출한 특허출원인은 제2항에 따른 기한 이전에 그 국어번역문을 갈음하여 새로운 국어번역문을 제출할 수 있다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.

1. 명세서 또는 도면을 보정(제5항에 따라 보정한 것으로 보는 경우는 제외한다)한 경우

2. 특허출원인이 출원심사의 청구를 한 경우

④ 특허출원인이 제2항에 따른 명세서의 국어번역문을 제출하지 아니한 경우에는 제2항에 따른 기한이 되는 날의 다음 날에 해당 특허출원을 취하한 것으로 본다.

⑤ 특허출원인이 제2항에 따른 국어번역문 또는 제3항 본문에 따른 새로운 국어번역문을 제출한 경우에는 외국어 특허출원의 특허출원서에 최초로 첨부한 명세서 및 도면을 그 국어번역문에 따라 보정한 것으로 본다. 다만, 제3항 본문에 따라 새로운 국어번역문을 제출한 경우에는 마지막 국어번역문(이하 이 조 및 제47조제2항 후단에서 “최종 국어번역문”이라 한다) 전에 제출한 국어번역문에 따라 보정한 것으로 보는 모든 보정은 처음부터 없었던 것으로 본다.

⑥ 특허출원인은 제47조제1항에 따라 보정을 할 수 있는 기간에 최종 국어번역문의 잘못된 번역을 총리령으로 정 하는 방법에 따라 정정할 수 있다. 이 경우 정정된 국어번역문에 관하여는 제5항을 적용하지 아니한다.<개정 2025. 10. 1.>

⑦ 제6항 전단에 따라 제47조제1항제1호 또는 제2호에 따른 기간에 정정을 하는 경우에는 마지막 정정 전에 한 모 든 정정은 처음부터 없었던 것으로 본다.`},43:{title:`요약서`,content:`제42조제2항에 따른 요약서는 기술정보로서의 용도로 사용하여야 하며, 특허발명의 보호범위를 정하는 데에는 사용할 수 없다.`},44:{title:`공동출원`,content:`특허를 받을 수 있는 권리가 공유인 경우에는 공유자 모두가 공동으로 특허출원을 하여야 한다.`},45:{title:`하나의 특허출원의 범위`,content:`① 특허출원은 하나의 발명마다 하나의 특허출원으로 한다. 다만, 하나의 총괄적 발명 의 개념을 형성하는 일 군(群)의 발명에 대하여 하나의 특허출원으로 할 수 있다.

② 제1항 단서에 따라 일 군의 발명에 대하여 하나의 특허출원으로 할 수 있는 요건은 대통령령으로 정한다.`},46:{title:`절차의 보정`,content:`지식재산처장 또는 특허심판원장은 특허에 관한 절차가 다음 각 호의 어느 하나에 해당하는 경우 에는 기간을 정하여 보정을 명하여야 한다. 이 경우 보정명령을 받은 자는 그 기간에 그 보정명령에 대한 의견서를 지식재산처장 또는 특허심판원장에게 제출할 수 있다.

1. 제3조제1항 또는 제6조를 위반한 경우

2. 이 법 또는 이 법에 따른 명령으로 정하는 방식을 위반한 경우

3. 제82조에 따라 내야 할 수수료를 내지 아니한 경우`},47:{title:`특허출원의 보정`,content:`① 특허출원인은 제66조에 따른 특허결정의 등본을 송달하기 전까지 특허출원서에 첨부한 명 세서 또는 도면을 보정할 수 있다. 다만, 제63조제1항에 따른 거절이유통지(이하 “거절이유통지”라 한다)를 받은 후 에는 다음 각 호의 구분에 따른 기간(제3호의 경우에는 그 때)에만 보정할 수 있다.

1. 거절이유통지(거절이유통지에 대한 보정에 따라 발생한 거절이유에 대한 거절이유통지는 제외한다)를 최초로 받 거나 제2호의 거절이유통지가 아닌 거절이유통지를 받은 경우: 해당 거절이유통지에 따른 의견서 제출기간

2. 거절이유통지(제66조의3제2항에 따른 통지를 한 경우에는 그 통지 전의 거절이유통지는 제외한다)에 대한 보정 에 따라 발생한 거절이유에 대하여 거절이유통지를 받은 경우: 해당 거절이유통지에 따른 의견서 제출기간

3. 제67조의2에 따른 재심사를 청구하는 경우: 청구할 때

② 제1항에 따른 명세서 또는 도면의 보정은 특허출원서에 최초로 첨부한 명세서 또는 도면에 기재된 사항의 범위 에서 하여야 한다. 이 경우, 외국어특허출원에 대한 보정은 최종 국어번역문(제42조의3제6항 전단에 따른 정정이 있는 경우에는 정정된 국어번역문을 말한다) 또는 특허출원서에 최초로 첨부한 도면(도면 중 설명부분은 제외한다 )에 기재된 사항의 범위에서도 하여야 한다.

③ 제1항제2호 및 제3호에 따른 보정 중 청구범위에 대한 보정은 다음 각 호의 어느 하나에 해당하는 경우에만 할 수 있다.

1. 청구항을 한정 또는 삭제하거나 청구항에 부가하여 청구범위를 감축하는 경우

2. 잘못 기재된 사항을 정정하는 경우

3. 분명하지 아니하게 기재된 사항을 명확하게 하는 경우

4. 제2항에 따른 범위를 벗어난 보정에 대하여 그 보정 전 청구범위로 되돌아가거나 되돌아가면서 청구범위를 제 1호부터 제3호까지의 규정에 따라 보정하는 경우

④ 제1항제1호 또는 제2호에 따른 기간에 보정을 하는 경우에는 각각의 보정절차에서 마지막 보정 전에 한 모든 보 정은 취하된 것으로 본다.

⑤ 외국어특허출원인 경우에는 제1항 본문에도 불구하고 제42조의3제2항에 따라 국어번역문을 제출한 경우에만 명세서 또는 도면을 보정할 수 있다.`},48:{title:`삭제`,content:`삭제 <2001.

2. 3.>`},49:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},50:{title:`삭제`,content:`삭제 <1997.

4. 10.>`},51:{title:`보정각하`,content:`① 심사관은 제47조제1항제2호 및 제3호에 따른 보정이 같은 조 제2항 또는 제3항을 위반하거나 그 보정(같은 조 제3항제1호 및 제4호에 따른 보정 중 청구항을 삭제하는 보정은 제외한다)에 따라 새로운 거절이유가 발생한 것으로 인정하면 결정으로 그 보정을 각하하여야 한다. 다만, 다음 각 호의 어느 하나에 해당하는 보정인 경 우에는 그러하지 아니하다.

1. 제66조의2에 따른 직권보정을 하는 경우: 그 직권보정 전에 한 보정

2. 제66조의3에 따른 직권 재심사를 하는 경우: 취소된 특허결정 전에 한 보정

3. 제67조의2에 따른 재심사의 청구가 있는 경우: 그 청구 전에 한 보정

② 제1항에 따른 각하결정은 서면으로 하여야 하며, 그 이유를 붙여야 한다.

③ 제1항에 따른 각하결정에 대해서는 불복할 수 없다. 다만, 제132조의17에 따른 특허거절결정에 대한 심판에서 그 각하결정(제66조의3에 따른 직권 재심사를 하는 경우 취소된 특허결정 전에 한 각하결정과 제67조의2에 따른 재심사의 청구가 있는 경우 그 청구 전에 한 각하결정은 제외한다)에 대하여 다투는 경우에는 그러하지 아니하다.`},52:{title:`분할출원`,content:`① 특허출원인은 둘 이상의 발명을 하나의 특허출원으로 한 경우에는 그 특허출원의 출원서에 최초 로 첨부된 명세서 또는 도면에 기재된 사항의 범위에서 다음 각 호의 어느 하나에 해당하는 기간에 그 일부를 하나 이상의 특허출원으로 분할할 수 있다. 다만, 그 특허출원이 외국어특허출원인 경우에는 그 특허출원에 대한 제42조 의3제2항에 따른 국어번역문이 제출된 경우에만 분할할 수 있다.

1. 제47조제1항에 따라 보정을 할 수 있는 기간

2. 특허거절결정등본을 송달받은 날부터 3개월(제15조제1항에 따라 제132조의17에 따른 기간이 연장된 경우 그 연 장된 기간을 말한다) 이내의 기간

3. 제66조에 따른 특허결정 또는 제176조제1항에 따른 특허거절결정 취소심결(특허등록을 결정한 심결에 한정하되, 재심심결을 포함한다)의 등본을 송달받은 날부터 3개월 이내의 기간. 다만, 제79조에 따른 설정등록을 받으려는 날이 3개월보다 짧은 경우에는 그 날까지의 기간

② 제1항에 따라 분할된 특허출원(이하 “분할출원”이라 한다)이 있는 경우 그 분할출원은 특허출원한 때에 출원한 것으로 본다. 다만, 그 분할출원에 대하여 다음 각 호의 규정을 적용할 경우에는 해당 분할출원을 한 때에 출원한 것 으로 본다.

1. 분할출원이 제29조제3항에 따른 다른 특허출원 또는 「실용신안법」 제4조제4항에 따른 특허출원에 해당하여 이 법 제29조제3항 또는 「실용신안법」 제4조제4항을 적용하는 경우

2. 제30조제2항을 적용하는 경우

3. 제54조제3항을 적용하는 경우

4. 제55조제2항을 적용하는 경우

③ 제1항에 따라 분할출원을 하려는 자는 분할출원을 할 때에 특허출원서에 그 취지 및 분할의 기초가 된 특허출원 의 표시를 하여야 한다.

④ 분할의 기초가 된 특허출원이 제54조 또는 제55조에 따라 우선권을 주장한 특허출원인 경우에는 제1항에 따라 분할출원을 한 때에 그 분할출원에 대해서도 우선권 주장을 한 것으로 보며, 분할의 기초가 된 특허출원에 대하여 제54조제4항에 따라 제출된 서류 또는 서면이 있는 경우에는 분할출원에 대해서도 해당 서류 또는 서면이 제출된 것으로 본다.

⑤ 제4항에 따라 우선권을 주장한 것으로 보는 분할출원에 관하여는 제54조제7항 또는 제55조제7항에 따른 기한이 지난 후에도 분할출원을 한 날부터 30일 이내에 그 우선권 주장의 전부 또는 일부를 취하할 수 있다.<신설 2021. 10. 19.>

⑥ 분할출원의 경우에 제54조에 따른 우선권을 주장하는 자는 같은 조 제4항에 따른 서류를 같은 조 제5항에 따른 기간이 지난 후에도 분할출원을 한 날부터 3개월 이내에 지식재산처장에게 제출할 수 있다.<개정 2021. 10. 19., 2025. 10. 1.>

⑦ 분할출원이 외국어특허출원인 경우에는 특허출원인은 제42조의3제2항에 따른 국어번역문 또는 같은 조 제3항 본문에 따른 새로운 국어번역문을 같은 조 제2항에 따른 기한이 지난 후에도 분할출원을 한 날부터 30일이 되는 날 까지는 제출할 수 있다. 다만, 제42조의3제3항 각 호의 어느 하나에 해당하는 경우에는 새로운 국어번역문을 제출 할 수 없다.

⑧ 특허출원서에 최초로 첨부한 명세서에 청구범위를 적지 아니한 분할출원에 관하여는 제42조의2제2항에 따른 기 한이 지난 후에도 분할출원을 한 날부터 30일이 되는 날까지는 명세서에 청구범위를 적는 보정을 할 수 있다.<개정 2021. 10. 19.>`},"52의2":{title:`분리출원`,content:`① 특허거절결정을 받은 자는 제132조의17에 따른 심판청구가 기각된 경우 그 심결의 등본을 송 달받은 날부터 30일(제186조제5항에 따라 심판장이 부가기간을 정한 경우에는 그 기간을 말한다) 이내에 그 특허출 원의 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 사항의 범위에서 그 특허출원의 일부를 새로운 특허출원 으로 분리할 수 있다. 이 경우 새로운 특허출원의 청구범위에는 다음 각 호의 어느 하나에 해당하는 청구항만을 적을 수 있다.

1. 그 심판청구의 대상이 되는 특허거절결정에서 거절되지 아니한 청구항

2. 거절된 청구항에서 그 특허거절결정의 기초가 된 선택적 기재사항을 삭제한 청구항

3. 제1호 또는 제2호에 따른 청구항을 제47조제3항 각 호(같은 항 제4호는 제외한다)의 어느 하나에 해당하도록 적 은 청구항

4. 제1호부터 제3호까지 중 어느 하나의 청구항에서 그 특허출원의 출원서에 최초로 첨부된 명세서 또는 도면에 기 재된 사항의 범위를 벗어난 부분을 삭제한 청구항

② 제1항에 따라 분리된 특허출원(이하 “분리출원”이라 한다)에 관하여는 제52조제2항부터 제5항까지의 규정을 준 용한다. 이 경우 “분할”은 “분리”로, “분할출원”은 “분리출원”으로 본다.

③ 분리출원을 하는 경우에는 제42조의2제1항 후단 또는 제42조의3제1항에도 불구하고 특허출원서에 최초로 첨부 한 명세서에 청구범위를 적지 아니하거나 명세서 및 도면(도면 중 설명부분에 한정한다)을 국어가 아닌 언어로 적 을 수 없다.

④ 분리출원은 새로운 분리출원, 분할출원 또는 「실용신안법」 제10조에 따른 변경출원의 기초가 될 수 없다.`},53:{title:`변경출원`,content:`① 실용신안등록출원인은 그 실용신안등록출원의 출원서에 최초로 첨부된 명세서 또는 도면에 기재 된 사항의 범위에서 그 실용신안등록출원을 특허출원으로 변경할 수 있다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.

1. 그 실용신안등록출원에 관하여 최초의 거절결정등본을 송달받은 날부터 3개월(「실용신안법」 제3조에 따라 준용 되는 이 법 제15조제1항에 따라 제132조의17에 따른 기간이 연장된 경우에는 그 연장된 기간을 말한다)이 지난 경우

2. 그 실용신안등록출원이 「실용신안법」 제8조의3제2항에 따른 외국어실용신안등록출원인 경우로서 변경하여 출 원할 때 같은 항에 따른 국어번역문이 제출되지 아니한 경우

② 제1항에 따라 변경된 특허출원(이하 “변경출원”이라 한다)이 있는 경우에 그 변경출원은 실용신안등록출원을 한 때에 특허출원한 것으로 본다. 다만, 그 변경출원이 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하

다.

1. 제29조제3항에 따른 다른 특허출원 또는 「실용신안법」 제4조제4항에 따른 특허출원에 해당하여 이 법 제29조제 3항 또는 「실용신안법」 제4조제4항을 적용하는 경우

2. 제30조제2항을 적용하는 경우

3. 제54조제3항을 적용하는 경우

4. 제55조제2항을 적용하는 경우

③ 제1항에 따라 변경출원을 하려는 자는 변경출원을 할 때 특허출원서에 그 취지 및 변경출원의 기초가 된 실용신 안등록출원의 표시를 하여야 한다.

④ 변경출원이 있는 경우에는 그 실용신안등록출원은 취하된 것으로 본다.

⑤ 삭제<2014.

6. 11.>

⑥ 변경출원의 경우에 제54조에 따른 우선권을 주장하는 자는 같은 조 제4항에 따른 서류를 같은 조 제5항에 따른 기간이 지난 후에도 변경출원을 한 날부터 3개월 이내에 지식재산처장에게 제출할 수 있다.<개정 2013. 3. 22., 2025. 10. 1.>

⑦ 특허출원인은 변경출원이 외국어특허출원인 경우에는 제42조의3제2항에 따른 국어번역문 또는 같은 조 제3항 본문에 따른 새로운 국어번역문을 같은 조 제2항에 따른 기한이 지난 후에도 변경출원을 한 날부터 30일이 되는 날 까지는 제출할 수 있다. 다만, 제42조의3제3항 각 호의 어느 하나에 해당하는 경우에는 새로운 국어번역문을 제출 할 수 없다.

⑧ 특허출원인은 특허출원서에 최초로 첨부한 명세서에 청구범위를 적지 아니한 변경출원의 경우 제42조의2제2항 에 따른 기한이 지난 후에도 변경출원을 한 날부터 30일이 되는 날까지 명세서에 청구범위를 적는 보정을 할 수 있 다.`},54:{title:`조약에 의한 우선권 주장`,content:`① 조약에 따라 다음 각 호의 어느 하나에 해당하는 경우에는 제29조 및 제36조를 적 용할 때에 그 당사국에 출원한 날을 대한민국에 특허출원한 날로 본다.

1. 대한민국 국민에게 특허출원에 대한 우선권을 인정하는 당사국의 국민이 그 당사국 또는 다른 당사국에 특허출 원한 후 동일한 발명을 대한민국에 특허출원하여 우선권을 주장하는 경우

2. 대한민국 국민에게 특허출원에 대한 우선권을 인정하는 당사국에 대한민국 국민이 특허출원한 후 동일한 발명을 대한민국에 특허출원하여 우선권을 주장하는 경우

② 제1항에 따라 우선권을 주장하려는 자는 우선권 주장의 기초가 되는 최초의 출원일부터 1년 이내에 특허출원을 하지 아니하면 우선권을 주장할 수 없다.

③ 제1항에 따라 우선권을 주장하려는 자는 특허출원을 할 때 특허출원서에 그 취지, 최초로 출원한 국가명 및 출원 의 연월일을 적어야 한다.

④ 제3항에 따라 우선권을 주장한 자는 제1호의 서류 또는 제2호의 서면을 지식재산처장에게 제출하여야 한다. 다 만, 제2호의 서면은 총리령으로 정하는 국가의 경우만 해당한다.

1. 최초로 출원한 국가의 정부가 인증하는 서류로서 특허출원의 연월일을 적은 서면, 발명의 명세서 및 도면의 등본

2. 최초로 출원한 국가의 특허출원의 출원번호 및 그 밖에 출원을 확인할 수 있는 정보 등 총리령으로 정하는 사항 을 적은 서면

⑤ 제4항에 따른 서류 또는 서면은 다음 각 호에 해당하는 날 중 최우선일(最優先日)부터 1년 4개월 이내에 제출하 여야 한다.

1. 조약 당사국에 최초로 출원한 출원일

2. 그 특허출원이 제55조제1항에 따른 우선권 주장을 수반하는 경우에는 그 우선권 주장의 기초가 되는 출원의 출 원일

3. 그 특허출원이 제3항에 따른 다른 우선권 주장을 수반하는 경우에는 그 우선권 주장의 기초가 되는 출원의 출원 일

⑥ 제3항에 따라 우선권을 주장한 자가 제5항의 기간에 제4항에 따른 서류를 제출하지 아니한 경우에는 그 우선권 주장은 효력을 상실한다.

⑦ 제1항에 따라 우선권 주장을 한 자 중 제2항의 요건을 갖춘 자는 제5항에 따른 최우선일부터 1년 4개월 이내에 해당 우선권 주장을 보정하거나 추가할 수 있다.`},55:{title:`특허출원 등을 기초로 한 우선권 주장`,content:`① 특허를 받으려는 자는 자신이 특허나 실용신안등록을 받을 수 있는 권리를 가진 특허출원 또는 실용신안등록출원으로 먼저 한 출원(이하 “선출원”이라 한다)의 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 발명을 기초로 그 특허출원한 발명에 관하여 우선권을 주장할 수 있다. 다만, 다음 각 호 의 어느 하나에 해당하는 경우에는 그러하지 아니하다.

1. 그 특허출원이 선출원의 출원일부터 1년이 지난 후에 출원된 경우

2. 선출원이 제52조제2항(「실용신안법」 제11조에 따라 준용되는 경우를 포함한다)에 따른 분할출원 또는 제52조의 2제2항(「실용신안법」 제11조에 따라 준용되는 경우를 포함한다)에 따른 분리출원이거나 제53조제2항 또는 「실 용신안법」 제10조제2항에 따른 변경출원인 경우

3. 그 특허출원을 할 때에 선출원이 포기ㆍ무효 또는 취하된 경우

4. 그 특허출원을 할 때에 선출원이 설정등록되었거나 특허거절결정, 실용신안등록거절결정 또는 거절한다는 취지 의 심결이 확정된 경우

② 제1항에 따른 우선권을 주장하려는 자는 특허출원을 할 때 특허출원서에 그 취지와 선출원의 표시를 하여야 한

다.

③ 제1항에 따른 우선권 주장을 수반하는 특허출원된 발명 중 해당 우선권 주장의 기초가 된 선출원의 출원서에 최 초로 첨부된 명세서 또는 도면에 기재된 발명과 같은 발명에 관하여 제29조제1항ㆍ제2항, 같은 조 제3항 본문, 같은 조 제4항 본문, 제30조제1항, 제36조제1항부터 제3항까지, 제96조제1항제3호, 제98조, 제103조, 제105조제1항ㆍ제 2항, 제129조 및 제136조제5항(제132조의3제3항 또는 제133조의2제4항에 따라 준용되는 경우를 포함한다), 「실용 신안법」 제7조제3항ㆍ제4항 및 제25조, 「디자인보호법」 제95조 및 제103조제3항을 적용할 때에는 그 특허출원은 그 선출원을 한 때에 특허출원한 것으로 본다.

④ 제1항에 따른 우선권 주장을 수반하는 특허출원의 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 발명 중 해당 우선권 주장의 기초가 된 선출원의 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 발명과 같은 발명은 그 특허출원이 출원공개되거나 특허가 등록공고되었을 때에 해당 우선권 주장의 기초가 된 선출원에 관하여 출원 공개가 된 것으로 보고 제29조제3항 본문, 같은 조 제4항 본문 또는 「실용신안법」 제4조제3항 본문ㆍ제4항 본문을 적용한다.

⑤ 선출원이 다음 각 호의 어느 하나에 해당하면 그 선출원의 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 발명 중 그 선출원에 관하여 우선권 주장의 기초가 된 출원의 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 발명에 대해서는 제3항과 제4항을 적용하지 아니한다.

1. 선출원이 제1항에 따른 우선권 주장을 수반하는 출원인 경우

2. 선출원이 「공업소유권의 보호를 위한 파리 협약」 제4조D(1)에 따른 우선권 주장을 수반하는 출원인 경우

⑥ 제4항을 적용할 때 선출원이 다음 각 호의 어느 하나에 해당하더라도 제29조제7항을 적용하지 아니한다.

1. 선출원이 제201조제4항에 따라 취하한 것으로 보는 국제특허출원인 경우

2. 선출원이 「실용신안법」 제35조제4항에 따라 취하한 것으로 보는 국제실용신안등록출원인 경우

⑦ 제1항에 따른 요건을 갖추어 우선권 주장을 한 자는 선출원일(선출원이 둘 이상인 경우에는 최선출원일을 말한 다)부터 1년 4개월 이내에 그 우선권 주장을 보정하거나 추가할 수 있다.

⑧ 제1항에 따른 우선권 주장의 기초가 된 선출원은 제79조에 따른 설정등록을 받을 수 없다. 다만, 해당 선출원을 기초로 한 우선권 주장이 취하된 경우에는 그러하지 아니하다.`},56:{title:`선출원의 취하 등`,content:`① 제55조제1항에 따른 우선권 주장의 기초가 된 선출원은 그 출원일부터 1년 3개월이 지난 때에 취하된 것으로 본다. 다만, 그 선출원이 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다. <개 정 2021.

10. 19.>

1. 포기, 무효 또는 취하된 경우

2. 설정등록되었거나 특허거절결정, 실용신안등록거절결정 또는 거절한다는 취지의 심결이 확정된 경우

3. 해당 선출원을 기초로 한 우선권 주장이 취하된 경우

② 제55조제1항에 따른 우선권 주장을 수반하는 특허출원의 출원인은 선출원의 출원일부터 1년 3개월이 지난 후에 는 그 우선권 주장을 취하할 수 없다.

③ 제55조제1항에 따른 우선권 주장을 수반하는 특허출원이 선출원의 출원일부터 1년 3개월 이내에 취하된 때에는 그 우선권 주장도 동시에 취하된 것으로 본다.`},57:{title:`심사관에 의한 심사`,content:`① 지식재산처장은 심사관에게 특허출원을 심사하게 한다.

② 심사관의 자격에 관하여 필요한 사항은 대통령령으로 정한다.`},58:{title:`전문기관의 등록 등`,content:`① 지식재산처장은 출원인이 특허출원할 때 필요하거나 특허출원을 심사(국제출원에 대한 국제조사 및 국제예비심사를 포함한다)할 때에 필요하다고 인정하면 제2항에 따른 전문기관에 미생물의 기탁ㆍ분양 , 선행기술의 조사, 특허분류의 부여, 그 밖에 대통령령으로 정하는 업무를 의뢰할 수 있다. <개정 2016. 12. 2., 2025. 10. 1.>

② 제1항에 따라 지식재산처장이 의뢰하는 업무를 수행하려는 자는 지식재산처장에게 전문기관의 등록을 하여야 한다.

③ 지식재산처장은 제1항의 업무를 효과적으로 수행하기 위하여 필요하다고 인정하는 경우에는 대통령령으로 정하 는 전담기관으로 하여금 전문기관 업무에 대한 관리 및 평가에 관한 업무를 대행하게 할 수 있다.<신설 2018. 4. 17., 2025. 10. 1.>

④ 지식재산처장은 특허출원의 심사에 필요하다고 인정하는 경우에는 관계 행정기관, 해당 기술분야의 전문기관 또 는 특허에 관한 지식과 경험이 풍부한 사람에게 협조를 요청하거나 의견을 들을 수 있다. 이 경우 지식재산처장은 예산의 범위에서 수당 또는 비용을 지급할 수 있다.

⑤ 제2항에 따른 전문기관의 등록기준, 선행기술의 조사 또는 특허분류의 부여 등의 의뢰에 필요한 사항은 대통령 령으로 정한다.`},"58의2":{title:`전문기관 등록의 취소 등`,content:`① 지식재산처장은 제58조제2항에 따른 전문기관이 제1호에 해당하는 경우에는 전문기관의 등록을 취소하여야 하며, 제2호 또는 제3호에 해당하는 경우에는 그 등록을 취소하거나 6개월 이내의 기 간을 정하여 업무의 전부 또는 일부의 정지를 명할 수 있다. <개정 2016. 2. 29., 2016. 12. 2., 2018. 4. 17., 2025. 10. 1.>

1. 거짓이나 그 밖의 부정한 방법으로 등록을 한 경우

2. 제58조제5항에 따른 등록기준에 맞지 아니하게 된 경우

3. 전문기관의 임직원이 특허출원 중인 발명(국제출원 중인 발명을 포함한다)에 관하여 직무상 알게 된 비밀을 누설 하거나 도용한 경우

② 지식재산처장은 제1항에 따라 전문기관의 등록을 취소하거나 업무정지를 명하려면 청문을 하여야 한다.<개정 2016. 12. 2., 2025. 10. 1.>

③ 제1항에 따른 처분의 세부 기준과 절차 등에 관하여 필요한 사항은 총리령으로 정한다.`},59:{title:`특허출원심사의 청구`,content:`① 특허출원에 대하여 심사청구가 있을 때에만 이를 심사한다.

② 누구든지 특허출원에 대하여 특허출원일부터 3년 이내에 지식재산처장에게 출원심사의 청구를 할 수 있다. 다만 , 특허출원인은 다음 각 호의 어느 하나에 해당하는 경우에는 출원심사의 청구를 할 수 없다.<개정 2016. 2. 29., 2025. 10. 1.>

1. 명세서에 청구범위를 적지 아니한 경우

2. 제42조의3제2항에 따른 국어번역문을 제출하지 아니한 경우(외국어특허출원의 경우로 한정한다)

③ 제34조 및 제35조에 따른 정당한 권리자의 특허출원, 분할출원, 분리출원 또는 변경출원에 관하여는 제2항에 따 른 기간이 지난 후에도 정당한 권리자가 특허출원을 한 날, 분할출원을 한 날, 분리출원을 한 날 또는 변경출원을 한 날부터 각각 30일 이내에 출원심사의 청구를 할 수 있다.

④ 출원심사의 청구는 취하할 수 없다.

⑤ 제2항 또는 제3항에 따라 출원심사의 청구를 할 수 있는 기간에 출원심사의 청구가 없으면 그 특허출원은 취하 한 것으로 본다.`},60:{title:`출원심사의 청구절차`,content:`① 출원심사의 청구를 하려는 자는 다음 각 호의 사항을 적은 출원심사청구서를 지식재 산처장에게 제출하여야 한다.

1. 청구인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 출원심사의 청구대상이 되는 특허출원의 표시

② 지식재산처장은 출원공개 전에 출원심사의 청구가 있으면 출원공개 시에, 출원공개 후에 출원심사의 청구가 있 으면 지체 없이 그 취지를 특허공보에 게재하여야 한다.

③ 지식재산처장은 특허출원인이 아닌 자로부터 출원심사의 청구가 있으면 그 취지를 특허출원인에게 알려야 한다.`},61:{title:`우선심사`,content:`지식재산처장은 다음 각 호의 어느 하나에 해당하는 특허출원에 대해서는 심사관에게 다른 특허출원 에 우선하여 심사하게 할 수 있다.

1. 제64조에 따른 출원공개 후 특허출원인이 아닌 자가 업(業)으로서 특허출원된 발명을 실시하고 있다고 인정되는 경우

2. 대통령령으로 정하는 특허출원으로서 긴급하게 처리할 필요가 있다고 인정되는 경우

3. 대통령령으로 정하는 특허출원으로서 재난의 예방ㆍ대응ㆍ복구 등에 필요하다고 인정되는 경우`},62:{title:`특허거절결정`,content:`심사관은 특허출원이 다음 각 호의 어느 하나의 거절이유(이하 “거절이유”라 한다)에 해당하는 경우에는 특허거절결정을 하여야 한다.

1. 제25조ㆍ제29조ㆍ제32조ㆍ제36조제1항부터 제3항까지 또는 제44조에 따라 특허를 받을 수 없는 경우

2. 제33조제1항 본문에 따른 특허를 받을 수 있는 권리를 가지지 아니하거나 같은 항 단서에 따라 특허를 받을 수 없는 경우

3. 조약을 위반한 경우

4. 제42조제3항ㆍ제4항ㆍ제8항 또는 제45조에 따른 요건을 갖추지 아니한 경우

5. 제47조제2항에 따른 범위를 벗어난 보정인 경우

6. 제52조제1항에 따른 범위를 벗어난 분할출원 또는 제52조의2제1항에 따른 범위를 벗어나는 분리출원인 경우

7. 제53조제1항에 따른 범위를 벗어난 변경출원인 경우`},63:{title:`거절이유통지`,content:`① 심사관은 다음 각 호의 어느 하나에 해당하는 경우 특허출원인에게 거절이유를 통지하고, 기 간을 정하여 의견서를 제출할 수 있는 기회를 주어야 한다. 다만, 제51조제1항에 따라 각하결정을 하려는 경우에는 그러하지 아니하다.

1. 제62조에 따라 특허거절결정을 하려는 경우

2. 제66조의3제1항에 따른 직권 재심사를 하여 취소된 특허결정 전에 이미 통지한 거절이유로 특허거절결정을 하 려는 경우

② 심사관은 청구범위에 둘 이상의 청구항이 있는 특허출원에 대하여 제1항 본문에 따라 거절이유를 통지할 때에는 그 통지서에 거절되는 청구항을 명확히 밝히고, 그 청구항에 관한 거절이유를 구체적으로 적어야 한다.`},"63의2":{title:`특허출원에 대한 정보제공`,content:`특허출원에 관하여 누구든지 그 특허출원이 거절이유에 해당하여 특허될 수 없 다는 취지의 정보를 증거와 함께 지식재산처장에게 제공할 수 있다. 다만, 제42조제3항제2호, 같은 조 제8항 및 제 45조에 따른 요건을 갖추지 아니한 경우에는 그러하지 아니하다.`},"63의3":{title:`외국의 심사결과 제출명령`,content:`심사관은 제54조에 따른 우선권 주장을 수반한 특허출원의 심사에 필요한 경우 에는 기간을 정하여 그 우선권 주장의 기초가 되는 출원을 한 국가의 심사결과에 대한 자료(그 심사결과가 없는 경 우에는 그 취지를 적은 의견서를 말한다)를 총리령으로 정하는 방법에 따라 제출할 것을 특허출원인에게 명할 수 있 다.`},64:{title:`출원공개`,content:`① 지식재산처장은 다음 각 호의 구분에 따른 날부터 1년 6개월이 지난 후 또는 그 전이라도 특허출 원인이 신청한 경우에는 총리령으로 정하는 바에 따라 그 특허출원에 관하여 특허공보에 게재하여 출원공개를 하여 야 한다.

1. 제54조제1항에 따른 우선권 주장을 수반하는 특허출원의 경우: 그 우선권 주장의 기초가 된 출원일

2. 제55조제1항에 따른 우선권 주장을 수반하는 특허출원의 경우: 선출원의 출원일

3. 제54조제1항 또는 제55조제1항에 따른 둘 이상의 우선권 주장을 수반하는 특허출원의 경우: 해당 우선권 주장의 기초가 된 출원일 중 최우선일

4. 제1호부터 제3호까지의 어느 하나에 해당하지 아니하는 특허출원의 경우: 그 특허출원일

② 제1항에도 불구하고 다음 각 호의 어느 하나에 해당하는 경우에는 출원공개를 하지 아니한다.

1. 명세서에 청구범위를 적지 아니한 경우

2. 제42조의3제2항에 따른 국어번역문을 제출하지 아니한 경우(외국어특허출원의 경우로 한정한다)

3. 제87조제3항에 따라 등록공고를 한 특허의 경우

③ 제41조제1항에 따라 비밀취급된 특허출원의 발명에 대해서는 그 발명의 비밀취급이 해제될 때까지 그 특허출원 의 출원공개를 보류하여야 하며, 그 발명의 비밀취급이 해제된 경우에는 지체 없이 제1항에 따라 출원공개를 하여 야 한다. 다만, 그 특허출원이 설정등록된 경우에는 출원공개를 하지 아니한다.

④ 제1항의 출원공개에 관하여 출원인의 성명ㆍ주소 및 출원번호 등 특허공보에 게재할 사항은 대통령령으로 정한 다.`},65:{title:`출원공개의 효과`,content:`① 특허출원인은 출원공개가 있은 후 그 특허출원된 발명을 업으로서 실시한 자에게 특허출 원된 발명임을 서면으로 경고할 수 있다.

② 특허출원인은 제1항에 따른 경고를 받거나 제64조에 따라 출원공개된 발명임을 알고 그 특허출원된 발명을 업 으로 실시한 자에게 그 경고를 받거나 출원공개된 발명임을 알았을 때부터 특허권의 설정등록을 할 때까지의 기간 동안 그 특허발명의 실시에 대하여 합리적으로 받을 수 있는 금액에 상당하는 보상금의 지급을 청구할 수 있다.<개 정 2019.

1. 8.>

③ 제2항에 따른 청구권은 그 특허출원된 발명에 대한 특허권이 설정등록된 후에만 행사할 수 있다.

④ 제2항에 따른 청구권의 행사는 특허권의 행사에 영향을 미치지 아니한다.

⑤ 제2항에 따른 청구권을 행사하는 경우에는 제127조ㆍ제129조ㆍ제132조 및 「민법」 제760조ㆍ제766조를 준용한

다. 이 경우 「민법」 제766조제1항 중 “피해자나 그 법정대리인이 그 손해 및 가해자를 안 날”은 “해당 특허권의 설 정등록일”로 본다.

⑥ 제64조에 따른 출원공개 후 다음 각 호의 어느 하나에 해당하는 경우에는 제2항에 따른 청구권은 처음부터 발생 하지 아니한 것으로 본다.

1. 특허출원이 포기ㆍ무효 또는 취하된 경우

2. 특허출원에 대하여 제62조에 따른 특허거절결정이 확정된 경우

3. 제132조의13제1항에 따른 특허취소결정이 확정된 경우

4. 제133조에 따른 특허를 무효로 한다는 심결(같은 조 제1항제4호에 따른 경우는 제외한다)이 확정된 경우`},66:{title:`특허결정`,content:`심사관은 특허출원에 대하여 거절이유를 발견할 수 없으면 특허결정을 하여야 한다.`},"66의2":{title:`직권보정 등`,content:`① 심사관은 제66조에 따른 특허결정을 할 때에 특허출원서에 첨부된 명세서, 도면 또는 요약 서에 적힌 사항이 명백히 잘못된 경우에는 직권으로 보정(이하 “직권보정”이라 한다)할 수 있다. 이 경우 직권보정은 제47조제2항에 따른 범위에서 하여야 한다.

② 제1항에 따라 심사관이 직권보정을 하려면 제67조제2항에 따른 특허결정의 등본 송달과 함께 그 직권보정 사항 을 특허출원인에게 알려야 한다.

③ 특허출원인은 직권보정 사항의 전부 또는 일부를 받아들일 수 없으면 제79조제1항에 따라 특허료를 낼 때까지 그 직권보정 사항에 대한 의견서를 지식재산처장에게 제출하여야 한다.

④ 특허출원인이 제3항에 따라 의견서를 제출한 경우 해당 직권보정 사항의 전부 또는 일부는 처음부터 없었던 것 으로 본다. 이 경우 그 특허결정도 함께 취소된 것으로 본다. 다만, 특허출원서에 첨부된 요약서에 관한 직권보정 사 항의 전부 또는 일부만 처음부터 없었던 것으로 보는 경우에는 그러하지 아니하다.

⑤ 삭제<2016.

2. 29.>

⑥ 직권보정이 제47조제2항에 따른 범위를 벗어나거나 명백히 잘못되지 아니한 사항을 직권보정한 경우 그 직권보 정은 처음부터 없었던 것으로 본다.`},"66의3":{title:`특허결정 이후 직권 재심사`,content:`① 심사관은 특허결정된 특허출원에 관하여 명백한 거절이유를 발견한 경우에 는 직권으로 특허결정을 취소하고, 그 특허출원을 다시 심사(이하 “직권 재심사”라 한다)할 수 있다. 다만, 다음 각 호 의 어느 하나에 해당하는 경우에는 그러하지 아니하다.

1. 거절이유가 제42조제3항제2호, 같은 조 제8항 및 제45조에 따른 요건에 관한 것인 경우

2. 그 특허결정에 따라 특허권이 설정등록된 경우

3. 그 특허출원이 취하되거나 포기된 경우

② 제1항에 따라 심사관이 직권 재심사를 하려면 특허결정을 취소한다는 사실을 특허출원인에게 통지하여야 한다.

③ 특허출원인이 제2항에 따른 통지를 받기 전에 그 특허출원이 제1항제2호 또는 제3호에 해당하게 된 경우에는 특 허결정의 취소는 처음부터 없었던 것으로 본다.`},67:{title:`특허여부결정의 방식`,content:`① 특허결정 및 특허거절결정(이하 “특허여부결정”이라 한다)은 서면으로 하여야 하며, 그 이유를 붙여야 한다.

② 지식재산처장은 특허여부결정이 있는 경우에는 그 결정의 등본을 특허출원인에게 송달하여야 한다.<개정 2025. 10. 1.>`},"67의2":{title:`재심사의 청구`,content:`① 특허출원인은 그 특허출원에 관하여 특허결정의 등본을 송달받은 날부터 제79조에 따른 설정등록을 받기 전까지의 기간 또는 특허거절결정등본을 송달받은 날부터 3개월(제15조제1항에 따라 제132조의 17에 따른 기간이 연장된 경우 그 연장된 기간을 말한다) 이내에 그 특허출원의 명세서 또는 도면을 보정하여 해당 특허출원에 관한 재심사(이하 “재심사”라 한다)를 청구할 수 있다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에 는 그러하지 아니하다.

1. 재심사를 청구할 때에 이미 재심사에 따른 특허여부의 결정이 있는 경우

2. 제132조의17에 따른 심판청구가 있는 경우(제176조제1항에 따라 특허거절결정이 취소된 경우는 제외한다)

3. 그 특허출원이 분리출원인 경우

② 특허출원인은 제1항에 따른 재심사의 청구와 함께 의견서를 제출할 수 있다.

③ 제1항에 따라 재심사가 청구된 경우 그 특허출원에 대하여 종전에 이루어진 특허결정 또는 특허거절결정은 취소 된 것으로 본다. 다만, 재심사의 청구절차가 제16조제1항에 따라 무효로 된 경우에는 그러하지 아니하다.<개정 2021. 10. 19.>

④ 제1항에 따른 재심사의 청구는 취하할 수 없다.`},"67의3":{title:`특허출원의 회복`,content:`① 특허출원인이 정당한 사유로 다음 각 호의 어느 하나에 해당하는 기간을 지키지 못하 여 특허출원이 취하되거나 특허거절결정이 확정된 것으로 인정되는 경우에는 그 사유가 소멸한 날부터 2개월 이내 에 출원심사의 청구 또는 재심사의 청구를 할 수 있다. 다만, 그 기간의 만료일부터 1년이 지난 때에는 그러하지 아 니하다.

1. 제59조제2항 또는 제3항에 따라 출원심사의 청구를 할 수 있는 기간

2. 제67조의2제1항에 따라 재심사의 청구를 할 수 있는 기간

② 제1항에 따른 출원심사의 청구 또는 재심사의 청구가 있는 경우에는 제59조제5항에도 불구하고 그 특허출원은 취하되지 아니한 것으로 보거나 특허거절결정이 확정되지 아니한 것으로 본다.`},68:{title:`심판규정의 심사에의 준용`,content:`특허출원의 심사에 관하여는 제148조제1호부터 제5호까지 및 제7호를 준용한다.`},69:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},70:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},71:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},72:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},73:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},74:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},75:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},76:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},77:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},78:{title:`심사 또는 소송절차의 중지`,content:`① 특허출원의 심사에 필요한 경우에는 특허취소신청에 대한 결정이나 심결이 확 정될 때까지 또는 소송절차가 완결될 때까지 그 심사절차를 중지할 수 있다.

② 법원은 소송에 필요한 경우에는 특허출원에 대한 특허여부결정이 확정될 때까지 그 소송절차를 중지할 수 있다.

③ 제1항 및 제2항에 따른 중지에 대해서는 불복할 수 없다.`},"78의2":{title:`삭제`,content:`삭제 <2006.

3. 3.>`},79:{title:`특허료`,content:`① 제87조제1항에 따른 특허권의 설정등록을 받으려는 자는 설정등록을 받으려는 날(이하 “설정등록일 ”이라 한다)부터 3년분의 특허료를 내야 하고, 특허권자는 그 다음 해부터의 특허료를 해당 권리의 설정등록일에 해 당하는 날을 기준으로 매년 1년분씩 내야 한다.

② 제1항에도 불구하고 특허권자는 그 다음 해부터의 특허료는 그 납부연도 순서에 따라 수년분 또는 모든 연도분 을 함께 낼 수 있다.

③ 제1항 및 제2항에 따른 특허료, 그 납부방법 및 납부기간, 그 밖에 필요한 사항은 총리령으로 정한다.<개정 2025. 10. 1.>`},80:{title:`이해관계인에 의한 특허료의 납부`,content:`① 이해관계인은 특허료를 내야 할 자의 의사와 관계없이 특허료를 낼 수 있

다.

② 이해관계인은 제1항에 따라 특허료를 낸 경우에는 내야 할 자가 현재 이익을 얻는 한도에서 그 비용의 상환을 청구할 수 있다.`},81:{title:`특허료의 추가납부 등`,content:`① 특허권의 설정등록을 받으려는 자 또는 특허권자는 제79조제3항에 따른 납부기간이 지난 후에도 6개월 이내(이하 “추가납부기간”이라 한다)에 특허료를 추가로 낼 수 있다.

② 제1항에 따라 특허료를 추가로 낼 때에는 내야 할 특허료의 2배의 범위에서 총리령으로 정하는 금액을 납부하여 야 한다.

③ 추가납부기간에 특허료를 내지 아니한 경우(추가납부기간이 끝나더라도 제81조의2제2항에 따른 보전기간이 끝 나지 아니한 경우에는 그 보전기간에 보전하지 아니한 경우를 말한다)에는 특허권의 설정등록을 받으려는 자의 특 허출원은 포기한 것으로 보며, 특허권자의 특허권은 제79조제1항 또는 제2항에 따라 낸 특허료에 해당되는 기간이 끝나는 날의 다음 날로 소급하여 소멸된 것으로 본다.`},"81의2":{title:`특허료의 보전`,content:`① 지식재산처장은 특허권의 설정등록을 받으려는 자 또는 특허권자가 제79조제3항 또는 제81조제1항에 따른 기간에 특허료의 일부를 내지 아니한 경우에는 특허료의 보전(補塡)을 명하여야 한다. <개정 2025. 10. 1.>

② 제1항에 따라 보전명령을 받은 자는 그 보전명령을 받은 날부터 1개월 이내(이하 “보전기간”이라 한다)에 특허료 를 보전할 수 있다.

③ 제2항에 따라 특허료를 보전하는 자는 내지 아니한 금액의 2배의 범위에서 총리령으로 정한 금액을 내야 한다.`},"81의3":{title:`특허료의 추가납부 또는 보전에 의한 특허출원과 특허권의 회복 등`,content:`① 특허권의 설정등록을 받으려는 자 또는 특허권자가 정당한 사유로 추가납부기간에 특허료를 내지 아니하였거나 보전기간에 보전하지 아니한 경우에는 그 사유가 소멸한 날부터 2개월 이내에 그 특허료를 내거나 보전할 수 있다. 다만, 추가납부기간의 만료일 또는 보전 기간의 만료일 중 늦은 날부터 1년이 지난 때에는 그러하지 아니하다.

② 제1항에 따라 특허료를 내거나 보전한 자는 제81조제3항에도 불구하고 그 특허출원을 포기하지 아니한 것으로 보며, 그 특허권은 계속하여 존속하고 있던 것으로 본다.

③ 추가납부기간에 특허료를 내지 아니하였거나 보전기간에 보전하지 아니하여 특허발명의 특허권이 소멸한 경우 그 특허권자는 추가납부기간 또는 보전기간 만료일부터 3개월 이내에 제79조에 따른 특허료의 2배를 내고, 그 소멸 한 권리의 회복을 신청할 수 있다. 이 경우 그 특허권은 계속하여 존속하고 있던 것으로 본다.

④ 제2항 또는 제3항에 따른 특허출원 또는 특허권의 효력은 추가납부기간 또는 보전기간이 지난 날부터 특허료를 내거나 보전한 날까지의 기간(이하 이 조에서 “효력제한기간”이라 한다) 중에 타인이 특허출원된 발명 또는 특허발 명을 실시한 행위에 대해서는 그 효력이 미치지 아니한다.

⑤ 효력제한기간 중 국내에서 선의로 제2항 또는 제3항에 따른 특허출원된 발명 또는 특허발명을 업으로 실시하거 나 이를 준비하고 있는 자는 그 실시하거나 준비하고 있는 발명 및 사업목적의 범위에서 그 특허출원된 발명 또는 특허발명에 대한 특허권에 대하여 통상실시권을 가진다.

⑥ 제5항에 따라 통상실시권을 가진 자는 특허권자 또는 전용실시권자에게 상당한 대가를 지급하여야 한다.

⑦ 제1항 본문에 따른 납부나 보전 또는 제3항 전단에 따른 신청에 필요한 사항은 총리령으로 정한다.<개정 2025. 10. 1.>`},82:{title:`수수료`,content:`① 특허에 관한 절차를 밟는 자는 수수료를 내야 한다.

② 특허출원인이 아닌 자가 출원심사의 청구를 한 후 그 특허출원서에 첨부한 명세서를 보정하여 청구범위에 적은 청구항의 수가 증가한 경우에는 그 증가한 청구항에 관하여 내야 할 심사청구료는 특허출원인이 내야 한다.

③ 제1항에 따른 수수료, 그 납부방법 및 납부기간, 그 밖에 필요한 사항은 총리령으로 정한다.`},83:{title:`특허료 또는 수수료의 감면`,content:`① 지식재산처장은 다음 각 호의 어느 하나에 해당하는 특허료 및 수수료는 제79조 및 제82조에도 불구하고 면제한다.

1. 국가에 속하는 특허출원 또는 특허권에 관한 수수료 또는 특허료

2. 제133조제1항, 제134조제1항ㆍ제2항 또는 제137조제1항에 따른 심사관의 무효심판청구에 대한 수수료

② 지식재산처장은 다음 각 호의 어느 하나에 해당하는 자가 한 특허출원 또는 그 특허출원하여 받은 특허권에 대 해서는 제79조 및 제82조에도 불구하고 총리령으로 정하는 특허료 및 수수료를 감면할 수 있다.<개정 2016. 3. 29., 2021. 8. 17., 2025. 10. 1.>

1. 「국민기초생활 보장법」에 따른 의료급여 수급자

2. 「재난 및 안전관리 기본법」 제36조에 따른 재난사태 또는 같은 법 제60조에 따른 특별재난지역으로 선포된 지역 에 거주하거나 주된 사무소를 두고 있는 자 중 총리령으로 정하는 요건을 갖춘 자

3. 그 밖에 총리령으로 정하는 자

③ 제2항에 따라 특허료 및 수수료를 감면받으려는 자는 총리령으로 정하는 서류를 지식재산처장에게 제출하여야 한다.

④ 지식재산처장은 제2항에 따른 특허료 및 수수료 감면을 거짓이나 그 밖의 부정한 방법으로 받은 자에 대하여는 총리령으로 정하는 바에 따라 감면받은 특허료 및 수수료의 2배액을 징수할 수 있다. 이 경우 그 출원인 또는 특허 권자가 하는 특허출원 또는 그 특허출원하여 받은 특허권에 대해서는 총리령으로 정하는 기간 동안 제2항을 적용하 지 아니한다.`},84:{title:`특허료 등의 반환`,content:`① 납부된 특허료 및 수수료는 다음 각 호의 어느 하나에 해당하는 경우에만 납부한 자의 청 구에 의하여 반환한다.

1. 잘못 납부된 특허료 및 수수료

2. 제132조의13제1항에 따른 특허취소결정이나 특허를 무효로 한다는 심결이 확정된 해의 다음 해부터의 특허료 해당분

3. 특허권의 존속기간의 연장등록을 무효로 한다는 심결이 확정된 해의 다음 해부터의 특허료 해당분

4. 특허출원(분할출원, 분리출원, 변경출원 및 제61조에 따른 우선심사의 신청을 한 특허출원은 제외한다) 후 1개월 이내에 그 특허출원을 취하하거나 포기한 경우에 이미 낸 수수료 중 특허출원료 및 특허출원의 우선권 주장 신청 료

5. 출원심사의 청구를 한 이후 다음 각 목 중 어느 하나가 있기 전까지 특허출원을 취하(제53조제4항 또는 제56조제 1항 본문에 따라 취하된 것으로 보는 경우를 포함한다. 이하 이 조에서 같다)하거나 포기한 경우 이미 낸 심사청 구료

가. 제36조제6항에 따른 협의 결과 신고 명령(동일인에 의한 특허출원에 한정한다)

나. 삭제<2021.

8. 17.>

다. 제63조에 따른 거절이유통지

라. 제67조제2항에 따른 특허결정의 등본 송달 5의2. 출원심사의 청구를 한 이후 다음 각 목의 어느 하나에 해당하는 기간 내에 특허출원을 취하하거나 포기한 경 우 이미 낸 심사청구료의 3분의 1에 해당하는 금액

가. 제5호가목에 따른 신고 명령 후 신고기간 만료 전까지

나. 제5호다목에 따른 거절이유통지(제47조제1항제1호에 해당하는 경우로 한정한다) 후 의견서 제출기간 만료 전 까지

6. 특허권을 포기한 해의 다음 해부터의 특허료 해당분

7. 제176조제1항에 따라 특허거절결정 또는 특허권의 존속기간의 연장등록거절결정이 취소된 경우(제184조에 따라 재심의 절차에서 준용되는 경우를 포함하되, 심판 또는 재심 중 제170조제1항에 따라 준용되는 제47조제1항제 1호 또는 제2호에 따른 보정이 있는 경우는 제외한다)에 이미 낸 수수료 중 심판청구료(재심의 경우에는 재심청 구료를 말한다. 이하 이 조에서 같다)

8. 심판청구가 제141조제2항에 따라 결정으로 각하되고 그 결정이 확정된 경우(제184조에 따라 재심의 절차에서 준 용되는 경우를 포함한다)에 이미 낸 심판청구료의 2분의 1에 해당하는 금액

9. 심리의 종결을 통지받기 전까지 제155조제1항에 따른 참가신청을 취하한 경우(제184조에 따라 재심의 절차에서 준용되는 경우를 포함한다)에 이미 낸 수수료 중 참가신청료의 2분의 1에 해당하는 금액

10. 제155조제1항에 따른 참가신청이 결정으로 거부된 경우(제184조에 따라 재심의 절차에서 준용되는 경우를 포 함한다)에 이미 낸 수수료 중 참가신청료의 2분의 1에 해당하는 금액

11. 심리의 종결을 통지받기 전까지 심판청구를 취하한 경우(제184조에 따라 재심의 절차에서 준용되는 경우를 포 함한다)에 이미 낸 수수료 중 심판청구료의 2분의 1에 해당하는 금액

② 지식재산처장 또는 특허심판원장은 납부된 특허료 및 수수료가 제1항 각 호의 어느 하나에 해당하는 경우에는 그 사실을 납부한 자에게 통지하여야 한다.

③ 제1항에 따른 특허료 및 수수료의 반환청구는 제2항에 따른 통지를 받은 날부터 5년이 지나면 할 수 없다.<개정 2022. 10. 18.>`},85:{title:`특허원부`,content:`① 지식재산처장은 지식재산처에 특허원부를 갖추어 두고 다음 각 호의 사항을 등록한다. <개정 2025. 10. 1.>

1. 특허권의 설정ㆍ이전ㆍ소멸ㆍ회복ㆍ처분의 제한 또는 존속기간의 연장

2. 전용실시권 또는 통상실시권의 설정ㆍ보존ㆍ이전ㆍ변경ㆍ소멸 또는 처분의 제한

3. 특허권ㆍ전용실시권 또는 통상실시권을 목적으로 하는 질권의 설정ㆍ이전ㆍ변경ㆍ소멸 또는 처분의 제한

② 제1항에 따른 특허원부는 그 전부 또는 일부를 전자적 기록매체 등으로 작성할 수 있다.

③ 제1항 및 제2항에서 규정한 사항 외에 등록사항 및 등록절차 등에 관하여 필요한 사항은 대통령령으로 정한다.

④ 특허발명의 명세서 및 도면, 그 밖에 대통령령으로 정하는 서류는 특허원부의 일부로 본다.`},86:{title:`특허증의 발급`,content:`① 지식재산처장은 특허권의 설정등록을 한 경우에는 총리령으로 정하는 바에 따라 특허권자에 게 특허증을 발급하여야 한다.

② 지식재산처장은 특허증이 특허원부나 그 밖의 서류와 맞지 아니하면 신청에 따라 또는 직권으로 특허증을 회수 하여 정정발급하거나 새로운 특허증을 발급하여야 한다.

③ 지식재산처장은 다음 각 호의 어느 하나에 해당하는 경우에는 결정, 심결 또는 이전등록에 따른 새로운 특허증을 발급하여야 한다.

1. 특허발명의 명세서 또는 도면의 정정을 인정한다는 취지의 결정 또는 심결이 확정된 경우

2. 제99조의2제2항에 따라 특허권이 이전등록된 경우`},87:{title:`특허권의 설정등록 및 등록공고`,content:`① 특허권은 설정등록에 의하여 발생한다.

② 지식재산처장은 다음 각 호의 어느 하나에 해당하는 경우에는 특허권을 설정하기 위한 등록을 하여야 한다.<개 정 2025.

10. 1.>

1. 제79조제1항에 따라 특허료를 냈을 때

2. 제81조제1항에 따라 특허료를 추가로 냈을 때

3. 제81조의2제2항에 따라 특허료를 보전하였을 때

4. 제81조의3제1항에 따라 특허료를 내거나 보전하였을 때

5. 제83조제1항제1호 및 같은 조 제2항에 따라 그 특허료가 면제되었을 때

③ 지식재산처장은 제2항에 따라 등록한 경우에는 다음 각 호의 사항을 특허공보에 게재하여 등록공고를 하여야 한

다.

1. 특허권자의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지를 말한다)

2. 특허출원번호 및 출원연월일

3. 발명자의 성명 및 주소

4. 특허출원서에 첨부된 요약서

5. 특허번호 및 설정등록연월일

6. 등록공고연월일

7. 제63조제1항 각 호 외의 부분 본문에 따라 통지한 거절이유에 선행기술에 관한 정보(선행기술이 적혀 있는 간행 물의 명칭과 그 밖에 선행기술에 관한 정보의 소재지를 말한다)가 포함된 경우 그 정보

8. 그 밖에 대통령령으로 정하는 사항

④ 비밀취급이 필요한 특허발명에 대해서는 그 발명의 비밀취급이 해제될 때까지 그 특허의 등록공고를 보류하여 야 하며, 그 발명의 비밀취급이 해제된 경우에는 지체 없이 제3항에 따라 등록공고를 하여야 한다.

⑤ 삭제<2016.

2. 29.>`},88:{title:`특허권의 존속기간`,content:`① 특허권의 존속기간은 제87조제1항에 따라 특허권을 설정등록한 날부터 특허출원일 후 20년이 되는 날까지로 한다.

② 정당한 권리자의 특허출원이 제34조 또는 제35조에 따라 특허된 경우에는 제1항의 특허권의 존속기간은 무권리 자의 특허출원일의 다음 날부터 기산한다.`},89:{title:`허가등에 따른 특허권의 존속기간의 연장`,content:`① 특허발명을 실시하기 위하여 다른 법령에 따라 허가를 받거나 등 록 등을 하여야 하고, 그 허가 또는 등록 등(이하 “허가등”이라 한다)을 위하여 필요한 유효성ㆍ안전성 등의 시험으로 인하여 장기간이 소요되는 대통령령으로 정하는 발명인 경우에는 제88조제1항에도 불구하고 그 실시할 수 없었던 기간에 대하여 5년의 기간까지 그 특허권의 존속기간(제92조의5제2항에 따라 특허권의 존속기간의 연장이 등록된 경우에는 그 연장된 날까지를 말한다 )을 한 차례만 연장할 수 있다. 다만, 허가등을 받은 날부터 14년을 초과하여 연 장할 수 없다.

② 제1항을 적용할 때 허가등을 받은 자에게 책임있는 사유로 소요된 기간은 제1항의 “실시할 수 없었던 기간”에 포 함되지 아니한다.`},90:{title:`허가등에 따른 특허권의 존속기간의 연장등록출원`,content:`① 제89조제1항에 따라 특허권의 존속기간의 연장등록출원 을 하려는 자(이하 이 조 및 제91조에서 “연장등록출원인”이라 한다)는 다음 각 호의 사항을 적은 특허권의 존속기간 의 연장등록출원서를 지식재산처장에게 제출하여야 한다.

1. 연장등록출원인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 연장등록출원인의 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특 허법인(유한)인 경우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

3. 연장대상특허권의 특허번호 및 연장대상청구범위의 표시

4. 연장신청의 기간

5. 제89조제1항에 따른 허가등의 내용

6. 총리령으로 정하는 연장이유(이를 증명할 수 있는 자료를 첨부하여야 한다)

② 제1항에 따른 특허권의 존속기간의 연장등록출원은 제89조제1항에 따른 허가등을 받은 날부터 3개월 이내에 출 원하여야 한다. 다만, 제88조에 따른 특허권의 존속기간의 만료 전 6개월 이후에는 그 특허권의 존속기간의 연장등 록출원을 할 수 없다.

③ 특허권이 공유인 경우에는 공유자 모두가 공동으로 특허권의 존속기간의 연장등록출원을 하여야 한다.

④ 제1항에 따른 특허권의 존속기간의 연장등록출원이 있으면 그 존속기간은 연장된 것으로 본다. 다만, 그 출원에 관하여 제91조의 연장등록거절결정이 확정된 경우에는 그러하지 아니하다.

⑤ 지식재산처장은 제1항에 따른 특허권의 존속기간의 연장등록출원이 있으면 제1항 각 호의 사항을 특허공보에 게재하여야 한다.

⑥ 연장등록출원인은 지식재산처장이 연장등록여부결정등본을 송달하기 전까지 연장등록출원서에 적혀 있는 사항 중 제1항제3호부터 제6호까지의 사항(제3호 중 연장대상특허권의 특허번호는 제외한다)에 대하여 보정할 수 있다. 다만, 제93조에 따라 준용되는 거절이유통지를 받은 후에는 해당 거절이유통지에 따른 의견서 제출기간에만 보정 할 수 있다.

⑦ 하나의 허가등에 대하여 둘 이상의 특허권이 있는 경우에는 연장등록출원인은 그 중 하나의 특허권에 대해서만 존속기간의 연장등록출원을 하여야 하고, 하나의 허가등에 대하여 둘 이상의 특허권에 대한 존속기간의 연장등록출 원이 있는 경우에는 어느 특허권의 존속기간도 연장할 수 없다.

⑧ 특허권의 존속기간의 연장등록출원이 다음 각 호의 어느 하나에 해당하는 경우 그 출원은 제7항을 적용할 때는 처음부터 없었던 것으로 본다.

1. 포기, 무효 또는 취하된 경우

2. 거절결정이나 거절한다는 취지의 심결이 확정된 경우`},91:{title:`허가등에 따른 특허권의 존속기간의 연장등록거절결정`,content:`심사관은 제90조에 따른 특허권의 존속기간의 연장등 록출원이 다음 각 호의 어느 하나에 해당하는 경우에는 그 출원에 대하여 연장등록거절결정을 하여야 한다. <개정 2025. 1. 21.>

1. 그 특허발명의 실시가 제89조제1항에 따른 허가등을 받을 필요가 있는 것으로 인정되지 아니하는 경우

2. 그 특허권자 또는 그 특허권의 전용실시권이나 등록된 통상실시권을 가진 자가 제89조제1항에 따른 허가등을 받 지 아니한 경우

3. 연장신청의 기간이 제89조에 따라 인정되는 연장의 기간을 초과하는 경우

4. 연장등록출원인이 해당 특허권자가 아닌 경우

5. 제90조제3항을 위반하여 연장등록출원을 한 경우

6. 제90조제7항을 위반하여 하나의 허가등에 대하여 둘 이상의 특허권에 대한 존속기간의 연장등록출원을 한 경우`},92:{title:`허가등에 따른 특허권의 존속기간의 연장등록결정 등`,content:`① 심사관은 제90조에 따른 특허권의 존속기간의 연장등 록출원에 대하여 제91조 각 호의 어느 하나에 해당하는 사유를 발견할 수 없을 때에는 연장등록결정을 하여야 한다.

② 지식재산처장은 제1항에 따른 연장등록결정을 한 경우에는 특허권의 존속기간의 연장을 특허원부에 등록하여야 한다.

③ 지식재산처장은 제2항에 따른 등록을 한 경우에는 다음 각 호의 사항을 특허공보에 게재하여야 한다.<개정 2025. 10. 1.>

1. 특허권자의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 특허번호

3. 연장등록의 연월일

4. 연장기간

5. 제89조제1항에 따른 허가등의 내용`},"92의2":{title:`등록지연에 따른 특허권의 존속기간의 연장`,content:`① 특허출원에 대하여 특허출원일부터 4년과 출원심사 청구일 부터 3년 중 늦은 날보다 지연되어 특허권의 설정등록이 이루어지는 경우에는 제88조제1항에도 불구하고 그 지연된 기간만큼 해당 특허권의 존속기간을 연장할 수 있다.

② 제1항의 규정을 적용함에 있어서 출원인으로 인하여 지연된 기간은 제1항에 따른 특허권의 존속기간의 연장에 서 제외된다. 다만, 출원인으로 인하여 지연된 기간이 겹치는 경우에는 특허권의 존속기간의 연장에서 제외되는 기 간은 출원인으로 인하여 실제 지연된 기간을 초과하여서는 아니된다.

③ 제2항에서 “출원인으로 인하여 지연된 기간”에 관한 사항은 대통령령으로 정한다.

④ 제1항에 따라 특허출원일부터 4년을 기산할 때에는 제34조, 제35조, 제52조제2항, 제52조의2제2항, 제53조제 2항, 제199조제1항 및 제214조제4항에도 불구하고 다음 각 호에 해당하는 날을 특허출원일로 본다.<개정 2021. 10. 19.>

1. 제34조 또는 제35조에 따른 정당한 권리자의 특허출원의 경우에는 정당한 권리자가 출원을 한 날

2. 제52조에 따른 분할출원의 경우에는 분할출원을 한 날 2의2. 제52조의2에 따른 분리출원의 경우에는 분리출원을 한 날

3. 제53조에 따른 변경출원의 경우에는 변경출원을 한 날

4. 제199조제1항에 따라 특허출원으로 보는 국제출원의 경우에는 제203조제1항 각 호의 사항을 기재한 서면을 제 출한 날

5. 제214조에 따라 특허출원으로 보는 국제출원의 경우에는 국제출원의 출원인이 제214조제1항에 따라 결정을 신 청한 날

6. 제1호부터 제5호까지의 규정 중 어느 하나에 해당되지 아니하는 특허출원에 대하여는 그 특허출원일`},"92의3":{title:`등록지연에 따른 특허권의 존속기간의 연장등록출원`,content:`① 제92조의2에 따라 특허권의 존속기간의 연장등록 출원을 하려는 자(이하 이 조 및 제92조의4에서 “연장등록출원인”이라 한다)는 다음 각 호의 사항을 적은 특허권의 존속기간의 연장등록출원서를 지식재산처장에게 제출하여야 한다.

1. 연장등록출원인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 연장등록출원인의 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지(대리인이 특허법인ㆍ특 허법인(유한)인 경우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명)

3. 연장 대상 특허권의 특허번호

4. 연장신청의 기간

5. 총리령이 정하는 연장이유(이를 증명할 수 있는 자료를 첨부하여야 한다)

② 제1항에 따른 특허권의 존속기간의 연장등록출원은 특허권의 설정등록일부터 3개월 이내에 출원하여야 한다.

③ 특허권이 공유인 경우에는 공유자 전원이 공동으로 특허권의 존속기간의 연장등록출원을 하여야 한다.

④ 연장등록출원인은 심사관이 특허권의 존속기간의 연장등록 여부결정 전까지 연장등록출원서에 기재된 사항 중 제1항제4호 및 제5호의 사항에 대하여 보정할 수 있다. 다만, 제93조에 따라 준용되는 거절이유통지를 받은 후에는 해당 거절이유통지에 따른 의견서 제출기간에만 보정할 수 있다.`},"92의4":{title:`등록지연에 따른 특허권의 존속기간의 연장등록거절결정`,content:`심사관은 제92조의3에 따른 특허권의 존속기간의 연장등록출원이 다음 각 호의 어느 하나에 해당하는 경우에는 그 출원에 대하여 연장등록거절결정을 하여야 한다.

1. 연장신청의 기간이 제92조의2에 따라 인정되는 연장의 기간을 초과한 경우

2. 연장등록출원인이 해당 특허권자가 아닌 경우

3. 제92조의3제3항을 위반하여 연장등록출원을 한 경우`},"92의5":{title:`등록지연에 따른 특허권의 존속기간의 연장등록결정 등`,content:`① 심사관은 제92조의3에 따른 특허권의 존속기간 의 연장등록출원에 대하여 제92조의4 각 호의 어느 하나에 해당하는 사유를 발견할 수 없는 경우에는 연장등록결정 을 하여야 한다.

② 지식재산처장은 제1항의 연장등록결정이 있으면 특허권의 존속기간의 연장을 특허원부에 등록하여야 한다.<개 정 2025.

10. 1.>

③ 제2항에 따른 등록이 있으면 다음 각 호의 사항을 특허공보에 게재하여야 한다.

1. 특허권자의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 특허번호

3. 연장등록 연월일

4. 연장 기간`},93:{title:`준용규정`,content:`특허권의 존속기간의 연장등록출원의 심사에 관하여는 제57조제1항, 제63조, 제67조, 제78조제1항ㆍ 제3항, 제148조제1호부터 제5호까지 및 같은 조 제7호를 준용한다. 이 경우 제78조제1항 중 “특허취소신청에 대한 결정”은 “제92조의4 및 제92조의5에 따른 연장등록거절결정 또는 연장등록결정”으로, “그 심사절차”는 “허가등에 따 른 연장등록출원 심사 절차”로 본다.`},94:{title:`특허권의 효력`,content:`① 특허권자는 업으로서 특허발명을 실시할 권리를 독점한다. 다만, 그 특허권에 관하여 전용실 시권을 설정하였을 때에는 제100조제2항에 따라 전용실시권자가 그 특허발명을 실시할 권리를 독점하는 범위에서 는 그러하지 아니하다.

② 특허발명의 실시가 제2조제3호나목에 따른 방법의 사용을 청약하는 행위인 경우 특허권의 효력은 그 방법의 사 용이 특허권 또는 전용실시권을 침해한다는 것을 알면서 그 방법의 사용을 청약하는 행위에만 미친다.<신설 2019. 12. 10.>`},95:{title:`허가등에 따른 존속기간이 연장된 경우의 특허권의 효력`,content:`제90조제4항에 따라 특허권의 존속기간이 연장된 특 허권의 효력은 그 연장등록의 이유가 된 허가등의 대상물건(그 허가등에 있어 물건에 대하여 특정의 용도가 정하여 져 있는 경우에는 그 용도에 사용되는 물건)에 관한 그 특허발명의 실시 행위에만 미친다.`},96:{title:`특허권의 효력이 미치지 아니하는 범위`,content:`① 특허권의 효력은 다음 각 호의 어느 하나에 해당하는 사항에는 미치 지 아니한다.

1. 연구 또는 시험(「약사법」에 따른 의약품의 품목허가ㆍ품목신고 및 「농약관리법」에 따른 농약의 등록을 위한 연 구 또는 시험을 포함한다)을 하기 위한 특허발명의 실시

2. 국내를 통과하는데 불과한 선박ㆍ항공기ㆍ차량 또는 이에 사용되는 기계ㆍ기구ㆍ장치, 그 밖의 물건

3. 특허출원을 한 때부터 국내에 있는 물건

② 둘 이상의 의약[사람의 질병의 진단ㆍ경감ㆍ치료ㆍ처치(處置) 또는 예방을 위하여 사용되는 물건을 말한다. 이하 같다]이 혼합되어 제조되는 의약의 발명 또는 둘 이상의 의약을 혼합하여 의약을 제조하는 방법의 발명에 관한 특 허권의 효력은 「약사법」에 따른 조제행위와 그 조제에 의한 의약에는 미치지 아니한다.`},97:{title:`특허발명의 보호범위`,content:`특허발명의 보호범위는 청구범위에 적혀 있는 사항에 의하여 정하여진다.`},98:{title:`타인의 특허발명 등과의 관계`,content:`특허권자ㆍ전용실시권자 또는 통상실시권자는 특허발명이 그 특허발명의 특허 출원일 전에 출원된 타인의 특허발명ㆍ등록실용신안 또는 등록디자인이나 그 디자인과 유사한 디자인을 이용하거나 특허권이 그 특허발명의 특허출원일 전에 출원된 타인의 디자인권 또는 상표권과 저촉되는 경우에는 그 특허권자ㆍ 실용신안권자ㆍ디자인권자 또는 상표권자의 허락을 받지 아니하고는 자기의 특허발명을 업으로서 실시할 수 없다.`},99:{title:`특허권의 이전 및 공유 등`,content:`① 특허권은 이전할 수 있다.

② 특허권이 공유인 경우에는 각 공유자는 다른 공유자 모두의 동의를 받아야만 그 지분을 양도하거나 그 지분을 목적으로 하는 질권을 설정할 수 있다.

③ 특허권이 공유인 경우에는 각 공유자는 계약으로 특별히 약정한 경우를 제외하고는 다른 공유자의 동의를 받지 아니하고 그 특허발명을 자신이 실시할 수 있다.

④ 특허권이 공유인 경우에는 각 공유자는 다른 공유자 모두의 동의를 받아야만 그 특허권에 대하여 전용실시권을 설정하거나 통상실시권을 허락할 수 있다.`},"99의2":{title:`특허권의 이전청구`,content:`① 특허가 제133조제1항제2호 본문에 해당하는 경우에 특허를 받을 수 있는 권리를 가 진 자는 법원에 해당 특허권의 이전(특허를 받을 수 있는 권리가 공유인 경우에는 그 지분의 이전을 말한다)을 청구 할 수 있다.

② 제1항의 청구에 기초하여 특허권이 이전등록된 경우에는 다음 각 호의 권리는 그 특허권이 설정등록된 날부터 이전등록을 받은 자에게 있는 것으로 본다.

1. 해당 특허권

2. 제65조제2항에 따른 보상금 지급 청구권

3. 제207조제4항에 따른 보상금 지급 청구권

③ 제1항의 청구에 따라 공유인 특허권의 지분을 이전하는 경우에는 제99조제2항에도 불구하고 다른 공유자의 동 의를 받지 아니하더라도 그 지분을 이전할 수 있다.`},100:{title:`전용실시권`,content:`① 특허권자는 그 특허권에 대하여 타인에게 전용실시권을 설정할 수 있다.

② 전용실시권을 설정받은 전용실시권자는 그 설정행위로 정한 범위에서 그 특허발명을 업으로서 실시할 권리를 독점한다.

③ 전용실시권자는 다음 각 호의 경우를 제외하고는 특허권자의 동의를 받아야만 전용실시권을 이전할 수 있다.

1. 전용실시권을 실시사업(實施事業)과 함께 이전하는 경우

2. 상속이나 그 밖의 일반승계의 경우

④ 전용실시권자는 특허권자의 동의를 받아야만 그 전용실시권을 목적으로 하는 질권을 설정하거나 통상실시권을 허락할 수 있다.

⑤ 전용실시권에 관하여는 제99조제2항부터 제4항까지의 규정을 준용한다.`},101:{title:`특허권 및 전용실시권의 등록의 효력`,content:`① 다음 각 호의 어느 하나에 해당하는 사항은 등록하여야만 효력이 발 생한다.

1. 특허권의 이전(상속이나 그 밖의 일반승계에 의한 경우는 제외한다), 포기에 의한 소멸 또는 처분의 제한

2. 전용실시권의 설정ㆍ이전(상속이나 그 밖의 일반승계에 의한 경우는 제외한다)ㆍ변경ㆍ소멸(혼동에 의한 경우는 제외한다) 또는 처분의 제한

3. 특허권 또는 전용실시권을 목적으로 하는 질권의 설정ㆍ이전(상속이나 그 밖의 일반승계에 의한 경우는 제외한 다)ㆍ변경ㆍ소멸(혼동에 의한 경우는 제외한다) 또는 처분의 제한

② 제1항 각 호에 따른 특허권ㆍ전용실시권 및 질권의 상속이나 그 밖의 일반승계의 경우에는 지체 없이 그 취지를 지식재산처장에게 신고하여야 한다.`},102:{title:`통상실시권`,content:`① 특허권자는 그 특허권에 대하여 타인에게 통상실시권을 허락할 수 있다.

② 통상실시권자는 이 법에 따라 또는 설정행위로 정한 범위에서 특허발명을 업으로서 실시할 수 있는 권리를 가진

다.

③ 제107조에 따른 통상실시권은 실시사업과 함께 이전하는 경우에만 이전할 수 있다.

④ 제138조, 「실용신안법」 제32조 또는 「디자인보호법」 제123조에 따른 통상실시권은 그 통상실시권자의 해당 특 허권ㆍ실용신안권 또는 디자인권과 함께 이전되고, 해당 특허권ㆍ실용신안권 또는 디자인권이 소멸되면 함께 소멸 된다.

⑤ 제3항 및 제4항에 따른 통상실시권 외의 통상실시권은 실시사업과 함께 이전하는 경우 또는 상속이나 그 밖의 일반승계의 경우를 제외하고는 특허권자(전용실시권에 관한 통상실시권의 경우에는 특허권자 및 전용실시권자)의 동의를 받아야만 이전할 수 있다.

⑥ 제3항 및 제4항에 따른 통상실시권 외의 통상실시권은 특허권자(전용실시권에 관한 통상실시권의 경우에는 특 허권자 및 전용실시권자)의 동의를 받아야만 그 통상실시권을 목적으로 하는 질권을 설정할 수 있다.

⑦ 통상실시권에 관하여는 제99조제2항 및 제3항을 준용한다.`},103:{title:`선사용에 의한 통상실시권`,content:`특허출원 시에 그 특허출원된 발명의 내용을 알지 못하고 그 발명을 하거나 그 발 명을 한 사람으로부터 알게 되어 국내에서 그 발명의 실시사업을 하거나 이를 준비하고 있는 자는 그 실시하거나 준 비하고 있는 발명 및 사업목적의 범위에서 그 특허출원된 발명의 특허권에 대하여 통상실시권을 가진다.`},"103의2":{title:`특허권의 이전청구에 따른 이전등록 전의 실시에 의한 통상실시권`,content:`① 다음 각 호의 어느 하나에 해당하는 자가 제99조의2제2항에 따른 특허권의 이전등록이 있기 전에 해당 특허가 제133조제1항제2호 본문에 해당하는 것 을 알지 못하고 국내에서 해당 발명의 실시사업을 하거나 이를 준비하고 있는 경우에는 그 실시하거나 준비를 하고 있는 발명 및 사업목적의 범위에서 그 특허권에 대하여 통상실시권을 가진다.

1. 이전등록된 특허의 원(原)특허권자

2. 이전등록된 특허권에 대하여 이전등록 당시에 이미 전용실시권이나 통상실시권 또는 그 전용실시권에 대한 통상 실시권을 취득하고 등록을 받은

자. 다만, 제118조제2항에 따른 통상실시권을 취득한 자는 등록을 필요로 하지 아니한다.

② 제1항에 따라 통상실시권을 가진 자는 이전등록된 특허권자에게 상당한 대가를 지급하여야 한다.`},104:{title:`무효심판청구 등록 전의 실시에 의한 통상실시권`,content:`① 다음 각 호의 어느 하나에 해당하는 자가 특허 또는 실용 신안등록에 대한 무효심판청구의 등록 전에 자기의 특허발명 또는 등록실용신안이 무효사유에 해당하는 것을 알지 못하고 국내에서 그 발명 또는 고안의 실시사업을 하거나 이를 준비하고 있는 경우에는 그 실시하거나 준비하고 있 는 발명 또는 고안 및 사업목적의 범위에서 그 특허권에 대하여 통상실시권을 가지거나 특허나 실용신안등록이 무 효로 된 당시에 존재하는 특허권의 전용실시권에 대하여 통상실시권을 가진다.

1. 동일한 발명에 대한 둘 이상의 특허 중 그 하나의 특허를 무효로 한 경우 그 무효로 된 특허의 원특허권자

2. 특허발명과 등록실용신안이 동일하여 그 실용신안등록을 무효로 한 경우 그 무효로 된 실용신안등록의 원(原)실 용신안권자

3. 특허를 무효로 하고 동일한 발명에 관하여 정당한 권리자에게 특허를 한 경우 그 무효로 된 특허의 원특허권자

4. 실용신안등록을 무효로 하고 그 고안과 동일한 발명에 관하여 정당한 권리자에게 특허를 한 경우 그 무효로 된 실용신안의 원실용신안권자

5. 제1호부터 제4호까지의 경우에 있어서 그 무효로 된 특허권 또는 실용신안권에 대하여 무효심판청구 등록 당시 에 이미 전용실시권이나 통상실시권 또는 그 전용실시권에 대한 통상실시권을 취득하고 등록을 받은

자. 다만, 제 118조제2항에 따른 통상실시권을 취득한 자는 등록을 필요로 하지 아니한다.

② 제1항에 따라 통상실시권을 가진 자는 특허권자 또는 전용실시권자에게 상당한 대가를 지급하여야 한다.`},105:{title:`디자인권의 존속기간 만료 후의 통상실시권`,content:`① 특허출원일 전 또는 특허출원일과 같은 날에 출원되어 등록된 디자인권이 그 특허권과 저촉되는 경우 그 디자인권의 존속기간이 만료될 때에는 그 디자인권자는 그 디자인권의 범위에서 그 특허권에 대하여 통상실시권을 가지거나 그 디자인권의 존속기간 만료 당시 존재하는 그 특허권의 전 용실시권에 대하여 통상실시권을 가진다.

② 특허출원일 전 또는 특허출원일과 같은 날에 출원되어 등록된 디자인권이 그 특허권과 저촉되는 경우 그 디자인 권의 존속기간이 만료될 때에는 다음 각 호의 어느 하나에 해당하는 권리를 가진 자는 원(原)권리의 범위에서 그 특 허권에 대하여 통상실시권을 가지거나 그 디자인권의 존속기간 만료 당시 존재하는 그 특허권의 전용실시권에 대 하여 통상실시권을 가진다.

1. 그 디자인권의 존속기간 만료 당시 존재하는 그 디자인권에 대한 전용실시권

2. 그 디자인권이나 그 디자인권에 대한 전용실시권에 대하여 「디자인보호법」 제104조제1항에 따라 효력이 발생한 통상실시권

③ 제2항에 따라 통상실시권을 가진 자는 특허권자 또는 전용실시권자에게 상당한 대가를 지급하여야 한다.`},106:{title:`특허권의 수용`,content:`① 정부는 특허발명이 전시, 사변 또는 이에 준하는 비상시에 국방상 필요한 경우에는 특허권 을 수용할 수 있다.

② 특허권이 수용되는 경우에는 그 특허발명에 관한 특허권 외의 권리는 소멸된다.

③ 정부는 제1항에 따라 특허권을 수용하는 경우에는 특허권자, 전용실시권자 또는 통상실시권자에 대하여 정당한 보상금을 지급하여야 한다.

④ 특허권의 수용 및 보상금의 지급에 필요한 사항은 대통령령으로 정한다.`},"106의2":{title:`정부 등에 의한 특허발명의 실시`,content:`① 정부는 특허발명이 국가 비상사태, 극도의 긴급상황 또는 공공의 이익 을 위하여 비상업적(非商業的)으로 실시할 필요가 있다고 인정하는 경우에는 그 특허발명을 실시하거나 정부 외의 자에게 실시하게 할 수 있다.

② 정부 또는 제1항에 따른 정부 외의 자는 타인의 특허권이 존재한다는 사실을 알았거나 알 수 있을 때에는 제1항 에 따른 실시 사실을 특허권자, 전용실시권자 또는 통상실시권자에게 신속하게 알려야 한다.

③ 정부 또는 제1항에 따른 정부 외의 자는 제1항에 따라 특허발명을 실시하는 경우에는 특허권자, 전용실시권자 또는 통상실시권자에게 정당한 보상금을 지급하여야 한다.

④ 특허발명의 실시 및 보상금의 지급에 필요한 사항은 대통령령으로 정한다.`},107:{title:`통상실시권 설정의 재정`,content:`① 특허발명을 실시하려는 자는 특허발명이 다음 각 호의 어느 하나에 해당하고, 그 특허발명의 특허권자 또는 전용실시권자와 합리적인 조건으로 통상실시권 허락에 관한 협의(이하 이 조에서 “협의 ”라 한다)를 하였으나 합의가 이루어지지 아니하는 경우 또는 협의를 할 수 없는 경우에는 지식재산처장에게 통상실 시권 설정에 관한 재정(裁定)(이하 “재정”이라 한다)을 청구할 수 있다. 다만, 공공의 이익을 위하여 비상업적으로 실 시하려는 경우와 제4호에 해당하는 경우에는 협의 없이도 재정을 청구할 수 있다.

1. 특허발명이 천재지변이나 그 밖의 불가항력 또는 대통령령으로 정하는 정당한 이유 없이 계속하여 3년 이상 국 내에서 실시되고 있지 아니한 경우

2. 특허발명이 정당한 이유 없이 계속하여 3년 이상 국내에서 상당한 영업적 규모로 실시되고 있지 아니하거나 적 당한 정도와 조건으로 국내수요를 충족시키지 못한 경우

3. 특허발명의 실시가 공공의 이익을 위하여 특히 필요한 경우

4. 사법적 절차 또는 행정적 절차에 의하여 불공정거래행위로 판정된 사항을 바로잡기 위하여 특허발명을 실시할 필요가 있는 경우

5. 자국민 다수의 보건을 위협하는 질병을 치료하기 위하여 의약품(의약품 생산에 필요한 유효성분, 의약품 사용에 필요한 진단키트를 포함한다)을 수입하려는 국가(이하 이 조에서 “수입국”이라 한다)에 그 의약품을 수출할 수 있 도록 특허발명을 실시할 필요가 있는 경우

② 특허출원일부터 4년이 지나지 아니한 특허발명에 관하여는 제1항제1호 및 제2호를 적용하지 아니한다.

③ 지식재산처장은 재정을 하는 경우 청구별로 통상실시권 설정의 필요성을 검토하여야 한다.

④ 지식재산처장은 제1항제1호부터 제3호까지 또는 제5호에 따른 재정을 하는 경우 재정을 받는 자에게 다음 각 호 의 조건을 붙여야 한다.

1. 제1항제1호부터 제3호까지의 규정에 따른 재정의 경우에는 통상실시권을 국내수요충족을 위한 공급을 주목적으 로 실시할 것

2. 제1항제5호에 따른 재정의 경우에는 생산된 의약품 전량을 수입국에 수출할 것

⑤ 지식재산처장은 재정을 하는 경우 상당한 대가가 지급될 수 있도록 하여야 한다. 이 경우 제1항제4호 또는 제5호 에 따른 재정을 하는 경우에는 다음 각 호의 사항을 대가 결정에 고려할 수 있다.

1. 제1항제4호에 따른 재정의 경우에는 불공정거래행위를 바로잡기 위한 취지

2. 제1항제5호에 따른 재정의 경우에는 그 특허발명을 실시함으로써 발생하는 수입국에서의 경제적 가치

⑥ 반도체 기술에 대해서는 제1항제3호(공공의 이익을 위하여 비상업적으로 실시하는 경우만 해당한다) 또는 제4호 의 경우에만 재정을 청구할 수 있다.

⑦ 수입국은 세계무역기구회원국 중 세계무역기구에 다음 각 호의 사항을 통지한 국가 또는 세계무역기구회원국이 아닌 국가 중 대통령령으로 정하는 국가로서 다음 각 호의 사항을 대한민국정부에 통지한 국가의 경우만 해당한다.

1. 수입국이 필요로 하는 의약품의 명칭과 수량

2. 국제연합총회의 결의에 따른 최빈개발도상국이 아닌 경우 해당 의약품의 생산을 위한 제조능력이 없거나 부족하 다는 수입국의 확인

3. 수입국에서 해당 의약품이 특허된 경우 강제적인 실시를 허락하였거나 허락할 의사가 있다는 그 국가의 확인

⑧ 제1항제5호에 따른 의약품은 다음 각 호의 어느 하나에 해당하는 것으로 한다.

1. 특허된 의약품

2. 특허된 제조방법으로 생산된 의약품

3. 의약품 생산에 필요한 특허된 유효성분

4. 의약품 사용에 필요한 특허된 진단키트

⑨ 재정을 청구하는 자가 제출하여야 하는 서류, 그 밖에 재정에 관하여 필요한 사항은 대통령령으로 정한다.`},108:{title:`답변서의 제출`,content:`지식재산처장은 재정의 청구가 있으면 그 청구서의 부본(副本)을 그 청구에 관련된 특허권자ㆍ 전용실시권자, 그 밖에 그 특허에 관하여 등록을 한 권리를 가지는 자에게 송달하고, 기간을 정하여 답변서를 제출할 수 있는 기회를 주어야 한다.`},109:{title:`산업재산권분쟁조정위원회 및 관계 부처의 장의 의견청취`,content:`지식재산처장은 재정을 할 때 필요하다고 인정하 는 경우에는 「발명진흥법」 제41조에 따른 산업재산권분쟁조정위원회(이하 “조정위원회”라 한다) 및 관계 부처의 장 의 의견을 들을 수 있고, 관계 행정기관이나 관계인에게 협조를 요청할 수 있다.`},110:{title:`재정의 방식 등`,content:`① 재정은 서면으로 하고, 그 이유를 구체적으로 적어야 한다.

② 제1항에 따른 재정에는 다음 각 호의 사항을 구체적으로 적어야 한다.

1. 통상실시권의 범위 및 기간

2. 대가와 그 지급방법 및 지급시기

3. 제107조제1항제5호에 따른 재정의 경우에는 그 특허발명의 특허권자ㆍ전용실시권자 또는 통상실시권자(재정에 따른 경우는 제외한다)가 공급하는 의약품과 외관상 구분할 수 있는 포장ㆍ표시 및 재정에서 정한 사항을 공시할 인터넷 주소

4. 그 밖에 재정을 받은 자가 그 특허발명을 실시할 경우 법령 또는 조약에 따른 내용을 이행하기 위하여 필요한 준 수사항

③ 지식재산처장은 정당한 사유가 있는 경우를 제외하고는 재정청구일부터 6개월 이내에 재정에 관한 결정을 하여 야 한다.

④ 제107조제1항제5호에 따른 재정청구가 같은 조 제7항 및 제8항에 해당하고 같은 조 제9항에 따른 서류가 모두 제출된 경우에는 지식재산처장은 정당한 사유가 있는 경우를 제외하고는 통상실시권 설정의 재정을 하여야 한다.`},111:{title:`재정서등본의 송달`,content:`① 지식재산처장은 재정을 한 경우에는 당사자 및 그 특허에 관하여 등록을 한 권리를 가 지는 자에게 재정서등본을 송달하여야 한다.

② 제1항에 따라 당사자에게 재정서등본이 송달되었을 때에는 재정서에 적혀 있는 바에 따라 당사자 사이에 협의가 이루어진 것으로 본다.`},"111의2":{title:`재정서의 변경`,content:`① 재정을 받은 자는 재정서에 적혀 있는 제110조제2항제3호의 사항에 관하여 변경이 필 요하면 그 원인을 증명하는 서류를 첨부하여 지식재산처장에게 변경청구를 할 수 있다.

② 지식재산처장은 제1항에 따른 청구가 이유있다고 인정되면 재정서에 적혀 있는 사항을 변경할 수 있다. 이 경우 이해관계인의 의견을 들어야 한다.

③ 제2항의 경우에 관하여는 제111조를 준용한다.`},112:{title:`대가의 공탁`,content:`제110조제2항제2호에 따른 대가를 지급하여야 하는 자는 다음 각 호의 어느 하나에 해당하는 경 우에는 그 대가를 공탁(供託)하여야 한다.

1. 대가를 받을 자가 수령을 거부하거나 수령할 수 없는 경우

2. 대가에 대하여 제190조제1항에 따른 소송이 제기된 경우

3. 해당 특허권 또는 전용실시권을 목적으로 하는 질권이 설정되어 있는 경우. 다만, 질권자의 동의를 받은 경우에는 그러하지 아니하다.`},113:{title:`재정의 실효`,content:`재정을 받은 자가 제110조제2항제2호에 따른 지급시기까지 대가(대가를 정기 또는 분할하여 지 급할 경우에는 최초의 지급분)를 지급하지 아니하거나 공탁을 하지 아니한 경우에는 그 재정은 효력을 잃는다.`},114:{title:`재정의 취소`,content:`① 지식재산처장은 재정을 받은 자가 다음 각 호의 어느 하나에 해당하는 경우에는 이해관계인 의 신청에 따라 또는 직권으로 그 재정을 취소할 수 있다. 다만, 제2호의 경우에는 재정을 받은 통상실시권자의 정당 한 이익이 보호될 수 있는 경우로 한정한다.

1. 재정을 받은 목적에 적합하도록 그 특허발명을 실시하지 아니한 경우

2. 통상실시권을 재정한 사유가 없어지고 그 사유가 다시 발생하지 아니할 것이라고 인정되는 경우

3. 정당한 사유 없이 재정서에 적혀 있는 제110조제2항제3호 또는 제4호의 사항을 위반하였을 경우

② 제1항의 경우에 관하여는 제108조ㆍ제109조ㆍ제110조제1항 및 제111조제1항을 준용한다.

③ 제1항에 따라 재정이 취소되면 통상실시권은 그때부터 소멸된다.`},115:{title:`재정에 대한 불복이유의 제한`,content:`재정에 대하여 「행정심판법」에 따라 행정심판을 제기하거나 「행정소송법」에 따라 취소소송을 제기하는 경우에는 그 재정으로 정한 대가는 불복이유로 할 수 없다.`},116:{title:`삭제`,content:`삭제 <2011.

12. 2.>`},117:{title:`삭제`,content:`삭제 <2001.

2. 3.>`},118:{title:`통상실시권의 등록의 효력`,content:`① 통상실시권을 등록한 경우에는 그 등록 후에 특허권 또는 전용실시권을 취득한 자에 대해서도 그 효력이 발생한다.

② 제81조의3제5항, 제103조부터 제105조까지, 제122조, 제182조, 제183조 및 「발명진흥법」 제10조제1항에 따른 통상실시권은 등록이 없더라도 제1항에 따른 효력이 발생한다.

③ 통상실시권의 이전ㆍ변경ㆍ소멸 또는 처분의 제한, 통상실시권을 목적으로 하는 질권의 설정ㆍ이전ㆍ변경ㆍ소 멸 또는 처분의 제한은 이를 등록하여야만 제3자에게 대항할 수 있다.`},119:{title:`특허권 등의 포기의 제한`,content:`① 특허권자는 다음 각 호의 모두의 동의를 받아야만 특허권을 포기할 수 있다.

1. 전용실시권자

2. 질권자

3. 제100조제4항에 따른 통상실시권자

4. 제102조제1항에 따른 통상실시권자

5. 「발명진흥법」 제10조제1항에 따른 통상실시권자

② 전용실시권자는 질권자 또는 제100조제4항에 따른 통상실시권자의 동의를 받아야만 전용실시권을 포기할 수 있

다.

③ 통상실시권자는 질권자의 동의를 받아야만 통상실시권을 포기할 수 있다.`},120:{title:`포기의 효과`,content:`특허권ㆍ전용실시권 또는 통상실시권을 포기한 때에는 특허권ㆍ전용실시권 또는 통상실시권은 그때부터 소멸된다.`},121:{title:`질권`,content:`특허권ㆍ전용실시권 또는 통상실시권을 목적으로 하는 질권을 설정하였을 때에는 질권자는 계약으로 특별히 정한 경우를 제외하고는 해당 특허발명을 실시할 수 없다.`},122:{title:`질권행사 등으로 인한 특허권의 이전에 따른 통상실시권`,content:`특허권자(공유인 특허권을 분할청구한 경우에는 분 할청구를 한 공유자를 제외한 나머지 공유자를 말한다)는 특허권을 목적으로 하는 질권설정 또는 공유인 특허권의 분할청구 이전에 그 특허발명을 실시하고 있는 경우에는 그 특허권이 경매 등에 의하여 이전되더라도 그 특허발명 에 대하여 통상실시권을 가진다. 이 경우 특허권자는 경매 등에 의하여 특허권을 이전받은 자에게 상당한 대가를 지 급하여야 한다.`},123:{title:`질권의 물상대위`,content:`질권은 이 법에 따른 보상금이나 특허발명의 실시에 대하여 받을 대가나 물건에 대해서도 행사할 수 있다. 다만, 그 보상금 등의 지급 또는 인도 전에 압류하여야 한다.`},124:{title:`상속인이 없는 경우 등의 특허권 소멸`,content:`①특허권의 상속이 개시된 때 상속인이 없는 경우에는 그 특허권은 소 멸된다.

② 청산절차가 진행 중인 법인의 특허권은 법인의 청산종결등기일(청산종결등기가 되었더라도 청산사무가 사실상 끝나지 아니한 경우에는 청산사무가 사실상 끝난 날과 청산종결등기일부터 6개월이 지난 날 중 빠른 날로 한다. 이 하 이 항에서 같다)까지 그 특허권의 이전등록을 하지 아니한 경우에는 청산종결등기일의 다음 날에 소멸한다.<신 설 2016.

2. 29.>`},125:{title:`특허실시보고`,content:`지식재산처장은 특허권자ㆍ전용실시권자 또는 통상실시권자에게 특허발명의 실시 여부 및 그 규모 등에 관하여 보고하게 할 수 있다.`},"125의2":{title:`대가 및 보상금액에 대한 집행권원`,content:`이 법에 따라 지식재산처장이 정한 대가와 보상금액에 관하여 확정된 결정은 집행력 있는 집행권원(執行權原)과 같은 효력을 가진다. 이 경우 집행력 있는 정본은 지식재산처 소속 공무원 이 부여한다.`},126:{title:`권리침해에 대한 금지청구권 등`,content:`① 특허권자 또는 전용실시권자는 자기의 권리를 침해한 자 또는 침해할 우 려가 있는 자에 대하여 그 침해의 금지 또는 예방을 청구할 수 있다.

② 특허권자 또는 전용실시권자가 제1항에 따른 청구를 할 때에는 침해행위를 조성한 물건(물건을 생산하는 방법의 발명인 경우에는 침해행위로 생긴 물건을 포함한다)의 폐기, 침해행위에 제공된 설비의 제거, 그 밖에 침해의 예방 에 필요한 행위를 청구할 수 있다.`},"126의2":{title:`구체적 행위의 내용ㆍ방식ㆍ형태 제시 의무`,content:`① 특허권 또는 전용실시권 침해소송에서 특허권자 또는 전용 실시권자가 주장하는 침해행위의 구체적 내용ㆍ방식ㆍ형태를 부인하는 당사자는 자기의 구체적 행위의 내용ㆍ방식 ㆍ형태를 제시하여야 한다.

② 법원은 당사자가 제1항에도 불구하고 자기의 구체적 행위의 내용ㆍ방식ㆍ형태를 제시할 수 없는 정당한 이유가 있다고 주장하는 경우에는 그 주장의 당부를 판단하기 위하여 그 당사자에게 자료의 제출을 명할 수 있다. 다만, 그 자료의 소지자가 그 자료의 제출을 거절할 정당한 이유가 있으면 그러하지 아니하다.

③ 제2항에 따른 자료제출명령에 관하여는 제132조제2항 및 제3항을 준용한다. 이 경우 제132조제3항 중 “침해의 증명 또는 손해액의 산정에 반드시 필요한 때”를 “구체적 행위의 내용ㆍ방식ㆍ형태를 제시할 수 없는 정당한 이유 의 유무 판단에 반드시 필요한 때”로 한다.

④ 당사자가 정당한 이유 없이 자기의 구체적 행위의 내용ㆍ방식ㆍ형태를 제시하지 않는 경우에는 법원은 특허권 자 또는 전용실시권자가 주장하는 침해행위의 구체적 내용ㆍ방식ㆍ형태를 진실한 것으로 인정할 수 있다.<개정 2025. 5. 27.>`},127:{title:`침해로 보는 행위`,content:`다음 각 호의 구분에 따른 행위를 업으로서 하는 경우에는 특허권 또는 전용실시권을 침해 한 것으로 본다.

1. 특허가 물건의 발명인 경우: 그 물건의 생산에만 사용하는 물건을 생산ㆍ양도ㆍ대여ㆍ수출 또는 수입하거나 그 물건의 양도 또는 대여의 청약을 하는 행위

2. 특허가 방법의 발명인 경우: 그 방법의 실시에만 사용하는 물건을 생산ㆍ양도ㆍ대여ㆍ수출 또는 수입하거나 그 물건의 양도 또는 대여의 청약을 하는 행위`},128:{title:`손해배상청구권 등`,content:`① 특허권자 또는 전용실시권자는 고의 또는 과실로 자기의 특허권 또는 전용실시권을 침 해한 자에 대하여 침해로 인하여 입은 손해의 배상을 청구할 수 있다.

② 제1항에 따라 손해배상을 청구하는 경우 그 권리를 침해한 자가 그 침해행위를 하게 한 물건을 양도하였을 때에 는 다음 각 호에 해당하는 금액의 합계액을 특허권자 또는 전용실시권자가 입은 손해액으로 할 수 있다.<개정 2020. 6. 9.>

1. 그 물건의 양도수량(특허권자 또는 전용실시권자가 그 침해행위 외의 사유로 판매할 수 없었던 사정이 있는 경우 에는 그 침해행위 외의 사유로 판매할 수 없었던 수량을 뺀 수량) 중 특허권자 또는 전용실시권자가 생산할 수 있 었던 물건의 수량에서 실제 판매한 물건의 수량을 뺀 수량을 넘지 않는 수량에 특허권자 또는 전용실시권자가 그 침해행위가 없었다면 판매할 수 있었던 물건의 단위수량당 이익액을 곱한 금액

2. 그 물건의 양도수량 중 특허권자 또는 전용실시권자가 생산할 수 있었던 물건의 수량에서 실제 판매한 물건의 수 량을 뺀 수량을 넘는 수량 또는 그 침해행위 외의 사유로 판매할 수 없었던 수량이 있는 경우 이들 수량(특허권자 또는 전용실시권자가 그 특허권자의 특허권에 대한 전용실시권의 설정, 통상실시권의 허락 또는 그 전용실시권자 의 전용실시권에 대한 통상실시권의 허락을 할 수 있었다고 인정되지 않는 경우에는 해당 수량을 뺀 수량)에 대 해서는 특허발명의 실시에 대하여 합리적으로 받을 수 있는 금액

③ 삭제<2020.

6. 9.>

④ 제1항에 따라 손해배상을 청구하는 경우 특허권 또는 전용실시권을 침해한 자가 그 침해행위로 인하여 얻은 이 익액을 특허권자 또는 전용실시권자가 입은 손해액으로 추정한다.

⑤ 제1항에 따라 손해배상을 청구하는 경우 그 특허발명의 실시에 대하여 합리적으로 받을 수 있는 금액을 특허권 자 또는 전용실시권자가 입은 손해액으로 하여 손해배상을 청구할 수 있다.

⑥ 제5항에도 불구하고 손해액이 같은 항에 따른 금액을 초과하는 경우에는 그 초과액에 대해서도 손해배상을 청구 할 수 있다. 이 경우 특허권 또는 전용실시권을 침해한 자에게 고의 또는 중대한 과실이 없을 때에는 법원은 손해배 상액을 산정할 때 그 사실을 고려할 수 있다.

⑦ 법원은 특허권 또는 전용실시권의 침해에 관한 소송에서 손해가 발생된 것은 인정되나 그 손해액을 증명하기 위 하여 필요한 사실을 증명하는 것이 해당 사실의 성질상 극히 곤란한 경우에는 제2항부터 제6항까지의 규정에도 불 구하고 변론 전체의 취지와 증거조사의 결과에 기초하여 상당한 손해액을 인정할 수 있다.

⑧ 법원은 타인의 특허권 또는 전용실시권을 침해한 행위가 고의적인 것으로 인정되는 경우에는 제1항에도 불구하 고 제2항부터 제7항까지의 규정에 따라 손해로 인정된 금액의 5배를 넘지 아니하는 범위에서 배상액을 정할 수 있

다.

⑨ 제8항에 따른 배상액을 판단할 때에는 다음 각 호의 사항을 고려하여야 한다.

1. 침해행위를 한 자의 우월적 지위 여부

2. 고의 또는 손해 발생의 우려를 인식한 정도

3. 침해행위로 인하여 특허권자 및 전용실시권자가 입은 피해규모

4. 침해행위로 인하여 침해한 자가 얻은 경제적 이익

5. 침해행위의 기간ㆍ횟수 등

6. 침해행위에 따른 벌금

7. 침해행위를 한 자의 재산상태

8. 침해행위를 한 자의 피해구제 노력의 정도`},"128의2":{title:`감정사항 설명의무`,content:`특허권 또는 전용실시권 침해소송에서 법원이 침해로 인한 손해액의 산정을 위하여 감 정을 명한 때에는 당사자는 감정인에게 감정에 필요한 사항을 설명하여야 한다.`},129:{title:`생산방법의 추정`,content:`물건을 생산하는 방법의 발명에 관하여 특허가 된 경우에 그 물건과 동일한 물건은 그 특허 된 방법에 의하여 생산된 것으로 추정한다. 다만, 그 물건이 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.

1. 특허출원 전에 국내에서 공지되었거나 공연히 실시된 물건

2. 특허출원 전에 국내 또는 국외에서 반포된 간행물에 게재되었거나 전기통신회선을 통하여 공중이 이용할 수 있 는 물건`},130:{title:`과실의 추정`,content:`타인의 특허권 또는 전용실시권을 침해한 자는 그 침해행위에 대하여 과실이 있는 것으로 추정 한다.`},131:{title:`특허권자 등의 신용회복`,content:`법원은 고의나 과실로 특허권 또는 전용실시권을 침해함으로써 특허권자 또는 전용 실시권자의 업무상 신용을 떨어뜨린 자에 대해서는 특허권자 또는 전용실시권자의 청구에 의하여 손해배상을 갈음 하여 또는 손해배상과 함께 특허권자 또는 전용실시권자의 업무상 신용회복을 위하여 필요한 조치를 명할 수 있다.`},132:{title:`자료의 제출`,content:`①법원은 특허권 또는 전용실시권 침해소송에서 당사자의 신청에 의하여 상대방 당사자에게 해 당 침해의 증명 또는 침해로 인한 손해액의 산정에 필요한 자료의 제출을 명할 수 있다. 다만, 그 자료의 소지자가 그 자료의 제출을 거절할 정당한 이유가 있으면 그러하지 아니하다.

② 법원은 자료의 소지자가 제1항에 따른 제출을 거부할 정당한 이유가 있다고 주장하는 경우에는 그 주장의 당부 를 판단하기 위하여 자료의 제시를 명할 수 있다. 이 경우 법원은 그 자료를 다른 사람이 보게 하여서는 아니 된다.

③ 제1항에 따라 제출되어야 할 자료가 영업비밀(「부정경쟁방지 및 영업비밀보호에 관한 법률」 제2조제2호에 따른 영업비밀을 말한다. 이하 같다)에 해당하나 침해의 증명 또는 손해액의 산정에 반드시 필요한 때에는 제1항 단서에 따른 정당한 이유로 보지 아니한다. 이 경우 법원은 제출명령의 목적 내에서 열람할 수 있는 범위 또는 열람할 수 있는 사람을 지정하여야 한다.

④ 당사자가 정당한 이유 없이 자료제출명령에 따르지 아니한 때에는 법원은 자료의 기재에 대한 상대방의 주장을 진실한 것으로 인정할 수 있다.

⑤ 제4항에 해당하는 경우 자료의 제출을 신청한 당사자가 자료의 기재에 관하여 구체적으로 주장하기에 현저히 곤 란한 사정이 있고 자료로 증명할 사실을 다른 증거로 증명하는 것을 기대하기도 어려운 때에는 법원은 그 당사자가 자료의 기재에 의하여 증명하고자 하는 사실에 관한 주장을 진실한 것으로 인정할 수 있다.`},"132의2":{title:`특허취소신청`,content:`① 누구든지 특허권의 설정등록일부터 등록공고일 후 6개월이 되는 날까지 그 특허가 다음 각 호의 어느 하나에 해당하는 경우에는 특허심판원장에게 특허취소신청을 할 수 있다. 이 경우 청구범위의 청구항 이 둘 이상인 경우에는 청구항마다 특허취소신청을 할 수 있다.

1. 제29조(같은 조 제1항제1호에 해당하는 경우와 같은 호에 해당하는 발명에 의하여 쉽게 발명할 수 있는 경우는 제외한다)에 위반된 경우

2. 제36조제1항부터 제3항까지의 규정에 위반된 경우

② 제1항에도 불구하고 특허공보에 게재된 제87조제3항제7호에 따른 선행기술에 기초한 이유로는 특허취소신청을 할 수 없다.`},"132의3":{title:`특허취소신청절차에서의 특허의 정정`,content:`① 특허취소신청절차가 진행 중인 특허에 대한 특허권자는 제136조 제1항 각 호의 어느 하나에 해당하는 경우에만 제132조의13제2항에 따라 지정된 기간에 특허발명의 명세서 또는 도 면에 대하여 정정청구를 할 수 있다.

② 제1항에 따른 정정청구를 하였을 때에는 해당 특허취소신청절차에서 그 정정청구 전에 한 정정청구는 취하된 것 으로 본다.

③ 제1항에 따른 정정청구에 관하여는 제136조제3항부터 제6항까지, 제8항, 제10항부터 제13항까지, 제139조제3항 및 제140조제1항ㆍ제2항ㆍ제5항을 준용한다. 이 경우 제136조제11항 중 “제162조제3항에 따른 심리의 종결이 통 지되기 전(같은 조 제4항에 따라 심리가 재개된 경우에는 그 후 다시 같은 조 제3항에 따른 심리의 종결이 통지되기 전)에”는 “제132조의13제2항 또는 제136조제6항에 따라 지정된 기간에”로 본다.

④ 제1항에 따른 정정청구는 다음 각 호의 어느 하나에 해당하는 기간에만 취하할 수 있다.

1. 제1항에 따라 정정을 청구할 수 있도록 지정된 기간과 그 기간의 만료일부터 1개월 이내의 기간

2. 제3항에서 준용하는 제136조제6항에 따라 지정된 기간

⑤ 제3항을 적용할 때 제132조의2에 따라 특허취소신청이 된 청구항을 정정하는 경우에는 제136조제5항을 준용하 지 아니한다.`},"132의4":{title:`특허취소신청의 방식 등`,content:`① 특허취소신청을 하려는 자는 다음 각 호의 사항을 적은 특허취소신청서를 특 허심판원장에게 제출하여야 한다.

1. 신청인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법인(유한)인 경 우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

3. 특허취소신청의 대상이 되는 특허의 표시

4. 특허취소신청의 이유 및 증거의 표시

② 제1항에 따라 제출된 특허취소신청서의 보정은 그 요지를 변경할 수 없다. 다만, 제132조의2제1항에 따른 기간 (그 기간 중 제132조의13제2항에 따른 통지가 있는 경우에는 통지한 때까지로 한정한다)에 제1항제4호의 사항을 보정하는 경우에는 그러하지 아니하다.

③ 심판장은 특허취소신청이 있으면 그 신청서의 부본을 특허권자에게 송달하여야 한다.

④ 심판장은 특허취소신청이 있으면 그 사실을 해당 특허권의 전용실시권자나 그 밖에 그 특허에 관하여 등록을 한 권리를 가지는 자에게 알려야 한다.`},"132의5":{title:`특허취소신청서 등의 보정ㆍ각하`,content:`① 심판장은 다음 각 호의 어느 하나에 해당하는 경우에는 기간을 정하 여 그 보정을 명하여야 한다.

1. 특허취소신청서가 제132조의4제1항(같은 항 제4호는 제외한다)을 위반한 경우

2. 특허취소신청에 관한 절차가 다음 각 목의 어느 하나에 해당하는 경우

가. 제3조제1항 또는 제6조를 위반한 경우

나. 이 법 또는 이 법에 따른 명령으로 정하는 방식을 위반한 경우

다. 제82조에 따라 내야 할 수수료를 내지 아니한 경우

② 심판장은 제1항에 따른 보정명령을 받은 자가 지정된 기간에 보정을 하지 아니하거나 보정한 사항이 제132조의 4제2항을 위반한 경우에는 특허취소신청서 또는 해당 절차와 관련된 청구 또는 신청 등을 결정으로 각하하여야 한

다.

③ 제2항에 따른 각하결정은 서면으로 하여야 하며, 그 이유를 붙여야 한다.`},"132의6":{title:`보정할 수 없는 특허취소신청의 각하결정`,content:`① 제132조의7제1항에 따른 합의체는 부적법한 특허취소신청으 로서 그 흠을 보정할 수 없을 때에는 제132조의4제3항에도 불구하고 특허권자에게 특허취소신청서의 부본을 송달 하지 아니하고, 결정으로 그 특허취소신청을 각하할 수 있다.

② 제1항에 따른 각하결정에 대해서는 불복할 수 없다.`},"132의7":{title:`특허취소신청의 합의체 등`,content:`① 특허취소신청은 3명 또는 5명의 심판관으로 구성되는 합의체가 심리하여 결정한다.

② 제1항의 합의체 및 이를 구성하는 심판관에 관하여는 제143조부터 제145조까지, 제146조제2항ㆍ제3항, 제 148조부터 제153조까지 및 제153조의2를 준용한다. 이 경우 제148조제6호 중 “심결”은 “특허취소결정”으로 본다.`},"132의8":{title:`심리의 방식 등`,content:`① 특허취소신청에 관한 심리는 서면으로 한다.

② 공유인 특허권의 특허권자 중 1인에게 특허취소신청절차의 중단 또는 중지의 원인이 있으면 모두에게 그 효력이 발생한다.`},"132의9":{title:`참가`,content:`① 특허권에 관하여 권리를 가진 자 또는 이해관계를 가진 자는 특허취소신청에 대한 결정이 있을 때 까지 특허권자를 보조하기 위하여 그 심리에 참가할 수 있다.

② 제1항의 참가에 관하여는 제155조제4항ㆍ제5항 및 제156조를 준용한다.`},"132의10":{title:`특허취소신청의 심리에서의 직권심리`,content:`① 심판관은 특허취소신청에 관하여 특허취소신청인, 특허권자 또 는 참가인이 제출하지 아니한 이유에 대해서도 심리할 수 있다.

② 심판관은 특허취소신청에 관하여 특허취소신청인이 신청하지 아니한 청구항에 대해서는 심리할 수 없다.`},"132의11":{title:`특허취소신청의 병합 또는 분리`,content:`① 심판관 합의체는 하나의 특허권에 관한 둘 이상의 특허취소신청에 대 해서는 특별한 사정이 있는 경우를 제외하고는 그 심리를 병합하여 결정하여야 한다.

② 심판관 합의체는 특허취소신청의 심리에 필요하다고 인정하는 경우에는 제1항에 따라 병합된 심리를 분리할 수 있다.`},"132의12":{title:`특허취소신청의 취하`,content:`① 특허취소신청은 제132조의14제2항에 따라 결정등본이 송달되기 전까지만 취하 할 수 있다. 다만, 제132조의13제2항에 따라 특허권자 및 참가인에게 특허의 취소이유가 통지된 후에는 취하할 수 없다.

② 둘 이상의 청구항에 관하여 특허취소신청이 있는 경우에는 청구항마다 취하할 수 있다.

③ 제1항 또는 제2항에 따른 취하가 있으면 그 특허취소신청 또는 그 청구항에 대한 특허취소신청은 처음부터 없었 던 것으로 본다.`},"132의13":{title:`특허취소신청에 대한 결정`,content:`① 심판관 합의체는 특허취소신청이 이유 있다고 인정되는 때에는 그 특허를 취소한다는 취지의 결정(이하 “특허취소결정”이라 한다)을 하여야 한다.

② 심판장은 특허취소결정을 하려는 때에는 특허권자 및 참가인에게 특허의 취소이유를 통지하고 기간을 정하여 의견서를 제출할 기회를 주어야 한다.

③ 특허취소결정이 확정된 때에는 그 특허권은 처음부터 없었던 것으로 본다.

④ 심판관 합의체는 특허취소신청이 제132조의2제1항 각 호의 어느 하나에 해당하지 아니하거나 같은 조 제2항을 위반한 것으로 인정되는 경우에는 결정으로 그 특허취소신청을 기각하여야 한다.

⑤ 제4항에 따른 기각결정에 대해서는 불복할 수 없다.`},"132의14":{title:`특허취소신청의 결정 방식`,content:`① 특허취소신청에 대한 결정은 다음 각 호의 사항을 적은 서면으로 하여야 하며, 결정을 한 심판관은 그 서면에 기명날인하여야 한다.

1. 특허취소신청사건의 번호

2. 특허취소신청인, 특허권자 및 참가인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

3. 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법인(유한)인 경 우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

4. 결정에 관련된 특허의 표시

5. 결정의 결론 및 이유

6. 결정연월일

② 심판장은 특허취소신청에 대한 결정이 있는 때에는 그 결정의 등본을 특허취소신청인, 특허권자, 참가인 및 그 특허취소신청에 대한 심리에 참가를 신청하였으나 그 신청이 거부된 자에게 송달하여야 한다.`},"132의15":{title:`심판규정의 특허취소신청에의 준용`,content:`특허취소신청의 심리ㆍ결정에 관하여는 제147조제3항, 제157조, 제 158조, 제164조, 제165조제3항부터 제6항까지 및 제166조를 준용한다.`},"132의16":{title:`특허심판원`,content:`① 특허ㆍ실용신안에 관한 취소신청, 특허ㆍ실용신안ㆍ디자인ㆍ상표에 관한 심판과 재심 및 이에 관한 조사ㆍ연구 사무를 관장하게 하기 위하여 지식재산처장 소속으로 특허심판원을 둔다. <개정 2016. 2. 29., 2025. 10. 1.>

② 특허심판원에 원장과 심판관을 둔다.

③ 특허심판원에 제1항에 따른 조사ㆍ연구와 그 밖의 사무를 담당하는 인력을 둘 수 있다.

④ 특허심판원의 조직과 정원 및 운영에 필요한 사항은 대통령령으로 정한다.`},"132의17":{title:`특허거절결정 등에 대한 심판`,content:`특허거절결정 또는 특허권의 존속기간의 연장등록거절결정을 받은 자가 결정에 불복할 때에는 그 결정등본을 송달받은 날부터 3개월 이내에 심판을 청구할 수 있다.`},133:{title:`특허의 무효심판`,content:`① 이해관계인(제2호 본문의 경우에는 특허를 받을 수 있는 권리를 가진 자만 해당한다) 또 는 심사관은 특허가 다음 각 호의 어느 하나에 해당하는 경우에는 무효심판을 청구할 수 있다. 이 경우 청구범위의 청구항이 둘 이상인 경우에는 청구항마다 청구할 수 있다.

1. 제25조, 제29조, 제32조, 제36조제1항부터 제3항까지, 제42조제3항제1호 또는 같은 조 제4항을 위반한 경우

2. 제33조제1항 본문에 따른 특허를 받을 수 있는 권리를 가지지 아니하거나 제44조를 위반한 경우. 다만, 제99조의 2제2항에 따라 이전등록된 경우에는 제외한다.

3. 제33조제1항 단서에 따라 특허를 받을 수 없는 경우

4. 특허된 후 그 특허권자가 제25조에 따라 특허권을 누릴 수 없는 자로 되거나 그 특허가 조약을 위반한 경우

5. 조약을 위반하여 특허를 받을 수 없는 경우

6. 제47조제2항 전단에 따른 범위를 벗어난 보정인 경우

7. 제52조제1항에 따른 범위를 벗어난 분할출원 또는 제52조의2제1항 각 호 외의 부분 전단에 따른 범위를 벗어난 분리출원인 경우

8. 제53조제1항에 따른 범위를 벗어난 변경출원인 경우

② 제1항에 따른 심판은 특허권이 소멸된 후에도 청구할 수 있다.

③ 특허를 무효로 한다는 심결이 확정된 경우에는 그 특허권은 처음부터 없었던 것으로 본다. 다만, 제1항제4호에 따라 특허를 무효로 한다는 심결이 확정된 경우에는 특허권은 그 특허가 같은 호에 해당하게 된 때부터 없었던 것 으로 본다.

④ 심판장은 제1항에 따른 심판이 청구된 경우에는 그 취지를 해당 특허권의 전용실시권자나 그 밖에 특허에 관하 여 등록을 한 권리를 가지는 자에게 알려야 한다.`},"133의2":{title:`특허무효심판절차에서의 특허의 정정`,content:`① 제133조제1항에 따른 심판의 피청구인은 제136조제1항 각 호의 어느 하나에 해당하는 경우에만 제147조제1항 또는 제159조제1항 후단에 따라 지정된 기간에 특허발명의 명세서 또는 도면에 대하여 정정청구를 할 수 있다. 이 경우 심판장이 제147조제1항에 따라 지정된 기간 후에도 청구인이 증거를 제출하거나 새로운 무효사유를 주장함으로 인하여 정정청구를 허용할 필요가 있다고 인정하는 경우에는 기 간을 정하여 정정청구를 하게 할 수 있다.

② 제1항에 따른 정정청구를 하였을 때에는 해당 무효심판절차에서 그 정정청구 전에 한 정정청구는 취하된 것으로 본다.

③ 심판장은 제1항에 따른 정정청구가 있을 때에는 그 청구서의 부본을 제133조제1항에 따른 심판의 청구인에게 송달하여야 한다.

④ 제1항에 따른 정정청구에 관하여는 제136조제3항부터 제6항까지, 제8항 및 제10항부터 제13항까지, 제139조제 3항 및 제140조제1항ㆍ제2항ㆍ제5항을 준용한다. 이 경우 제136조제11항 중 “제162조제3항에 따른 심리의 종결이 통지되기 전(같은 조 제4항에 따라 심리가 재개된 경우에는 그 후 다시 같은 조 제3항에 따른 심리의 종결이 통지되 기 전)에”는 “제133조의2제1항 또는 제136조제6항에 따라 지정된 기간에”로 본다.

⑤ 제1항에 따른 정정청구는 다음 각 호의 어느 하나에 해당하는 기간에만 취하할 수 있다.

1. 제1항에 따라 정정을 청구할 수 있도록 지정된 기간과 그 기간의 만료일부터 1개월 이내의 기간

2. 제4항에서 준용하는 제136조제6항에 따라 지정된 기간

⑥ 제4항을 적용할 때 제133조제1항에 따른 특허무효심판이 청구된 청구항을 정정하는 경우에는 제136조제5항을 준용하지 아니한다.`},134:{title:`특허권 존속기간의 연장등록의 무효심판`,content:`① 이해관계인 또는 심사관은 제92조에 따른 특허권의 존속기간의 연장등록이 다음 각 호의 어느 하나에 해당하는 경우에는 무효심판을 청구할 수 있다.

1. 특허발명을 실시하기 위하여 제89조에 따른 허가등을 받을 필요가 없는 출원에 대하여 연장등록이 된 경우

2. 특허권자 또는 그 특허권의 전용실시권 또는 등록된 통상실시권을 가진 자가 제89조에 따른 허가등을 받지 아니 한 출원에 대하여 연장등록이 된 경우

3. 연장등록에 따라 연장된 기간이 제89조에 따라 인정되는 연장의 기간을 초과하는 경우

4. 해당 특허권자가 아닌 자의 출원에 대하여 연장등록이 된 경우

5. 제90조제3항을 위반한 출원에 대하여 연장등록이 된 경우

6. 제90조제7항을 위반하여 하나의 허가등에 대하여 둘 이상의 특허권의 존속기간이 연장등록된 경우

② 이해관계인 또는 심사관은 제92조의5에 따른 특허권의 존속기간의 연장등록이 다음 각 호의 어느 하나에 해당 하면 무효심판을 청구할 수 있다.

1. 연장등록에 따라 연장된 기간이 제92조의2에 따라 인정되는 연장의 기간을 초과한 경우

2. 해당 특허권자가 아닌 자의 출원에 대하여 연장등록이 된 경우

3. 제92조의3제3항을 위반한 출원에 대하여 연장등록이 된 경우

③ 제1항 및 제2항에 따른 심판의 청구에 관하여는 제133조제2항 및 제4항을 준용한다.

④ 연장등록을 무효로 한다는 심결이 확정된 경우에는 그 연장등록에 따른 존속기간의 연장은 처음부터 없었던 것 으로 본다. 다만, 연장등록이 다음 각 호의 어느 하나에 해당하는 경우에는 해당 기간에 대해서만 연장이 없었던 것 으로 본다.

1. 연장등록이 제1항제3호에 해당하여 무효로 된 경우: 제89조에 따라 인정되는 연장의 기간을 초과하여 연장된 기 간

2. 연장등록이 제2항제1호에 해당하여 무효로 된 경우: 제92조의2에 따라 인정되는 연장의 기간을 초과하여 연장된 기간

⑤ 연장등록이 제1항제6호에 해당하여 무효로 한다는 심결이 확정된 경우에는 그 특허권의 존속기간의 연장등록출 원은 처음부터 없었던 것으로 본다.`},135:{title:`권리범위 확인심판`,content:`① 특허권자 또는 전용실시권자는 자신의 특허발명의 보호범위를 확인하기 위하여 특허 권의 권리범위 확인심판을 청구할 수 있다.

② 이해관계인은 타인의 특허발명의 보호범위를 확인하기 위하여 특허권의 권리범위 확인심판을 청구할 수 있다.

③ 제1항 또는 제2항에 따른 특허권의 권리범위 확인심판을 청구하는 경우에 청구범위의 청구항이 둘 이상인 경우 에는 청구항마다 청구할 수 있다.`},136:{title:`정정심판`,content:`① 특허권자는 다음 각 호의 어느 하나에 해당하는 경우에는 특허발명의 명세서 또는 도면에 대하 여 정정심판을 청구할 수 있다.

1. 청구범위를 감축하는 경우

2. 잘못 기재된 사항을 정정하는 경우

3. 분명하지 아니하게 기재된 사항을 명확하게 하는 경우

② 제1항에도 불구하고 다음 각 호의 어느 하나에 해당하는 기간에는 정정심판을 청구할 수 없다.<신설 2016. 2. 29.>

1. 특허취소신청이 특허심판원에 계속 중인 때부터 그 결정이 확정될 때까지의 기간. 다만, 특허무효심판의 심결 또 는 정정의 무효심판의 심결에 대한 소가 특허법원에 계속 중인 경우에는 특허법원에서 변론이 종결(변론 없이 한 판결의 경우에는 판결의 선고를 말한다)된 날까지 정정심판을 청구할 수 있다.

2. 특허무효심판 또는 정정의 무효심판이 특허심판원에 계속 중인 기간

③ 제1항에 따른 명세서 또는 도면의 정정은 특허발명의 명세서 또는 도면에 기재된 사항의 범위에서 할 수 있다. 다만, 제1항제2호에 따라 잘못된 기재를 정정하는 경우에는 출원서에 최초로 첨부된 명세서 또는 도면에 기재된 사 항의 범위에서 할 수 있다.

④ 제1항에 따른 명세서 또는 도면의 정정은 청구범위를 실질적으로 확장하거나 변경할 수 없다.<개정 2016. 2. 29.>

⑤ 제1항에 따른 정정 중 같은 항 제1호 또는 제2호에 해당하는 정정은 정정 후의 청구범위에 적혀 있는 사항이 특 허출원을 하였을 때에 특허를 받을 수 있는 것이어야 한다.

⑥ 심판관은 제1항에 따른 심판청구가 다음 각 호의 어느 하나에 해당한다고 인정하는 경우에는 청구인에게 그 이 유를 통지하고, 기간을 정하여 의견서를 제출할 수 있는 기회를 주어야 한다.

1. 제1항 각 호의 어느 하나에 해당하지 아니한 경우

2. 제3항에 따른 범위를 벗어난 경우

3. 제4항 또는 제5항을 위반한 경우

⑦ 제1항에 따른 정정심판은 특허권이 소멸된 후에도 청구할 수 있다. 다만, 특허취소결정이 확정되거나 특허를 무 효(제133조제1항제4호에 의한 무효는 제외한다)로 한다는 심결이 확정된 후에는 그러하지 아니하다.<개정 2016. 2. 29.>

⑧ 특허권자는 전용실시권자, 질권자와 제100조제4항ㆍ제102조제1항 및 「발명진흥법」 제10조제1항에 따른 통상 실시권을 갖는 자의 동의를 받아야만 제1항에 따른 정정심판을 청구할 수 있다. 다만, 특허권자가 정정심판을 청구 하기 위하여 동의를 받아야 하는 자가 무효심판을 청구한 경우에는 그러하지 아니하다.

⑨ 제1항에 따른 정정심판에는 제147조제1항ㆍ제2항, 제155조 및 제156조를 적용하지 아니한다.<신설 2016. 2. 29.>

⑩ 특허발명의 명세서 또는 도면에 대하여 정정을 한다는 심결이 확정되었을 때에는 그 정정 후의 명세서 또는 도 면에 따라 특허출원, 출원공개, 특허결정 또는 심결 및 특허권의 설정등록이 된 것으로 본다.

⑪ 청구인은 제162조제3항에 따른 심리의 종결이 통지되기 전(같은 조 제4항에 따라 심리가 재개된 경우에는 그 후 다시 같은 조 제3항에 따른 심리의 종결이 통지되기 전)에 제140조제5항에 따른 심판청구서에 첨부된 정정한 명세 서 또는 도면에 대하여 보정할 수 있다.

⑫ 특허발명의 명세서 또는 도면에 대한 정정을 한다는 심결이 있는 경우 특허심판원장은 그 내용을 지식재산처장 에게 알려야 한다.

⑬ 지식재산처장은 제12항에 따른 통보가 있으면 이를 특허공보에 게재하여야 한다.<개정 2016. 2. 29., 2025. 10. 1.>`},137:{title:`정정의 무효심판`,content:`① 이해관계인 또는 심사관은 제132조의3제1항, 제133조의2제1항, 제136조제1항 또는 이 조 제3항에 따른 특허발명의 명세서 또는 도면에 대한 정정이 다음 각 호의 어느 하나의 규정을 위반한 경우에는 정 정의 무효심판을 청구할 수 있다.

1. 제136조제1항 각 호의 어느 하나의 규정

2. 제136조제3항부터 제5항까지의 규정(제132조의3제3항 또는 제133조의2제4항에 따라 준용되는 경우를 포함한다 )

② 제1항에 따른 심판청구에 관하여는 제133조제2항 및 제4항을 준용한다.

③ 제1항에 따른 무효심판의 피청구인은 제136조제1항 각 호의 어느 하나에 해당하는 경우에만 제147조제1항 또 는 제159조제1항 후단에 따라 지정된 기간에 특허발명의 명세서 또는 도면의 정정을 청구할 수 있다. 이 경우 심판 장이 제147조제1항에 따라 지정된 기간 후에도 청구인이 증거를 제출하거나 새로운 무효사유를 주장함으로 인하여 정정의 청구를 허용할 필요가 있다고 인정하는 경우에는 기간을 정하여 정정청구를 하게 할 수 있다.<개정 2016. 2. 29.>

④ 제3항에 따른 정정청구에 관하여는 제133조의2제2항부터 제5항까지의 규정을 준용한다. 이 경우 제133조의2제 3항 중 “제133조제1항”은 “제137조제1항”으로 보고, 같은 조 제4항 후단 중 “제133조의2제1항”을 “제137조제3항 ”으로 보며, 같은 조 제5항 각 호 외의 부분 및 같은 항 제1호 중 “제1항”을 각각 “제3항”으로 본다.<개정 2016. 2. 29.>

⑤ 제1항에 따라 정정을 무효로 한다는 심결이 확정되었을 때에는 그 정정은 처음부터 없었던 것으로 본다.`},138:{title:`통상실시권 허락의 심판`,content:`① 특허권자, 전용실시권자 또는 통상실시권자는 해당 특허발명이 제98조에 해당하 여 실시의 허락을 받으려는 경우에 그 타인이 정당한 이유 없이 허락하지 아니하거나 그 타인의 허락을 받을 수 없 을 때에는 자기의 특허발명의 실시에 필요한 범위에서 통상실시권 허락의 심판을 청구할 수 있다.

② 제1항에 따른 청구가 있는 경우에 그 특허발명이 그 특허출원일 전에 출원된 타인의 특허발명 또는 등록실용신 안과 비교하여 상당한 경제적 가치가 있는 중요한 기술적 진보를 가져오는 것이 아니면 통상실시권을 허락하여서 는 아니 된다.

③ 제1항에 따른 심판에 따라 통상실시권을 허락한 자가 그 통상실시권을 허락받은 자의 특허발명을 실시할 필요가 있는 경우 그 통상실시권을 허락받은 자가 실시를 허락하지 아니하거나 실시의 허락을 받을 수 없을 때에는 통상실 시권을 허락받아 실시하려는 특허발명의 범위에서 통상실시권 허락의 심판을 청구할 수 있다.

④ 제1항 및 제3항에 따라 통상실시권을 허락받은 자는 특허권자, 실용신안권자, 디자인권자 또는 그 전용실시권자 에게 대가를 지급하여야 한다. 다만, 자기가 책임질 수 없는 사유로 지급할 수 없는 경우에는 그 대가를 공탁하여야 한다.

⑤ 제4항에 따른 통상실시권자는 그 대가를 지급하지 아니하거나 공탁을 하지 아니하면 그 특허발명, 등록실용신안 또는 등록디자인이나 이와 유사한 디자인을 실시할 수 없다.`},139:{title:`공동심판의 청구 등`,content:`① 동일한 특허권에 관하여 제133조제1항, 제134조제1항ㆍ제2항 또는 제137조제1항의 무효심판이나 제135조제1항ㆍ제2항의 권리범위 확인심판을 청구하는 자가 2인 이상이면 모두가 공동으로 심판을 청구할 수 있다.

② 공유인 특허권의 특허권자에 대하여 심판을 청구할 때에는 공유자 모두를 피청구인으로 하여야 한다.

③ 특허권 또는 특허를 받을 수 있는 권리의 공유자가 그 공유인 권리에 관하여 심판을 청구할 때에는 공유자 모두 가 공동으로 청구하여야 한다.

④ 제1항 또는 제3항에 따른 청구인이나 제2항에 따른 피청구인 중 1인에게 심판절차의 중단 또는 중지의 원인이 있으면 모두에게 그 효력이 발생한다.`},"139의2":{title:`국선대리인`,content:`① 특허심판원장은 총리령으로 정하는 요건을 갖춘 심판 당사자의 신청에 따라 대리인(이하 “국선대리인”이라 한다)을 선임하여 줄 수 있다. 다만, 심판청구가 이유 없음이 명백하거나 권리의 남용이라고 인정 되는 경우에는 그러하지 아니하다.

② 국선대리인이 선임된 당사자에 대하여 심판절차와 관련된 수수료를 감면할 수 있다.

③ 국선대리인의 신청절차 및 수수료 감면 등 국선대리인 운영에 필요한 사항은 총리령으로 정한다.<개정 2025. 10. 1.>`},140:{title:`심판청구방식`,content:`① 심판을 청구하려는 자는 다음 각 호의 사항을 적은 심판청구서를 특허심판원장에게 제출하 여야 한다.

1. 당사자의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법인(유한)인 경 우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

3. 심판사건의 표시

4. 청구의 취지 및 그 이유

② 제1항에 따라 제출된 심판청구서의 보정은 그 요지를 변경할 수 없다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그러하지 아니하다.

1. 제1항제1호에 따른 당사자 중 특허권자의 기재를 바로잡기 위하여 보정(특허권자를 추가하는 것을 포함하되, 청 구인이 특허권자인 경우에는 추가되는 특허권자의 동의가 있는 경우로 한정한다)하는 경우

2. 제1항제4호에 따른 청구의 이유를 보정하는 경우

3. 제135조제1항에 따른 권리범위 확인심판에서 심판청구서의 확인대상 발명(청구인이 주장하는 피청구인의 발명 을 말한다)의 설명서 또는 도면에 대하여 피청구인이 자신이 실제로 실시하고 있는 발명과 비교하여 다르다고 주 장하는 경우에 청구인이 피청구인의 실시 발명과 동일하게 하기 위하여 심판청구서의 확인대상 발명의 설명서 또는 도면을 보정하는 경우

③ 제135조제1항ㆍ제2항에 따른 권리범위 확인심판을 청구할 때에는 특허발명과 대비할 수 있는 설명서 및 필요한 도면을 첨부하여야 한다.

④ 제138조제1항에 따른 통상실시권 허락의 심판의 심판청구서에는 제1항 각 호의 사항 외에 다음 사항을 추가로 적어야 한다.

1. 실시하려는 자기의 특허의 번호 및 명칭

2. 실시되어야 할 타인의 특허발명ㆍ등록실용신안 또는 등록디자인의 번호ㆍ명칭 및 특허나 등록 연월일

3. 특허발명ㆍ등록실용신안 또는 등록디자인의 통상실시권의 범위ㆍ기간 및 대가

⑤ 제136조제1항에 따른 정정심판을 청구할 때에는 심판청구서에 정정한 명세서 또는 도면을 첨부하여야 한다.`},"140의2":{title:`특허거절결정에 대한 심판청구방식`,content:`① 제132조의17에 따라 특허거절결정에 대한 심판을 청구하려는 자는 제140조제1항에도 불구하고 다음 각 호의 사항을 적은 심판청구서를 특허심판원장에게 제출하여야 한다. <개정 2016. 2. 29.>

1. 청구인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법인(유한)인 경 우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

3. 출원일 및 출원번호

4. 발명의 명칭

5. 특허거절결정일

6. 심판사건의 표시

7. 청구의 취지 및 그 이유

② 제1항에 따라 제출된 심판청구서를 보정하는 경우에는 그 요지를 변경할 수 없다. 다만, 다음 각 호의 어느 하나 에 해당하는 경우에는 그러하지 아니하다.

1. 제1항제1호에 따른 청구인의 기재를 바로잡기 위하여 보정(청구인을 추가하는 것을 포함하되, 그 청구인의 동의 가 있는 경우로 한정한다)하는 경우

2. 제1항제7호에 따른 청구의 이유를 보정하는 경우`},141:{title:`심판청구서 등의 각하`,content:`① 심판장은 다음 각 호의 어느 하나에 해당하는 경우에는 기간을 정하여 그 보정을 명 하여야 한다. 다만, 보정할 사항이 경미하고 명확한 경우에는 직권으로 보정할 수 있다.

1. 심판청구서가 제140조제1항 및 제3항부터 제5항까지 또는 제140조의2제1항을 위반한 경우

2. 심판에 관한 절차가 다음 각 목의 어느 하나에 해당하는 경우

가. 제3조제1항 또는 제6조를 위반한 경우

나. 제82조에 따라 내야 할 수수료를 내지 아니한 경우

다. 이 법 또는 이 법에 따른 명령으로 정하는 방식을 위반한 경우

② 심판장은 제1항 본문에 따른 보정명령을 받은 자가 지정된 기간에 보정을 하지 아니하거나 보정한 사항이 제 140조제2항 또는 제140조의2제2항을 위반한 경우에는 심판청구서 또는 해당 절차와 관련된 청구나 신청 등을 결 정으로 각하하여야 한다.

③ 제2항에 따른 결정은 서면으로 하여야 하며, 그 이유를 붙여야 한다.

④ 심판장은 제1항 단서에 따라 직권보정을 하려면 그 직권보정 사항을 청구인에게 통지하여야 한다.<신설 2023. 9. 14.>

⑤ 청구인은 제1항 단서에 따른 직권보정 사항을 받아들일 수 없으면 직권보정 사항의 통지를 받은 날부터 7일 이 내에 그 직권보정 사항에 대한 의견서를 심판장에게 제출하여야 한다.

⑥ 청구인이 제5항에 따라 의견서를 제출한 경우에는 해당 직권보정 사항은 처음부터 없었던 것으로 본다.<신설 2023. 9. 14.>

⑦ 제1항 단서에 따른 직권보정이 명백히 잘못된 경우 그 직권보정은 처음부터 없었던 것으로 본다.<신설 2023. 9. 14.>`},142:{title:`보정할 수 없는 심판청구의 심결각하`,content:`부적법한 심판청구로서 그 흠을 보정할 수 없을 때에는 피청구인에게 답변서 제출의 기회를 주지 아니하고, 심결로써 그 청구를 각하할 수 있다.`},143:{title:`심판관`,content:`① 특허심판원장은 심판이 청구되면 심판관에게 심판하게 한다.

② 심판관의 자격은 대통령령으로 정한다.

③ 심판관은 직무상 독립하여 심판한다.`},144:{title:`심판관의 지정`,content:`① 특허심판원장은 각 심판사건에 대하여 제146조에 따른 합의체를 구성할 심판관을 지정하 여야 한다.

② 특허심판원장은 제1항의 심판관 중 심판에 관여하는 데 지장이 있는 사람이 있으면 다른 심판관에게 심판하게 할 수 있다.`},145:{title:`심판장`,content:`① 특허심판원장은 제144조제1항에 따라 지정된 심판관 중에서 1명을 심판장으로 지정하여야 한다.

② 심판장은 그 심판사건에 관한 사무를 총괄한다.`},146:{title:`심판의 합의체`,content:`① 심판은 3명 또는 5명의 심판관으로 구성되는 합의체가 한다.

② 제1항의 합의체의 합의는 과반수로 결정한다.

③ 심판의 합의는 공개하지 아니한다.`},147:{title:`답변서 제출 등`,content:`① 심판장은 심판이 청구되면 심판청구서 부본을 피청구인에게 송달하고, 기간을 정하여 답변 서를 제출할 수 있는 기회를 주어야 한다.

② 심판장은 제1항의 답변서를 받았을 때에는 그 부본을 청구인에게 송달하여야 한다.

③ 심판장은 심판에 관하여 당사자를 심문할 수 있다.`},148:{title:`심판관의 제척`,content:`심판관은 다음 각 호의 어느 하나에 해당하는 경우에는 그 심판에서 제척된다. <개정 2016. 2. 29.>

1. 심판관 또는 그 배우자이거나 배우자이었던 사람이 사건의 당사자, 참가인 또는 특허취소신청인인 경우

2. 심판관이 사건의 당사자, 참가인 또는 특허취소신청인의 친족이거나 친족이었던 경우

3. 심판관이 사건의 당사자, 참가인 또는 특허취소신청인의 법정대리인이거나 법정대리인이었던 경우

4. 심판관이 사건에 대한 증인, 감정인이거나 감정인이었던 경우

5. 심판관이 사건의 당사자, 참가인 또는 특허취소신청인의 대리인이거나 대리인이었던 경우

6. 심판관이 사건에 대하여 심사관 또는 심판관으로서 특허여부결정 또는 심결에 관여한 경우

7. 심판관이 사건에 관하여 직접 이해관계를 가진 경우`},149:{title:`제척신청`,content:`제148조에 따른 제척의 원인이 있으면 당사자 또는 참가인은 제척신청을 할 수 있다.`},150:{title:`심판관의 기피`,content:`① 심판관에게 공정한 심판을 기대하기 어려운 사정이 있으면 당사자 또는 참가인은 기피신청 을 할 수 있다.

② 당사자 또는 참가인은 사건에 대하여 심판관에게 서면 또는 구두로 진술을 한 후에는 기피신청을 할 수 없다. 다 만, 기피의 원인이 있는 것을 알지 못한 경우 또는 기피의 원인이 그 후에 발생한 경우에는 그러하지 아니하다.`},151:{title:`제척 또는 기피의 소명`,content:`① 제149조 또는 제150조에 따라 제척 또는 기피 신청을 하려는 자는 그 원인을 적은 서면을 특허심판원장에게 제출하여야 한다. 다만, 구술심리를 할 때에는 구술로 할 수 있다.

② 제척 또는 기피의 원인은 신청한 날부터 3일 이내에 소명하여야 한다.`},152:{title:`제척 또는 기피 신청에 관한 결정`,content:`① 제척 또는 기피 신청이 있으면 심판으로 결정하여야 한다.

② 제척 또는 기피 신청의 대상이 된 심판관은 그 제척 또는 기피에 대한 심판에 관여할 수 없다. 다만, 의견을 진술 할 수 있다.

③ 제1항에 따른 결정은 서면으로 하여야 하며, 그 이유를 붙여야 한다.

④ 제1항에 따른 결정에 대해서는 불복할 수 없다.`},153:{title:`심판절차의 중지`,content:`제척 또는 기피 신청이 있으면 그 신청에 대한 결정이 있을 때까지 심판절차를 중지하여야 한다. 다만, 긴급한 경우에는 그러하지 아니하다.`},"153의2":{title:`심판관의 회피`,content:`심판관이 제148조 또는 제150조에 해당하는 경우에는 특허심판원장의 허가를 받아 그 사 건에 대한 심판을 회피할 수 있다.`},154:{title:`심리 등`,content:`① 심판은 구술심리 또는 서면심리로 한다. 다만, 당사자가 구술심리를 신청하였을 때에는 서면심리 만으로 결정할 수 있다고 인정되는 경우 외에는 구술심리를 하여야 한다.

② 삭제<2001.

2. 3.>

③ 구술심리는 공개하여야 한다. 다만, 공공의 질서 또는 선량한 풍속에 어긋날 우려가 있으면 그러하지 아니하다.

④ 심판장은 제1항에 따라 구술심리로 심판을 할 경우에는 그 기일 및 장소를 정하고, 그 취지를 적은 서면을 당사 자 및 참가인에게 송달하여야 한다. 다만, 해당 사건의 이전 심리에 출석한 당사자 및 참가인에게 알렸을 때에는 그 러하지 아니하다.

⑤ 심판장은 제1항에 따라 구술심리로 심판을 할 경우에는 특허심판원장이 지정한 직원에게 기일마다 심리의 요지 와 그 밖에 필요한 사항을 적은 조서를 작성하게 하여야 한다.

⑥ 제5항의 조서에는 심판의 심판장 및 조서를 작성한 직원이 기명날인하여야 한다.

⑦ 제5항의 조서에 관하여는 「민사소송법」 제153조ㆍ제154조 및 제156조부터 제160조까지의 규정을 준용한다.

⑧ 심판에 관하여는 「민사소송법」 제143조ㆍ제259조ㆍ제299조 및 제367조를 준용한다.

⑨ 심판장은 구술심리 중 심판정 내의 질서를 유지한다.`},"154의2":{title:`전문심리위원`,content:`① 심판장은 직권에 따른 결정으로 전문심리위원을 지정하여 심판절차에 참여하게 할 수 있

다.

② 심판장은 제1항에 따라 전문심리위원을 심판절차에 참여시키는 경우 당사자의 의견을 들어 각 사건마다 1명 이 상의 전문심리위원을 지정하여야 한다.

③ 전문심리위원에게는 총리령으로 정하는 바에 따라 수당을 지급하고, 필요한 경우에는 그 밖의 여비, 일당 및 숙 박료를 지급할 수 있다.

④ 전문심리위원의 지정에 관하여 그 밖에 필요한 사항은 총리령으로 정한다.

⑤ 제1항에 따른 전문심리위원에 관하여는 「민사소송법」 제164조의2제2항부터 제4항까지 및 제164조의3을 준용 한다. 이 경우 “법원”은 “심판장”으로 본다.

⑥ 제1항에 따른 전문심리위원의 제척 및 기피에 관하여는 제148조부터 제152조까지의 규정을 준용한다. 이 경우 “심판관”은 “전문심리위원”으로 본다.`},"154의3":{title:`참고인 의견서의 제출`,content:`① 심판장은 산업에 미치는 영향 등을 고려하여 사건 심리에 필요하다고 인정되는 경우 공공단체, 그 밖의 참고인에게 심판사건에 관한 의견서를 제출하게 할 수 있다.

② 국가기관과 지방자치단체는 공익과 관련된 사항에 관하여 특허심판원에 심판사건에 관한 의견서를 제출할 수 있다.

③ 심판장은 제1항 또는 제2항에 따라 참고인이 제출한 의견서에 대하여 당사자에게 구술 또는 서면에 의한 의견진 술의 기회를 주어야 한다.

④ 제1항 또는 제2항에 따른 참고인의 선정 및 비용, 준수사항 등 참고인 의견서 제출에 필요한 사항은 총리령으로 정한다.`},155:{title:`참가`,content:`① 제139조제1항에 따라 심판을 청구할 수 있는 자는 심리가 종결될 때까지 그 심판에 참가할 수 있다.

② 제1항에 따른 참가인은 피참가인이 그 심판의 청구를 취하한 후에도 심판절차를 속행할 수 있다.

③ 심판의 결과에 대하여 이해관계를 가진 자는 심리가 종결될 때까지 당사자의 어느 한쪽을 보조하기 위하여 그 심판에 참가할 수 있다.

④ 제3항에 따른 참가인은 모든 심판절차를 밟을 수 있다.

⑤ 제1항 또는 제3항에 따른 참가인에게 심판절차의 중단 또는 중지의 원인이 있으면 그 중단 또는 중지는 피참가 인에 대해서도 그 효력이 발생한다.`},156:{title:`참가의 신청 및 결정`,content:`① 심판에 참가하려는 자는 참가신청서를 심판장에게 제출하여야 한다.

② 심판장은 참가신청이 있는 경우에는 참가신청서 부본을 당사자 및 다른 참가인에게 송달하고, 기간을 정하여 의 견서를 제출할 수 있는 기회를 주어야 한다.

③ 참가신청이 있는 경우에는 심판으로 그 참가 여부를 결정하여야 한다.

④ 제3항에 따른 결정은 서면으로 하여야 하며, 그 이유를 붙여야 한다.

⑤ 제3항에 따른 결정에 대해서는 불복할 수 없다.`},157:{title:`증거조사 및 증거보전`,content:`① 심판에서는 당사자, 참가인 또는 이해관계인의 신청에 의하여 또는 직권으로 증거조 사나 증거보전을 할 수 있다.

② 제1항에 따른 증거조사 및 증거보전에 관하여는 「민사소송법」 중 증거조사 및 증거보전에 관한 규정을 준용한

다. 다만, 심판관은 다음 각 호의 행위는 하지 못한다.

1. 과태료의 결정

2. 구인(拘引)을 명하는 행위

3. 보증금을 공탁하게 하는 행위

③ 증거보전신청은 심판청구 전에는 특허심판원장에게 하고, 심판계속 중에는 그 사건의 심판장에게 하여야 한다.

④ 특허심판원장은 심판청구 전에 제1항에 따른 증거보전신청이 있으면 그 신청에 관여할 심판관을 지정한다.

⑤ 심판장은 제1항에 따라 직권으로 증거조사나 증거보전을 하였을 때에는 그 결과를 당사자, 참가인 또는 이해관 계인에게 통지하고, 기간을 정하여 의견서를 제출할 수 있는 기회를 주어야 한다.`},158:{title:`심판의 진행`,content:`심판장은 당사자 또는 참가인이 법정기간 또는 지정기간에 절차를 밟지 아니하거나 제154조제 4항에 따른 기일에 출석하지 아니하여도 심판을 진행할 수 있다.`},"158의2":{title:`적시제출주의`,content:`심판절차에서의 주장이나 증거의 제출에 관하여는 「민사소송법」 제146조, 제147조 및 제 149조를 준용한다.`},159:{title:`직권심리`,content:`① 심판에서는 당사자 또는 참가인이 신청하지 아니한 이유에 대해서도 심리할 수 있다. 이 경우 당 사자 및 참가인에게 기간을 정하여 그 이유에 대하여 의견을 진술할 수 있는 기회를 주어야 한다.

② 심판에서는 청구인이 신청하지 아니한 청구의 취지에 대해서는 심리할 수 없다.`},160:{title:`심리ㆍ심결의 병합 또는 분리`,content:`심판관은 당사자 양쪽 또는 어느 한쪽이 동일한 둘 이상의 심판에 대하여 심리 또는 심결을 병합하거나 분리할 수 있다.`},161:{title:`심판청구의 취하`,content:`① 심판청구는 심결이 확정될 때까지 취하할 수 있다. 다만, 답변서가 제출된 후에는 상대방 의 동의를 받아야 한다.

② 둘 이상의 청구항에 관하여 제133조제1항의 무효심판 또는 제135조의 권리범위 확인심판을 청구하였을 때에는 청구항마다 취하할 수 있다.

③ 제1항 또는 제2항에 따른 취하가 있으면 그 심판청구 또는 그 청구항에 대한 심판청구는 처음부터 없었던 것으 로 본다.`},162:{title:`심결`,content:`① 심판은 특별한 규정이 있는 경우를 제외하고는 심결로써 종결한다.

② 제1항의 심결은 다음 각 호의 사항을 적은 서면으로 하여야 하며, 심결을 한 심판관은 그 서면에 기명날인하여야 한다.

1. 심판의 번호

2. 당사자 및 참가인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

3. 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법인(유한)인 경 우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

4. 심판사건의 표시

5. 심결의 주문(제138조에 따른 심판의 경우에는 통상실시권의 범위ㆍ기간 및 대가를 포함한다)

6. 심결의 이유(청구의 취지 및 그 이유의 요지를 포함한다)

7. 심결연월일

③ 심판장은 사건이 심결을 할 정도로 성숙하였을 때에는 심리의 종결을 당사자 및 참가인에게 통지하여야 한다.

④ 심판장은 필요하다고 인정하면 제3항에 따라 심리종결을 통지한 후에도 당사자 또는 참가인의 신청에 의하여 또 는 직권으로 심리를 재개할 수 있다.

⑤ 심결은 제3항에 따른 심리종결통지를 한 날부터 20일 이내에 한다.

⑥ 심판장은 심결 또는 결정이 있으면 그 등본을 당사자, 참가인 및 심판에 참가신청을 하였으나 그 신청이 거부된 자에게 송달하여야 한다.`},163:{title:`일사부재리`,content:`이 법에 따른 심판의 심결이 확정되었을 때에는 그 사건에 대해서는 누구든지 동일 사실 및 동일 증거에 의하여 다시 심판을 청구할 수 없다. 다만, 확정된 심결이 각하심결인 경우에는 그러하지 아니하다.`},164:{title:`소송과의 관계`,content:`① 심판장은 심판에서 필요하면 직권 또는 당사자의 신청에 따라 그 심판사건과 관련되는 특 허취소신청에 대한 결정 또는 다른 심판의 심결이 확정되거나 소송절차가 완결될 때까지 그 절차를 중지할 수 있다.

② 법원은 소송절차에서 필요하면 직권 또는 당사자의 신청에 따라 특허취소신청에 대한 결정이나 특허에 관한 심 결이 확정될 때까지 그 소송절차를 중지할 수 있다.

③ 법원은 특허권 또는 전용실시권의 침해에 관한 소가 제기된 경우에는 그 취지를 특허심판원장에게 통보하여야 한다. 그 소송절차가 끝났을 때에도 또한 같다.

④ 특허심판원장은 제3항에 따른 특허권 또는 전용실시권의 침해에 관한 소에 대응하여 그 특허권에 관한 무효심판 등이 청구된 경우에는 그 취지를 제3항에 해당하는 법원에 통보하여야 한다. 그 심판청구서의 각하결정, 심결 또는 청구의 취하가 있는 경우에도 또한 같다.`},"164의2":{title:`조정위원회 회부`,content:`① 심판장은 심판사건을 합리적으로 해결하기 위하여 필요하다고 인정되면 당사자의 동 의를 받아 해당 심판사건의 절차를 중지하고 결정으로 해당 사건을 조정위원회에 회부할 수 있다.

② 심판장은 제1항에 따라 조정위원회에 회부한 때에는 해당 심판사건의 기록을 조정위원회에 송부하여야 한다.

③ 심판장은 조정위원회의 조정절차가 조정 불성립으로 종료되면 제1항에 따른 중지 결정을 취소하고 심판을 재개 하며, 조정이 성립된 경우에는 해당 심판청구는 취하된 것으로 본다.`},165:{title:`심판비용`,content:`① 제133조제1항, 제134조제1항ㆍ제2항, 제135조 및 제137조제1항의 심판비용의 부담은 심판이 심 결에 의하여 종결될 때에는 그 심결로써 정하고, 심판이 심결에 의하지 아니하고 종결될 때에는 결정으로써 정하여 야 한다.

② 제1항의 심판비용에 관하여는 「민사소송법」 제98조부터 제103조까지, 제107조제1항ㆍ제2항, 제108조, 제111조 , 제112조 및 제116조를 준용한다.

③ 제132조의17, 제136조 또는 제138조에 따른 심판비용은 청구인이 부담한다.

④ 제3항에 따라 청구인이 부담하는 비용에 관하여는 「민사소송법」 제102조를 준용한다.

⑤ 심판비용액은 심결 또는 결정이 확정된 후 당사자의 청구에 따라 특허심판원장이 결정한다.

⑥ 심판비용의 범위ㆍ금액ㆍ납부 및 심판에서 절차상의 행위를 하기 위하여 필요한 비용의 지급에 관하여는 그 성 질에 반하지 아니하는 범위에서 「민사소송비용법」 중 해당 규정의 예에 따른다.

⑦ 심판의 대리를 한 변리사에게 당사자가 지급하였거나 지급할 보수는 지식재산처장이 정하는 금액의 범위에서 심판비용으로 본다. 이 경우 여러 명의 변리사가 심판의 대리를 한 경우라도 1명의 변리사가 심판대리를 한 것으로 본다.`},166:{title:`심판비용액 또는 대가에 대한 집행권원`,content:`이 법에 따라 특허심판원장이 정한 심판비용액 또는 심판관이 정한 대가에 관하여 확정된 결정은 집행력 있는 집행권원과 같은 효력을 가진다. 이 경우 집행력 있는 정본은 특허심판원 소속 공무원이 부여한다.`},167:{title:`삭제`,content:`삭제 <1995.

1. 5.>`},168:{title:`삭제`,content:`삭제 <1995.

1. 5.>`},169:{title:`삭제`,content:`삭제 <1995.

1. 5.>`},170:{title:`심사규정의 특허거절결정에 대한 심판에의 준용`,content:`① 특허거절결정에 대한 심판에 관하여는 제47조제1항제1호 ㆍ제2호, 같은 조 제4항, 제51조, 제63조, 제63조의2 및 제66조를 준용한다. 이 경우 제51조제1항 본문 중 “제47조제 1항제2호 및 제3호에 따른 보정”은 “제47조제1항제2호에 따른 보정(제132조의17의 특허거절결정에 대한 심판청구 전에 한 것은 제외한다)”으로, 제63조의2 본문 중 “지식재산처장”은 “특허심판원장”으로 본다. <개정 2016. 2. 29., 2025. 10. 1.>

② 제1항에 따라 준용되는 제63조는 특허거절결정의 이유와 다른 거절이유를 발견한 경우에만 적용한다.`},171:{title:`특허거절결정에 대한 심판의 특칙`,content:`특허거절결정 또는 특허권의 존속기간의 연장등록거절결정에 대한 심판에 는 제147조제1항ㆍ제2항, 제155조 및 제156조를 적용하지 아니한다.`},172:{title:`심사의 효력`,content:`심사에서 밟은 특허에 관한 절차는 특허거절결정 또는 특허권의 존속기간의 연장등록거절결정 에 대한 심판에서도 그 효력이 있다.`},173:{title:`삭제`,content:`삭제 <2009.

1. 30.>`},174:{title:`삭제`,content:`삭제 <2009.

1. 30.>`},175:{title:`삭제`,content:`삭제 <2009.

1. 30.>`},176:{title:`특허거절결정 등의 취소`,content:`① 심판관은 제132조의17에 따른 심판이 청구된 경우에 그 청구가 이유 있다고 인정 할 때에는 심결로써 특허거절결정 또는 특허권의 존속기간의 연장등록거절결정을 취소하여야 한다. <개정 2016. 2. 29.>

② 심판에서 제1항에 따라 특허거절결정 또는 특허권의 존속기간의 연장등록거절결정을 취소할 경우에는 심사에 부칠 것이라는 심결을 할 수 있다.

③ 제1항 및 제2항에 따른 심결에서 취소의 기본이 된 이유는 그 사건에 대하여 심사관을 기속한다.`},177:{title:`삭제`,content:`삭제 <1995.

1. 5.>`},178:{title:`재심의 청구`,content:`① 당사자는 확정된 특허취소결정 또는 확정된 심결에 대하여 재심을 청구할 수 있다. <개정 2016. 2. 29.>

② 제1항의 재심청구에 관하여는 「민사소송법」 제451조 및 제453조를 준용한다.`},179:{title:`제3자에 의한 재심청구`,content:`① 심판의 당사자가 공모하여 제3자의 권리나 이익을 사해(詐害)할 목적으로 심결을 하게 하였을 때에는 제3자는 그 확정된 심결에 대하여 재심을 청구할 수 있다.

② 제1항의 재심청구의 경우에는 심판의 당사자를 공동피청구인으로 한다.`},180:{title:`재심청구의 기간`,content:`① 당사자는 특허취소결정 또는 심결 확정 후 재심사유를 안 날부터 30일 이내에 재심을 청 구하여야 한다.

② 대리권의 흠을 이유로 재심을 청구하는 경우에 제1항의 기간은 청구인 또는 법정대리인이 특허취소결정등본 또 는 심결등본의 송달에 의하여 특허취소결정 또는 심결이 있는 것을 안 날의 다음 날부터 기산한다.<개정 2016. 2. 29.>

③ 특허취소결정 또는 심결 확정 후 3년이 지나면 재심을 청구할 수 없다.

④ 재심사유가 특허취소결정 또는 심결 확정 후에 생겼을 때에는 제3항의 기간은 그 사유가 발생한 날의 다음 날부 터 기산한다.

⑤ 제1항 및 제3항은 해당 심결 이전의 확정심결에 저촉된다는 이유로 재심을 청구하는 경우에는 적용하지 아니한 다.`},181:{title:`재심에 의하여 회복된 특허권의 효력 제한`,content:`① 다음 각 호의 어느 하나에 해당하는 경우에 특허권의 효력은 해 당 특허취소결정 또는 심결이 확정된 후 재심청구 등록 전에 선의로 수출 또는 수입하거나 국내에서 생산 또는 취득 한 물건에는 미치지 아니한다.

1. 무효가 된 특허권(존속기간이 연장등록된 특허권을 포함한다)이 재심에 의하여 회복된 경우

2. 특허권의 권리범위에 속하지 아니한다는 심결이 확정된 후 재심에 의하여 그 심결과 상반되는 심결이 확정된 경 우

3. 거절한다는 취지의 심결이 있었던 특허출원 또는 특허권의 존속기간의 연장등록출원이 재심에 의하여 특허권의 설정등록 또는 특허권의 존속기간의 연장등록이 된 경우

4. 취소된 특허권이 재심에 의하여 회복된 경우

② 제1항 각 호의 어느 하나에 해당하는 경우의 특허권의 효력은 다음 각 호의 어느 하나의 행위에 미치지 아니한

다.

1. 해당 특허취소결정 또는 심결이 확정된 후 재심청구 등록 전에 한 해당 발명의 선의의 실시

2. 특허가 물건의 발명인 경우에는 그 물건의 생산에만 사용하는 물건을 해당 특허취소결정 또는 심결이 확정된 후 재심청구 등록 전에 선의로 생산ㆍ양도ㆍ대여ㆍ수출 또는 수입하거나 양도 또는 대여의 청약을 하는 행위

3. 특허가 방법의 발명인 경우에는 그 방법의 실시에만 사용하는 물건을 해당 특허취소결정 또는 심결이 확정된 후 재심청구 등록 전에 선의로 생산ㆍ양도ㆍ대여ㆍ수출 또는 수입하거나 양도 또는 대여를 청약하는 행위`},182:{title:`재심에 의하여 회복한 특허권에 대한 선사용자의 통상실시권`,content:`제181조제1항 각 호의 어느 하나에 해당하는 경 우에 해당 특허취소결정 또는 심결이 확정된 후 재심청구 등록 전에 국내에서 선의로 그 발명의 실시사업을 하고 있 는 자 또는 그 사업을 준비하고 있는 자는 실시하고 있거나 준비하고 있는 발명 및 사업목적의 범위에서 그 특허권 에 관하여 통상실시권을 가진다.`},183:{title:`재심에 의하여 통상실시권을 상실한 원권리자의 통상실시권`,content:`① 제138조제1항 또는 제3항에 따라 통상실시권 을 허락한다는 심결이 확정된 후 재심에서 그 심결과 상반되는 심결이 확정된 경우에는 재심청구 등록 전에 선의로 국내에서 그 발명의 실시사업을 하고 있는 자 또는 그 사업을 준비하고 있는 자는 원(原)통상실시권의 사업목적 및 발명의 범위에서 그 특허권 또는 재심의 심결이 확정된 당시에 존재하는 전용실시권에 대하여 통상실시권을 가진다.

② 제1항에 따라 통상실시권을 가진 자는 특허권자 또는 전용실시권자에게 상당한 대가를 지급하여야 한다.`},184:{title:`재심에서의 심판규정 등의 준용`,content:`특허취소결정 또는 심판에 대한 재심의 절차에 관하여는 그 성질에 반하지 아니하는 범위에서 특허취소신청 또는 심판의 절차에 관한 규정을 준용한다.`},185:{title:`「민사소송법」의 준용`,content:`재심청구에 관하여는 「민사소송법」 제459조제1항을 준용한다.`},186:{title:`심결 등에 대한 소`,content:`① 특허취소결정 또는 심결에 대한 소 및 특허취소신청서ㆍ심판청구서ㆍ재심청구서의 각 하결정에 대한 소는 특허법원의 전속관할로 한다.

② 제1항에 따른 소는 다음 각 호의 자만 제기할 수 있다.

1. 당사자

2. 참가인

3. 해당 특허취소신청의 심리, 심판 또는 재심에 참가신청을 하였으나 신청이 거부된 자

③ 제1항에 따른 소는 심결 또는 결정의 등본을 송달받은 날부터 30일 이내에 제기하여야 한다.

④ 제3항의 기간은 불변기간으로 한다.

⑤ 심판장은 주소 또는 거소가 멀리 떨어진 곳에 있거나 교통이 불편한 지역에 있는 자를 위하여 직권으로 제4항의 불변기간에 대하여 부가기간을 정할 수 있다.

⑥ 특허취소를 신청할 수 있는 사항 또는 심판을 청구할 수 있는 사항에 관한 소는 특허취소결정이나 심결에 대한 것이 아니면 제기할 수 없다.

⑦ 제162조제2항제5호에 따른 대가의 심결 및 제165조제1항에 따른 심판비용의 심결 또는 결정에 대해서는 독립 하여 제1항에 따른 소를 제기할 수 없다.

⑧ 제1항에 따른 특허법원의 판결에 대해서는 대법원에 상고할 수 있다.`},187:{title:`피고적격`,content:`제186조제1항에 따라 소를 제기하는 경우에는 지식재산처장을 피고로 하여야 한다. 다만, 제133조 제1항, 제134조제1항ㆍ제2항, 제135조제1항ㆍ제2항, 제137조제1항 또는 제138조제1항ㆍ제3항에 따른 심판 또는 그 재심의 심결에 대한 소를 제기하는 경우에는 그 청구인 또는 피청구인을 피고로 하여야 한다. <개정 2016. 2. 29., 2025. 10. 1.>`},188:{title:`소 제기 통지 및 재판서 정본 송부`,content:`① 법원은 제186조제1항에 따른 소 또는 같은 조 제8항에 따른 상고가 제 기되었을 때에는 지체 없이 그 취지를 특허심판원장에게 통지하여야 한다.

② 법원은 제187조 단서에 따른 소에 관하여 소송절차가 완결되었을 때에는 지체 없이 그 사건에 대한 각 심급(審 級)의 재판서 정본을 특허심판원장에게 보내야 한다.`},"188의2":{title:`기술심리관의 제척ㆍ기피ㆍ회피`,content:`① 「법원조직법」 제54조의2에 따른 기술심리관의 제척ㆍ기피에 관하여 는 제148조, 「민사소송법」 제42조부터 제45조까지, 제47조 및 제48조를 준용한다.

② 제1항에 따른 기술심리관에 대한 제척ㆍ기피의 재판은 그 소속 법원이 결정으로 하여야 한다.

③ 기술심리관은 제척 또는 기피의 사유가 있다고 인정하면 특허법원장의 허가를 받아 회피할 수 있다.`},189:{title:`심결 또는 결정의 취소`,content:`① 법원은 제186조제1항에 따라 소가 제기된 경우에 그 청구가 이유 있다고 인정할 때 에는 판결로써 해당 심결 또는 결정을 취소하여야 한다.

② 심판관은 제1항에 따라 심결 또는 결정의 취소판결이 확정되었을 때에는 다시 심리를 하여 심결 또는 결정을 하 여야 한다.

③ 제1항에 따른 판결에서 취소의 기본이 된 이유는 그 사건에 대하여 특허심판원을 기속한다.`},190:{title:`보상금 또는 대가에 관한 불복의 소`,content:`① 제41조제3항ㆍ제4항, 제106조제3항, 제106조의2제3항, 제110조제2항 제2호 및 제138조제4항에 따른 보상금 및 대가에 대하여 심결ㆍ결정 또는 재정을 받은 자가 그 보상금 또는 대가에 불복할 때에는 법원에 소송을 제기할 수 있다.

② 제1항에 따른 소송은 심결ㆍ결정 또는 재정의 등본을 송달받은 날부터 30일 이내에 제기하여야 한다.

③ 제2항에 따른 기간은 불변기간으로 한다.`},191:{title:`보상금 또는 대가에 관한 소송에서의 피고`,content:`제190조에 따른 소송에서는 다음 각 호의 어느 하나에 해당하는 자를 피고로 하여야 한다.

1. 제41조제3항 및 제4항에 따른 보상금에 대해서는 보상금을 지급하여야 하는 중앙행정기관의 장 또는 출원인

2. 제106조제3항 및 제106조의2제3항에 따른 보상금에 대해서는 보상금을 지급하여야 하는 중앙행정기관의 장, 특 허권자, 전용실시권자 또는 통상실시권자

3. 제110조제2항제2호 및 제138조제4항에 따른 대가에 대해서는 통상실시권자ㆍ전용실시권자ㆍ특허권자ㆍ실용신 안권자 또는 디자인권자`},"191의2":{title:`변리사의 보수와 소송비용`,content:`소송을 대리한 변리사의 보수에 관하여는 「민사소송법」 제109조를 준용한다. 이 경우 “변호사”는 “변리사”로 본다.`},192:{title:`국제출원을 할 수 있는 자`,content:`지식재산처장에게 국제출원을 할 수 있는 자는 다음 각 호의 어느 하나에 해당하는 자로 한다.

1. 대한민국 국민

2. 국내에 주소 또는 영업소를 가진 외국인

3. 제1호 또는 제2호에 해당하는 자가 아닌 자로서 제1호 또는 제2호에 해당하는 자를 대표자로 하여 국제출원을 하는 자

4. 총리령으로 정하는 요건에 해당하는 자`},193:{title:`국제출원`,content:`① 국제출원을 하려는 자는 총리령으로 정하는 언어로 작성한 출원서와 발명의 설명ㆍ청구범위ㆍ 필요한 도면 및 요약서를 지식재산처장에게 제출하여야 한다.

② 제1항의 출원서에는 다음 각 호의 사항을 적어야 한다.

1. 해당 출원이 「특허협력조약」에 따른 국제출원이라는 표시

2. 해당 출원된 발명의 보호가 필요한 「특허협력조약」 체약국(締約國)의 지정

3. 제2호에 따라 지정된 체약국(이하 “지정국”이라 한다) 중 「특허협력조약」 제2조(iv)의 지역특허를 받으려는 경우 에는 그 취지

4. 출원인의 성명이나 명칭ㆍ주소나 영업소 및 국적

5. 대리인이 있으면 그 대리인의 성명 및 주소나 영업소

6. 발명의 명칭

7. 발명자의 성명 및 주소(지정국의 법령에서 발명자에 관한 사항을 적도록 규정되어 있는 경우만 해당한다)

③ 제1항의 발명의 설명은 그 발명이 속하는 기술분야에서 통상의 지식을 가진 사람이 쉽게 실시할 수 있도록 명확 하고 상세하게 적어야 한다.

④ 제1항의 청구범위는 보호를 받으려는 사항을 명확하고 간결하게 적어야 하며, 발명의 설명에 의하여 충분히 뒷 받침되어야 한다.

⑤ 제1항부터 제4항까지에서 규정한 사항 외에 국제출원에 관하여 필요한 사항은 총리령으로 정한다.<개정 2025. 10. 1.>`},194:{title:`국제출원일의 인정 등`,content:`① 지식재산처장은 국제출원이 지식재산처에 도달한 날을 「특허협력조약」 제11조의 국제출원일(이하 “국제출원일”이라 한다)로 인정하여야 한다. 다만, 다음 각 호의 어느 하나에 해당하는 경우에는 그 러하지 아니하다.

1. 출원인이 제192조 각 호의 어느 하나에 해당하지 아니하는 경우

2. 제193조제1항에 따른 언어로 작성되지 아니한 경우

3. 제193조제1항에 따른 발명의 설명 또는 청구범위가 제출되지 아니한 경우

4. 제193조제2항제1호ㆍ제2호에 따른 사항 및 출원인의 성명이나 명칭을 적지 아니한 경우

② 지식재산처장은 국제출원이 제1항 각 호의 어느 하나에 해당하는 경우에는 기간을 정하여 서면으로 절차를 보완 할 것을 명하여야 한다.

③ 지식재산처장은 국제출원이 도면에 관하여 적고 있으나 그 출원에 도면이 포함되어 있지 아니하면 그 취지를 출 원인에게 통지하여야 한다.

④ 지식재산처장은 제2항에 따른 절차의 보완명령을 받은 자가 지정된 기간에 보완을 한 경우에는 그 보완에 관계 되는 서면의 도달일을, 제3항에 따른 통지를 받은 자가 총리령으로 정하는 기간에 도면을 제출한 경우에는 그 도면 의 도달일을 국제출원일로 인정하여야 한다. 다만, 제3항에 따른 통지를 받은 자가 총리령으로 정하는 기간에 도면 을 제출하지 아니한 경우에는 그 도면에 관한 기재는 없는 것으로 본다.`},195:{title:`보정명령`,content:`지식재산처장은 국제출원이 다음 각 호의 어느 하나에 해당하는 경우에는 기간을 정하여 보정을 명 하여야 한다.

1. 발명의 명칭이 적혀 있지 아니한 경우

2. 요약서가 제출되지 아니한 경우

3. 제3조 또는 제197조제3항을 위반한 경우

4. 총리령으로 정하는 방식을 위반한 경우`},196:{title:`취하된 것으로 보는 국제출원 등`,content:`① 다음 각 호의 어느 하나에 해당하는 국제출원은 취하된 것으로 본다. <개 정 2025.

10. 1.>

1. 제195조에 따른 보정명령을 받은 자가 지정된 기간에 보정을 하지 아니한 경우

2. 국제출원에 관한 수수료를 총리령으로 정하는 기간에 내지 아니하여 「특허협력조약」 제14조(3)(a)에 해당하게 된 경우

3. 제194조에 따라 국제출원일이 인정된 국제출원에 관하여 총리령으로 정하는 기간에 그 국제출원이 제194조제 1항 각 호의 어느 하나에 해당하는 것이 발견된 경우

② 국제출원에 관하여 내야 할 수수료의 일부를 총리령으로 정하는 기간에 내지 아니하여 「특허협력조약」 제14조 (3)(b)에 해당하게 된 경우에는 수수료를 내지 아니한 지정국의 지정은 취하된 것으로 본다.

③ 지식재산처장은 제1항 및 제2항에 따라 국제출원 또는 지정국의 일부가 취하된 것으로 보는 경우에는 그 사실을 출원인에게 알려야 한다.`},197:{title:`대표자 등`,content:`① 2인 이상이 공동으로 국제출원을 하는 경우에 제192조부터 제196조까지 및 제198조에 따른 절 차는 출원인의 대표자가 밟을 수 있다.

② 2인 이상이 공동으로 국제출원을 하는 경우에 출원인이 대표자를 정하지 아니한 경우에는 총리령으로 정하는 방 법에 따라 대표자를 정할 수 있다.

③ 제1항의 절차를 대리인에 의하여 밟으려는 자는 제3조에 따른 법정대리인을 제외하고는 변리사를 대리인으로 하여야 한다.`},198:{title:`수수료`,content:`① 국제출원을 하려는 자는 수수료를 내야 한다.

② 제1항에 따른 수수료, 그 납부방법 및 납부기간 등에 관하여 필요한 사항은 총리령으로 정한다.<개정 2025. 10. 1.>`},"198의2":{title:`국제조사 및 국제예비심사`,content:`① 지식재산처는 「특허협력조약」 제2조(xix)의 국제사무국(이하 “국제사무국 ”이라 한다)과 체결하는 협정에 따라 국제출원에 대한 국제조사기관 및 국제예비심사기관으로서의 업무를 수행한다.

② 제1항에 따른 업무수행에 필요한 사항은 총리령으로 정한다.`},199:{title:`국제출원에 의한 특허출원`,content:`① 「특허협력조약」에 따라 국제출원일이 인정된 국제출원으로서 특허를 받기 위 하여 대한민국을 지정국으로 지정한 국제출원은 그 국제출원일에 출원된 특허출원으로 본다.

② 제1항에 따라 특허출원으로 보는 국제출원(이하 “국제특허출원”이라 한다)에 관하여는 제42조의2, 제42조의3 및 제54조를 적용하지 아니한다.`},200:{title:`공지 등이 되지 아니한 발명으로 보는 경우의 특례`,content:`국제특허출원된 발명에 관하여 제30조제1항제1호를 적용 받으려는 자는 그 취지를 적은 서면 및 이를 증명할 수 있는 서류를 같은 조 제2항에도 불구하고 총리령으로 정하는 기간에 지식재산처장에게 제출할 수 있다.`},"200의2":{title:`국제특허출원의 출원서 등`,content:`① 국제특허출원의 국제출원일까지 제출된 출원서는 제42조제1항에 따라 제출 된 특허출원서로 본다.

② 국제특허출원의 국제출원일까지 제출된 발명의 설명, 청구범위 및 도면은 제42조제2항에 따른 특허출원서에 최 초로 첨부된 명세서 및 도면으로 본다.

③ 국제특허출원에 대해서는 다음 각 호의 구분에 따른 요약서 또는 국어번역문을 제42조제2항에 따른 요약서로 본다.

1. 국제특허출원의 요약서를 국어로 적은 경우: 국제특허출원의 요약서

2. 국제특허출원의 요약서를 외국어로 적은 경우: 제201조제1항에 따라 제출된 국제특허출원의 요약서의 국어번역 문(제201조제3항 본문에 따라 새로운 국어번역문을 제출한 경우에는 마지막에 제출한 국제특허출원의 요약서의 국어번역문을 말한다)`},201:{title:`국제특허출원의 국어번역문`,content:`① 국제특허출원을 외국어로 출원한 출원인은 「특허협력조약」 제2조(xi)의 우선 일(이하 “우선일”이라 한다)부터 2년 7개월(이하 “국내서면제출기간”이라 한다) 이내에 다음 각 호의 국어번역문을 지식재산처장에게 제출하여야 한다. 다만, 국어번역문의 제출기간을 연장하여 달라는 취지를 제203조제1항에 따른 서면에 적어 국내서면제출기간 만료일 전 1개월부터 그 만료일까지 제출한 경우(그 서면을 제출하기 전에 국어번역 문을 제출한 경우는 제외한다)에는 국내서면제출기간 만료일부터 1개월이 되는 날까지 국어번역문을 제출할 수 있

다.

1. 국제출원일까지 제출한 발명의 설명, 청구범위 및 도면(도면 중 설명부분에 한정한다)의 국어번역문

2. 국제특허출원의 요약서의 국어번역문

② 제1항에도 불구하고 국제특허출원을 외국어로 출원한 출원인이 「특허협력조약」 제19조(1)에 따라 청구범위에 관한 보정을 한 경우에는 국제출원일까지 제출한 청구범위에 대한 국어번역문을 보정 후의 청구범위에 대한 국어 번역문으로 대체하여 제출할 수 있다.

③ 제1항에 따라 국어번역문을 제출한 출원인은 국내서면제출기간(제1항 단서에 따라 취지를 적은 서면이 제출된 경우에는 연장된 국어번역문 제출 기간을 말한다. 이하 이 조에서 같다)에 그 국어번역문을 갈음하여 새로운 국어번 역문을 제출할 수 있다. 다만, 출원인이 출원심사의 청구를 한 후에는 그러하지 아니하다.

④ 제1항에 따른 출원인이 국내서면제출기간에 제1항에 따른 발명의 설명 및 청구범위의 국어번역문을 제출하지 아니하면 그 국제특허출원을 취하한 것으로 본다.

⑤ 특허출원인이 국내서면제출기간의 만료일(국내서면제출기간에 출원인이 출원심사의 청구를 한 경우에는 그 청 구일을 말하며, 이하 “기준일”이라 한다)까지 제1항에 따라 발명의 설명, 청구범위 및 도면(도면 중 설명부분에 한정 한다)의 국어번역문(제3항 본문에 따라 새로운 국어번역문을 제출한 경우에는 마지막에 제출한 국어번역문을 말한

다. 이하 이 조에서 “최종 국어번역문”이라 한다)을 제출한 경우에는 국제출원일까지 제출한 발명의 설명, 청구범위 및 도면(도면 중 설명부분에 한정한다)을 최종 국어번역문에 따라 국제출원일에 제47조제1항에 따른 보정을 한 것 으로 본다.

⑥ 특허출원인은 제47조제1항 및 제208조제1항에 따라 보정을 할 수 있는 기간에 최종 국어번역문의 잘못된 번역 을 총리령으로 정하는 방법에 따라 정정할 수 있다. 이 경우 정정된 국어번역문에 관하여는 제5항을 적용하지 아니 한다.

⑦ 제6항 전단에 따라 제47조제1항제1호 또는 제2호에 따른 기간에 정정을 하는 경우에는 마지막 정정 전에 한 모 든 정정은 처음부터 없었던 것으로 본다.

⑧ 제2항에 따라 보정 후의 청구범위에 대한 국어번역문을 제출하는 경우에는 제204조제1항 및 제2항을 적용하지 아니한다.`},202:{title:`특허출원 등에 의한 우선권 주장의 특례`,content:`① 국제특허출원에 관하여는 제55조제2항 및 제56조제2항을 적용하 지 아니한다.

② 제55조제4항을 적용할 때 우선권 주장을 수반하는 특허출원이 국제특허출원인 경우에는 같은 항 중 “특허출원 의 출원서에 최초로 첨부된 명세서 또는 도면”은 “국제출원일까지 제출된 발명의 설명, 청구범위 또는 도면”으로, “출원공개되거나”는 “출원공개 또는 「특허협력조약」 제21조에 따라 국제공개되거나”로 본다. 다만, 그 국제특허출 원이 제201조제4항에 따라 취하한 것으로 보는 경우에는 제55조제4항을 적용하지 아니한다.

③ 제55조제1항, 같은 조 제3항부터 제5항까지 및 제56조제1항을 적용할 때 선출원이 국제특허출원 또는 「실용신 안법」 제34조제2항에 따른 국제실용신안등록출원인 경우에는 다음 각 호에 따른다.

1. 제55조제1항 각 호 외의 부분 본문, 같은 조 제3항 및 제5항 각 호 외의 부분 중 “출원서에 최초로 첨부된 명세서 또는 도면”은 다음 각 목의 구분에 따른 것으로 본다.

가. 선출원이 국제특허출원인 경우: “국제출원일까지 제출된 국제출원의 발명의 설명, 청구범위 또는 도면”

나. 선출원이 「실용신안법」 제34조제2항에 따른 국제실용신안등록출원인 경우: “국제출원일까지 제출된 국제출 원의 고안의 설명, 청구범위 또는 도면”

2. 제55조제4항 중 “선출원의 출원서에 최초로 첨부된 명세서 또는 도면”은 다음 각 목의 구분에 따른 것으로 보고, “선출원에 관하여 출원공개”는 “선출원에 관하여 출원공개 또는 「특허협력조약」 제21조에 따른 국제공개”로 본

다.

가. 선출원이 국제특허출원인 경우: “선출원의 국제출원일까지 제출된 국제출원의 발명의 설명, 청구범위 또는 도 면”

나. 선출원이 「실용신안법」 제34조제2항에 따른 국제실용신안등록출원인 경우: “선출원의 국제출원일까지 제출 된 국제출원의 고안의 설명, 청구범위 또는 도면”

3. 제56조제1항 각 호 외의 부분 본문 중 “그 출원일부터 1년 3개월이 지난 때”는 “국제출원일부터 1년 3개월이 지 난 때 또는 제201조제5항이나 「실용신안법」 제35조제5항에 따른 기준일 중 늦은 때”로 본다.

④ 제55조제1항, 같은 조 제3항부터 제5항까지 및 제56조제1항을 적용할 때 제55조제1항에 따른 선출원이 제214조 제4항 또는 「실용신안법」 제40조제4항에 따라 특허출원 또는 실용신안등록출원으로 되는 국제출원인 경우에는 다 음 각 호에 따른다.

1. 제55조제1항 각 호 외의 부분 본문, 같은 조 제3항 및 제5항 각 호 외의 부분 중 “출원서에 최초로 첨부된 명세서 또는 도면”은 다음 각 목의 구분에 따른 것으로 본다.

가. 선출원이 제214조제4항에 따라 특허출원으로 되는 국제출원인 경우: “제214조제4항에 따라 국제출원일로 인 정할 수 있었던 날의 국제출원의 발명의 설명, 청구범위 또는 도면”

나. 선출원이 「실용신안법」 제40조제4항에 따라 실용신안등록출원으로 되는 국제출원인 경우: “「실용신안법」 제 40조제4항에 따라 국제출원일로 인정할 수 있었던 날의 국제출원의 고안의 설명, 청구범위 또는 도면”

2. 제55조제4항 중 “선출원의 출원서에 최초로 첨부된 명세서 또는 도면”은 다음 각 목의 구분에 따른 것으로 본다.

가. 선출원이 제214조제4항에 따라 특허출원으로 되는 국제출원인 경우: “제214조제4항에 따라 국제출원일로 인 정할 수 있었던 날의 선출원의 국제출원의 발명의 설명, 청구범위 또는 도면”

나. 선출원이 「실용신안법」 제40조제4항에 따라 실용신안등록출원으로 되는 국제출원인 경우: “「실용신안법」 제 40조제4항에 따라 국제출원일로 인정할 수 있었던 날의 선출원의 국제출원의 고안의 설명, 청구범위 또는 도 면”

3. 제56조제1항 각 호 외의 부분 본문 중 “그 출원일부터 1년 3개월이 지난 때”는 “제214조제4항 또는 「실용신안법 」 제40조제4항에 따라 국제출원일로 인정할 수 있었던 날부터 1년 3개월이 지난 때 또는 제214조제4항이나 「실 용신안법」 제40조제4항에 따른 결정을 한 때 중 늦은 때”로 본다.`},203:{title:`서면의 제출`,content:`① 국제특허출원의 출원인은 국내서면제출기간에 다음 각 호의 사항을 적은 서면을 지식재산처 장에게 제출하여야 한다. 이 경우 국제특허출원을 외국어로 출원한 출원인은 제201조제1항에 따른 국어번역문을 함 께 제출하여야 한다.

1. 출원인의 성명 및 주소(법인인 경우에는 그 명칭 및 영업소의 소재지)

2. 출원인의 대리인이 있는 경우에는 그 대리인의 성명 및 주소나 영업소의 소재지[대리인이 특허법인ㆍ특허법인 (유한)인 경우에는 그 명칭, 사무소의 소재지 및 지정된 변리사의 성명]

3. 발명의 명칭

4. 발명자의 성명 및 주소

5. 국제출원일 및 국제출원번호

② 제1항 후단에도 불구하고 제201조제1항 단서에 따라 국어번역문의 제출기간을 연장하여 달라는 취지를 적어 제 1항 전단에 따른 서면을 제출하는 경우에는 국어번역문을 함께 제출하지 아니할 수 있다.

③ 지식재산처장은 다음 각 호의 어느 하나에 해당하는 경우에는 보정기간을 정하여 보정을 명하여야 한다.<개정 2025. 10. 1.>

1. 제1항 전단에 따른 서면을 국내서면제출기간에 제출하지 아니한 경우

2. 제1항 전단에 따라 제출된 서면이 이 법 또는 이 법에 따른 명령으로 정하는 방식에 위반되는 경우

④ 제3항에 따른 보정명령을 받은 자가 지정된 기간에 보정을 하지 아니하면 지식재산처장은 해당 국제특허출원을 무효로 할 수 있다.`},204:{title:`국제조사보고서를 받은 후의 보정`,content:`① 국제특허출원의 출원인은 「특허협력조약」 제19조(1)에 따라 국제조사 보고서를 받은 후에 국제특허출원의 청구범위에 관하여 보정을 한 경우 기준일까지(기준일이 출원심사의 청구일인 경우 출원심사의 청구를 한 때까지를 말한다. 이하 이 조 및 제205조에서 같다) 다음 각 호의 구분에 따른 서류를 지 식재산처장에게 제출하여야 한다.

1. 외국어로 출원한 국제특허출원인 경우: 그 보정서의 국어번역문

2. 국어로 출원한 국제특허출원인 경우: 그 보정서의 사본

② 제1항에 따라 보정서의 국어번역문 또는 사본이 제출되었을 때에는 그 보정서의 국어번역문 또는 사본에 따라 제47조제1항에 따른 청구범위가 보정된 것으로 본다. 다만, 「특허협력조약」 제20조에 따라 기준일까지 그 보정서 (국어로 출원한 국제특허출원인 경우에 한정한다)가 지식재산처에 송달된 경우에는 그 보정서에 따라 보정된 것으 로 본다.

③ 국제특허출원의 출원인은 「특허협력조약」 제19조(1)에 따른 설명서를 국제사무국에 제출한 경우 다음 각 호의 구분에 따른 서류를 기준일까지 지식재산처장에게 제출하여야 한다.

1. 외국어로 출원한 국제특허출원인 경우: 그 설명서의 국어번역문

2. 국어로 출원한 국제특허출원인 경우: 그 설명서의 사본

④ 국제특허출원의 출원인이 기준일까지 제1항 또는 제3항에 따른 절차를 밟지 아니하면 「특허협력조약」 제19조 (1)에 따른 보정서 또는 설명서는 제출되지 아니한 것으로 본다. 다만, 국어로 출원한 국제특허출원인 경우에 「특허 협력조약」 제20조에 따라 기준일까지 그 보정서 또는 그 설명서가 지식재산처에 송달된 경우에는 그러하지 아니하 다.`},205:{title:`국제예비심사보고서 작성 전의 보정`,content:`① 국제특허출원의 출원인은 「특허협력조약」 제34조(2)(b)에 따라 국제 특허출원의 발명의 설명, 청구범위 및 도면에 대하여 보정을 한 경우 기준일까지 다음 각 호의 구분에 따른 서류를 지식재산처장에게 제출하여야 한다.

1. 외국어로 작성된 보정서인 경우: 그 보정서의 국어번역문

2. 국어로 작성된 보정서인 경우: 그 보정서의 사본

② 제1항에 따라 보정서의 국어번역문 또는 사본이 제출되었을 때에는 그 보정서의 국어번역문 또는 사본에 따라 제47조제1항에 따른 명세서 및 도면이 보정된 것으로 본다. 다만, 「특허협력조약」 제36조(3)(a)에 따라 기준일까지 그 보정서(국어로 작성된 보정서의 경우만 해당한다)가 지식재산처에 송달된 경우에는 그 보정서에 따라 보정된 것 으로 본다.

③ 국제특허출원의 출원인이 기준일까지 제1항에 따른 절차를 밟지 아니하면 「특허협력조약」 제34조(2)(b)에 따른 보정서는 제출되지 아니한 것으로 본다. 다만, 「특허협력조약」 제36조(3)(a)에 따라 기준일까지 그 보정서(국어로 작 성된 보정서의 경우만 해당한다)가 지식재산처에 송달된 경우에는 그러하지 아니하다.`},206:{title:`재외자의 특허관리인의 특례`,content:`① 재외자인 국제특허출원의 출원인은 기준일까지는 제5조제1항에도 불구하고 특허관리인에 의하지 아니하고 특허에 관한 절차를 밟을 수 있다.

② 제201조제1항에 따라 국어번역문을 제출한 재외자는 총리령으로 정하는 기간에 특허관리인을 선임하여 지식재 산처장에게 신고하여야 한다.

③ 제2항에 따른 선임신고가 없으면 그 국제특허출원은 취하된 것으로 본다.`},207:{title:`출원공개시기 및 효과의 특례`,content:`① 국제특허출원의 출원공개에 관하여 제64조제1항을 적용하는 경우에는 “다 음 각 호의 구분에 따른 날부터 1년 6개월이 지난 후”는 “국내서면제출기간(제201조제1항 각 호 외의 부분 단서에 따라 국어번역문의 제출기간을 연장해 달라는 취지를 적은 서면이 제출된 경우에는 연장된 국어번역문 제출 기간을 말한다. 이하 이 항에서 같다)이 지난 후(국내서면제출기간에 출원인이 출원심사의 청구를 한 국제특허출원으로서 「 특허협력조약」 제21조에 따라 국제공개된 경우에는 우선일부터 1년 6개월이 되는 날 또는 출원심사의 청구일 중 늦 은 날이 지난 후)”로 본다.

② 제1항에도 불구하고 국어로 출원한 국제특허출원에 관하여 제1항에 따른 출원공개 전에 이미 「특허협력조약」 제21조에 따라 국제공개가 된 경우에는 그 국제공개가 된 때에 출원공개가 된 것으로 본다.

③ 국제특허출원의 출원인은 국제특허출원에 관하여 출원공개(국어로 출원한 국제특허출원인 경우 「특허협력조약 」 제21조에 따른 국제공개를 말한다. 이하 이 조에서 같다)가 있은 후 국제특허출원된 발명을 업으로 실시한 자에게 국제특허출원된 발명인 것을 서면으로 경고할 수 있다.

④ 국제특허출원의 출원인은 제3항에 따른 경고를 받거나 출원공개된 발명임을 알고도 그 국제특허출원된 발명을 업으로서 실시한 자에게 그 경고를 받거나 출원공개된 발명임을 안 때부터 특허권의 설정등록 시까지의 기간 동안 그 특허발명의 실시에 대하여 합리적으로 받을 수 있는 금액에 상당하는 보상금의 지급을 청구할 수 있다. 다만, 그 청구권은 해당 특허출원이 특허권의 설정등록된 후에만 행사할 수 있다.`},208:{title:`보정의 특례 등`,content:`① 국제특허출원에 관하여는 다음 각 호의 요건을 모두 갖추지 아니하면 제47조제1항에도 불 구하고 보정(제204조제2항 및 제205조제2항에 따른 보정은 제외한다)을 할 수 없다.

1. 제82조제1항에 따른 수수료를 낼 것

2. 제201조제1항에 따른 국어번역문을 제출할 것. 다만, 국어로 출원된 국제특허출원인 경우는 그러하지 아니하다.

3. 기준일(기준일이 출원심사의 청구일인 경우 출원심사를 청구한 때를 말한다)이 지날 것

② 삭제<2001.

2. 3.>

③ 외국어로 출원된 국제특허출원의 보정할 수 있는 범위에 관하여 제47조제2항 전단을 적용할 때에는 “특허출원 서에 최초로 첨부한 명세서 또는 도면”은 “국제출원일까지 제출한 발명의 설명, 청구범위 또는 도면”으로 본다.<개 정 2014.

6. 11.>

④ 외국어로 출원된 국제특허출원의 보정할 수 있는 범위에 관하여 제47조제2항 후단을 적용할 때에는 “외국어특 허출원”은 “외국어로 출원된 국제특허출원”으로, “최종 국어번역문(제42조의3제6항 전단에 따른 정정이 있는 경우 에는 정정된 국어번역문을 말한다) 또는 특허출원서에 최초로 첨부한 도면(도면 중 설명부분은 제외한다)”은 “제 201조제5항에 따른 최종 국어번역문(제201조제6항 전단에 따른 정정이 있는 경우에는 정정된 국어번역문을 말한 다) 또는 국제출원일까지 제출한 도면(도면 중 설명부분은 제외한다)”으로 본다.

⑤ 삭제<2001.

2. 3.>`},209:{title:`변경출원시기의 제한`,content:`「실용신안법」 제34조제1항에 따라 국제출원일에 출원된 실용신안등록출원으로 보는 국제출원을 기초로 하여 특허출원으로 변경출원을 하는 경우에는 이 법 제53조제1항에도 불구하고 「실용신안법」 제17조제1항에 따른 수수료를 내고 같은 법 제35조제1항에 따른 국어번역문(국어로 출원된 국제실용신안등록출원 의 경우는 제외한다)을 제출한 후(「실용신안법」 제40조제4항에 따라 국제출원일로 인정할 수 있었던 날에 출원된 것으로 보는 국제출원을 기초로 하는 경우에는 같은 항에 따른 결정이 있은 후)에만 변경출원을 할 수 있다.`},210:{title:`출원심사청구시기의 제한`,content:`국제특허출원에 관하여는 제59조제2항에도 불구하고 다음 각 호의 어느 하나에 해 당하는 때에만 출원심사의 청구를 할 수 있다.

1. 국제특허출원의 출원인은 제201조제1항에 따라 국어번역문을 제출하고(국어로 출원된 국제특허출원의 경우는 제외한다) 제82조제1항에 따른 수수료를 낸 후

2. 국제특허출원의 출원인이 아닌 자는 국내서면제출기간(제201조제1항 각 호 외의 부분 단서에 따라 국어번역문의 제출기간을 연장하여 달라는 취지를 적은 서면이 제출된 경우에는 연장된 국어번역문 제출 기간을 말한다)이 지 난 후`},211:{title:`국제조사보고서 등에 기재된 문헌의 제출명령`,content:`지식재산처장은 국제특허출원의 출원인에 대하여 기간을 정하 여 「특허협력조약」 제18조의 국제조사보고서 또는 같은 조약 제35조의 국제예비심사보고서에 적혀 있는 문헌의 사 본을 제출하게 할 수 있다.`},212:{title:`삭제`,content:`삭제 <2006.

3. 3.>`},213:{title:`삭제`,content:`삭제 <2014.

6. 11.>`},214:{title:`결정에 의하여 특허출원으로 되는 국제출원`,content:`① 국제출원의 출원인은 「특허협력조약」 제4조(1)(ii)의 지정국에 대한민국을 포함하는 국제출원(특허출원만 해당한다)이 다음 각 호의 어느 하나에 해당하는 경우 총리령으로 정하는 기간에 총리령으로 정하는 바에 따라 지식재산처장에게 같은 조약 제25조(2)(a)에 따른 결정을 하여줄 것을 신청할 수 있다.

1. 「특허협력조약」 제2조(xv)의 수리관청이 그 국제출원에 대하여 같은 조약 제25조(1)(a)에 따른 거부를 한 경우

2. 「특허협력조약」 제2조(xv)의 수리관청이 그 국제출원에 대하여 같은 조약 제25조(1)(a) 또는 (b)에 따른 선언을 한 경우

3. 국제사무국이 그 국제출원에 대하여 같은 조약 제25조(1)(a)에 따른 인정을 한 경우

② 제1항의 신청을 하려는 자는 그 신청 시 발명의 설명, 청구범위 또는 도면(도면 중 설명부분에 한정한다), 그 밖 에 총리령으로 정하는 국제출원에 관한 서류의 국어번역문을 지식재산처장에게 제출하여야 한다.<개정 2025. 10. 1.>

③ 지식재산처장은 제1항의 신청이 있으면 그 신청에 관한 거부ㆍ선언 또는 인정이 「특허협력조약」 및 같은 조약 규칙에 따라 정당하게 된 것인지에 관하여 결정을 하여야 한다.

④ 지식재산처장은 제3항에 따라 그 거부ㆍ선언 또는 인정이 「특허협력조약」 및 같은 조약규칙에 따라 정당하게 된 것이 아니라고 결정을 한 경우에는 그 결정에 관한 국제출원은 그 국제출원에 대하여 거부ㆍ선언 또는 인정이 없었다면 국제출원일로 인정할 수 있었던 날에 출원된 특허출원으로 본다.

⑤ 지식재산처장은 제3항에 따른 정당성 여부의 결정을 하는 경우에는 그 결정의 등본을 국제출원의 출원인에게 송 달하여야 한다.

⑥ 제4항에 따라 특허출원으로 보는 국제출원에 관하여는 제199조제2항, 제200조, 제200조의2, 제201조제5항부터 제8항까지, 제202조제1항ㆍ제2항, 제208조 및 제210조를 준용한다.

⑦ 제4항에 따라 특허출원으로 보는 국제출원에 관한 출원공개에 관하여는 제64조제1항 중 “다음 각 호의 구분에 따른 날”을 “제201조제1항의 우선일”로 본다.`},215:{title:`둘 이상의 청구항이 있는 특허 또는 특허권에 관한 특칙`,content:`둘 이상의 청구항이 있는 특허 또는 특허권에 관하여 제65조제6항, 제84조제1항제2호ㆍ제6호, 제85조제1항제1호(소멸의 경우만 해당한다), 제101조제1항제1호, 제104조 제1항제1호ㆍ제3호ㆍ제5호, 제119조제1항, 제132조의13제3항, 제133조제2항ㆍ제3항, 제136조제7항, 제139조제1항 , 제181조, 제182조 또는 「실용신안법」 제26조제1항제2호ㆍ제4호ㆍ제5호를 적용할 때에는 청구항마다 특허가 되거 나 특허권이 있는 것으로 본다.`},"215의2":{title:`둘 이상의 청구항이 있는 특허출원의 등록에 관한 특칙`,content:`① 둘 이상의 청구항이 있는 특허출원에 대한 특허 결정을 받은 자가 특허료를 낼 때에는 청구항별로 이를 포기할 수 있다.

② 제1항에 따른 청구항의 포기에 관하여 필요한 사항은 총리령으로 정한다.`},216:{title:`서류의 열람 등`,content:`① 특허출원, 특허취소신청, 심판 등에 관한 증명, 서류의 등본 또는 초본의 발급, 특허원부 및 서류의 열람 또는 복사가 필요한 자는 지식재산처장 또는 특허심판원장에게 서류의 열람 등의 허가를 신청할 수 있

다.

② 지식재산처장 또는 특허심판원장은 제1항의 신청이 있더라도 다음 각 호의 어느 하나에 해당하는 서류를 비밀로 유지할 필요가 있다고 인정하는 경우에는 그 서류의 열람 또는 복사를 허가하지 아니할 수 있다.<개정 2016. 2. 29., 2025. 10. 1.>

1. 출원공개 또는 설정등록되지 아니한 특허출원(제55조제1항에 따른 우선권 주장을 수반하는 특허출원이 출원공 개 또는 설정등록된 경우에는 그 선출원은 제외한다)에 관한 서류

2. 출원공개 또는 설정등록되지 아니한 특허출원의 제132조의17에 따른 특허거절결정에 대한 심판에 관한 서류

3. 공공의 질서 또는 선량한 풍속에 어긋나거나 공중의 위생을 해칠 우려가 있는 서류`},217:{title:`특허출원 등에 관한 서류 등의 반출 및 감정 등의 금지`,content:`① 특허출원ㆍ심사ㆍ특허취소신청ㆍ심판ㆍ재심에 관 한 서류 또는 특허원부는 다음 각 호의 어느 하나에 해당하는 경우에만 외부로 반출할 수 있다. <개정 2016. 2. 29., 2016. 12. 2., 2017. 11. 28., 2018. 4. 17., 2021. 8. 17., 2024. 2. 6., 2025. 10. 1.>

1. 제58조제1항, 제3항 또는 제4항에 따른 선행기술의 조사 등을 위하여 특허출원 또는 심사에 관한 서류를 반출하 는 경우 1의2. 제164조의2제2항에 따른 조정을 위하여 특허출원ㆍ심사ㆍ특허취소신청ㆍ심판ㆍ재심에 관한 서류 또는 특허 원부를 반출하는 경우

2. 「산업재산 정보의 관리 및 활용 촉진에 관한 법률」 제12조제1항에 따른 산업재산문서 전자화업무의 위탁을 위하 여 특허출원ㆍ심사ㆍ특허취소신청ㆍ심판ㆍ재심에 관한 서류 또는 특허원부를 반출하는 경우

3. 「전자정부법」 제32조제2항에 따른 온라인 원격근무를 위하여 특허출원ㆍ심사ㆍ특허취소신청ㆍ심판ㆍ재심에 관 한 서류 또는 특허원부를 반출하는 경우

4. 외국 특허담당 정부기관 또는 국제기구와의 업무협약을 이행하기 위하여 특허출원 또는 심사에 관한 서류를 반 출하는 경우

② 특허출원ㆍ심사ㆍ특허취소신청ㆍ심판 또는 재심으로 계속 중인 사건의 내용이나 특허여부결정ㆍ심결 또는 결 정의 내용에 관하여는 감정ㆍ증언하거나 질의에 응답할 수 없다.

③ 제1항제4호에 따른 반출 요건ㆍ절차, 서류의 종류 등에 필요한 사항은 총리령으로 정한다.<신설 2017. 11. 28., 2025. 10. 1.>`},"217의2":{title:`삭제`,content:`삭제 <2024.

2. 6.>`},218:{title:`서류의 송달`,content:`이 법에 규정된 서류의 송달절차 등에 관하여 필요한 사항은 대통령령으로 정한다.`},219:{title:`공시송달`,content:`① 서류를 송달받을 자의 주소나 영업소가 분명하지 아니하여 송달할 수 없는 경우에는 공시송달 (公示送達)을 하여야 한다.

② 공시송달은 서류를 송달받을 자에게 어느 때라도 발급한다는 뜻을 특허공보에 게재하는 것으로 한다.

③ 최초의 공시송달은 특허공보에 게재한 날부터 2주일이 지나면 그 효력이 발생한다. 다만, 같은 당사자에 대한 이 후의 공시송달은 특허공보에 게재한 날의 다음 날부터 효력이 발생한다.`},220:{title:`재외자에 대한 송달`,content:`① 재외자로서 특허관리인이 있으면 그 재외자에게 송달할 서류는 특허관리인에게 송달 하여야 한다.

② 재외자로서 특허관리인이 없으면 그 재외자에게 송달할 서류는 항공등기우편으로 발송할 수 있다.

③ 제2항에 따라 서류를 항공등기우편으로 발송한 경우에는 그 발송일에 송달된 것으로 본다.`},221:{title:`특허공보`,content:`① 지식재산처장은 대통령령으로 정하는 바에 따라 특허공보를 발행하여야 한다. <개정 2025. 10. 1.>

② 특허공보는 총리령으로 정하는 바에 따라 전자적 매체로 발행할 수 있다.

③ 지식재산처장은 전자적 매체로 특허공보를 발행하는 경우에는 정보통신망을 활용하여 특허공보의 발행사실ㆍ 주요목록 및 공시송달에 관한 사항을 알려야 한다.`},222:{title:`서류의 제출 등`,content:`지식재산처장 또는 심사관은 당사자에게 특허취소신청, 심판 또는 재심에 관한 절차 외의 절 차를 처리하기 위하여 필요한 서류나 그 밖의 물건의 제출을 명할 수 있다.`},223:{title:`특허표시 및 특허출원표시`,content:`①특허권자, 전용실시권자 또는 통상실시권자는 다음 각 호의 구분에 따른 방법으 로 특허표시를 할 수 있다.

1. 물건의 특허발명의 경우: 그 물건에 “특허”라는 문자와 그 특허번호를 표시

2. 물건을 생산하는 방법의 특허발명의 경우: 그 방법에 따라 생산된 물건에 “방법특허”라는 문자와 그 특허번호를 표시

3. 삭제<2017.

3. 21.>

② 특허출원인은 다음 각 호의 구분에 따른 방법으로 특허출원의 표시(이하 “특허출원표시”라 한다)를 할 수 있다.

1. 물건의 특허출원의 경우: 그 물건에 “특허출원(심사중)”이라는 문자와 그 출원번호를 표시

2. 물건을 생산하는 방법의 특허출원의 경우: 그 방법에 따라 생산된 물건에 “방법특허출원(심사중)”이라는 문자와 그 출원번호를 표시

③ 제1항 또는 제2항에 따른 특허표시 또는 특허출원표시를 할 수 없는 물건의 경우에는 그 물건의 용기 또는 포장 에 특허표시 또는 특허출원표시를 할 수 있다.

④ 그 밖에 특허표시 또는 특허출원표시에 필요한 사항은 총리령으로 정한다.`},224:{title:`허위표시의 금지`,content:`누구든지 다음 각 호의 어느 하나에 해당하는 행위를 하여서는 아니 된다.

1. 특허된 것이 아닌 물건, 특허출원 중이 아닌 물건, 특허된 것이 아닌 방법이나 특허출원 중이 아닌 방법에 의하여 생산한 물건 또는 그 물건의 용기나 포장에 특허표시 또는 특허출원표시를 하거나 이와 혼동하기 쉬운 표시를 하 는 행위

2. 제1호의 표시를 한 것을 양도ㆍ대여 또는 전시하는 행위

3. 제1호의 물건을 생산ㆍ사용ㆍ양도 또는 대여하기 위하여 광고ㆍ간판 또는 표찰에 그 물건이 특허나 특허출원된 것 또는 특허된 방법이나 특허출원 중인 방법에 따라 생산한 것으로 표시하거나 이와 혼동하기 쉬운 표시를 하는 행위

4. 특허된 것이 아닌 방법이나 특허출원 중이 아닌 방법을 사용ㆍ양도 또는 대여하기 위하여 광고ㆍ간판 또는 표찰 에 그 방법이 특허 또는 특허출원된 것으로 표시하거나 이와 혼동하기 쉬운 표시를 하는 행위`},"224의2":{title:`불복의 제한`,content:`① 보정각하결정, 특허여부결정, 특허취소결정, 심결이나 특허취소신청서ㆍ심판청구서ㆍ재심 청구서의 각하결정에 대해서는 다른 법률에 따른 불복을 할 수 없으며, 이 법에 따라 불복할 수 없도록 규정되어 있 는 처분에 대해서는 다른 법률에 따라 불복을 할 수 없다.

② 제1항에 따른 처분 외의 처분의 불복에 대해서는 「행정심판법」 또는 「행정소송법」에 따른다.`},"224의3":{title:`비밀유지명령`,content:`① 법원은 특허권 또는 전용실시권의 침해에 관한 소송에서 그 당사자가 보유한 영업비밀에 대하여 다음 각 호의 사유를 모두 소명한 경우에는 그 당사자의 신청에 따라 결정으로 다른 당사자(법인인 경우에는 그 대표자), 당사자를 위하여 소송을 대리하는 자, 그 밖에 그 소송으로 인하여 영업비밀을 알게 된 자에게 그 영업비 밀을 그 소송의 계속적인 수행 외의 목적으로 사용하거나 그 영업비밀에 관계된 이 항에 따른 명령을 받은 자 외의 자에게 공개하지 아니할 것을 명할 수 있다. 다만, 그 신청 시점까지 다른 당사자(법인인 경우에는 그 대표자), 당사자 를 위하여 소송을 대리하는 자, 그 밖에 그 소송으로 인하여 영업비밀을 알게 된 자가 제1호에 규정된 준비서면의 열 람이나 증거조사 외의 방법으로 그 영업비밀을 이미 취득하고 있는 경우에는 그러하지 아니하다. <개정 2016. 3. 29.>

1. 이미 제출하였거나 제출하여야 할 준비서면, 이미 조사하였거나 조사하여야 할 증거 또는 제132조제3항에 따라 제출하였거나 제출하여야 할 자료에 영업비밀이 포함되어 있다는 것

2. 제1호의 영업비밀이 해당 소송 수행 외의 목적으로 사용되거나 공개되면 당사자의 영업에 지장을 줄 우려가 있 어 이를 방지하기 위하여 영업비밀의 사용 또는 공개를 제한할 필요가 있다는 것

② 제1항에 따른 명령(이하 “비밀유지명령”이라 한다)의 신청은 다음 각 호의 사항을 적은 서면으로 하여야 한다.

1. 비밀유지명령을 받을 자

2. 비밀유지명령의 대상이 될 영업비밀을 특정하기에 충분한 사실

3. 제1항 각 호의 사유에 해당하는 사실

③ 법원은 비밀유지명령이 결정된 경우에는 그 결정서를 비밀유지명령을 받은 자에게 송달하여야 한다.

④ 비밀유지명령은 제3항의 결정서가 비밀유지명령을 받은 자에게 송달된 때부터 효력이 발생한다.

⑤ 비밀유지명령의 신청을 기각하거나 각하한 재판에 대해서는 즉시항고를 할 수 있다.`},"224의4":{title:`비밀유지명령의 취소`,content:`① 비밀유지명령을 신청한 자 또는 비밀유지명령을 받은 자는 제224조의3제1항에 따른 요건을 갖추지 못하였거나 갖추지 못하게 된 경우 소송기록을 보관하고 있는 법원(소송기록을 보관하고 있는 법원이 없는 경우에는 비밀유지명령을 내린 법원)에 비밀유지명령의 취소를 신청할 수 있다.

② 법원은 비밀유지명령의 취소신청에 대한 재판이 있는 경우에는 그 결정서를 그 신청을 한 자 및 상대방에게 송 달하여야 한다.

③ 비밀유지명령의 취소신청에 대한 재판에 대해서는 즉시항고를 할 수 있다.

④ 비밀유지명령을 취소하는 재판은 확정되어야 효력이 발생한다.

⑤ 비밀유지명령을 취소하는 재판을 한 법원은 비밀유지명령의 취소신청을 한 자 또는 상대방 외에 해당 영업비밀 에 관한 비밀유지명령을 받은 자가 있는 경우에는 그 자에게 즉시 비밀유지명령의 취소 재판을 한 사실을 알려야 한다.`},"224의5":{title:`소송기록 열람 등의 청구 통지 등`,content:`① 비밀유지명령이 내려진 소송(모든 비밀유지명령이 취소된 소송은 제 외한다)에 관한 소송기록에 대하여 「민사소송법」 제163조제1항의 결정이 있었던 경우, 당사자가 같은 항에서 규정 하는 비밀 기재부분의 열람 등의 청구를 하였으나 그 청구 절차를 해당 소송에서 비밀유지명령을 받지 아니한 자가 밟은 경우에는 법원서기관, 법원사무관, 법원주사 또는 법원주사보(이하 이 조에서 “법원사무관등”이라 한다)는 「민 사소송법」 제163조제1항의 신청을 한 당사자(그 열람 등의 청구를 한 자는 제외한다. 이하 제3항에서 같다)에게 그 청구 직후에 그 열람 등의 청구가 있었다는 사실을 알려야 한다.

② 제1항의 경우에 법원사무관등은 제1항의 청구가 있었던 날부터 2주일이 지날 때까지(그 청구 절차를 밟은 자에 대한 비밀유지명령 신청이 그 기간 내에 이루어진 경우에는 그 신청에 대한 재판이 확정되는 시점까지) 그 청구 절 차를 밟은 자에게 제1항의 비밀 기재부분의 열람 등을 하게 하여서는 아니 된다.

③ 제2항은 제1항의 열람 등의 청구를 한 자에게 제1항의 비밀 기재부분의 열람 등을 하게 하는 것에 대하여 「민사 소송법」 제163조제1항의 신청을 한 당사자 모두가 동의하는 경우에는 적용되지 아니한다.`},225:{title:`침해죄`,content:`① 특허권 또는 전용실시권을 침해한 자는 7년 이하의 징역 또는 1억원 이하의 벌금에 처한다.

② 제1항의 죄는 피해자의 명시적인 의사에 반하여 공소(公訴)를 제기할 수 없다.`},226:{title:`비밀누설죄 등`,content:`① 지식재산처 또는 특허심판원 소속 직원이거나 직원이었던 사람이 특허출원 중인 발명(국제 출원 중인 발명을 포함한다)에 관하여 직무상 알게 된 비밀을 누설하거나 도용한 경우에는 5년 이하의 징역 또는 5천만원 이하의 벌금에 처한다.

② 전문심리위원 또는 전문심리위원이었던 자가 그 직무수행 중에 알게 된 다른 사람의 비밀을 누설하는 경우에는 2년 이하의 징역이나 금고 또는 1천만원 이하의 벌금에 처한다.`},"226의2":{title:`전문기관 등의 임직원에 대한 공무원 의제`,content:`① 제58조제2항에 따른 전문기관 또는 제58조제3항에 따른 전 담기관의 임직원이거나 임직원이었던 사람은 제226조제1항을 적용하는 경우에는 지식재산처 소속 직원 또는 직원 이었던 사람으로 본다.

② 전문심리위원은 「형법」 제129조부터 제132조까지의 규정을 적용할 때에는 공무원으로 본다.<신설 2021. 4. 20.>`},227:{title:`위증죄`,content:`① 이 법에 따라 선서한 증인, 감정인 또는 통역인이 특허심판원에 대하여 거짓으로 진술ㆍ감정 또는 통역을 한 경우에는 5년 이하의 징역 또는 5천만원 이하의 벌금에 처한다.

② 제1항에 따른 죄를 범한 자가 그 사건의 특허취소신청에 대한 결정 또는 심결이 확정되기 전에 자수한 경우에는 그 형을 감경 또는 면제할 수 있다.`},228:{title:`허위표시의 죄`,content:`제224조를 위반한 자는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처한다. <개정 2017. 3. 21.>`},229:{title:`거짓행위의 죄`,content:`거짓이나 그 밖의 부정한 행위로 특허, 특허권의 존속기간의 연장등록, 특허취소신청에 대한 결정 또는 심결을 받은 자는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처한다.`},"229의2":{title:`비밀유지명령 위반죄`,content:`① 국내외에서 정당한 사유 없이 제224조의3제1항에 따른 비밀유지명령을 위반한 자는 5년 이하의 징역 또는 5천만원 이하의 벌금에 처한다.

② 제1항의 죄는 비밀유지명령을 신청한 자의 고소가 없으면 공소를 제기할 수 없다.`},"229의3":{title:`외국에의 특허출원 금지 또는 비밀취급명령 위반죄`,content:`제41조제1항에 따른 외국에의 특허출원 금지 또는 비 밀취급명령을 위반한 자는 5년 이하의 징역 또는 5천만원 이하의 벌금에 처한다.`},230:{title:`양벌규정`,content:`법인의 대표자나 법인 또는 개인의 대리인, 사용인, 그 밖의 종업원이 그 법인 또는 개인의 업무에 관하여 제225조제1항, 제228조, 제229조 또는 제229조의3의 어느 하나에 해당하는 위반행위를 하면 그 행위자를 벌 하는 외에 그 법인에는 다음 각 호의 구분에 따른 벌금형을, 그 개인에게는 해당 조문의 벌금형을 과(科)한다. 다만, 법인 또는 개인이 그 위반행위를 방지하기 위하여 해당 업무에 관하여 상당한 주의와 감독을 게을리하지 아니한 경 우에는 그러하지 아니하다.

1. 제225조제1항의 경우: 3억원 이하의 벌금

2. 제228조 또는 제229조의 경우: 6천만원 이하의 벌금

3. 제229조의3의 경우: 1억원 이하의 벌금`},231:{title:`몰수 등`,content:`① 제225조제1항에 해당하는 침해행위를 조성한 물건 또는 그 침해행위로부터 생긴 물건은 몰수하거 나 피해자의 청구에 따라 그 물건을 피해자에게 교부할 것을 선고하여야 한다.

② 피해자는 제1항에 따른 물건을 받은 경우에는 그 물건의 가액을 초과하는 손해액에 대해서만 배상을 청구할 수 있다.`},232:{title:`과태료`,content:`① 다음 각 호의 어느 하나에 해당하는 자에게는 50만원 이하의 과태료를 부과한다.

1. 「민사소송법」 제299조제2항 및 같은 법 제367조에 따라 선서를 한 자로서 특허심판원에 대하여 거짓 진술을 한 자

2. 특허심판원으로부터 증거조사 또는 증거보전에 관하여 서류나 그 밖의 물건 제출 또는 제시의 명령을 받은 자로 서 정당한 이유 없이 그 명령에 따르지 아니한 자

3. 특허심판원으로부터 증인ㆍ감정인 또는 통역인으로 소환된 자로서 정당한 이유 없이 소환에 따르지 아니하거나 선서ㆍ진술ㆍ증언ㆍ감정 또는 통역을 거부한 자

② 제1항에 따른 과태료는 대통령령으로 정하는 바에 따라 지식재산처장이 부과ㆍ징수한다.`}};function qn({node:e}){let[t,n]=(0,_.useState)(new Set),r=e.groups&&e.groups.length>0,i=e.items&&e.items.length>0,a=r||i,o=e=>{n(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},s=()=>{!e.articles||e.articles.length===0||(e.articles.every(e=>t.has(e))?n(new Set):n(new Set(e.articles)))};if(a)return(0,j.jsxs)(Hn,{title:e.title,children:[e.groups?.map((e,t)=>(0,j.jsx)(qn,{node:e},`${e.title}-${t}`)),e.items?.map((e,t)=>(0,j.jsx)(qn,{node:e},`${e.title}-${t}`))]});let c=e.articles&&e.articles.length>0&&e.articles.every(e=>t.has(e));return(0,j.jsxs)(`div`,{className:`tree-leaf`,children:[(0,j.jsxs)(`button`,{type:`button`,className:`tree-leaf-title-button ${c?`open`:``}`,onClick:s,children:[(0,j.jsx)(`span`,{children:e.title}),e.articles&&e.articles.length>0&&(0,j.jsx)(`span`,{className:`tree-leaf-toggle`,children:c?`−`:`+`})]}),e.note&&(0,j.jsx)(`div`,{className:`tree-note`,children:e.note}),e.articles&&e.articles.length>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`div`,{className:`article-list`,children:e.articles.map(e=>{let n=t.has(e);return(0,j.jsx)(`button`,{type:`button`,className:`article-button ${n?`active`:``}`,onClick:()=>o(e),children:e},e)})}),(0,j.jsx)(`div`,{className:`opened-articles`,children:e.articles.map(e=>{if(!t.has(e))return null;let n=Kn[e];return n?(0,j.jsx)(Gn,{articleNumber:e,title:n.title,content:n.content},e):(0,j.jsxs)(`div`,{className:`article-view`,children:[(0,j.jsx)(`div`,{className:`article-heading`,children:e}),(0,j.jsx)(`div`,{className:`article-content`,children:`해당 조문 데이터가 articles.json에 없습니다.`})]},e)})})]})]})}function Jn(){let{categoryId:e}=vt(),t=zn.categories.find(t=>t.id===e);return t?(0,j.jsxs)(`main`,{className:`app`,children:[(0,j.jsx)(On,{to:`/`,className:`back-link`,children:`← 전체 체계도`}),(0,j.jsxs)(`h1`,{children:[t.number,`. `,t.title]}),(0,j.jsxs)(`div`,{className:`tree-container`,children:[t.groups?.map((e,t)=>(0,j.jsx)(qn,{node:e},`${e.title}-${t}`)),t.items?.map((e,t)=>(0,j.jsx)(qn,{node:e},`${e.title}-${t}`))]})]}):(0,j.jsxs)(`main`,{className:`app`,children:[(0,j.jsx)(`p`,{children:`존재하지 않는 페이지입니다.`}),(0,j.jsx)(On,{to:`/`,children:`홈으로`})]})}function Yn(){return(0,j.jsx)(Dn,{children:(0,j.jsxs)(Ht,{children:[(0,j.jsx)(Bt,{path:`/`,element:(0,j.jsx)(Vn,{})}),(0,j.jsx)(Bt,{path:`/category/:categoryId`,element:(0,j.jsx)(Jn,{})})]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(_.StrictMode,{children:(0,j.jsx)(Yn,{})}));