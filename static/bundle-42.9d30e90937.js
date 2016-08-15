!function () {
var a = document.createElement('script');
a.type = 'text/javascript', a.async = !0, a.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var b = document.getElementsByTagName('script')[0];
b.parentNode.insertBefore(a, b)
}(), /*! jQuery v1.7.2 jquery.com | jquery.org/license */
function (a, b) {
function c(a) {
return J.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
}
function d(a) {
if (!sb[a]) {
var b = G.body, c = J('<' + a + '>').appendTo(b), d = c.css('display');
c.remove(), 'none' !== d && '' !== d || (ob || (ob = G.createElement('iframe'), ob.frameBorder = ob.width = ob.height = 0), b.appendChild(ob), pb && ob.createElement || (pb = (ob.contentWindow || ob.contentDocument).document, pb.write((J.support.boxModel ? '<!doctype html>' : '') + '<html><body>'), pb.close()), c = pb.createElement(a), pb.body.appendChild(c), d = J.css(c, 'display'), b.removeChild(ob)), sb[a] = d
}
return sb[a]
}
function e(a, b) {
var c = {};
return J.each(vb.concat.apply([], vb.slice(0, b)), function () {
c[this] = a
}), c
}
function f() {
rb = b
}
function g() {
return setTimeout(f, 0), rb = J.now()
}
function h() {
try {
return new a.ActiveXObject('Microsoft.XMLHTTP')
} catch (b) {
}
}
function i() {
try {
return new a.XMLHttpRequest
} catch (b) {
}
}
function j(a, c) {
a.dataFilter && (c = a.dataFilter(c, a.dataType));
var d, e, f, g, h, i, j, k, l = a.dataTypes, m = {}, n = l.length, o = l[0];
for (d = 1; d < n; d++) {
if (1 === d)
for (e in a.converters)
'string' == typeof e && (m[e.toLowerCase()] = a.converters[e]);
if (g = o, o = l[d], '*' === o)
o = g;
else if ('*' !== g && g !== o) {
if (h = g + ' ' + o, i = m[h] || m['* ' + o], !i) {
k = b;
for (j in m)
if (f = j.split(' '), (f[0] === g || '*' === f[0]) && (k = m[f[1] + ' ' + o])) {
j = m[j], j === !0 ? i = k : k === !0 && (i = j);
break
}
}
!i && !k && J.error('No conversion from ' + h.replace(' ', ' to ')), i !== !0 && (c = i ? i(c) : k(j(c)))
}
}
return c
}
function k(a, c, d) {
var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
for (f in k)
f in d && (c[k[f]] = d[f]);
for (; '*' === j[0];)
j.shift(), e === b && (e = a.mimeType || c.getResponseHeader('content-type'));
if (e)
for (f in i)
if (i[f] && i[f].test(e)) {
j.unshift(f);
break
}
if (j[0] in d)
g = j[0];
else {
for (f in d) {
if (!j[0] || a.converters[f + ' ' + j[0]]) {
g = f;
break
}
h || (h = f)
}
g = g || h
}
if (g)
return g !== j[0] && j.unshift(g), d[g]
}
function l(a, b, c, d) {
if (J.isArray(b))
J.each(b, function (b, e) {
c || Sa.test(a) ? d(a, e) : l(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d)
});
else if (c || 'object' !== J.type(b))
d(a, b);
else
for (var e in b)
l(a + '[' + e + ']', b[e], c, d)
}
function m(a, c) {
var d, e, f = J.ajaxSettings.flatOptions || {};
for (d in c)
c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
e && J.extend(!0, a, e)
}
function n(a, c, d, e, f, g) {
f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === fb; j < k && (l || !h); j++)
h = i[j](c, d, e), 'string' == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
return (l || !h) && !g['*'] && (h = n(a, c, d, e, '*', g)), h
}
function o(a) {
return function (b, c) {
if ('string' != typeof b && (c = b, b = '*'), J.isFunction(c))
for (var d, e, f, g = b.toLowerCase().split(bb), h = 0, i = g.length; h < i; h++)
d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || '*'), e = a[d] = a[d] || [], e[f ? 'unshift' : 'push'](c)
}
}
function p(a, b, c) {
var d = 'width' === b ? a.offsetWidth : a.offsetHeight, e = 'width' === b ? 1 : 0, f = 4;
if (d > 0) {
if ('border' !== c)
for (; e < f; e += 2)
c || (d -= parseFloat(J.css(a, 'padding' + Oa[e])) || 0), 'margin' === c ? d += parseFloat(J.css(a, c + Oa[e])) || 0 : d -= parseFloat(J.css(a, 'border' + Oa[e] + 'Width')) || 0;
return d + 'px'
}
if (d = Da(a, b), (d < 0 || null == d) && (d = a.style[b]), Ka.test(d))
return d;
if (d = parseFloat(d) || 0, c)
for (; e < f; e += 2)
d += parseFloat(J.css(a, 'padding' + Oa[e])) || 0, 'padding' !== c && (d += parseFloat(J.css(a, 'border' + Oa[e] + 'Width')) || 0), 'margin' === c && (d += parseFloat(J.css(a, c + Oa[e])) || 0);
return d + 'px'
}
function q(a) {
var b = G.createElement('div');
return Ca.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
}
function r(a) {
var b = (a.nodeName || '').toLowerCase();
'input' === b ? s(a) : 'script' !== b && 'undefined' != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName('input'), s)
}
function s(a) {
'checkbox' !== a.type && 'radio' !== a.type || (a.defaultChecked = a.checked)
}
function t(a) {
return 'undefined' != typeof a.getElementsByTagName ? a.getElementsByTagName('*') : 'undefined' != typeof a.querySelectorAll ? a.querySelectorAll('*') : []
}
function u(a, b) {
var c;
1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), 'object' === c ? b.outerHTML = a.outerHTML : 'input' !== c || 'checkbox' !== a.type && 'radio' !== a.type ? 'option' === c ? b.selected = a.defaultSelected : 'input' === c || 'textarea' === c ? b.defaultValue = a.defaultValue : 'script' === c && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(J.expando), b.removeAttribute('_submit_attached'), b.removeAttribute('_change_attached'))
}
function v(a, b) {
if (1 === b.nodeType && J.hasData(a)) {
var c, d, e, f = J._data(a), g = J._data(b, f), h = f.events;
if (h) {
delete g.handle, g.events = {};
for (c in h)
for (d = 0, e = h[c].length; d < e; d++)
J.event.add(b, c, h[c][d])
}
g.data && (g.data = J.extend({}, g.data))
}
}
function w(a, b) {
return J.nodeName(a, 'table') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a
}
function x(a) {
var b = oa.split('|'), c = a.createDocumentFragment();
if (c.createElement)
for (; b.length;)
c.createElement(b.pop());
return c
}
function y(a, b, c) {
if (b = b || 0, J.isFunction(b))
return J.grep(a, function (a, d) {
var e = !!b.call(a, d, a);
return e === c
});
if (b.nodeType)
return J.grep(a, function (a, d) {
return a === b === c
});
if ('string' == typeof b) {
var d = J.grep(a, function (a) {
return 1 === a.nodeType
});
if (ka.test(b))
return J.filter(b, d, !c);
b = J.filter(b, d)
}
return J.grep(a, function (a, d) {
return J.inArray(a, b) >= 0 === c
})
}
function z(a) {
return !a || !a.parentNode || 11 === a.parentNode.nodeType
}
function A() {
return !0
}
function B() {
return !1
}
function C(a, b, c) {
var d = b + 'defer', e = b + 'queue', f = b + 'mark', g = J._data(a, d);
g && ('queue' === c || !J._data(a, e)) && ('mark' === c || !J._data(a, f)) && setTimeout(function () {
!J._data(a, e) && !J._data(a, f) && (J.removeData(a, d, !0), g.fire())
}, 0)
}
function D(a) {
for (var b in a)
if (('data' !== b || !J.isEmptyObject(a[b])) && 'toJSON' !== b)
return !1;
return !0
}
function E(a, c, d) {
if (d === b && 1 === a.nodeType) {
var e = 'data-' + c.replace(N, '-$1').toLowerCase();
if (d = a.getAttribute(e), 'string' == typeof d) {
try {
d = 'true' === d || 'false' !== d && ('null' === d ? null : J.isNumeric(d) ? +d : M.test(d) ? J.parseJSON(d) : d)
} catch (f) {
}
J.data(a, c, d)
} else
d = b
}
return d
}
function F(a) {
var b, c, d = K[a] = {};
for (a = a.split(/\s+/), b = 0, c = a.length; b < c; b++)
d[a[b]] = !0;
return d
}
var G = a.document, H = a.navigator, I = a.location, J = function () {
function c() {
if (!h.isReady) {
try {
G.documentElement.doScroll('left')
} catch (a) {
return void setTimeout(c, 1)
}
h.ready()
}
}
var d, e, f, g, h = function (a, b) {
return new h.fn.init(a, b, d)
}, i = a.jQuery, j = a.$, k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, l = /\S/, m = /^\s+/, n = /\s+$/, o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, p = /^[\],:{}\s]*$/, q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, s = /(?:^|:|,)(?:\s*\[)+/g, t = /(webkit)[ \/]([\w.]+)/, u = /(opera)(?:.*version)?[ \/]([\w.]+)/, v = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, x = /-([a-z]|[0-9])/gi, y = /^-ms-/, z = function (a, b) {
return (b + '').toUpperCase()
}, A = H.userAgent, B = Object.prototype.toString, C = Object.prototype.hasOwnProperty, D = Array.prototype.push, E = Array.prototype.slice, F = String.prototype.trim, I = Array.prototype.indexOf, J = {};
return h.fn = h.prototype = {
constructor: h,
init: function (a, c, d) {
var e, f, g, i;
if (!a)
return this;
if (a.nodeType)
return this.context = this[0] = a, this.length = 1, this;
if ('body' === a && !c && G.body)
return this.context = G, this[0] = G.body, this.selector = a, this.length = 1, this;
if ('string' == typeof a) {
if (e = '<' !== a.charAt(0) || '>' !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [
null,
a,
null
], e && (e[1] || !c)) {
if (e[1])
return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : G, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [G.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
if (f = G.getElementById(e[2]), f && f.parentNode) {
if (f.id !== e[2])
return d.find(a);
this.length = 1, this[0] = f
}
return this.context = G, this.selector = a, this
}
return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
}
return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
},
selector: '',
jquery: '1.7.2',
length: 0,
size: function () {
return this.length
},
toArray: function () {
return E.call(this, 0)
},
get: function (a) {
return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
},
pushStack: function (a, b, c) {
var d = this.constructor();
return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, 'find' === b ? d.selector = this.selector + (this.selector ? ' ' : '') + c : b && (d.selector = this.selector + '.' + b + '(' + c + ')'), d
},
each: function (a, b) {
return h.each(this, a, b)
},
ready: function (a) {
return h.bindReady(), f.add(a), this
},
eq: function (a) {
return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
},
first: function () {
return this.eq(0)
},
last: function () {
return this.eq(-1)
},
slice: function () {
return this.pushStack(E.apply(this, arguments), 'slice', E.call(arguments).join(','))
},
map: function (a) {
return this.pushStack(h.map(this, function (b, c) {
return a.call(b, c, b)
}))
},
end: function () {
return this.prevObject || this.constructor(null)
},
push: D,
sort: [].sort,
splice: [].splice
}, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function () {
var a, c, d, e, f, g, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
for ('boolean' == typeof i && (l = i, i = arguments[1] || {}, j = 2), 'object' != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); j < k; j++)
if (null != (a = arguments[j]))
for (c in a)
d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
return i
}, h.extend({
noConflict: function (b) {
return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h
},
isReady: !1,
readyWait: 1,
holdReady: function (a) {
a ? h.readyWait++ : h.ready(!0)
},
ready: function (a) {
if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
if (!G.body)
return setTimeout(h.ready, 1);
if (h.isReady = !0, a !== !0 && --h.readyWait > 0)
return;
f.fireWith(G, [h]), h.fn.trigger && h(G).trigger('ready').off('ready')
}
},
bindReady: function () {
if (!f) {
if (f = h.Callbacks('once memory'), 'complete' === G.readyState)
return setTimeout(h.ready, 1);
if (G.addEventListener)
G.addEventListener('DOMContentLoaded', g, !1), a.addEventListener('load', h.ready, !1);
else if (G.attachEvent) {
G.attachEvent('onreadystatechange', g), a.attachEvent('onload', h.ready);
var b = !1;
try {
b = null == a.frameElement
} catch (d) {
}
G.documentElement.doScroll && b && c()
}
}
},
isFunction: function (a) {
return 'function' === h.type(a)
},
isArray: Array.isArray || function (a) {
return 'array' === h.type(a)
},
isWindow: function (a) {
return null != a && a == a.window
},
isNumeric: function (a) {
return !isNaN(parseFloat(a)) && isFinite(a)
},
type: function (a) {
return null == a ? String(a) : J[B.call(a)] || 'object'
},
isPlainObject: function (a) {
if (!a || 'object' !== h.type(a) || a.nodeType || h.isWindow(a))
return !1;
try {
if (a.constructor && !C.call(a, 'constructor') && !C.call(a.constructor.prototype, 'isPrototypeOf'))
return !1
} catch (c) {
return !1
}
var d;
for (d in a);
return d === b || C.call(a, d)
},
isEmptyObject: function (a) {
for (var b in a)
return !1;
return !0
},
error: function (a) {
throw new Error(a)
},
parseJSON: function (b) {
return 'string' == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, '@').replace(r, ']').replace(s, '')) ? new Function('return ' + b)() : void h.error('Invalid JSON: ' + b)) : null
},
parseXML: function (c) {
if ('string' != typeof c || !c)
return null;
var d, e;
try {
a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, 'text/xml')) : (d = new ActiveXObject('Microsoft.XMLDOM'), d.async = 'false', d.loadXML(c))
} catch (f) {
d = b
}
return (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) && h.error('Invalid XML: ' + c), d
},
noop: function () {
},
globalEval: function (b) {
b && l.test(b) && (a.execScript || function (b) {
a.eval.call(a, b)
})(b)
},
camelCase: function (a) {
return a.replace(y, 'ms-').replace(x, z)
},
nodeName: function (a, b) {
return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
},
each: function (a, c, d) {
var e, f = 0, g = a.length, i = g === b || h.isFunction(a);
if (d)
if (i) {
for (e in a)
if (c.apply(a[e], d) === !1)
break
} else
for (; f < g && c.apply(a[f++], d) !== !1;);
else if (i) {
for (e in a)
if (c.call(a[e], e, a[e]) === !1)
break
} else
for (; f < g && c.call(a[f], f, a[f++]) !== !1;);
return a
},
trim: F ? function (a) {
return null == a ? '' : F.call(a)
} : function (a) {
return null == a ? '' : (a + '').replace(m, '').replace(n, '')
},
makeArray: function (a, b) {
var c = b || [];
if (null != a) {
var d = h.type(a);
null == a.length || 'string' === d || 'function' === d || 'regexp' === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
}
return c
},
inArray: function (a, b, c) {
var d;
if (b) {
if (I)
return I.call(b, a, c);
for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
if (c in b && b[c] === a)
return c
}
return -1
},
merge: function (a, c) {
var d = a.length, e = 0;
if ('number' == typeof c.length)
for (var f = c.length; e < f; e++)
a[d++] = c[e];
else
for (; c[e] !== b;)
a[d++] = c[e++];
return a.length = d, a
},
grep: function (a, b, c) {
var d, e = [];
c = !!c;
for (var f = 0, g = a.length; f < g; f++)
d = !!b(a[f], f), c !== d && e.push(a[f]);
return e
},
map: function (a, c, d) {
var e, f, g = [], i = 0, j = a.length, k = a instanceof h || j !== b && 'number' == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
if (k)
for (; i < j; i++)
e = c(a[i], i, d), null != e && (g[g.length] = e);
else
for (f in a)
e = c(a[f], f, d), null != e && (g[g.length] = e);
return g.concat.apply([], g)
},
guid: 1,
proxy: function (a, c) {
if ('string' == typeof c) {
var d = a[c];
c = a, a = d
}
if (!h.isFunction(a))
return b;
var e = E.call(arguments, 2), f = function () {
return a.apply(c, e.concat(E.call(arguments)))
};
return f.guid = a.guid = a.guid || f.guid || h.guid++, f
},
access: function (a, c, d, e, f, g, i) {
var j, k = null == d, l = 0, m = a.length;
if (d && 'object' == typeof d) {
for (l in d)
h.access(a, c, l, d[l], 1, g, e);
f = 1
} else if (e !== b) {
if (j = i === b && h.isFunction(e), k && (j ? (j = c, c = function (a, b, c) {
return j.call(h(a), c)
}) : (c.call(a, e), c = null)), c)
for (; l < m; l++)
c(a[l], d, j ? e.call(a[l], l, c(a[l], d)) : e, i);
f = 1
}
return f ? a : k ? c.call(a) : m ? c(a[0], d) : g
},
now: function () {
return new Date().getTime()
},
uaMatch: function (a) {
a = a.toLowerCase();
var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf('compatible') < 0 && w.exec(a) || [];
return {
browser: b[1] || '',
version: b[2] || '0'
}
},
sub: function () {
function a(b, c) {
return new a.fn.init(b, c)
}
h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
}, a.fn.init.prototype = a.fn;
var b = a(G);
return a
},
browser: {}
}), h.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (a, b) {
J['[object ' + b + ']'] = b.toLowerCase()
}), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test(' ') && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(G), G.addEventListener ? g = function () {
G.removeEventListener('DOMContentLoaded', g, !1), h.ready()
} : G.attachEvent && (g = function () {
'complete' === G.readyState && (G.detachEvent('onreadystatechange', g), h.ready())
}), h
}(), K = {};
J.Callbacks = function (a) {
a = a ? K[a] || F(a) : {};
var c, d, e, f, g, h, i = [], j = [], k = function (b) {
var c, d, e, f;
for (c = 0, d = b.length; c < d; c++)
e = b[c], f = J.type(e), 'array' === f ? k(e) : 'function' === f && (!a.unique || !m.has(e)) && i.push(e)
}, l = function (b, k) {
for (k = k || [], c = !a.memory || [
b,
k
], d = !0, e = !0, h = f || 0, f = 0, g = i.length; i && h < g; h++)
if (i[h].apply(b, k) === !1 && a.stopOnFalse) {
c = !0;
break
}
e = !1, i && (a.once ? c === !0 ? m.disable() : i = [] : j && j.length && (c = j.shift(), m.fireWith(c[0], c[1])))
}, m = {
add: function () {
if (i) {
var a = i.length;
k(arguments), e ? g = i.length : c && c !== !0 && (f = a, l(c[0], c[1]))
}
return this
},
remove: function () {
if (i)
for (var b = arguments, c = 0, d = b.length; c < d; c++)
for (var f = 0; f < i.length && (b[c] !== i[f] || (e && f <= g && (g--, f <= h && h--), i.splice(f--, 1), !a.unique)); f++);
return this
},
has: function (a) {
if (i)
for (var b = 0, c = i.length; b < c; b++)
if (a === i[b])
return !0;
return !1
},
empty: function () {
return i = [], this
},
disable: function () {
return i = j = c = b, this
},
disabled: function () {
return !i
},
lock: function () {
return j = b, (!c || c === !0) && m.disable(), this
},
locked: function () {
return !j
},
fireWith: function (b, d) {
return j && (e ? a.once || j.push([
b,
d
]) : (!a.once || !c) && l(b, d)), this
},
fire: function () {
return m.fireWith(this, arguments), this
},
fired: function () {
return !!d
}
};
return m
};
var L = [].slice;
J.extend({
Deferred: function (a) {
var b, c = J.Callbacks('once memory'), d = J.Callbacks('once memory'), e = J.Callbacks('memory'), f = 'pending', g = {
resolve: c,
reject: d,
notify: e
}, h = {
done: c.add,
fail: d.add,
progress: e.add,
state: function () {
return f
},
isResolved: c.fired,
isRejected: d.fired,
then: function (a, b, c) {
return i.done(a).fail(b).progress(c), this
},
always: function () {
return i.done.apply(i, arguments).fail.apply(i, arguments), this
},
pipe: function (a, b, c) {
return J.Deferred(function (d) {
J.each({
done: [
a,
'resolve'
],
fail: [
b,
'reject'
],
progress: [
c,
'notify'
]
}, function (a, b) {
var c, e = b[0], f = b[1];
J.isFunction(e) ? i[a](function () {
c = e.apply(this, arguments), c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + 'With'](this === i ? d : this, [c])
}) : i[a](d[f])
})
}).promise()
},
promise: function (a) {
if (null == a)
a = h;
else
for (var b in h)
a[b] = h[b];
return a
}
}, i = h.promise({});
for (b in g)
i[b] = g[b].fire, i[b + 'With'] = g[b].fireWith;
return i.done(function () {
f = 'resolved'
}, d.disable, e.lock).fail(function () {
f = 'rejected'
}, c.disable, e.lock), a && a.call(i, i), i
},
when: function (a) {
function b(a) {
return function (b) {
g[a] = arguments.length > 1 ? L.call(arguments, 0) : b, i.notifyWith(j, g)
}
}
function c(a) {
return function (b) {
d[a] = arguments.length > 1 ? L.call(arguments, 0) : b, --h || i.resolveWith(i, d)
}
}
var d = L.call(arguments, 0), e = 0, f = d.length, g = Array(f), h = f, i = f <= 1 && a && J.isFunction(a.promise) ? a : J.Deferred(), j = i.promise();
if (f > 1) {
for (; e < f; e++)
d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
h || i.resolveWith(i, d)
} else
i !== a && i.resolveWith(i, f ? [a] : []);
return j
}
}), J.support = function () {
var b, c, d, e, f, g, h, i, j, k, l, m = G.createElement('div');
G.documentElement;
if (m.setAttribute('className', 't'), m.innerHTML = '   <link/><table></table><a href=\'/a\' style=\'top:1px;float:left;opacity:.55;\'>a</a><input type=\'checkbox\'/>', c = m.getElementsByTagName('*'), d = m.getElementsByTagName('a')[0], !c || !c.length || !d)
return {};
e = G.createElement('select'), f = e.appendChild(G.createElement('option')), g = m.getElementsByTagName('input')[0], b = {
leadingWhitespace: 3 === m.firstChild.nodeType,
tbody: !m.getElementsByTagName('tbody').length,
htmlSerialize: !!m.getElementsByTagName('link').length,
style: /top/.test(d.getAttribute('style')),
hrefNormalized: '/a' === d.getAttribute('href'),
opacity: /^0.55/.test(d.style.opacity),
cssFloat: !!d.style.cssFloat,
checkOn: 'on' === g.value,
optSelected: f.selected,
getSetAttribute: 't' !== m.className,
enctype: !!G.createElement('form').enctype,
html5Clone: '<:nav></:nav>' !== G.createElement('nav').cloneNode(!0).outerHTML,
submitBubbles: !0,
changeBubbles: !0,
focusinBubbles: !1,
deleteExpando: !0,
noCloneEvent: !0,
inlineBlockNeedsLayout: !1,
shrinkWrapBlocks: !1,
reliableMarginRight: !0,
pixelMargin: !0
}, J.boxModel = b.boxModel = 'CSS1Compat' === G.compatMode, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
try {
delete m.test
} catch (n) {
b.deleteExpando = !1
}
if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent('onclick', function () {
b.noCloneEvent = !1
}), m.cloneNode(!0).fireEvent('onclick')), g = G.createElement('input'), g.value = 't', g.setAttribute('type', 'radio'), b.radioValue = 't' === g.value, g.setAttribute('checked', 'checked'), g.setAttribute('name', 't'), m.appendChild(g), h = G.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
for (k in {
submit: 1,
change: 1,
focusin: 1
})
j = 'on' + k, l = j in m, l || (m.setAttribute(j, 'return;'), l = 'function' == typeof m[j]), b[k + 'Bubbles'] = l;
return h.removeChild(m), h = e = f = m = g = null, J(function () {
var c, d, e, f, g, h, j, k, n, o, p, q, r = G.getElementsByTagName('body')[0];
!r || (j = 1, q = 'padding:0;margin:0;border:', o = 'position:absolute;top:0;left:0;width:1px;height:1px;', p = q + '0;visibility:hidden;', k = 'style=\'' + o + q + '5px solid #000;', n = '<div ' + k + 'display:block;\'><div style=\'' + q + '0;display:block;overflow:hidden;\'></div></div><table ' + k + '\' cellpadding=\'0\' cellspacing=\'0\'><tr><td></td></tr></table>', c = G.createElement('div'), c.style.cssText = p + 'width:0;height:0;position:static;top:0;margin-top:' + j + 'px', r.insertBefore(c, r.firstChild), m = G.createElement('div'), c.appendChild(m), m.innerHTML = '<table><tr><td style=\'' + q + '0;display:none\'></td><td>t</td></tr></table>', i = m.getElementsByTagName('td'), l = 0 === i[0].offsetHeight, i[0].style.display = '', i[1].style.display = 'none', b.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, a.getComputedStyle && (m.innerHTML = '', h = G.createElement('div'), h.style.width = '0', h.style.marginRight = '0', m.style.width = '2px', m.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || { marginRight: 0 }).marginRight, 10) || 0)), 'undefined' != typeof m.style.zoom && (m.innerHTML = '', m.style.width = m.style.padding = '1px', m.style.border = 0, m.style.overflow = 'hidden', m.style.display = 'inline', m.style.zoom = 1, b.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = 'block', m.style.overflow = 'visible', m.innerHTML = '<div style=\'width:5px;\'></div>', b.shrinkWrapBlocks = 3 !== m.offsetWidth), m.style.cssText = o + p, m.innerHTML = n, d = m.firstChild, e = d.firstChild, f = d.nextSibling.firstChild.firstChild, g = {
doesNotAddBorder: 5 !== e.offsetTop,
doesAddBorderForTableAndCells: 5 === f.offsetTop
}, e.style.position = 'fixed', e.style.top = '20px', g.fixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = '', d.style.overflow = 'hidden', d.style.position = 'relative', g.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, g.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, a.getComputedStyle && (m.style.marginTop = '1%', b.pixelMargin = '1%' !== (a.getComputedStyle(m, null) || { marginTop: 0 }).marginTop), 'undefined' != typeof c.style.zoom && (c.style.zoom = 1), r.removeChild(c), h = m = c = null, J.extend(b, g))
}), b
}();
var M = /^(?:\{.*\}|\[.*\])$/, N = /([A-Z])/g;
J.extend({
cache: {},
uuid: 0,
expando: 'jQuery' + (J.fn.jquery + Math.random()).replace(/\D/g, ''),
noData: {
embed: !0,
object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
applet: !0
},
hasData: function (a) {
return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando], !!a && !D(a)
},
data: function (a, c, d, e) {
if (J.acceptData(a)) {
var f, g, h, i = J.expando, j = 'string' == typeof c, k = a.nodeType, l = k ? J.cache : a, m = k ? a[i] : a[i] && i, n = 'events' === c;
if ((!m || !l[m] || !n && !e && !l[m].data) && j && d === b)
return;
return m || (k ? a[i] = m = ++J.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = J.noop)), 'object' != typeof c && 'function' != typeof c || (e ? l[m] = J.extend(l[m], c) : l[m].data = J.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[J.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[J.camelCase(c)])) : h = g, h)
}
},
removeData: function (a, b, c) {
if (J.acceptData(a)) {
var d, e, f, g = J.expando, h = a.nodeType, i = h ? J.cache : a, j = h ? a[g] : g;
if (!i[j])
return;
if (b && (d = c ? i[j] : i[j].data)) {
J.isArray(b) || (b in d ? b = [b] : (b = J.camelCase(b), b = b in d ? [b] : b.split(' ')));
for (e = 0, f = b.length; e < f; e++)
delete d[b[e]];
if (!(c ? D : J.isEmptyObject)(d))
return
}
if (!c && (delete i[j].data, !D(i[j])))
return;
J.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null, h && (J.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null)
}
},
_data: function (a, b, c) {
return J.data(a, b, c, !0)
},
acceptData: function (a) {
if (a.nodeName) {
var b = J.noData[a.nodeName.toLowerCase()];
if (b)
return b !== !0 && a.getAttribute('classid') === b
}
return !0
}
}), J.fn.extend({
data: function (a, c) {
var d, e, f, g, h, i = this[0], j = 0, k = null;
if (a === b) {
if (this.length && (k = J.data(i), 1 === i.nodeType && !J._data(i, 'parsedAttrs'))) {
for (f = i.attributes, h = f.length; j < h; j++)
g = f[j].name, 0 === g.indexOf('data-') && (g = J.camelCase(g.substring(5)), E(i, g, k[g]));
J._data(i, 'parsedAttrs', !0)
}
return k
}
return 'object' == typeof a ? this.each(function () {
J.data(this, a)
}) : (d = a.split('.', 2), d[1] = d[1] ? '.' + d[1] : '', e = d[1] + '!', J.access(this, function (c) {
return c === b ? (k = this.triggerHandler('getData' + e, [d[0]]), k === b && i && (k = J.data(i, a), k = E(i, a, k)), k === b && d[1] ? this.data(d[0]) : k) : (d[1] = c, void this.each(function () {
var b = J(this);
b.triggerHandler('setData' + e, d), J.data(this, a, c), b.triggerHandler('changeData' + e, d)
}))
}, null, c, arguments.length > 1, null, !1))
},
removeData: function (a) {
return this.each(function () {
J.removeData(this, a)
})
}
}), J.extend({
_mark: function (a, b) {
a && (b = (b || 'fx') + 'mark', J._data(a, b, (J._data(a, b) || 0) + 1))
},
_unmark: function (a, b, c) {
if (a !== !0 && (c = b, b = a, a = !1), b) {
c = c || 'fx';
var d = c + 'mark', e = a ? 0 : (J._data(b, d) || 1) - 1;
e ? J._data(b, d, e) : (J.removeData(b, d, !0), C(b, c, 'mark'))
}
},
queue: function (a, b, c) {
var d;
if (a)
return b = (b || 'fx') + 'queue', d = J._data(a, b), c && (!d || J.isArray(c) ? d = J._data(a, b, J.makeArray(c)) : d.push(c)), d || []
},
dequeue: function (a, b) {
b = b || 'fx';
var c = J.queue(a, b), d = c.shift(), e = {};
'inprogress' === d && (d = c.shift()), d && ('fx' === b && c.unshift('inprogress'), J._data(a, b + '.run', e), d.call(a, function () {
J.dequeue(a, b)
}, e)), c.length || (J.removeData(a, b + 'queue ' + b + '.run', !0), C(a, b, 'queue'))
}
}), J.fn.extend({
queue: function (a, c) {
var d = 2;
return 'string' != typeof a && (c = a, a = 'fx', d--), arguments.length < d ? J.queue(this[0], a) : c === b ? this : this.each(function () {
var b = J.queue(this, a, c);
'fx' === a && 'inprogress' !== b[0] && J.dequeue(this, a)
})
},
dequeue: function (a) {
return this.each(function () {
J.dequeue(this, a)
})
},
delay: function (a, b) {
return a = J.fx ? J.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
var d = setTimeout(b, a);
c.stop = function () {
clearTimeout(d)
}
})
},
clearQueue: function (a) {
return this.queue(a || 'fx', [])
},
promise: function (a, c) {
function d() {
--i || f.resolveWith(g, [g])
}
'string' != typeof a && (c = a, a = b), a = a || 'fx';
for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + 'defer', k = a + 'queue', l = a + 'mark'; h--;)
(e = J.data(g[h], j, b, !0) || (J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks('once memory'), !0)) && (i++, e.add(d));
return d(), f.promise(c)
}
});
var O, P, Q, R = /[\n\t\r]/g, S = /\s+/, T = /\r/g, U = /^(?:button|input)$/i, V = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea)?$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Y = J.support.getSetAttribute;
J.fn.extend({
attr: function (a, b) {
return J.access(this, J.attr, a, b, arguments.length > 1)
},
removeAttr: function (a) {
return this.each(function () {
J.removeAttr(this, a)
})
},
prop: function (a, b) {
return J.access(this, J.prop, a, b, arguments.length > 1)
},
removeProp: function (a) {
return a = J.propFix[a] || a, this.each(function () {
try {
this[a] = b, delete this[a]
} catch (c) {
}
})
},
addClass: function (a) {
var b, c, d, e, f, g, h;
if (J.isFunction(a))
return this.each(function (b) {
J(this).addClass(a.call(this, b, this.className))
});
if (a && 'string' == typeof a)
for (b = a.split(S), c = 0, d = this.length; c < d; c++)
if (e = this[c], 1 === e.nodeType)
if (e.className || 1 !== b.length) {
for (f = ' ' + e.className + ' ', g = 0, h = b.length; g < h; g++)
~f.indexOf(' ' + b[g] + ' ') || (f += b[g] + ' ');
e.className = J.trim(f)
} else
e.className = a;
return this
},
removeClass: function (a) {
var c, d, e, f, g, h, i;
if (J.isFunction(a))
return this.each(function (b) {
J(this).removeClass(a.call(this, b, this.className))
});
if (a && 'string' == typeof a || a === b)
for (c = (a || '').split(S), d = 0, e = this.length; d < e; d++)
if (f = this[d], 1 === f.nodeType && f.className)
if (a) {
for (g = (' ' + f.className + ' ').replace(R, ' '), h = 0, i = c.length; h < i; h++)
g = g.replace(' ' + c[h] + ' ', ' ');
f.className = J.trim(g)
} else
f.className = '';
return this
},
toggleClass: function (a, b) {
var c = typeof a, d = 'boolean' == typeof b;
return J.isFunction(a) ? this.each(function (c) {
J(this).toggleClass(a.call(this, c, this.className, b), b)
}) : this.each(function () {
if ('string' === c)
for (var e, f = 0, g = J(this), h = b, i = a.split(S); e = i[f++];)
h = d ? h : !g.hasClass(e), g[h ? 'addClass' : 'removeClass'](e);
else
'undefined' !== c && 'boolean' !== c || (this.className && J._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : J._data(this, '__className__') || '')
})
},
hasClass: function (a) {
for (var b = ' ' + a + ' ', c = 0, d = this.length; c < d; c++)
if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(R, ' ').indexOf(b) > -1)
return !0;
return !1
},
val: function (a) {
var c, d, e, f = this[0];
return arguments.length ? (e = J.isFunction(a), this.each(function (d) {
var f, g = J(this);
1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = '' : 'number' == typeof f ? f += '' : J.isArray(f) && (f = J.map(f, function (a) {
return null == a ? '' : a + ''
})), c = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], c && 'set' in c && c.set(this, f, 'value') !== b || (this.value = f))
})) : f ? (c = J.valHooks[f.type] || J.valHooks[f.nodeName.toLowerCase()], c && 'get' in c && (d = c.get(f, 'value')) !== b ? d : (d = f.value, 'string' == typeof d ? d.replace(T, '') : null == d ? '' : d)) : void 0
}
}), J.extend({
valHooks: {
option: {
get: function (a) {
var b = a.attributes.value;
return !b || b.specified ? a.value : a.text
}
},
select: {
get: function (a) {
var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = 'select-one' === a.type;
if (f < 0)
return null;
for (c = i ? f : 0, d = i ? f + 1 : h.length; c < d; c++)
if (e = h[c], e.selected && (J.support.optDisabled ? !e.disabled : null === e.getAttribute('disabled')) && (!e.parentNode.disabled || !J.nodeName(e.parentNode, 'optgroup'))) {
if (b = J(e).val(), i)
return b;
g.push(b)
}
return i && !g.length && h.length ? J(h[f]).val() : g
},
set: function (a, b) {
var c = J.makeArray(b);
return J(a).find('option').each(function () {
this.selected = J.inArray(J(this).val(), c) >= 0
}), c.length || (a.selectedIndex = -1), c
}
}
},
attrFn: {
val: !0,
css: !0,
html: !0,
text: !0,
data: !0,
width: !0,
height: !0,
offset: !0
},
attr: function (a, c, d, e) {
var f, g, h, i = a.nodeType;
if (a && 3 !== i && 8 !== i && 2 !== i)
return e && c in J.attrFn ? J(a)[c](d) : 'undefined' == typeof a.getAttribute ? J.prop(a, c, d) : (h = 1 !== i || !J.isXMLDoc(a), h && (c = c.toLowerCase(), g = J.attrHooks[c] || (X.test(c) ? P : O)), d !== b ? null === d ? void J.removeAttr(a, c) : g && 'set' in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, '' + d), d) : g && 'get' in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
},
removeAttr: function (a, b) {
var c, d, e, f, g, h = 0;
if (b && 1 === a.nodeType)
for (d = b.toLowerCase().split(S), f = d.length; h < f; h++)
e = d[h], e && (c = J.propFix[e] || e, g = X.test(e), g || J.attr(a, e, ''), a.removeAttribute(Y ? e : c), g && c in a && (a[c] = !1))
},
attrHooks: {
type: {
set: function (a, b) {
if (U.test(a.nodeName) && a.parentNode)
J.error('type property can\'t be changed');
else if (!J.support.radioValue && 'radio' === b && J.nodeName(a, 'input')) {
var c = a.value;
return a.setAttribute('type', b), c && (a.value = c), b
}
}
},
value: {
get: function (a, b) {
return O && J.nodeName(a, 'button') ? O.get(a, b) : b in a ? a.value : null
},
set: function (a, b, c) {
return O && J.nodeName(a, 'button') ? O.set(a, b, c) : void (a.value = b)
}
}
},
propFix: {
tabindex: 'tabIndex',
readonly: 'readOnly',
for: 'htmlFor',
class: 'className',
maxlength: 'maxLength',
cellspacing: 'cellSpacing',
cellpadding: 'cellPadding',
rowspan: 'rowSpan',
colspan: 'colSpan',
usemap: 'useMap',
frameborder: 'frameBorder',
contenteditable: 'contentEditable'
},
prop: function (a, c, d) {
var e, f, g, h = a.nodeType;
if (a && 3 !== h && 8 !== h && 2 !== h)
return g = 1 !== h || !J.isXMLDoc(a), g && (c = J.propFix[c] || c, f = J.propHooks[c]), d !== b ? f && 'set' in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && 'get' in f && null !== (e = f.get(a, c)) ? e : a[c]
},
propHooks: {
tabIndex: {
get: function (a) {
var c = a.getAttributeNode('tabindex');
return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b
}
}
}
}), J.attrHooks.tabindex = J.propHooks.tabIndex, P = {
get: function (a, c) {
var d, e = J.prop(a, c);
return e === !0 || 'boolean' != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
},
set: function (a, b, c) {
var d;
return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
}
}, Y || (Q = {
name: !0,
id: !0,
coords: !0
}, O = J.valHooks.button = {
get: function (a, c) {
var d;
return d = a.getAttributeNode(c), d && (Q[c] ? '' !== d.nodeValue : d.specified) ? d.nodeValue : b
},
set: function (a, b, c) {
var d = a.getAttributeNode(c);
return d || (d = G.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ''
}
}, J.attrHooks.tabindex.set = O.set, J.each([
'width',
'height'
], function (a, b) {
J.attrHooks[b] = J.extend(J.attrHooks[b], {
set: function (a, c) {
if ('' === c)
return a.setAttribute(b, 'auto'), c
}
})
}), J.attrHooks.contenteditable = {
get: O.get,
set: function (a, b, c) {
'' === b && (b = 'false'), O.set(a, b, c)
}
}), J.support.hrefNormalized || J.each([
'href',
'src',
'width',
'height'
], function (a, c) {
J.attrHooks[c] = J.extend(J.attrHooks[c], {
get: function (a) {
var d = a.getAttribute(c, 2);
return null === d ? b : d
}
})
}), J.support.style || (J.attrHooks.style = {
get: function (a) {
return a.style.cssText.toLowerCase() || b
},
set: function (a, b) {
return a.style.cssText = '' + b
}
}), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
get: function (a) {
var b = a.parentNode;
return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
}
})), J.support.enctype || (J.propFix.enctype = 'encoding'), J.support.checkOn || J.each([
'radio',
'checkbox'
], function () {
J.valHooks[this] = {
get: function (a) {
return null === a.getAttribute('value') ? 'on' : a.value
}
}
}), J.each([
'radio',
'checkbox'
], function () {
J.valHooks[this] = J.extend(J.valHooks[this], {
set: function (a, b) {
if (J.isArray(b))
return a.checked = J.inArray(J(a).val(), b) >= 0
}
})
});
var Z = /^(?:textarea|input|select)$/i, $ = /^([^\.]*)?(?:\.(.+))?$/, _ = /(?:^|\s)hover(\.\S+)?\b/, aa = /^key/, ba = /^(?:mouse|contextmenu)|click/, ca = /^(?:focusinfocus|focusoutblur)$/, da = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, ea = function (a) {
var b = da.exec(a);
return b && (b[1] = (b[1] || '').toLowerCase(), b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)')), b
}, fa = function (a, b) {
var c = a.attributes || {};
return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c.class || {}).value))
}, ga = function (a) {
return J.event.special.hover ? a : a.replace(_, 'mouseenter$1 mouseleave$1')
};
J.event = {
add: function (a, c, d, e, f) {
var g, h, i, j, k, l, m, n, o, p, q;
if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = J.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
return 'undefined' == typeof J || a && J.event.triggered === a.type ? b : J.event.dispatch.apply(h.elem, arguments)
}, h.elem = a), c = J.trim(ga(c)).split(' '), j = 0; j < c.length; j++)
k = $.exec(c[j]) || [], l = k[1], m = (k[2] || '').split('.').sort(), q = J.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = J.event.special[l] || {}, n = J.extend({
type: l,
origType: k[1],
data: e,
handler: d,
guid: d.guid,
selector: f,
quick: f && ea(f),
namespace: m.join('.')
}, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent('on' + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), J.event.global[l] = !0;
a = null
}
},
global: {},
remove: function (a, b, c, d, e) {
var f, g, h, i, j, k, l, m, n, o, p, q, r = J.hasData(a) && J._data(a);
if (r && (m = r.events)) {
for (b = J.trim(ga(b || '')).split(' '), f = 0; f < b.length; f++)
if (g = $.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
for (n = J.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp('(^|\\.)' + j.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)') : null, l = 0; l < p.length; l++)
q = p[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || '**' === d && q.selector) && (p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q));
0 === p.length && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && J.removeEvent(a, h, r.handle), delete m[h])
} else
for (h in m)
J.event.remove(a, h + b[f], c, d, !0);
J.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), J.removeData(a, [
'events',
'handle'
], !0))
}
},
customEvent: {
getData: !0,
setData: !0,
changeData: !0
},
trigger: function (c, d, e, f) {
if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
if (ca.test(q + J.event.triggered))
return;
if (q.indexOf('!') >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), (!e || J.event.customEvent[q]) && !J.event.global[q])
return;
if (c = 'object' == typeof c ? c[J.expando] ? c : new J.Event(q, c) : new J.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join('.'), c.namespace_re = c.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.)?') + '(\\.|$)') : null, l = q.indexOf(':') < 0 ? 'on' + q : '', !e) {
g = J.cache;
for (i in g)
g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0);
return
}
if (c.result = b, c.target || (c.target = e), d = null != d ? J.makeArray(d) : [], d.unshift(c), m = J.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1)
return;
if (o = [[
e,
m.bindType || q
]], !f && !m.noBubble && !J.isWindow(e)) {
for (p = m.delegateType || q, j = ca.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode)
o.push([
j,
p
]), k = j;
k && k === e.ownerDocument && o.push([
k.defaultView || k.parentWindow || a,
p
])
}
for (i = 0; i < o.length && !c.isPropagationStopped(); i++)
j = o[i][0], c.type = o[i][1], n = (J._data(j, 'events') || {})[c.type] && J._data(j, 'handle'), n && n.apply(j, d), n = l && j[l], n && J.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
return c.type = q, !f && !c.isDefaultPrevented() && (!m._default || m._default.apply(e.ownerDocument, d) === !1) && ('click' !== q || !J.nodeName(e, 'a')) && J.acceptData(e) && l && e[q] && ('focus' !== q && 'blur' !== q || 0 !== c.target.offsetWidth) && !J.isWindow(e) && (k = e[l], k && (e[l] = null), J.event.triggered = q, e[q](), J.event.triggered = b, k && (e[l] = k)), c.result
}
},
dispatch: function (c) {
c = J.event.fix(c || a.event);
var d, e, f, g, h, i, j, k, l, m, n = (J._data(this, 'events') || {})[c.type] || [], o = n.delegateCount, p = [].slice.call(arguments, 0), q = !c.exclusive && !c.namespace, r = J.event.special[c.type] || {}, s = [];
if (p[0] = c, c.delegateTarget = this, !r.preDispatch || r.preDispatch.call(this, c) !== !1) {
if (o && (!c.button || 'click' !== c.type))
for (g = J(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this)
if (f.disabled !== !0) {
for (i = {}, k = [], g[0] = f, d = 0; d < o; d++)
l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? fa(f, l.quick) : g.is(m)), i[m] && k.push(l);
k.length && s.push({
elem: f,
matches: k
})
}
for (n.length > o && s.push({
elem: this,
matches: n.slice(o)
}), d = 0; d < s.length && !c.isPropagationStopped(); d++)
for (j = s[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++)
l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((J.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
return r.postDispatch && r.postDispatch.call(this, c), c.result
}
},
props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
fixHooks: {},
keyHooks: {
props: 'char charCode key keyCode'.split(' '),
filter: function (a, b) {
return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
}
},
mouseHooks: {
props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
filter: function (a, c) {
var d, e, f, g = c.button, h = c.fromElement;
return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || G, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
}
},
fix: function (a) {
if (a[J.expando])
return a;
var c, d, e = a, f = J.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
for (a = J.Event(e), c = g.length; c;)
d = g[--c], a[d] = e[d];
return a.target || (a.target = e.srcElement || G), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
},
special: {
ready: { setup: J.bindReady },
load: { noBubble: !0 },
focus: { delegateType: 'focusin' },
blur: { delegateType: 'focusout' },
beforeunload: {
setup: function (a, b, c) {
J.isWindow(this) && (this.onbeforeunload = c)
},
teardown: function (a, b) {
this.onbeforeunload === b && (this.onbeforeunload = null)
}
}
},
simulate: function (a, b, c, d) {
var e = J.extend(new J.Event, c, {
type: a,
isSimulated: !0,
originalEvent: {}
});
d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
}
}, J.event.handle = J.event.dispatch, J.removeEvent = G.removeEventListener ? function (a, b, c) {
a.removeEventListener && a.removeEventListener(b, c, !1)
} : function (a, b, c) {
a.detachEvent && a.detachEvent('on' + b, c)
}, J.Event = function (a, b) {
return this instanceof J.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? A : B) : this.type = a, b && J.extend(this, b), this.timeStamp = a && a.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(a, b)
}, J.Event.prototype = {
preventDefault: function () {
this.isDefaultPrevented = A;
var a = this.originalEvent;
!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
},
stopPropagation: function () {
this.isPropagationStopped = A;
var a = this.originalEvent;
!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
},
stopImmediatePropagation: function () {
this.isImmediatePropagationStopped = A, this.stopPropagation()
},
isDefaultPrevented: B,
isPropagationStopped: B,
isImmediatePropagationStopped: B
}, J.each({
mouseenter: 'mouseover',
mouseleave: 'mouseout'
}, function (a, b) {
J.event.special[a] = {
delegateType: b,
bindType: b,
handle: function (a) {
var c, d = this, e = a.relatedTarget, f = a.handleObj;
f.selector;
return e && (e === d || J.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
}
}
}), J.support.submitBubbles || (J.event.special.submit = {
setup: function () {
return !J.nodeName(this, 'form') && void J.event.add(this, 'click._submit keypress._submit', function (a) {
var c = a.target, d = J.nodeName(c, 'input') || J.nodeName(c, 'button') ? c.form : b;
d && !d._submit_attached && (J.event.add(d, 'submit._submit', function (a) {
a._submit_bubble = !0
}), d._submit_attached = !0)
})
},
postDispatch: function (a) {
a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && J.event.simulate('submit', this.parentNode, a, !0))
},
teardown: function () {
return !J.nodeName(this, 'form') && void J.event.remove(this, '._submit')
}
}), J.support.changeBubbles || (J.event.special.change = {
setup: function () {
return Z.test(this.nodeName) ? ('checkbox' !== this.type && 'radio' !== this.type || (J.event.add(this, 'propertychange._change', function (a) {
'checked' === a.originalEvent.propertyName && (this._just_changed = !0)
}), J.event.add(this, 'click._change', function (a) {
this._just_changed && !a.isTrigger && (this._just_changed = !1, J.event.simulate('change', this, a, !0))
})), !1) : void J.event.add(this, 'beforeactivate._change', function (a) {
var b = a.target;
Z.test(b.nodeName) && !b._change_attached && (J.event.add(b, 'change._change', function (a) {
this.parentNode && !a.isSimulated && !a.isTrigger && J.event.simulate('change', this.parentNode, a, !0)
}), b._change_attached = !0)
})
},
handle: function (a) {
var b = a.target;
if (this !== b || a.isSimulated || a.isTrigger || 'radio' !== b.type && 'checkbox' !== b.type)
return a.handleObj.handler.apply(this, arguments)
},
teardown: function () {
return J.event.remove(this, '._change'), Z.test(this.nodeName)
}
}), J.support.focusinBubbles || J.each({
focus: 'focusin',
blur: 'focusout'
}, function (a, b) {
var c = 0, d = function (a) {
J.event.simulate(b, a.target, J.event.fix(a), !0)
};
J.event.special[b] = {
setup: function () {
0 === c++ && G.addEventListener(a, d, !0)
},
teardown: function () {
0 === --c && G.removeEventListener(a, d, !0)
}
}
}), J.fn.extend({
on: function (a, c, d, e, f) {
var g, h;
if ('object' == typeof a) {
'string' != typeof c && (d = d || c, c = b);
for (h in a)
this.on(h, c, d, a[h], f);
return this
}
if (null == d && null == e ? (e = c, d = c = b) : null == e && ('string' == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)
e = B;
else if (!e)
return this;
return 1 === f && (g = e, e = function (a) {
return J().off(a), g.apply(this, arguments)
}, e.guid = g.guid || (g.guid = J.guid++)), this.each(function () {
J.event.add(this, a, e, d, c)
})
},
one: function (a, b, c, d) {
return this.on(a, b, c, d, 1)
},
off: function (a, c, d) {
if (a && a.preventDefault && a.handleObj) {
var e = a.handleObj;
return J(a.delegateTarget).off(e.namespace ? e.origType + '.' + e.namespace : e.origType, e.selector, e.handler), this
}
if ('object' == typeof a) {
for (var f in a)
this.off(f, c, a[f]);
return this
}
return c !== !1 && 'function' != typeof c || (d = c, c = b), d === !1 && (d = B), this.each(function () {
J.event.remove(this, a, d, c)
})
},
bind: function (a, b, c) {
return this.on(a, null, b, c)
},
unbind: function (a, b) {
return this.off(a, null, b)
},
live: function (a, b, c) {
return J(this.context).on(a, this.selector, b, c), this
},
die: function (a, b) {
return J(this.context).off(a, this.selector || '**', b), this
},
delegate: function (a, b, c, d) {
return this.on(b, a, c, d)
},
undelegate: function (a, b, c) {
return 1 == arguments.length ? this.off(a, '**') : this.off(b, a, c)
},
trigger: function (a, b) {
return this.each(function () {
J.event.trigger(a, b, this)
})
},
triggerHandler: function (a, b) {
if (this[0])
return J.event.trigger(a, b, this[0], !0)
},
toggle: function (a) {
var b = arguments, c = a.guid || J.guid++, d = 0, e = function (c) {
var e = (J._data(this, 'lastToggle' + a.guid) || 0) % d;
return J._data(this, 'lastToggle' + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
};
for (e.guid = c; d < b.length;)
b[d++].guid = c;
return this.click(e)
},
hover: function (a, b) {
return this.mouseenter(a).mouseleave(b || a)
}
}), J.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
J.fn[b] = function (a, c) {
return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
}, J.attrFn && (J.attrFn[b] = !0), aa.test(b) && (J.event.fixHooks[b] = J.event.keyHooks), ba.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks)
}), function () {
function a(a, b, c, d, f, g) {
for (var h = 0, i = d.length; h < i; h++) {
var j = d[h];
if (j) {
var k = !1;
for (j = j[a]; j;) {
if (j[e] === c) {
k = d[j.sizset];
break
}
if (1 === j.nodeType)
if (g || (j[e] = c, j.sizset = h), 'string' != typeof b) {
if (j === b) {
k = !0;
break
}
} else if (m.filter(b, [j]).length > 0) {
k = j;
break
}
j = j[a]
}
d[h] = k
}
}
}
function c(a, b, c, d, f, g) {
for (var h = 0, i = d.length; h < i; h++) {
var j = d[h];
if (j) {
var k = !1;
for (j = j[a]; j;) {
if (j[e] === c) {
k = d[j.sizset];
break
}
if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
k = j;
break
}
j = j[a]
}
d[h] = k
}
}
}
var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = 'sizcache' + (Math.random() + '').replace('.', ''), f = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
[
0,
0
].sort(function () {
return i = !1, 0
});
var m = function (a, b, c, e) {
c = c || [], b = b || G;
var f = b;
if (1 !== b.nodeType && 9 !== b.nodeType)
return [];
if (!a || 'string' != typeof a)
return c;
var h, i, j, k, l, n, q, r, t = !0, u = m.isXML(b), v = [], x = a;
do
if (d.exec(''), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
k = h[3];
break
}
while (h);
if (v.length > 1 && p.exec(a))
if (2 === v.length && o.relative[v[0]])
i = w(v[0] + v[1], b, e);
else
for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;)
a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
for (l = e ? {
expr: v.pop(),
set: s(e)
} : m.find(v.pop(), 1 !== v.length || '~' !== v[0] && '+' !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;)
n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = '', null == q && (q = b), o.relative[n](j, q, u);
else
j = v = [];
if (j || (j = i), j || m.error(n || a), '[object Array]' === g.call(j))
if (t)
if (b && 1 === b.nodeType)
for (r = 0; null != j[r]; r++)
j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
else
for (r = 0; null != j[r]; r++)
j[r] && 1 === j[r].nodeType && c.push(i[r]);
else
c.push.apply(c, j);
else
s(j, c);
return k && (m(k, f, c, e), m.uniqueSort(c)), c
};
m.uniqueSort = function (a) {
if (u && (h = i, a.sort(u), h))
for (var b = 1; b < a.length; b++)
a[b] === a[b - 1] && a.splice(b--, 1);
return a
}, m.matches = function (a, b) {
return m(a, null, null, b)
}, m.matchesSelector = function (a, b) {
return m(b, null, null, [a]).length > 0
}, m.find = function (a, b, c) {
var d, e, f, g, h, i;
if (!a)
return [];
for (e = 0, f = o.order.length; e < f; e++)
if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), '\\' !== i.substr(i.length - 1) && (g[1] = (g[1] || '').replace(j, ''), d = o.find[h](g, b, c), null != d))) {
a = a.replace(o.match[h], '');
break
}
return d || (d = 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName('*') : []), {
set: d,
expr: a
}
}, m.filter = function (a, c, d, e) {
for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
for (h in o.filter)
if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), '\\' === l.substr(l.length - 1))
continue;
if (s === r && (r = []), o.preFilter[h])
if (f = o.preFilter[h](f, s, d, r, e, t)) {
if (f === !0)
continue
} else
g = i = !0;
if (f)
for (n = 0; null != (j = s[n]); n++)
j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
if (i !== b) {
if (d || (s = r), a = a.replace(o.match[h], ''), !g)
return [];
break
}
}
if (a === q) {
if (null != g)
break;
m.error(a)
}
q = a
}
return s
}, m.error = function (a) {
throw new Error('Syntax error, unrecognized expression: ' + a)
};
var n = m.getText = function (a) {
var b, c, d = a.nodeType, e = '';
if (d) {
if (1 === d || 9 === d || 11 === d) {
if ('string' == typeof a.textContent)
return a.textContent;
if ('string' == typeof a.innerText)
return a.innerText.replace(k, '');
for (a = a.firstChild; a; a = a.nextSibling)
e += n(a)
} else if (3 === d || 4 === d)
return a.nodeValue
} else
for (b = 0; c = a[b]; b++)
8 !== c.nodeType && (e += n(c));
return e
}, o = m.selectors = {
order: [
'ID',
'NAME',
'TAG'
],
match: {
ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},
leftMatch: {},
attrMap: {
class: 'className',
for: 'htmlFor'
},
attrHandle: {
href: function (a) {
return a.getAttribute('href')
},
type: function (a) {
return a.getAttribute('type')
}
},
relative: {
'+': function (a, b) {
var c = 'string' == typeof b, d = c && !l.test(b), e = c && !d;
d && (b = b.toLowerCase());
for (var f, g = 0, h = a.length; g < h; g++)
if (f = a[g]) {
for (; (f = f.previousSibling) && 1 !== f.nodeType;);
a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
}
e && m.filter(b, a, !0)
},
'>': function (a, b) {
var c, d = 'string' == typeof b, e = 0, f = a.length;
if (d && !l.test(b)) {
for (b = b.toLowerCase(); e < f; e++)
if (c = a[e]) {
var g = c.parentNode;
a[e] = g.nodeName.toLowerCase() === b && g
}
} else {
for (; e < f; e++)
c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
d && m.filter(b, a, !0)
}
},
'': function (b, d, e) {
var g, h = f++, i = a;
'string' == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i('parentNode', d, h, b, g, e)
},
'~': function (b, d, e) {
var g, h = f++, i = a;
'string' == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i('previousSibling', d, h, b, g, e)
}
},
find: {
ID: function (a, b, c) {
if ('undefined' != typeof b.getElementById && !c) {
var d = b.getElementById(a[1]);
return d && d.parentNode ? [d] : []
}
},
NAME: function (a, b) {
if ('undefined' != typeof b.getElementsByName) {
for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++)
d[e].getAttribute('name') === a[1] && c.push(d[e]);
return 0 === c.length ? null : c
}
},
TAG: function (a, b) {
if ('undefined' != typeof b.getElementsByTagName)
return b.getElementsByTagName(a[1])
}
},
preFilter: {
CLASS: function (a, b, c, d, e, f) {
if (a = ' ' + a[1].replace(j, '') + ' ', f)
return a;
for (var g, h = 0; null != (g = b[h]); h++)
g && (e ^ (g.className && (' ' + g.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
return !1
},
ID: function (a) {
return a[1].replace(j, '')
},
TAG: function (a, b) {
return a[1].replace(j, '').toLowerCase()
},
CHILD: function (a) {
if ('nth' === a[1]) {
a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, '');
var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec('even' === a[2] && '2n' || 'odd' === a[2] && '2n+1' || !/\D/.test(a[2]) && '0n+' + a[2] || a[2]);
a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
} else
a[2] && m.error(a[0]);
return a[0] = f++, a
},
ATTR: function (a, b, c, d, e, f) {
var g = a[1] = a[1].replace(j, '');
return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || '').replace(j, ''), '~=' === a[2] && (a[4] = ' ' + a[4] + ' '), a
},
PSEUDO: function (a, b, c, e, f) {
if ('not' === a[1]) {
if (!((d.exec(a[3]) || '').length > 1 || /^\w/.test(a[3]))) {
var g = m.filter(a[3], b, c, !0 ^ f);
return c || e.push.apply(e, g), !1
}
a[3] = m(a[3], null, null, b)
} else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0]))
return !0;
return a
},
POS: function (a) {
return a.unshift(!0), a
}
},
filters: {
enabled: function (a) {
return a.disabled === !1 && 'hidden' !== a.type
},
disabled: function (a) {
return a.disabled === !0
},
checked: function (a) {
return a.checked === !0
},
selected: function (a) {
return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
},
parent: function (a) {
return !!a.firstChild
},
empty: function (a) {
return !a.firstChild
},
has: function (a, b, c) {
return !!m(c[3], a).length
},
header: function (a) {
return /h\d/i.test(a.nodeName)
},
text: function (a) {
var b = a.getAttribute('type'), c = a.type;
return 'input' === a.nodeName.toLowerCase() && 'text' === c && (b === c || null === b)
},
radio: function (a) {
return 'input' === a.nodeName.toLowerCase() && 'radio' === a.type
},
checkbox: function (a) {
return 'input' === a.nodeName.toLowerCase() && 'checkbox' === a.type
},
file: function (a) {
return 'input' === a.nodeName.toLowerCase() && 'file' === a.type
},
password: function (a) {
return 'input' === a.nodeName.toLowerCase() && 'password' === a.type
},
submit: function (a) {
var b = a.nodeName.toLowerCase();
return ('input' === b || 'button' === b) && 'submit' === a.type
},
image: function (a) {
return 'input' === a.nodeName.toLowerCase() && 'image' === a.type
},
reset: function (a) {
var b = a.nodeName.toLowerCase();
return ('input' === b || 'button' === b) && 'reset' === a.type
},
button: function (a) {
var b = a.nodeName.toLowerCase();
return 'input' === b && 'button' === a.type || 'button' === b
},
input: function (a) {
return /input|select|textarea|button/i.test(a.nodeName)
},
focus: function (a) {
return a === a.ownerDocument.activeElement
}
},
setFilters: {
first: function (a, b) {
return 0 === b
},
last: function (a, b, c, d) {
return b === d.length - 1
},
even: function (a, b) {
return b % 2 === 0
},
odd: function (a, b) {
return b % 2 === 1
},
lt: function (a, b, c) {
return b < c[3] - 0
},
gt: function (a, b, c) {
return b > c[3] - 0
},
nth: function (a, b, c) {
return c[3] - 0 === b
},
eq: function (a, b, c) {
return c[3] - 0 === b
}
},
filter: {
PSEUDO: function (a, b, c, d) {
var e = b[1], f = o.filters[e];
if (f)
return f(a, c, b, d);
if ('contains' === e)
return (a.textContent || a.innerText || n([a]) || '').indexOf(b[3]) >= 0;
if ('not' === e) {
for (var g = b[3], h = 0, i = g.length; h < i; h++)
if (g[h] === a)
return !1;
return !0
}
m.error(e)
},
CHILD: function (a, b) {
var c, d, f, g, h, i, j = b[1], k = a;
switch (j) {
case 'only':
case 'first':
for (; k = k.previousSibling;)
if (1 === k.nodeType)
return !1;
if ('first' === j)
return !0;
k = a;
case 'last':
for (; k = k.nextSibling;)
if (1 === k.nodeType)
return !1;
return !0;
case 'nth':
if (c = b[2], d = b[3], 1 === c && 0 === d)
return !0;
if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
for (h = 0, k = g.firstChild; k; k = k.nextSibling)
1 === k.nodeType && (k.nodeIndex = ++h);
g[e] = f
}
return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c === 0 && i / c >= 0
}
},
ID: function (a, b) {
return 1 === a.nodeType && a.getAttribute('id') === b
},
TAG: function (a, b) {
return '*' === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
},
CLASS: function (a, b) {
return (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(b) > -1
},
ATTR: function (a, b) {
var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c), e = d + '', f = b[2], g = b[4];
return null == d ? '!=' === f : !f && m.attr ? null != d : '=' === f ? e === g : '*=' === f ? e.indexOf(g) >= 0 : '~=' === f ? (' ' + e + ' ').indexOf(g) >= 0 : g ? '!=' === f ? e !== g : '^=' === f ? 0 === e.indexOf(g) : '$=' === f ? e.substr(e.length - g.length) === g : '|=' === f && (e === g || e.substr(0, g.length + 1) === g + '-') : e && d !== !1
},
POS: function (a, b, c, d) {
var e = b[2], f = o.setFilters[e];
if (f)
return f(a, c, b, d)
}
}
}, p = o.match.POS, q = function (a, b) {
return '\\' + (b - 0 + 1)
};
for (var r in o.match)
o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
o.match.globalPOS = p;
var s = function (a, b) {
return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
};
try {
Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType
} catch (t) {
s = function (a, b) {
var c = 0, d = b || [];
if ('[object Array]' === g.call(a))
Array.prototype.push.apply(d, a);
else if ('number' == typeof a.length)
for (var e = a.length; c < e; c++)
d.push(a[c]);
else
for (; a[c]; c++)
d.push(a[c]);
return d
}
}
var u, v;
G.documentElement.compareDocumentPosition ? u = function (a, b) {
return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
} : (u = function (a, b) {
if (a === b)
return h = !0, 0;
if (a.sourceIndex && b.sourceIndex)
return a.sourceIndex - b.sourceIndex;
var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
if (g === i)
return v(a, b);
if (!g)
return -1;
if (!i)
return 1;
for (; j;)
e.unshift(j), j = j.parentNode;
for (j = i; j;)
f.unshift(j), j = j.parentNode;
c = e.length, d = f.length;
for (var k = 0; k < c && k < d; k++)
if (e[k] !== f[k])
return v(e[k], f[k]);
return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
}, v = function (a, b, c) {
if (a === b)
return c;
for (var d = a.nextSibling; d;) {
if (d === b)
return -1;
d = d.nextSibling
}
return 1
}), function () {
var a = G.createElement('div'), c = 'script' + new Date().getTime(), d = G.documentElement;
a.innerHTML = '<a name=\'' + c + '\'/>', d.insertBefore(a, d.firstChild), G.getElementById(c) && (o.find.ID = function (a, c, d) {
if ('undefined' != typeof c.getElementById && !d) {
var e = c.getElementById(a[1]);
return e ? e.id === a[1] || 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id').nodeValue === a[1] ? [e] : b : []
}
}, o.filter.ID = function (a, b) {
var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
return 1 === a.nodeType && c && c.nodeValue === b
}), d.removeChild(a), d = a = null
}(), function () {
var a = G.createElement('div');
a.appendChild(G.createComment('')), a.getElementsByTagName('*').length > 0 && (o.find.TAG = function (a, b) {
var c = b.getElementsByTagName(a[1]);
if ('*' === a[1]) {
for (var d = [], e = 0; c[e]; e++)
1 === c[e].nodeType && d.push(c[e]);
c = d
}
return c
}), a.innerHTML = '<a href=\'#\'></a>', a.firstChild && 'undefined' != typeof a.firstChild.getAttribute && '#' !== a.firstChild.getAttribute('href') && (o.attrHandle.href = function (a) {
return a.getAttribute('href', 2)
}), a = null
}(), G.querySelectorAll && function () {
var a = m, b = G.createElement('div'), c = '__sizzle__';
if (b.innerHTML = '<p class=\'TEST\'></p>', !b.querySelectorAll || 0 !== b.querySelectorAll('.TEST').length) {
m = function (b, d, e, f) {
if (d = d || G, !f && !m.isXML(d)) {
var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
if (g && (1 === d.nodeType || 9 === d.nodeType)) {
if (g[1])
return s(d.getElementsByTagName(b), e);
if (g[2] && o.find.CLASS && d.getElementsByClassName)
return s(d.getElementsByClassName(g[2]), e)
}
if (9 === d.nodeType) {
if ('body' === b && d.body)
return s([d.body], e);
if (g && g[3]) {
var h = d.getElementById(g[3]);
if (!h || !h.parentNode)
return s([], e);
if (h.id === g[3])
return s([h], e)
}
try {
return s(d.querySelectorAll(b), e)
} catch (i) {
}
} else if (1 === d.nodeType && 'object' !== d.nodeName.toLowerCase()) {
var j = d, k = d.getAttribute('id'), l = k || c, n = d.parentNode, p = /^\s*[+~]/.test(b);
k ? l = l.replace(/'/g, '\\$&') : d.setAttribute('id', l), p && n && (d = d.parentNode);
try {
if (!p || n)
return s(d.querySelectorAll('[id=\'' + l + '\'] ' + b), e)
} catch (q) {
} finally {
k || j.removeAttribute('id')
}
}
}
return a(b, d, e, f)
};
for (var d in a)
m[d] = a[d];
b = null
}
}(), function () {
var a = G.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
if (b) {
var c = !b.call(G.createElement('div'), 'div'), d = !1;
try {
b.call(G.documentElement, '[test!=\'\']:sizzle')
} catch (e) {
d = !0
}
m.matchesSelector = function (a, e) {
if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, '=\'$1\']'), !m.isXML(a))
try {
if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
var f = b.call(a, e);
if (f || !c || a.document && 11 !== a.document.nodeType)
return f
}
} catch (g) {
}
return m(e, null, null, [a]).length > 0
}
}
}(), function () {
var a = G.createElement('div');
if (a.innerHTML = '<div class=\'test e\'></div><div class=\'test\'></div>', a.getElementsByClassName && 0 !== a.getElementsByClassName('e').length) {
if (a.lastChild.className = 'e', 1 === a.getElementsByClassName('e').length)
return;
o.order.splice(1, 0, 'CLASS'), o.find.CLASS = function (a, b, c) {
if ('undefined' != typeof b.getElementsByClassName && !c)
return b.getElementsByClassName(a[1])
}, a = null
}
}(), G.documentElement.contains ? m.contains = function (a, b) {
return a !== b && (!a.contains || a.contains(b))
} : G.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
return !!(16 & a.compareDocumentPosition(b))
} : m.contains = function () {
return !1
}, m.isXML = function (a) {
var b = (a ? a.ownerDocument || a : 0).documentElement;
return !!b && 'HTML' !== b.nodeName
};
var w = function (a, b, c) {
for (var d, e = [], f = '', g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);)
f += d[0], a = a.replace(o.match.PSEUDO, '');
a = o.relative[a] ? a + '*' : a;
for (var h = 0, i = g.length; h < i; h++)
m(a, g[h], e, c);
return m.filter(f, e)
};
m.attr = J.attr, m.selectors.attrMap = {}, J.find = m, J.expr = m.selectors, J.expr[':'] = J.expr.filters, J.unique = m.uniqueSort, J.text = m.getText, J.isXMLDoc = m.isXML, J.contains = m.contains
}();
var ha = /Until$/, ia = /^(?:parents|prevUntil|prevAll)/, ja = /,/, ka = /^.[^:#\[\.,]*$/, la = Array.prototype.slice, ma = J.expr.match.globalPOS, na = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
J.fn.extend({
find: function (a) {
var b, c, d = this;
if ('string' != typeof a)
return J(a).filter(function () {
for (b = 0, c = d.length; b < c; b++)
if (J.contains(d[b], this))
return !0
});
var e, f, g, h = this.pushStack('', 'find', a);
for (b = 0, c = this.length; b < c; b++)
if (e = h.length, J.find(a, this[b], h), b > 0)
for (f = e; f < h.length; f++)
for (g = 0; g < e; g++)
if (h[g] === h[f]) {
h.splice(f--, 1);
break
}
return h
},
has: function (a) {
var b = J(a);
return this.filter(function () {
for (var a = 0, c = b.length; a < c; a++)
if (J.contains(this, b[a]))
return !0
})
},
not: function (a) {
return this.pushStack(y(this, a, !1), 'not', a)
},
filter: function (a) {
return this.pushStack(y(this, a, !0), 'filter', a)
},
is: function (a) {
return !!a && ('string' == typeof a ? ma.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0 : this.filter(a).length > 0)
},
closest: function (a, b) {
var c, d, e = [], f = this[0];
if (J.isArray(a)) {
for (var g = 1; f && f.ownerDocument && f !== b;) {
for (c = 0; c < a.length; c++)
J(f).is(a[c]) && e.push({
selector: a[c],
elem: f,
level: g
});
f = f.parentNode, g++
}
return e
}
var h = ma.test(a) || 'string' != typeof a ? J(a, b || this.context) : 0;
for (c = 0, d = this.length; c < d; c++)
for (f = this[c]; f;) {
if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) {
e.push(f);
break
}
if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType)
break
}
return e = e.length > 1 ? J.unique(e) : e, this.pushStack(e, 'closest', a)
},
index: function (a) {
return a ? 'string' == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
},
add: function (a, b) {
var c = 'string' == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a), d = J.merge(this.get(), c);
return this.pushStack(z(c[0]) || z(d[0]) ? d : J.unique(d))
},
andSelf: function () {
return this.add(this.prevObject)
}
}), J.each({
parent: function (a) {
var b = a.parentNode;
return b && 11 !== b.nodeType ? b : null
},
parents: function (a) {
return J.dir(a, 'parentNode')
},
parentsUntil: function (a, b, c) {
return J.dir(a, 'parentNode', c)
},
next: function (a) {
return J.nth(a, 2, 'nextSibling')
},
prev: function (a) {
return J.nth(a, 2, 'previousSibling')
},
nextAll: function (a) {
return J.dir(a, 'nextSibling')
},
prevAll: function (a) {
return J.dir(a, 'previousSibling')
},
nextUntil: function (a, b, c) {
return J.dir(a, 'nextSibling', c)
},
prevUntil: function (a, b, c) {
return J.dir(a, 'previousSibling', c)
},
siblings: function (a) {
return J.sibling((a.parentNode || {}).firstChild, a)
},
children: function (a) {
return J.sibling(a.firstChild)
},
contents: function (a) {
return J.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes)
}
}, function (a, b) {
J.fn[a] = function (c, d) {
var e = J.map(this, b, c);
return ha.test(a) || (d = c), d && 'string' == typeof d && (e = J.filter(d, e)), e = this.length > 1 && !na[a] ? J.unique(e) : e, (this.length > 1 || ja.test(d)) && ia.test(a) && (e = e.reverse()), this.pushStack(e, a, la.call(arguments).join(','))
}
}), J.extend({
filter: function (a, b, c) {
return c && (a = ':not(' + a + ')'), 1 === b.length ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b)
},
dir: function (a, c, d) {
for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d));)
1 === f.nodeType && e.push(f), f = f[c];
return e
},
nth: function (a, b, c, d) {
b = b || 1;
for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
return a
},
sibling: function (a, b) {
for (var c = []; a; a = a.nextSibling)
1 === a.nodeType && a !== b && c.push(a);
return c
}
});
var oa = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', pa = / jQuery\d+="(?:\d+|null)"/g, qa = /^\s+/, ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, sa = /<([\w:]+)/, ta = /<tbody/i, ua = /<|&#?\w+;/, va = /<(?:script|style)/i, wa = /<(?:script|object|embed|option|style)/i, xa = new RegExp('<(?:' + oa + ')[\\s/>]', 'i'), ya = /checked\s*(?:[^=]|=\s*.checked.)/i, za = /\/(java|ecma)script/i, Aa = /^\s*<!(?:\[CDATA\[|\-\-)/, Ba = {
option: [
1,
'<select multiple=\'multiple\'>',
'</select>'
],
legend: [
1,
'<fieldset>',
'</fieldset>'
],
thead: [
1,
'<table>',
'</table>'
],
tr: [
2,
'<table><tbody>',
'</tbody></table>'
],
td: [
3,
'<table><tbody><tr>',
'</tr></tbody></table>'
],
col: [
2,
'<table><tbody></tbody><colgroup>',
'</colgroup></table>'
],
area: [
1,
'<map>',
'</map>'
],
_default: [
0,
'',
''
]
}, Ca = x(G);
Ba.optgroup = Ba.option, Ba.tbody = Ba.tfoot = Ba.colgroup = Ba.caption = Ba.thead, Ba.th = Ba.td, J.support.htmlSerialize || (Ba._default = [
1,
'div<div>',
'</div>'
]), J.fn.extend({
text: function (a) {
return J.access(this, function (a) {
return a === b ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a))
}, null, a, arguments.length)
},
wrapAll: function (a) {
if (J.isFunction(a))
return this.each(function (b) {
J(this).wrapAll(a.call(this, b))
});
if (this[0]) {
var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)
a = a.firstChild;
return a
}).append(this)
}
return this
},
wrapInner: function (a) {
return J.isFunction(a) ? this.each(function (b) {
J(this).wrapInner(a.call(this, b))
}) : this.each(function () {
var b = J(this), c = b.contents();
c.length ? c.wrapAll(a) : b.append(a)
})
},
wrap: function (a) {
var b = J.isFunction(a);
return this.each(function (c) {
J(this).wrapAll(b ? a.call(this, c) : a)
})
},
unwrap: function () {
return this.parent().each(function () {
J.nodeName(this, 'body') || J(this).replaceWith(this.childNodes)
}).end()
},
append: function () {
return this.domManip(arguments, !0, function (a) {
1 === this.nodeType && this.appendChild(a)
})
},
prepend: function () {
return this.domManip(arguments, !0, function (a) {
1 === this.nodeType && this.insertBefore(a, this.firstChild)
})
},
before: function () {
if (this[0] && this[0].parentNode)
return this.domManip(arguments, !1, function (a) {
this.parentNode.insertBefore(a, this)
});
if (arguments.length) {
var a = J.clean(arguments);
return a.push.apply(a, this.toArray()), this.pushStack(a, 'before', arguments)
}
},
after: function () {
if (this[0] && this[0].parentNode)
return this.domManip(arguments, !1, function (a) {
this.parentNode.insertBefore(a, this.nextSibling)
});
if (arguments.length) {
var a = this.pushStack(this, 'after', arguments);
return a.push.apply(a, J.clean(arguments)), a
}
},
remove: function (a, b) {
for (var c, d = 0; null != (c = this[d]); d++)
a && !J.filter(a, [c]).length || (!b && 1 === c.nodeType && (J.cleanData(c.getElementsByTagName('*')), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
return this
},
empty: function () {
for (var a, b = 0; null != (a = this[b]); b++)
for (1 === a.nodeType && J.cleanData(a.getElementsByTagName('*')); a.firstChild;)
a.removeChild(a.firstChild);
return this
},
clone: function (a, b) {
return a = null != a && a, b = null == b ? a : b, this.map(function () {
return J.clone(this, a, b)
})
},
html: function (a) {
return J.access(this, function (a) {
var c = this[0] || {}, d = 0, e = this.length;
if (a === b)
return 1 === c.nodeType ? c.innerHTML.replace(pa, '') : null;
if ('string' == typeof a && !va.test(a) && (J.support.leadingWhitespace || !qa.test(a)) && !Ba[(sa.exec(a) || [
'',
''
])[1].toLowerCase()]) {
a = a.replace(ra, '<$1></$2>');
try {
for (; d < e; d++)
c = this[d] || {}, 1 === c.nodeType && (J.cleanData(c.getElementsByTagName('*')), c.innerHTML = a);
c = 0
} catch (f) {
}
}
c && this.empty().append(a)
}, null, a, arguments.length)
},
replaceWith: function (a) {
return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function (b) {
var c = J(this), d = c.html();
c.replaceWith(a.call(this, b, d))
}) : ('string' != typeof a && (a = J(a).detach()), this.each(function () {
var b = this.nextSibling, c = this.parentNode;
J(this).remove(), b ? J(b).before(a) : J(c).append(a)
})) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), 'replaceWith', a) : this
},
detach: function (a) {
return this.remove(a, !0)
},
domManip: function (a, c, d) {
var e, f, g, h, i = a[0], j = [];
if (!J.support.checkClone && 3 === arguments.length && 'string' == typeof i && ya.test(i))
return this.each(function () {
J(this).domManip(a, c, d, !0)
});
if (J.isFunction(i))
return this.each(function (e) {
var f = J(this);
a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
});
if (this[0]) {
if (h = i && i.parentNode, e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? { fragment: h } : J.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild, f) {
c = c && J.nodeName(f, 'tr');
for (var k = 0, l = this.length, m = l - 1; k < l; k++)
d.call(c ? w(this[k], f) : this[k], e.cacheable || l > 1 && k < m ? J.clone(g, !0, !0) : g)
}
j.length && J.each(j, function (a, b) {
b.src ? J.ajax({
type: 'GET',
global: !1,
url: b.src,
async: !1,
dataType: 'script'
}) : J.globalEval((b.text || b.textContent || b.innerHTML || '').replace(Aa, '/*$0*/')), b.parentNode && b.parentNode.removeChild(b)
})
}
return this
}
}), J.buildFragment = function (a, b, c) {
var d, e, f, g, h = a[0];
return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = G), 1 === a.length && 'string' == typeof h && h.length < 512 && g === G && '<' === h.charAt(0) && !wa.test(h) && (J.support.checkClone || !ya.test(h)) && (J.support.html5Clone || !xa.test(h)) && (e = !0, f = J.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)), e && (J.fragments[h] = f ? d : 1), {
fragment: d,
cacheable: e
}
}, J.fragments = {}, J.each({
appendTo: 'append',
prependTo: 'prepend',
insertBefore: 'before',
insertAfter: 'after',
replaceAll: 'replaceWith'
}, function (a, b) {
J.fn[a] = function (c) {
var d = [], e = J(c), f = 1 === this.length && this[0].parentNode;
if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length)
return e[b](this[0]), this;
for (var g = 0, h = e.length; g < h; g++) {
var i = (g > 0 ? this.clone(!0) : this).get();
J(e[g])[b](i), d = d.concat(i)
}
return this.pushStack(d, a, e.selector)
}
}), J.extend({
clone: function (a, b, c) {
var d, e, f, g = J.support.html5Clone || J.isXMLDoc(a) || !xa.test('<' + a.nodeName + '>') ? a.cloneNode(!0) : q(a);
if (!(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || J.isXMLDoc(a)))
for (u(a, g), d = t(a), e = t(g), f = 0; d[f]; ++f)
e[f] && u(d[f], e[f]);
if (b && (v(a, g), c))
for (d = t(a), e = t(g), f = 0; d[f]; ++f)
v(d[f], e[f]);
return d = e = null, g
},
clean: function (a, b, c, d) {
var e, f, g, h = [];
b = b || G, 'undefined' == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
for (var i, j = 0; null != (i = a[j]); j++)
if ('number' == typeof i && (i += ''), i) {
if ('string' == typeof i)
if (ua.test(i)) {
i = i.replace(ra, '<$1></$2>');
var k, l = (sa.exec(i) || [
'',
''
])[1].toLowerCase(), m = Ba[l] || Ba._default, n = m[0], o = b.createElement('div'), p = Ca.childNodes;
for (b === G ? Ca.appendChild(o) : x(b).appendChild(o), o.innerHTML = m[1] + i + m[2]; n--;)
o = o.lastChild;
if (!J.support.tbody) {
var q = ta.test(i), s = 'table' !== l || q ? '<table>' !== m[1] || q ? [] : o.childNodes : o.firstChild && o.firstChild.childNodes;
for (g = s.length - 1; g >= 0; --g)
J.nodeName(s[g], 'tbody') && !s[g].childNodes.length && s[g].parentNode.removeChild(s[g])
}
!J.support.leadingWhitespace && qa.test(i) && o.insertBefore(b.createTextNode(qa.exec(i)[0]), o.firstChild), i = o.childNodes, o && (o.parentNode.removeChild(o), p.length > 0 && (k = p[p.length - 1], k && k.parentNode && k.parentNode.removeChild(k)))
} else
i = b.createTextNode(i);
var t;
if (!J.support.appendChecked)
if (i[0] && 'number' == typeof (t = i.length))
for (g = 0; g < t; g++)
r(i[g]);
else
r(i);
i.nodeType ? h.push(i) : h = J.merge(h, i)
}
if (c)
for (e = function (a) {
return !a.type || za.test(a.type)
}, j = 0; h[j]; j++)
if (f = h[j], d && J.nodeName(f, 'script') && (!f.type || za.test(f.type)))
d.push(f.parentNode ? f.parentNode.removeChild(f) : f);
else {
if (1 === f.nodeType) {
var u = J.grep(f.getElementsByTagName('script'), e);
h.splice.apply(h, [
j + 1,
0
].concat(u))
}
c.appendChild(f)
}
return h
},
cleanData: function (a) {
for (var b, c, d, e = J.cache, f = J.event.special, g = J.support.deleteExpando, h = 0; null != (d = a[h]); h++)
if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
if (b = e[c], b && b.events) {
for (var i in b.events)
f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
b.handle && (b.handle.elem = null)
}
g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando), delete e[c]
}
}
});
var Da, Ea, Fa, Ga = /alpha\([^)]*\)/i, Ha = /opacity=([^)]*)/, Ia = /([A-Z]|^ms)/g, Ja = /^[\-+]?(?:\d*\.)?\d+$/i, Ka = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, La = /^([\-+])=([\-+.\de]+)/, Ma = /^margin/, Na = {
position: 'absolute',
visibility: 'hidden',
display: 'block'
}, Oa = [
'Top',
'Right',
'Bottom',
'Left'
];
J.fn.css = function (a, c) {
return J.access(this, function (a, c, d) {
return d !== b ? J.style(a, c, d) : J.css(a, c)
}, a, c, arguments.length > 1)
}, J.extend({
cssHooks: {
opacity: {
get: function (a, b) {
if (b) {
var c = Da(a, 'opacity');
return '' === c ? '1' : c
}
return a.style.opacity
}
}
},
cssNumber: {
fillOpacity: !0,
fontWeight: !0,
lineHeight: !0,
opacity: !0,
orphans: !0,
widows: !0,
zIndex: !0,
zoom: !0
},
cssProps: { float: J.support.cssFloat ? 'cssFloat' : 'styleFloat' },
style: function (a, c, d, e) {
if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
var f, g, h = J.camelCase(c), i = a.style, j = J.cssHooks[h];
if (c = J.cssProps[h] || h, d === b)
return j && 'get' in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
if (g = typeof d, 'string' === g && (f = La.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c)), g = 'number'), null == d || 'number' === g && isNaN(d))
return;
if ('number' === g && !J.cssNumber[h] && (d += 'px'), !(j && 'set' in j && (d = j.set(a, d)) === b))
try {
i[c] = d
} catch (k) {
}
}
},
css: function (a, c, d) {
var e, f;
return c = J.camelCase(c), f = J.cssHooks[c], c = J.cssProps[c] || c, 'cssFloat' === c && (c = 'float'), f && 'get' in f && (e = f.get(a, !0, d)) !== b ? e : Da ? Da(a, c) : void 0
},
swap: function (a, b, c) {
var d, e, f = {};
for (e in b)
f[e] = a.style[e], a.style[e] = b[e];
d = c.call(a);
for (e in b)
a.style[e] = f[e];
return d
}
}), J.curCSS = J.css, G.defaultView && G.defaultView.getComputedStyle && (Ea = function (a, b) {
var c, d, e, f, g = a.style;
return b = b.replace(Ia, '-$1').toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), '' === c && !J.contains(a.ownerDocument.documentElement, a) && (c = J.style(a, b))), !J.support.pixelMargin && e && Ma.test(b) && Ka.test(c) && (f = g.width, g.width = c, c = e.width, g.width = f), c
}), G.documentElement.currentStyle && (Fa = function (a, b) {
var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
return null == f && g && (e = g[b]) && (f = e), Ka.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = 'fontSize' === b ? '1em' : f, f = g.pixelLeft + 'px', g.left = c, d && (a.runtimeStyle.left = d)), '' === f ? 'auto' : f
}), Da = Ea || Fa, J.each([
'height',
'width'
], function (a, b) {
J.cssHooks[b] = {
get: function (a, c, d) {
if (c)
return 0 !== a.offsetWidth ? p(a, b, d) : J.swap(a, Na, function () {
return p(a, b, d)
})
},
set: function (a, b) {
return Ja.test(b) ? b + 'px' : b
}
}
}), J.support.opacity || (J.cssHooks.opacity = {
get: function (a, b) {
return Ha.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? parseFloat(RegExp.$1) / 100 + '' : b ? '1' : ''
},
set: function (a, b) {
var c = a.style, d = a.currentStyle, e = J.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '', f = d && d.filter || c.filter || '';
c.zoom = 1, b >= 1 && '' === J.trim(f.replace(Ga, '')) && (c.removeAttribute('filter'), d && !d.filter) || (c.filter = Ga.test(f) ? f.replace(Ga, e) : f + ' ' + e)
}
}), J(function () {
J.support.reliableMarginRight || (J.cssHooks.marginRight = {
get: function (a, b) {
return J.swap(a, { display: 'inline-block' }, function () {
return b ? Da(a, 'margin-right') : a.style.marginRight
})
}
})
}), J.expr && J.expr.filters && (J.expr.filters.hidden = function (a) {
var b = a.offsetWidth, c = a.offsetHeight;
return 0 === b && 0 === c || !J.support.reliableHiddenOffsets && 'none' === (a.style && a.style.display || J.css(a, 'display'))
}, J.expr.filters.visible = function (a) {
return !J.expr.filters.hidden(a)
}), J.each({
margin: '',
padding: '',
border: 'Width'
}, function (a, b) {
J.cssHooks[a + b] = {
expand: function (c) {
var d, e = 'string' == typeof c ? c.split(' ') : [c], f = {};
for (d = 0; d < 4; d++)
f[a + Oa[d] + b] = e[d] || e[d - 2] || e[0];
return f
}
}
});
var Pa, Qa, Ra = /%20/g, Sa = /\[\]$/, Ta = /\r?\n/g, Ua = /#.*$/, Va = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Wa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Xa = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ya = /^(?:GET|HEAD)$/, Za = /^\/\//, $a = /\?/, _a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ab = /^(?:select|textarea)/i, bb = /\s+/, cb = /([?&])_=[^&]*/, db = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, eb = J.fn.load, fb = {}, gb = {}, hb = ['*/'] + ['*'];
try {
Pa = I.href
} catch (ib) {
Pa = G.createElement('a'), Pa.href = '', Pa = Pa.href
}
Qa = db.exec(Pa.toLowerCase()) || [], J.fn.extend({
load: function (a, c, d) {
if ('string' != typeof a && eb)
return eb.apply(this, arguments);
if (!this.length)
return this;
var e = a.indexOf(' ');
if (e >= 0) {
var f = a.slice(e, a.length);
a = a.slice(0, e)
}
var g = 'GET';
c && (J.isFunction(c) ? (d = c, c = b) : 'object' == typeof c && (c = J.param(c, J.ajaxSettings.traditional), g = 'POST'));
var h = this;
return J.ajax({
url: a,
type: g,
dataType: 'html',
data: c,
complete: function (a, b, c) {
c = a.responseText, a.isResolved() && (a.done(function (a) {
c = a
}), h.html(f ? J('<div>').append(c.replace(_a, '')).find(f) : c)), d && h.each(d, [
c,
b,
a
])
}
}), this
},
serialize: function () {
return J.param(this.serializeArray())
},
serializeArray: function () {
return this.map(function () {
return this.elements ? J.makeArray(this.elements) : this
}).filter(function () {
return this.name && !this.disabled && (this.checked || ab.test(this.nodeName) || Wa.test(this.type))
}).map(function (a, b) {
var c = J(this).val();
return null == c ? null : J.isArray(c) ? J.map(c, function (a, c) {
return {
name: b.name,
value: a.replace(Ta, '\r\n')
}
}) : {
name: b.name,
value: c.replace(Ta, '\r\n')
}
}).get()
}
}), J.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function (a, b) {
J.fn[b] = function (a) {
return this.on(b, a)
}
}), J.each([
'get',
'post'
], function (a, c) {
J[c] = function (a, d, e, f) {
return J.isFunction(d) && (f = f || e, e = d, d = b), J.ajax({
type: c,
url: a,
data: d,
success: e,
dataType: f
})
}
}), J.extend({
getScript: function (a, c) {
return J.get(a, b, c, 'script')
},
getJSON: function (a, b, c) {
return J.get(a, b, c, 'json')
},
ajaxSetup: function (a, b) {
return b ? m(a, J.ajaxSettings) : (b = a, a = J.ajaxSettings), m(a, b), a
},
ajaxSettings: {
url: Pa,
isLocal: Xa.test(Qa[1]),
global: !0,
type: 'GET',
contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
processData: !0,
async: !0,
accepts: {
xml: 'application/xml, text/xml',
html: 'text/html',
text: 'text/plain',
json: 'application/json, text/javascript',
'*': hb
},
contents: {
xml: /xml/,
html: /html/,
json: /json/
},
responseFields: {
xml: 'responseXML',
text: 'responseText'
},
converters: {
'* text': a.String,
'text html': !0,
'text json': J.parseJSON,
'text xml': J.parseXML
},
flatOptions: {
context: !0,
url: !0
}
},
ajaxPrefilter: o(fb),
ajaxTransport: o(gb),
ajax: function (a, c) {
function d(a, c, d, g) {
if (2 !== x) {
x = 2, i && clearTimeout(i), h = b, f = g || '', y.readyState = a > 0 ? 4 : 0;
var l, n, o, v, w, z = c, A = d ? k(p, y, d) : b;
if (a >= 200 && a < 300 || 304 === a)
if (p.ifModified && ((v = y.getResponseHeader('Last-Modified')) && (J.lastModified[e] = v), (w = y.getResponseHeader('Etag')) && (J.etag[e] = w)), 304 === a)
z = 'notmodified', l = !0;
else
try {
n = j(p, A), z = 'success', l = !0
} catch (B) {
z = 'parsererror', o = B
}
else
o = z, z && !a || (z = 'error', a < 0 && (a = 0));
y.status = a, y.statusText = '' + (c || z), l ? s.resolveWith(q, [
n,
z,
y
]) : s.rejectWith(q, [
y,
z,
o
]), y.statusCode(u), u = b, m && r.trigger('ajax' + (l ? 'Success' : 'Error'), [
y,
p,
l ? n : o
]), t.fireWith(q, [
y,
z
]), m && (r.trigger('ajaxComplete', [
y,
p
]), --J.active || J.event.trigger('ajaxStop'))
}
}
'object' == typeof a && (c = a, a = b), c = c || {};
var e, f, g, h, i, l, m, o, p = J.ajaxSetup({}, c), q = p.context || p, r = q !== p && (q.nodeType || q instanceof J) ? J(q) : J.event, s = J.Deferred(), t = J.Callbacks('once memory'), u = p.statusCode || {}, v = {}, w = {}, x = 0, y = {
readyState: 0,
setRequestHeader: function (a, b) {
if (!x) {
var c = a.toLowerCase();
a = w[c] = w[c] || a, v[a] = b
}
return this
},
getAllResponseHeaders: function () {
return 2 === x ? f : null
},
getResponseHeader: function (a) {
var c;
if (2 === x) {
if (!g)
for (g = {}; c = Va.exec(f);)
g[c[1].toLowerCase()] = c[2];
c = g[a.toLowerCase()]
}
return c === b ? null : c
},
overrideMimeType: function (a) {
return x || (p.mimeType = a), this
},
abort: function (a) {
return a = a || 'abort', h && h.abort(a), d(0, a), this
}
};
if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function (a) {
if (a) {
var b;
if (x < 2)
for (b in a)
u[b] = [
u[b],
a[b]
];
else
b = a[y.status], y.then(b, b)
}
return this
}, p.url = ((a || p.url) + '').replace(Ua, '').replace(Za, Qa[1] + '//'), p.dataTypes = J.trim(p.dataType || '*').toLowerCase().split(bb), null == p.crossDomain && (l = db.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Qa[1] && l[2] == Qa[2] && (l[3] || ('http:' === l[1] ? 80 : 443)) == (Qa[3] || ('http:' === Qa[1] ? 80 : 443)))), p.data && p.processData && 'string' != typeof p.data && (p.data = J.param(p.data, p.traditional)), n(fb, p, c, y), 2 === x)
return !1;
if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Ya.test(p.type), m && 0 === J.active++ && J.event.trigger('ajaxStart'), !p.hasContent && (p.data && (p.url += ($a.test(p.url) ? '&' : '?') + p.data, delete p.data), e = p.url, p.cache === !1)) {
var z = J.now(), A = p.url.replace(cb, '$1_=' + z);
p.url = A + (A === p.url ? ($a.test(p.url) ? '&' : '?') + '_=' + z : '')
}
(p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader('Content-Type', p.contentType), p.ifModified && (e = e || p.url, J.lastModified[e] && y.setRequestHeader('If-Modified-Since', J.lastModified[e]), J.etag[e] && y.setRequestHeader('If-None-Match', J.etag[e])), y.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + hb + '; q=0.01' : '') : p.accepts['*']);
for (o in p.headers)
y.setRequestHeader(o, p.headers[o]);
if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x))
return y.abort(), !1;
for (o in {
success: 1,
error: 1,
complete: 1
})
y[o](p[o]);
if (h = n(gb, p, c, y)) {
y.readyState = 1, m && r.trigger('ajaxSend', [
y,
p
]), p.async && p.timeout > 0 && (i = setTimeout(function () {
y.abort('timeout')
}, p.timeout));
try {
x = 1, h.send(v, d)
} catch (B) {
if (!(x < 2))
throw B;
d(-1, B)
}
} else
d(-1, 'No Transport');
return y
},
param: function (a, c) {
var d = [], e = function (a, b) {
b = J.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b)
};
if (c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || a.jquery && !J.isPlainObject(a))
J.each(a, function () {
e(this.name, this.value)
});
else
for (var f in a)
l(f, a[f], c, e);
return d.join('&').replace(Ra, '+')
}
}), J.extend({
active: 0,
lastModified: {},
etag: {}
});
var jb = J.now(), kb = /(\=)\?(&|$)|\?\?/i;
J.ajaxSetup({
jsonp: 'callback',
jsonpCallback: function () {
return J.expando + '_' + jb++
}
}), J.ajaxPrefilter('json jsonp', function (b, c, d) {
var e = 'string' == typeof b.data && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
if ('jsonp' === b.dataTypes[0] || b.jsonp !== !1 && (kb.test(b.url) || e && kb.test(b.data))) {
var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h = a[g], i = b.url, j = b.data, k = '$1' + g + '$2';
return b.jsonp !== !1 && (i = i.replace(kb, k), b.url === i && (e && (j = j.replace(kb, k)), b.data === j && (i += (/\?/.test(i) ? '&' : '?') + b.jsonp + '=' + g))), b.url = i, b.data = j, a[g] = function (a) {
f = [a]
}, d.always(function () {
a[g] = h, f && J.isFunction(h) && a[g](f[0])
}), b.converters['script json'] = function () {
return f || J.error(g + ' was not called'), f[0]
}, b.dataTypes[0] = 'json', 'script'
}
}), J.ajaxSetup({
accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
contents: { script: /javascript|ecmascript/ },
converters: {
'text script': function (a) {
return J.globalEval(a), a
}
}
}), J.ajaxPrefilter('script', function (a) {
a.cache === b && (a.cache = !1), a.crossDomain && (a.type = 'GET', a.global = !1)
}), J.ajaxTransport('script', function (a) {
if (a.crossDomain) {
var c, d = G.head || G.getElementsByTagName('head')[0] || G.documentElement;
return {
send: function (e, f) {
c = G.createElement('script'), c.async = 'async', a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
(e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, 'success'))
}, d.insertBefore(c, d.firstChild)
},
abort: function () {
c && c.onload(0, 1)
}
}
}
});
var lb, mb = !!a.ActiveXObject && function () {
for (var a in lb)
lb[a](0, 1)
}, nb = 0;
J.ajaxSettings.xhr = a.ActiveXObject ? function () {
return !this.isLocal && i() || h()
} : i, function (a) {
J.extend(J.support, {
ajax: !!a,
cors: !!a && 'withCredentials' in a
})
}(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function (c) {
if (!c.crossDomain || J.support.cors) {
var d;
return {
send: function (e, f) {
var g, h, i = c.xhr();
if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
for (h in c.xhrFields)
i[h] = c.xhrFields[h];
c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e['X-Requested-With'] && (e['X-Requested-With'] = 'XMLHttpRequest');
try {
for (h in e)
i.setRequestHeader(h, e[h])
} catch (j) {
}
i.send(c.hasContent && c.data || null), d = function (a, e) {
var h, j, k, l, m;
try {
if (d && (e || 4 === i.readyState))
if (d = b, g && (i.onreadystatechange = J.noop, mb && delete lb[g]), e)
4 !== i.readyState && i.abort();
else {
h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
try {
l.text = i.responseText
} catch (a) {
}
try {
j = i.statusText
} catch (n) {
j = ''
}
h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
}
} catch (o) {
e || f(-1, o)
}
l && f(h, j, l, k)
}, c.async && 4 !== i.readyState ? (g = ++nb, mb && (lb || (lb = {}, J(a).unload(mb)), lb[g] = d), i.onreadystatechange = d) : d()
},
abort: function () {
d && d(0, 1)
}
}
}
});
var ob, pb, qb, rb, sb = {}, tb = /^(?:toggle|show|hide)$/, ub = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, vb = [
[
'height',
'marginTop',
'marginBottom',
'paddingTop',
'paddingBottom'
],
[
'width',
'marginLeft',
'marginRight',
'paddingLeft',
'paddingRight'
],
['opacity']
];
J.fn.extend({
show: function (a, b, c) {
var f, g;
if (a || 0 === a)
return this.animate(e('show', 3), a, b, c);
for (var h = 0, i = this.length; h < i; h++)
f = this[h], f.style && (g = f.style.display, !J._data(f, 'olddisplay') && 'none' === g && (g = f.style.display = ''), ('' === g && 'none' === J.css(f, 'display') || !J.contains(f.ownerDocument.documentElement, f)) && J._data(f, 'olddisplay', d(f.nodeName)));
for (h = 0; h < i; h++)
f = this[h], f.style && (g = f.style.display, '' !== g && 'none' !== g || (f.style.display = J._data(f, 'olddisplay') || ''));
return this
},
hide: function (a, b, c) {
if (a || 0 === a)
return this.animate(e('hide', 3), a, b, c);
for (var d, f, g = 0, h = this.length; g < h; g++)
d = this[g], d.style && (f = J.css(d, 'display'), 'none' !== f && !J._data(d, 'olddisplay') && J._data(d, 'olddisplay', f));
for (g = 0; g < h; g++)
this[g].style && (this[g].style.display = 'none');
return this
},
_toggle: J.fn.toggle,
toggle: function (a, b, c) {
var d = 'boolean' == typeof a;
return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function () {
var b = d ? a : J(this).is(':hidden');
J(this)[b ? 'show' : 'hide']()
}) : this.animate(e('toggle', 3), a, b, c), this
},
fadeTo: function (a, b, c, d) {
return this.filter(':hidden').css('opacity', 0).show().end().animate({ opacity: b }, a, c, d)
},
animate: function (a, b, c, e) {
function f() {
g.queue === !1 && J._mark(this);
var b, c, e, f, h, i, j, k, l, m, n, o = J.extend({}, g), p = 1 === this.nodeType, q = p && J(this).is(':hidden');
o.animatedProperties = {};
for (e in a)
if (b = J.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), (h = J.cssHooks[b]) && 'expand' in h) {
i = h.expand(a[b]), delete a[b];
for (e in i)
e in a || (a[e] = i[e])
}
for (b in a) {
if (c = a[b], J.isArray(c) ? (o.animatedProperties[b] = c[1], c = a[b] = c[0]) : o.animatedProperties[b] = o.specialEasing && o.specialEasing[b] || o.easing || 'swing', 'hide' === c && q || 'show' === c && !q)
return o.complete.call(this);
p && ('height' === b || 'width' === b) && (o.overflow = [
this.style.overflow,
this.style.overflowX,
this.style.overflowY
], 'inline' === J.css(this, 'display') && 'none' === J.css(this, 'float') && (J.support.inlineBlockNeedsLayout && 'inline' !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = 'inline-block'))
}
null != o.overflow && (this.style.overflow = 'hidden');
for (e in a)
f = new J.fx(this, o, e), c = a[e], tb.test(c) ? (n = J._data(this, 'toggle' + e) || ('toggle' === c ? q ? 'show' : 'hide' : 0), n ? (J._data(this, 'toggle' + e, 'show' === n ? 'hide' : 'show'), f[n]()) : f[c]()) : (j = ub.exec(c), k = f.cur(), j ? (l = parseFloat(j[2]), m = j[3] || (J.cssNumber[e] ? '' : 'px'), 'px' !== m && (J.style(this, e, (l || 1) + m), k = (l || 1) / f.cur() * k, J.style(this, e, k + m)), j[1] && (l = ('-=' === j[1] ? -1 : 1) * l + k), f.custom(k, l, m)) : f.custom(k, c, ''));
return !0
}
var g = J.speed(b, c, e);
return J.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = J.extend({}, a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
},
stop: function (a, c, d) {
return 'string' != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
function b(a, b, c) {
var e = b[c];
J.removeData(a, c, !0), e.stop(d)
}
var c, e = !1, f = J.timers, g = J._data(this);
if (d || J._unmark(!0, this), null == a)
for (c in g)
g[c] && g[c].stop && c.indexOf('.run') === c.length - 4 && b(this, g, c);
else
g[c = a + '.run'] && g[c].stop && b(this, g, c);
for (c = f.length; c--;)
f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
(!d || !e) && J.dequeue(this, a)
})
}
}), J.each({
slideDown: e('show', 1),
slideUp: e('hide', 1),
slideToggle: e('toggle', 1),
fadeIn: { opacity: 'show' },
fadeOut: { opacity: 'hide' },
fadeToggle: { opacity: 'toggle' }
}, function (a, b) {
J.fn[a] = function (a, c, d) {
return this.animate(b, a, c, d)
}
}), J.extend({
speed: function (a, b, c) {
var d = a && 'object' == typeof a ? J.extend({}, a) : {
complete: c || !c && b || J.isFunction(a) && a,
duration: a,
easing: c && b || b && !J.isFunction(b) && b
};
return d.duration = J.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = 'fx'), d.old = d.complete, d.complete = function (a) {
J.isFunction(d.old) && d.old.call(this), d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this)
}, d
},
easing: {
linear: function (a) {
return a
},
swing: function (a) {
return -Math.cos(a * Math.PI) / 2 + 0.5
}
},
timers: [],
fx: function (a, b, c) {
this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
}
}), J.fx.prototype = {
update: function () {
this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this)
},
cur: function () {
if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
return this.elem[this.prop];
var a, b = J.css(this.elem, this.prop);
return isNaN(a = parseFloat(b)) ? b && 'auto' !== b ? b : 0 : a
},
custom: function (a, c, d) {
function e(a) {
return f.step(a)
}
var f = this, h = J.fx;
this.startTime = rb || g(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (J.cssNumber[this.prop] ? '' : 'px'), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function () {
J._data(f.elem, 'fxshow' + f.prop) === b && (f.options.hide ? J._data(f.elem, 'fxshow' + f.prop, f.start) : f.options.show && J._data(f.elem, 'fxshow' + f.prop, f.end))
}, e() && J.timers.push(e) && !qb && (qb = setInterval(h.tick, h.interval))
},
show: function () {
var a = J._data(this.elem, 'fxshow' + this.prop);
this.options.orig[this.prop] = a || J.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom('width' === this.prop || 'height' === this.prop ? 1 : 0, this.cur()), J(this.elem).show()
},
hide: function () {
this.options.orig[this.prop] = J._data(this.elem, 'fxshow' + this.prop) || J.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
},
step: function (a) {
var b, c, d, e = rb || g(), f = !0, h = this.elem, i = this.options;
if (a || e >= i.duration + this.startTime) {
this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
for (b in i.animatedProperties)
i.animatedProperties[b] !== !0 && (f = !1);
if (f) {
if (null != i.overflow && !J.support.shrinkWrapBlocks && J.each([
'',
'X',
'Y'
], function (a, b) {
h.style['overflow' + b] = i.overflow[a]
}), i.hide && J(h).hide(), i.hide || i.show)
for (b in i.animatedProperties)
J.style(h, b, i.orig[b]), J.removeData(h, 'fxshow' + b, !0), J.removeData(h, 'toggle' + b, !0);
d = i.complete, d && (i.complete = !1, d.call(h))
}
return !1
}
return i.duration == 1 / 0 ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = J.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
}
}, J.extend(J.fx, {
tick: function () {
for (var a, b = J.timers, c = 0; c < b.length; c++)
a = b[c], !a() && b[c] === a && b.splice(c--, 1);
b.length || J.fx.stop()
},
interval: 13,
stop: function () {
clearInterval(qb), qb = null
},
speeds: {
slow: 600,
fast: 200,
_default: 400
},
step: {
opacity: function (a) {
J.style(a.elem, 'opacity', a.now)
},
_default: function (a) {
a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
}
}
}), J.each(vb.concat.apply([], vb), function (a, b) {
b.indexOf('margin') && (J.fx.step[b] = function (a) {
J.style(a.elem, b, Math.max(0, a.now) + a.unit)
})
}), J.expr && J.expr.filters && (J.expr.filters.animated = function (a) {
return J.grep(J.timers, function (b) {
return a === b.elem
}).length
});
var wb, xb = /^t(?:able|d|h)$/i, yb = /^(?:body|html)$/i;
wb = 'getBoundingClientRect' in G.documentElement ? function (a, b, d, e) {
try {
e = a.getBoundingClientRect()
} catch (f) {
}
if (!e || !J.contains(d, a))
return e ? {
top: e.top,
left: e.left
} : {
top: 0,
left: 0
};
var g = b.body, h = c(b), i = d.clientTop || g.clientTop || 0, j = d.clientLeft || g.clientLeft || 0, k = h.pageYOffset || J.support.boxModel && d.scrollTop || g.scrollTop, l = h.pageXOffset || J.support.boxModel && d.scrollLeft || g.scrollLeft, m = e.top + k - i, n = e.left + l - j;
return {
top: m,
left: n
}
} : function (a, b, c) {
for (var d, e = a.offsetParent, f = a, g = b.body, h = b.defaultView, i = h ? h.getComputedStyle(a, null) : a.currentStyle, j = a.offsetTop, k = a.offsetLeft; (a = a.parentNode) && a !== g && a !== c && (!J.support.fixedPosition || 'fixed' !== i.position);)
d = h ? h.getComputedStyle(a, null) : a.currentStyle, j -= a.scrollTop, k -= a.scrollLeft, a === e && (j += a.offsetTop, k += a.offsetLeft, J.support.doesNotAddBorder && (!J.support.doesAddBorderForTableAndCells || !xb.test(a.nodeName)) && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), f = e, e = a.offsetParent), J.support.subtractsBorderForOverflowNotVisible && 'visible' !== d.overflow && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), i = d;
return 'relative' !== i.position && 'static' !== i.position || (j += g.offsetTop, k += g.offsetLeft), J.support.fixedPosition && 'fixed' === i.position && (j += Math.max(c.scrollTop, g.scrollTop), k += Math.max(c.scrollLeft, g.scrollLeft)), {
top: j,
left: k
}
}, J.fn.offset = function (a) {
if (arguments.length)
return a === b ? this : this.each(function (b) {
J.offset.setOffset(this, a, b)
});
var c = this[0], d = c && c.ownerDocument;
return d ? c === d.body ? J.offset.bodyOffset(c) : wb(c, d, d.documentElement) : null
}, J.offset = {
bodyOffset: function (a) {
var b = a.offsetTop, c = a.offsetLeft;
return J.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, 'marginTop')) || 0, c += parseFloat(J.css(a, 'marginLeft')) || 0), {
top: b,
left: c
}
},
setOffset: function (a, b, c) {
var d = J.css(a, 'position');
'static' === d && (a.style.position = 'relative');
var e, f, g = J(a), h = g.offset(), i = J.css(a, 'top'), j = J.css(a, 'left'), k = ('absolute' === d || 'fixed' === d) && J.inArray('auto', [
i,
j
]) > -1, l = {}, m = {};
k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), J.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), 'using' in b ? b.using.call(a, l) : g.css(l)
}
}, J.fn.extend({
position: function () {
if (!this[0])
return null;
var a = this[0], b = this.offsetParent(), c = this.offset(), d = yb.test(b[0].nodeName) ? {
top: 0,
left: 0
} : b.offset();
return c.top -= parseFloat(J.css(a, 'marginTop')) || 0, c.left -= parseFloat(J.css(a, 'marginLeft')) || 0, d.top += parseFloat(J.css(b[0], 'borderTopWidth')) || 0, d.left += parseFloat(J.css(b[0], 'borderLeftWidth')) || 0, {
top: c.top - d.top,
left: c.left - d.left
}
},
offsetParent: function () {
return this.map(function () {
for (var a = this.offsetParent || G.body; a && !yb.test(a.nodeName) && 'static' === J.css(a, 'position');)
a = a.offsetParent;
return a
})
}
}), J.each({
scrollLeft: 'pageXOffset',
scrollTop: 'pageYOffset'
}, function (a, d) {
var e = /Y/.test(d);
J.fn[a] = function (f) {
return J.access(this, function (a, f, g) {
var h = c(a);
return g === b ? h ? d in h ? h[d] : J.support.boxModel && h.document.documentElement[f] || h.document.body[f] : a[f] : void (h ? h.scrollTo(e ? J(h).scrollLeft() : g, e ? g : J(h).scrollTop()) : a[f] = g)
}, a, f, arguments.length, null)
}
}), J.each({
Height: 'height',
Width: 'width'
}, function (a, c) {
var d = 'client' + a, e = 'scroll' + a, f = 'offset' + a;
J.fn['inner' + a] = function () {
var a = this[0];
return a ? a.style ? parseFloat(J.css(a, c, 'padding')) : this[c]() : null
}, J.fn['outer' + a] = function (a) {
var b = this[0];
return b ? b.style ? parseFloat(J.css(b, c, a ? 'margin' : 'border')) : this[c]() : null
}, J.fn[c] = function (a) {
return J.access(this, function (a, c, g) {
var h, i, j, k;
return J.isWindow(a) ? (h = a.document, i = h.documentElement[d], J.support.boxModel && i || h.body && h.body[d] || i) : 9 === a.nodeType ? (h = a.documentElement, h[d] >= h[e] ? h[d] : Math.max(a.body[e], h[e], a.body[f], h[f])) : g === b ? (j = J.css(a, c), k = parseFloat(j), J.isNumeric(k) ? k : j) : void J(a).css(c, g)
}, c, a, arguments.length, null)
}
}), a.jQuery = a.$ = J, 'function' == typeof define && define.amd && define.amd.jQuery && define('jquery', [], function () {
return J
})
}(window), function (a, b) {
'function' == typeof define && define.amd ? define([], b) : 'object' == typeof module && module.exports ? module.exports = b() : a.clipboardButton = b()
}(this, function () {
function a(a) {
var b = document.createElement('span');
return b.style.position = 'absolute', b.style.left = '-10000px', b.textContent = a, b
}
function b(a) {
var b = document.getSelection();
b.removeAllRanges();
var c = document.createRange();
c.selectNodeContents(a), b.addRange(c), document.execCommand('copy'), b.removeAllRanges()
}
function c(c) {
var d = a(c);
document.body.appendChild(d), b(d), document.body.removeChild(d)
}
return function (a, b, d) {
var e;
e = 'string' == typeof a ? document.querySelector(a) : a;
var f = function () {
try {
var a = e.dataset.clipboardText;
c(a), b && b()
} catch (f) {
d && d({ err: f })
}
};
return e.addEventListener('click', f), {
destroy: function () {
e.removeEventListener('click', f)
},
element: e
}
}
}), /*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
String.fromCodePoint || !function () {
var a = function () {
try {
var a = {}, b = Object.defineProperty, c = b(a, a, a) && b
} catch (d) {
}
return c
}(), b = String.fromCharCode, c = Math.floor, d = function (a) {
var d, e, f = 16384, g = [], h = -1, i = arguments.length;
if (!i)
return '';
for (var j = ''; ++h < i;) {
var k = Number(arguments[h]);
if (!isFinite(k) || k < 0 || k > 1114111 || c(k) != k)
throw RangeError('Invalid code point: ' + k);
k <= 65535 ? g.push(k) : (k -= 65536, d = (k >> 10) + 55296, e = k % 1024 + 56320, g.push(d, e)), (h + 1 == i || g.length > f) && (j += b.apply(null, g), g.length = 0)
}
return j
};
a ? a(String, 'fromCodePoint', {
value: d,
configurable: !0,
writable: !0
}) : String.fromCodePoint = d
}(), /*! https://mths.be/codepointat v0.2.0 by @mathias */
String.prototype.codePointAt || !function () {
'use strict';
var a = function () {
try {
var a = {}, b = Object.defineProperty, c = b(a, a, a) && b
} catch (d) {
}
return c
}(), b = function (a) {
if (null == this)
throw TypeError();
var b = String(this), c = b.length, d = a ? Number(a) : 0;
if (d != d && (d = 0), !(d < 0 || d >= c)) {
var e, f = b.charCodeAt(d);
return f >= 55296 && f <= 56319 && c > d + 1 && (e = b.charCodeAt(d + 1), e >= 56320 && e <= 57343) ? 1024 * (f - 55296) + e - 56320 + 65536 : f
}
};
a ? a(String.prototype, 'codePointAt', {
value: b,
configurable: !0,
writable: !0
}) : String.prototype.codePointAt = b
}(), String.prototype.trim || (String.prototype.trim = function () {
return this.replace(/^\s+|\s+$/g, '')
});
var require = {
separateCSS: !0,
map: { '*': { less: '../3rdparty/require-less/less.js' } }
}, requirejs, require, define;
!function (global) {
function isFunction(a) {
return '[object Function]' === ostring.call(a)
}
function isArray(a) {
return '[object Array]' === ostring.call(a)
}
function each(a, b) {
if (a) {
var c;
for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
}
}
function eachReverse(a, b) {
if (a) {
var c;
for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
}
}
function hasProp(a, b) {
return hasOwn.call(a, b)
}
function getOwn(a, b) {
return hasProp(a, b) && a[b]
}
function eachProp(a, b) {
var c;
for (c in a)
if (hasProp(a, c) && b(a[c], c))
break
}
function mixin(a, b, c, d) {
return b && eachProp(b, function (b, e) {
!c && hasProp(a, e) || (d && 'string' != typeof b ? (a[e] || (a[e] = {}), mixin(a[e], b, c, d)) : a[e] = b)
}), a
}
function bind(a, b) {
return function () {
return b.apply(a, arguments)
}
}
function scripts() {
return document.getElementsByTagName('script')
}
function getGlobal(a) {
if (!a)
return a;
var b = global;
return each(a.split('.'), function (a) {
b = b[a]
}), b
}
function makeError(a, b, c, d) {
var e = new Error(b + '\nhttp://requirejs.org/docs/errors.html#' + a);
return e.requireType = a, e.requireModules = d, c && (e.originalError = c), e
}
function newContext(a) {
function b(a) {
var b, c;
for (b = 0; a[b]; b += 1)
if (c = a[b], '.' === c)
a.splice(b, 1), b -= 1;
else if ('..' === c) {
if (1 === b && ('..' === a[2] || '..' === a[0]))
break;
b > 0 && (a.splice(b - 1, 2), b -= 2)
}
}
function c(a, c, d) {
var e, f, g, h, i, j, k, l, m, n, o, p = c && c.split('/'), q = p, r = x.map, s = r && r['*'];
if (a && '.' === a.charAt(0) && (c ? (q = getOwn(x.pkgs, c) ? p = [c] : p.slice(0, p.length - 1), a = q.concat(a.split('/')), b(a), f = getOwn(x.pkgs, e = a[0]), a = a.join('/'), f && a === e + '/' + f.main && (a = e)) : 0 === a.indexOf('./') && (a = a.substring(2))), d && (p || s) && r) {
for (h = a.split('/'), i = h.length; i > 0; i -= 1) {
if (k = h.slice(0, i).join('/'), p)
for (j = p.length; j > 0; j -= 1)
if (g = getOwn(r, p.slice(0, j).join('/')), g && (g = getOwn(g, k))) {
l = g, m = i;
break
}
if (l)
break;
!n && s && getOwn(s, k) && (n = getOwn(s, k), o = i)
}
!l && n && (l = n, m = o), l && (h.splice(0, m, l), a = h.join('/'))
}
return a
}
function d(a) {
isBrowser && each(scripts(), function (b) {
if (b.getAttribute('data-requiremodule') === a && b.getAttribute('data-requirecontext') === u.contextName)
return b.parentNode.removeChild(b), !0
})
}
function e(a) {
var b = getOwn(x.paths, a);
if (b && isArray(b) && b.length > 1)
return d(a), b.shift(), u.require.undef(a), u.require([a]), !0
}
function f(a) {
var b, c = a ? a.indexOf('!') : -1;
return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [
b,
a
]
}
function g(a, b, d, e) {
var g, h, i, j, k = null, l = b ? b.name : null, m = a, n = !0, o = '';
return a || (n = !1, a = '_@r' + (D += 1)), j = f(a), k = j[0], a = j[1], k && (k = c(k, l, e), h = getOwn(B, k)), a && (k ? o = h && h.normalize ? h.normalize(a, function (a) {
return c(a, l, e)
}) : c(a, l, e) : (o = c(a, l, e), j = f(o), k = j[0], o = j[1], d = !0, g = u.nameToUrl(o))), i = !k || h || d ? '' : '_unnormalized' + (E += 1), {
prefix: k,
name: o,
parentMap: b,
unnormalized: !!i,
url: g,
originalName: m,
isDefine: n,
id: (k ? k + '!' + o : o) + i
}
}
function h(a) {
var b = a.id, c = getOwn(y, b);
return c || (c = y[b] = new u.Module(a)), c
}
function i(a, b, c) {
var d = a.id, e = getOwn(y, d);
!hasProp(B, d) || e && !e.defineEmitComplete ? h(a).on(b, c) : 'defined' === b && c(B[d])
}
function j(a, b) {
var c = a.requireModules, d = !1;
b ? b(a) : (each(c, function (b) {
var c = getOwn(y, b);
c && (c.error = a, c.events.error && (d = !0, c.emit('error', a)))
}), d || req.onError(a))
}
function k() {
globalDefQueue.length && (apsp.apply(A, [
A.length - 1,
0
].concat(globalDefQueue)), globalDefQueue = [])
}
function l(a) {
delete y[a]
}
function m(a, b, c) {
var d = a.map.id;
a.error ? a.emit('error', a.error) : (b[d] = !0, each(a.depMaps, function (d, e) {
var f = d.id, g = getOwn(y, f);
!g || a.depMatched[e] || c[f] || (getOwn(b, f) ? (a.defineDep(e, B[f]), a.check()) : m(g, b, c))
}), c[d] = !0)
}
function n() {
var a, b, c, f, g = 1000 * x.waitSeconds, h = g && u.startTime + g < new Date().getTime(), i = [], k = [], l = !1, o = !0;
if (!s) {
if (s = !0, eachProp(y, function (c) {
if (a = c.map, b = a.id, c.enabled && (a.isDefine || k.push(c), !c.error))
if (!c.inited && h)
e(b) ? (f = !0, l = !0) : (i.push(b), d(b));
else if (!c.inited && c.fetched && a.isDefine && (l = !0, !a.prefix))
return o = !1
}), h && i.length)
return c = makeError('timeout', 'Load timeout for modules: ' + i, null, i), c.contextName = u.contextName, j(c);
o && each(k, function (a) {
m(a, {}, {})
}), h && !f || !l || !isBrowser && !isWebWorker || w || (w = setTimeout(function () {
w = 0, n()
}, 50)), s = !1
}
}
function o(a) {
hasProp(B, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2])
}
function p(a, b, c, d) {
a.detachEvent && !isOpera ? d && a.detachEvent(d, b) : a.removeEventListener(c, b, !1)
}
function q(a) {
var b = a.currentTarget || a.srcElement;
return p(b, u.onScriptLoad, 'load', 'onreadystatechange'), p(b, u.onScriptError, 'error'), {
node: b,
id: b && b.getAttribute('data-requiremodule')
}
}
function r() {
var a;
for (k(); A.length;) {
if (a = A.shift(), null === a[0])
return j(makeError('mismatch', 'Mismatched anonymous define() module: ' + a[a.length - 1]));
o(a)
}
}
var s, t, u, v, w, x = {
waitSeconds: 7,
baseUrl: './',
paths: {},
pkgs: {},
shim: {},
map: {},
config: {}
}, y = {}, z = {}, A = [], B = {}, C = {}, D = 1, E = 1;
return v = {
require: function (a) {
return a.require ? a.require : a.require = u.makeRequire(a.map)
},
exports: function (a) {
if (a.usingExports = !0, a.map.isDefine)
return a.exports ? a.exports : a.exports = B[a.map.id] = {}
},
module: function (a) {
return a.module ? a.module : a.module = {
id: a.map.id,
uri: a.map.url,
config: function () {
return x.config && getOwn(x.config, a.map.id) || {}
},
exports: B[a.map.id]
}
}
}, t = function (a) {
this.events = getOwn(z, a.id) || {}, this.map = a, this.shim = getOwn(x.shim, a.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
}, t.prototype = {
init: function (a, b, c, d) {
d = d || {}, this.inited || (this.factory = b, c ? this.on('error', c) : this.events.error && (c = bind(this, function (a) {
this.emit('error', a)
})), this.depMaps = a && a.slice(0), this.errback = c, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
},
defineDep: function (a, b) {
this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
},
fetch: function () {
if (!this.fetched) {
this.fetched = !0, u.startTime = new Date().getTime();
var a = this.map;
return this.shim ? void u.makeRequire(this.map, { enableBuildCallback: !0 })(this.shim.deps || [], bind(this, function () {
return a.prefix ? this.callPlugin() : this.load()
})) : a.prefix ? this.callPlugin() : this.load()
}
},
load: function () {
var a = this.map.url;
C[a] || (C[a] = !0, u.load(this.map.id, a))
},
check: function () {
if (this.enabled && !this.enabling) {
var a, b, c = this.map.id, d = this.depExports, e = this.exports, f = this.factory;
if (this.inited) {
if (this.error)
this.emit('error', this.error);
else if (!this.defining) {
if (this.defining = !0, this.depCount < 1 && !this.defined) {
if (isFunction(f)) {
if (this.events.error)
try {
e = u.execCb(c, f, d, e)
} catch (g) {
a = g
}
else
e = u.execCb(c, f, d, e);
if (this.map.isDefine && (b = this.module, b && void 0 !== b.exports && b.exports !== this.exports ? e = b.exports : void 0 === e && this.usingExports && (e = this.exports)), a)
return a.requireMap = this.map, a.requireModules = [this.map.id], a.requireType = 'define', j(this.error = a)
} else
e = f;
this.exports = e, this.map.isDefine && !this.ignore && (B[c] = e, req.onResourceLoad && req.onResourceLoad(u, this.map, this.depMaps)), delete y[c], this.defined = !0
}
this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit('defined', this.exports), this.defineEmitComplete = !0)
}
} else
this.fetch()
}
},
callPlugin: function () {
var a = this.map, b = a.id, d = g(a.prefix);
this.depMaps.push(d), i(d, 'defined', bind(this, function (d) {
var e, f, k, m = this.map.name, n = this.map.parentMap ? this.map.parentMap.name : null, o = u.makeRequire(a.parentMap, {
enableBuildCallback: !0,
skipMap: !0
});
return this.map.unnormalized ? (d.normalize && (m = d.normalize(m, function (a) {
return c(a, n, !0)
}) || ''), f = g(a.prefix + '!' + m, this.map.parentMap), i(f, 'defined', bind(this, function (a) {
this.init([], function () {
return a
}, null, {
enabled: !0,
ignore: !0
})
})), k = getOwn(y, f.id), void (k && (this.depMaps.push(f), this.events.error && k.on('error', bind(this, function (a) {
this.emit('error', a)
})), k.enable()))) : (e = bind(this, function (a) {
this.init([], function () {
return a
}, null, { enabled: !0 })
}), e.error = bind(this, function (a) {
this.inited = !0, this.error = a, a.requireModules = [b], eachProp(y, function (a) {
0 === a.map.id.indexOf(b + '_unnormalized') && l(a.map.id)
}), j(a)
}), e.fromText = bind(this, function (c, d) {
var f = a.name, i = g(f), j = useInteractive;
d && (c = d), j && (useInteractive = !1), h(i), hasProp(x.config, b) && (x.config[f] = x.config[b]);
try {
req.exec(c)
} catch (k) {
throw new Error('fromText eval for ' + f + ' failed: ' + k)
}
j && (useInteractive = !0), this.depMaps.push(i), u.completeLoad(f), o([f], e)
}), void d.load(a.name, o, e, x))
})), u.enable(d, this), this.pluginMaps[d.id] = d
},
enable: function () {
this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (a, b) {
var c, d, e;
if ('string' == typeof a) {
if (a = g(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, e = getOwn(v, a.id))
return void (this.depExports[b] = e(this));
this.depCount += 1, i(a, 'defined', bind(this, function (a) {
this.defineDep(b, a), this.check()
})), this.errback && i(a, 'error', this.errback)
}
c = a.id, d = y[c], hasProp(v, c) || !d || d.enabled || u.enable(a, this)
})), eachProp(this.pluginMaps, bind(this, function (a) {
var b = getOwn(y, a.id);
b && !b.enabled && u.enable(a, this)
})), this.enabling = !1, this.check()
},
on: function (a, b) {
var c = this.events[a];
c || (c = this.events[a] = []), c.push(b)
},
emit: function (a, b) {
each(this.events[a], function (a) {
a(b)
}), 'error' === a && delete this.events[a]
}
}, u = {
config: x,
contextName: a,
registry: y,
defined: B,
urlFetched: C,
defQueue: A,
Module: t,
makeModuleMap: g,
nextTick: req.nextTick,
configure: function (a) {
a.baseUrl && '/' !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += '/');
var b = x.pkgs, c = x.shim, d = {
paths: !0,
config: !0,
map: !0
};
eachProp(a, function (a, b) {
d[b] ? 'map' === b ? mixin(x[b], a, !0, !0) : mixin(x[b], a, !0) : x[b] = a
}), a.shim && (eachProp(a.shim, function (a, b) {
isArray(a) && (a = { deps: a }), !a.exports && !a.init || a.exportsFn || (a.exportsFn = u.makeShimExports(a)), c[b] = a
}), x.shim = c), a.packages && (each(a.packages, function (a) {
var c;
a = 'string' == typeof a ? { name: a } : a, c = a.location, b[a.name] = {
name: a.name,
location: c || a.name,
main: (a.main || 'main').replace(currDirRegExp, '').replace(jsSuffixRegExp, '')
}
}), x.pkgs = b), eachProp(y, function (a, b) {
a.inited || a.map.unnormalized || (a.map = g(b))
}), (a.deps || a.callback) && u.require(a.deps || [], a.callback)
},
makeShimExports: function (a) {
function b() {
var b;
return a.init && (b = a.init.apply(global, arguments)), b || a.exports && getGlobal(a.exports)
}
return b
},
makeRequire: function (b, d) {
function e(c, f, i) {
var k, l, m;
return d.enableBuildCallback && f && isFunction(f) && (f.__requireJsBuild = !0), 'string' == typeof c ? isFunction(f) ? j(makeError('requireargs', 'Invalid require call'), i) : b && hasProp(v, c) ? v[c](y[b.id]) : req.get ? req.get(u, c, b) : (l = g(c, b, !1, !0), k = l.id, hasProp(B, k) ? B[k] : j(makeError('notloaded', 'Module name "' + k + '" has not been loaded yet for context: ' + a + (b ? '' : '. Use require([])')))) : (r(), u.nextTick(function () {
r(), m = h(g(null, b)), m.skipMap = d.skipMap, m.init(c, f, i, { enabled: !0 }), n()
}), e)
}
return d = d || {}, mixin(e, {
isBrowser: isBrowser,
toUrl: function (a) {
var d = a.lastIndexOf('.'), e = null;
return d !== -1 && (e = a.substring(d, a.length), a = a.substring(0, d)), u.nameToUrl(c(a, b && b.id, !0), e)
},
defined: function (a) {
return hasProp(B, g(a, b, !1, !0).id)
},
specified: function (a) {
return a = g(a, b, !1, !0).id, hasProp(B, a) || hasProp(y, a)
}
}), b || (e.undef = function (a) {
k();
var c = g(a, b, !0), d = getOwn(y, a);
delete B[a], delete C[c.url], delete z[a], d && (d.events.defined && (z[a] = d.events), l(a))
}), e
},
enable: function (a, b) {
var c = getOwn(y, a.id);
c && h(a).enable()
},
completeLoad: function (a) {
var b, c, d, f = getOwn(x.shim, a) || {}, g = f.exports;
for (k(); A.length;) {
if (c = A.shift(), null === c[0]) {
if (c[0] = a, b)
break;
b = !0
} else
c[0] === a && (b = !0);
o(c)
}
if (d = getOwn(y, a), !b && !hasProp(B, a) && d && !d.inited) {
if (!(!x.enforceDefine || g && getGlobal(g)))
return e(a) ? void 0 : j(makeError('nodefine', 'No define call for ' + a, null, [a]));
o([
a,
f.deps || [],
f.exportsFn
])
}
n()
},
nameToUrl: function (a, b) {
var c, d, e, f, g, h, i, j, k;
if (req.jsExtRegExp.test(a))
j = a + (b || '');
else {
for (c = x.paths, d = x.pkgs, g = a.split('/'), h = g.length; h > 0; h -= 1) {
if (i = g.slice(0, h).join('/'), e = getOwn(d, i), k = getOwn(c, i)) {
isArray(k) && (k = k[0]), g.splice(0, h, k);
break
}
if (e) {
f = a === e.name ? e.location + '/' + e.main : e.location, g.splice(0, h, f);
break
}
}
j = g.join('/'), j += b || (/\?/.test(j) ? '' : '.js'), j = ('/' === j.charAt(0) || j.match(/^[\w\+\.\-]+:/) ? '' : x.baseUrl) + j
}
return x.urlArgs ? j + ((j.indexOf('?') === -1 ? '?' : '&') + x.urlArgs) : j
},
load: function (a, b) {
req.load(u, a, b)
},
execCb: function (a, b, c, d) {
return b.apply(d, c)
},
onScriptLoad: function (a) {
if ('load' === a.type || readyRegExp.test((a.currentTarget || a.srcElement).readyState)) {
interactiveScript = null;
var b = q(a);
u.completeLoad(b.id)
}
},
onScriptError: function (a) {
var b = q(a);
if (!e(b.id))
return j(makeError('scripterror', 'Script error', a, [b.id]))
}
}, u.require = u.makeRequire(), u
}
function getInteractiveScript() {
return interactiveScript && 'interactive' === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (a) {
if ('interactive' === a.readyState)
return interactiveScript = a
}), interactiveScript)
}
var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = '2.1.2', commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, aps = ap.slice, apsp = ap.splice, isBrowser = !('undefined' == typeof window || !navigator || !document), isWebWorker = !isBrowser && 'undefined' != typeof importScripts, readyRegExp = isBrowser && 'PLAYSTATION 3' === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = '_', isOpera = 'undefined' != typeof opera && '[object Opera]' === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
if ('undefined' == typeof define) {
if ('undefined' != typeof requirejs) {
if (isFunction(requirejs))
return;
cfg = requirejs, requirejs = void 0
}
'undefined' == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (a, b, c, d) {
var e, f, g = defContextName;
return isArray(a) || 'string' == typeof a || (f = a, isArray(b) ? (a = b, b = c, c = d) : a = []), f && f.context && (g = f.context), e = getOwn(contexts, g), e || (e = contexts[g] = req.s.newContext(g)), f && e.configure(f), e.require(a, b, c)
}, req.config = function (a) {
return req(a)
}, req.nextTick = 'undefined' != typeof setTimeout ? function (a) {
setTimeout(a, 4)
} : function (a) {
a()
}, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
contexts: contexts,
newContext: newContext
}, req({}), each([
'toUrl',
'undef',
'defined',
'specified'
], function (a) {
req[a] = function () {
var b = contexts[defContextName];
return b.require[a].apply(b, arguments)
}
}), isBrowser && (head = s.head = document.getElementsByTagName('head')[0], baseElement = document.getElementsByTagName('base')[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function (a) {
throw a
}, req.load = function (a, b, c) {
var d, e = a && a.config || {};
return isBrowser ? (d = e.xhtml ? document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') : document.createElement('script'), d.type = e.scriptType || 'text/javascript', d.charset = 'utf-8', d.async = !0, d.setAttribute('data-requirecontext', a.contextName), d.setAttribute('data-requiremodule', b), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf('[native code') < 0 || isOpera ? (d.addEventListener('load', a.onScriptLoad, !1), d.addEventListener('error', a.onScriptError, !1)) : (useInteractive = !0, d.attachEvent('onreadystatechange', a.onScriptLoad)), d.src = c, currentlyAddingScript = d, baseElement ? head.insertBefore(d, baseElement) : head.appendChild(d), currentlyAddingScript = null, d) : void (isWebWorker && (importScripts(c), a.completeLoad(b)))
}, isBrowser && eachReverse(scripts(), function (a) {
if (head || (head = a.parentNode), dataMain = a.getAttribute('data-main'))
return cfg.baseUrl || (src = dataMain.split('/'), mainScript = src.pop(), subPath = src.length ? src.join('/') + '/' : './', cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ''), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0
}), define = function (a, b, c) {
var d, e;
'string' != typeof a && (c = b, b = a, a = null), isArray(b) || (c = b, b = []), !b.length && isFunction(c) && c.length && (c.toString().replace(commentRegExp, '').replace(cjsRequireRegExp, function (a, c) {
b.push(c)
}), b = (1 === c.length ? ['require'] : [
'require',
'exports',
'module'
]).concat(b)), useInteractive && (d = currentlyAddingScript || getInteractiveScript(), d && (a || (a = d.getAttribute('data-requiremodule')), e = contexts[d.getAttribute('data-requirecontext')])), (e ? e.defQueue : globalDefQueue).push([
a,
b,
c
])
}, define.amd = { jQuery: !0 }, req.exec = function (text) {
return eval(text)
}, req(cfg)
}
}(this), define('search', ['require'], function (a) {
function b(a) {
if (a = a.toLowerCase(), 0 === a.length)
return [];
if (a.length < 3)
return [a];
for (var b = [], c = 0; c <= a.length - 3; c += 1)
b.push(a.substr(c, 3));
return b
}
function c() {
this.trigramTable = {}, this.resultIndex = []
}
return c.prototype.addTerm = function (a, c) {
var d = {};
this.resultIndex.push(c);
for (var e = 0; e < a.length; e += 1)
for (var d = b(a[e]), f = 0; f < d.length; f += 1) {
var g = d[f];
g in this.trigramTable || (this.trigramTable[g] = []), this.trigramTable[g].push(this.resultIndex.length - 1)
}
}, c.prototype.search = function (a, c) {
var d = this, e = a.toLowerCase().split(' '), c = c || 300, f = [], g = {};
e.forEach(function (a, c) {
f = f.concat(b(a))
}), f.forEach(function (a) {
if (a in d.trigramTable)
for (var b = d.trigramTable[a], c = 0; c < b.length; c += 1) {
var e = b[c];
g[e] = g[e] || 0, g[e] = g[e] + 1
}
});
var h = [];
for (var i in g)
h.push({
code: i,
score: g[i]
});
if (h.length > 0) {
h.sort(function (a, b) {
return b.score !== a.score ? b.score - a.score : a.code - b.code
});
for (var j = (Math.ceil(h[0].score / 2), []), k = 0; k < h.length && k < c; k += 1)
j.push(h[k]);
return j.map(function (a) {
return d.resultIndex[a.code]
})
}
return []
}, c
}), define('../3rdparty/require-less/normalize', [], function () {
function a(a) {
var b = a.split('/').reduce(function (a, b, c) {
return '..' !== b || 0 === c ? a.push(b) : a.pop(), a
}, []).join('/');
return b
}
function b(a, b, e) {
if (a.match(h) || a.match(g))
return a;
a = f(a);
var i = e.match(g), j = b.match(g);
return !j || i && i[1] == j[1] && i[2] == j[2] ? d(c(a, b), e) : c(a, b)
}
function c(a, b) {
if ('./' == a.substr(0, 2) && (a = a.substr(2)), a.match(h) || a.match(g))
return a;
var c = b.split('/'), d = a.split('/');
for (c.pop(); curPart = d.shift();)
'..' == curPart ? c.pop() : c.push(curPart);
return c.join('/')
}
function d(a, b) {
var c = b.split('/');
for (c.pop(), b = c.join('/') + '/', i = 0; b.substr(i, 1) == a.substr(i, 1);)
i++;
for (; '/' != b.substr(i, 1);)
i--;
b = b.substr(i + 1), a = a.substr(i + 1), c = b.split('/');
var d = a.split('/');
for (out = ''; c.shift();)
out += '../';
for (; curPart = d.shift();)
out += curPart + '/';
return out.substr(0, out.length - 1)
}
var e = /([^:])\/+/g, f = function (a) {
return a.replace(e, '$1/')
}, g = /[^\:\/]*:\/\/([^\/])*/, h = /^(\/|data:)/, j = function (c, d, e) {
d = a(f(d)), e = a(f(e));
for (var g, h, c, i = /@import\s*("([^"]*)"|'([^']*)')|url\s*\(\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi; g = i.exec(c);) {
h = g[3] || g[2] || g[5] || g[6] || g[4];
var j;
j = b(h, d, e);
var k = g[5] || g[6] ? 1 : 0;
c = c.substr(0, i.lastIndex - h.length - k - 1) + j + c.substr(i.lastIndex - k - 1), i.lastIndex = i.lastIndex + (j.length - h.length)
}
return c
};
return j.convertURIBase = b, j.absoluteURI = c, j.relativeURI = d, j
}), define('../3rdparty/require-less/less.js', ['require'], function (a) {
var b = {};
if (b.pluginBuilder = './less-builder', 'undefined' == typeof window)
return b.load = function (a, b, c) {
c()
}, b;
b.normalize = function (a, b) {
return '.less' == a.substr(a.length - 5, 5) && (a = a.substr(0, a.length - 5)), a = b(a)
};
var c = document.getElementsByTagName('head')[0], d = document.getElementsByTagName('base');
d = d && d[0] && d[0] && d[0].href;
var e = (d || window.location.href.split('#')[0].split('?')[0]).split('/');
e[e.length - 1] = '', e = e.join('/');
var f, g = 0;
return b.inject = function (a) {
g < 31 && (f = document.createElement('style'), f.type = 'text/css', c.appendChild(f), g++), f.styleSheet ? f.styleSheet.cssText += a : f.appendChild(document.createTextNode(a))
}, b.load = function (c, d, f, g) {
window.less = g.less || {}, window.less.env = 'development', a([
'./lessc',
'./normalize'
], function (a, h) {
var i = d.toUrl(c + '.less');
i = h.absoluteURI(i, e);
var j = new a.Parser(window.less);
j.parse('@import (multiple) "' + i + '";', function (a, c) {
return a ? f.error(a) : (b.inject(h(c.toCSS(g.less), i, e)), void setTimeout(f, 7))
}, window.less)
})
}, b
}), define('../3rdparty/require-less/less.js!../css/elements', [], function () {
}), define('../3rdparty/require-less/less.js!../css/font', [], function () {
}), define('../3rdparty/require-less/less.js!../css/app', [], function () {
}), define('../3rdparty/require-less/less.js!../css/info', [], function () {
}), require([
'search',
'less!../css/elements.less',
'less!../css/font.less',
'less!../css/app.less',
'less!../css/info.less'
], function (a) {
function b(a) {
var b = a.match(/^\\u([\dABCDEFabcdef]{4})$/), c = a.match(/^&#(\d+);$/) || a.match(/^(\d+)$/), d = void 0;
return b ? d = parseInt(b[1], 16) : c ? d = c[1] : 1 === a.length && (d = a.codePointAt(0)), d
}
function c(a) {
return Math.floor((a - 65536) / 1024) + 55296
}
function d(a) {
return (a - 65536) % 1024 + 56320
}
function e(a) {
if (a <= 65535)
return '\\u' + (a + 65536).toString(16).substr(-4).toUpperCase();
throw 'Code point outside BMP cannot be encoded.'
}
function f(a) {
return a <= 65535 ? e(a) : e(c(a)) + e(d(a))
}
function g(a) {
_gaq.push([
'_trackEvent',
'search',
void 0,
a
]);
var b = [], c = a.match(/^\\u(\d{4})$/), d = a.match(/^&#(\d+);$/) || a.match(/^(\d+)$/);
b = c ? [parseInt(c[1], 16)] : d ? [d[1]] : m.search(a), a.length >= 1 && 0 === b.length && (b = [a.codePointAt(0)]), 0 === b.length ? $('#help').show() : $('#help').hide(), $('#results').html($.map(b, function (a) {
var b = i[a] && i[a].n.indexOf('combining') !== -1, c = (b ? '&#9676;' : '') + '&#' + a + ';';
return '<a href="#id' + a + '" id="id' + a + '">' + c + '</a>'
}).join('')), 1 === b.length && j.activate($('#results a').first())
}
function h() {
if (location.hash) {
var a = decodeURIComponent(location.hash.split('#')[1]), c = a.match(/^([^\/]+)\/(.*)$/), d = b(a), e = void 0, f = void 0;
if (c ? (e = c[1], f = c[2]) : d ? e = f = d : (e = a, f = void 0), f && void 0 === e && (e = f), l.val(e), g(e), f) {
var h = $('#id' + f).first();
h && j.activate(h)
}
}
}
document.getElementById('searchField').focus(), document.forms[0].onsubmit = function () {
return !1
}, _gaq = window._gaq || [], _gaq.push([
'_setAccount',
'UA-33198175-1'
]), _gaq.push([
'_setDomainName',
'charcod.es'
]), _gaq.push(['_trackPageview']);
var i = {}, j = function () {
var a, b, c, d = function (a) {
var b = i[a], d = $('.templates .charInfo').clone(), e = i[a] && i[a].n.indexOf('combining') !== -1, g = ['&amp;#' + a + ';'], h = $('#searchField').val(), j = h + '/' + a, k = a;
if (h === a && (j = a), location.hash = '#' + j, d.find('h2').html((e ? '&#9676;' : '') + '&#' + a + ';'), d.find('.permalink').attr('href', '#' + k), d.find('.char-source').html(f(parseInt(a, 10))), d.find('.char-codepoint').html(a), b) {
d.find('h3').html(b.n), d.find('.char-group').attr('href', '#' + b.b).html(b.b), b.altnames && b.altnames.html && g.push('&amp;' + b.altnames.html + ';'), d.find('.char-html').html(g.join('<br>')), _gaq.push([
'_trackEvent',
'popup',
'activate',
b.b
]), b.altnames && b.altnames.latex ? d.find('.char-latex').html(b.altnames.latex) : d.find('.char-latex-row').hide(), b.a && b.a.length > 0 ? d.find('.char-aliases').html(b.a.join(', ')) : d.find('.char-aliases-row').hide();
var l = d.find('.copyButton')[0];
l && navigator.userAgent.indexOf(' Safari/') > 0 && navigator.userAgent.indexOf(' Chrome/') === -1 ? d.find('.copyButton').hide() : l && (_gaq.push([
'_trackEvent',
'copy-button',
b.b
]), l.setAttribute('data-clipboard-text', String.fromCodePoint(a)), c = clipboardButton(l))
}
return d
};
return {
activate: function (c) {
var e = c[0].id.replace('id', ''), f = c.position().top, g = c;
for (a && this.deactivate(), a = c, b = d(e); g.next().length && g.next().position().top === f;)
g = g.next();
b.insertAfter(g), a.addClass('active')
},
deactivate: function () {
_gaq.push([
'_trackEvent',
'popup',
'deactivate'
]), a.removeClass('active'), b && b.remove(), c && (c.destroy(), c = void 0), a = b = void 0
}
}
}();
$('#results').on('click', 'a', function (a) {
j.activate($(a.target)), a.preventDefault()
});
var k, l = $('#searchField');
l.keyup(function (a) {
k && window.clearTimeout(k), k = window.setTimeout(function () {
g(l.val().trim())
}, 250)
}), $('.form-search').submit(function () {
return g(l.val().trim()), !1
});
var m = new a;
$.ajax({
url: '/static/data.8e8976fc28.json',
dataType: 'json',
success: function (a) {
var b, c, d, e, f = a.length;
for (b = 0; b < f; b += 1) {
if (c = a[b], i[c.c] = c, d = [].concat(c.n.split(' '), [c.b], c.a ? c.a : []), c.altnames)
for (e in c.altnames)
d.push(c.altnames[e]);
m.addTerm(d, c.c)
}
l.val() && g(l.val()), h()
},
error: function () {
throw new Error('could not load data.json: ' + arguments)
}
}), window.onhashchange = function (a) {
a.newURL !== a.oldURL && h()
}, h()
}), define('app', function () {
})//# sourceMappingURL=bundle-42.703534cc29.map
