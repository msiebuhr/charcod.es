!function(){var e=document.createElement("script")
e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js"
var t=document.getElementsByTagName("script")[0]
t.parentNode.insertBefore(e,t)}(),function(e,t){function n(e){return O.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}function r(e){if(!bn[e]){var t=D.body,n=O("<"+e+">").appendTo(t),r=n.css("display")
n.remove(),("none"===r||""===r)&&(mn||(mn=D.createElement("iframe"),mn.frameBorder=mn.width=mn.height=0),t.appendChild(mn),gn&&mn.createElement||(gn=(mn.contentWindow||mn.contentDocument).document,gn.write((O.support.boxModel?"<!doctype html>":"")+"<html><body>"),gn.close()),n=gn.createElement(e),gn.body.appendChild(n),r=O.css(n,"display"),t.removeChild(mn)),bn[e]=r}return bn[e]}function i(e,t){var n={}
return O.each(Tn.concat.apply([],Tn.slice(0,t)),function(){n[this]=e}),n}function o(){yn=t}function a(){return setTimeout(o,0),yn=O.now()}function s(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function l(){try{return new e.XMLHttpRequest}catch(t){}}function u(e,n){e.dataFilter&&(n=e.dataFilter(n,e.dataType))
var r,i,o,a,s,l,u,c,f=e.dataTypes,d={},p=f.length,h=f[0]
for(r=1;p>r;r++){if(1===r)for(i in e.converters)"string"==typeof i&&(d[i.toLowerCase()]=e.converters[i])
if(a=h,h=f[r],"*"===h)h=a
else if("*"!==a&&a!==h){if(s=a+" "+h,l=d[s]||d["* "+h],!l){c=t
for(u in d)if(o=u.split(" "),(o[0]===a||"*"===o[0])&&(c=d[o[1]+" "+h])){u=d[u],u===!0?l=c:c===!0&&(l=u)
break}}!l&&!c&&O.error("No conversion from "+s.replace(" "," to ")),l!==!0&&(n=l?l(n):c(u(n)))}}return n}function c(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes,c=e.responseFields
for(o in c)o in r&&(n[c[o]]=r[o])
for(;"*"===u[0];)u.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"))
if(i)for(o in l)if(l[o]&&l[o].test(i)){u.unshift(o)
break}if(u[0]in r)a=u[0]
else{for(o in r){if(!u[0]||e.converters[o+" "+u[0]]){a=o
break}s||(s=o)}a=a||s}return a?(a!==u[0]&&u.unshift(a),r[a]):void 0}function f(e,t,n,r){if(O.isArray(t))O.each(t,function(t,i){n||zt.test(e)?r(e,i):f(e+"["+("object"==typeof i?t:"")+"]",i,n,r)})
else if(n||"object"!==O.type(t))r(e,t)
else for(var i in t)f(e+"["+i+"]",t[i],n,r)}function d(e,n){var r,i,o=O.ajaxSettings.flatOptions||{}
for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r])
i&&O.extend(!0,e,i)}function p(e,n,r,i,o,a){o=o||n.dataTypes[0],a=a||{},a[o]=!0
for(var s,l=e[o],u=0,c=l?l.length:0,f=e===an;c>u&&(f||!s);u++)s=l[u](n,r,i),"string"==typeof s&&(!f||a[s]?s=t:(n.dataTypes.unshift(s),s=p(e,n,r,i,s,a)))
return(f||!s)&&!a["*"]&&(s=p(e,n,r,i,"*",a)),s}function h(e){return function(t,n){if("string"!=typeof t&&(n=t,t="*"),O.isFunction(n))for(var r,i,o,a=t.toLowerCase().split(tn),s=0,l=a.length;l>s;s++)r=a[s],o=/^\+/.test(r),o&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[o?"unshift":"push"](n)}}function m(e,t,n){var r="width"===t?e.offsetWidth:e.offsetHeight,i="width"===t?1:0,o=4
if(r>0){if("border"!==n)for(;o>i;i+=2)n||(r-=parseFloat(O.css(e,"padding"+Rt[i]))||0),"margin"===n?r+=parseFloat(O.css(e,n+Rt[i]))||0:r-=parseFloat(O.css(e,"border"+Rt[i]+"Width"))||0
return r+"px"}if(r=jt(e,t),(0>r||null==r)&&(r=e.style[t]),_t.test(r))return r
if(r=parseFloat(r)||0,n)for(;o>i;i+=2)r+=parseFloat(O.css(e,"padding"+Rt[i]))||0,"padding"!==n&&(r+=parseFloat(O.css(e,"border"+Rt[i]+"Width"))||0),"margin"===n&&(r+=parseFloat(O.css(e,n+Rt[i]))||0)
return r+"px"}function g(e){var t=D.createElement("div")
return At.appendChild(t),t.innerHTML=e.outerHTML,t.firstChild}function v(e){var t=(e.nodeName||"").toLowerCase()
"input"===t?y(e):"script"!==t&&"undefined"!=typeof e.getElementsByTagName&&O.grep(e.getElementsByTagName("input"),y)}function y(e){("checkbox"===e.type||"radio"===e.type)&&(e.defaultChecked=e.checked)}function b(e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll("*"):[]}function x(e,t){var n
1===t.nodeType&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),"object"===n?t.outerHTML=e.outerHTML:"input"!==n||"checkbox"!==e.type&&"radio"!==e.type?"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text):(e.checked&&(t.defaultChecked=t.checked=e.checked),t.value!==e.value&&(t.value=e.value)),t.removeAttribute(O.expando),t.removeAttribute("_submit_attached"),t.removeAttribute("_change_attached"))}function w(e,t){if(1===t.nodeType&&O.hasData(e)){var n,r,i,o=O._data(e),a=O._data(t,o),s=o.events
if(s){delete a.handle,a.events={}
for(n in s)for(r=0,i=s[n].length;i>r;r++)O.event.add(t,n,s[n][r])}a.data&&(a.data=O.extend({},a.data))}}function T(e){return O.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function N(e){var t=ht.split("|"),n=e.createDocumentFragment()
if(n.createElement)for(;t.length;)n.createElement(t.pop())
return n}function E(e,t,n){if(t=t||0,O.isFunction(t))return O.grep(e,function(e,r){var i=!!t.call(e,r,e)
return i===n})
if(t.nodeType)return O.grep(e,function(e){return e===t===n})
if("string"==typeof t){var r=O.grep(e,function(e){return 1===e.nodeType})
if(ct.test(t))return O.filter(t,r,!n)
t=O.filter(t,r)}return O.grep(e,function(e){return O.inArray(e,t)>=0===n})}function C(e){return!e||!e.parentNode||11===e.parentNode.nodeType}function k(){return!0}function S(){return!1}function A(e,t,n){var r=t+"defer",i=t+"queue",o=t+"mark",a=O._data(e,r)
!(!a||"queue"!==n&&O._data(e,i)||"mark"!==n&&O._data(e,o)||!setTimeout(function(){!O._data(e,i)&&!O._data(e,o)&&(O.removeData(e,r,!0),a.fire())},0))}function j(e){for(var t in e)if(("data"!==t||!O.isEmptyObject(e[t]))&&"toJSON"!==t)return!1
return!0}function L(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(H,"-$1").toLowerCase()
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:O.isNumeric(r)?+r:B.test(r)?O.parseJSON(r):r}catch(o){}O.data(e,n,r)}else r=t}return r}function q(e){var t,n,r=_[e]={}
for(e=e.split(/\s+/),t=0,n=e.length;n>t;t++)r[e[t]]=!0
return r}var D=e.document,M=e.navigator,F=e.location,O=function(){function n(){if(!s.isReady){try{D.documentElement.doScroll("left")}catch(e){return void setTimeout(n,1)}s.ready()}}var r,i,o,a,s=function(e,t){return new s.fn.init(e,t,r)},l=e.jQuery,u=e.$,c=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,f=/\S/,d=/^\s+/,p=/\s+$/,h=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,m=/^[\],:{}\s]*$/,g=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,v=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,y=/(?:^|:|,)(?:\s*\[)+/g,b=/(webkit)[ \/]([\w.]+)/,x=/(opera)(?:.*version)?[ \/]([\w.]+)/,w=/(msie) ([\w.]+)/,T=/(mozilla)(?:.*? rv:([\w.]+))?/,N=/-([a-z]|[0-9])/gi,E=/^-ms-/,C=function(e,t){return(t+"").toUpperCase()},k=M.userAgent,S=Object.prototype.toString,A=Object.prototype.hasOwnProperty,j=Array.prototype.push,L=Array.prototype.slice,q=String.prototype.trim,F=Array.prototype.indexOf,O={}
return s.fn=s.prototype={constructor:s,init:function(e,n,r){var i,o,a,l
if(!e)return this
if(e.nodeType)return this.context=this[0]=e,this.length=1,this
if("body"===e&&!n&&D.body)return this.context=D,this[0]=D.body,this.selector=e,this.length=1,this
if("string"==typeof e){if(i="<"!==e.charAt(0)||">"!==e.charAt(e.length-1)||e.length<3?c.exec(e):[null,e,null],i&&(i[1]||!n)){if(i[1])return n=n instanceof s?n[0]:n,l=n?n.ownerDocument||n:D,a=h.exec(e),a?s.isPlainObject(n)?(e=[D.createElement(a[1])],s.fn.attr.call(e,n,!0)):e=[l.createElement(a[1])]:(a=s.buildFragment([i[1]],[l]),e=(a.cacheable?s.clone(a.fragment):a.fragment).childNodes),s.merge(this,e)
if(o=D.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e)
this.length=1,this[0]=o}return this.context=D,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return s.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),s.makeArray(e,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return L.call(this,0)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=this.constructor()
return s.isArray(e)?j.apply(r,e):s.merge(r,e),r.prevObject=this,r.context=this.context,"find"===t?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return s.each(this,e,t)},ready:function(e){return s.bindReady(),o.add(e),this},eq:function(e){return e=+e,-1===e?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(L.apply(this,arguments),"slice",L.call(arguments).join(","))},map:function(e){return this.pushStack(s.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},s.fn.init.prototype=s.fn,s.extend=s.fn.extend=function(){var e,n,r,i,o,a,l=arguments[0]||{},u=1,c=arguments.length,f=!1
for("boolean"==typeof l&&(f=l,l=arguments[1]||{},u=2),"object"!=typeof l&&!s.isFunction(l)&&(l={}),c===u&&(l=this,--u);c>u;u++)if(null!=(e=arguments[u]))for(n in e)r=l[n],i=e[n],l!==i&&(f&&i&&(s.isPlainObject(i)||(o=s.isArray(i)))?(o?(o=!1,a=r&&s.isArray(r)?r:[]):a=r&&s.isPlainObject(r)?r:{},l[n]=s.extend(f,a,i)):i!==t&&(l[n]=i))
return l},s.extend({noConflict:function(t){return e.$===s&&(e.$=u),t&&e.jQuery===s&&(e.jQuery=l),s},isReady:!1,readyWait:1,holdReady:function(e){e?s.readyWait++:s.ready(!0)},ready:function(e){if(e===!0&&!--s.readyWait||e!==!0&&!s.isReady){if(!D.body)return setTimeout(s.ready,1)
if(s.isReady=!0,e!==!0&&--s.readyWait>0)return
o.fireWith(D,[s]),s.fn.trigger&&s(D).trigger("ready").off("ready")}},bindReady:function(){if(!o){if(o=s.Callbacks("once memory"),"complete"===D.readyState)return setTimeout(s.ready,1)
if(D.addEventListener)D.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",s.ready,!1)
else if(D.attachEvent){D.attachEvent("onreadystatechange",a),e.attachEvent("onload",s.ready)
var t=!1
try{t=null==e.frameElement}catch(r){}D.documentElement.doScroll&&t&&n()}}},isFunction:function(e){return"function"===s.type(e)},isArray:Array.isArray||function(e){return"array"===s.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):O[S.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==s.type(e)||e.nodeType||s.isWindow(e))return!1
try{if(e.constructor&&!A.call(e,"constructor")&&!A.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r
for(r in e);return r===t||A.call(e,r)},isEmptyObject:function(e){for(var t in e)return!1
return!0},error:function(e){throw new Error(e)},parseJSON:function(t){return"string"==typeof t&&t?(t=s.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):m.test(t.replace(g,"@").replace(v,"]").replace(y,""))?new Function("return "+t)():void s.error("Invalid JSON: "+t)):null},parseXML:function(n){if("string"!=typeof n||!n)return null
var r,i
try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&s.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&f.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(E,"ms-").replace(N,C)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,r){var i,o=0,a=e.length,l=a===t||s.isFunction(e)
if(r)if(l){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;a>o&&n.apply(e[o++],r)!==!1;);else if(l){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;a>o&&n.call(e[o],o,e[o++])!==!1;);return e},trim:q?function(e){return null==e?"":q.call(e)}:function(e){return null==e?"":(e+"").replace(d,"").replace(p,"")},makeArray:function(e,t){var n=t||[]
if(null!=e){var r=s.type(e)
null==e.length||"string"===r||"function"===r||"regexp"===r||s.isWindow(e)?j.call(n,e):s.merge(n,e)}return n},inArray:function(e,t,n){var r
if(t){if(F)return F.call(t,e,n)
for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=e.length,i=0
if("number"==typeof n.length)for(var o=n.length;o>i;i++)e[r++]=n[i]
else for(;n[i]!==t;)e[r++]=n[i++]
return e.length=r,e},grep:function(e,t,n){var r,i=[]
n=!!n
for(var o=0,a=e.length;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o])
return i},map:function(e,n,r){var i,o,a=[],l=0,u=e.length,c=e instanceof s||u!==t&&"number"==typeof u&&(u>0&&e[0]&&e[u-1]||0===u||s.isArray(e))
if(c)for(;u>l;l++)i=n(e[l],l,r),null!=i&&(a[a.length]=i)
else for(o in e)i=n(e[o],o,r),null!=i&&(a[a.length]=i)
return a.concat.apply([],a)},guid:1,proxy:function(e,n){if("string"==typeof n){var r=e[n]
n=e,e=r}if(!s.isFunction(e))return t
var i=L.call(arguments,2),o=function(){return e.apply(n,i.concat(L.call(arguments)))}
return o.guid=e.guid=e.guid||o.guid||s.guid++,o},access:function(e,n,r,i,o,a,l){var u,c=null==r,f=0,d=e.length
if(r&&"object"==typeof r){for(f in r)s.access(e,n,f,r[f],1,a,i)
o=1}else if(i!==t){if(u=l===t&&s.isFunction(i),c&&(u?(u=n,n=function(e,t,n){return u.call(s(e),n)}):(n.call(e,i),n=null)),n)for(;d>f;f++)n(e[f],r,u?i.call(e[f],f,n(e[f],r)):i,l)
o=1}return o?e:c?n.call(e):d?n(e[0],r):a},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase()
var t=b.exec(e)||x.exec(e)||w.exec(e)||e.indexOf("compatible")<0&&T.exec(e)||[]
return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}s.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,r){return r&&r instanceof s&&!(r instanceof e)&&(r=e(r)),s.fn.init.call(this,n,r,t)},e.fn.init.prototype=e.fn
var t=e(D)
return e},browser:{}}),s.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),i=s.uaMatch(k),i.browser&&(s.browser[i.browser]=!0,s.browser.version=i.version),s.browser.webkit&&(s.browser.safari=!0),f.test(" ")&&(d=/^[\s\xA0]+/,p=/[\s\xA0]+$/),r=s(D),D.addEventListener?a=function(){D.removeEventListener("DOMContentLoaded",a,!1),s.ready()}:D.attachEvent&&(a=function(){"complete"===D.readyState&&(D.detachEvent("onreadystatechange",a),s.ready())}),s}(),_={}
O.Callbacks=function(e){e=e?_[e]||q(e):{}
var n,r,i,o,a,s,l=[],u=[],c=function(t){var n,r,i,o
for(n=0,r=t.length;r>n;n++)i=t[n],o=O.type(i),"array"===o?c(i):"function"===o&&(!e.unique||!d.has(i))&&l.push(i)},f=function(t,c){for(c=c||[],n=!e.memory||[t,c],r=!0,i=!0,s=o||0,o=0,a=l.length;l&&a>s;s++)if(l[s].apply(t,c)===!1&&e.stopOnFalse){n=!0
break}i=!1,l&&(e.once?n===!0?d.disable():l=[]:u&&u.length&&(n=u.shift(),d.fireWith(n[0],n[1])))},d={add:function(){if(l){var e=l.length
c(arguments),i?a=l.length:n&&n!==!0&&(o=e,f(n[0],n[1]))}return this},remove:function(){if(l)for(var t=arguments,n=0,r=t.length;r>n;n++)for(var o=0;o<l.length&&(t[n]!==l[o]||(i&&a>=o&&(a--,s>=o&&s--),l.splice(o--,1),!e.unique));o++);return this},has:function(e){if(l)for(var t=0,n=l.length;n>t;t++)if(e===l[t])return!0
return!1},empty:function(){return l=[],this},disable:function(){return l=u=n=t,this},disabled:function(){return!l},lock:function(){return u=t,(!n||n===!0)&&d.disable(),this},locked:function(){return!u},fireWith:function(t,r){return u&&(i?e.once||u.push([t,r]):(!e.once||!n)&&f(t,r)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!r}}
return d}
var P=[].slice
O.extend({Deferred:function(e){var t,n=O.Callbacks("once memory"),r=O.Callbacks("once memory"),i=O.Callbacks("memory"),o="pending",a={resolve:n,reject:r,notify:i},s={done:n.add,fail:r.add,progress:i.add,state:function(){return o},isResolved:n.fired,isRejected:r.fired,then:function(e,t,n){return l.done(e).fail(t).progress(n),this},always:function(){return l.done.apply(l,arguments).fail.apply(l,arguments),this},pipe:function(e,t,n){return O.Deferred(function(r){O.each({done:[e,"resolve"],fail:[t,"reject"],progress:[n,"notify"]},function(e,t){var n,i=t[0],o=t[1]
l[e](O.isFunction(i)?function(){n=i.apply(this,arguments),n&&O.isFunction(n.promise)?n.promise().then(r.resolve,r.reject,r.notify):r[o+"With"](this===l?r:this,[n])}:r[o])})}).promise()},promise:function(e){if(null==e)e=s
else for(var t in s)e[t]=s[t]
return e}},l=s.promise({})
for(t in a)l[t]=a[t].fire,l[t+"With"]=a[t].fireWith
return l.done(function(){o="resolved"},r.disable,i.lock).fail(function(){o="rejected"},n.disable,i.lock),e&&e.call(l,l),l},when:function(e){function t(e){return function(t){a[e]=arguments.length>1?P.call(arguments,0):t,l.notifyWith(u,a)}}function n(e){return function(t){r[e]=arguments.length>1?P.call(arguments,0):t,--s||l.resolveWith(l,r)}}var r=P.call(arguments,0),i=0,o=r.length,a=Array(o),s=o,l=1>=o&&e&&O.isFunction(e.promise)?e:O.Deferred(),u=l.promise()
if(o>1){for(;o>i;i++)r[i]&&r[i].promise&&O.isFunction(r[i].promise)?r[i].promise().then(n(i),l.reject,t(i)):--s
s||l.resolveWith(l,r)}else l!==e&&l.resolveWith(l,o?[e]:[])
return u}}),O.support=function(){{var t,n,r,i,o,a,s,l,u,c,f,d=D.createElement("div")
D.documentElement}if(d.setAttribute("className","t"),d.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!n.length||!r)return{}
i=D.createElement("select"),o=i.appendChild(D.createElement("option")),a=d.getElementsByTagName("input")[0],t={leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.55/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:"on"===a.value,optSelected:o.selected,getSetAttribute:"t"!==d.className,enctype:!!D.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==D.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},O.boxModel=t.boxModel="CSS1Compat"===D.compatMode,a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!o.disabled
try{delete d.test}catch(p){t.deleteExpando=!1}if(!d.addEventListener&&d.attachEvent&&d.fireEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).fireEvent("onclick")),a=D.createElement("input"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","checked"),a.setAttribute("name","t"),d.appendChild(a),s=D.createDocumentFragment(),s.appendChild(d.lastChild),t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=a.checked,s.removeChild(a),s.appendChild(d),d.attachEvent)for(c in{submit:1,change:1,focusin:1})u="on"+c,f=u in d,f||(d.setAttribute(u,"return;"),f="function"==typeof d[u]),t[c+"Bubbles"]=f
return s.removeChild(d),s=i=o=d=a=null,O(function(){var n,r,i,o,a,s,u,c,p,h,m,g,v=D.getElementsByTagName("body")[0]
!v||(u=1,g="padding:0;margin:0;border:",h="position:absolute;top:0;left:0;width:1px;height:1px;",m=g+"0;visibility:hidden;",c="style='"+h+g+"5px solid #000;",p="<div "+c+"display:block;'><div style='"+g+"0;display:block;overflow:hidden;'></div></div><table "+c+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",n=D.createElement("div"),n.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+u+"px",v.insertBefore(n,v.firstChild),d=D.createElement("div"),n.appendChild(d),d.innerHTML="<table><tr><td style='"+g+"0;display:none'></td><td>t</td></tr></table>",l=d.getElementsByTagName("td"),f=0===l[0].offsetHeight,l[0].style.display="",l[1].style.display="none",t.reliableHiddenOffsets=f&&0===l[0].offsetHeight,e.getComputedStyle&&(d.innerHTML="",s=D.createElement("div"),s.style.width="0",s.style.marginRight="0",d.style.width="2px",d.appendChild(s),t.reliableMarginRight=0===(parseInt((e.getComputedStyle(s,null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof d.style.zoom&&(d.innerHTML="",d.style.width=d.style.padding="1px",d.style.border=0,d.style.overflow="hidden",d.style.display="inline",d.style.zoom=1,t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div style='width:5px;'></div>",t.shrinkWrapBlocks=3!==d.offsetWidth),d.style.cssText=h+m,d.innerHTML=p,r=d.firstChild,i=r.firstChild,o=r.nextSibling.firstChild.firstChild,a={doesNotAddBorder:5!==i.offsetTop,doesAddBorderForTableAndCells:5===o.offsetTop},i.style.position="fixed",i.style.top="20px",a.fixedPosition=20===i.offsetTop||15===i.offsetTop,i.style.position=i.style.top="",r.style.overflow="hidden",r.style.position="relative",a.subtractsBorderForOverflowNotVisible=-5===i.offsetTop,a.doesNotIncludeMarginInBodyOffset=v.offsetTop!==u,e.getComputedStyle&&(d.style.marginTop="1%",t.pixelMargin="1%"!==(e.getComputedStyle(d,null)||{marginTop:0}).marginTop),"undefined"!=typeof n.style.zoom&&(n.style.zoom=1),v.removeChild(n),s=d=n=null,O.extend(t,a))}),t}()
var B=/^(?:\{.*\}|\[.*\])$/,H=/([A-Z])/g
O.extend({cache:{},uuid:0,expando:"jQuery"+(O.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?O.cache[e[O.expando]]:e[O.expando],!!e&&!j(e)},data:function(e,n,r,i){if(O.acceptData(e)){var o,a,s,l=O.expando,u="string"==typeof n,c=e.nodeType,f=c?O.cache:e,d=c?e[l]:e[l]&&l,p="events"===n
if(!(d&&f[d]&&(p||i||f[d].data)||!u||r!==t))return
return d||(c?e[l]=d=++O.uuid:d=l),f[d]||(f[d]={},c||(f[d].toJSON=O.noop)),("object"==typeof n||"function"==typeof n)&&(i?f[d]=O.extend(f[d],n):f[d].data=O.extend(f[d].data,n)),o=a=f[d],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[O.camelCase(n)]=r),p&&!a[n]?o.events:(u?(s=a[n],null==s&&(s=a[O.camelCase(n)])):s=a,s)}},removeData:function(e,t,n){if(O.acceptData(e)){var r,i,o,a=O.expando,s=e.nodeType,l=s?O.cache:e,u=s?e[a]:a
if(!l[u])return
if(t&&(r=n?l[u]:l[u].data)){O.isArray(t)||(t in r?t=[t]:(t=O.camelCase(t),t=t in r?[t]:t.split(" ")))
for(i=0,o=t.length;o>i;i++)delete r[t[i]]
if(!(n?j:O.isEmptyObject)(r))return}if(!n&&(delete l[u].data,!j(l[u])))return
O.support.deleteExpando||!l.setInterval?delete l[u]:l[u]=null,s&&(O.support.deleteExpando?delete e[a]:e.removeAttribute?e.removeAttribute(a):e[a]=null)}},_data:function(e,t,n){return O.data(e,t,n,!0)},acceptData:function(e){if(e.nodeName){var t=O.noData[e.nodeName.toLowerCase()]
if(t)return t!==!0&&e.getAttribute("classid")===t}return!0}}),O.fn.extend({data:function(e,n){var r,i,o,a,s,l=this[0],u=0,c=null
if(e===t){if(this.length&&(c=O.data(l),1===l.nodeType&&!O._data(l,"parsedAttrs"))){for(o=l.attributes,s=o.length;s>u;u++)a=o[u].name,0===a.indexOf("data-")&&(a=O.camelCase(a.substring(5)),L(l,a,c[a]))
O._data(l,"parsedAttrs",!0)}return c}return"object"==typeof e?this.each(function(){O.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",O.access(this,function(n){return n===t?(c=this.triggerHandler("getData"+i,[r[0]]),c===t&&l&&(c=O.data(l,e),c=L(l,e,c)),c===t&&r[1]?this.data(r[0]):c):(r[1]=n,void this.each(function(){var t=O(this)
t.triggerHandler("setData"+i,r),O.data(this,e,n),t.triggerHandler("changeData"+i,r)}))},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){O.removeData(this,e)})}}),O.extend({_mark:function(e,t){e&&(t=(t||"fx")+"mark",O._data(e,t,(O._data(e,t)||0)+1))},_unmark:function(e,t,n){if(e!==!0&&(n=t,t=e,e=!1),t){n=n||"fx"
var r=n+"mark",i=e?0:(O._data(t,r)||1)-1
i?O._data(t,r,i):(O.removeData(t,r,!0),A(t,n,"mark"))}},queue:function(e,t,n){var r
return e?(t=(t||"fx")+"queue",r=O._data(e,t),n&&(!r||O.isArray(n)?r=O._data(e,t,O.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=O.queue(e,t),r=n.shift(),i={}
"inprogress"===r&&(r=n.shift()),r&&("fx"===t&&n.unshift("inprogress"),O._data(e,t+".run",i),r.call(e,function(){O.dequeue(e,t)},i)),n.length||(O.removeData(e,t+"queue "+t+".run",!0),A(e,t,"queue"))}}),O.fn.extend({queue:function(e,n){var r=2
return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?O.queue(this[0],e):n===t?this:this.each(function(){var t=O.queue(this,e,n)
"fx"===e&&"inprogress"!==t[0]&&O.dequeue(this,e)})},dequeue:function(e){return this.each(function(){O.dequeue(this,e)})},delay:function(e,t){return e=O.fx?O.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e)
n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){function r(){--l||o.resolveWith(a,[a])}"string"!=typeof e&&(n=e,e=t),e=e||"fx"
for(var i,o=O.Deferred(),a=this,s=a.length,l=1,u=e+"defer",c=e+"queue",f=e+"mark";s--;)(i=O.data(a[s],u,t,!0)||(O.data(a[s],c,t,!0)||O.data(a[s],f,t,!0))&&O.data(a[s],u,O.Callbacks("once memory"),!0))&&(l++,i.add(r))
return r(),o.promise(n)}})
var R,$,I,W=/[\n\t\r]/g,z=/\s+/,U=/\r/g,X=/^(?:button|input)$/i,V=/^(?:button|input|object|select|textarea)$/i,Q=/^a(?:rea)?$/i,G=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Y=O.support.getSetAttribute
O.fn.extend({attr:function(e,t){return O.access(this,O.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){O.removeAttr(this,e)})},prop:function(e,t){return O.access(this,O.prop,e,t,arguments.length>1)},removeProp:function(e){return e=O.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a,s
if(O.isFunction(e))return this.each(function(t){O(this).addClass(e.call(this,t,this.className))})
if(e&&"string"==typeof e)for(t=e.split(z),n=0,r=this.length;r>n;n++)if(i=this[n],1===i.nodeType)if(i.className||1!==t.length){for(o=" "+i.className+" ",a=0,s=t.length;s>a;a++)~o.indexOf(" "+t[a]+" ")||(o+=t[a]+" ")
i.className=O.trim(o)}else i.className=e
return this},removeClass:function(e){var n,r,i,o,a,s,l
if(O.isFunction(e))return this.each(function(t){O(this).removeClass(e.call(this,t,this.className))})
if(e&&"string"==typeof e||e===t)for(n=(e||"").split(z),r=0,i=this.length;i>r;r++)if(o=this[r],1===o.nodeType&&o.className)if(e){for(a=(" "+o.className+" ").replace(W," "),s=0,l=n.length;l>s;s++)a=a.replace(" "+n[s]+" "," ")
o.className=O.trim(a)}else o.className=""
return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t
return this.each(O.isFunction(e)?function(n){O(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var i,o=0,a=O(this),s=t,l=e.split(z);i=l[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i)
else("undefined"===n||"boolean"===n)&&(this.className&&O._data(this,"__className__",this.className),this.className=this.className||e===!1?"":O._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>-1)return!0
return!1},val:function(e){var n,r,i,o=this[0]
return arguments.length?(i=O.isFunction(e),this.each(function(r){var o,a=O(this)
1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":O.isArray(o)&&(o=O.map(o,function(e){return null==e?"":e+""})),n=O.valHooks[this.type]||O.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))})):o?(n=O.valHooks[o.type]||O.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(U,""):null==r?"":r)):void 0}}),O.extend({valHooks:{option:{get:function(e){var t=e.attributes.value
return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,o=e.selectedIndex,a=[],s=e.options,l="select-one"===e.type
if(0>o)return null
for(n=l?o:0,r=l?o+1:s.length;r>n;n++)if(i=s[n],!(!i.selected||(O.support.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&O.nodeName(i.parentNode,"optgroup"))){if(t=O(i).val(),l)return t
a.push(t)}return l&&!a.length&&s.length?O(s[o]).val():a},set:function(e,t){var n=O.makeArray(t)
return O(e).find("option").each(function(){this.selected=O.inArray(O(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(e,n,r,i){var o,a,s,l=e.nodeType
return e&&3!==l&&8!==l&&2!==l?i&&n in O.attrFn?O(e)[n](r):"undefined"==typeof e.getAttribute?O.prop(e,n,r):(s=1!==l||!O.isXMLDoc(e),s&&(n=n.toLowerCase(),a=O.attrHooks[n]||(G.test(n)?$:R)),r!==t?null===r?void O.removeAttr(e,n):a&&"set"in a&&s&&(o=a.set(e,r,n))!==t?o:(e.setAttribute(n,""+r),r):a&&"get"in a&&s&&null!==(o=a.get(e,n))?o:(o=e.getAttribute(n),null===o?t:o)):void 0},removeAttr:function(e,t){var n,r,i,o,a,s=0
if(t&&1===e.nodeType)for(r=t.toLowerCase().split(z),o=r.length;o>s;s++)i=r[s],i&&(n=O.propFix[i]||i,a=G.test(i),a||O.attr(e,i,""),e.removeAttribute(Y?i:n),a&&n in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){if(X.test(e.nodeName)&&e.parentNode)O.error("type property can't be changed")
else if(!O.support.radioValue&&"radio"===t&&O.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return R&&O.nodeName(e,"button")?R.get(e,t):t in e?e.value:null},set:function(e,t,n){return R&&O.nodeName(e,"button")?R.set(e,t,n):void(e.value=t)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType
return e&&3!==s&&8!==s&&2!==s?(a=1!==s||!O.isXMLDoc(e),a&&(n=O.propFix[n]||n,o=O.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]):void 0},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex")
return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Q.test(e.nodeName)&&e.href?0:t}}}}),O.attrHooks.tabindex=O.propHooks.tabIndex,$={get:function(e,n){var r,i=O.prop(e,n)
return i===!0||"boolean"!=typeof i&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r
return t===!1?O.removeAttr(e,n):(r=O.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},Y||(I={name:!0,id:!0,coords:!0},R=O.valHooks.button={get:function(e,n){var r
return r=e.getAttributeNode(n),r&&(I[n]?""!==r.nodeValue:r.specified)?r.nodeValue:t},set:function(e,t,n){var r=e.getAttributeNode(n)
return r||(r=D.createAttribute(n),e.setAttributeNode(r)),r.nodeValue=t+""}},O.attrHooks.tabindex.set=R.set,O.each(["width","height"],function(e,t){O.attrHooks[t]=O.extend(O.attrHooks[t],{set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}})}),O.attrHooks.contenteditable={get:R.get,set:function(e,t,n){""===t&&(t="false"),R.set(e,t,n)}}),O.support.hrefNormalized||O.each(["href","src","width","height"],function(e,n){O.attrHooks[n]=O.extend(O.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2)
return null===r?t:r}})}),O.support.style||(O.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),O.support.optSelected||(O.propHooks.selected=O.extend(O.propHooks.selected,{get:function(e){var t=e.parentNode
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),O.support.enctype||(O.propFix.enctype="encoding"),O.support.checkOn||O.each(["radio","checkbox"],function(){O.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),O.each(["radio","checkbox"],function(){O.valHooks[this]=O.extend(O.valHooks[this],{set:function(e,t){return O.isArray(t)?e.checked=O.inArray(O(e).val(),t)>=0:void 0}})})
var J=/^(?:textarea|input|select)$/i,K=/^([^\.]*)?(?:\.(.+))?$/,Z=/(?:^|\s)hover(\.\S+)?\b/,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,it=function(e){var t=rt.exec(e)
return t&&(t[1]=(t[1]||"").toLowerCase(),t[3]=t[3]&&new RegExp("(?:^|\\s)"+t[3]+"(?:\\s|$)")),t},ot=function(e,t){var n=e.attributes||{}
return!(t[1]&&e.nodeName.toLowerCase()!==t[1]||t[2]&&(n.id||{}).value!==t[2]||t[3]&&!t[3].test((n["class"]||{}).value))},at=function(e){return O.event.special.hover?e:e.replace(Z,"mouseenter$1 mouseleave$1")}
O.event={add:function(e,n,r,i,o){var a,s,l,u,c,f,d,p,h,m,g
if(3!==e.nodeType&&8!==e.nodeType&&n&&r&&(a=O._data(e))){for(r.handler&&(h=r,r=h.handler,o=h.selector),r.guid||(r.guid=O.guid++),l=a.events,l||(a.events=l={}),s=a.handle,s||(a.handle=s=function(e){return"undefined"==typeof O||e&&O.event.triggered===e.type?t:O.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=O.trim(at(n)).split(" "),u=0;u<n.length;u++)c=K.exec(n[u])||[],f=c[1],d=(c[2]||"").split(".").sort(),g=O.event.special[f]||{},f=(o?g.delegateType:g.bindType)||f,g=O.event.special[f]||{},p=O.extend({type:f,origType:c[1],data:i,handler:r,guid:r.guid,selector:o,quick:o&&it(o),namespace:d.join(".")},h),m=l[f],m||(m=l[f]=[],m.delegateCount=0,g.setup&&g.setup.call(e,i,d,s)!==!1||(e.addEventListener?e.addEventListener(f,s,!1):e.attachEvent&&e.attachEvent("on"+f,s))),g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o?m.splice(m.delegateCount++,0,p):m.push(p),O.event.global[f]=!0
e=null}},global:{},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,d,p,h,m,g,v=O.hasData(e)&&O._data(e)
if(v&&(d=v.events)){for(t=O.trim(at(t||"")).split(" "),o=0;o<t.length;o++)if(a=K.exec(t[o])||[],s=l=a[1],u=a[2],s){for(p=O.event.special[s]||{},s=(r?p.delegateType:p.bindType)||s,m=d[s]||[],c=m.length,u=u?new RegExp("(^|\\.)"+u.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,f=0;f<m.length;f++)g=m[f],!(!i&&l!==g.origType||n&&n.guid!==g.guid||u&&!u.test(g.namespace)||r&&r!==g.selector&&("**"!==r||!g.selector)||(m.splice(f--,1),g.selector&&m.delegateCount--,!p.remove||!p.remove.call(e,g)))
0===m.length&&c!==m.length&&((!p.teardown||p.teardown.call(e,u)===!1)&&O.removeEvent(e,s,v.handle),delete d[s])}else for(s in d)O.event.remove(e,s+t[o],n,r,!0)
O.isEmptyObject(d)&&(h=v.handle,h&&(h.elem=null),O.removeData(e,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,o){if(!i||3!==i.nodeType&&8!==i.nodeType){var a,s,l,u,c,f,d,p,h,m,g=n.type||n,v=[]
if(nt.test(g+O.event.triggered))return
if(g.indexOf("!")>=0&&(g=g.slice(0,-1),s=!0),g.indexOf(".")>=0&&(v=g.split("."),g=v.shift(),v.sort()),(!i||O.event.customEvent[g])&&!O.event.global[g])return
if(n="object"==typeof n?n[O.expando]?n:new O.Event(g,n):new O.Event(g),n.type=g,n.isTrigger=!0,n.exclusive=s,n.namespace=v.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,f=g.indexOf(":")<0?"on"+g:"",!i){a=O.cache
for(l in a)a[l].events&&a[l].events[g]&&O.event.trigger(n,r,a[l].handle.elem,!0)
return}if(n.result=t,n.target||(n.target=i),r=null!=r?O.makeArray(r):[],r.unshift(n),d=O.event.special[g]||{},d.trigger&&d.trigger.apply(i,r)===!1)return
if(h=[[i,d.bindType||g]],!o&&!d.noBubble&&!O.isWindow(i)){for(m=d.delegateType||g,u=nt.test(m+g)?i:i.parentNode,c=null;u;u=u.parentNode)h.push([u,m]),c=u
c&&c===i.ownerDocument&&h.push([c.defaultView||c.parentWindow||e,m])}for(l=0;l<h.length&&!n.isPropagationStopped();l++)u=h[l][0],n.type=h[l][1],p=(O._data(u,"events")||{})[n.type]&&O._data(u,"handle"),p&&p.apply(u,r),p=f&&u[f],p&&O.acceptData(u)&&p.apply(u,r)===!1&&n.preventDefault()
return n.type=g,!(o||n.isDefaultPrevented()||d._default&&d._default.apply(i.ownerDocument,r)!==!1||"click"===g&&O.nodeName(i,"a")||!O.acceptData(i)||!f||!i[g]||("focus"===g||"blur"===g)&&0===n.target.offsetWidth||O.isWindow(i)||(c=i[f],c&&(i[f]=null),O.event.triggered=g,i[g](),O.event.triggered=t,!c||!(i[f]=c))),n.result}},dispatch:function(n){n=O.event.fix(n||e.event)
var r,i,o,a,s,l,u,c,f,d,p=(O._data(this,"events")||{})[n.type]||[],h=p.delegateCount,m=[].slice.call(arguments,0),g=!n.exclusive&&!n.namespace,v=O.event.special[n.type]||{},y=[]
if(m[0]=n,n.delegateTarget=this,!v.preDispatch||v.preDispatch.call(this,n)!==!1){if(h&&(!n.button||"click"!==n.type))for(a=O(this),a.context=this.ownerDocument||this,o=n.target;o!=this;o=o.parentNode||this)if(o.disabled!==!0){for(l={},c=[],a[0]=o,r=0;h>r;r++)f=p[r],d=f.selector,l[d]===t&&(l[d]=f.quick?ot(o,f.quick):a.is(d)),l[d]&&c.push(f)
c.length&&y.push({elem:o,matches:c})}for(p.length>h&&y.push({elem:this,matches:p.slice(h)}),r=0;r<y.length&&!n.isPropagationStopped();r++)for(u=y[r],n.currentTarget=u.elem,i=0;i<u.matches.length&&!n.isImmediatePropagationStopped();i++)f=u.matches[i],(g||!n.namespace&&!f.namespace||n.namespace_re&&n.namespace_re.test(f.namespace))&&(n.data=f.data,n.handleObj=f,s=((O.event.special[f.origType]||{}).handle||f.handler).apply(u.elem,m),s!==t&&(n.result=s,s===!1&&(n.preventDefault(),n.stopPropagation())))
return v.postDispatch&&v.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement
return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||D,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),!e.which&&a!==t&&(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[O.expando])return e
var n,r,i=e,o=O.event.fixHooks[e.type]||{},a=o.props?this.props.concat(o.props):this.props
for(e=O.Event(i),n=a.length;n;)r=a[--n],e[r]=i[r]
return e.target||(e.target=i.srcElement||D),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey===t&&(e.metaKey=e.ctrlKey),o.filter?o.filter(e,i):e},special:{ready:{setup:O.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){O.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=O.extend(new O.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
r?O.event.trigger(i,null,t):O.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},O.event.handle=O.event.dispatch,O.removeEvent=D.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},O.Event=function(e,t){return this instanceof O.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?k:S):this.type=e,t&&O.extend(this,t),this.timeStamp=e&&e.timeStamp||O.now(),this[O.expando]=!0,void 0):new O.Event(e,t)},O.Event.prototype={preventDefault:function(){this.isDefaultPrevented=k
var e=this.originalEvent
!e||(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=k
var e=this.originalEvent
!e||(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=k,this.stopPropagation()},isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S},O.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){O.event.special[e]={delegateType:t,bindType:t,handle:function(e){{var n,r=this,i=e.relatedTarget,o=e.handleObj
o.selector}return(!i||i!==r&&!O.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),O.support.submitBubbles||(O.event.special.submit={setup:function(){return O.nodeName(this,"form")?!1:void O.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=O.nodeName(n,"input")||O.nodeName(n,"button")?n.form:t
r&&!r._submit_attached&&(O.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),r._submit_attached=!0)})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&O.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return O.nodeName(this,"form")?!1:void O.event.remove(this,"._submit")}}),O.support.changeBubbles||(O.event.special.change={setup:function(){return J.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(O.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),O.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1,O.event.simulate("change",this,e,!0))})),!1):void O.event.add(this,"beforeactivate._change",function(e){var t=e.target
J.test(t.nodeName)&&!t._change_attached&&(O.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&O.event.simulate("change",this.parentNode,e,!0)}),t._change_attached=!0)})},handle:function(e){var t=e.target
return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return O.event.remove(this,"._change"),J.test(this.nodeName)}}),O.support.focusinBubbles||O.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){O.event.simulate(t,e.target,O.event.fix(e),!0)}
O.event.special[t]={setup:function(){0===n++&&D.addEventListener(e,r,!0)},teardown:function(){0===--n&&D.removeEventListener(e,r,!0)}}}),O.fn.extend({on:function(e,n,r,i,o){var a,s
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t)
for(s in e)this.on(s,n,r,e[s],o)
return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=S
else if(!i)return this
return 1===o&&(a=i,i=function(e){return O().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=O.guid++)),this.each(function(){O.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){if(e&&e.preventDefault&&e.handleObj){var i=e.handleObj
return O(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if("object"==typeof e){for(var o in e)this.off(o,n,e[o])
return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=S),this.each(function(){O.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return O(this.context).on(e,this.selector,t,n),this},die:function(e,t){return O(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1==arguments.length?this.off(e,"**"):this.off(t,e,n)},trigger:function(e,t){return this.each(function(){O.event.trigger(e,t,this)})},triggerHandler:function(e,t){return this[0]?O.event.trigger(e,t,this[0],!0):void 0},toggle:function(e){var t=arguments,n=e.guid||O.guid++,r=0,i=function(n){var i=(O._data(this,"lastToggle"+e.guid)||0)%r
return O._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1}
for(i.guid=n;r<t.length;)t[r++].guid=n
return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),O.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){O.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},O.attrFn&&(O.attrFn[t]=!0),et.test(t)&&(O.event.fixHooks[t]=O.event.keyHooks),tt.test(t)&&(O.event.fixHooks[t]=O.event.mouseHooks)}),function(){function e(e,t,n,r,o,a){for(var s=0,l=r.length;l>s;s++){var u=r[s]
if(u){var c=!1
for(u=u[e];u;){if(u[i]===n){c=r[u.sizset]
break}if(1===u.nodeType)if(a||(u[i]=n,u.sizset=s),"string"!=typeof t){if(u===t){c=!0
break}}else if(d.filter(t,[u]).length>0){c=u
break}u=u[e]}r[s]=c}}}function n(e,t,n,r,o,a){for(var s=0,l=r.length;l>s;s++){var u=r[s]
if(u){var c=!1
for(u=u[e];u;){if(u[i]===n){c=r[u.sizset]
break}if(1===u.nodeType&&!a&&(u[i]=n,u.sizset=s),u.nodeName.toLowerCase()===t){c=u
break}u=u[e]}r[s]=c}}}var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i="sizcache"+(Math.random()+"").replace(".",""),o=0,a=Object.prototype.toString,s=!1,l=!0,u=/\\/g,c=/\r\n/g,f=/\W/;[0,0].sort(function(){return l=!1,0})
var d=function(e,t,n,i){n=n||[],t=t||D
var o=t
if(1!==t.nodeType&&9!==t.nodeType)return[]
if(!e||"string"!=typeof e)return n
var s,l,u,c,f,p,g,v,b=!0,x=d.isXML(t),w=[],N=e
do if(r.exec(""),s=r.exec(N),s&&(N=s[3],w.push(s[1]),s[2])){c=s[3]
break}while(s)
if(w.length>1&&m.exec(e))if(2===w.length&&h.relative[w[0]])l=T(w[0]+w[1],t,i)
else for(l=h.relative[w[0]]?[t]:d(w.shift(),t);w.length;)e=w.shift(),h.relative[e]&&(e+=w.shift()),l=T(e,l,i)
else if(!i&&w.length>1&&9===t.nodeType&&!x&&h.match.ID.test(w[0])&&!h.match.ID.test(w[w.length-1])&&(f=d.find(w.shift(),t,x),t=f.expr?d.filter(f.expr,f.set)[0]:f.set[0]),t)for(f=i?{expr:w.pop(),set:y(i)}:d.find(w.pop(),1!==w.length||"~"!==w[0]&&"+"!==w[0]||!t.parentNode?t:t.parentNode,x),l=f.expr?d.filter(f.expr,f.set):f.set,w.length>0?u=y(l):b=!1;w.length;)p=w.pop(),g=p,h.relative[p]?g=w.pop():p="",null==g&&(g=t),h.relative[p](u,g,x)
else u=w=[]
if(u||(u=l),u||d.error(p||e),"[object Array]"===a.call(u))if(b)if(t&&1===t.nodeType)for(v=0;null!=u[v];v++)u[v]&&(u[v]===!0||1===u[v].nodeType&&d.contains(t,u[v]))&&n.push(l[v])
else for(v=0;null!=u[v];v++)u[v]&&1===u[v].nodeType&&n.push(l[v])
else n.push.apply(n,u)
else y(u,n)
return c&&(d(c,o,n,i),d.uniqueSort(n)),n}
d.uniqueSort=function(e){if(x&&(s=l,e.sort(x),s))for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1)
return e},d.matches=function(e,t){return d(e,null,null,t)},d.matchesSelector=function(e,t){return d(t,null,null,[e]).length>0},d.find=function(e,t,n){var r,i,o,a,s,l
if(!e)return[]
for(i=0,o=h.order.length;o>i;i++)if(s=h.order[i],(a=h.leftMatch[s].exec(e))&&(l=a[1],a.splice(1,1),"\\"!==l.substr(l.length-1)&&(a[1]=(a[1]||"").replace(u,""),r=h.find[s](a,t,n),null!=r))){e=e.replace(h.match[s],"")
break}return r||(r="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName("*"):[]),{set:r,expr:e}},d.filter=function(e,n,r,i){for(var o,a,s,l,u,c,f,p,m,g=e,v=[],y=n,b=n&&n[0]&&d.isXML(n[0]);e&&n.length;){for(s in h.filter)if(null!=(o=h.leftMatch[s].exec(e))&&o[2]){if(c=h.filter[s],f=o[1],a=!1,o.splice(1,1),"\\"===f.substr(f.length-1))continue
if(y===v&&(v=[]),h.preFilter[s])if(o=h.preFilter[s](o,y,r,v,i,b)){if(o===!0)continue}else a=l=!0
if(o)for(p=0;null!=(u=y[p]);p++)u&&(l=c(u,o,p,y),m=i^l,r&&null!=l?m?a=!0:y[p]=!1:m&&(v.push(u),a=!0))
if(l!==t){if(r||(y=v),e=e.replace(h.match[s],""),!a)return[]
break}}if(e===g){if(null!=a)break
d.error(e)}g=e}return y},d.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
var p=d.getText=function(e){var t,n,r=e.nodeType,i=""
if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent
if("string"==typeof e.innerText)return e.innerText.replace(c,"")
for(e=e.firstChild;e;e=e.nextSibling)i+=p(e)}else if(3===r||4===r)return e.nodeValue}else for(t=0;n=e[t];t++)8!==n.nodeType&&(i+=p(n))
return i},h=d.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n="string"==typeof t,r=n&&!f.test(t),i=n&&!r
r&&(t=t.toLowerCase())
for(var o,a=0,s=e.length;s>a;a++)if(o=e[a]){for(;(o=o.previousSibling)&&1!==o.nodeType;);e[a]=i||o&&o.nodeName.toLowerCase()===t?o||!1:o===t}i&&d.filter(t,e,!0)},">":function(e,t){var n,r="string"==typeof t,i=0,o=e.length
if(r&&!f.test(t)){for(t=t.toLowerCase();o>i;i++)if(n=e[i]){var a=n.parentNode
e[i]=a.nodeName.toLowerCase()===t?a:!1}}else{for(;o>i;i++)n=e[i],n&&(e[i]=r?n.parentNode:n.parentNode===t)
r&&d.filter(t,e,!0)}},"":function(t,r,i){var a,s=o++,l=e
"string"==typeof r&&!f.test(r)&&(r=r.toLowerCase(),a=r,l=n),l("parentNode",r,s,t,a,i)},"~":function(t,r,i){var a,s=o++,l=e
"string"==typeof r&&!f.test(r)&&(r=r.toLowerCase(),a=r,l=n),l("previousSibling",r,s,t,a,i)}},find:{ID:function(e,t,n){if("undefined"!=typeof t.getElementById&&!n){var r=t.getElementById(e[1])
return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if("undefined"!=typeof t.getElementsByName){for(var n=[],r=t.getElementsByName(e[1]),i=0,o=r.length;o>i;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i])
return 0===n.length?null:n}},TAG:function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e[1]):void 0}},preFilter:{CLASS:function(e,t,n,r,i,o){if(e=" "+e[1].replace(u,"")+" ",o)return e
for(var a,s=0;null!=(a=t[s]);s++)a&&(i^(a.className&&(" "+a.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(a):n&&(t[s]=!1))
return!1},ID:function(e){return e[1].replace(u,"")},TAG:function(e){return e[1].replace(u,"").toLowerCase()},CHILD:function(e){if("nth"===e[1]){e[2]||d.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"")
var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===e[2]&&"2n"||"odd"===e[2]&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2])
e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&d.error(e[0])
return e[0]=o++,e},ATTR:function(e,t,n,r,i,o){var a=e[1]=e[1].replace(u,"")
return!o&&h.attrMap[a]&&(e[1]=h.attrMap[a]),e[4]=(e[4]||e[5]||"").replace(u,""),"~="===e[2]&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(e,t,n,i,o){if("not"===e[1]){if(!((r.exec(e[3])||"").length>1||/^\w/.test(e[3]))){var a=d.filter(e[3],t,n,!0^o)
return n||i.push.apply(i,a),!1}e[3]=d(e[3],null,null,t)}else if(h.match.POS.test(e[0])||h.match.CHILD.test(e[0]))return!0
return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&"hidden"!==e.type},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!d(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type
return"input"===e.nodeName.toLowerCase()&&"text"===n&&(t===n||null===t)},radio:function(e){return"input"===e.nodeName.toLowerCase()&&"radio"===e.type},checkbox:function(e){return"input"===e.nodeName.toLowerCase()&&"checkbox"===e.type},file:function(e){return"input"===e.nodeName.toLowerCase()&&"file"===e.type},password:function(e){return"input"===e.nodeName.toLowerCase()&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase()
return("input"===t||"button"===t)&&"submit"===e.type},image:function(e){return"input"===e.nodeName.toLowerCase()&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase()
return("input"===t||"button"===t)&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return 0===t},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],o=h.filters[i]
if(o)return o(e,n,t,r)
if("contains"===i)return(e.textContent||e.innerText||p([e])||"").indexOf(t[3])>=0
if("not"===i){for(var a=t[3],s=0,l=a.length;l>s;s++)if(a[s]===e)return!1
return!0}d.error(i)},CHILD:function(e,t){var n,r,o,a,s,l,u=t[1],c=e
switch(u){case"only":case"first":for(;c=c.previousSibling;)if(1===c.nodeType)return!1
if("first"===u)return!0
c=e
case"last":for(;c=c.nextSibling;)if(1===c.nodeType)return!1
return!0
case"nth":if(n=t[2],r=t[3],1===n&&0===r)return!0
if(o=t[0],a=e.parentNode,a&&(a[i]!==o||!e.nodeIndex)){for(s=0,c=a.firstChild;c;c=c.nextSibling)1===c.nodeType&&(c.nodeIndex=++s)
a[i]=o}return l=e.nodeIndex-r,0===n?0===l:l%n===0&&l/n>=0}},ID:function(e,t){return 1===e.nodeType&&e.getAttribute("id")===t},TAG:function(e,t){return"*"===t&&1===e.nodeType||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=d.attr?d.attr(e,n):h.attrHandle[n]?h.attrHandle[n](e):null!=e[n]?e[n]:e.getAttribute(n),i=r+"",o=t[2],a=t[4]
return null==r?"!="===o:!o&&d.attr?null!=r:"="===o?i===a:"*="===o?i.indexOf(a)>=0:"~="===o?(" "+i+" ").indexOf(a)>=0:a?"!="===o?i!==a:"^="===o?0===i.indexOf(a):"$="===o?i.substr(i.length-a.length)===a:"|="===o?i===a||i.substr(0,a.length+1)===a+"-":!1:i&&r!==!1},POS:function(e,t,n,r){var i=t[2],o=h.setFilters[i]
return o?o(e,n,t,r):void 0}}},m=h.match.POS,g=function(e,t){return"\\"+(t-0+1)}
for(var v in h.match)h.match[v]=new RegExp(h.match[v].source+/(?![^\[]*\])(?![^\(]*\))/.source),h.leftMatch[v]=new RegExp(/(^(?:.|\r|\n)*?)/.source+h.match[v].source.replace(/\\(\d+)/g,g))
h.match.globalPOS=m
var y=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e}
try{Array.prototype.slice.call(D.documentElement.childNodes,0)[0].nodeType}catch(b){y=function(e,t){var n=0,r=t||[]
if("[object Array]"===a.call(e))Array.prototype.push.apply(r,e)
else if("number"==typeof e.length)for(var i=e.length;i>n;n++)r.push(e[n])
else for(;e[n];n++)r.push(e[n])
return r}}var x,w
D.documentElement.compareDocumentPosition?x=function(e,t){return e===t?(s=!0,0):e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t)?-1:1:e.compareDocumentPosition?-1:1}:(x=function(e,t){if(e===t)return s=!0,0
if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex
var n,r,i=[],o=[],a=e.parentNode,l=t.parentNode,u=a
if(a===l)return w(e,t)
if(!a)return-1
if(!l)return 1
for(;u;)i.unshift(u),u=u.parentNode
for(u=l;u;)o.unshift(u),u=u.parentNode
n=i.length,r=o.length
for(var c=0;n>c&&r>c;c++)if(i[c]!==o[c])return w(i[c],o[c])
return c===n?w(e,o[c],-1):w(i[c],t,1)},w=function(e,t,n){if(e===t)return n
for(var r=e.nextSibling;r;){if(r===t)return-1
r=r.nextSibling}return 1}),function(){var e=D.createElement("div"),n="script"+(new Date).getTime(),r=D.documentElement
e.innerHTML="<a name='"+n+"'/>",r.insertBefore(e,r.firstChild),D.getElementById(n)&&(h.find.ID=function(e,n,r){if("undefined"!=typeof n.getElementById&&!r){var i=n.getElementById(e[1])
return i?i.id===e[1]||"undefined"!=typeof i.getAttributeNode&&i.getAttributeNode("id").nodeValue===e[1]?[i]:t:[]}},h.filter.ID=function(e,t){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id")
return 1===e.nodeType&&n&&n.nodeValue===t}),r.removeChild(e),r=e=null}(),function(){var e=D.createElement("div")
e.appendChild(D.createComment("")),e.getElementsByTagName("*").length>0&&(h.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1])
if("*"===e[1]){for(var r=[],i=0;n[i];i++)1===n[i].nodeType&&r.push(n[i])
n=r}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&"undefined"!=typeof e.firstChild.getAttribute&&"#"!==e.firstChild.getAttribute("href")&&(h.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null}(),D.querySelectorAll&&function(){var e=d,t=D.createElement("div"),n="__sizzle__"
if(t.innerHTML="<p class='TEST'></p>",!t.querySelectorAll||0!==t.querySelectorAll(".TEST").length){d=function(t,r,i,o){if(r=r||D,!o&&!d.isXML(r)){var a=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t)
if(a&&(1===r.nodeType||9===r.nodeType)){if(a[1])return y(r.getElementsByTagName(t),i)
if(a[2]&&h.find.CLASS&&r.getElementsByClassName)return y(r.getElementsByClassName(a[2]),i)}if(9===r.nodeType){if("body"===t&&r.body)return y([r.body],i)
if(a&&a[3]){var s=r.getElementById(a[3])
if(!s||!s.parentNode)return y([],i)
if(s.id===a[3])return y([s],i)}try{return y(r.querySelectorAll(t),i)}catch(l){}}else if(1===r.nodeType&&"object"!==r.nodeName.toLowerCase()){var u=r,c=r.getAttribute("id"),f=c||n,p=r.parentNode,m=/^\s*[+~]/.test(t)
c?f=f.replace(/'/g,"\\$&"):r.setAttribute("id",f),m&&p&&(r=r.parentNode)
try{if(!m||p)return y(r.querySelectorAll("[id='"+f+"'] "+t),i)}catch(g){}finally{c||u.removeAttribute("id")}}}return e(t,r,i,o)}
for(var r in e)d[r]=e[r]
t=null}}(),function(){var e=D.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector
if(t){var n=!t.call(D.createElement("div"),"div"),r=!1
try{t.call(D.documentElement,"[test!='']:sizzle")}catch(i){r=!0}d.matchesSelector=function(e,i){if(i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!d.isXML(e))try{if(r||!h.match.PSEUDO.test(i)&&!/!=/.test(i)){var o=t.call(e,i)
if(o||!n||e.document&&11!==e.document.nodeType)return o}}catch(a){}return d(i,null,null,[e]).length>0}}}(),function(){var e=D.createElement("div")
if(e.innerHTML="<div class='test e'></div><div class='test'></div>",e.getElementsByClassName&&0!==e.getElementsByClassName("e").length){if(e.lastChild.className="e",1===e.getElementsByClassName("e").length)return
h.order.splice(1,0,"CLASS"),h.find.CLASS=function(e,t,n){return"undefined"==typeof t.getElementsByClassName||n?void 0:t.getElementsByClassName(e[1])},e=null}}(),d.contains=D.documentElement.contains?function(e,t){return e!==t&&(e.contains?e.contains(t):!0)}:D.documentElement.compareDocumentPosition?function(e,t){return!!(16&e.compareDocumentPosition(t))}:function(){return!1},d.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement
return t?"HTML"!==t.nodeName:!1}
var T=function(e,t,n){for(var r,i=[],o="",a=t.nodeType?[t]:t;r=h.match.PSEUDO.exec(e);)o+=r[0],e=e.replace(h.match.PSEUDO,"")
e=h.relative[e]?e+"*":e
for(var s=0,l=a.length;l>s;s++)d(e,a[s],i,n)
return d.filter(o,i)}
d.attr=O.attr,d.selectors.attrMap={},O.find=d,O.expr=d.selectors,O.expr[":"]=O.expr.filters,O.unique=d.uniqueSort,O.text=d.getText,O.isXMLDoc=d.isXML,O.contains=d.contains}()
var st=/Until$/,lt=/^(?:parents|prevUntil|prevAll)/,ut=/,/,ct=/^.[^:#\[\.,]*$/,ft=Array.prototype.slice,dt=O.expr.match.globalPOS,pt={children:!0,contents:!0,next:!0,prev:!0}
O.fn.extend({find:function(e){var t,n,r=this
if("string"!=typeof e)return O(e).filter(function(){for(t=0,n=r.length;n>t;t++)if(O.contains(r[t],this))return!0})
var i,o,a,s=this.pushStack("","find",e)
for(t=0,n=this.length;n>t;t++)if(i=s.length,O.find(e,this[t],s),t>0)for(o=i;o<s.length;o++)for(a=0;i>a;a++)if(s[a]===s[o]){s.splice(o--,1)
break}return s},has:function(e){var t=O(e)
return this.filter(function(){for(var e=0,n=t.length;n>e;e++)if(O.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(E(this,e,!1),"not",e)},filter:function(e){return this.pushStack(E(this,e,!0),"filter",e)},is:function(e){return!!e&&("string"==typeof e?dt.test(e)?O(e,this.context).index(this[0])>=0:O.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r,i=[],o=this[0]
if(O.isArray(e)){for(var a=1;o&&o.ownerDocument&&o!==t;){for(n=0;n<e.length;n++)O(o).is(e[n])&&i.push({selector:e[n],elem:o,level:a})
o=o.parentNode,a++}return i}var s=dt.test(e)||"string"!=typeof e?O(e,t||this.context):0
for(n=0,r=this.length;r>n;n++)for(o=this[n];o;){if(s?s.index(o)>-1:O.find.matchesSelector(o,e)){i.push(o)
break}if(o=o.parentNode,!o||!o.ownerDocument||o===t||11===o.nodeType)break}return i=i.length>1?O.unique(i):i,this.pushStack(i,"closest",e)},index:function(e){return e?"string"==typeof e?O.inArray(this[0],O(e)):O.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?O(e,t):O.makeArray(e&&e.nodeType?[e]:e),r=O.merge(this.get(),n)
return this.pushStack(C(n[0])||C(r[0])?r:O.unique(r))},andSelf:function(){return this.add(this.prevObject)}}),O.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return O.dir(e,"parentNode")},parentsUntil:function(e,t,n){return O.dir(e,"parentNode",n)},next:function(e){return O.nth(e,2,"nextSibling")},prev:function(e){return O.nth(e,2,"previousSibling")},nextAll:function(e){return O.dir(e,"nextSibling")},prevAll:function(e){return O.dir(e,"previousSibling")},nextUntil:function(e,t,n){return O.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return O.dir(e,"previousSibling",n)},siblings:function(e){return O.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return O.sibling(e.firstChild)},contents:function(e){return O.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:O.makeArray(e.childNodes)}},function(e,t){O.fn[e]=function(n,r){var i=O.map(this,t,n)
return st.test(e)||(r=n),r&&"string"==typeof r&&(i=O.filter(r,i)),i=this.length>1&&!pt[e]?O.unique(i):i,(this.length>1||ut.test(r))&&lt.test(e)&&(i=i.reverse()),this.pushStack(i,e,ft.call(arguments).join(","))}}),O.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?O.find.matchesSelector(t[0],e)?[t[0]]:[]:O.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!O(o).is(r));)1===o.nodeType&&i.push(o),o=o[n]
return i},nth:function(e,t,n){t=t||1
for(var r=0;e&&(1!==e.nodeType||++r!==t);e=e[n]);return e},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}})
var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",mt=/ jQuery\d+="(?:\d+|null)"/g,gt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,yt=/<([\w:]+)/,bt=/<tbody/i,xt=/<|&#?\w+;/,wt=/<(?:script|style)/i,Tt=/<(?:script|object|embed|option|style)/i,Nt=new RegExp("<(?:"+ht+")[\\s/>]","i"),Et=/checked\s*(?:[^=]|=\s*.checked.)/i,Ct=/\/(java|ecma)script/i,kt=/^\s*<!(?:\[CDATA\[|\-\-)/,St={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},At=N(D)
St.optgroup=St.option,St.tbody=St.tfoot=St.colgroup=St.caption=St.thead,St.th=St.td,O.support.htmlSerialize||(St._default=[1,"div<div>","</div>"]),O.fn.extend({text:function(e){return O.access(this,function(e){return e===t?O.text(this):this.empty().append((this[0]&&this[0].ownerDocument||D).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(O.isFunction(e))return this.each(function(t){O(this).wrapAll(e.call(this,t))})
if(this[0]){var t=O(e,this[0].ownerDocument).eq(0).clone(!0)
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild
return e}).append(this)}return this},wrapInner:function(e){return this.each(O.isFunction(e)?function(t){O(this).wrapInner(e.call(this,t))}:function(){var t=O(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=O.isFunction(e)
return this.each(function(n){O(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){O.nodeName(this,"body")||O(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){1===this.nodeType&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)})
if(arguments.length){var e=O.clean(arguments)
return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)})
if(arguments.length){var e=this.pushStack(this,"after",arguments)
return e.push.apply(e,O.clean(arguments)),e}},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||O.filter(e,[n]).length)&&(!t&&1===n.nodeType&&(O.cleanData(n.getElementsByTagName("*")),O.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&O.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild)
return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return O.clone(this,e,t)})},html:function(e){return O.access(this,function(e){var n=this[0]||{},r=0,i=this.length
if(e===t)return 1===n.nodeType?n.innerHTML.replace(mt,""):null
if(!("string"!=typeof e||wt.test(e)||!O.support.leadingWhitespace&&gt.test(e)||St[(yt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>")
try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(O.cleanData(n.getElementsByTagName("*")),n.innerHTML=e)
n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return this[0]&&this[0].parentNode?O.isFunction(e)?this.each(function(t){var n=O(this),r=n.html()
n.replaceWith(e.call(this,t,r))}):("string"!=typeof e&&(e=O(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode
O(this).remove(),t?O(t).before(e):O(n).append(e)})):this.length?this.pushStack(O(O.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,o,a,s,l=e[0],u=[]
if(!O.support.checkClone&&3===arguments.length&&"string"==typeof l&&Et.test(l))return this.each(function(){O(this).domManip(e,n,r,!0)})
if(O.isFunction(l))return this.each(function(i){var o=O(this)
e[0]=l.call(this,i,n?o.html():t),o.domManip(e,n,r)})
if(this[0]){if(s=l&&l.parentNode,i=O.support.parentNode&&s&&11===s.nodeType&&s.childNodes.length===this.length?{fragment:s}:O.buildFragment(e,this,u),a=i.fragment,o=1===a.childNodes.length?a=a.firstChild:a.firstChild,o){n=n&&O.nodeName(o,"tr")
for(var c=0,f=this.length,d=f-1;f>c;c++)r.call(n?T(this[c],o):this[c],i.cacheable||f>1&&d>c?O.clone(a,!0,!0):a)}u.length&&O.each(u,function(e,t){t.src?O.ajax({type:"GET",global:!1,url:t.src,async:!1,dataType:"script"}):O.globalEval((t.text||t.textContent||t.innerHTML||"").replace(kt,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),O.buildFragment=function(e,t,n){var r,i,o,a,s=e[0]
return t&&t[0]&&(a=t[0].ownerDocument||t[0]),a.createDocumentFragment||(a=D),1===e.length&&"string"==typeof s&&s.length<512&&a===D&&"<"===s.charAt(0)&&!Tt.test(s)&&(O.support.checkClone||!Et.test(s))&&(O.support.html5Clone||!Nt.test(s))&&(i=!0,o=O.fragments[s],o&&1!==o&&(r=o)),r||(r=a.createDocumentFragment(),O.clean(e,a,r,n)),i&&(O.fragments[s]=o?r:1),{fragment:r,cacheable:i}},O.fragments={},O.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){O.fn[e]=function(n){var r=[],i=O(n),o=1===this.length&&this[0].parentNode
if(o&&11===o.nodeType&&1===o.childNodes.length&&1===i.length)return i[t](this[0]),this
for(var a=0,s=i.length;s>a;a++){var l=(a>0?this.clone(!0):this).get()
O(i[a])[t](l),r=r.concat(l)}return this.pushStack(r,e,i.selector)}}),O.extend({clone:function(e,t,n){var r,i,o,a=O.support.html5Clone||O.isXMLDoc(e)||!Nt.test("<"+e.nodeName+">")?e.cloneNode(!0):g(e)
if(!(O.support.noCloneEvent&&O.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||O.isXMLDoc(e)))for(x(e,a),r=b(e),i=b(a),o=0;r[o];++o)i[o]&&x(r[o],i[o])
if(t&&(w(e,a),n))for(r=b(e),i=b(a),o=0;r[o];++o)w(r[o],i[o])
return r=i=null,a},clean:function(e,t,n,r){var i,o,a,s=[]
t=t||D,"undefined"==typeof t.createElement&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||D)
for(var l,u=0;null!=(l=e[u]);u++)if("number"==typeof l&&(l+=""),l){if("string"==typeof l)if(xt.test(l)){l=l.replace(vt,"<$1></$2>")
var c,f=(yt.exec(l)||["",""])[1].toLowerCase(),d=St[f]||St._default,p=d[0],h=t.createElement("div"),m=At.childNodes
for(t===D?At.appendChild(h):N(t).appendChild(h),h.innerHTML=d[1]+l+d[2];p--;)h=h.lastChild
if(!O.support.tbody){var g=bt.test(l),y="table"!==f||g?"<table>"!==d[1]||g?[]:h.childNodes:h.firstChild&&h.firstChild.childNodes
for(a=y.length-1;a>=0;--a)O.nodeName(y[a],"tbody")&&!y[a].childNodes.length&&y[a].parentNode.removeChild(y[a])}!O.support.leadingWhitespace&&gt.test(l)&&h.insertBefore(t.createTextNode(gt.exec(l)[0]),h.firstChild),l=h.childNodes,h&&(h.parentNode.removeChild(h),m.length>0&&(c=m[m.length-1],c&&c.parentNode&&c.parentNode.removeChild(c)))}else l=t.createTextNode(l)
var b
if(!O.support.appendChecked)if(l[0]&&"number"==typeof(b=l.length))for(a=0;b>a;a++)v(l[a])
else v(l)
l.nodeType?s.push(l):s=O.merge(s,l)}if(n)for(i=function(e){return!e.type||Ct.test(e.type)},u=0;s[u];u++)if(o=s[u],r&&O.nodeName(o,"script")&&(!o.type||Ct.test(o.type)))r.push(o.parentNode?o.parentNode.removeChild(o):o)
else{if(1===o.nodeType){var x=O.grep(o.getElementsByTagName("script"),i)
s.splice.apply(s,[u+1,0].concat(x))}n.appendChild(o)}return s},cleanData:function(e){for(var t,n,r,i=O.cache,o=O.event.special,a=O.support.deleteExpando,s=0;null!=(r=e[s]);s++)if((!r.nodeName||!O.noData[r.nodeName.toLowerCase()])&&(n=r[O.expando])){if(t=i[n],t&&t.events){for(var l in t.events)o[l]?O.event.remove(r,l):O.removeEvent(r,l,t.handle)
t.handle&&(t.handle.elem=null)}a?delete r[O.expando]:r.removeAttribute&&r.removeAttribute(O.expando),delete i[n]}}})
var jt,Lt,qt,Dt=/alpha\([^)]*\)/i,Mt=/opacity=([^)]*)/,Ft=/([A-Z]|^ms)/g,Ot=/^[\-+]?(?:\d*\.)?\d+$/i,_t=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Pt=/^([\-+])=([\-+.\de]+)/,Bt=/^margin/,Ht={position:"absolute",visibility:"hidden",display:"block"},Rt=["Top","Right","Bottom","Left"]
O.fn.css=function(e,n){return O.access(this,function(e,n,r){return r!==t?O.style(e,n,r):O.css(e,n)},e,n,arguments.length>1)},O.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=jt(e,"opacity")
return""===n?"1":n}return e.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":O.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s=O.camelCase(n),l=e.style,u=O.cssHooks[s]
if(n=O.cssProps[s]||s,r===t)return u&&"get"in u&&(o=u.get(e,!1,i))!==t?o:l[n]
if(a=typeof r,"string"===a&&(o=Pt.exec(r))&&(r=+(o[1]+1)*+o[2]+parseFloat(O.css(e,n)),a="number"),null==r||"number"===a&&isNaN(r))return
if("number"===a&&!O.cssNumber[s]&&(r+="px"),!(u&&"set"in u&&(r=u.set(e,r))===t))try{l[n]=r}catch(c){}}},css:function(e,n,r){var i,o
return n=O.camelCase(n),o=O.cssHooks[n],n=O.cssProps[n]||n,"cssFloat"===n&&(n="float"),o&&"get"in o&&(i=o.get(e,!0,r))!==t?i:jt?jt(e,n):void 0},swap:function(e,t,n){var r,i,o={}
for(i in t)o[i]=e.style[i],e.style[i]=t[i]
r=n.call(e)
for(i in t)e.style[i]=o[i]
return r}}),O.curCSS=O.css,D.defaultView&&D.defaultView.getComputedStyle&&(Lt=function(e,t){var n,r,i,o,a=e.style
return t=t.replace(Ft,"-$1").toLowerCase(),(r=e.ownerDocument.defaultView)&&(i=r.getComputedStyle(e,null))&&(n=i.getPropertyValue(t),""===n&&!O.contains(e.ownerDocument.documentElement,e)&&(n=O.style(e,t))),!O.support.pixelMargin&&i&&Bt.test(t)&&_t.test(n)&&(o=a.width,a.width=n,n=i.width,a.width=o),n}),D.documentElement.currentStyle&&(qt=function(e,t){var n,r,i,o=e.currentStyle&&e.currentStyle[t],a=e.style
return null==o&&a&&(i=a[t])&&(o=i),_t.test(o)&&(n=a.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),a.left="fontSize"===t?"1em":o,o=a.pixelLeft+"px",a.left=n,r&&(e.runtimeStyle.left=r)),""===o?"auto":o}),jt=Lt||qt,O.each(["height","width"],function(e,t){O.cssHooks[t]={get:function(e,n,r){return n?0!==e.offsetWidth?m(e,t,r):O.swap(e,Ht,function(){return m(e,t,r)}):void 0},set:function(e,t){return Ot.test(t)?t+"px":t}}}),O.support.opacity||(O.cssHooks.opacity={get:function(e,t){return Mt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=O.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||""
n.zoom=1,t>=1&&""===O.trim(o.replace(Dt,""))&&(n.removeAttribute("filter"),r&&!r.filter)||(n.filter=Dt.test(o)?o.replace(Dt,i):o+" "+i)}}),O(function(){O.support.reliableMarginRight||(O.cssHooks.marginRight={get:function(e,t){return O.swap(e,{display:"inline-block"},function(){return t?jt(e,"margin-right"):e.style.marginRight})}})}),O.expr&&O.expr.filters&&(O.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight
return 0===t&&0===n||!O.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||O.css(e,"display"))},O.expr.filters.visible=function(e){return!O.expr.filters.hidden(e)}),O.each({margin:"",padding:"",border:"Width"},function(e,t){O.cssHooks[e+t]={expand:function(n){var r,i="string"==typeof n?n.split(" "):[n],o={}
for(r=0;4>r;r++)o[e+Rt[r]+t]=i[r]||i[r-2]||i[0]
return o}}})
var $t,It,Wt=/%20/g,zt=/\[\]$/,Ut=/\r?\n/g,Xt=/#.*$/,Vt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Qt=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Gt=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Yt=/^(?:GET|HEAD)$/,Jt=/^\/\//,Kt=/\?/,Zt=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,en=/^(?:select|textarea)/i,tn=/\s+/,nn=/([?&])_=[^&]*/,rn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,on=O.fn.load,an={},sn={},ln=["*/"]+["*"]
try{$t=F.href}catch(un){$t=D.createElement("a"),$t.href="",$t=$t.href}It=rn.exec($t.toLowerCase())||[],O.fn.extend({load:function(e,n,r){if("string"!=typeof e&&on)return on.apply(this,arguments)
if(!this.length)return this
var i=e.indexOf(" ")
if(i>=0){var o=e.slice(i,e.length)
e=e.slice(0,i)}var a="GET"
n&&(O.isFunction(n)?(r=n,n=t):"object"==typeof n&&(n=O.param(n,O.ajaxSettings.traditional),a="POST"))
var s=this
return O.ajax({url:e,type:a,dataType:"html",data:n,complete:function(e,t,n){n=e.responseText,e.isResolved()&&(e.done(function(e){n=e}),s.html(o?O("<div>").append(n.replace(Zt,"")).find(o):n)),r&&s.each(r,[n,t,e])}}),this},serialize:function(){return O.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?O.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||en.test(this.nodeName)||Qt.test(this.type))}).map(function(e,t){var n=O(this).val()
return null==n?null:O.isArray(n)?O.map(n,function(e){return{name:t.name,value:e.replace(Ut,"\r\n")}}):{name:t.name,value:n.replace(Ut,"\r\n")}}).get()}}),O.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){O.fn[t]=function(e){return this.on(t,e)}}),O.each(["get","post"],function(e,n){O[n]=function(e,r,i,o){return O.isFunction(r)&&(o=o||i,i=r,r=t),O.ajax({type:n,url:e,data:r,success:i,dataType:o})}}),O.extend({getScript:function(e,n){return O.get(e,t,n,"script")},getJSON:function(e,t,n){return O.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?d(e,O.ajaxSettings):(t=e,e=O.ajaxSettings),d(e,t),e},ajaxSettings:{url:$t,isLocal:Gt.test(It[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":ln},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":O.parseJSON,"text xml":O.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:h(an),ajaxTransport:h(sn),ajax:function(e,n){function r(e,n,r,a){if(2!==N){N=2,l&&clearTimeout(l),s=t,o=a||"",E.readyState=e>0?4:0
var f,p,h,w,T,C=n,k=r?c(m,E,r):t
if(e>=200&&300>e||304===e)if(m.ifModified&&((w=E.getResponseHeader("Last-Modified"))&&(O.lastModified[i]=w),(T=E.getResponseHeader("Etag"))&&(O.etag[i]=T)),304===e)C="notmodified",f=!0
else try{p=u(m,k),C="success",f=!0}catch(S){C="parsererror",h=S}else h=C,(!C||e)&&(C="error",0>e&&(e=0))
E.status=e,E.statusText=""+(n||C),f?y.resolveWith(g,[p,C,E]):y.rejectWith(g,[E,C,h]),E.statusCode(x),x=t,d&&v.trigger("ajax"+(f?"Success":"Error"),[E,m,f?p:h]),b.fireWith(g,[E,C]),d&&(v.trigger("ajaxComplete",[E,m]),--O.active||O.event.trigger("ajaxStop"))}}"object"==typeof e&&(n=e,e=t),n=n||{}
var i,o,a,s,l,f,d,h,m=O.ajaxSetup({},n),g=m.context||m,v=g!==m&&(g.nodeType||g instanceof O)?O(g):O.event,y=O.Deferred(),b=O.Callbacks("once memory"),x=m.statusCode||{},w={},T={},N=0,E={readyState:0,setRequestHeader:function(e,t){if(!N){var n=e.toLowerCase()
e=T[n]=T[n]||e,w[e]=t}return this},getAllResponseHeaders:function(){return 2===N?o:null},getResponseHeader:function(e){var n
if(2===N){if(!a)for(a={};n=Vt.exec(o);)a[n[1].toLowerCase()]=n[2]
n=a[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return N||(m.mimeType=e),this},abort:function(e){return e=e||"abort",s&&s.abort(e),r(0,e),this}}
if(y.promise(E),E.success=E.done,E.error=E.fail,E.complete=b.add,E.statusCode=function(e){if(e){var t
if(2>N)for(t in e)x[t]=[x[t],e[t]]
else t=e[E.status],E.then(t,t)}return this},m.url=((e||m.url)+"").replace(Xt,"").replace(Jt,It[1]+"//"),m.dataTypes=O.trim(m.dataType||"*").toLowerCase().split(tn),null==m.crossDomain&&(f=rn.exec(m.url.toLowerCase()),m.crossDomain=!(!f||f[1]==It[1]&&f[2]==It[2]&&(f[3]||("http:"===f[1]?80:443))==(It[3]||("http:"===It[1]?80:443)))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=O.param(m.data,m.traditional)),p(an,m,n,E),2===N)return!1
if(d=m.global,m.type=m.type.toUpperCase(),m.hasContent=!Yt.test(m.type),d&&0===O.active++&&O.event.trigger("ajaxStart"),!m.hasContent&&(m.data&&(m.url+=(Kt.test(m.url)?"&":"?")+m.data,delete m.data),i=m.url,m.cache===!1)){var C=O.now(),k=m.url.replace(nn,"$1_="+C)
m.url=k+(k===m.url?(Kt.test(m.url)?"&":"?")+"_="+C:"")}(m.data&&m.hasContent&&m.contentType!==!1||n.contentType)&&E.setRequestHeader("Content-Type",m.contentType),m.ifModified&&(i=i||m.url,O.lastModified[i]&&E.setRequestHeader("If-Modified-Since",O.lastModified[i]),O.etag[i]&&E.setRequestHeader("If-None-Match",O.etag[i])),E.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ln+"; q=0.01":""):m.accepts["*"])
for(h in m.headers)E.setRequestHeader(h,m.headers[h])
if(m.beforeSend&&(m.beforeSend.call(g,E,m)===!1||2===N))return E.abort(),!1
for(h in{success:1,error:1,complete:1})E[h](m[h])
if(s=p(sn,m,n,E)){E.readyState=1,d&&v.trigger("ajaxSend",[E,m]),m.async&&m.timeout>0&&(l=setTimeout(function(){E.abort("timeout")},m.timeout))
try{N=1,s.send(w,r)}catch(S){if(!(2>N))throw S
r(-1,S)}}else r(-1,"No Transport")
return E},param:function(e,n){var r=[],i=function(e,t){t=O.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(n===t&&(n=O.ajaxSettings.traditional),O.isArray(e)||e.jquery&&!O.isPlainObject(e))O.each(e,function(){i(this.name,this.value)})
else for(var o in e)f(o,e[o],n,i)
return r.join("&").replace(Wt,"+")}}),O.extend({active:0,lastModified:{},etag:{}})
var cn=O.now(),fn=/(\=)\?(&|$)|\?\?/i
O.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return O.expando+"_"+cn++}}),O.ajaxPrefilter("json jsonp",function(t,n,r){var i="string"==typeof t.data&&/^application\/x\-www\-form\-urlencoded/.test(t.contentType)
if("jsonp"===t.dataTypes[0]||t.jsonp!==!1&&(fn.test(t.url)||i&&fn.test(t.data))){var o,a=t.jsonpCallback=O.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s=e[a],l=t.url,u=t.data,c="$1"+a+"$2"
return t.jsonp!==!1&&(l=l.replace(fn,c),t.url===l&&(i&&(u=u.replace(fn,c)),t.data===u&&(l+=(/\?/.test(l)?"&":"?")+t.jsonp+"="+a))),t.url=l,t.data=u,e[a]=function(e){o=[e]},r.always(function(){e[a]=s,o&&O.isFunction(s)&&e[a](o[0])}),t.converters["script json"]=function(){return o||O.error(a+" was not called"),o[0]},t.dataTypes[0]="json","script"}}),O.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return O.globalEval(e),e}}}),O.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),O.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=D.head||D.getElementsByTagName("head")[0]||D.documentElement
return{send:function(i,o){n=D.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){(i||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}})
var dn,pn=e.ActiveXObject?function(){for(var e in dn)dn[e](0,1)}:!1,hn=0
O.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&l()||s()}:l,function(e){O.extend(O.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(O.ajaxSettings.xhr()),O.support.ajax&&O.ajaxTransport(function(n){if(!n.crossDomain||O.support.cors){var r
return{send:function(i,o){var a,s,l=n.xhr()
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s]
n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest")
try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,f,d
try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=O.noop,pn&&delete dn[a]),i)4!==l.readyState&&l.abort()
else{s=l.status,c=l.getAllResponseHeaders(),f={},d=l.responseXML,d&&d.documentElement&&(f.xml=d)
try{f.text=l.responseText}catch(e){}try{u=l.statusText}catch(p){u=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,u,f,c)},n.async&&4!==l.readyState?(a=++hn,pn&&(dn||(dn={},O(e).unload(pn)),dn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}})
var mn,gn,vn,yn,bn={},xn=/^(?:toggle|show|hide)$/,wn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,Tn=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]]
O.fn.extend({show:function(e,t,n){var o,a
if(e||0===e)return this.animate(i("show",3),e,t,n)
for(var s=0,l=this.length;l>s;s++)o=this[s],o.style&&(a=o.style.display,!O._data(o,"olddisplay")&&"none"===a&&(a=o.style.display=""),(""===a&&"none"===O.css(o,"display")||!O.contains(o.ownerDocument.documentElement,o))&&O._data(o,"olddisplay",r(o.nodeName)))
for(s=0;l>s;s++)o=this[s],o.style&&(a=o.style.display,(""===a||"none"===a)&&(o.style.display=O._data(o,"olddisplay")||""))
return this},hide:function(e,t,n){if(e||0===e)return this.animate(i("hide",3),e,t,n)
for(var r,o,a=0,s=this.length;s>a;a++)r=this[a],r.style&&(o=O.css(r,"display"),"none"!==o&&!O._data(r,"olddisplay")&&O._data(r,"olddisplay",o))
for(a=0;s>a;a++)this[a].style&&(this[a].style.display="none")
return this},_toggle:O.fn.toggle,toggle:function(e,t,n){var r="boolean"==typeof e
return O.isFunction(e)&&O.isFunction(t)?this._toggle.apply(this,arguments):null==e||r?this.each(function(){var t=r?e:O(this).is(":hidden")
O(this)[t?"show":"hide"]()}):this.animate(i("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,i){function o(){a.queue===!1&&O._mark(this)
var t,n,i,o,s,l,u,c,f,d,p,h=O.extend({},a),m=1===this.nodeType,g=m&&O(this).is(":hidden")
h.animatedProperties={}
for(i in e)if(t=O.camelCase(i),i!==t&&(e[t]=e[i],delete e[i]),(s=O.cssHooks[t])&&"expand"in s){l=s.expand(e[t]),delete e[t]
for(i in l)i in e||(e[i]=l[i])}for(t in e){if(n=e[t],O.isArray(n)?(h.animatedProperties[t]=n[1],n=e[t]=n[0]):h.animatedProperties[t]=h.specialEasing&&h.specialEasing[t]||h.easing||"swing","hide"===n&&g||"show"===n&&!g)return h.complete.call(this)
m&&("height"===t||"width"===t)&&(h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===O.css(this,"display")&&"none"===O.css(this,"float")&&(O.support.inlineBlockNeedsLayout&&"inline"!==r(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=h.overflow&&(this.style.overflow="hidden")
for(i in e)o=new O.fx(this,h,i),n=e[i],xn.test(n)?(p=O._data(this,"toggle"+i)||("toggle"===n?g?"show":"hide":0),p?(O._data(this,"toggle"+i,"show"===p?"hide":"show"),o[p]()):o[n]()):(u=wn.exec(n),c=o.cur(),u?(f=parseFloat(u[2]),d=u[3]||(O.cssNumber[i]?"":"px"),"px"!==d&&(O.style(this,i,(f||1)+d),c=(f||1)/o.cur()*c,O.style(this,i,c+d)),u[1]&&(f=("-="===u[1]?-1:1)*f+c),o.custom(c,f,d)):o.custom(c,n,""))
return!0}var a=O.speed(t,n,i)
return O.isEmptyObject(e)?this.each(a.complete,[!1]):(e=O.extend({},e),a.queue===!1?this.each(o):this.queue(a.queue,o))},stop:function(e,n,r){return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){function t(e,t,n){var i=t[n]
O.removeData(e,n,!0),i.stop(r)}var n,i=!1,o=O.timers,a=O._data(this)
if(r||O._unmark(!0,this),null==e)for(n in a)a[n]&&a[n].stop&&n.indexOf(".run")===n.length-4&&t(this,a,n)
else a[n=e+".run"]&&a[n].stop&&t(this,a,n)
for(n=o.length;n--;)o[n].elem===this&&(null==e||o[n].queue===e)&&(r?o[n](!0):o[n].saveState(),i=!0,o.splice(n,1));(!r||!i)&&O.dequeue(this,e)})}}),O.each({slideDown:i("show",1),slideUp:i("hide",1),slideToggle:i("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){O.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),O.extend({speed:function(e,t,n){var r=e&&"object"==typeof e?O.extend({},e):{complete:n||!n&&t||O.isFunction(e)&&e,duration:e,easing:n&&t||t&&!O.isFunction(t)&&t}
return r.duration=O.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in O.fx.speeds?O.fx.speeds[r.duration]:O.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(e){O.isFunction(r.old)&&r.old.call(this),r.queue?O.dequeue(this,r.queue):e!==!1&&O._unmark(this)},r},easing:{linear:function(e){return e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),O.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(O.fx.step[this.prop]||O.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop]
var e,t=O.css(this.elem,this.prop)
return isNaN(e=parseFloat(t))?t&&"auto"!==t?t:0:e},custom:function(e,n,r){function i(e){return o.step(e)}var o=this,s=O.fx
this.startTime=yn||a(),this.end=n,this.now=this.start=e,this.pos=this.state=0,this.unit=r||this.unit||(O.cssNumber[this.prop]?"":"px"),i.queue=this.options.queue,i.elem=this.elem,i.saveState=function(){O._data(o.elem,"fxshow"+o.prop)===t&&(o.options.hide?O._data(o.elem,"fxshow"+o.prop,o.start):o.options.show&&O._data(o.elem,"fxshow"+o.prop,o.end))},i()&&O.timers.push(i)&&!vn&&(vn=setInterval(s.tick,s.interval))},show:function(){var e=O._data(this.elem,"fxshow"+this.prop)
this.options.orig[this.prop]=e||O.style(this.elem,this.prop),this.options.show=!0,e!==t?this.custom(this.cur(),e):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),O(this.elem).show()},hide:function(){this.options.orig[this.prop]=O._data(this.elem,"fxshow"+this.prop)||O.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t,n,r,i=yn||a(),o=!0,s=this.elem,l=this.options
if(e||i>=l.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),l.animatedProperties[this.prop]=!0
for(t in l.animatedProperties)l.animatedProperties[t]!==!0&&(o=!1)
if(o){if(null!=l.overflow&&!O.support.shrinkWrapBlocks&&O.each(["","X","Y"],function(e,t){s.style["overflow"+t]=l.overflow[e]}),l.hide&&O(s).hide(),l.hide||l.show)for(t in l.animatedProperties)O.style(s,t,l.orig[t]),O.removeData(s,"fxshow"+t,!0),O.removeData(s,"toggle"+t,!0)
r=l.complete,r&&(l.complete=!1,r.call(s))}return!1}return 1/0==l.duration?this.now=i:(n=i-this.startTime,this.state=n/l.duration,this.pos=O.easing[l.animatedProperties[this.prop]](this.state,n,0,1,l.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},O.extend(O.fx,{tick:function(){for(var e,t=O.timers,n=0;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1)
t.length||O.fx.stop()},interval:13,stop:function(){clearInterval(vn),vn=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){O.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&null!=e.elem.style[e.prop]?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}}}),O.each(Tn.concat.apply([],Tn),function(e,t){t.indexOf("margin")&&(O.fx.step[t]=function(e){O.style(e.elem,t,Math.max(0,e.now)+e.unit)})}),O.expr&&O.expr.filters&&(O.expr.filters.animated=function(e){return O.grep(O.timers,function(t){return e===t.elem}).length})
var Nn,En=/^t(?:able|d|h)$/i,Cn=/^(?:body|html)$/i
Nn="getBoundingClientRect"in D.documentElement?function(e,t,r,i){try{i=e.getBoundingClientRect()}catch(o){}if(!i||!O.contains(r,e))return i?{top:i.top,left:i.left}:{top:0,left:0}
var a=t.body,s=n(t),l=r.clientTop||a.clientTop||0,u=r.clientLeft||a.clientLeft||0,c=s.pageYOffset||O.support.boxModel&&r.scrollTop||a.scrollTop,f=s.pageXOffset||O.support.boxModel&&r.scrollLeft||a.scrollLeft,d=i.top+c-l,p=i.left+f-u
return{top:d,left:p}}:function(e,t,n){for(var r,i=e.offsetParent,o=e,a=t.body,s=t.defaultView,l=s?s.getComputedStyle(e,null):e.currentStyle,u=e.offsetTop,c=e.offsetLeft;(e=e.parentNode)&&e!==a&&e!==n&&(!O.support.fixedPosition||"fixed"!==l.position);)r=s?s.getComputedStyle(e,null):e.currentStyle,u-=e.scrollTop,c-=e.scrollLeft,e===i&&(u+=e.offsetTop,c+=e.offsetLeft,O.support.doesNotAddBorder&&(!O.support.doesAddBorderForTableAndCells||!En.test(e.nodeName))&&(u+=parseFloat(r.borderTopWidth)||0,c+=parseFloat(r.borderLeftWidth)||0),o=i,i=e.offsetParent),O.support.subtractsBorderForOverflowNotVisible&&"visible"!==r.overflow&&(u+=parseFloat(r.borderTopWidth)||0,c+=parseFloat(r.borderLeftWidth)||0),l=r
return("relative"===l.position||"static"===l.position)&&(u+=a.offsetTop,c+=a.offsetLeft),O.support.fixedPosition&&"fixed"===l.position&&(u+=Math.max(n.scrollTop,a.scrollTop),c+=Math.max(n.scrollLeft,a.scrollLeft)),{top:u,left:c}},O.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){O.offset.setOffset(this,e,t)})
var n=this[0],r=n&&n.ownerDocument
return r?n===r.body?O.offset.bodyOffset(n):Nn(n,r,r.documentElement):null},O.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft
return O.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(O.css(e,"marginTop"))||0,n+=parseFloat(O.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=O.css(e,"position")
"static"===r&&(e.style.position="relative")
var i,o,a=O(e),s=a.offset(),l=O.css(e,"top"),u=O.css(e,"left"),c=("absolute"===r||"fixed"===r)&&O.inArray("auto",[l,u])>-1,f={},d={}
c?(d=a.position(),i=d.top,o=d.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),O.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},O.fn.extend({position:function(){if(!this[0])return null
var e=this[0],t=this.offsetParent(),n=this.offset(),r=Cn.test(t[0].nodeName)?{top:0,left:0}:t.offset()
return n.top-=parseFloat(O.css(e,"marginTop"))||0,n.left-=parseFloat(O.css(e,"marginLeft"))||0,r.top+=parseFloat(O.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(O.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||D.body;e&&!Cn.test(e.nodeName)&&"static"===O.css(e,"position");)e=e.offsetParent
return e})}}),O.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,r){var i=/Y/.test(r)
O.fn[e]=function(o){return O.access(this,function(e,o,a){var s=n(e)
return a===t?s?r in s?s[r]:O.support.boxModel&&s.document.documentElement[o]||s.document.body[o]:e[o]:void(s?s.scrollTo(i?O(s).scrollLeft():a,i?a:O(s).scrollTop()):e[o]=a)},e,o,arguments.length,null)}}),O.each({Height:"height",Width:"width"},function(e,n){var r="client"+e,i="scroll"+e,o="offset"+e
O.fn["inner"+e]=function(){var e=this[0]
return e?e.style?parseFloat(O.css(e,n,"padding")):this[n]():null},O.fn["outer"+e]=function(e){var t=this[0]
return t?t.style?parseFloat(O.css(t,n,e?"margin":"border")):this[n]():null},O.fn[n]=function(e){return O.access(this,function(e,n,a){var s,l,u,c
return O.isWindow(e)?(s=e.document,l=s.documentElement[r],O.support.boxModel&&l||s.body&&s.body[r]||l):9===e.nodeType?(s=e.documentElement,s[r]>=s[i]?s[r]:Math.max(e.body[i],s[i],e.body[o],s[o])):a===t?(u=O.css(e,n),c=parseFloat(u),O.isNumeric(c)?c:u):void O(e).css(n,a)},n,e,arguments.length,null)}}),e.jQuery=e.$=O,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return O})}(window),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})
var requirejs,require,define
!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var n
for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function eachReverse(e,t){if(e){var n
for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n
for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,i){(n||!hasProp(e,i))&&(r&&"string"!=typeof t?(e[i]||(e[i]={}),mixin(e[i],t,n,r)):e[i]=t)}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(e){if(!e)return e
var t=global
return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e)
return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function t(e){var t,n
for(t=0;e[t];t+=1)if(n=e[t],"."===n)e.splice(t,1),t-=1
else if(".."===n){if(1===t&&(".."===e[2]||".."===e[0]))break
t>0&&(e.splice(t-1,2),t-=2)}}function n(e,n,r){var i,o,a,s,l,u,c,f,d,p,h,m=n&&n.split("/"),g=m,v=N.map,y=v&&v["*"]
if(e&&"."===e.charAt(0)&&(n?(g=getOwn(N.pkgs,n)?m=[n]:m.slice(0,m.length-1),e=g.concat(e.split("/")),t(e),o=getOwn(N.pkgs,i=e[0]),e=e.join("/"),o&&e===i+"/"+o.main&&(e=i)):0===e.indexOf("./")&&(e=e.substring(2))),r&&(m||y)&&v){for(s=e.split("/"),l=s.length;l>0;l-=1){if(c=s.slice(0,l).join("/"),m)for(u=m.length;u>0;u-=1)if(a=getOwn(v,m.slice(0,u).join("/")),a&&(a=getOwn(a,c))){f=a,d=l
break}if(f)break
!p&&y&&getOwn(y,c)&&(p=getOwn(y,c),h=l)}!f&&p&&(f=p,d=h),f&&(s.splice(0,d,f),e=s.join("/"))}return e}function r(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===x.contextName?(t.parentNode.removeChild(t),!0):void 0})}function i(e){var t=getOwn(N.paths,e)
return t&&isArray(t)&&t.length>1?(r(e),t.shift(),x.require.undef(e),x.require([e]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1
return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function a(e,t,r,i){var a,s,l,u,c=null,f=t?t.name:null,d=e,p=!0,h=""
return e||(p=!1,e="_@r"+(j+=1)),u=o(e),c=u[0],e=u[1],c&&(c=n(c,f,i),s=getOwn(S,c)),e&&(c?h=s&&s.normalize?s.normalize(e,function(e){return n(e,f,i)}):n(e,f,i):(h=n(e,f,i),u=o(h),c=u[0],h=u[1],r=!0,a=x.nameToUrl(h))),l=!c||s||r?"":"_unnormalized"+(L+=1),{prefix:c,name:h,parentMap:t,unnormalized:!!l,url:a,originalName:d,isDefine:p,id:(c?c+"!"+h:h)+l}}function s(e){var t=e.id,n=getOwn(E,t)
return n||(n=E[t]=new x.Module(e)),n}function l(e,t,n){var r=e.id,i=getOwn(E,r)
!hasProp(S,r)||i&&!i.defineEmitComplete?s(e).on(t,n):"defined"===t&&n(S[r])}function u(e,t){var n=e.requireModules,r=!1
t?t(e):(each(n,function(t){var n=getOwn(E,t)
n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function c(){globalDefQueue.length&&(apsp.apply(k,[k.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function f(e){delete E[e]}function d(e,t,n){var r=e.map.id
e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var o=r.id,a=getOwn(E,o)
!a||e.depMatched[i]||n[o]||(getOwn(t,o)?(e.defineDep(i,S[o]),e.check()):d(a,t,n))}),n[r]=!0)}function p(){var e,t,n,o,a=1e3*N.waitSeconds,s=a&&x.startTime+a<(new Date).getTime(),l=[],c=[],f=!1,h=!0
if(!y){if(y=!0,eachProp(E,function(n){if(e=n.map,t=e.id,n.enabled&&(e.isDefine||c.push(n),!n.error))if(!n.inited&&s)i(t)?(o=!0,f=!0):(l.push(t),r(t))
else if(!n.inited&&n.fetched&&e.isDefine&&(f=!0,!e.prefix))return h=!1}),s&&l.length)return n=makeError("timeout","Load timeout for modules: "+l,null,l),n.contextName=x.contextName,u(n)
h&&each(c,function(e){d(e,{},{})}),s&&!o||!f||!isBrowser&&!isWebWorker||T||(T=setTimeout(function(){T=0,p()},50)),y=!1}}function h(e){hasProp(S,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function g(e){var t=e.currentTarget||e.srcElement
return m(t,x.onScriptLoad,"load","onreadystatechange"),m(t,x.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function v(){var e
for(c();k.length;){if(e=k.shift(),null===e[0])return u(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]))
h(e)}}var y,b,x,w,T,N={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},E={},C={},k=[],S={},A={},j=1,L=1
return w={require:function(e){return e.require?e.require:e.require=x.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?e.exports:e.exports=S[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return N.config&&getOwn(N.config,e.map.id)||{}},exports:S[e.map.id]}}},b=function(e){this.events=getOwn(C,e.id)||{},this.map=e,this.shim=getOwn(N.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,n,r){r=r||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,x.startTime=(new Date).getTime()
var e=this.map
return this.shim?void x.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url
A[e]||(A[e]=!0,x.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id,r=this.depExports,i=this.exports,o=this.factory
if(this.inited){if(this.error)this.emit("error",this.error)
else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error)try{i=x.execCb(n,o,r,i)}catch(a){e=a}else i=x.execCb(n,o,r,i)
if(this.map.isDefine&&(t=this.module,t&&void 0!==t.exports&&t.exports!==this.exports?i=t.exports:void 0===i&&this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=[this.map.id],e.requireType="define",u(this.error=e)}else i=o
this.exports=i,this.map.isDefine&&!this.ignore&&(S[n]=i,req.onResourceLoad&&req.onResourceLoad(x,this.map,this.depMaps)),delete E[n],this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=a(e.prefix)
this.depMaps.push(r),l(r,"defined",bind(this,function(r){var i,o,c,d=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,h=x.makeRequire(e.parentMap,{enableBuildCallback:!0,skipMap:!0})
return this.map.unnormalized?(r.normalize&&(d=r.normalize(d,function(e){return n(e,p,!0)})||""),o=a(e.prefix+"!"+d,this.map.parentMap),l(o,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),c=getOwn(E,o.id),void(c&&(this.depMaps.push(o),this.events.error&&c.on("error",bind(this,function(e){this.emit("error",e)})),c.enable()))):(i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(E,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&f(e.map.id)}),u(e)}),i.fromText=bind(this,function(n,r){var o=e.name,l=a(o),u=useInteractive
r&&(n=r),u&&(useInteractive=!1),s(l),hasProp(N.config,t)&&(N.config[o]=N.config[t])
try{req.exec(n)}catch(c){throw new Error("fromText eval for "+o+" failed: "+c)}u&&(useInteractive=!0),this.depMaps.push(l),x.completeLoad(o),h([o],i)}),void r.load(e.name,h,i,N))})),x.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,r,i
if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,i=getOwn(w,e.id))return void(this.depExports[t]=i(this))
this.depCount+=1,l(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&l(e,"error",this.errback)}n=e.id,r=E[n],hasProp(w,n)||!r||r.enabled||x.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(E,e.id)
t&&!t.enabled&&x.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e]
n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},x={config:N,contextName:e,registry:E,defined:S,urlFetched:A,defQueue:k,Module:b,makeModuleMap:a,nextTick:req.nextTick,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/")
var t=N.pkgs,n=N.shim,r={paths:!0,config:!0,map:!0}
eachProp(e,function(e,t){r[t]?"map"===t?mixin(N[t],e,!0,!0):mixin(N[t],e,!0):N[t]=e}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=x.makeShimExports(e)),n[t]=e}),N.shim=n),e.packages&&(each(e.packages,function(e){var n
e="string"==typeof e?{name:e}:e,n=e.location,t[e.name]={name:e.name,location:n||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),N.pkgs=t),eachProp(E,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t))}),(e.deps||e.callback)&&x.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t
return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,r){function i(n,o,l){var c,f,d
return r.enableBuildCallback&&o&&isFunction(o)&&(o.__requireJsBuild=!0),"string"==typeof n?isFunction(o)?u(makeError("requireargs","Invalid require call"),l):t&&hasProp(w,n)?w[n](E[t.id]):req.get?req.get(x,n,t):(f=a(n,t,!1,!0),c=f.id,hasProp(S,c)?S[c]:u(makeError("notloaded",'Module name "'+c+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(v(),x.nextTick(function(){v(),d=s(a(null,t)),d.skipMap=r.skipMap,d.init(n,o,l,{enabled:!0}),p()}),i)}return r=r||{},mixin(i,{isBrowser:isBrowser,toUrl:function(e){var r=e.lastIndexOf("."),i=null
return-1!==r&&(i=e.substring(r,e.length),e=e.substring(0,r)),x.nameToUrl(n(e,t&&t.id,!0),i)},defined:function(e){return hasProp(S,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(S,e)||hasProp(E,e)}}),t||(i.undef=function(e){c()
var n=a(e,t,!0),r=getOwn(E,e)
delete S[e],delete A[n.url],delete C[e],r&&(r.events.defined&&(C[e]=r.events),f(e))}),i},enable:function(e){var t=getOwn(E,e.id)
t&&s(e).enable()},completeLoad:function(e){var t,n,r,o=getOwn(N.shim,e)||{},a=o.exports
for(c();k.length;){if(n=k.shift(),null===n[0]){if(n[0]=e,t)break
t=!0}else n[0]===e&&(t=!0)
h(n)}if(r=getOwn(E,e),!t&&!hasProp(S,e)&&r&&!r.inited){if(!(!N.enforceDefine||a&&getGlobal(a)))return i(e)?void 0:u(makeError("nodefine","No define call for "+e,null,[e]))
h([e,o.deps||[],o.exportsFn])}p()},nameToUrl:function(e,t){var n,r,i,o,a,s,l,u,c
if(req.jsExtRegExp.test(e))u=e+(t||"")
else{for(n=N.paths,r=N.pkgs,a=e.split("/"),s=a.length;s>0;s-=1){if(l=a.slice(0,s).join("/"),i=getOwn(r,l),c=getOwn(n,l)){isArray(c)&&(c=c[0]),a.splice(0,s,c)
break}if(i){o=e===i.name?i.location+"/"+i.main:i.location,a.splice(0,s,o)
break}}u=a.join("/"),u+=t||(/\?/.test(u)?"":".js"),u=("/"===u.charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":N.baseUrl)+u}return N.urlArgs?u+((-1===u.indexOf("?")?"?":"&")+N.urlArgs):u},load:function(e,t){req.load(x,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null
var t=g(e)
x.completeLoad(t.id)}},onScriptError:function(e){var t=g(e)
return i(t.id)?void 0:u(makeError("scripterror","Script error",e,[t.id]))}},x.require=x.makeRequire(),x}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.2",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=!("undefined"==typeof window||!navigator||!document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1
if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return
cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,n,r){var i,o,a=defContextName
return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=n,n=r):e=[]),o&&o.context&&(a=o.context),i=getOwn(contexts,a),i||(i=contexts[a]=req.s.newContext(a)),o&&i.configure(o),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName]
return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(e){throw e},req.load=function(e,t,n){var r,i=e&&e.config||{}
return isBrowser?(r=i.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),r.type=i.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=n,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r):void(isWebWorker&&(importScripts(n),e.completeLoad(t)))},isBrowser&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript),dataMain=dataMain.replace(jsSuffixRegExp,""),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain],!0):void 0}),define=function(e,t,n){var r,i
"string"!=typeof e&&(n=t,t=e,e=null),isArray(t)||(n=t,t=[]),!t.length&&isFunction(n)&&n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t)),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),(i?i.defQueue:globalDefQueue).push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),define("search",function(){function e(e){if(e=e.toLowerCase(),0===e.length)return[]
if(e.length<3)return[e]
for(var t=[],n=0;n<=e.length-3;n+=1)t.push(e.substr(n,3))
return t}function t(){this.trigramTable={},this.resultIndex=[]}return t.prototype.addTerm=function(t,n){var r={}
this.resultIndex.push(n)
for(var i=0;i<t.length;i+=1)for(var r=e(t[i]),o=0;o<r.length;o+=1){var a=r[o]
a in this.trigramTable||(this.trigramTable[a]=[]),this.trigramTable[a].push(this.resultIndex.length-1)}},t.prototype.search=function(t,n){var r=this,i=t.toLowerCase().split(" "),n=n||300,o=[],a={}
i.forEach(function(t){o=o.concat(e(t))}),o.forEach(function(e){if(e in r.trigramTable)for(var t=r.trigramTable[e],n=0;n<t.length;n+=1){var i=t[n]
a[i]=a[i]||0,a[i]=a[i]+1}})
var s=[]
for(var l in a)s.push({code:l,score:a[l]})
if(s.length>0){s.sort(function(e,t){return t.score!==e.score?t.score-e.score:e.code-t.code})
for(var u=(Math.ceil(s[0].score/2),[]),c=0;c<s.length&&n>c;c+=1)u.push(s[c])
return u.map(function(e){return r.resultIndex[e.code]})}return[]},t}),require(["search"],function(e){function t(e){var t=e.match(/^\\u([\dABCDEFabcdef]{4})$/),n=e.match(/^&#(\d+);$/)||e.match(/^(\d+)$/),r=void 0
return t?r=parseInt(t[1],16):n?r=n[1]:1===e.length&&(r=e.charCodeAt(0)),r}function n(e){return Math.floor((e-65536)/1024)+55296}function r(e){return(e-65536)%1024+56320}function i(e){if(65535>=e)return"\\u"+(e+65536).toString(16).substr(-4).toUpperCase()
throw"Code point outside BMP cannot be encoded."}function o(e){return 65535>=e?i(e):i(n(e))+i(r(e))}function a(e){_gaq.push(["_trackEvent","search",void 0,e])
var t=[],n=e.match(/^\\u(\d{4})$/),r=e.match(/^&#(\d+);$/)||e.match(/^(\d+)$/)
t=n?[parseInt(n[1],16)]:r?[r[1]]:d.search(e),1===e.length&&0===t.length&&(t=[e.charCodeAt(0)]),0===t.length?$("#help").show():$("#help").hide(),$("#results").html($.map(t,function(e){var t=l[e]&&-1!==l[e].n.indexOf("combining"),n=(t?"&#9676;":"")+"&#"+e+";"
return'<a href="#id'+e+'" id="id'+e+'">'+n+"</a>"}).join("")),1===t.length&&u.activate($("#results a").first())}function s(){if(location.hash){var e=decodeURIComponent(location.hash.split("#")[1]),n=e.match(/^([^\/]+)\/(.*)$/),r=t(e),i=void 0,o=void 0
if(n?(i=n[1],o=n[2]):r?i=o=r:(i=e,o=void 0),o&&void 0===i&&(i=o),f.val(i),a(i),o){var s=$("#id"+o).first()
s&&u.activate(s)}}}document.getElementById("searchField").focus(),document.forms[0].onsubmit=function(){return!1},_gaq=window._gaq||[],_gaq.push(["_setAccount","UA-33198175-1"]),_gaq.push(["_setDomainName","charcod.es"]),_gaq.push(["_trackPageview"])
var l={},u=function(){var e,t,n=function(e){var t=l[e],n=$(".templates .charInfo").clone(),r=l[e]&&-1!==l[e].n.indexOf("combining"),i=["&amp;#"+e+";"],a=$("#searchField").val(),s=a+"/"+e,u=e
return a===e&&(s=e),location.hash="#"+s,n.find("h2").html((r?"&#9676;":"")+"&#"+e+";"),n.find(".permalink").attr("href","#"+u),n.find(".char-source").html(o(parseInt(e,10))),n.find(".char-codepoint").html(e),t&&(n.find("h3").html(t.n),n.find(".char-group").attr("href","#"+t.b).html(t.b),t.a&&t.a.length>0&&n.find(".aliases").html(t.a.join(", ")),t.altnames&&t.altnames.html&&i.push("&amp;"+t.altnames.html+";"),n.find(".char-html").html(i.join("<br>")),_gaq.push(["_trackEvent","popup","activate",t.b]),t.altnames&&t.altnames.latex?n.find(".char-latex").html(t.altnames.latex):n.find(".char-latex-row").hide()),n}
return{activate:function(r){var i=r[0].id.replace("id",""),o=r.position().top,a=r
for(e&&this.deactivate(),e=r,t=n(i);a.next().length&&a.next().position().top===o;)a=a.next()
t.insertAfter(a),e.addClass("active")},deactivate:function(){_gaq.push(["_trackEvent","popup","deactivate"]),e.removeClass("active"),t&&t.remove(),e=t=void 0}}}()
$("#results").on("click","a",function(e){u.activate($(e.target)),e.preventDefault()})
var c,f=$("#searchField")
f.keyup(function(){c&&window.clearTimeout(c),c=window.setTimeout(function(){a(f.val().trim())},250)}),$(".form-search").submit(function(){return a(f.val().trim()),!1})
var d=new e
$.ajax({url:"static/data.ec74208193.json",dataType:"json",success:function(e){var t,n,r,i,o=e.length
for(t=0;o>t;t+=1){if(n=e[t],l[n.c]=n,r=[].concat(n.n.split(" "),[n.b],n.a?n.a:[]),n.altnames)for(i in n.altnames)r.push(n.altnames[i])
d.addTerm(r,n.c)}f.val()&&a(f.val()),s()},error:function(){throw new Error("could not load data.json: "+arguments)}}),window.onhashchange=function(e){e.newURL!==e.oldURL&&s()},s()}),define("app",function(){})
;