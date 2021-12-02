window.__require = function e(t, r, n) {
function o(c, l) {
if (!r[c]) {
if (!t[c]) {
var u = c.split("/");
u = u[u.length - 1];
if (!t[u]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + c + "'");
}
}
var f = r[c] = {
exports: {}
};
t[c][0].call(f.exports, function(e) {
return o(t[c][1][e] || e);
}, f, f.exports, e, t, r, n);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
return o;
}({
HelloWorld: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!"
},
onLoad: function() {
this.label.string = this.text;
},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
index: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "abd48LlPlNJ1J+bghNZCZfA", "index");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "index" ]);