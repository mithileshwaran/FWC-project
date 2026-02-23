function VT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function LT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qy={exports:{}},nu={},Yy={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),MT=Symbol.for("react.portal"),jT=Symbol.for("react.fragment"),UT=Symbol.for("react.strict_mode"),FT=Symbol.for("react.profiler"),BT=Symbol.for("react.provider"),zT=Symbol.for("react.context"),$T=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),HT=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),dm=Symbol.iterator;function KT(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var Xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jy=Object.assign,Zy={};function oi(t,e,n){this.props=t,this.context=e,this.refs=Zy,this.updater=n||Xy}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ev(){}ev.prototype=oi.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=Zy,this.updater=n||Xy}var gd=md.prototype=new ev;gd.constructor=md;Jy(gd,oi.prototype);gd.isPureReactComponent=!0;var fm=Array.isArray,tv=Object.prototype.hasOwnProperty,yd={current:null},nv={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)tv.call(e,r)&&!nv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Uo,type:t,key:i,ref:o,props:s,_owner:yd.current}}function GT(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function QT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QT(""+t.key):e.toString(36)}function Ga(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case MT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+cc(o,0):r,fm(s)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Ga(s,e,n,"",function(c){return c})):s!=null&&(vd(s)&&(s=GT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",fm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+cc(i,l);o+=Ga(i,e,n,u,s)}else if(u=KT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+cc(i,l++),o+=Ga(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],s=0;return Ga(t,r,"","",function(i){return e.call(n,i,s++)}),r}function YT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},Qa={transition:null},XT={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:yd};function sv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=oi;te.Fragment=jT;te.Profiler=FT;te.PureComponent=md;te.StrictMode=UT;te.Suspense=WT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XT;te.act=sv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=yd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)tv.call(e,u)&&!nv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Uo,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:zT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BT,_context:t},t.Consumer=t};te.createElement=rv;te.createFactory=function(t){var e=rv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:$T,render:t}};te.isValidElement=vd;te.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:YT}};te.memo=function(t,e){return{$$typeof:HT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};te.unstable_act=sv;te.useCallback=function(t,e){return mt.current.useCallback(t,e)};te.useContext=function(t){return mt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};te.useEffect=function(t,e){return mt.current.useEffect(t,e)};te.useId=function(){return mt.current.useId()};te.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return mt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};te.useRef=function(t){return mt.current.useRef(t)};te.useState=function(t){return mt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return mt.current.useTransition()};te.version="18.3.1";Yy.exports=te;var V=Yy.exports;const _d=LT(V),JT=VT({__proto__:null,default:_d},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=V,eI=Symbol.for("react.element"),tI=Symbol.for("react.fragment"),nI=Object.prototype.hasOwnProperty,rI=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sI={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nI.call(e,r)&&!sI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:eI,type:t,key:i,ref:o,props:s,_owner:rI.current}}nu.Fragment=tI;nu.jsx=iv;nu.jsxs=iv;Qy.exports=nu;var m=Qy.exports,Yc={},ov={exports:{}},bt={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,H){var Y=B.length;B.push(H);e:for(;0<Y;){var Ie=Y-1>>>1,he=B[Ie];if(0<s(he,H))B[Ie]=H,B[Y]=he,Y=Ie;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],Y=B.pop();if(Y!==H){B[0]=Y;e:for(var Ie=0,he=B.length,be=he>>>1;Ie<be;){var gn=2*(Ie+1)-1,yn=B[gn],vn=gn+1,_n=B[vn];if(0>s(yn,Y))vn<he&&0>s(_n,yn)?(B[Ie]=_n,B[vn]=Y,Ie=vn):(B[Ie]=yn,B[gn]=Y,Ie=gn);else if(vn<he&&0>s(_n,Y))B[Ie]=_n,B[vn]=Y,Ie=vn;else break e}}return H}function s(B,H){var Y=B.sortIndex-H.sortIndex;return Y!==0?Y:B.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,S=!1,P=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=B)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function D(B){if(C=!1,R(B),!P)if(n(u)!==null)P=!0,Te(L);else{var H=n(c);H!==null&&ee(D,H.startTime-B)}}function L(B,H){P=!1,C&&(C=!1,E(v),v=-1),S=!0;var Y=g;try{for(R(H),p=n(u);p!==null&&(!(p.expirationTime>H)||B&&!k());){var Ie=p.callback;if(typeof Ie=="function"){p.callback=null,g=p.priorityLevel;var he=Ie(p.expirationTime<=H);H=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),R(H)}else r(u);p=n(u)}if(p!==null)var be=!0;else{var gn=n(c);gn!==null&&ee(D,gn.startTime-H),be=!1}return be}finally{p=null,g=Y,S=!1}}var U=!1,w=null,v=-1,I=5,x=-1;function k(){return!(t.unstable_now()-x<I)}function N(){if(w!==null){var B=t.unstable_now();x=B;var H=!0;try{H=w(!0,B)}finally{H?T():(U=!1,w=null)}}else U=!1}var T;if(typeof _=="function")T=function(){_(N)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,le=K.port2;K.port1.onmessage=N,T=function(){le.postMessage(null)}}else T=function(){A(N,0)};function Te(B){w=B,U||(U=!0,T())}function ee(B,H){v=A(function(){B(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,Te(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var Y=g;g=H;try{return B()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=g;g=B;try{return H()}finally{g=Y}},t.unstable_scheduleCallback=function(B,H,Y){var Ie=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ie+Y:Ie):Y=Ie,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Y+he,B={id:f++,callback:H,priorityLevel:B,startTime:Y,expirationTime:he,sortIndex:-1},Y>Ie?(B.sortIndex=Y,e(c,B),n(u)===null&&B===n(c)&&(C?(E(v),v=-1):C=!0,ee(D,Y-Ie))):(B.sortIndex=he,e(u,B),P||S||(P=!0,Te(L))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var H=g;return function(){var Y=g;g=H;try{return B.apply(this,arguments)}finally{g=Y}}}})(lv);av.exports=lv;var iI=av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=V,Nt=iI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uv=new Set,uo={};function as(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(uo[t]=e,t=0;t<e.length;t++)uv.add(e[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,aI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function lI(t){return Xc.call(gm,t)?!0:Xc.call(mm,t)?!1:aI.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function uI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cI(t,e,n,r){if(e===null||typeof e>"u"||uI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Xe[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wd,Ed);Xe[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wd,Ed);Xe[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,r){var s=Xe.hasOwnProperty(e)?Xe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cI(e,n,s,r)&&(n=null),r||s===null?lI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),eh=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),dv=Symbol.for("react.offscreen"),ym=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,hc;function Mi(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mi(t):""}function hI(t){switch(t.tag){case 5:return Mi(t.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ts:return"Portal";case Jc:return"Profiler";case Id:return"StrictMode";case Zc:return"Suspense";case eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hv:return(t.displayName||"Context")+".Consumer";case cv:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:th(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return th(t(e))}catch{}}return null}function dI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return th(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fI(t){var e=fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=fI(t))}function pv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nh(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mv(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function rh(t,e){mv(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ji(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function gv(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pI=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(t){pI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ki[e]=Ki[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ki.hasOwnProperty(t)&&Ki[t]?(""+e).trim():e+"px"}function wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var mI=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ch=null,Ls=null,Ms=null;function Tm(t){if(t=zo(t)){if(typeof ch!="function")throw Error(F(280));var e=t.stateNode;e&&(e=au(e),ch(t.stateNode,t.type,e))}}function Ev(t){Ls?Ms?Ms.push(t):Ms=[t]:Ls=t}function Tv(){if(Ls){var t=Ls,e=Ms;if(Ms=Ls=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function Iv(t,e){return t(e)}function Sv(){}var pc=!1;function Rv(t,e,n){if(pc)return t(e,n);pc=!0;try{return Iv(t,e,n)}finally{pc=!1,(Ls!==null||Ms!==null)&&(Sv(),Tv())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var hh=!1;if(bn)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){hh=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{hh=!1}function gI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Gi=!1,gl=null,yl=!1,dh=null,yI={onError:function(t){Gi=!0,gl=t}};function vI(t,e,n,r,s,i,o,l,u){Gi=!1,gl=null,gI.apply(yI,arguments)}function _I(t,e,n,r,s,i,o,l,u){if(vI.apply(this,arguments),Gi){if(Gi){var c=gl;Gi=!1,gl=null}else throw Error(F(198));yl||(yl=!0,dh=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(ls(t)!==t)throw Error(F(188))}function wI(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Im(s),t;if(i===r)return Im(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Av(t){return t=wI(t),t!==null?Cv(t):null}function Cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cv(t);if(e!==null)return e;t=t.sibling}return null}var Pv=Nt.unstable_scheduleCallback,Sm=Nt.unstable_cancelCallback,EI=Nt.unstable_shouldYield,TI=Nt.unstable_requestPaint,Oe=Nt.unstable_now,II=Nt.unstable_getCurrentPriorityLevel,Ad=Nt.unstable_ImmediatePriority,kv=Nt.unstable_UserBlockingPriority,vl=Nt.unstable_NormalPriority,SI=Nt.unstable_LowPriority,Nv=Nt.unstable_IdlePriority,ru=null,tn=null;function RI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:CI,xI=Math.log,AI=Math.LN2;function CI(t){return t>>>=0,t===0?32:31-(xI(t)/AI|0)|0}var Ca=64,Pa=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ui(l):(i&=o,i!==0&&(r=Ui(i)))}else o=n&~s,o!==0?r=Ui(o):i!==0&&(r=Ui(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),s=1<<n,r|=t[n],e&=~s;return r}function PI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=PI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bv(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function NI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ue=0;function Dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ov,Pd,Vv,Lv,Mv,ph=!1,ka=[],lr=null,ur=null,cr=null,fo=new Map,po=new Map,Xn=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Pi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=zo(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function DI(t,e,n,r,s){switch(e){case"focusin":return lr=Pi(lr,t,e,n,r,s),!0;case"dragenter":return ur=Pi(ur,t,e,n,r,s),!0;case"mouseover":return cr=Pi(cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return fo.set(i,Pi(fo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,po.set(i,Pi(po.get(i)||null,t,e,n,r,s)),!0}return!1}function jv(t){var e=Fr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,Mv(t.priority,function(){Vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uh=r,n.target.dispatchEvent(r),uh=null}else return e=zo(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Ya(t)&&n.delete(e)}function OI(){ph=!1,lr!==null&&Ya(lr)&&(lr=null),ur!==null&&Ya(ur)&&(ur=null),cr!==null&&Ya(cr)&&(cr=null),fo.forEach(xm),po.forEach(xm)}function ki(t,e){t.blockedOn===e&&(t.blockedOn=null,ph||(ph=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,OI)))}function mo(t){function e(s){return ki(s,t)}if(0<ka.length){ki(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&ki(lr,t),ur!==null&&ki(ur,t),cr!==null&&ki(cr,t),fo.forEach(e),po.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)jv(n),n.blockedOn===null&&Xn.shift()}var js=Bn.ReactCurrentBatchConfig,wl=!0;function VI(t,e,n,r){var s=ue,i=js.transition;js.transition=null;try{ue=1,kd(t,e,n,r)}finally{ue=s,js.transition=i}}function LI(t,e,n,r){var s=ue,i=js.transition;js.transition=null;try{ue=4,kd(t,e,n,r)}finally{ue=s,js.transition=i}}function kd(t,e,n,r){if(wl){var s=mh(t,e,n,r);if(s===null)Rc(t,e,r,El,n),Rm(t,r);else if(DI(s,t,e,n,r))r.stopPropagation();else if(Rm(t,r),e&4&&-1<bI.indexOf(t)){for(;s!==null;){var i=zo(s);if(i!==null&&Ov(i),i=mh(t,e,n,r),i===null&&Rc(t,e,r,El,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Rc(t,e,r,null,n)}}var El=null;function mh(t,e,n,r){if(El=null,t=xd(r),t=Fr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case Ad:return 1;case kv:return 4;case vl:case SI:return 16;case Nv:return 536870912;default:return 16}default:return 16}}var sr=null,Nd=null,Xa=null;function Fv(){if(Xa)return Xa;var t,e=Nd,n=e.length,r,s="value"in sr?sr.value:sr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Xa=s.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Am(){return!1}function Dt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Na:Am,this.isPropagationStopped=Am,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=Dt(ai),Bo=xe({},ai,{view:0,detail:0}),MI=Dt(Bo),gc,yc,Ni,su=xe({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(gc=t.screenX-Ni.screenX,yc=t.screenY-Ni.screenY):yc=gc=0,Ni=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Cm=Dt(su),jI=xe({},su,{dataTransfer:0}),UI=Dt(jI),FI=xe({},Bo,{relatedTarget:0}),vc=Dt(FI),BI=xe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),zI=Dt(BI),$I=xe({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WI=Dt($I),HI=xe({},ai,{data:0}),Pm=Dt(HI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GI[t])?!!e[t]:!1}function Dd(){return QI}var YI=xe({},Bo,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=Dt(YI),JI=xe({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Dt(JI),ZI=xe({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),eS=Dt(ZI),tS=xe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Dt(tS),rS=xe({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=Dt(rS),iS=[9,13,27,32],Od=bn&&"CompositionEvent"in window,Qi=null;bn&&"documentMode"in document&&(Qi=document.documentMode);var oS=bn&&"TextEvent"in window&&!Qi,Bv=bn&&(!Od||Qi&&8<Qi&&11>=Qi),Nm=" ",bm=!1;function zv(t,e){switch(t){case"keyup":return iS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function aS(t,e){switch(t){case"compositionend":return $v(e);case"keypress":return e.which!==32?null:(bm=!0,Nm);case"textInput":return t=e.data,t===Nm&&bm?null:t;default:return null}}function lS(t,e){if(Ss)return t==="compositionend"||!Od&&zv(t,e)?(t=Fv(),Xa=Nd=sr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bv&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uS[t.type]:e==="textarea"}function Wv(t,e,n,r){Ev(r),e=Tl(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,go=null;function cS(t){t_(t,0)}function iu(t){var e=As(t);if(pv(e))return t}function hS(t,e){if(t==="change")return e}var Hv=!1;if(bn){var _c;if(bn){var wc="oninput"in document;if(!wc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),wc=typeof Om.oninput=="function"}_c=wc}else _c=!1;Hv=_c&&(!document.documentMode||9<document.documentMode)}function Vm(){Yi&&(Yi.detachEvent("onpropertychange",qv),go=Yi=null)}function qv(t){if(t.propertyName==="value"&&iu(go)){var e=[];Wv(e,go,t,xd(t)),Rv(cS,e)}}function dS(t,e,n){t==="focusin"?(Vm(),Yi=e,go=n,Yi.attachEvent("onpropertychange",qv)):t==="focusout"&&Vm()}function fS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(go)}function pS(t,e){if(t==="click")return iu(e)}function mS(t,e){if(t==="input"||t==="change")return iu(e)}function gS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:gS;function yo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xc.call(e,s)||!Gt(t[s],e[s]))return!1}return!0}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,e){var n=Lm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lm(n)}}function Kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kv(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Mm(n,i);var o=Mm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vS=bn&&"documentMode"in document&&11>=document.documentMode,Rs=null,gh=null,Xi=null,yh=!1;function jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||Rs==null||Rs!==ml(r)||(r=Rs,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&yo(Xi,r)||(Xi=r,r=Tl(gh,"onSelect"),0<r.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rs)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Ec={},Qv={};bn&&(Qv=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function ou(t){if(Ec[t])return Ec[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qv)return Ec[t]=e[n];return t}var Yv=ou("animationend"),Xv=ou("animationiteration"),Jv=ou("animationstart"),Zv=ou("transitionend"),e_=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){e_.set(t,e),as(e,[t])}for(var Tc=0;Tc<Um.length;Tc++){var Ic=Um[Tc],_S=Ic.toLowerCase(),wS=Ic[0].toUpperCase()+Ic.slice(1);Rr(_S,"on"+wS)}Rr(Yv,"onAnimationEnd");Rr(Xv,"onAnimationIteration");Rr(Jv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Zv,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function Fm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_I(r,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Fm(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Fm(s,l,c),i=u}}}if(yl)throw t=dh,yl=!1,dh=null,t}function me(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(n_(e,t,2,!1),n.add(r))}function Sc(t,e,n){var r=0;e&&(r|=4),n_(n,t,r,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[Da]){t[Da]=!0,uv.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,Sc("selectionchange",!1,e))}}function n_(t,e,n,r){switch(Uv(e)){case 1:var s=VI;break;case 4:s=LI;break;default:s=kd}n=s.bind(null,e,n,t),s=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Rc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Rv(function(){var c=i,f=xd(n),p=[];e:{var g=e_.get(t);if(g!==void 0){var S=bd,P=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":S=XI;break;case"focusin":P="focus",S=vc;break;case"focusout":P="blur",S=vc;break;case"beforeblur":case"afterblur":S=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=UI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=eS;break;case Yv:case Xv:case Jv:S=zI;break;case Zv:S=nS;break;case"scroll":S=MI;break;case"wheel":S=sS;break;case"copy":case"cut":case"paste":S=WI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=km}var C=(e&4)!==0,A=!C&&t==="scroll",E=C?g!==null?g+"Capture":null:g;C=[];for(var _=c,R;_!==null;){R=_;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,E!==null&&(D=ho(_,E),D!=null&&C.push(_o(_,D,R)))),A)break;_=_.return}0<C.length&&(g=new S(g,P,null,n,f),p.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==uh&&(P=n.relatedTarget||n.fromElement)&&(Fr(P)||P[Dn]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=c,P=P?Fr(P):null,P!==null&&(A=ls(P),P!==A||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=c),S!==P)){if(C=Cm,D="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(C=km,D="onPointerLeave",E="onPointerEnter",_="pointer"),A=S==null?g:As(S),R=P==null?g:As(P),g=new C(D,_+"leave",S,n,f),g.target=A,g.relatedTarget=R,D=null,Fr(f)===c&&(C=new C(E,_+"enter",P,n,f),C.target=R,C.relatedTarget=A,D=C),A=D,S&&P)t:{for(C=S,E=P,_=0,R=C;R;R=vs(R))_++;for(R=0,D=E;D;D=vs(D))R++;for(;0<_-R;)C=vs(C),_--;for(;0<R-_;)E=vs(E),R--;for(;_--;){if(C===E||E!==null&&C===E.alternate)break t;C=vs(C),E=vs(E)}C=null}else C=null;S!==null&&Bm(p,g,S,C,!1),P!==null&&A!==null&&Bm(p,A,P,C,!0)}}e:{if(g=c?As(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var L=hS;else if(Dm(g))if(Hv)L=mS;else{L=fS;var U=dS}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=pS);if(L&&(L=L(t,c))){Wv(p,L,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&sh(g,"number",g.value)}switch(U=c?As(c):window,t){case"focusin":(Dm(U)||U.contentEditable==="true")&&(Rs=U,gh=c,Xi=null);break;case"focusout":Xi=gh=Rs=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,jm(p,n,f);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":jm(p,n,f)}var w;if(Od)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ss?zv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Bv&&n.locale!=="ko"&&(Ss||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ss&&(w=Fv()):(sr=f,Nd="value"in sr?sr.value:sr.textContent,Ss=!0)),U=Tl(c,v),0<U.length&&(v=new Pm(v,t,null,n,f),p.push({event:v,listeners:U}),w?v.data=w:(w=$v(n),w!==null&&(v.data=w)))),(w=oS?aS(t,n):lS(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(f=new Pm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=w))}t_(p,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ho(t,n),i!=null&&r.unshift(_o(t,i,s)),i=ho(t,e),i!=null&&r.push(_o(t,i,s))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=ho(n,i),u!=null&&o.unshift(_o(n,u,l))):s||(u=ho(n,i),u!=null&&o.push(_o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(IS,"")}function Oa(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(F(425))}function Il(){}var vh=null,_h=null;function wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(xS)}:Eh;function xS(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);mo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var li=Math.random().toString(36).slice(2),Jt="__reactFiber$"+li,wo="__reactProps$"+li,Dn="__reactContainer$"+li,Th="__reactEvents$"+li,AS="__reactListeners$"+li,CS="__reactHandles$"+li;function Fr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wm(t);t!==null;){if(n=t[Jt])return n;t=Wm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[Jt]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function au(t){return t[wo]||null}var Ih=[],Cs=-1;function xr(t){return{current:t}}function ve(t){0>Cs||(t.current=Ih[Cs],Ih[Cs]=null,Cs--)}function fe(t,e){Cs++,Ih[Cs]=t.current,t.current=e}var wr={},lt=xr(wr),wt=xr(!1),Qr=wr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Et(t){return t=t.childContextTypes,t!=null}function Sl(){ve(wt),ve(lt)}function Hm(t,e,n){if(lt.current!==wr)throw Error(F(168));fe(lt,e),fe(wt,n)}function r_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,dI(t)||"Unknown",s));return xe({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Qr=lt.current,fe(lt,t),fe(wt,wt.current),!0}function qm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=r_(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,ve(wt),ve(lt),fe(lt,t)):ve(wt),fe(wt,n)}var In=null,lu=!1,Ac=!1;function s_(t){In===null?In=[t]:In.push(t)}function PS(t){lu=!0,s_(t)}function Ar(){if(!Ac&&In!==null){Ac=!0;var t=0,e=ue;try{var n=In;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,lu=!1}catch(s){throw In!==null&&(In=In.slice(t+1)),Pv(Ad,Ar),s}finally{ue=e,Ac=!1}}return null}var Ps=[],ks=0,xl=null,Al=0,Ot=[],Vt=0,Yr=null,Sn=1,Rn="";function Mr(t,e){Ps[ks++]=Al,Ps[ks++]=xl,xl=t,Al=e}function i_(t,e,n){Ot[Vt++]=Sn,Ot[Vt++]=Rn,Ot[Vt++]=Yr,Yr=t;var r=Sn;t=Rn;var s=32-qt(r)-1;r&=~(1<<s),n+=1;var i=32-qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Sn=1<<32-qt(e)+s|n<<s|r,Rn=i+t}else Sn=1<<i|n<<s|r,Rn=t}function Ld(t){t.return!==null&&(Mr(t,1),i_(t,1,0))}function Md(t){for(;t===xl;)xl=Ps[--ks],Ps[ks]=null,Al=Ps[--ks],Ps[ks]=null;for(;t===Yr;)Yr=Ot[--Vt],Ot[Vt]=null,Rn=Ot[--Vt],Ot[Vt]=null,Sn=Ot[--Vt],Ot[Vt]=null}var kt=null,xt=null,_e=!1,Ht=null;function o_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,xt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Sn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,xt=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rh(t){if(_e){var e=xt;if(e){var n=e;if(!Km(t,e)){if(Sh(t))throw Error(F(418));e=hr(n.nextSibling);var r=kt;e&&Km(t,e)?o_(r,n):(t.flags=t.flags&-4097|2,_e=!1,kt=t)}}else{if(Sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,_e=!1,kt=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Va(t){if(t!==kt)return!1;if(!_e)return Gm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wh(t.type,t.memoizedProps)),e&&(e=xt)){if(Sh(t))throw a_(),Error(F(418));for(;e;)o_(t,e),e=hr(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=kt?hr(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=xt;t;)t=hr(t.nextSibling)}function Gs(){xt=kt=null,_e=!1}function jd(t){Ht===null?Ht=[t]:Ht.push(t)}var kS=Bn.ReactCurrentBatchConfig;function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function l_(t){function e(E,_){if(t){var R=E.deletions;R===null?(E.deletions=[_],E.flags|=16):R.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function s(E,_){return E=mr(E,_),E.index=0,E.sibling=null,E}function i(E,_,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<_?(E.flags|=2,_):R):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,R,D){return _===null||_.tag!==6?(_=Oc(R,E.mode,D),_.return=E,_):(_=s(_,R),_.return=E,_)}function u(E,_,R,D){var L=R.type;return L===Is?f(E,_,R.props.children,D,R.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qn&&Qm(L)===_.type)?(D=s(_,R.props),D.ref=bi(E,_,R),D.return=E,D):(D=il(R.type,R.key,R.props,null,E.mode,D),D.ref=bi(E,_,R),D.return=E,D)}function c(E,_,R,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==R.containerInfo||_.stateNode.implementation!==R.implementation?(_=Vc(R,E.mode,D),_.return=E,_):(_=s(_,R.children||[]),_.return=E,_)}function f(E,_,R,D,L){return _===null||_.tag!==7?(_=Hr(R,E.mode,D,L),_.return=E,_):(_=s(_,R),_.return=E,_)}function p(E,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Oc(""+_,E.mode,R),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return R=il(_.type,_.key,_.props,null,E.mode,R),R.ref=bi(E,null,_),R.return=E,R;case Ts:return _=Vc(_,E.mode,R),_.return=E,_;case Qn:var D=_._init;return p(E,D(_._payload),R)}if(ji(_)||Ai(_))return _=Hr(_,E.mode,R,null),_.return=E,_;La(E,_)}return null}function g(E,_,R,D){var L=_!==null?_.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return L!==null?null:l(E,_,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ra:return R.key===L?u(E,_,R,D):null;case Ts:return R.key===L?c(E,_,R,D):null;case Qn:return L=R._init,g(E,_,L(R._payload),D)}if(ji(R)||Ai(R))return L!==null?null:f(E,_,R,D,null);La(E,R)}return null}function S(E,_,R,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(R)||null,l(_,E,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ra:return E=E.get(D.key===null?R:D.key)||null,u(_,E,D,L);case Ts:return E=E.get(D.key===null?R:D.key)||null,c(_,E,D,L);case Qn:var U=D._init;return S(E,_,R,U(D._payload),L)}if(ji(D)||Ai(D))return E=E.get(R)||null,f(_,E,D,L,null);La(_,D)}return null}function P(E,_,R,D){for(var L=null,U=null,w=_,v=_=0,I=null;w!==null&&v<R.length;v++){w.index>v?(I=w,w=null):I=w.sibling;var x=g(E,w,R[v],D);if(x===null){w===null&&(w=I);break}t&&w&&x.alternate===null&&e(E,w),_=i(x,_,v),U===null?L=x:U.sibling=x,U=x,w=I}if(v===R.length)return n(E,w),_e&&Mr(E,v),L;if(w===null){for(;v<R.length;v++)w=p(E,R[v],D),w!==null&&(_=i(w,_,v),U===null?L=w:U.sibling=w,U=w);return _e&&Mr(E,v),L}for(w=r(E,w);v<R.length;v++)I=S(w,E,v,R[v],D),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?v:I.key),_=i(I,_,v),U===null?L=I:U.sibling=I,U=I);return t&&w.forEach(function(k){return e(E,k)}),_e&&Mr(E,v),L}function C(E,_,R,D){var L=Ai(R);if(typeof L!="function")throw Error(F(150));if(R=L.call(R),R==null)throw Error(F(151));for(var U=L=null,w=_,v=_=0,I=null,x=R.next();w!==null&&!x.done;v++,x=R.next()){w.index>v?(I=w,w=null):I=w.sibling;var k=g(E,w,x.value,D);if(k===null){w===null&&(w=I);break}t&&w&&k.alternate===null&&e(E,w),_=i(k,_,v),U===null?L=k:U.sibling=k,U=k,w=I}if(x.done)return n(E,w),_e&&Mr(E,v),L;if(w===null){for(;!x.done;v++,x=R.next())x=p(E,x.value,D),x!==null&&(_=i(x,_,v),U===null?L=x:U.sibling=x,U=x);return _e&&Mr(E,v),L}for(w=r(E,w);!x.done;v++,x=R.next())x=S(w,E,v,x.value,D),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?v:x.key),_=i(x,_,v),U===null?L=x:U.sibling=x,U=x);return t&&w.forEach(function(N){return e(E,N)}),_e&&Mr(E,v),L}function A(E,_,R,D){if(typeof R=="object"&&R!==null&&R.type===Is&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ra:e:{for(var L=R.key,U=_;U!==null;){if(U.key===L){if(L=R.type,L===Is){if(U.tag===7){n(E,U.sibling),_=s(U,R.props.children),_.return=E,E=_;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qn&&Qm(L)===U.type){n(E,U.sibling),_=s(U,R.props),_.ref=bi(E,U,R),_.return=E,E=_;break e}n(E,U);break}else e(E,U);U=U.sibling}R.type===Is?(_=Hr(R.props.children,E.mode,D,R.key),_.return=E,E=_):(D=il(R.type,R.key,R.props,null,E.mode,D),D.ref=bi(E,_,R),D.return=E,E=D)}return o(E);case Ts:e:{for(U=R.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===R.containerInfo&&_.stateNode.implementation===R.implementation){n(E,_.sibling),_=s(_,R.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Vc(R,E.mode,D),_.return=E,E=_}return o(E);case Qn:return U=R._init,A(E,_,U(R._payload),D)}if(ji(R))return P(E,_,R,D);if(Ai(R))return C(E,_,R,D);La(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,_!==null&&_.tag===6?(n(E,_.sibling),_=s(_,R),_.return=E,E=_):(n(E,_),_=Oc(R,E.mode,D),_.return=E,E=_),o(E)):n(E,_)}return A}var Qs=l_(!0),u_=l_(!1),Cl=xr(null),Pl=null,Ns=null,Ud=null;function Fd(){Ud=Ns=Pl=null}function Bd(t){var e=Cl.current;ve(Cl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Pl=t,Ud=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(Pl===null)throw Error(F(308));Ns=t,Pl.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var Br=null;function zd(t){Br===null?Br=[t]:Br.push(t)}function c_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,zd(e)):(n.next=s.next,s.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,On(t,n)}return s=r.interleaved,s===null?(e.next=e,zd(r)):(e.next=s.next,s.next=e),r.interleaved=e,On(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}function Ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,r){var s=t.updateQueue;Yn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,C=l;switch(g=e,S=n,C.tag){case 1:if(P=C.payload,typeof P=="function"){p=P.call(S,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=C.payload,g=typeof P=="function"?P.call(S,p,g):P,g==null)break e;p=xe({},p,g);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=p):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=p}}function Xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var $o={},nn=xr($o),Eo=xr($o),To=xr($o);function zr(t){if(t===$o)throw Error(F(174));return t}function Wd(t,e){switch(fe(To,e),fe(Eo,t),fe(nn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oh(e,t)}ve(nn),fe(nn,e)}function Ys(){ve(nn),ve(Eo),ve(To)}function d_(t){zr(To.current);var e=zr(nn.current),n=oh(e,t.type);e!==n&&(fe(Eo,t),fe(nn,n))}function Hd(t){Eo.current===t&&(ve(nn),ve(Eo))}var Se=xr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function qd(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var el=Bn.ReactCurrentDispatcher,Pc=Bn.ReactCurrentBatchConfig,Xr=0,Re=null,je=null,$e=null,bl=!1,Ji=!1,Io=0,NS=0;function nt(){throw Error(F(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Gd(t,e,n,r,s,i){if(Xr=i,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?VS:LS,t=n(r,s),Ji){i=0;do{if(Ji=!1,Io=0,25<=i)throw Error(F(301));i+=1,$e=je=null,e.updateQueue=null,el.current=MS,t=n(r,s)}while(Ji)}if(el.current=Dl,e=je!==null&&je.next!==null,Xr=0,$e=je=Re=null,bl=!1,e)throw Error(F(300));return t}function Qd(){var t=Io!==0;return Io=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Re.memoizedState=$e=t:$e=$e.next=t,$e}function Ut(){if(je===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=$e===null?Re.memoizedState:$e.next;if(e!==null)$e=e,je=t;else{if(t===null)throw Error(F(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},$e===null?Re.memoizedState=$e=t:$e=$e.next=t}return $e}function So(t,e){return typeof e=="function"?e(t):e}function kc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Xr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Re.lanes|=i,Jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Gt(i,e.memoizedState)||(_t=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function f_(){}function p_(t,e){var n=Re,r=Ut(),s=e(),i=!Gt(r.memoizedState,s);if(i&&(r.memoizedState=s,_t=!0),r=r.queue,Yd(y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Ro(9,g_.bind(null,n,r,s,e),void 0,null),We===null)throw Error(F(349));Xr&30||m_(n,e,s)}return s}function m_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g_(t,e,n,r){e.value=n,e.getSnapshot=r,v_(e)&&__(t)}function y_(t,e,n){return n(function(){v_(e)&&__(t)})}function v_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function __(t){var e=On(t,1);e!==null&&Kt(e,t,1,-1)}function Jm(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,Re,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w_(){return Ut().memoizedState}function tl(t,e,n,r){var s=Xt();Re.flags|=t,s.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function uu(t,e,n,r){var s=Ut();r=r===void 0?null:r;var i=void 0;if(je!==null){var o=je.memoizedState;if(i=o.destroy,r!==null&&Kd(r,o.deps)){s.memoizedState=Ro(e,n,i,r);return}}Re.flags|=t,s.memoizedState=Ro(1|e,n,i,r)}function Zm(t,e){return tl(8390656,8,t,e)}function Yd(t,e){return uu(2048,8,t,e)}function E_(t,e){return uu(4,2,t,e)}function T_(t,e){return uu(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,I_.bind(null,e,t),n)}function Xd(){}function R_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return Xr&21?(Gt(n,e)||(n=bv(),Re.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function bS(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Pc.transition;Pc.transition={};try{t(!1),e()}finally{ue=n,Pc.transition=r}}function C_(){return Ut().memoizedState}function DS(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))k_(e,n);else if(n=c_(t,e,n,r),n!==null){var s=pt();Kt(n,t,r,s),N_(n,e,r)}}function OS(t,e,n){var r=pr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))k_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(s.next=s,zd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=c_(t,e,s,r),n!==null&&(s=pt(),Kt(n,t,r,s),N_(n,e,r))}}function P_(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function k_(t,e){Ji=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}var Dl={readContext:jt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},VS={readContext:jt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DS.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:Xd,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=bS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,s=Xt();if(_e){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),We===null)throw Error(F(349));Xr&30||m_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Zm(y_.bind(null,r,i,t),[t]),r.flags|=2048,Ro(9,g_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Xt(),e=We.identifierPrefix;if(_e){var n=Rn,r=Sn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:jt,useCallback:R_,useContext:jt,useEffect:Yd,useImperativeHandle:S_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:x_,useReducer:kc,useRef:w_,useState:function(){return kc(So)},useDebugValue:Xd,useDeferredValue:function(t){var e=Ut();return A_(e,je.memoizedState,t)},useTransition:function(){var t=kc(So)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1},MS={readContext:jt,useCallback:R_,useContext:jt,useEffect:Yd,useImperativeHandle:S_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:x_,useReducer:Nc,useRef:w_,useState:function(){return Nc(So)},useDebugValue:Xd,useDeferredValue:function(t){var e=Ut();return je===null?e.memoizedState=t:A_(e,je.memoizedState,t)},useTransition:function(){var t=Nc(So)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),s=pr(t),i=Pn(r,s);i.payload=e,n!=null&&(i.callback=n),e=dr(t,i,s),e!==null&&(Kt(e,t,s,r),Za(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),s=pr(t),i=Pn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=dr(t,i,s),e!==null&&(Kt(e,t,s,r),Za(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=pr(t),s=Pn(n,r);s.tag=2,e!=null&&(s.callback=e),e=dr(t,s,r),e!==null&&(Kt(e,t,r,n),Za(e,t,r))}};function eg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(s,i):!0}function b_(t,e,n){var r=!1,s=wr,i=e.contextType;return typeof i=="object"&&i!==null?i=jt(i):(s=Et(e)?Qr:lt.current,r=e.contextTypes,i=(r=r!=null)?Ks(t,s):wr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Ch(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},$d(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=jt(i):(i=Et(e)?Qr:lt.current,s.context=Ks(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ah(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&cu.enqueueReplaceState(s,s.state,null),kl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=hI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jS=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vl||(Vl=!0,Uh=r),Ph(t,e)},n}function O_(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ph(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var US=Bn.ReactCurrentOwner,_t=!1;function ft(t,e,n,r){e.child=t===null?u_(e,null,n,r):Qs(e,t.child,n,r)}function ig(t,e,n,r,s){n=n.render;var i=e.ref;return Us(e,s),r=Gd(t,e,n,r,i,s),n=Qd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Vn(t,e,s)):(_e&&n&&Ld(e),e.flags|=1,ft(t,e,r,s),e.child)}function og(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,V_(t,e,i,r,s)):(t=il(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return Vn(t,e,s)}return e.flags|=1,t=mr(i,r),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(yo(i,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Vn(t,e,s)}return kh(t,e,n,r,s)}function L_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ds,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ds,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Ds,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(Ds,Rt),Rt|=r;return ft(t,e,s,n),e.child}function M_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kh(t,e,n,r,s){var i=Et(n)?Qr:lt.current;return i=Ks(e,i),Us(e,s),n=Gd(t,e,n,r,i,s),r=Qd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Vn(t,e,s)):(_e&&r&&Ld(e),e.flags|=1,ft(t,e,n,s),e.child)}function ag(t,e,n,r,s){if(Et(n)){var i=!0;Rl(e)}else i=!1;if(Us(e,s),e.stateNode===null)nl(t,e),b_(e,n,r),Ch(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jt(c):(c=Et(n)?Qr:lt.current,c=Ks(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&tg(e,o,r,c),Yn=!1;var g=e.memoizedState;o.state=g,kl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||wt.current||Yn?(typeof f=="function"&&(Ah(e,n,f,r),u=e.memoizedState),(l=Yn||eg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:$t(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=Et(n)?Qr:lt.current,u=Ks(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&tg(e,o,r,u),Yn=!1,g=e.memoizedState,o.state=g,kl(e,r,o,s);var P=e.memoizedState;l!==p||g!==P||wt.current||Yn?(typeof S=="function"&&(Ah(e,n,S,r),P=e.memoizedState),(c=Yn||eg(e,n,c,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Nh(t,e,n,r,i,s)}function Nh(t,e,n,r,s,i){M_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&qm(e,n,!1),Vn(t,e,i);r=e.stateNode,US.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):ft(t,e,l,i),e.memoizedState=r.state,s&&qm(e,n,!0),e.child}function j_(t){var e=t.stateNode;e.pendingContext?Hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(t,e.context,!1),Wd(t,e.containerInfo)}function lg(t,e,n,r,s){return Gs(),jd(s),e.flags|=256,ft(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function U_(t,e,n){var r=e.pendingProps,s=Se.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(Se,s&1),t===null)return Rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fu(o,r,0,null),t=Hr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Dh(n),e.memoizedState=bh,t):Jd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return FS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=mr(l,i):(i=Hr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return i=t.child,t=i.sibling,r=mr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jd(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&jd(r),Qs(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=bc(Error(F(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=fu({mode:"visible",children:r.children},s,0,null),i=Hr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Dh(o),e.memoizedState=bh,i);if(!(e.mode&1))return Ma(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=bc(i,r,void 0),Ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,On(t,s),Kt(r,t,s,-1))}return sf(),r=bc(Error(F(421))),Ma(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=ZS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,xt=hr(s.nextSibling),kt=e,_e=!0,Ht=null,t!==null&&(Ot[Vt++]=Sn,Ot[Vt++]=Rn,Ot[Vt++]=Yr,Sn=t.id,Rn=t.overflow,Yr=e),e=Jd(e,r.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Dc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function F_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ft(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Se,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Nl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dc(e,!0,n,null,i);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BS(t,e,n){switch(e.tag){case 3:j_(e),Gs();break;case 5:d_(e);break;case 1:Et(e.type)&&Rl(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(Cl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?U_(t,e,n):(fe(Se,Se.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);fe(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,L_(t,e,n)}return Vn(t,e,n)}var B_,Oh,z_,$_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};z_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,zr(nn.current);var i=null;switch(n){case"input":s=nh(t,s),r=nh(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=ih(t,s),r=ih(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}ah(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zS(t,e,n){var r=e.pendingProps;switch(Md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return Et(e.type)&&Sl(),rt(e),null;case 3:return r=e.stateNode,Ys(),ve(wt),ve(lt),qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(zh(Ht),Ht=null))),Oh(t,e),rt(e),null;case 5:Hd(e);var s=zr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return rt(e),null}if(t=zr(nn.current),Va(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Jt]=e,r[wo]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<Fi.length;s++)me(Fi[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":vm(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":wm(r,i),me("invalid",r)}ah(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Oa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Oa(r.textContent,l,t),s=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":xa(r),_m(r,i,!0);break;case"textarea":xa(r),Em(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Il)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[wo]=r,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=lh(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<Fi.length;s++)me(Fi[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":vm(t,r),s=nh(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),me("invalid",t);break;case"textarea":wm(t,r),s=ih(t,r),me("invalid",t);break;default:s=r}ah(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?wv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",t):u!=null&&Td(t,i,u,o))}switch(n){case"input":xa(t),_m(t,r,!1);break;case"textarea":xa(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Vs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=zr(To.current),zr(nn.current),Va(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(i=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Oa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return rt(e),null;case 13:if(ve(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&xt!==null&&e.mode&1&&!(e.flags&128))a_(),Gs(),e.flags|=98560,i=!1;else if(i=Va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Jt]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Ht!==null&&(zh(Ht),Ht=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Fe===0&&(Fe=3):sf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Ys(),Oh(t,e),t===null&&vo(e.stateNode.containerInfo),rt(e),null;case 10:return Bd(e.type._context),rt(e),null;case 17:return Et(e.type)&&Sl(),rt(e),null;case 19:if(ve(Se),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Di(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,Di(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Se,Se.current&1|2),e.child}t=t.sibling}i.tail!==null&&Oe()>Js&&(e.flags|=128,r=!0,Di(i,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return rt(e),null}else 2*Oe()-i.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Di(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Oe(),e.sibling=null,n=Se.current,fe(Se,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function $S(t,e){switch(Md(e),e.tag){case 1:return Et(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),ve(wt),ve(lt),qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hd(e),null;case 13:if(ve(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Se),null;case 4:return Ys(),null;case 10:return Bd(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var ja=!1,ot=!1,WS=typeof WeakSet=="function"?WeakSet:Set,$=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Vh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var cg=!1;function HS(t,e){if(vh=wl,t=Gv(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var S;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},wl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var C=P.memoizedProps,A=P.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:$t(e.type,C),A);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Pe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=cg,cg=!1,P}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Vh(e,n,i)}s=s.next}while(s!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[wo],delete e[Th],delete e[AS],delete e[CS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H_(t){return t.tag===5||t.tag===3||t.tag===4}function hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}var qe=null,Wt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)q_(t,e,n),n=n.sibling}function q_(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:ot||bs(n,e);case 6:var r=qe,s=Wt;qe=null,Kn(t,e,n),qe=r,Wt=s,qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),mo(t)):xc(qe,n.stateNode));break;case 4:r=qe,s=Wt,qe=n.stateNode.containerInfo,Wt=!0,Kn(t,e,n),qe=r,Wt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vh(n,e,o),s=s.next}while(s!==r)}Kn(t,e,n);break;case 1:if(!ot&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Kn(t,e,n),ot=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WS),e.forEach(function(r){var s=eR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Wt=!1;break e;case 3:qe=l.stateNode.containerInfo,Wt=!0;break e;case 4:qe=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));q_(i,o,s),qe=null,Wt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Pe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K_(e,t),e=e.sibling}function K_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Qt(t),r&4){try{Zi(3,t,t.return),hu(3,t)}catch(C){Pe(t,t.return,C)}try{Zi(5,t,t.return)}catch(C){Pe(t,t.return,C)}}break;case 1:zt(e,t),Qt(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(zt(e,t),Qt(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var s=t.stateNode;try{co(s,"")}catch(C){Pe(t,t.return,C)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&mv(s,i),lh(l,o);var c=lh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?wv(s,p):f==="dangerouslySetInnerHTML"?vv(s,p):f==="children"?co(s,p):Td(s,f,p,c)}switch(l){case"input":rh(s,i);break;case"textarea":gv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Vs(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?Vs(s,!!i.multiple,i.defaultValue,!0):Vs(s,!!i.multiple,i.multiple?[]:"",!1))}s[wo]=i}catch(C){Pe(t,t.return,C)}}break;case 6:if(zt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(C){Pe(t,t.return,C)}}break;case 3:if(zt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(C){Pe(t,t.return,C)}break;case 4:zt(e,t),Qt(t);break;case 13:zt(e,t),Qt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(tf=Oe())),r&4&&dg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(c=ot)||f,zt(e,t),ot=c):zt(e,t),Qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,S=g.child,g.tag){case 0:case 11:case 14:case 15:Zi(4,g,g.return);break;case 1:bs(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(C){Pe(r,n,C)}}break;case 5:bs(g,g.return);break;case 22:if(g.memoizedState!==null){pg(p);continue}}S!==null?(S.return=g,$=S):pg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=_v("display",o))}catch(C){Pe(t,t.return,C)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){Pe(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(e,t),Qt(t),r&4&&dg(t);break;case 21:break;default:zt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(co(s,""),r.flags&=-33);var i=hg(t);jh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hg(t);Mh(t,l,o);break;default:throw Error(F(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){$=t,G_(t)}function G_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ja;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ot;l=ja;var c=ot;if(ja=o,(ot=u)&&!c)for($=s;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?mg(s):u!==null?(u.return=o,$=u):mg(s);for(;i!==null;)$=i,G_(i),i=i.sibling;$=s,ja=l,ot=c}fg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):fg(t)}}function fg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Xm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||e.flags&512&&Lh(e)}catch(g){Pe(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function pg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function mg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Pe(e,s,u)}}var i=e.return;try{Lh(e)}catch(u){Pe(e,i,u)}break;case 5:var o=e.return;try{Lh(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var KS=Math.ceil,Ol=Bn.ReactCurrentDispatcher,Zd=Bn.ReactCurrentOwner,Mt=Bn.ReactCurrentBatchConfig,ie=0,We=null,Le=null,Qe=0,Rt=0,Ds=xr(0),Fe=0,xo=null,Jr=0,du=0,ef=0,eo=null,yt=null,tf=0,Js=1/0,Tn=null,Vl=!1,Uh=null,fr=null,Ua=!1,ir=null,Ll=0,to=0,Fh=null,rl=-1,sl=0;function pt(){return ie&6?Oe():rl!==-1?rl:rl=Oe()}function pr(t){return t.mode&1?ie&2&&Qe!==0?Qe&-Qe:kS.transition!==null?(sl===0&&(sl=bv()),sl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Uv(t.type)),t):1}function Kt(t,e,n,r){if(50<to)throw to=0,Fh=null,Error(F(185));Fo(t,n,r),(!(ie&2)||t!==We)&&(t===We&&(!(ie&2)&&(du|=n),Fe===4&&Jn(t,Qe)),Tt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Js=Oe()+500,lu&&Ar()))}function Tt(t,e){var n=t.callbackNode;kI(t,e);var r=_l(t,t===We?Qe:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?PS(gg.bind(null,t)):s_(gg.bind(null,t)),RS(function(){!(ie&6)&&Ar()}),n=null;else{switch(Dv(r)){case 1:n=Ad;break;case 4:n=kv;break;case 16:n=vl;break;case 536870912:n=Nv;break;default:n=vl}n=n0(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(rl=-1,sl=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var r=_l(t,t===We?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var s=ie;ie|=2;var i=X_();(We!==t||Qe!==e)&&(Tn=null,Js=Oe()+500,Wr(t,e));do try{YS();break}catch(l){Y_(t,l)}while(!0);Fd(),Ol.current=i,ie=s,Le!==null?e=0:(We=null,Qe=0,e=Fe)}if(e!==0){if(e===2&&(s=fh(t),s!==0&&(r=s,e=Bh(t,s))),e===1)throw n=xo,Wr(t,0),Jn(t,r),Tt(t,Oe()),n;if(e===6)Jn(t,r);else{if(s=t.current.alternate,!(r&30)&&!GS(s)&&(e=Ml(t,r),e===2&&(i=fh(t),i!==0&&(r=i,e=Bh(t,i))),e===1))throw n=xo,Wr(t,0),Jn(t,r),Tt(t,Oe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:jr(t,yt,Tn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=tf+500-Oe(),10<e)){if(_l(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Eh(jr.bind(null,t,yt,Tn),e);break}jr(t,yt,Tn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KS(r/1960))-r,10<r){t.timeoutHandle=Eh(jr.bind(null,t,yt,Tn),r);break}jr(t,yt,Tn);break;case 5:jr(t,yt,Tn);break;default:throw Error(F(329))}}}return Tt(t,Oe()),t.callbackNode===n?Q_.bind(null,t):null}function Bh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=yt,yt=n,e!==null&&zh(e)),t}function zh(t){yt===null?yt=t:yt.push.apply(yt,t)}function GS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Gt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~ef,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if(ie&6)throw Error(F(327));Fs();var e=_l(t,0);if(!(e&1))return Tt(t,Oe()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=fh(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=xo,Wr(t,0),Jn(t,e),Tt(t,Oe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,yt,Tn),Tt(t,Oe()),null}function nf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Js=Oe()+500,lu&&Ar())}}function Zr(t){ir!==null&&ir.tag===0&&!(ie&6)&&Fs();var e=ie;ie|=1;var n=Mt.transition,r=ue;try{if(Mt.transition=null,ue=1,t)return t()}finally{ue=r,Mt.transition=n,ie=e,!(ie&6)&&Ar()}}function rf(){Rt=Ds.current,ve(Ds)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SS(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Ys(),ve(wt),ve(lt),qd();break;case 5:Hd(r);break;case 4:Ys();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:Bd(r.type._context);break;case 22:case 23:rf()}n=n.return}if(We=t,Le=t=mr(t.current,null),Qe=Rt=e,Fe=0,xo=null,ef=du=Jr=0,yt=eo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Br=null}return t}function Y_(t,e){do{var n=Le;try{if(Fd(),el.current=Dl,bl){for(var r=Re.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}bl=!1}if(Xr=0,$e=je=Re=null,Ji=!1,Io=0,Zd.current=null,n===null||n.return===null){Fe=1,xo=e,Le=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=rg(o);if(S!==null){S.flags&=-257,sg(S,o,l,i,e),S.mode&1&&ng(i,c,e),e=S,u=c;var P=e.updateQueue;if(P===null){var C=new Set;C.add(u),e.updateQueue=C}else P.add(u);break e}else{if(!(e&1)){ng(i,c,e),sf();break e}u=Error(F(426))}}else if(_e&&l.mode&1){var A=rg(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),sg(A,o,l,i,e),jd(Xs(u,l));break e}}i=u=Xs(u,l),Fe!==4&&(Fe=2),eo===null?eo=[i]:eo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=D_(i,u,e);Ym(i,E);break e;case 1:l=u;var _=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(fr===null||!fr.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=O_(i,l,e);Ym(i,D);break e}}i=i.return}while(i!==null)}Z_(n)}catch(L){e=L,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function X_(){var t=Ol.current;return Ol.current=Dl,t===null?Dl:t}function sf(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||!(Jr&268435455)&&!(du&268435455)||Jn(We,Qe)}function Ml(t,e){var n=ie;ie|=2;var r=X_();(We!==t||Qe!==e)&&(Tn=null,Wr(t,e));do try{QS();break}catch(s){Y_(t,s)}while(!0);if(Fd(),ie=n,Ol.current=r,Le!==null)throw Error(F(261));return We=null,Qe=0,Fe}function QS(){for(;Le!==null;)J_(Le)}function YS(){for(;Le!==null&&!EI();)J_(Le)}function J_(t){var e=t0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Z_(t):Le=e,Zd.current=null}function Z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Le=null;return}}else if(n=zS(n,e,Rt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Fe===0&&(Fe=5)}function jr(t,e,n){var r=ue,s=Mt.transition;try{Mt.transition=null,ue=1,XS(t,e,n,r)}finally{Mt.transition=s,ue=r}return null}function XS(t,e,n,r){do Fs();while(ir!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(NI(t,i),t===We&&(Le=We=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,n0(vl,function(){return Fs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Mt.transition,Mt.transition=null;var o=ue;ue=1;var l=ie;ie|=4,Zd.current=null,HS(t,n),K_(n,t),yS(_h),wl=!!vh,_h=vh=null,t.current=n,qS(n),TI(),ie=l,ue=o,Mt.transition=i}else t.current=n;if(Ua&&(Ua=!1,ir=t,Ll=s),i=t.pendingLanes,i===0&&(fr=null),RI(n.stateNode),Tt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Vl)throw Vl=!1,t=Uh,Uh=null,t;return Ll&1&&t.tag!==0&&Fs(),i=t.pendingLanes,i&1?t===Fh?to++:(to=0,Fh=t):to=0,Ar(),null}function Fs(){if(ir!==null){var t=Dv(Ll),e=Mt.transition,n=ue;try{if(Mt.transition=null,ue=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,Ll=0,ie&6)throw Error(F(331));var s=ie;for(ie|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Zi(8,f,i)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,S=f.return;if(W_(f),f===c){$=null;break}if(g!==null){g.return=S,$=g;break}$=S}}}var P=i.alternate;if(P!==null){var C=P.child;if(C!==null){P.child=null;do{var A=C.sibling;C.sibling=null,C=A}while(C!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zi(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,$=E;break e}$=i.return}}var _=t.current;for($=_;$!==null;){o=$;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,$=R;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(L){Pe(l,l.return,L)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(ie=s,Ar(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(ru,t)}catch{}r=!0}return r}finally{ue=n,Mt.transition=e}}return!1}function yg(t,e,n){e=Xs(n,e),e=D_(t,e,1),t=dr(t,e,1),e=pt(),t!==null&&(Fo(t,1,e),Tt(t,e))}function Pe(t,e,n){if(t.tag===3)yg(t,t,n);else for(;e!==null;){if(e.tag===3){yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Xs(n,t),t=O_(e,t,1),e=dr(e,t,1),t=pt(),e!==null&&(Fo(e,1,t),Tt(e,t));break}}e=e.return}}function JS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Oe()-tf?Wr(t,0):ef|=n),Tt(t,e)}function e0(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=pt();t=On(t,e),t!==null&&(Fo(t,e,n),Tt(t,n))}function ZS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e0(t,n)}function eR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),e0(t,n)}var t0;t0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,BS(t,e,n);_t=!!(t.flags&131072)}else _t=!1,_e&&e.flags&1048576&&i_(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var s=Ks(e,lt.current);Us(e,n),s=Gd(null,e,r,t,s,n);var i=Qd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(i=!0,Rl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$d(e),s.updater=cu,e.stateNode=s,s._reactInternals=e,Ch(e,r,t,n),e=Nh(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&Ld(e),ft(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=nR(r),t=$t(r,t),s){case 0:e=kh(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=ig(null,e,r,t,n);break e;case 14:e=og(null,e,r,$t(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),kh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),ag(t,e,r,s,n);case 3:e:{if(j_(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,h_(t,e),kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(F(423)),e),e=lg(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(F(424)),e),e=lg(t,e,r,n,s);break e}else for(xt=hr(e.stateNode.containerInfo.firstChild),kt=e,_e=!0,Ht=null,n=u_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===s){e=Vn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return d_(e),t===null&&Rh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,wh(r,s)?o=null:i!==null&&wh(r,i)&&(e.flags|=32),M_(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Rh(e),null;case 13:return U_(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),ig(t,e,r,s,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(Cl,r._currentValue),r._currentValue=o,i!==null)if(Gt(i.value,o)){if(i.children===s.children&&!wt.current){e=Vn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Pn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ft(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Us(e,n),s=jt(s),r=r(s),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),og(t,e,r,s,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),nl(t,e),e.tag=1,Et(r)?(t=!0,Rl(e)):t=!1,Us(e,n),b_(e,r,s),Ch(e,r,s,n),Nh(null,e,r,!0,t,n);case 19:return F_(t,e,n);case 22:return L_(t,e,n)}throw Error(F(156,e.tag))};function n0(t,e){return Pv(t,e)}function tR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new tR(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nR(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===Rd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Hr(n.children,s,i,e);case Id:o=8,s|=8;break;case Jc:return t=Lt(12,n,e,s|2),t.elementType=Jc,t.lanes=i,t;case Zc:return t=Lt(13,n,e,s),t.elementType=Zc,t.lanes=i,t;case eh:return t=Lt(19,n,e,s),t.elementType=eh,t.lanes=i,t;case dv:return fu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cv:o=10;break e;case hv:o=9;break e;case Sd:o=11;break e;case Rd:o=14;break e;case Qn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Hr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=dv,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rR(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,s,i,o,l,u){return t=new rR(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(i),t}function sR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function r0(t){if(!t)return wr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Et(n))return r_(t,n,e)}return e}function s0(t,e,n,r,s,i,o,l,u){return t=af(n,r,!0,t,s,i,o,l,u),t.context=r0(null),n=t.current,r=pt(),s=pr(n),i=Pn(r,s),i.callback=e??null,dr(n,i,s),t.current.lanes=s,Fo(t,s,r),Tt(t,r),t}function pu(t,e,n,r){var s=e.current,i=pt(),o=pr(s);return n=r0(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(s,e,o),t!==null&&(Kt(t,s,o,i),Za(t,s,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function iR(){return null}var i0=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}mu.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));pu(t,e,null,null)};mu.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){pu(null,t,null,null)}),e[Dn]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&jv(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function oR(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=jl(o);i.call(c)}}var o=s0(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[Dn]=o.current,vo(t.nodeType===8?t.parentNode:t),Zr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=jl(u);l.call(c)}}var u=af(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=u,t[Dn]=u.current,vo(t.nodeType===8?t.parentNode:t),Zr(function(){pu(e,u,n,r)}),u}function yu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=jl(o);l.call(u)}}pu(e,o,t,s)}else o=oR(n,e,t,s,r);return jl(o)}Ov=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ui(e.pendingLanes);n!==0&&(Cd(e,n|1),Tt(e,Oe()),!(ie&6)&&(Js=Oe()+500,Ar()))}break;case 13:Zr(function(){var r=On(t,1);if(r!==null){var s=pt();Kt(r,t,1,s)}}),lf(t,1)}};Pd=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=pt();Kt(e,t,134217728,n)}lf(t,134217728)}};Vv=function(t){if(t.tag===13){var e=pr(t),n=On(t,e);if(n!==null){var r=pt();Kt(n,t,e,r)}lf(t,e)}};Lv=function(){return ue};Mv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};ch=function(t,e,n){switch(e){case"input":if(rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=au(r);if(!s)throw Error(F(90));pv(r),rh(r,s)}}}break;case"textarea":gv(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};Iv=nf;Sv=Zr;var aR={usingClientEntryPoint:!1,Events:[zo,As,au,Ev,Tv,nf]},Oi={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lR={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Av(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||iR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{ru=Fa.inject(lR),tn=Fa}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aR;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(F(200));return sR(t,e,null,n)};bt.createRoot=function(t,e){if(!cf(t))throw Error(F(299));var n=!1,r="",s=i0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,s),t[Dn]=e.current,vo(t.nodeType===8?t.parentNode:t),new uf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Av(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return Zr(t)};bt.hydrate=function(t,e,n){if(!gu(e))throw Error(F(200));return yu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=i0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=s0(e,null,t,1,n??null,s,!1,i,o),t[Dn]=e.current,vo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new mu(e)};bt.render=function(t,e,n){if(!gu(e))throw Error(F(200));return yu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!gu(t))throw Error(F(40));return t._reactRootContainer?(Zr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};bt.unstable_batchedUpdates=nf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return yu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(t){console.error(t)}}o0(),ov.exports=bt;var uR=ov.exports,wg=uR;Yc.createRoot=wg.createRoot,Yc.hydrateRoot=wg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Eg="popstate";function cR(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return $h("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:a0(s)}return dR(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hR(){return Math.random().toString(36).substr(2,8)}function Tg(t,e){return{usr:t.state,key:t.key,idx:e}}function $h(t,e,n,r){return n===void 0&&(n=null),Ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ui(e):e,{state:n,key:e&&e.key||r||hR()})}function a0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ui(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dR(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=or.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Ao({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=or.Pop;let A=f(),E=A==null?null:A-c;c=A,u&&u({action:l,location:C.location,delta:E})}function g(A,E){l=or.Push;let _=$h(C.location,A,E);c=f()+1;let R=Tg(_,c),D=C.createHref(_);try{o.pushState(R,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(D)}i&&u&&u({action:l,location:C.location,delta:1})}function S(A,E){l=or.Replace;let _=$h(C.location,A,E);c=f();let R=Tg(_,c),D=C.createHref(_);o.replaceState(R,"",D),i&&u&&u({action:l,location:C.location,delta:0})}function P(A){let E=s.location.origin!=="null"?s.location.origin:s.location.href,_=typeof A=="string"?A:a0(A);return _=_.replace(/ $/,"%20"),Me(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let C={get action(){return l},get location(){return t(s,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Eg,p),u=A,()=>{s.removeEventListener(Eg,p),u=null}},createHref(A){return e(s,A)},createURL:P,encodeLocation(A){let E=P(A);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:S,go(A){return o.go(A)}};return C}var Ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ig||(Ig={}));function fR(t,e,n){return n===void 0&&(n="/"),pR(t,e,n)}function pR(t,e,n,r){let s=typeof e=="string"?ui(e):e,i=c0(s.pathname||"/",n);if(i==null)return null;let o=l0(t);mR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=AR(i);l=SR(o[u],c)}return l}function l0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Me(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=qr([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),l0(i.children,e,f,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:TR(c,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of u0(i.path))s(i,o,u)}),e}function u0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=u0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function mR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gR=/^:[\w-]+$/,yR=3,vR=2,_R=1,wR=10,ER=-2,Sg=t=>t==="*";function TR(t,e){let n=t.split("/"),r=n.length;return n.some(Sg)&&(r+=ER),e&&(r+=vR),n.filter(s=>!Sg(s)).reduce((s,i)=>s+(gR.test(i)?yR:i===""?_R:wR),r)}function IR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function SR(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",p=RR({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:qr([i,p.pathname]),pathnameBase:bR(qr([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=qr([i,p.pathnameBase]))}return o}function RR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xR(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:g,isOptional:S}=f;if(g==="*"){let C=l[p]||"";o=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const P=l[p];return S&&!P?c[g]=void 0:c[g]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function xR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function AR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function c0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const CR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PR=t=>CR.test(t);function kR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?ui(t):t,i;if(n)if(PR(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),hf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Rg(n.substring(1),"/"):i=Rg(n,e)}else i=e;return{pathname:i,search:DR(r),hash:OR(s)}}function Rg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Lc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function h0(t,e){let n=NR(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function d0(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=ui(t):(s=Ao({},t),Me(!s.pathname||!s.pathname.includes("?"),Lc("?","pathname","search",s)),Me(!s.pathname||!s.pathname.includes("#"),Lc("#","pathname","hash",s)),Me(!s.search||!s.search.includes("#"),Lc("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=kR(s,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const qr=t=>t.join("/").replace(/\/\/+/g,"/"),bR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const f0=["post","put","patch","delete"];new Set(f0);const LR=["get",...f0];new Set(LR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}const df=V.createContext(null),MR=V.createContext(null),Wo=V.createContext(null),vu=V.createContext(null),us=V.createContext({outlet:null,matches:[],isDataRoute:!1}),p0=V.createContext(null);function Ho(){return V.useContext(vu)!=null}function ff(){return Ho()||Me(!1),V.useContext(vu).location}function m0(t){V.useContext(Wo).static||V.useLayoutEffect(t)}function cs(){let{isDataRoute:t}=V.useContext(us);return t?YR():jR()}function jR(){Ho()||Me(!1);let t=V.useContext(df),{basename:e,future:n,navigator:r}=V.useContext(Wo),{matches:s}=V.useContext(us),{pathname:i}=ff(),o=JSON.stringify(h0(s,n.v7_relativeSplatPath)),l=V.useRef(!1);return m0(()=>{l.current=!0}),V.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=d0(c,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:qr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,i,t])}function UR(t,e){return FR(t,e)}function FR(t,e,n,r){Ho()||Me(!1);let{navigator:s}=V.useContext(Wo),{matches:i}=V.useContext(us),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ff(),f;if(e){var p;let A=typeof e=="string"?ui(e):e;u==="/"||(p=A.pathname)!=null&&p.startsWith(u)||Me(!1),f=A}else f=c;let g=f.pathname||"/",S=g;if(u!=="/"){let A=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(A.length).join("/")}let P=fR(t,{pathname:S}),C=HR(P&&P.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:qr([u,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:qr([u,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,n,r);return e&&C?V.createElement(vu.Provider,{value:{location:Co({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:or.Pop}},C):C}function BR(){let t=QR(),e=VR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:s},n):null,null)}const zR=V.createElement(BR,null);class $R extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(us.Provider,{value:this.props.routeContext},V.createElement(p0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WR(t){let{routeContext:e,match:n,children:r}=t,s=V.useContext(df);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(us.Provider,{value:e},r)}function HR(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Me(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:g,errors:S}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let S,P=!1,C=null,A=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,C=p.route.errorElement||zR,u&&(c<0&&g===0?(XR("route-fallback"),P=!0,A=null):c===g&&(P=!0,A=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),_=()=>{let R;return S?R=C:P?R=A:p.route.Component?R=V.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,V.createElement(WR,{match:p,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?V.createElement($R,{location:n.location,revalidation:n.revalidation,component:C,error:S,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var g0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(g0||{}),y0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(y0||{});function qR(t){let e=V.useContext(df);return e||Me(!1),e}function KR(t){let e=V.useContext(MR);return e||Me(!1),e}function GR(t){let e=V.useContext(us);return e||Me(!1),e}function v0(t){let e=GR(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function QR(){var t;let e=V.useContext(p0),n=KR(),r=v0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function YR(){let{router:t}=qR(g0.UseNavigateStable),e=v0(y0.UseNavigateStable),n=V.useRef(!1);return m0(()=>{n.current=!0}),V.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Co({fromRouteId:e},i)))},[t,e])}const xg={};function XR(t,e,n){xg[t]||(xg[t]=!0)}function JR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function _0(t){let{to:e,replace:n,state:r,relative:s}=t;Ho()||Me(!1);let{future:i,static:o}=V.useContext(Wo),{matches:l}=V.useContext(us),{pathname:u}=ff(),c=cs(),f=d0(e,h0(l,i.v7_relativeSplatPath),u,s==="path"),p=JSON.stringify(f);return V.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:s}),[c,p,s,n,r]),null}function Yt(t){Me(!1)}function ZR(t){let{basename:e="/",children:n=null,location:r,navigationType:s=or.Pop,navigator:i,static:o=!1,future:l}=t;Ho()&&Me(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:i,static:o,future:Co({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=ui(r));let{pathname:f="/",search:p="",hash:g="",state:S=null,key:P="default"}=r,C=V.useMemo(()=>{let A=c0(f,u);return A==null?null:{location:{pathname:A,search:p,hash:g,state:S,key:P},navigationType:s}},[u,f,p,g,S,P,s]);return C==null?null:V.createElement(Wo.Provider,{value:c},V.createElement(vu.Provider,{children:n,value:C}))}function ex(t){let{children:e,location:n}=t;return UR(Wh(e),n)}new Promise(()=>{});function Wh(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,s)=>{if(!V.isValidElement(r))return;let i=[...e,s];if(r.type===V.Fragment){n.push.apply(n,Wh(r.props.children,i));return}r.type!==Yt&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wh(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const tx="6";try{window.__reactRouterVersion=tx}catch{}const nx="startTransition",Ag=JT[nx];function rx(t){let{basename:e,children:n,future:r,window:s}=t,i=V.useRef();i.current==null&&(i.current=cR({window:s,v5Compat:!0}));let o=i.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=V.useCallback(p=>{c&&Ag?Ag(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.useEffect(()=>JR(r),[r]),V.createElement(ZR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Cg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cg||(Cg={}));var Pg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pg||(Pg={}));var kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},E0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[p],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new ix;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ix extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ox=function(t){const e=w0(t);return E0.encodeByteArray(e,!0)},Ul=function(t){return ox(t).replace(/\./g,"")},T0=function(t){try{return E0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=()=>ax().__FIREBASE_DEFAULTS__,ux=()=>{if(typeof process>"u"||typeof kg>"u")return;const t=kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T0(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return lx()||ux()||cx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I0=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},S0=t=>{const e=I0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R0=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function fx(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function px(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yx(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vx(){return!fx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _x(){try{return typeof indexedDB=="object"}catch{return!1}}function wx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ex,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Tx(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new fn(s,l,r)}}function Tx(t,e){return t.replace(Ix,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ix=/\{\$([^}]+)}/g;function Sx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ng(i)&&Ng(o)){if(!Fl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Rx(t,e){const n=new xx(t,e);return n.subscribe.bind(n)}class xx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ax(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ax(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kx(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Px(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Px(t){return t===Ur?void 0:t}function kx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const bx={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Dx=re.INFO,Ox={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Vx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ox[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pf{constructor(e){this.name=e,this._logLevel=Dx,this._logHandler=Vx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Lx=(t,e)=>e.some(n=>t instanceof n);let bg,Dg;function Mx(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jx(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C0=new WeakMap,Hh=new WeakMap,P0=new WeakMap,jc=new WeakMap,mf=new WeakMap;function Ux(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&C0.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function Fx(t){if(Hh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bx(t){qh=t(qh)}function zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return P0.set(r,e.sort?e.sort():[e]),gr(r)}:jx().includes(t)?function(...e){return t.apply(Uc(this),e),gr(C0.get(this))}:function(...e){return gr(t.apply(Uc(this),e))}}function $x(t){return typeof t=="function"?zx(t):(t instanceof IDBTransaction&&Fx(t),Lx(t,Mx())?new Proxy(t,qh):t)}function gr(t){if(t instanceof IDBRequest)return Ux(t);if(jc.has(t))return jc.get(t);const e=$x(t);return e!==t&&(jc.set(t,e),mf.set(e,t)),e}const Uc=t=>mf.get(t);function Wx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Hx=["get","getKey","getAll","getAllKeys","count"],qx=["put","add","delete","clear"],Fc=new Map;function Og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Fc.set(e,i),i}Bx(t=>({...t,get:(e,n,r)=>Og(e,n)||t.get(e,n,r),has:(e,n)=>!!Og(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",Vg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new pf("@firebase/app"),Qx="@firebase/app-compat",Yx="@firebase/analytics-compat",Xx="@firebase/analytics",Jx="@firebase/app-check-compat",Zx="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/data-connect",sA="@firebase/database-compat",iA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",uA="@firebase/messaging",cA="@firebase/messaging-compat",hA="@firebase/performance",dA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",yA="@firebase/firestore",vA="@firebase/vertexai-preview",_A="@firebase/firestore-compat",wA="firebase",EA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="[DEFAULT]",TA={[Kh]:"fire-core",[Qx]:"fire-core-compat",[Xx]:"fire-analytics",[Yx]:"fire-analytics-compat",[Zx]:"fire-app-check",[Jx]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-data-connect",[sA]:"fire-rtdb-compat",[iA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[uA]:"fire-fcm",[cA]:"fire-fcm-compat",[hA]:"fire-perf",[dA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[yA]:"fire-fst",[_A]:"fire-fst-compat",[vA]:"fire-vertex","fire-js":"fire-js",[wA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map,IA=new Map,Qh=new Map;function Lg(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Qh.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Qh.set(e,t);for(const n of Bl.values())Lg(n,t);for(const n of IA.values())Lg(n,t);return!0}function wu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new qo("app","Firebase",SA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=EA;function k0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=R0()),!n)throw yr.create("no-options");const i=Bl.get(s);if(i){if(Fl(n,i.options)&&Fl(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new Nx(s);for(const u of Qh.values())o.addComponent(u);const l=new RA(n,r,o);return Bl.set(s,l),l}function gf(t=Gh){const e=Bl.get(t);if(!e&&t===Gh&&R0())return k0();if(!e)throw yr.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=TA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}es(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="firebase-heartbeat-database",AA=1,Po="firebase-heartbeat-store";let Bc=null;function N0(){return Bc||(Bc=Wx(xA,AA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function CA(t){try{const n=(await N0()).transaction(Po),r=await n.objectStore(Po).get(b0(t));return await n.done,r}catch(e){if(e instanceof fn)Ln.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Mg(t,e){try{const r=(await N0()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,b0(t)),await r.done}catch(n){if(n instanceof fn)Ln.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function b0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=1024,kA=30*24*60*60*1e3;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jg(),{heartbeatsToSend:r,unsentEntries:s}=bA(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ln.warn(n),""}}}function jg(){return new Date().toISOString().substring(0,10)}function bA(t,e=PA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _x()?wx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){es(new Er("platform-logger",e=>new Kx(e),"PRIVATE")),es(new Er("heartbeat",e=>new NA(e),"PRIVATE")),rn(Kh,Vg,t),rn(Kh,Vg,"esm2017"),rn("fire-js","")}OA("");function yf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VA=D0,O0=new qo("auth","Firebase",D0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new pf("@firebase/auth");function LA(t,...e){zl.logLevel<=re.WARN&&zl.warn(`Auth (${hs}): ${t}`,...e)}function ol(t,...e){zl.logLevel<=re.ERROR&&zl.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw vf(t,...e)}function sn(t,...e){return vf(t,...e)}function V0(t,e,n){const r=Object.assign(Object.assign({},VA()),{[e]:n});return new qo("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return V0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O0.create(t,...e)}function G(t,e,...n){if(!t)throw vf(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function Mn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MA(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MA()||mx()||"connection"in navigator)?navigator.onLine:!0}function UA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=dx()||gx()}get(){return jA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new Go(3e4,6e4);function pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mn(t,e,n,r,s={}){return M0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return px()||(c.referrerPolicy="no-referrer"),L0.fetch()(j0(t,t.config.apiHost,n,l),c)})}async function M0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FA),e);try{const s=new $A(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw V0(t,f,c);Ft(t,f)}}catch(s){if(s instanceof fn)throw s;Ft(t,"network-request-failed",{message:String(s)})}}async function Qo(t,e,n,r,s={}){const i=await mn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ft(t,"multi-factor-auth-required",{_serverResponse:i}),i}function j0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_f(t.config,s):`${t.config.apiScheme}://${s}`}function zA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),BA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function Bg(t){return t!==void 0&&t.enterprise!==void 0}class WA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HA(t,e){return mn(t,"GET","/v2/recaptchaConfig",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function U0(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KA(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=wf(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:no(zc(s.auth_time)),issuedAtTime:no(zc(s.iat)),expirationTime:no(zc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const s=T0(n);return s?JSON.parse(s):(ol("Failed to decode base64 JWT payload"),null)}catch(s){return ol("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zg(t){const e=wf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&GA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ko(t,U0(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?F0(i.providerUserInfo):[],l=XA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function YA(t){const e=Ee(t);await $l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function F0(t){return t.map(e=>{var{providerId:n}=e,r=yf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){const n=await M0(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=j0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",L0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZA(t,e){return mn(t,"POST","/v2/accounts:revokeToken",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bs;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KA(this,e)}reload(){return YA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await ko(this,qA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:D,isAnonymous:L,providerData:U,stsTokenManager:w}=n;G(R&&w,e,"internal-error");const v=Bs.fromJSON(this.name,w);G(typeof R=="string",e,"internal-error"),Gn(p,e.name),Gn(g,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof L=="boolean",e,"internal-error"),Gn(S,e.name),Gn(P,e.name),Gn(C,e.name),Gn(A,e.name),Gn(E,e.name),Gn(_,e.name);const I=new An({uid:R,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:L,photoURL:P,phoneNumber:S,tenantId:C,stsTokenManager:v,createdAt:E,lastLoginAt:_});return U&&Array.isArray(U)&&(I.providerData=U.map(x=>Object.assign({},x))),A&&(I._redirectEventId=A),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bs;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $l(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?F0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Bs;l.updateFromIdToken(r);const u=new An({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function Cn(t){Mn(t instanceof Function,"Expected a class definition");let e=$g.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$g.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B0.type="NONE";const Wg=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=al(this.userKey,s.apiKey,i),this.fullPersistenceKey=al("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(Cn(Wg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Cn(Wg);const o=al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=An._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(G0(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||W0(e))&&!e.includes("edge/"))return"Chrome";if(q0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=ut()){return/firefox\//i.test(t)}function $0(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W0(t=ut()){return/crios\//i.test(t)}function H0(t=ut()){return/iemobile/i.test(t)}function q0(t=ut()){return/android/i.test(t)}function K0(t=ut()){return/blackberry/i.test(t)}function G0(t=ut()){return/webos/i.test(t)}function Ef(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eC(t=ut()){var e;return Ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tC(){return yx()&&document.documentMode===10}function Q0(t=ut()){return Ef(t)||q0(t)||G0(t)||K0(t)||/windows phone/i.test(t)||H0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e=[]){let n;switch(t){case"Browser":n=Hg(ut());break;case"Worker":n=`${Hg(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e={}){return mn(t,"GET","/v2/passwordPolicy",pn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=6;class iC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new nC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await U0(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(kn(this));const n=e?Ee(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rC(this),n=new iC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return Ee(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rx(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aC(t){Eu=t}function X0(t){return Eu.loadJS(t)}function lC(){return Eu.recaptchaEnterpriseScript}function uC(){return Eu.gapiScript}function cC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hC="recaptcha-enterprise",dC="NO_RECAPTCHA";class fC{constructor(e){this.type=hC,this.auth=zn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{HA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new WA(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Bg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(dC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Bg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lC();u.length!==0&&(u+=l),X0(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Kg(t,e,n,r=!1){const s=new fC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){const n=wu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fl(i,e??{}))return s;Ft(s,"already-initialized")}return n.initialize({options:e})}function mC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gC(t,e,n){const r=zn(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=J0(e),{host:o,port:l}=yC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),vC()}function J0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yC(t){const e=J0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e){return mn(t,"POST","/v1/accounts:resetPassword",pn(t,e))}async function _C(t,e){return mn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",pn(t,e))}async function EC(t,e){return mn(t,"POST","/v1/accounts:sendOobCode",pn(t,e))}async function TC(t,e){return EC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",pn(t,e))}async function SC(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Tf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,n,"signInWithPassword",wC);case"emailLink":return IC(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,r,"signUpPassword",_C);case"emailLink":return SC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="http://localhost";class ts extends Tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:RC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AC(t){const e=Bi(zi(t)).link,n=e?Bi(zi(e)).deep_link_id:null,r=Bi(zi(t)).deep_link_id;return(r?Bi(zi(r)).link:null)||r||n||e||t}class If{constructor(e){var n,r,s,i,o,l;const u=Bi(zi(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=xC((s=u.mode)!==null&&s!==void 0?s:null);G(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=AC(e);try{return new If(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=If.parseLink(n);return G(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Yo{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Yo{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Yo{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return Qo(t,"POST","/v1/accounts:signUp",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=Qg(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qg(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hl(e,n,r,s)}}function tw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hl._fromErrorAndOperation(t,i,e,r):i})}async function PC(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(kn(r));const s="reauthenticate";try{const i=await ko(t,tw(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=wf(i.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t,e,n=!1){if(Zt(t.app))return Promise.reject(kn(t));const r="signIn",s=await tw(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function NC(t,e){return nw(zn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Rf._fromServerResponse(e,n):"totpInfo"in n?xf._fromServerResponse(e,n):Ft(e,"internal-error")}}class Rf extends Sf{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Rf(n)}}class xf extends Sf{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new xf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bC(t,e,n){const r=zn(t);await Wl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TC)}async function DC(t,e,n){await Z0(Ee(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Af(t),r})}async function OC(t,e){const n=Ee(t),r=await Z0(n,{oobCode:e}),s=r.requestType;switch(G(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":G(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":G(r.mfaInfo,n,"internal-error");default:G(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=Sf._fromServerResponse(zn(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function VC(t,e){const{data:n}=await OC(Ee(t),e);return n.email}async function LC(t,e,n){if(Zt(t.app))return Promise.reject(kn(t));const r=zn(t),o=await Wl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Af(t),u}),l=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function MC(t,e,n){return Zt(t.app)?Promise.reject(kn(t)):NC(Ee(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Af(t),r})}function jC(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function UC(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function FC(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function BC(t){return Ee(t).signOut()}const ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=1e3,$C=10;class sw extends rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$C):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sw.type="LOCAL";const WC=sw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iw.type="SESSION";const ow=iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await HC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Cf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function KC(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function GC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YC(){return aw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="firebaseLocalStorageDb",XC=1,Kl="firebaseLocalStorage",uw="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function JC(){const t=indexedDB.deleteDatabase(lw);return new Xo(t).toPromise()}function Jh(){const t=indexedDB.open(lw,XC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:uw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await JC(),e(await Jh()))})})}async function Yg(t,e,n){const r=Iu(t,!0).put({[uw]:e,value:n});return new Xo(r).toPromise()}async function ZC(t,e){const n=Iu(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=Iu(t,!0).delete(e);return new Xo(n).toPromise()}const eP=800,tP=3;class cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(YC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GC(),!this.activeServiceWorker)return;this.sender=new qC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jh();return await Yg(e,ql,"1"),await Xg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Iu(s,!1).getAll();return new Xo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cw.type="LOCAL";const nP=cw;new Go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t,e){return e?Cn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sP(t){return nw(t.auth,new Pf(t),t.bypassAuthState)}function iP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),kC(n,new Pf(t),t.bypassAuthState)}async function oP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),PC(n,new Pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sP;case"linkViaPopup":case"linkViaRedirect":return oP;case"reauthViaPopup":case"reauthViaRedirect":return iP;default:Ft(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=new Go(2e3,1e4);class Os extends hw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aP.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="pendingRedirect",ll=new Map;class uP extends hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const r=await cP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cP(t,e){const n=fP(e),r=dP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hP(t,e){ll.set(t._key(),e)}function dP(t){return Cn(t._redirectPersistence)}function fP(t){return al(lP,t.config.apiKey,t.name)}async function pP(t,e,n=!1){if(Zt(t.app))return Promise.reject(kn(t));const r=zn(t),s=rP(r,e),o=await new uP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=10*60*1e3;class gP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wP=/^https?/;async function EP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vP(t);for(const n of e)try{if(TP(n))return}catch{}Ft(t,"unauthorized-domain")}function TP(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wP.test(n))return!1;if(_P.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new Go(3e4,6e4);function Zg(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SP(t){return new Promise((e,n)=>{var r,s,i;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(sn(t,"network-request-failed"))},timeout:IP.get()})}if(!((s=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)o();else{const l=cC("iframefcb");return on()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},X0(`${uC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function RP(t){return ul=ul||SP(t),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Go(5e3,15e3),AP="__/auth/iframe",CP="emulator/auth/iframe",PP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,CP):`https://${t.config.authDomain}/${AP}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=kP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ko(r).slice(1)}`}async function bP(t){const e=await RP(t),n=on().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:NP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{i(o)},xP.get());function u(){on().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OP=500,VP=600,LP="_blank",MP="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jP(t,e,n,r=OP,s=VP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},DP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ut().toLowerCase();n&&(l=W0(c)?LP:n),z0(c)&&(e=e||MP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,P])=>`${g}${S}=${P},`,"");if(eC(c)&&l!=="_self")return UP(e||"",l),new ey(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new ey(p)}function UP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="__/auth/handler",BP="emulator/auth/handler",zP=encodeURIComponent("fac");async function ty(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof ew){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Yo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${zP}=${encodeURIComponent(u)}`:"";return`${$P(t)}?${Ko(l).slice(1)}${c}`}function $P({config:t}){return t.emulator?_f(t,BP):`https://${t.authDomain}/${FP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class WP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=pP,this._overrideRedirectResult=hP}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ty(e,n,r,Yh(),s);return jP(e,o,Cf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ty(e,n,r,Yh(),s);return KC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bP(e),r=new gP(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$c];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q0()||$0()||Ef()}}const HP=WP;var ny="@firebase/auth",ry="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GP(t){es(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y0(t)},c=new oC(r,s,i,u);return mC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Er("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(r=>new qP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(ny,ry,KP(t)),rn(ny,ry,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=5*60,YP=x0("authIdTokenMaxAge")||QP;let sy=null;const XP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YP)return;const s=n==null?void 0:n.token;sy!==s&&(sy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JP(t=gf()){const e=wu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pC(t,{popupRedirectResolver:HP,persistence:[nP,WC,ow]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=XP(i.toString());UC(n,o,()=>o(n.currentUser)),jC(n,l=>o(l))}}const s=I0("auth");return s&&gC(n,`http://${s}`),n}function ZP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GP("Browser");var ek="firebase",tk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(ek,tk,"app");var iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,fw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(x,k,N){for(var T=Array(arguments.length-2),K=2;K<arguments.length;K++)T[K-2]=arguments[K];return v.prototype[k].apply(x,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var x=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)x[k]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(k=0;16>k;++k)x[k]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],k=w.g[2];var N=w.g[3],T=v+(N^I&(k^N))+x[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=N+(k^v&(I^k))+x[1]+3905402710&4294967295,N=v+(T<<12&4294967295|T>>>20),T=k+(I^N&(v^I))+x[2]+606105819&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(v^k&(N^v))+x[3]+3250441966&4294967295,I=k+(T<<22&4294967295|T>>>10),T=v+(N^I&(k^N))+x[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=N+(k^v&(I^k))+x[5]+1200080426&4294967295,N=v+(T<<12&4294967295|T>>>20),T=k+(I^N&(v^I))+x[6]+2821735955&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(v^k&(N^v))+x[7]+4249261313&4294967295,I=k+(T<<22&4294967295|T>>>10),T=v+(N^I&(k^N))+x[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=N+(k^v&(I^k))+x[9]+2336552879&4294967295,N=v+(T<<12&4294967295|T>>>20),T=k+(I^N&(v^I))+x[10]+4294925233&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(v^k&(N^v))+x[11]+2304563134&4294967295,I=k+(T<<22&4294967295|T>>>10),T=v+(N^I&(k^N))+x[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=N+(k^v&(I^k))+x[13]+4254626195&4294967295,N=v+(T<<12&4294967295|T>>>20),T=k+(I^N&(v^I))+x[14]+2792965006&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(v^k&(N^v))+x[15]+1236535329&4294967295,I=k+(T<<22&4294967295|T>>>10),T=v+(k^N&(I^k))+x[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(v^I))+x[6]+3225465664&4294967295,N=v+(T<<9&4294967295|T>>>23),T=k+(v^I&(N^v))+x[11]+643717713&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(k^N))+x[0]+3921069994&4294967295,I=k+(T<<20&4294967295|T>>>12),T=v+(k^N&(I^k))+x[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(v^I))+x[10]+38016083&4294967295,N=v+(T<<9&4294967295|T>>>23),T=k+(v^I&(N^v))+x[15]+3634488961&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(k^N))+x[4]+3889429448&4294967295,I=k+(T<<20&4294967295|T>>>12),T=v+(k^N&(I^k))+x[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(v^I))+x[14]+3275163606&4294967295,N=v+(T<<9&4294967295|T>>>23),T=k+(v^I&(N^v))+x[3]+4107603335&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(k^N))+x[8]+1163531501&4294967295,I=k+(T<<20&4294967295|T>>>12),T=v+(k^N&(I^k))+x[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(v^I))+x[2]+4243563512&4294967295,N=v+(T<<9&4294967295|T>>>23),T=k+(v^I&(N^v))+x[7]+1735328473&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(k^N))+x[12]+2368359562&4294967295,I=k+(T<<20&4294967295|T>>>12),T=v+(I^k^N)+x[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^k)+x[8]+2272392833&4294967295,N=v+(T<<11&4294967295|T>>>21),T=k+(N^v^I)+x[11]+1839030562&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^v)+x[14]+4259657740&4294967295,I=k+(T<<23&4294967295|T>>>9),T=v+(I^k^N)+x[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^k)+x[4]+1272893353&4294967295,N=v+(T<<11&4294967295|T>>>21),T=k+(N^v^I)+x[7]+4139469664&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^v)+x[10]+3200236656&4294967295,I=k+(T<<23&4294967295|T>>>9),T=v+(I^k^N)+x[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^k)+x[0]+3936430074&4294967295,N=v+(T<<11&4294967295|T>>>21),T=k+(N^v^I)+x[3]+3572445317&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^v)+x[6]+76029189&4294967295,I=k+(T<<23&4294967295|T>>>9),T=v+(I^k^N)+x[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^k)+x[12]+3873151461&4294967295,N=v+(T<<11&4294967295|T>>>21),T=k+(N^v^I)+x[15]+530742520&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^v)+x[2]+3299628645&4294967295,I=k+(T<<23&4294967295|T>>>9),T=v+(k^(I|~N))+x[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~k))+x[7]+1126891415&4294967295,N=v+(T<<10&4294967295|T>>>22),T=k+(v^(N|~I))+x[14]+2878612391&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~v))+x[5]+4237533241&4294967295,I=k+(T<<21&4294967295|T>>>11),T=v+(k^(I|~N))+x[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~k))+x[3]+2399980690&4294967295,N=v+(T<<10&4294967295|T>>>22),T=k+(v^(N|~I))+x[10]+4293915773&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~v))+x[1]+2240044497&4294967295,I=k+(T<<21&4294967295|T>>>11),T=v+(k^(I|~N))+x[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~k))+x[15]+4264355552&4294967295,N=v+(T<<10&4294967295|T>>>22),T=k+(v^(N|~I))+x[6]+2734768916&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~v))+x[13]+1309151649&4294967295,I=k+(T<<21&4294967295|T>>>11),T=v+(k^(I|~N))+x[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~k))+x[11]+3174756917&4294967295,N=v+(T<<10&4294967295|T>>>22),T=k+(v^(N|~I))+x[2]+718787259&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~v))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,x=this.B,k=this.h,N=0;N<v;){if(k==0)for(;N<=I;)s(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<v;)if(x[k++]=w.charCodeAt(N++),k==this.blockSize){s(this,x),k=0;break}}else for(;N<v;)if(x[k++]=w[N++],k==this.blockSize){s(this,x),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var x=0;32>x;x+=8)w[I++]=this.g[v]>>>x&255;return w};function i(w,v){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function o(w,v){this.h=v;for(var I=[],x=!0,k=w.length-1;0<=k;k--){var N=w[k]|0;x&&N==v||(I[k]=N,x=!1)}this.g=I}var l={};function u(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return A(c(-w));for(var v=[],I=1,x=0;w>=I;x++)v[x]=w/I|0,I*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return A(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),x=p,k=0;k<w.length;k+=8){var N=Math.min(8,w.length-k),T=parseInt(w.substring(k,k+N),v);8>N?(N=c(Math.pow(v,N)),x=x.j(N).add(c(T))):(x=x.j(I),x=x.add(c(T)))}return x}var p=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-A(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var x=this.i(I);w+=(0<=x?x:4294967296+x)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(C(this))return"-"+A(this).toString(w);for(var v=c(Math.pow(w,6)),I=this,x="";;){var k=D(I,v).g;I=E(I,k.j(v));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=k,P(I))return N+x;for(;6>N.length;)N="0"+N;x=N+x}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=E(this,w),C(w)?-1:P(w)?0:1};function A(w){for(var v=w.g.length,I=[],x=0;x<v;x++)I[x]=~w.g[x];return new o(I,~w.h).add(g)}t.abs=function(){return C(this)?A(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],x=0,k=0;k<=v;k++){var N=x+(this.i(k)&65535)+(w.i(k)&65535),T=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);x=T>>>16,N&=65535,T&=65535,I[k]=T<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(w,v){return w.add(A(v))}t.j=function(w){if(P(this)||P(w))return p;if(C(this))return C(w)?A(this).j(A(w)):A(A(this).j(w));if(C(w))return A(this.j(A(w)));if(0>this.l(S)&&0>w.l(S))return c(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],x=0;x<2*v;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<w.g.length;k++){var N=this.i(x)>>>16,T=this.i(x)&65535,K=w.i(k)>>>16,le=w.i(k)&65535;I[2*x+2*k]+=T*le,_(I,2*x+2*k),I[2*x+2*k+1]+=N*le,_(I,2*x+2*k+1),I[2*x+2*k+1]+=T*K,_(I,2*x+2*k+1),I[2*x+2*k+2]+=N*K,_(I,2*x+2*k+2)}for(x=0;x<v;x++)I[x]=I[2*x+1]<<16|I[2*x];for(x=v;x<2*v;x++)I[x]=0;return new o(I,0)};function _(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function R(w,v){this.g=w,this.h=v}function D(w,v){if(P(v))throw Error("division by zero");if(P(w))return new R(p,p);if(C(w))return v=D(A(w),v),new R(A(v.g),A(v.h));if(C(v))return v=D(w,A(v)),new R(A(v.g),v.h);if(30<w.g.length){if(C(w)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,x=v;0>=x.l(w);)I=L(I),x=L(x);var k=U(I,1),N=U(x,1);for(x=U(x,2),I=U(I,2);!P(x);){var T=N.add(x);0>=T.l(w)&&(k=k.add(I),N=T),x=U(x,1),I=U(I,1)}return v=E(w,k.j(v)),new R(k,v)}for(k=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),N=c(I),T=N.j(v);C(T)||0<T.l(w);)I-=x,N=c(I),T=N.j(v);P(N)&&(N=g),k=k.add(N),w=E(w,T)}return new R(k,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],x=0;x<v;x++)I[x]=this.i(x)&w.i(x);return new o(I,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],x=0;x<v;x++)I[x]=this.i(x)|w.i(x);return new o(I,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],x=0;x<v;x++)I[x]=this.i(x)^w.i(x);return new o(I,this.h^w.h)};function L(w){for(var v=w.g.length+1,I=[],x=0;x<v;x++)I[x]=w.i(x)<<1|w.i(x-1)>>>31;return new o(I,w.h)}function U(w,v){var I=v>>5;v%=32;for(var x=w.g.length-I,k=[],N=0;N<x;N++)k[N]=0<v?w.i(N+I)>>>v|w.i(N+I+1)<<32-v:w.i(N+I);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Kr=o}).apply(typeof iy<"u"?iy:typeof self<"u"?self:typeof window<"u"?window:{});var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pw,$i,mw,cl,Zh,gw,yw,vw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof za=="object"&&za];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in d))break e;d=d[b]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,y=!1,b={next:function(){if(!y&&d<a.length){var O=d++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function S(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,b,O){for(var z=Array(arguments.length-2),de=2;de<arguments.length;de++)z[de-2]=arguments[de];return h.prototype[b].apply(y,z)}}function C(a){const h=a.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function A(a,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const b=a.length||0,O=y.length||0;a.length=b+O;for(let z=0;z<O;z++)a[b+z]=y[z]}else a.push(y)}}class E{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var L=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function U(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,h){let d,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(d in y)a[d]=y[d];for(let O=0;O<I.length;O++)d=I[O],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function T(){var a=H;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class K{constructor(){this.h=this.g=null}add(h,d){const y=le.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var le=new E(()=>new Te,a=>a.reset());class Te{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,B=!1,H=new K,Y=()=>{const a=l.Promise.resolve(void 0);ee=()=>{a.then(Ie)}};var Ie=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){N(d)}var h=le;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function yn(a,h){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}P(yn,be);var vn={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(1e6*Math.random()|0),sT=0;function iT(a,h,d,y,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=b,this.key=++sT,this.da=this.fa=!1}function oa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function aa(a){this.src=a,this.g={},this.h=0}aa.prototype.add=function(a,h,d,y,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=zu(a,h,y,b);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new iT(h,this.src,O,!!y,b),h.fa=d,a.push(h)),h};function Bu(a,h){var d=h.type;if(d in a.g){var y=a.g[d],b=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(y,b,1),O&&(oa(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function zu(a,h,d,y){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==y)return b}return-1}var $u="closure_lm_"+(1e6*Math.random()|0),Wu={};function fp(a,h,d,y,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)fp(a,h[O],d,y,b);return null}return d=gp(d),a&&a[_n]?a.K(h,d,c(y)?!!y.capture:!1,b):oT(a,h,d,!1,y,b)}function oT(a,h,d,y,b,O){if(!h)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,de=qu(a);if(de||(a[$u]=de=new aa(a)),d=de.add(h,d,y,z,O),d.proxy)return d;if(y=aT(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)gn||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),y,b);else if(a.attachEvent)a.attachEvent(mp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function aT(){function a(d){return h.call(a.src,a.listener,d)}const h=lT;return a}function pp(a,h,d,y,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)pp(a,h[O],d,y,b);else y=c(y)?!!y.capture:!!y,d=gp(d),a&&a[_n]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],d=zu(O,d,y,b),-1<d&&(oa(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=qu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zu(h,d,y,b)),(d=-1<a?h[a]:null)&&Hu(d))}function Hu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_n])Bu(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(mp(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=qu(h))?(Bu(d,a),d.h==0&&(d.src=null,h[$u]=null)):oa(a)}}}function mp(a){return a in Wu?Wu[a]:Wu[a]="on"+a}function lT(a,h){if(a.da)a=!0;else{h=new yn(h,this);var d=a.listener,y=a.ha||a.src;a.fa&&Hu(a),a=d.call(y,h)}return a}function qu(a){return a=a[$u],a instanceof aa?a:null}var Ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function gp(a){return typeof a=="function"?a:(a[Ku]||(a[Ku]=function(h){return a.handleEvent(h)}),a[Ku])}function Ze(){he.call(this),this.i=new aa(this),this.M=this,this.F=null}P(Ze,he),Ze.prototype[_n]=!0,Ze.prototype.removeEventListener=function(a,h,d,y){pp(this,a,h,d,y)};function ct(a,h){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new be(h,a);else if(h instanceof be)h.target=h.target||a;else{var b=h;h=new be(y,a),x(h,b)}if(b=!0,d)for(var O=d.length-1;0<=O;O--){var z=h.g=d[O];b=la(z,y,!0,h)&&b}if(z=h.g=a,b=la(z,y,!0,h)&&b,b=la(z,y,!1,h)&&b,d)for(O=0;O<d.length;O++)z=h.g=d[O],b=la(z,y,!1,h)&&b}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],y=0;y<d.length;y++)oa(d[y]);delete a.g[h],a.h--}}this.F=null},Ze.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},Ze.prototype.L=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function la(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==d){var de=z.listener,He=z.ha||z.src;z.fa&&Bu(a.i,z),b=de.call(He,y)!==!1&&b}}return b&&!y.defaultPrevented}function yp(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function vp(a){a.g=yp(()=>{a.g=null,a.i&&(a.i=!1,vp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class uT extends he{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:vp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(a){he.call(this),this.h=a,this.g={}}P(pi,he);var _p=[];function wp(a){U(a.g,function(h,d){this.g.hasOwnProperty(d)&&Hu(h)},a),a.g={}}pi.prototype.N=function(){pi.aa.N.call(this),wp(this)},pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=l.JSON.stringify,cT=l.JSON.parse,hT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qu(){}Qu.prototype.h=null;function Ep(a){return a.h||(a.h=a.i())}function Tp(){}var mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){be.call(this,"d")}P(Yu,be);function Xu(){be.call(this,"c")}P(Xu,be);var Nr={},Ip=null;function ua(){return Ip=Ip||new Ze}Nr.La="serverreachability";function Sp(a){be.call(this,Nr.La,a)}P(Sp,be);function gi(a){const h=ua();ct(h,new Sp(h))}Nr.STAT_EVENT="statevent";function Rp(a,h){be.call(this,Nr.STAT_EVENT,a),this.stat=h}P(Rp,be);function ht(a){const h=ua();ct(h,new Rp(h,a))}Nr.Ma="timingevent";function xp(a,h){be.call(this,Nr.Ma,a),this.size=h}P(xp,be);function yi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function dT(a,h,d,y,b,O){a.info(function(){if(a.g)if(O)for(var z="",de=O.split("&"),He=0;He<de.length;He++){var oe=de[He].split("=");if(1<oe.length){var et=oe[0];oe=oe[1];var tt=et.split("_");z=2<=tt.length&&tt[1]=="type"?z+(et+"="+oe+"&"):z+(et+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+d+`
`+z})}function fT(a,h,d,y,b,O,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+d+`
`+O+" "+z})}function ps(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mT(a,d)+(y?" "+y:"")})}function pT(a,h){a.info(function(){return"TIMEOUT: "+h})}vi.prototype.info=function(){};function mT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return Gu(d)}catch{return h}}var ca={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ap={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ju;function ha(){}P(ha,Qu),ha.prototype.g=function(){return new XMLHttpRequest},ha.prototype.i=function(){return{}},Ju=new ha;function Wn(a,h,d,y){this.j=a,this.i=h,this.l=d,this.R=y||1,this.U=new pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cp}function Cp(){this.i=null,this.g="",this.h=!1}var Pp={},Zu={};function ec(a,h,d){a.L=1,a.v=ma(wn(h)),a.m=d,a.P=!0,kp(a,null)}function kp(a,h){a.F=Date.now(),da(a),a.A=wn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Wp(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Cp,a.g=lm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new uT(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,y=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(_p[0]=b.toString()),b=_p);for(var O=0;O<b.length;O++){var z=fp(d,b[O],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),gi(),dT(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&En(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=En(this.g);var h=this.g.Ba();const ys=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||Xp(this.g)))){this.J||tt!=4||h==7||(h==8||0>=ys?gi(3):gi(2)),tc(this);var d=this.g.Z();this.X=d;t:if(Np(this)){var y=Xp(this.g);a="";var b=y.length,O=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),_i(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==b-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,fT(this.i,this.u,this.A,this.l,this.R,tt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,He=this.g;if((de=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var oe=de;break t}}oe=null}if(d=oe)ps(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,ht(12),br(this),_i(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<z.length;)if(Bt=gT(this,z),Bt==Zu){tt==4&&(this.s=4,ht(14),d=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Pp){this.s=4,ht(15),ps(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else ps(this.i,this.l,Bt,null),nc(this,Bt);if(Np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||z.length!=0||this.h.h||(this.s=1,ht(16),d=!1),this.o=this.o&&d,!d)ps(this.i,this.l,z,"[Invalid Chunked Response]"),br(this),_i(this);else if(0<z.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),lc(et),et.M=!0,ht(11))}}else ps(this.i,this.l,z,null),nc(this,z);tt==4&&br(this),this.o&&!this.J&&(tt==4?sm(this.j,this):(this.o=!1,da(this)))}else DT(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),br(this),_i(this)}}}catch{}finally{}};function Np(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gT(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Zu:(d=Number(h.substring(d,y)),isNaN(d)?Pp:(y+=1,y+d>h.length?Zu:(h=h.slice(y,y+d),a.C=y+d,h)))}Wn.prototype.cancel=function(){this.J=!0,br(this)};function da(a){a.S=Date.now()+a.I,bp(a,a.I)}function bp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(g(a.ba,a),h)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pT(this.i,this.A),this.L!=2&&(gi(),ht(17)),br(this),this.s=2,_i(this)):bp(this,this.S-a)};function _i(a){a.j.G==0||a.J||sm(a.j,a)}function br(a){tc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,wp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function nc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ea(d),_a(d);else break e;ac(d),ht(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=yi(g(d.Za,d),6e3));if(1>=Vp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Or(d,11)}else if((a.K||d.g==a)&&Ea(d),!_(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let oe=b[h];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const et=oe[3];et!=null&&(d.la=et,d.j.info("VER="+d.la));const tt=oe[4];tt!=null&&(d.Aa=tt,d.j.info("SVER="+d.Aa));const ys=oe[5];ys!=null&&typeof ys=="number"&&0<ys&&(y=1.5*ys,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Bt=a.g;if(Bt){const Ia=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var O=y.h;O.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(sc(O,O.h),O.h=null))}if(y.D){const uc=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(y.ya=uc,pe(y.I,y.D,uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var z=a;if(y.qa=am(y,y.J?y.ia:null,y.W),z.K){Lp(y.h,z);var de=z,He=y.L;He&&(de.I=He),de.B&&(tc(de),da(de)),y.g=z}else nm(y);0<d.i.length&&wa(d)}else oe[0]!="stop"&&oe[0]!="close"||Or(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Or(d,7):oc(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}gi(4)}catch{}}var yT=class{constructor(a,h){this.g=a,this.map=h}};function Dp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vp(a){return a.h?1:a.g?a.g.size:0}function rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function sc(a,h){a.g?a.g.add(h):a.h=h}function Lp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Dp.prototype.cancel=function(){if(this.i=Mp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Mp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return C(a.i)}function vT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,y=0;y<d;y++)h.push(a[y]);return h}h=[],d=0;for(y in a)h[d++]=a[y];return h}function _T(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const y in a)h[d++]=y;return h}}}function jp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=_T(a),y=vT(a),b=y.length,O=0;O<b;O++)h.call(void 0,y[O],d&&d[O],a)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),b=null;if(0<=y){var O=a[d].substring(0,y);b=a[d].substring(y+1)}else O=a[d];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Dr){this.h=a.h,fa(this,a.j),this.o=a.o,this.g=a.g,pa(this,a.s),this.l=a.l;var h=a.i,d=new Ti;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Fp(this,d),this.m=a.m}else a&&(h=String(a).match(Up))?(this.h=!1,fa(this,h[1]||"",!0),this.o=wi(h[2]||""),this.g=wi(h[3]||"",!0),pa(this,h[4]),this.l=wi(h[5]||"",!0),Fp(this,h[6]||"",!0),this.m=wi(h[7]||"")):(this.h=!1,this.i=new Ti(null,this.h))}Dr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ei(h,Bp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ei(h,Bp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ei(d,d.charAt(0)=="/"?IT:TT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ei(d,RT)),a.join("")};function wn(a){return new Dr(a)}function fa(a,h,d){a.j=d?wi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function pa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Fp(a,h,d){h instanceof Ti?(a.i=h,xT(a.i,a.h)):(d||(h=Ei(h,ST)),a.i=new Ti(h,a.h))}function pe(a,h,d){a.i.set(h,d)}function ma(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ei(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ET),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ET(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bp=/[#\/\?@]/g,TT=/[#\?:]/g,IT=/[#\?]/g,ST=/[#\?@]/g,RT=/#/g;function Ti(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&wT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ti.prototype,t.add=function(a,h){Hn(this),this.i=null,a=ms(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function zp(a,h){Hn(a),h=ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $p(a,h){return Hn(a),h=ms(a,h),a.g.has(h)}t.forEach=function(a,h){Hn(this),this.g.forEach(function(d,y){d.forEach(function(b){a.call(h,b,y,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const b=a[y];for(let O=0;O<b.length;O++)d.push(h[y])}return d},t.V=function(a){Hn(this);let h=[];if(typeof a=="string")$p(this,a)&&(h=h.concat(this.g.get(ms(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Hn(this),this.i=null,a=ms(this,a),$p(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Wp(a,h,d){zp(a,h),0<d.length&&(a.i=null,a.g.set(ms(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const O=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=O;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),a.push(b)}}return this.i=a.join("&")};function ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function xT(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(d,y){var b=y.toLowerCase();y!=b&&(zp(this,y),Wp(this,b,d))},a)),a.j=h}function AT(a,h){const d=new vi;if(l.Image){const y=new Image;y.onload=S(qn,d,"TestLoadImage: loaded",!0,h,y),y.onerror=S(qn,d,"TestLoadImage: error",!1,h,y),y.onabort=S(qn,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=S(qn,d,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function CT(a,h){const d=new vi,y=new AbortController,b=setTimeout(()=>{y.abort(),qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(b),O.ok?qn(d,"TestPingServer: ok",!0,h):qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),qn(d,"TestPingServer: error",!1,h)})}function qn(a,h,d,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(d)}catch{}}function PT(){this.g=new hT}function kT(a,h,d){const y=d||"";try{jp(a,function(b,O){let z=b;c(b)&&(z=Gu(b)),h.push(y+O+"="+encodeURIComponent(z))})}catch(b){throw h.push(y+"type="+encodeURIComponent("_badmap")),b}}function ga(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ga,Qu),ga.prototype.g=function(){return new ya(this.l,this.j)},ga.prototype.i=function(a){return function(){return a}}({});function ya(a,h){Ze.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ya,Ze),t=ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ii(this):Si(this),this.readyState==3&&Hp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ii(this))},t.Qa=function(a){this.g&&(this.response=a,Ii(this))},t.ga=function(){this.g&&Ii(this)};function Ii(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Si(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qp(a){let h="";return U(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function ic(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=qp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,h,d))}function Ce(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ce,Ze);var NT=/^https?$/i,bT=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ju.g(),this.v=this.o?Ep(this.o):Ep(Ju),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Kp(this,O);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)d.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())d.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bT,h,void 0))||y||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Kp(this,O)}};function Kp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Gp(a),va(a)}function Gp(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ct(this,"complete"),ct(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qp(this):this.bb())},t.bb=function(){Qp(this)};function Qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)yp(a.Ea,0,a);else if(ct(a,"readystatechange"),En(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=z===0){var b=String(a.D).match(Up)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),y=!NT.test(b?b.toLowerCase():"")}d=y}if(d)ct(a,"complete"),ct(a,"success");else{a.m=6;try{var O=2<En(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Gp(a)}}finally{va(a)}}}}function va(a,h){if(a.g){Yp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ct(a,"ready");try{d.onreadystatechange=y}catch{}}}function Yp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),cT(h)}};function Xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DT(a){const h={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var d=k(a[y]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[b]||[];h[b]=O,O.push(d)}w(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ri(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Jp(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ri("baseRetryDelayMs",5e3,a),this.cb=Ri("retryDelaySeedMs",1e4,a),this.Wa=Ri("forwardChannelMaxRetries",2,a),this.wa=Ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Dp(a&&a.concurrentRequestLimit),this.Da=new PT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,y){ht(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=am(this,null,this.W),wa(this)};function oc(a){if(Zp(a),a.G==3){var h=a.U++,d=wn(a.I);if(pe(d,"SID",a.K),pe(d,"RID",h),pe(d,"TYPE","terminate"),xi(a,d),h=new Wn(a,a.j,h),h.L=2,h.v=ma(wn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=lm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),da(h)}om(a)}function _a(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function Zp(a){_a(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function wa(a){if(!Op(a.h)&&!a.s){a.s=!0;var h=a.Ga;ee||Y(),B||(ee(),B=!0),H.add(h,a),a.B=0}}function OT(a,h){return Vp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(g(a.Ga,a,h),im(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Wn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),x(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=tm(this,b,h),d=wn(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),xi(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(qp(O)))+"&"+h:this.m&&ic(d,this.m,O)),sc(this.h,b),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",h),pe(d,"SID","null"),b.T=!0,ec(b,d,null)):ec(b,d,h),this.G=2}}else this.G==3&&(a?em(this,a):this.i.length==0||Op(this.h)||em(this))};function em(a,h){var d;h?d=h.l:d=a.U++;const y=wn(a.I);pe(y,"SID",a.K),pe(y,"RID",d),pe(y,"AID",a.T),xi(a,y),a.m&&a.o&&ic(y,a.m,a.o),d=new Wn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=tm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sc(a.h,d),ec(d,y,h)}function xi(a,h){a.H&&U(a.H,function(d,y){pe(h,y,d)}),a.l&&jp({},function(d,y){pe(h,y,d)})}function tm(a,h,d){d=Math.min(a.i.length,d);var y=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=b[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let de=!0;for(let He=0;He<d;He++){let oe=b[He].g;const et=b[He].map;if(oe-=O,0>oe)O=Math.max(0,b[He].g-100),de=!1;else try{kT(et,z,"req"+oe+"_")}catch{y&&y(et)}}if(de){y=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,y}function nm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ee||Y(),B||(ee(),B=!0),H.add(h,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(g(a.Fa,a),im(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),_a(this),rm(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);pe(h,"RID","rpc"),pe(h,"SID",a.K),pe(h,"AID",a.T),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(h,"TO",a.ja),pe(h,"TYPE","xmlhttp"),xi(a,h),a.m&&a.o&&ic(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ma(wn(h)),d.m=null,d.P=!0,kp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,_a(this),ac(this),ht(19))};function Ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sm(a,h){var d=null;if(a.g==h){Ea(a),lc(a),a.g=null;var y=2}else if(rc(a.h,h))d=h.D,Lp(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;y=ua(),ct(y,new xp(y,d)),wa(a)}else nm(a);else if(b=h.s,b==3||b==0&&0<h.X||!(y==1&&OT(a,h)||y==2&&ac(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function im(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),y=a.Xa;const b=!y;y=new Dr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fa(y,"https"),ma(y),b?AT(y.toString(),d):CT(y.toString(),d)}else ht(2);a.G=0,a.l&&a.l.sa(h),om(a),Zp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function om(a){if(a.G=0,a.ka=[],a.l){const h=Mp(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ka,h),A(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function am(a,h,d){var y=d instanceof Dr?wn(d):new Dr(d);if(y.g!="")h&&(y.g=h+"."+y.g),pa(y,y.s);else{var b=l.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new Dr(null);y&&fa(O,y),h&&(O.g=h),b&&pa(O,b),d&&(O.l=d),y=O}return d=a.D,h=a.ya,d&&h&&pe(y,d,h),pe(y,"VER",a.la),xi(a,y),y}function lm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new ga({eb:d})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function um(){}t=um.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ta(){}Ta.prototype.g=function(a,h){return new St(a,h)};function St(a,h){Ze.call(this),this.g=new Jp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new gs(this)}P(St,Ze),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){oc(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Gu(a),a=d);h.i.push(new yT(h.Ya++,a)),h.G==3&&wa(h)},St.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,St.aa.N.call(this)};function cm(a){Yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(cm,Yu);function hm(){Xu.call(this),this.status=1}P(hm,Xu);function gs(a){this.g=a}P(gs,um),gs.prototype.ua=function(){ct(this.g,"a")},gs.prototype.ta=function(a){ct(this.g,new cm(a))},gs.prototype.sa=function(a){ct(this.g,new hm)},gs.prototype.ra=function(){ct(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,vw=function(){return new Ta},yw=function(){return ua()},gw=Nr,Zh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,cl=ca,Ap.COMPLETE="complete",mw=Ap,Tp.EventType=mi,mi.OPEN="a",mi.CLOSE="b",mi.ERROR="c",mi.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,$i=Tp,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,pw=Ce}).apply(typeof za<"u"?za:typeof self<"u"?self:typeof window<"u"?window:{});const oy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new pf("@firebase/firestore");function Vi(){return rs.logLevel}function W(t,...e){if(rs.logLevel<=re.DEBUG){const n=e.map(kf);rs.debug(`Firestore (${hi}): ${t}`,...n)}}function jn(t,...e){if(rs.logLevel<=re.ERROR){const n=e.map(kf);rs.error(`Firestore (${hi}): ${t}`,...n)}}function Zs(t,...e){if(rs.logLevel<=re.WARN){const n=e.map(kf);rs.warn(`Firestore (${hi}): ${t}`,...n)}}function kf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function ce(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class rk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sk{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new _w(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new it(e)}}class ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ok{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ik(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ak{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new ak(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Be(0,0))}static max(){return new J(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends bo{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const ck=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends bo{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return ck.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(we.fromString(e))}static fromName(e){return new Q(we.fromString(e).popFirst(5))}static empty(){return new Q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new we(e.slice()))}}function hk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Tr(s,Q.empty(),e)}function dk(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(J.min(),Q.empty(),-1)}static max(){return new Tr(J.max(),Q.empty(),-1)}}function fk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==pk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function gk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nf.oe=-1;function Su(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function yk(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ly(this.data.getIterator())}getIteratorFrom(e){return new ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new At([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tw("Invalid base64 string: "+i):i}}(e);return new Je(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const vk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(ce(!!t),typeof t=="string"){let e=0;const n=vk.exec(t);if(ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Df(t){const e=t.mapValue.fields.__previous_value__;return bf(e)?Df(e):e}function Do(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s,i,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={mapValue:{}};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bf(t)?4:Ek(t)?9007199254740991:wk(t)?10:11:X()}function cn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),l=Ir(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ss(s.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),l=De(i.doubleValue);return o===l?Gl(o)===Gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ay(o)!==ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Vo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=De(i.integerValue||i.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uy(t.timestampValue,e.timestampValue);case 4:return uy(Do(t),Do(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ss(i),u=ss(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ae(l[c],u[c]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ae(De(i.latitude),De(o.latitude));return l!==0?l:ae(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,c,f;const p=i.fields||{},g=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=ae(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:cy(S,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Wa.mapValue&&o===Wa.mapValue)return 0;if(i===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=ae(u[p],f[p]);if(g!==0)return g;const S=ti(l[u[p]],c[f[p]]);if(S!==0)return S}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Ir(t),r=Ir(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function cy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return ae(n.length,r.length)}function ni(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ed(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ed(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function td(t){return!!t&&"integerValue"in t}function Of(t){return!!t&&"arrayValue"in t}function hy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function wk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ek(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(ro(this.value))}}function Iw(t){const e=[];return ds(t.fields,(n,r)=>{const s=new Ge([n]);if(hl(r)){const i=Iw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,J.min(),J.min(),J.min(),vt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,J.min(),J.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,J.min(),J.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function fy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Tk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{}class Ue extends Sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sk(e,n,r):n==="array-contains"?new Ak(e,r):n==="in"?new Ck(e,r):n==="not-in"?new Pk(e,r):n==="array-contains-any"?new kk(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Rk(e,r):new xk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Sw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return Rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rw(t){return t.op==="and"}function xw(t){return Ik(t)&&Rw(t)}function Ik(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function nd(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(xw(t))return t.filters.map(e=>nd(e)).join(",");{const e=t.filters.map(n=>nd(n)).join(",");return`${t.op}(${e})`}}function Aw(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Aw(o,s.filters[l]),!0):!1}(t,e):void X()}function Cw(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cw).join(" ,")+"}"}(t):"Filter"}class Sk extends Ue{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rk extends Ue{constructor(e,n){super(e,"in",n),this.keys=Pw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xk extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Pw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Ak extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Of(n)&&Vo(n.arrayValue,this.value)}}class Ck extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class Pk extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class kk extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function my(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Nk(t,e,n,r,s,i,o)}function Vf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function Lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Aw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!py(t.startAt,e.startAt)&&py(t.endAt,e.endAt)}function rd(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bk(t,e,n,r,s,i,o,l){return new Ru(t,e,n,r,s,i,o,l)}function Mf(t){return new Ru(t)}function gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dk(t){return t.collectionGroup!==null}function so(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Yl(i,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Yl(Ge.keyField(),r))}return e.ce}function an(t){const e=Z(t);return e.le||(e.le=Ok(e,so(t))),e.le}function Ok(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yl(s.field,i)});const n=t.endAt?new Ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ql(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sd(t,e,n){return new Ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return Lf(an(t),an(e))&&t.limitType===e.limitType}function kw(t){return`${Vf(an(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cw(s)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of so(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=fy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,so(r),s)||r.endAt&&!function(o,l,u){const c=fy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,so(r),s))}(t,e)}function Vk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nw(t){return(e,n)=>{let r=!1;for(const s of so(t)){const i=Lk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Lk(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?ti(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Ae(Q.comparator);function Un(){return Mk}const bw=new Ae(Q.comparator);function Wi(...t){let e=bw;for(const n of t)e=e.insert(n.key,n);return e}function Dw(t){let e=bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return io()}function Ow(){return io()}function io(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const jk=new Ae(Q.comparator),Uk=new Ye(Q.comparator);function ne(...t){let e=Uk;for(const n of t)e=e.add(n);return e}const Fk=new Ye(ae);function Bk(){return Fk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function Vw(t){return{integerValue:""+t}}function zk(t,e){return yk(e)?Vw(e):jf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function $k(t,e,n){return t instanceof Lo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bf(i)&&(i=Df(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Mo?Mw(t,e):t instanceof jo?jw(t,e):function(s,i){const o=Lw(s,i),l=yy(o)+yy(s.Pe);return td(o)&&td(s.Pe)?Vw(l):jf(s.serializer,l)}(t,e)}function Wk(t,e,n){return t instanceof Mo?Mw(t,e):t instanceof jo?jw(t,e):n}function Lw(t,e){return t instanceof Xl?function(r){return td(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Lo extends Cu{}class Mo extends Cu{constructor(e){super(),this.elements=e}}function Mw(t,e){const n=Uw(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class jo extends Cu{constructor(e){super(),this.elements=e}}function jw(t,e){let n=Uw(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class Xl extends Cu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yy(t){return De(t.integerValue||t.doubleValue)}function Uw(t){return Of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.field=e,this.transform=n}}function qk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Mo&&s instanceof Mo||r instanceof jo&&s instanceof jo?ei(r.elements,s.elements,cn):r instanceof Xl&&s instanceof Xl?cn(r.Pe,s.Pe):r instanceof Lo&&s instanceof Lo}(t.transform,e.transform)}class Kk{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pu{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zw(t.key,ln.none()):new ea(t.key,t.data,ln.none());{const n=t.data,r=vt.empty();let s=new Ye(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new At(s.toArray()),ln.none())}}function Gk(t,e,n){t instanceof ea?function(s,i,o){const l=s.value.clone(),u=_y(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,o){if(!dl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=_y(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Bw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof ea?function(i,o,l,u){if(!dl(i.precondition,o))return l;const c=i.value.clone(),f=wy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,o,l,u){if(!dl(i.precondition,o))return l;const c=wy(i.fieldTransforms,u,o),f=o.data;return f.setAll(Bw(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return dl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Qk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lw(r.transform,s||null);i!=null&&(n===null&&(n=vt.empty()),n.set(r.field,i))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>qk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Pu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends Pu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _y(t,e,n){const r=new Map;ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Wk(o,l,n[s]))}return r}function wy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$k(i,o,e))}return r}class zw extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yk extends Pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Gk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ow();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Fw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>vy(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class Uf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ce(e.mutations.length===r.length);let s=function(){return jk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Uf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,se;function eN(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function $w(t){if(t===void 0)return jn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(se=Ve||(Ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=new Kr([4294967295,4294967295],0);function Ey(t){const e=tN().encode(t),n=new fw;return n.update(e),new Uint8Array(n.digest())}function Ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class Ff{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hi(`Invalid padding: ${n}`);if(r<0)throw new Hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Kr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(nN)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ey(e),[r,s]=Ty(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ff(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ey(e),[r,s]=Ty(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ku(J.min(),s,new Ae(ae),Un(),ne())}}class ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ww{constructor(e,n){this.targetId=e,this.me=n}}class Hw{constructor(e,n,r=Je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Iy{constructor(){this.fe=0,this.ge=Ry(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Sy(),this.Qe=new Ae(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(rd(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,at.newNoDocument(o,J.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ss(r).toUint8Array()}catch(u){if(u instanceof Tw)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ff(o,s,i)}catch(u){return Zs(u instanceof Hi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&rd(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,at.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ku(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=Sy(),this.Qe=new Ae(ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Iy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Iy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Sy(){return new Ae(Q.comparator)}function Ry(){return new Ae(Q.comparator)}const sN={asc:"ASCENDING",desc:"DESCENDING"},iN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oN={and:"AND",or:"OR"};class aN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function id(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lN(t,e){return Jl(t,e.toTimestamp())}function un(t){return ce(!!t),J.fromTimestamp(function(n){const r=Ir(n);return new Be(r.seconds,r.nanos)}(t))}function Bf(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kw(t){const e=we.fromString(t);return ce(Jw(e)),e}function ad(t,e){return Bf(t.databaseId,e.path)}function Wc(t,e){const n=Kw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Qw(n))}function Gw(t,e){return Bf(t.databaseId,e)}function uN(t){const e=Kw(t);return e.length===4?we.emptyPath():Qw(e)}function ld(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qw(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xy(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function cN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string"),Je.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Je.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:$w(c.code);return new q(f,c.message||"")}(o);n=new Hw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new vt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new fl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wc(t,r.document),i=r.readTime?un(r.readTime):J.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wc(t,r.document),i=r.removedTargetIds||[];n=new fl([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Zk(s,i),l=r.targetId;n=new Ww(l,o)}}return n}function hN(t,e){let n;if(e instanceof ea)n={update:xy(t,e.key,e.value)};else if(e instanceof zw)n={delete:ad(t,e.key)};else if(e instanceof Cr)n={update:xy(t,e.key,e.data),updateMask:wN(e.fieldMask)};else{if(!(e instanceof Yk))return X();n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function dN(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(J.min())&&(o=un(i)),new Kk(o,s.transformResults||[])}(n,e))):[]}function fN(t,e){return{documents:[Gw(t,e.path)]}}function pN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gw(t,s);const i=function(c){if(c.length!==0)return Xw(hn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:ws(g.field),direction:yN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=id(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function mN(t){let e=uN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Yw(p);return g instanceof hn&&xw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Yl(Es(P.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Su(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,S=p.values||[];return new Ql(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,S=p.values||[];return new Ql(S,g)}(n.endAt)),bk(e,s,o,i,l,"F",u,c)}function gN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>Yw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function yN(t){return sN[t]}function vN(t){return iN[t]}function _N(t){return oN[t]}function ws(t){return{fieldPath:t.canonicalString()}}function Es(t){return Ge.fromServerFormat(t.fieldPath)}function Xw(t){return t instanceof Ue?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NAN"}};if(hy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NAN"}};if(hy(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(n.field),op:vN(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>Xw(s));return r.length===1?r[0]:{compositeFilter:{op:_N(n.op),filters:r}}}(t):X()}function wN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.ct=e}}function TN(t){const e=mN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.un=new SN}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Tr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class SN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&oo(r.mutation,s,At.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=$r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Un();const o=io(),l=function(){return io()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),oo(f.mutation,c,f.mutation.getFieldMask(),Be.now())):o.set(c.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new xN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=io();let s=new Ae((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||At.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Ow();f.forEach(g=>{if(!i.has(g)){const S=Fw(n.get(g),r.get(g));S!==null&&p.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve($r());let l=-1,u=i;return o.next(c=>j.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:Dw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Wi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const c=function(p,g){return new Ru(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=Wi();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&oo(f.mutation,c,At.empty(),Be.now()),Au(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:TN(s.bundledQuery),readTime:un(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.overlays=new Ae(Q.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=$r(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=$r(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=$r(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jk(n,r));let i=this.Ir.get(n);i===void 0&&(i=ne(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.Tr=new Ye(ze.Er),this.dr=new Ye(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new we([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new we([])),r=new ze(n,e),s=new ze(n,e+1);let i=ne();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(ze.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ae);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Q(i),0);let l=new Ye(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.Mr=e,this.docs=function(){return new Ae(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fk(dk(f),r)<=0||(s.has(f.key)||Au(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DN(this)}getSize(e){return j.resolve(this.size)}}class DN extends RN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.persistence=e,this.Nr=new di(n=>Vf(n),Lf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zf,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Nf(0),this.Kr=!1,this.Kr=!0,this.$r=new kN,this.referenceDelegate=e(this),this.Ur=new ON(this),this.indexManager=new IN,this.remoteDocumentCache=function(s){return new bN(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new EN(n),this.Gr=new CN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new NN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new LN(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class LN extends mk{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Jr=new zf,this.Yr=null}static Zr(e){return new $f(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vx()?8:gk(ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new MN;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Vi()<=re.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Vi()<=re.DEBUG&&W("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vi()<=re.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):j.resolve())}Yi(e,n){if(gy(n))return j.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=sd(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,sd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return gy(n)||s.isEqual(J.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(Vi()<=re.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.rs(e,o,n,hk(s,-1)).next(l=>l))})}ts(e,n){let r=new Ye(Nw(e));return n.forEach((s,i)=>{Au(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Vi()<=re.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",_s(n)),this.Ji.getDocumentsMatchingQuery(e,n,Tr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ae(ae),this._s=new di(i=>Vf(i),Lf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function FN(t,e,n,r){return new UN(t,e,n,r)}async function Zw(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function BN(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let S=j.resolve();return g.forEach(P=>{S=S.next(()=>f.getEntry(u,P)).next(C=>{const A=c.docVersions.get(P);ce(A!==null),C.version.compareTo(A)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),f.addEntry(C)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function eE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zN(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(p,S),function(C,A,E){return C.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(i,S))});let u=Un(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push($N(i,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function $N(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function WN(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HN(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ud(t,e,n){const r=Z(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ay(t,e,n){const r=Z(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Z(u),g=p._s.get(f);return g!==void 0?j.resolve(p.os.get(g)):p.Ur.getTargetData(c,f)}(r,o,an(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(qN(r,Vk(e),l),{documents:l,Ts:i})))}function qN(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Cy{constructor(){this.activeTargetIds=Bk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KN{constructor(){this.so=new Cy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=null;function Hc(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class XN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Hc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Zs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=QN[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Hc();return new Promise((o,l)=>{const u=new pw;u.setWithCredentials(!0),u.listenOnce(mw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cl.NO_ERROR:const f=u.getResponseJson();W(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case cl.TIMEOUT:W(st,`RPC '${e}' ${i} timed out`),l(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case cl.HTTP_ERROR:const p=u.getStatus();if(W(st,`RPC '${e}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const P=function(A){const E=A.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(S.status);l(new q(P,S.message))}else l(new q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(st,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);W(st,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=Hc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vw(),l=yw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,S=!1;const P=new YN({Io:A=>{S?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(g||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),W(st,`RPC '${e}' stream ${s} sending:`,A),p.send(A))},To:()=>p.close()}),C=(A,E,_)=>{A.listen(E,R=>{try{_(R)}catch(D){setTimeout(()=>{throw D},0)}})};return C(p,$i.EventType.OPEN,()=>{S||(W(st,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),C(p,$i.EventType.CLOSE,()=>{S||(S=!0,W(st,`RPC '${e}' stream ${s} transport closed`),P.So())}),C(p,$i.EventType.ERROR,A=>{S||(S=!0,Zs(st,`RPC '${e}' stream ${s} transport errored:`,A),P.So(new q(M.UNAVAILABLE,"The operation could not be completed")))}),C(p,$i.EventType.MESSAGE,A=>{var E;if(!S){const _=A.data[0];ce(!!_);const R=_,D=R.error||((E=R[0])===null||E===void 0?void 0:E.error);if(D){W(st,`RPC '${e}' stream ${s} received error:`,D);const L=D.status;let U=function(I){const x=Ve[I];if(x!==void 0)return $w(x)}(L),w=D.message;U===void 0&&(U=M.INTERNAL,w="Unknown error status: "+L+" with message "+D.message),S=!0,P.So(new q(U,w)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,_),P.bo(_)}}),C(l,gw.STAT_EVENT,A=>{A.stat===Zh.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Zh.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new aN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new tE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JN extends nE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=cN(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ld(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=rd(u)?{documents:fN(i,u)}:{query:pN(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=qw(i,o.resumeToken);const c=id(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Jl(i,o.snapshotVersion.toTimestamp());const c=id(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=gN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ld(this.serializer),n.removeTarget=e,this.a_(n)}}class ZN extends nE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=dN(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ld(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,od(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,od(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class t1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{fs(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await na(c),c.q_.set("Unknown"),c.L_.delete(4),await bu(c)}(this))})}),this.q_=new t1(r,s)}}async function bu(t){if(fs(t))for(const e of t.B_)await e(!0)}async function na(t){for(const e of t.B_)await e(!1)}function rE(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Gf(n)?Kf(n):fi(n).r_()&&qf(n,e))}function Hf(t,e){const n=Z(t),r=fi(n);n.N_.delete(e),r.r_()&&sE(n,e),n.N_.size===0&&(r.r_()?r.o_():fs(n)&&n.q_.set("Unknown"))}function qf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fi(t).A_(e)}function sE(t,e){t.Q_.xe(e),fi(t).R_(e)}function Kf(t){t.Q_=new rN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fi(t).start(),t.q_.v_()}function Gf(t){return fs(t)&&!fi(t).n_()&&t.N_.size>0}function fs(t){return Z(t).L_.size===0}function iE(t){t.Q_=void 0}async function r1(t){t.q_.set("Online")}async function s1(t){t.N_.forEach((e,n)=>{qf(t,e)})}async function i1(t,e){iE(t),Gf(t)?(t.q_.M_(e),Kf(t)):t.q_.set("Unknown")}async function o1(t,e,n){if(t.q_.set("Online"),e instanceof Hw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof fl?t.Q_.Ke(e):e instanceof Ww?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await eE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(c);f&&i.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(Je.EMPTY_BYTE_STRING,f.snapshotVersion)),sE(i,u);const p=new ar(f.target,u,c,f.sequenceNumber);qf(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!Zo(e))throw e;t.L_.add(1),await na(t),t.q_.set("Offline"),n||(n=()=>eE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bu(t)})}function oE(t,e){return e().catch(n=>Zl(t,n,e))}async function Du(t){const e=Z(t),n=Sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;a1(e);)try{const s=await WN(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,l1(e,s)}catch(s){await Zl(e,s)}aE(e)&&lE(e)}function a1(t){return fs(t)&&t.O_.length<10}function l1(t,e){t.O_.push(e);const n=Sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function aE(t){return fs(t)&&!Sr(t).n_()&&t.O_.length>0}function lE(t){Sr(t).start()}async function u1(t){Sr(t).p_()}async function c1(t){const e=Sr(t);for(const n of t.O_)e.m_(n.mutations)}async function h1(t,e,n){const r=t.O_.shift(),s=Uf.from(r,e,n);await oE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Du(t)}async function d1(t,e){e&&Sr(t).V_&&await async function(r,s){if(function(o){return eN(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Sr(r).s_(),await oE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Du(r)}}(t,e),aE(t)&&lE(t)}async function ky(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=fs(n);n.L_.add(3),await na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bu(n)}async function f1(t,e){const n=Z(t);e?(n.L_.delete(2),await bu(n)):e||(n.L_.add(2),await na(n),n.q_.set("Unknown"))}function fi(t){return t.K_||(t.K_=function(n,r,s){const i=Z(n);return i.w_(),new JN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:r1.bind(null,t),Ro:s1.bind(null,t),mo:i1.bind(null,t),d_:o1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Gf(t)?Kf(t):t.q_.set("Unknown")):(await t.K_.stop(),iE(t))})),t.K_}function Sr(t){return t.U_||(t.U_=function(n,r,s){const i=Z(n);return i.w_(),new ZN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:u1.bind(null,t),mo:d1.bind(null,t),f_:c1.bind(null,t),g_:h1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Du(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Qf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yf(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Zo(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Wi(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.W_=new Ae(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new si(e,n,Ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class m1{constructor(){this.queries=by(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=by(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function by(){return new di(t=>kw(t),xu)}async function uE(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new p1,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Yf(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xf(n)}async function cE(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function g1(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Xf(n)}function y1(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xf(t){t.Y_.forEach(e=>{e.next()})}var cd,Dy;(Dy=cd||(cd={})).ea="default",Dy.Cache="cache";class hE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.key=e}}class fE{constructor(e){this.key=e}}class v1{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Nw(e),this.Ra=new Ws(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ny,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),S=Au(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),C=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let A=!1;g&&S?g.data.isEqual(S.data)?P!==C&&(r.track({type:3,doc:S}),A=!0):this.ga(g,S)||(r.track({type:2,doc:S}),A=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),A=!0):g&&!S&&(r.track({type:1,doc:g}),A=!0,(u||c)&&(l=!0)),A&&(S?(o=o.add(S),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,P){const C=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return C(S)-C(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new si(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ny,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new fE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new dE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w1{constructor(e){this.key=e,this.va=!1}}class E1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new di(l=>kw(l),xu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(Q.comparator),this.Na=new Map,this.La=new zf,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function T1(t,e,n=!0){const r=_E(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await pE(r,e,n,!0),s}async function I1(t,e){const n=_E(t);await pE(n,e,!0,!1)}async function pE(t,e,n,r){const s=await HN(t.localStore,an(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await S1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&rE(t.remoteStore,s),l}async function S1(t,e,n,r,s){t.Ka=(p,g,S)=>async function(C,A,E,_){let R=A.view.ma(E);R.ns&&(R=await Ay(C.localStore,A.query,!1).then(({documents:w})=>A.view.ma(w,R)));const D=_&&_.targetChanges.get(A.targetId),L=_&&_.targetMismatches.get(A.targetId)!=null,U=A.view.applyChanges(R,C.isPrimaryClient,D,L);return Vy(C,A.targetId,U.wa),U.snapshot}(t,p,g,S);const i=await Ay(t.localStore,e,!0),o=new v1(e,i.Ts),l=o.ma(i.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Vy(t,n,c.wa);const f=new _1(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function R1(t,e,n){const r=Z(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!xu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ud(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hf(r.remoteStore,s.targetId),hd(r,s.targetId)}).catch(Jo)):(hd(r,s.targetId),await ud(r.localStore,s.targetId,!0))}async function x1(t,e){const n=Z(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hf(n.remoteStore,r.targetId))}async function A1(t,e,n){const r=O1(t);try{const s=await function(o,l){const u=Z(o),c=Be.now(),f=l.reduce((S,P)=>S.add(P.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Un(),C=ne();return u.cs.getEntries(S,f).next(A=>{P=A,P.forEach((E,_)=>{_.isValidDocument()||(C=C.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(A=>{p=A;const E=[];for(const _ of l){const R=Qk(_,p.get(_.key).overlayedDocument);R!=null&&E.push(new Cr(_.key,R,Iw(R.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,E,l)}).next(A=>{g=A;const E=A.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(S,A.batchId,E)})}).then(()=>({batchId:g.batchId,changes:Dw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ae)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await ra(r,s.changes),await Du(r.remoteStore)}catch(s){const i=Yf(s,"Failed to persist write");n.reject(i)}}async function mE(t,e){const n=Z(t);try{const r=await zN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ce(o.va):s.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await ra(n,r,e)}catch(r){await Jo(r)}}function Oy(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&Xf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function C1(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ae(Q.comparator);o=o.insert(i,at.newNoDocument(i,J.min()));const l=ne().add(i),u=new ku(J.min(),new Map,new Ae(ae),o,l);await mE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Jf(r)}else await ud(r.localStore,e,!1).then(()=>hd(r,e,n)).catch(Jo)}async function P1(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await BN(n.localStore,e);yE(n,r,null),gE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,s)}catch(s){await Jo(s)}}async function k1(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ce(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);yE(r,e,n),gE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,s)}catch(s){await Jo(s)}}function gE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function yE(t,e,n){const r=Z(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||vE(t,r)})}function vE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Hf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jf(t))}function Vy(t,e,n){for(const r of n)r instanceof dE?(t.La.addReference(r.key,e),N1(t,r)):r instanceof fE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vE(t,r.key)):X()}function N1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jf(t))}function Jf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(we.fromString(e)),r=t.qa.next();t.Na.set(r,new w1(n)),t.Oa=t.Oa.insert(n,r),rE(t.remoteStore,new ar(an(Mf(n.path)),r,"TargetPurposeLimboResolution",Nf.oe))}}async function ra(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=Wf.Wi(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,g=>j.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>j.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!Zo(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const S=f.os.get(g),P=S.snapshotVersion,C=S.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,C)}}}(r.localStore,i))}async function b1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Zw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.hs)}}function D1(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function _E(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C1.bind(null,e),e.Ca.d_=g1.bind(null,e.eventManager),e.Ca.$a=y1.bind(null,e.eventManager),e}function O1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k1.bind(null,e),e}class eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return FN(this.persistence,new jN,e.initialUser,this.serializer)}Ga(e){return new VN($f.Zr,this.serializer)}Wa(e){return new KN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eu.provider={build:()=>new eu};class dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Oy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b1.bind(null,this.syncEngine),await f1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m1}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(i){return new XN(i)}(e.databaseInfo);return function(i,o,l,u){return new e1(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new n1(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Oy(this.syncEngine,n,0),function(){return Py.D()?new Py:new GN}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new E1(s,i,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);W("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await na(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dd.provider={build:()=>new dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=ww.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ly(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L1(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ky(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ky(e.remoteStore,s)),t._onlineComponents=e}async function L1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new eu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new eu);return t._offlineComponents}async function EE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Ly(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Ly(t,new dd))),t._onlineComponents}function M1(t){return EE(t).then(e=>e.syncEngine)}async function TE(t){const e=await EE(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=R1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=I1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=x1.bind(null,e.syncEngine),n}function j1(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new wE({next:g=>{f.Za(),o.enqueueAndForget(()=>cE(i,p));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new hE(Mf(l.path),f,{includeMetadataChanges:!0,_a:!0});return uE(i,p)}(await TE(t),t.asyncQueue,e,n,r)),r.promise}function U1(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new wE({next:g=>{f.Za(),o.enqueueAndForget(()=>cE(i,p)),g.fromCache&&u.source==="server"?c.reject(new q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new hE(l,f,{includeMetadataChanges:!0,_a:!0});return uE(i,p)}(await TE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F1(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jy(t){if(!Q.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uy(t){if(Q.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zf(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nk;switch(r.type){case"firstParty":return new ok(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=My.get(n);r&&(W("ComponentProvider","Removing Datastore"),My.delete(n),r.terminate())}(this),Promise.resolve()}}function B1(t,e,n,r={}){var s;const i=(t=Fn(t,Ou))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=A0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(c)}t._authCredentials=new rk(new _w(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vu(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class vr extends Vu{constructor(e,n,r){super(e,n,Mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new Q(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function z1(t,e,...n){if(t=Ee(t),SE("collection","path",e),t instanceof Ou){const r=we.fromString(e,...n);return Uy(r),new vr(t,null,r)}{if(!(t instanceof It||t instanceof vr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Uy(r),new vr(t.firestore,null,r)}}function Pr(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=ww.newId()),SE("doc","path",e),t instanceof Ou){const r=we.fromString(e,...n);return jy(r),new It(t,null,new Q(r))}{if(!(t instanceof It||t instanceof vr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return jy(r),new It(t.firestore,t instanceof vr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new tE(this,"async_queue_retry"),this.Vu=()=>{const r=qc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Qf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class sa extends Ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new By,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new By(e),this._firestoreClient=void 0,await e}}}function $1(t,e){const n=typeof t=="object"?t:gf(),r=typeof t=="string"?t:"(default)",s=wu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=S0("firestore");i&&B1(s,...i)}return s}function ep(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||W1(t),t._firestoreClient}function W1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,c,f){return new _k(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,IE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new V1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(Je.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=/^__.*__$/;class q1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class RE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class rp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return tu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xE(this.Cu)&&H1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class K1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Qu(e,n,r,s=!1){return new rp({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AE(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new K1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function G1(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ip("Data must be an object, but it was:",o,r);const l=CE(r,o);let u,c;if(i.merge)u=new At(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=fd(e,p,n);if(!o.contains(g))throw new q(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);kE(f,g)||f.push(g)}u=new At(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new q1(new vt(l),u,c)}class ju extends Mu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}class sp extends Mu{_toFieldTransform(e){return new Hk(e.path,new Lo)}isEqual(e){return e instanceof sp}}function Q1(t,e,n,r){const s=t.Qu(1,e,n);ip("Data must be an object, but it was:",s,r);const i=[],o=vt.empty();ds(r,(u,c)=>{const f=op(e,u,n);c=Ee(c);const p=s.Nu(f);if(c instanceof ju)i.push(f);else{const g=Uu(c,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new At(i);return new RE(o,l,s.fieldTransforms)}function Y1(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[fd(e,r,n)],u=[s];if(i.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(fd(e,i[g])),u.push(i[g+1]);const c=[],f=vt.empty();for(let g=l.length-1;g>=0;--g)if(!kE(c,l[g])){const S=l[g];let P=u[g];P=Ee(P);const C=o.Nu(S);if(P instanceof ju)c.push(S);else{const A=Uu(P,C);A!=null&&(c.push(S),f.set(S,A))}}const p=new At(c);return new RE(f,p,o.fieldTransforms)}function Uu(t,e){if(PE(t=Ee(t)))return ip("Unsupported field value:",e,t),CE(t,e);if(t instanceof Mu)return function(r,s){if(!xE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Uu(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Jl(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(s.serializer,i)}}if(r instanceof tp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:qw(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof np)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return jf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Zf(r)}`)}(t,e)}function CE(t,e){const n={};return Ew(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=Uu(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof tp||t instanceof ii||t instanceof It||t instanceof Mu||t instanceof np)}function ip(t,e,n){if(!PE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Zf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fd(t,e,n){if((e=Ee(e))instanceof Lu)return e._internalPath;if(typeof e=="string")return op(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const X1=new RegExp("[~\\*/\\[\\]]");function op(t,e,n){if(e.search(X1)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lu(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function kE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J1 extends NE{data(){return super.data()}}function bE(t,e){return typeof e=="string"?op(t,e):e instanceof Lu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eb{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>De(o.doubleValue));return new np(i)}convertGeoPoint(e){return new tp(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);ce(Jw(r));const s=new Oo(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DE extends NE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pl extends DE{data(e={}){return super.data(e)}}class nb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new pl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new pl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:rb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t){t=Fn(t,It);const e=Fn(t.firestore,sa);return j1(ep(e),t._key).then(n=>ib(e,t,n))}class VE extends eb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function sb(t){t=Fn(t,Vu);const e=Fn(t.firestore,sa),n=ep(e),r=new VE(e);return Z1(t._query),U1(n,t._query).then(s=>new nb(e,r,t,s))}function Fu(t,e,n){t=Fn(t,It);const r=Fn(t.firestore,sa),s=tb(t.converter,e,n);return ME(r,[G1(AE(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function LE(t,e,n,...r){t=Fn(t,It);const s=Fn(t.firestore,sa),i=AE(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof Lu?Y1(i,"updateDoc",t._key,e,n,r):Q1(i,"updateDoc",t._key,e),ME(s,[o.toMutation(t._key,ln.exists(!0))])}function ME(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>A1(await M1(r),s,i)),i.promise}(ep(t),e)}function ib(t,e,n){const r=n.docs.get(e._key),s=new VE(t);return new DE(t,s,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}function ia(){return new sp("serverTimestamp")}(function(e,n=!0){(function(s){hi=s})(hs),es(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new sa(new sk(r.getProvider("auth-internal")),new lk(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(c.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rn(oy,"4.7.3",e),rn(oy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firebasestorage.googleapis.com",UE="storageBucket",ob=2*60*1e3,ab=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends fn{constructor(e,n,r=0){super(Gc(e),`Firebase Storage: ${n} (${Gc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Gc(t){return"storage/"+t}function ap(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(ke.UNKNOWN,t)}function lb(t){return new Ne(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ub(t){return new Ne(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(ke.UNAUTHENTICATED,t)}function hb(){return new Ne(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function db(t){return new Ne(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fb(){return new Ne(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pb(){return new Ne(ke.CANCELED,"User canceled the upload/download.")}function mb(t){return new Ne(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function gb(t){return new Ne(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yb(){return new Ne(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+UE+"' property when initializing the app?")}function vb(){return new Ne(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _b(){return new Ne(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wb(t){return new Ne(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pd(t){return new Ne(ke.INVALID_ARGUMENT,t)}function FE(){return new Ne(ke.APP_DELETED,"The Firebase app was deleted.")}function Eb(t){return new Ne(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ao(t,e){return new Ne(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Li(t){throw new Ne(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw gb(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},C=n===jE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",E=new RegExp(`^https?://${C}/${s}/${A}`,"i"),R=[{regex:l,indices:u,postModify:i},{regex:S,indices:P,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<R.length;D++){const L=R[D],U=L.regex.exec(e);if(U){const w=U[L.indices.bucket];let v=U[L.indices.path];v||(v=""),r=new Ct(w,v),L.postModify(r);break}}if(r==null)throw mb(e);return r}}class Tb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...A){c||(c=!0,e.apply(null,A))}function p(A){s=setTimeout(()=>{s=null,t(S,u())},A)}function g(){i&&clearTimeout(i)}function S(A,...E){if(c){g();return}if(A){g(),f.call(null,A,...E);return}if(u()||o){g(),f.call(null,A,...E);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let P=!1;function C(A){P||(P=!0,g(),!c&&(s!==null?(A||(l=2),clearTimeout(s),p(0)):A||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function Sb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){return t!==void 0}function xb(t){return typeof t=="object"&&!Array.isArray(t)}function lp(t){return typeof t=="string"||t instanceof String}function zy(t){return up()&&t instanceof Blob}function up(){return typeof Blob<"u"}function $y(t,e,n,r){if(r<e)throw pd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function BE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,r,s,i,o,l,u,c,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,P)=>{this.resolve_=S,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new qa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Gr.NO_ERROR,u=i.getStatus();if(!l||Ab(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Gr.ABORT;r(!1,new qa(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new qa(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Rb(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=ap();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?FE():pb();o(u)}else{const u=fb();o(u)}};this.canceled_?n(!1,new qa(!1,null,!0)):this.backoffId_=Ib(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Pb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Db(t,e,n,r,s,i,o=!0){const l=BE(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return Nb(c,e),Pb(c,n),kb(c,i),bb(c,r),new Cb(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Vb(...t){const e=Ob();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(up())return new Blob(t);throw new Ne(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){if(typeof atob>"u")throw wb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qc{constructor(e,n){this.data=e,this.contentType=n||null}}function jb(t,e){switch(t){case en.RAW:return new Qc(zE(e));case en.BASE64:case en.BASE64URL:return new Qc($E(t,e));case en.DATA_URL:return new Qc(Fb(e),Bb(e))}throw ap()}function zE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ub(t){let e;try{e=decodeURIComponent(t)}catch{throw ao(en.DATA_URL,"Malformed data URL.")}return zE(e)}function $E(t,e){switch(t){case en.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ao(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ao(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Mb(e)}catch(s){throw s.message.includes("polyfill")?s:ao(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class WE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ao(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Fb(t){const e=new WE(t);return e.base64?$E(en.BASE64,e.rest):Ub(e.rest)}function Bb(t){return new WE(t).contentType}function zb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){let r=0,s="";zy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(zy(this.data_)){const r=this.data_,s=Lb(r,e,n);return s===null?null:new rr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(up()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(Vb.apply(null,n))}else{const n=e.map(o=>lp(o)?jb(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new rr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){let e;try{e=JSON.parse(t)}catch{return null}return xb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Wb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function qE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t,e){return e}class dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Hb}}let Ka=null;function qb(t){return!lp(t)||t.length<2?t:qE(t)}function KE(){if(Ka)return Ka;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(i,o){return qb(o)}const n=new dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new dt("size");return s.xform=r,t.push(s),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),Ka=t,Ka}function Kb(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ct(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Gb(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Kb(r,t),r}function GE(t,e,n){const r=HE(e);return r===null?null:Gb(t,r,n)}function Qb(t,e,n,r){const s=HE(e);if(s===null||!lp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),S=cp(g,n,r),P=BE({alt:"media",token:c});return S+P})[0]}function Yb(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class QE{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){if(!t)throw ap()}function Xb(t,e){function n(r,s){const i=GE(t,s,e);return YE(i!==null),i}return n}function Jb(t,e){function n(r,s){const i=GE(t,s,e);return YE(i!==null),Qb(i,s,t.host,t._protocol)}return n}function XE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=hb():s=cb():n.getStatus()===402?s=ub(t.bucket):n.getStatus()===403?s=db(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Zb(t){const e=XE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=lb(t.path)),i.serverResponse=s.serverResponse,i}return n}function eD(t,e,n){const r=e.fullServerUrl(),s=cp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new QE(s,i,Jb(t,n),o);return l.errorHandler=Zb(e),l}function tD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tD(null,e)),r}function rD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let R="";for(let D=0;D<2;D++)R=R+Math.random().toString().slice(2);return R}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=nD(e,r,s),f=Yb(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",S=rr.getBlob(p,r,g);if(S===null)throw vb();const P={name:c.fullPath},C=cp(i,t.host,t._protocol),A="POST",E=t.maxUploadRetryTime,_=new QE(C,A,Xb(t,n),E);return _.urlParams=P,_.headers=o,_.body=S.uploadData(),_.errorHandler=XE(e),_}class sD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iD extends sD{initXhr(){this.xhr_.responseType="text"}}function JE(){return new iD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qE(this._location.path)}get storage(){return this._service}get parent(){const e=$b(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Eb(e)}}function oD(t,e,n){t._throwIfRoot("uploadBytes");const r=rD(t.storage,t._location,KE(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,JE).then(s=>({metadata:s,ref:t}))}function aD(t){t._throwIfRoot("getDownloadURL");const e=eD(t.storage,t._location,KE());return t.storage.makeRequestWithTokens(e,JE).then(n=>{if(n===null)throw _b();return n})}function lD(t,e){const n=Wb(t._location.path,e),r=new Ct(t._location.bucket,n);return new os(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){return/^[A-Za-z]+:\/\//.test(t)}function cD(t,e){return new os(t,e)}function ZE(t,e){if(t instanceof hp){const n=t;if(n._bucket==null)throw yb();const r=new os(n,n._bucket);return e!=null?ZE(r,e):r}else return e!==void 0?lD(t,e):t}function hD(t,e){if(e&&uD(e)){if(t instanceof hp)return cD(t,e);throw pd("To use ref(service, url), the first argument must be a Storage instance.")}else return ZE(t,e)}function Wy(t,e){const n=e==null?void 0:e[UE];return n==null?null:Ct.makeFromBucketSpec(n,t)}function dD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:A0(s,t.app.options.projectId))}class hp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=jE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ob,this._maxUploadRetryTime=ab,this._requests=new Set,s!=null?this._bucket=Ct.makeFromBucketSpec(s,this._host):this._bucket=Wy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=Wy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Tb(FE());{const o=Db(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Hy="@firebase/storage",qy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="storage";function fD(t,e,n){return t=Ee(t),oD(t,e,n)}function pD(t){return t=Ee(t),aD(t)}function mD(t,e){return t=Ee(t),hD(t,e)}function gD(t=gf(),e){t=Ee(t);const r=wu(t,eT).getImmediate({identifier:e}),s=S0("storage");return s&&yD(r,...s),r}function yD(t,e,n,r={}){dD(t,e,n,r)}function vD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new hp(n,r,s,e,hs)}function _D(){es(new Er(eT,vD,"PUBLIC").setMultipleInstances(!0)),rn(Hy,qy,""),rn(Hy,qy,"esm2017")}_D();const wD={apiKey:"AIzaSyBrGwF9ep-WteUHbfHV3eW9ECV_Hald7YE",authDomain:"fwcproject-79127.firebaseapp.com",databaseURL:"https://fwcproject-79127-default-rtdb.firebaseio.com",projectId:"fwcproject-79127",storageBucket:"fwcproject-79127.firebasestorage.app",messagingSenderId:"940975054607",appId:"1:940975054607:web:35fc50f24ebe80609aa87a",measurementId:"G-VX48M2WZT5"},dp=k0(wD),Vr=JP(dp),$n=$1(dp),ED=gD(dp),tT=V.createContext();function TD({children:t}){const[e,n]=V.useState(null),[r,s]=V.useState(!0);V.useEffect(()=>FC(Vr,g=>{n(g),s(!1)}),[]);const i=(p,g)=>LC(Vr,p,g),o=(p,g)=>MC(Vr,p,g),l=()=>BC(Vr),u=p=>bC(Vr,p),c=p=>VC(Vr,p),f=(p,g)=>DC(Vr,p,g);return m.jsx(tT.Provider,{value:{user:e,loading:r,signup:i,signin:o,logout:l,sendResetEmail:u,verifyResetCode:c,resetPassword:f},children:t})}const kr=()=>V.useContext(tT);function Lr({children:t}){const{user:e,loading:n}=kr();return n?m.jsx("div",{className:"min-h-screen flex items-center justify-center text-stone-500",children:"Loading..."}):e?t:m.jsx(_0,{to:"/",replace:!0})}const ge=({label:t,error:e,className:n="",...r})=>m.jsxs("div",{className:"flex flex-col gap-1",children:[t&&m.jsx("label",{className:"text-sm font-semibold text-stone-700 tracking-wide uppercase text-xs",children:t}),m.jsx("input",{className:`w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white
        focus:outline-none focus:border-amber-500 transition-all placeholder-stone-300
        text-stone-800 font-medium ${e?"border-red-400":""} ${n}`,...r}),e&&m.jsx("span",{className:"text-xs text-red-500",children:e})]}),ye=({children:t,variant:e="primary",className:n="",loading:r=!1,...s})=>{const i="px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50",o={primary:"bg-stone-900 text-white hover:bg-stone-700 active:scale-95",secondary:"bg-white text-stone-900 border-2 border-stone-200 hover:border-stone-400",danger:"bg-red-600 text-white hover:bg-red-700",success:"bg-emerald-600 text-white hover:bg-emerald-700",amber:"bg-amber-500 text-white hover:bg-amber-600"};return m.jsxs("button",{className:`${i} ${o[e]} ${n}`,disabled:r||s.disabled,...s,children:[r&&m.jsxs("svg",{className:"animate-spin h-4 w-4",viewBox:"0 0 24 24",fill:"none",children:[m.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),m.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]}),t]})},dn=({children:t,className:e=""})=>m.jsx("div",{className:`bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden ${e}`,children:t}),nT=({steps:t,current:e})=>m.jsx("div",{className:"flex items-center justify-center gap-0 mb-8",children:t.map((n,r)=>m.jsxs(_d.Fragment,{children:[m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx("div",{className:`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
              ${r<e?"bg-emerald-500 text-white":r===e?"bg-stone-900 text-white ring-4 ring-stone-200":"bg-stone-100 text-stone-400"}`,children:r<e?"✓":r+1}),m.jsx("span",{className:`text-xs mt-1 font-semibold transition-all ${r===e?"text-stone-900":"text-stone-400"}`,children:n})]}),r<t.length-1&&m.jsx("div",{className:`h-0.5 w-12 mb-4 transition-all duration-500 ${r<e?"bg-emerald-400":"bg-stone-200"}`})]},r))}),lo=({label:t,accept:e,onChange:n,fileName:r})=>m.jsxs("div",{className:"flex flex-col gap-1",children:[t&&m.jsx("label",{className:"text-xs font-semibold text-stone-700 uppercase tracking-wide",children:t}),m.jsxs("label",{className:"cursor-pointer group",children:[m.jsx("div",{className:`border-2 border-dashed border-stone-200 rounded-xl p-4 text-center 
        group-hover:border-amber-400 transition-all bg-stone-50`,children:r?m.jsxs("span",{className:"text-sm text-emerald-600 font-semibold",children:["✓ ",r]}):m.jsxs("span",{className:"text-sm text-stone-400",children:["📁 Click to upload ",m.jsx("span",{className:"text-amber-500 font-bold",children:"file"})]})}),m.jsx("input",{type:"file",accept:e,onChange:n,className:"hidden"})]})]}),Pt=({type:t="info",children:e})=>{const n={info:"bg-blue-50 border-blue-200 text-blue-800",success:"bg-emerald-50 border-emerald-200 text-emerald-800",error:"bg-red-50 border-red-200 text-red-800",warning:"bg-amber-50 border-amber-200 text-amber-800"};return m.jsx("div",{className:`rounded-xl border px-4 py-3 text-sm font-medium ${n[t]}`,children:e})};function ID(){const{signup:t,signin:e,sendResetEmail:n,verifyResetCode:r,resetPassword:s}=kr(),i=cs(),[o,l]=V.useState("signin"),[u,c]=V.useState(""),[f,p]=V.useState(""),[g,S]=V.useState(""),[P,C]=V.useState(""),[A,E]=V.useState(""),[_,R]=V.useState(!1),[D,L]=V.useState(""),[U,w]=V.useState(""),v=K=>{l(K),L(""),w("")},I=K=>{const le=K.trim();if(!le)return"";try{if(le.startsWith("http"))return new URL(le).searchParams.get("oobCode")||""}catch{return le}return le},x=async K=>{K.preventDefault(),w(""),L(""),R(!0);try{await e(u,f),i("/home")}catch(le){w(le.message.replace("Firebase: ",""))}finally{R(!1)}},k=async K=>{if(K.preventDefault(),!u||!f||!g){w("Email, password, and mobile number are required.");return}if(g.replace(/\D/g,"").length<10){w("Enter a valid 10-digit mobile number.");return}w(""),L(""),R(!0);try{await t(u,f),i("/profile")}catch(le){w(le.message.replace("Firebase: ",""))}finally{R(!1)}},N=async()=>{if(!u){w("Enter your email address first.");return}w(""),L(""),R(!0);try{await n(u),L("Reset link/code sent to your email. Paste the code or full link below.")}catch(K){w(K.message.replace("Firebase: ",""))}finally{R(!1)}},T=async K=>{K.preventDefault();const le=I(P);if(!le||!A){w("Enter reset code/link and new password.");return}w(""),L(""),R(!0);try{await r(le),await s(le,A),L("Password updated successfully. Please sign in."),C(""),E(""),p(""),l("signin")}catch(Te){w(Te.message.replace("Firebase: ",""))}finally{R(!1)}};return m.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex items-center justify-center p-4",children:[m.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[m.jsx("div",{className:"absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-100 opacity-60 blur-3xl"}),m.jsx("div",{className:"absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-stone-200 opacity-60 blur-3xl"})]}),m.jsxs("div",{className:"relative w-full max-w-md",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-stone-900 rounded-2xl mb-4 shadow-xl",children:m.jsx("span",{className:"text-2xl font-black text-amber-200",children:"TN"})}),m.jsx("h1",{className:"text-3xl font-black text-stone-900 tracking-tight",style:{fontFamily:"'Georgia', serif"},children:"TN Land Registry"}),m.jsx("p",{className:"text-stone-500 mt-1 font-medium",children:"Tamil Nadu Property Registration Portal"})]}),m.jsx(dn,{children:m.jsxs("div",{className:"p-8",children:[U&&m.jsx(Pt,{type:"error",children:U}),D&&m.jsx(Pt,{type:"success",children:D}),o==="signin"&&m.jsxs("form",{onSubmit:x,className:"flex flex-col gap-4 mt-4",children:[m.jsx(ge,{label:"Email Address",type:"email",placeholder:"you@example.com",value:u,onChange:K=>c(K.target.value),required:!0}),m.jsx(ge,{label:"Password",type:"password",placeholder:"Enter password",value:f,onChange:K=>p(K.target.value),required:!0}),m.jsx(ye,{type:"submit",loading:_,className:"mt-2 w-full",children:"Sign In"}),m.jsx("button",{type:"button",className:"text-sm text-stone-700 underline",onClick:()=>v("forgot"),children:"Forgot password?"}),m.jsxs("p",{className:"text-center text-sm text-stone-500",children:["New user?"," ",m.jsx("button",{type:"button",className:"font-semibold text-stone-900 underline",onClick:()=>v("signup"),children:"Sign Up"})]})]}),o==="signup"&&m.jsxs("form",{onSubmit:k,className:"flex flex-col gap-4 mt-4",children:[m.jsx(ge,{label:"Email Address",type:"email",placeholder:"you@example.com",value:u,onChange:K=>c(K.target.value),required:!0}),m.jsx(ge,{label:"Password",type:"password",placeholder:"Create password",value:f,onChange:K=>p(K.target.value),required:!0}),m.jsx(ge,{label:"Mobile Number",type:"tel",placeholder:"9876543210",value:g,onChange:K=>S(K.target.value),required:!0}),m.jsx(ye,{type:"submit",loading:_,className:"w-full",children:"Create Account"}),m.jsx("button",{type:"button",className:"text-sm text-stone-700 underline",onClick:()=>v("forgot"),children:"Forgot password?"}),m.jsxs("p",{className:"text-center text-sm text-stone-500",children:["Already have an account?"," ",m.jsx("button",{type:"button",className:"font-semibold text-stone-900 underline",onClick:()=>v("signin"),children:"Sign In"})]})]}),o==="forgot"&&m.jsxs("form",{onSubmit:T,className:"flex flex-col gap-4 mt-4",children:[m.jsx(ge,{label:"Email Address",type:"email",placeholder:"you@example.com",value:u,onChange:K=>c(K.target.value),required:!0}),m.jsx(ye,{type:"button",loading:_,onClick:N,className:"w-full",children:"Send Reset Code"}),m.jsx(ge,{label:"Reset Code or Link",type:"text",placeholder:"Paste code or full link from email",value:P,onChange:K=>C(K.target.value),required:!0}),m.jsx(ge,{label:"New Password",type:"password",placeholder:"Enter new password",value:A,onChange:K=>E(K.target.value),required:!0}),m.jsx(ye,{type:"submit",loading:_,className:"w-full",children:"Update Password"}),m.jsxs("p",{className:"text-center text-sm text-stone-500",children:["Remembered password?"," ",m.jsx("button",{type:"button",className:"font-semibold text-stone-900 underline",onClick:()=>v("signin"),children:"Back to Sign In"})]})]})]})}),m.jsx("p",{className:"text-center text-stone-400 text-xs mt-6",children:"Secured by Firebase Authentication"})]})]})}const SD=async(t,e)=>{await Fu(Pr($n,"profiles",t),{...e,updatedAt:ia()},{merge:!0})},RD=async(t,e)=>{await Fu(Pr($n,"buyers",t),{...e,updatedAt:ia()},{merge:!0})},xD=async t=>{const e=await OE(Pr($n,"buyers",t));return e.exists()?e.data():null},AD=async(t,e)=>{await Fu(Pr($n,"sellers",t),{...e,updatedAt:ia()},{merge:!0})},CD=async t=>{const e=await OE(Pr($n,"sellers",t));return e.exists()?e.data():null},Hs=async(t,e)=>{const n=mD(ED,t);return await fD(n,e),pD(n)},rT=async(t,e,n)=>{await LE(Pr($n,t,e),{verified:n,verifiedAt:ia()})},PD=async(t,e)=>{await Fu(Pr($n,"sellers",t),{videoConsent:e},{merge:!0})},Ky=async(t,e,n)=>{await LE(Pr($n,"sellers",t),{approvalStatus:e,reviewedBy:n,reviewedAt:ia()})};function kD(){const{user:t}=kr(),e=cs(),[n,r]=V.useState({name:"",email:(t==null?void 0:t.email)||"",mobile:(t==null?void 0:t.phoneNumber)||"",dob:"",address:""}),[s,i]=V.useState(!1),[o,l]=V.useState(!1),[u,c]=V.useState(""),f=S=>P=>r(C=>({...C,[S]:P.target.value})),p=(S,P=15e3)=>Promise.race([S,new Promise((C,A)=>setTimeout(()=>A(new Error("Request timeout. Check internet and try again.")),P))]),g=async()=>{if(c(""),l(!1),!(t!=null&&t.uid)){c("Session expired. Please sign in again.");return}if(!n.name||!n.email||!n.mobile||!n.dob||!n.address){c("Please fill all fields.");return}i(!0);try{await p(SD(t.uid,{...n,uid:t.uid})),l(!0)}catch(S){const P=(S==null?void 0:S.message)||"";P.includes("permission")?c("Permission denied. Check Firestore rules for signed-in users."):P.includes("network")||P.includes("timeout")?c("Network issue. Please check internet and try again."):c(P)}finally{i(!1)}};return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4",children:m.jsxs("div",{className:"w-full max-w-lg",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("span",{className:"text-4xl",children:"👤"}),m.jsx("h1",{className:"text-2xl font-black text-stone-900 mt-2",style:{fontFamily:"Georgia, serif"},children:"Create Your Profile"}),m.jsx("p",{className:"text-stone-500 mt-1",children:"Let's get to know you before we begin"})]}),m.jsx(dn,{children:m.jsx("div",{className:"p-8",children:o?m.jsxs("div",{className:"text-center py-4",children:[m.jsx("div",{className:"text-5xl mb-4",children:"✅"}),m.jsx("h2",{className:"text-xl font-black text-stone-900 mb-2",children:"Profile Saved!"}),m.jsx("p",{className:"text-stone-500 mb-6",children:"You're ready to start your registration"}),m.jsx(ye,{onClick:()=>e("/registration-type"),className:"w-full",children:"Start New Registration →"})]}):m.jsxs("div",{className:"flex flex-col gap-4",children:[u&&m.jsx(Pt,{type:"error",children:u}),m.jsx(ge,{label:"Full Name",placeholder:"Arjun Subramaniam",value:n.name,onChange:f("name")}),m.jsx(ge,{label:"Email Address",type:"email",placeholder:"arjun@example.com",value:n.email,onChange:f("email")}),m.jsx(ge,{label:"Mobile Number",type:"tel",placeholder:"+91 98765 43210",value:n.mobile,onChange:f("mobile")}),m.jsx(ge,{label:"Date of Birth",type:"date",value:n.dob,onChange:f("dob")}),m.jsxs("div",{className:"flex flex-col gap-1",children:[m.jsx("label",{className:"text-xs font-semibold text-stone-700 uppercase tracking-wide",children:"Address"}),m.jsx("textarea",{className:"w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white focus:outline-none focus:border-amber-500 transition-all text-stone-800 font-medium resize-none",rows:3,placeholder:"No. 12, Anna Nagar, Chennai - 600040",value:n.address,onChange:f("address")})]}),m.jsx(ye,{loading:s,onClick:g,className:"w-full mt-2",children:"Save Profile →"})]})})})]})})}function ND(){const t=cs();return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4",children:m.jsxs("div",{className:"w-full max-w-2xl",children:[m.jsxs("div",{className:"text-center mb-10",children:[m.jsx("span",{className:"text-4xl",children:"🏠"}),m.jsx("h1",{className:"text-3xl font-black text-stone-900 mt-3",style:{fontFamily:"Georgia, serif"},children:"New Registration"}),m.jsx("p",{className:"text-stone-500 mt-2 font-medium",children:"Tell us your role in this property transaction"})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[m.jsx("button",{onClick:()=>t("/buyer"),className:"group text-left",children:m.jsxs(dn,{className:"p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-amber-300 cursor-pointer",children:[m.jsx("div",{className:"text-5xl mb-4",children:"🛒"}),m.jsx("h2",{className:"text-xl font-black text-stone-900 mb-2",children:"I am a Buyer"}),m.jsx("p",{className:"text-stone-500 text-sm leading-relaxed",children:"Looking to purchase land or property. You'll submit personal details, property interest, and supporting documents."}),m.jsx("div",{className:"mt-6 inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold group-hover:bg-amber-500 transition-all",children:"Continue as Buyer →"})]})}),m.jsx("button",{onClick:()=>t("/seller"),className:"group text-left",children:m.jsxs(dn,{className:"p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-amber-300 cursor-pointer",children:[m.jsx("div",{className:"text-5xl mb-4",children:"🏡"}),m.jsx("h2",{className:"text-xl font-black text-stone-900 mb-2",children:"I am a Seller"}),m.jsx("p",{className:"text-stone-500 text-sm leading-relaxed",children:"Looking to sell your property. You'll submit ownership docs, land details, and a video consent statement."}),m.jsx("div",{className:"mt-6 inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold group-hover:bg-amber-500 transition-all",children:"Continue as Seller →"})]})})]})]})})}const bD=["Personal","Property","Documents"];function DD(){const{user:t}=kr(),e=cs(),[n,r]=V.useState(0),[s,i]=V.useState(!1),[o,l]=V.useState(""),[u,c]=V.useState(!1),[f,p]=V.useState(null),[g,S]=V.useState({name:"",email:"",mobile:"",dob:"",address:""}),[P,C]=V.useState({surveyNumber:"",location:"",size:""}),[A,E]=V.useState({idProof:null,addressProof:null,propertyDocs:null}),[_,R]=V.useState({idProof:"",addressProof:"",propertyDocs:""}),D=k=>N=>S(T=>({...T,[k]:N.target.value})),L=k=>N=>C(T=>({...T,[k]:N.target.value})),U=k=>N=>{const T=N.target.files[0];T&&(E(K=>({...K,[k]:T})),R(K=>({...K,[k]:T.name})))},w=()=>n===0&&(!g.name||!g.email||!g.mobile||!g.dob||!g.address)?"Please fill all personal details.":n===1&&(!P.surveyNumber||!P.location||!P.size)?"Please fill all property details.":"",v=()=>{const k=w();if(k){l(k);return}l(""),r(N=>N+1)},I=async k=>new Promise(N=>{setTimeout(()=>{N(k.toUpperCase().startsWith("TN"))},2e3)}),x=async()=>{if(!A.idProof||!A.addressProof||!A.propertyDocs){l("Please upload all required documents.");return}l(""),i(!0);try{const k=t.uid,[N,T,K]=await Promise.all([Hs(`buyers/${k}/id_proof`,A.idProof),Hs(`buyers/${k}/address_proof`,A.addressProof),Hs(`buyers/${k}/property_docs`,A.propertyDocs)]);await RD(k,{uid:k,...g,property:P,documents:{idUrl:N,addressUrl:T,propertyUrl:K},status:"pending",verified:!1}),c(!0);const le=await I(P.surveyNumber);await rT("buyers",k,le),p(le),c(!1)}catch(k){l(k.message)}finally{i(!1)}};return f!==null?m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4",children:m.jsxs(dn,{className:"max-w-md w-full p-10 text-center",children:[m.jsx("div",{className:"text-6xl mb-4",children:f?"🎉":"⚠️"}),m.jsx("h2",{className:"text-2xl font-black text-stone-900 mb-3",style:{fontFamily:"Georgia, serif"},children:f?"Document Verified!":"Manual Review Required"}),m.jsx("p",{className:"text-stone-500 mb-6",children:f?"Your land records have been cross-verified with TNREGINET. Registration is complete!":"We couldn't auto-verify your documents. They've been flagged for manual review by the Registrar."}),m.jsx(ye,{onClick:()=>e("/dashboard"),className:"w-full",children:"Go to Dashboard →"})]})}):m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 py-10 px-4",children:m.jsxs("div",{className:"max-w-xl mx-auto",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("span",{className:"text-3xl",children:"🛒"}),m.jsx("h1",{className:"text-2xl font-black text-stone-900 mt-2",style:{fontFamily:"Georgia, serif"},children:"Buyer Registration"})]}),m.jsx(dn,{children:m.jsxs("div",{className:"p-8",children:[m.jsx(nT,{steps:bD,current:n}),o&&m.jsx(Pt,{type:"error",children:o}),n===0&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(ge,{label:"Full Name",placeholder:"Arjun Subramaniam",value:g.name,onChange:D("name")}),m.jsx(ge,{label:"Email",type:"email",placeholder:"arjun@example.com",value:g.email,onChange:D("email")}),m.jsx(ge,{label:"Mobile",type:"tel",placeholder:"+91 98765 43210",value:g.mobile,onChange:D("mobile")}),m.jsx(ge,{label:"Date of Birth",type:"date",value:g.dob,onChange:D("dob")}),m.jsxs("div",{className:"flex flex-col gap-1",children:[m.jsx("label",{className:"text-xs font-semibold text-stone-700 uppercase tracking-wide",children:"Address"}),m.jsx("textarea",{className:"w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white focus:outline-none focus:border-amber-500 transition-all text-stone-800 font-medium resize-none",rows:3,placeholder:"No. 12, Anna Nagar, Chennai - 600040",value:g.address,onChange:D("address")})]})]}),n===1&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Pt,{type:"info",children:"Survey numbers will be cross-verified with TNREGINET government records."}),m.jsx(ge,{label:"Survey Number",placeholder:"TN-CHN-2024-001",value:P.surveyNumber,onChange:L("surveyNumber")}),m.jsx(ge,{label:"Property Location",placeholder:"Anna Nagar, Chennai",value:P.location,onChange:L("location")}),m.jsx(ge,{label:"Property Size (sq. ft)",type:"number",placeholder:"1200",value:P.size,onChange:L("size")})]}),n===2&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Pt,{type:"warning",children:"Upload clear scanned copies. Supported formats: PDF, JPG, PNG (max 5MB each)"}),m.jsx(lo,{label:"ID Proof (Aadhaar / PAN / Passport)",accept:".pdf,.jpg,.jpeg,.png",onChange:U("idProof"),fileName:_.idProof}),m.jsx(lo,{label:"Address Proof",accept:".pdf,.jpg,.jpeg,.png",onChange:U("addressProof"),fileName:_.addressProof}),m.jsx(lo,{label:"Property Documents",accept:".pdf,.jpg,.jpeg,.png",onChange:U("propertyDocs"),fileName:_.propertyDocs})]}),m.jsxs("div",{className:"flex gap-3 mt-8",children:[n>0&&m.jsx(ye,{variant:"secondary",onClick:()=>r(k=>k-1),className:"flex-1",children:"← Back"}),n<2?m.jsx(ye,{onClick:v,className:"flex-1",children:"Next →"}):m.jsx(ye,{onClick:x,loading:s||u,className:"flex-1",children:u?"Verifying with TNREGINET…":"Submit Registration →"})]})]})})]})})}const OD="https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",VD="YOUR_HF_TOKEN",LD=async t=>{try{const n=await(await fetch(OD,{method:"POST",headers:{Authorization:`Bearer ${VD}`,"Content-Type":"application/json"},body:JSON.stringify({inputs:t})})).json();if(!Array.isArray(n)||!n[0])throw new Error("Invalid response");const r=[...n[0]].sort((o,l)=>l.score-o.score),s=r[0];return{label:s.label.toLowerCase().includes("pos")?"positive":s.label.toLowerCase().includes("neg")?"negative":"neutral",score:s.score,raw:r}}catch(e){return console.error("Sentiment analysis failed:",e),{label:"neutral",score:0,error:e.message}}},MD="I am [Your Name], the owner of survey number [Survey No.]. I am selling this property of my own free will and without any coercion. I confirm that all documents submitted are genuine.";function jD({onComplete:t}){const{user:e}=kr(),n=V.useRef(null),r=V.useRef(null),s=V.useRef([]),i=V.useRef(null),[o,l]=V.useState("ownership"),[u,c]=V.useState(null),[f,p]=V.useState(""),[g,S]=V.useState(3),[P,C]=V.useState(null),[A,E]=V.useState(""),[_,R]=V.useState(null),[D,L]=V.useState(!1),[U,w]=V.useState("");V.useEffect(()=>{if(o!=="countdown")return;if(g===0){I();return}const N=setTimeout(()=>S(T=>T-1),1e3);return()=>clearTimeout(N)},[o,g]);const v=async()=>{try{const N=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});n.current&&(n.current.srcObject=N,n.current.muted=!0,n.current.play()),l("countdown")}catch{w("Camera access denied. Please allow camera and microphone.")}},I=()=>{var le;const N=(le=n.current)==null?void 0:le.srcObject;if(!N)return;s.current=[];const T=new MediaRecorder(N,{mimeType:"video/webm;codecs=vp9,opus"});T.ondataavailable=Te=>s.current.push(Te.data),T.onstop=()=>{const Te=new Blob(s.current,{type:"video/webm"});C(Te);const ee=URL.createObjectURL(Te);n.current&&(n.current.srcObject=null,n.current.src=ee,n.current.muted=!1,n.current.controls=!0),l("preview")},r.current=T,T.start();const K=window.SpeechRecognition||window.webkitSpeechRecognition;if(K){const Te=new K;Te.lang="en-IN",Te.continuous=!0,Te.interimResults=!1,Te.onresult=ee=>{const B=Array.from(ee.results).map(H=>H[0].transcript).join(" ");E(B)},i.current=Te,Te.start()}l("recording"),setTimeout(()=>x(),6e4)},x=()=>{var N,T;(N=r.current)==null||N.stop(),(T=i.current)==null||T.stop()},k=async()=>{L(!0),l("analyzing");try{const N=await LD(A||"I am selling this property by my own will");R(N);const T=await Hs(`sellers/${e.uid}/consent_video.webm`,P),K=N.label!=="negative";await PD(e.uid,{videoUrl:T,transcript:A,sentiment:N,aiApproved:K,isOwner:u,relation:u?"self":f,recordedAt:new Date().toISOString(),manualReviewRequired:!K}),l("done"),t&&t({aiApproved:K,sentiment:N})}catch(N){w(N.message),l("preview")}finally{L(!1)}};return m.jsxs("div",{className:"flex flex-col gap-6",children:[U&&m.jsx(Pt,{type:"error",children:U}),o==="ownership"&&m.jsxs("div",{className:"space-y-5",children:[m.jsxs(Pt,{type:"info",children:[m.jsx("strong",{children:"Before recording:"})," Please confirm your relationship to the property."]}),m.jsx("p",{className:"font-semibold text-stone-800",children:"Is the person recording the video the land owner?"}),m.jsxs("div",{className:"flex gap-3",children:[m.jsx("button",{onClick:()=>c(!0),className:`flex-1 py-3 rounded-xl border-2 font-bold transition-all
                ${u===!0?"border-stone-900 bg-stone-900 text-white":"border-stone-200 text-stone-600 hover:border-stone-400"}`,children:"✅ Yes, I'm the owner"}),m.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-xl border-2 font-bold transition-all
                ${u===!1?"border-stone-900 bg-stone-900 text-white":"border-stone-200 text-stone-600 hover:border-stone-400"}`,children:"👥 No, I'm a representative"})]}),u===!1&&m.jsxs("div",{className:"flex flex-col gap-3",children:[m.jsx("label",{className:"text-xs font-semibold text-stone-700 uppercase tracking-wide",children:"Your Relation to the Land Owner"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"spouse",emoji:"💑",label:"Spouse"},{value:"son",emoji:"👨‍👩‍👦",label:"Son / Daughter"},{value:"parent",emoji:"👴",label:"Parent"},{value:"sibling",emoji:"🤝",label:"Sibling"},{value:"legal_rep",emoji:"⚖️",label:"Legal Rep / PoA"},{value:"other",emoji:"👤",label:"Other"}].map(N=>m.jsxs("button",{type:"button",onClick:()=>p(N.value),className:`flex items-center gap-2 px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all text-left
                      ${f===N.value?"border-stone-900 bg-stone-900 text-white":"border-stone-200 bg-white text-stone-600 hover:border-amber-400 hover:bg-amber-50"}`,children:[m.jsx("span",{className:"text-lg",children:N.emoji}),m.jsx("span",{children:N.label})]},N.value))})]}),u!==null&&(u||f)&&m.jsx(ye,{onClick:v,className:"w-full",children:"🎥 Start Video Recording →"})]}),o==="countdown"&&m.jsxs("div",{className:"text-center py-10",children:[m.jsx("div",{className:"text-8xl font-black text-stone-900 animate-pulse",children:g===0?"🔴":g}),m.jsx("p",{className:"text-stone-500 mt-4 font-medium",children:g>0?"Recording starts in…":"Recording!"})]}),(o==="recording"||o==="preview")&&m.jsxs("div",{className:"flex flex-col gap-4",children:[o==="recording"&&m.jsxs("div",{className:"flex items-center gap-2 justify-center",children:[m.jsx("span",{className:"animate-pulse w-3 h-3 rounded-full bg-red-500 inline-block"}),m.jsx("span",{className:"text-sm font-bold text-red-600",children:"RECORDING"})]}),m.jsx("video",{ref:n,className:"w-full rounded-xl border-2 border-stone-200 bg-black",style:{maxHeight:280}}),o==="recording"&&m.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4",children:[m.jsx("p",{className:"text-sm text-stone-700 font-medium mb-1",children:"📜 Consent Script:"}),m.jsx("p",{className:"text-sm text-stone-600 italic",children:MD})]}),o==="recording"&&m.jsx(ye,{variant:"danger",onClick:x,className:"w-full",children:"⏹ Stop Recording"}),o==="preview"&&m.jsxs("div",{className:"flex gap-3",children:[m.jsx(ye,{variant:"secondary",onClick:()=>{C(null),S(3),l("ownership")},className:"flex-1",children:"🔄 Re-record"}),m.jsx(ye,{onClick:k,loading:D,className:"flex-1",children:"✅ Submit Video →"})]})]}),o==="analyzing"&&m.jsxs("div",{className:"text-center py-8",children:[m.jsx("div",{className:"text-4xl mb-4 animate-spin inline-block",children:"🔍"}),m.jsx("p",{className:"font-bold text-stone-900",children:"Analyzing consent video…"}),m.jsx("p",{className:"text-stone-500 text-sm mt-1",children:"Running AI sentiment analysis"})]}),o==="done"&&_&&m.jsxs("div",{className:"text-center space-y-3",children:[m.jsx("div",{className:"text-5xl",children:_.label==="negative"?"⚠️":"✅"}),m.jsx("h3",{className:"text-xl font-black text-stone-900",children:_.label==="negative"?"Flagged for Manual Review":"Video Consent Accepted"}),m.jsxs("p",{className:"text-stone-500 text-sm",children:["AI sentiment detected:"," ",m.jsx("strong",{className:_.label==="positive"?"text-emerald-600":_.label==="negative"?"text-red-600":"text-amber-600",children:_.label.toUpperCase()})]}),_.label==="negative"&&m.jsx(Pt,{type:"warning",children:"Your video has been flagged for manual review by the Registrar due to detected sentiment. You will be notified once reviewed."}),A&&m.jsxs("div",{className:"text-left bg-stone-50 rounded-xl p-4 border border-stone-200",children:[m.jsx("p",{className:"text-xs text-stone-500 font-semibold uppercase tracking-wide mb-1",children:"Transcript"}),m.jsxs("p",{className:"text-sm text-stone-700 italic",children:['"',A,'"']})]})]})]})}const UD=["Personal","Property","Documents","Video Consent"];function FD(){var Te;const{user:t}=kr(),e=cs(),[n,r]=V.useState(0),[s,i]=V.useState(!1),[o,l]=V.useState(""),[u,c]=V.useState(!1),[f,p]=V.useState(null),[g,S]=V.useState(!1),[P,C]=V.useState(null),[A,E]=V.useState({name:"",email:"",mobile:"",businessName:"",address:""}),[_,R]=V.useState({surveyNumber:"",ownershipDocs:""}),[D,L]=V.useState({idProof:null,propertyDocs:null}),[U,w]=V.useState({idProof:"",propertyDocs:""}),v=ee=>B=>E(H=>({...H,[ee]:B.target.value})),I=ee=>B=>R(H=>({...H,[ee]:B.target.value})),x=ee=>B=>{const H=B.target.files[0];H&&(L(Y=>({...Y,[ee]:H})),w(Y=>({...Y,[ee]:H.name})))},k=()=>n===0&&(!A.name||!A.email||!A.mobile||!A.address)?"Please fill all personal details.":n===1&&(!_.surveyNumber||!_.ownershipDocs)?"Please fill all property details.":n===2&&(!D.idProof||!D.propertyDocs)?"Please upload all required documents.":"",N=()=>{const ee=k();if(ee){l(ee);return}l(""),r(B=>B+1)},T=async ee=>new Promise(B=>setTimeout(()=>B(ee.toUpperCase().startsWith("TN")),2e3)),K=async()=>{l(""),i(!0);try{const ee=t.uid,[B,H]=await Promise.all([Hs(`sellers/${ee}/id_proof`,D.idProof),Hs(`sellers/${ee}/property_docs`,D.propertyDocs)]);await AD(ee,{uid:ee,...A,property:_,documents:{idUrl:B,propUrl:H},status:"pending",verified:!1,videoConsent:P||null}),c(!0);const Y=await T(_.surveyNumber);await rT("sellers",ee,Y),p(Y),c(!1)}catch(ee){l(ee.message)}finally{i(!1)}},le=ee=>{C(ee),S(!0)};if(f!==null){const ee=!f||((Te=P==null?void 0:P.sentiment)==null?void 0:Te.label)==="negative";return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4",children:m.jsxs(dn,{className:"max-w-md w-full p-10 text-center",children:[m.jsx("div",{className:"text-6xl mb-4",children:ee?"📋":"🎉"}),m.jsx("h2",{className:"text-2xl font-black text-stone-900 mb-3",style:{fontFamily:"Georgia, serif"},children:ee?"Pending Registrar Review":"Registration Complete!"}),m.jsx("p",{className:"text-stone-500 mb-6",children:ee?"Your application has been submitted and is pending manual approval by the Registrar.":"Documents verified and video consent approved. Your seller registration is complete!"}),(P==null?void 0:P.sentiment)&&m.jsxs("div",{className:`rounded-xl p-3 mb-4 text-sm font-medium border
              ${P.sentiment.label==="negative"?"bg-amber-50 border-amber-200 text-amber-800":"bg-emerald-50 border-emerald-200 text-emerald-800"}`,children:["AI Sentiment: ",P.sentiment.label.toUpperCase()," ·"," ",P.aiApproved?"Auto-Approved":"Flagged for Review"]}),m.jsx(ye,{onClick:()=>e("/dashboard"),className:"w-full",children:"Go to Dashboard →"})]})})}return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 py-10 px-4",children:m.jsxs("div",{className:"max-w-xl mx-auto",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("span",{className:"text-3xl",children:"🏡"}),m.jsx("h1",{className:"text-2xl font-black text-stone-900 mt-2",style:{fontFamily:"Georgia, serif"},children:"Seller Registration"})]}),m.jsx(dn,{children:m.jsxs("div",{className:"p-8",children:[m.jsx(nT,{steps:UD,current:n}),o&&m.jsx(Pt,{type:"error",children:o}),n===0&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(ge,{label:"Full Name",placeholder:"Ramesh Krishnamurthy",value:A.name,onChange:v("name")}),m.jsx(ge,{label:"Email",type:"email",value:A.email,onChange:v("email")}),m.jsx(ge,{label:"Mobile",type:"tel",value:A.mobile,onChange:v("mobile")}),m.jsx(ge,{label:"Business / Company Name (optional)",placeholder:"Sri Lakshmi Properties",value:A.businessName,onChange:v("businessName")}),m.jsxs("div",{className:"flex flex-col gap-1",children:[m.jsx("label",{className:"text-xs font-semibold text-stone-700 uppercase tracking-wide",children:"Address"}),m.jsx("textarea",{className:"w-full px-4 py-3 rounded-xl border-2 border-stone-200 bg-white focus:outline-none focus:border-amber-500 transition-all text-stone-800 font-medium resize-none",rows:3,value:A.address,onChange:v("address"),placeholder:"No. 45, T. Nagar, Chennai - 600017"})]})]}),n===1&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Pt,{type:"info",children:"Survey numbers will be cross-verified with TNREGINET."}),m.jsx(ge,{label:"Survey Number",placeholder:"TN-CBE-2020-456",value:_.surveyNumber,onChange:I("surveyNumber")}),m.jsx(ge,{label:"Land Ownership Document Number",placeholder:"Doc No. / Patta No.",value:_.ownershipDocs,onChange:I("ownershipDocs")})]}),n===2&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Pt,{type:"warning",children:"Upload clear copies. Max 5MB per file."}),m.jsx(lo,{label:"ID Proof (Aadhaar / PAN)",accept:".pdf,.jpg,.png",onChange:x("idProof"),fileName:U.idProof}),m.jsx(lo,{label:"Property Documents (Patta / Sale Deed)",accept:".pdf,.jpg,.png",onChange:x("propertyDocs"),fileName:U.propertyDocs})]}),n===3&&m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsxs(Pt,{type:"info",children:[m.jsx("strong",{children:"Video Consent Required:"})," Please record a short video confirming your voluntary intent to sell."]}),m.jsx(jD,{onComplete:le}),g&&m.jsx(ye,{onClick:K,loading:s||u,className:"w-full mt-2",children:u?"Verifying with TNREGINET…":"Complete Registration →"})]}),n<3&&m.jsxs("div",{className:"flex gap-3 mt-8",children:[n>0&&m.jsx(ye,{variant:"secondary",onClick:()=>r(ee=>ee-1),className:"flex-1",children:"← Back"}),m.jsx(ye,{onClick:N,className:"flex-1",children:"Next →"})]}),n===3&&!g&&m.jsx(ye,{variant:"secondary",onClick:()=>r(2),className:"w-full mt-6",children:"← Back"})]})})]})})}function Gy(){var f,p,g;const{user:t,logout:e}=kr(),n=cs(),[r,s]=V.useState(null),[i,o]=V.useState(null),[l,u]=V.useState(!0);V.useEffect(()=>{t&&Promise.all([xD(t.uid),CD(t.uid)]).then(([S,P])=>{s(S),o(P),u(!1)})},[t]);const c=({status:S,verified:P})=>P&&(S==="approved"||!S)?m.jsx("span",{className:"bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full",children:"✅ Verified & Registered"}):S==="approved"?m.jsx("span",{className:"bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full",children:"✅ Approved"}):S==="rejected"?m.jsx("span",{className:"bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full",children:"❌ Rejected"}):m.jsx("span",{className:"bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full",children:"⏳ Pending Review"});return m.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 to-amber-50",children:[m.jsxs("header",{className:"bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between shadow-sm",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"text-2xl",children:"🏛️"}),m.jsxs("div",{children:[m.jsx("h1",{className:"font-black text-stone-900",style:{fontFamily:"Georgia, serif"},children:"TN Land Registry"}),m.jsx("p",{className:"text-stone-400 text-xs",children:(t==null?void 0:t.email)||(t==null?void 0:t.phoneNumber)})]})]}),m.jsx(ye,{variant:"secondary",onClick:e,className:"text-sm py-2",children:"Sign Out"})]}),m.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-10",children:[m.jsx("h2",{className:"text-2xl font-black text-stone-900 mb-2",style:{fontFamily:"Georgia, serif"},children:"Welcome back 👋"}),m.jsx("p",{className:"text-stone-500 mb-8",children:"Here's an overview of your registrations."}),l?m.jsx("div",{className:"text-stone-400 text-center py-20",children:"Loading your data…"}):m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8",children:[m.jsxs(dn,{className:"p-6",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-2xl",children:"🛒"}),m.jsx("h3",{className:"font-black text-stone-900",children:"Buyer Registration"})]}),r&&m.jsx(c,{status:r.approvalStatus,verified:r.verified})]}),r?m.jsxs("div",{className:"text-sm text-stone-600 space-y-1",children:[m.jsxs("p",{children:[m.jsx("span",{className:"font-semibold",children:"Survey #:"})," ",(f=r.property)==null?void 0:f.surveyNumber]}),m.jsxs("p",{children:[m.jsx("span",{className:"font-semibold",children:"Location:"})," ",(p=r.property)==null?void 0:p.location]}),m.jsxs("p",{children:[m.jsx("span",{className:"font-semibold",children:"TNREGINET:"})," ",r.verified?"✅ Verified":"⏳ Pending"]})]}):m.jsxs("div",{className:"text-stone-400 text-sm",children:[m.jsx("p",{className:"mb-4",children:"No buyer registration yet."}),m.jsx(ye,{onClick:()=>n("/buyer"),className:"w-full text-sm py-2",children:"Register as Buyer →"})]})]}),m.jsxs(dn,{className:"p-6",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-2xl",children:"🏡"}),m.jsx("h3",{className:"font-black text-stone-900",children:"Seller Registration"})]}),i&&m.jsx(c,{status:i.approvalStatus,verified:i.verified})]}),i?m.jsxs("div",{className:"text-sm text-stone-600 space-y-1",children:[m.jsxs("p",{children:[m.jsx("span",{className:"font-semibold",children:"Survey #:"})," ",(g=i.property)==null?void 0:g.surveyNumber]}),m.jsxs("p",{children:[m.jsx("span",{className:"font-semibold",children:"Video Consent:"})," ",i.videoConsent?m.jsx("span",{className:i.videoConsent.aiApproved?"text-emerald-600":"text-amber-600",children:i.videoConsent.aiApproved?"✅ AI Approved":"⚠️ Manual Review"}):"Not recorded"]}),m.jsxs("p",{children:[m.jsx("span",{className:"font-semibold",children:"TNREGINET:"})," ",i.verified?"✅ Verified":"⏳ Pending"]})]}):m.jsxs("div",{className:"text-stone-400 text-sm",children:[m.jsx("p",{className:"mb-4",children:"No seller registration yet."}),m.jsx(ye,{onClick:()=>n("/seller"),className:"w-full text-sm py-2",children:"Register as Seller →"})]})]})]}),m.jsx(ye,{variant:"amber",onClick:()=>n("/registration-type"),className:"w-full sm:w-auto",children:"+ Start New Registration"})]})]})}function BD(){const{user:t,logout:e}=kr(),[n,r]=V.useState([]),[s,i]=V.useState(!0),[o,l]=V.useState({}),[u,c]=V.useState("all");V.useEffect(()=>{f()},[]);const f=async()=>{i(!0);try{const A=(await sb(z1($n,"sellers"))).docs.map(E=>({id:E.id,...E.data()}));r(A)}catch(C){console.error(C)}finally{i(!1)}},p=async C=>{l(A=>({...A,[C]:"approve"})),await Ky(C,"approved",(t==null?void 0:t.email)||"admin"),r(A=>A.map(E=>E.id===C?{...E,approvalStatus:"approved"}:E)),l(A=>({...A,[C]:null}))},g=async C=>{l(A=>({...A,[C]:"reject"})),await Ky(C,"rejected",(t==null?void 0:t.email)||"admin"),r(A=>A.map(E=>E.id===C?{...E,approvalStatus:"rejected"}:E)),l(A=>({...A,[C]:null}))},S=n.filter(C=>{var A,E;return u==="pending"?!C.approvalStatus||C.approvalStatus==="pending":u==="flagged"?((E=(A=C.videoConsent)==null?void 0:A.sentiment)==null?void 0:E.label)==="negative":u==="approved"?C.approvalStatus==="approved":u==="rejected"?C.approvalStatus==="rejected":!0}),P=C=>{const A={positive:"bg-emerald-100 text-emerald-700",neutral:"bg-blue-100 text-blue-700",negative:"bg-red-100 text-red-700"};return m.jsx("span",{className:`text-xs font-bold px-2 py-1 rounded-full ${A[C]||A.neutral}`,children:C.toUpperCase()})};return m.jsxs("div",{className:"min-h-screen bg-stone-950 text-white",children:[m.jsxs("header",{className:"bg-stone-900 border-b border-stone-800 px-6 py-4 flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"text-2xl",children:"🏛️"}),m.jsxs("div",{children:[m.jsx("h1",{className:"font-black text-lg",style:{fontFamily:"Georgia, serif"},children:"Registrar Admin Dashboard"}),m.jsxs("p",{className:"text-stone-400 text-xs",children:["TN Land Registry · ",t==null?void 0:t.email]})]})]}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("button",{onClick:f,className:"text-stone-400 hover:text-white text-sm font-medium transition-colors",children:"🔄 Refresh"}),m.jsx("button",{onClick:e,className:"bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-xl text-sm font-bold transition-all",children:"Sign Out"})]})]}),m.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[m.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8",children:[{label:"Total Sellers",value:n.length,color:"text-white"},{label:"Pending Review",value:n.filter(C=>!C.approvalStatus||C.approvalStatus==="pending").length,color:"text-amber-400"},{label:"Flagged (AI)",value:n.filter(C=>{var A,E;return((E=(A=C.videoConsent)==null?void 0:A.sentiment)==null?void 0:E.label)==="negative"}).length,color:"text-red-400"},{label:"Approved",value:n.filter(C=>C.approvalStatus==="approved").length,color:"text-emerald-400"}].map(C=>m.jsxs("div",{className:"bg-stone-900 rounded-2xl p-5 border border-stone-800",children:[m.jsx("div",{className:`text-3xl font-black ${C.color}`,children:C.value}),m.jsx("div",{className:"text-stone-400 text-sm mt-1 font-medium",children:C.label})]},C.label))}),m.jsx("div",{className:"flex gap-2 mb-6 flex-wrap",children:["all","pending","flagged","approved","rejected"].map(C=>m.jsx("button",{onClick:()=>c(C),className:`px-4 py-2 rounded-xl text-sm font-bold transition-all capitalize
                ${u===C?"bg-amber-500 text-white":"bg-stone-800 text-stone-400 hover:text-white"}`,children:C==="flagged"?"🚩 Flagged":C.charAt(0).toUpperCase()+C.slice(1)},C))}),s?m.jsx("div",{className:"text-center py-20 text-stone-500",children:"Loading registrations…"}):S.length===0?m.jsx("div",{className:"text-center py-20 text-stone-500",children:"No records found."}):m.jsx("div",{className:"flex flex-col gap-4",children:S.map(C=>{var R,D;const A=C.videoConsent,E=((R=A==null?void 0:A.sentiment)==null?void 0:R.label)||"neutral",_=C.approvalStatus||"pending";return m.jsx("div",{className:"bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-stone-700 transition-all",children:m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start justify-between gap-4",children:[m.jsxs("div",{className:"flex-1",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-2 flex-wrap",children:[m.jsx("h3",{className:"font-black text-white text-lg",children:C.name||"Unknown"}),P(E),m.jsx("span",{className:`text-xs font-bold px-2 py-1 rounded-full
                          ${_==="approved"?"bg-emerald-900 text-emerald-400":_==="rejected"?"bg-red-900 text-red-400":"bg-amber-900 text-amber-400"}`,children:_.toUpperCase()}),!(A!=null&&A.isOwner)&&m.jsxs("span",{className:"text-xs bg-purple-900 text-purple-400 px-2 py-1 rounded-full font-bold",children:["Rep: ",(A==null?void 0:A.relation)||"unknown"]})]}),m.jsxs("p",{className:"text-stone-400 text-sm",children:[C.email," · ",C.mobile]}),m.jsxs("p",{className:"text-stone-500 text-sm mt-1",children:["Survey: ",m.jsx("span",{className:"text-amber-400 font-mono",children:(D=C.property)==null?void 0:D.surveyNumber}),C.verified&&m.jsx("span",{className:"ml-2 text-emerald-400",children:"✓ TNREGINET Verified"})]}),(A==null?void 0:A.transcript)&&m.jsxs("div",{className:"mt-3 bg-stone-800 rounded-xl p-3",children:[m.jsx("p",{className:"text-xs text-stone-500 uppercase font-bold tracking-wide mb-1",children:"Video Transcript"}),m.jsxs("p",{className:"text-sm text-stone-300 italic",children:['"',A.transcript,'"']})]}),(A==null?void 0:A.videoUrl)&&m.jsx("a",{href:A.videoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 mt-2 text-amber-400 hover:text-amber-300 text-sm font-medium",children:"🎥 View Consent Video →"}),E==="negative"&&m.jsx("div",{className:"mt-3 bg-red-950 border border-red-900 rounded-xl p-3",children:m.jsx("p",{className:"text-xs text-red-400 font-bold",children:"⚠️ AI flagged negative sentiment — manual review required"})})]}),_==="pending"&&m.jsxs("div",{className:"flex gap-2 sm:flex-col",children:[m.jsx(ye,{variant:"success",onClick:()=>p(C.id),loading:o[C.id]==="approve",className:"text-sm px-5 py-2",children:"✅ Approve"}),m.jsx(ye,{variant:"danger",onClick:()=>g(C.id),loading:o[C.id]==="reject",className:"text-sm px-5 py-2",children:"❌ Reject"})]}),_==="approved"&&m.jsx("span",{className:"text-emerald-400 font-bold text-sm self-start",children:"✅ Approved"}),_==="rejected"&&m.jsx("span",{className:"text-red-400 font-bold text-sm self-start",children:"❌ Rejected"})]})},C.id)})})]})]})}function zD(){return m.jsx(TD,{children:m.jsx(rx,{children:m.jsxs(ex,{children:[m.jsx(Yt,{path:"/",element:m.jsx(ID,{})}),m.jsx(Yt,{path:"/profile",element:m.jsx(Lr,{children:m.jsx(kD,{})})}),m.jsx(Yt,{path:"/home",element:m.jsx(Lr,{children:m.jsx(Gy,{})})}),m.jsx(Yt,{path:"/dashboard",element:m.jsx(Lr,{children:m.jsx(Gy,{})})}),m.jsx(Yt,{path:"/registration-type",element:m.jsx(Lr,{children:m.jsx(ND,{})})}),m.jsx(Yt,{path:"/buyer",element:m.jsx(Lr,{children:m.jsx(DD,{})})}),m.jsx(Yt,{path:"/seller",element:m.jsx(Lr,{children:m.jsx(FD,{})})}),m.jsx(Yt,{path:"/admin",element:m.jsx(Lr,{children:m.jsx(BD,{})})}),m.jsx(Yt,{path:"*",element:m.jsx(_0,{to:"/",replace:!0})})]})})})}Yc.createRoot(document.getElementById("root")).render(m.jsx(_d.StrictMode,{children:m.jsx(zD,{})}));
