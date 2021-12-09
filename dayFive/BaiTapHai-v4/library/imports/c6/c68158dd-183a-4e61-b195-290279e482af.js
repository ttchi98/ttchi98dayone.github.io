"use strict";
cc._RF.push(module, 'c6815jdGDpOYbGVKQJ55IKv', 'keyController');
// Script/keyController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start: function start() {},
  update: function update(dt) {},
  onKeyLeft: function onKeyLeft(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.left:
        this.goLeft();
      case cc.macro.KEY.a:
        this.goLeft();
    }
  },
  onKeyRight: function onKeyRight(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.right:
        this.goRight();
      case cc.macro.KEY.d:
        this.goRight();
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        this.goJump();
      case cc.macro.KEY.w:
        this.goJump();
    }
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.down:
        this.resetPos();
      case cc.macro.KEY.s:
        this.resetPos();
    }
  },
  goLeft: function goLeft() {
    Emitter.instance.emit("LEFT");
  },
  goRight: function goRight() {
    Emitter.instance.emit("RIGHT");
  },
  goJump: function goJump() {
    Emitter.instance.emit("JUMP");
  },
  resetPos: function resetPos() {
    Emitter.instance.emit("RESET");
  }
});

cc._RF.pop();