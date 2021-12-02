window.__require = function t(e, c, n) {
function o(i, r) {
if (!c[i]) {
if (!e[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!e[l]) {
var a = "function" == typeof __require && __require;
if (!r && a) return a(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
}
var u = c[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return o(e[i][1][t] || t);
}, u, u.exports, t, e, c, n);
}
return c[i].exports;
}
for (var s = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
HelloWorld: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
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
update: function(t) {}
});
cc._RF.pop();
}, {} ],
scale: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "c59188ebGJMWKICU7ibgGc5", "scale");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
cc.tween(this.node).to(.5, {
scale: 1.5
}).to(.5, {
scale: .5
}).start();
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
test: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "afcd841199GU7sPweRKsv9I", "test");
cc.Class({
extends: cc.Component,
properties: {
userID: 0,
userName: "Test",
frames: [ cc.SpriteFrame ],
score: {
default: 0,
type: cc.Integer,
visible: !0,
serializable: !1,
displayName: "Score",
tooltip: "Đây là Tooltip Score",
point: 10
},
time: {
default: 0,
type: cc.Integer,
visible: !0,
serializable: !1,
displayName: "Time",
tooltip: "Đây là Tooltip Time",
point: 10
},
width: {
get: function() {
return this._width;
},
set: function(t) {
this._width = t;
}
},
loaded: !0,
target: null
},
onLoad: function() {
var t = cc.Class({
name: "myObject",
ctor: function() {
this.name = "Tui la Object";
this.width = "100px";
}
}), e = new t();
cc.log(e instanceof t);
cc.log(e.name, e.width);
var c = new (cc.Class({
extends: t
}))();
cc.log(c.name);
var n = cc.Class({
ctor: function() {
cc.log("Bag");
}
}), o = cc.Class({
extends: n
}), s = new (cc.Class({
extends: o,
ctor: function() {
cc.log("Card");
}
}))();
cc.log(s instanceof n);
},
start: function() {
var t = this.getComponent(cc.Label);
t.string = "HƯỚNG DẪN TÂN THU";
cc.log(t.string);
cc.tween(this.node).to(.5, {
scale: 1.5
}).to(.5, {
scale: .5
}).start();
},
update: function(t) {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "scale", "test" ]);