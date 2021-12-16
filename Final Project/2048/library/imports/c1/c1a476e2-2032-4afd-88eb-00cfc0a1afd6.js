"use strict";
cc._RF.push(module, 'c1a47biIDJK/YjrAM/Aoa/W', 'keyController');
// Script/keyController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start: function start() {},
  update: function update(dt) {},
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.down:
        this.keyDown();
        break;
      case cc.macro.KEY.up:
        this.keyUp();
        break;
      case cc.macro.KEY.right:
        this.keyRight();
        break;
      case cc.macro.KEY.left:
        this.keyLeft();
        break;
    }
  },
  keyDown: function keyDown() {
    this.goDown();
    this.matchItemCol();
    this.goDown();
    this.createRandomItem();
  },
  keyUp: function keyUp() {
    this.goUp();
    this.matchItemCol();
    this.goUp();
    this.createRandomItem();
  },
  keyRight: function keyRight() {
    this.goRight();
    this.matchItemRow();
    this.goRight();
    this.createRandomItem();
  },
  keyLeft: function keyLeft() {
    this.goLeft();
    this.matchItemRow();
    this.goLeft();
    this.createRandomItem();
  },
  matchItemRow: function matchItemRow() {
    Emitter.instance.emit("MATCH ROW");
  },
  matchItemCol: function matchItemCol() {
    Emitter.instance.emit("MATCH COL");
  },
  createRandomItem: function createRandomItem() {
    Emitter.instance.emit("CREATE RANDOM ITEM");
  },
  moveSound: function moveSound() {
    Emitter.instance.emit("MOVE SOUND");
  },
  goDown: function goDown() {
    Emitter.instance.emit("DOWN");
    this.moveSound();
  },
  goUp: function goUp() {
    Emitter.instance.emit("UP");
    this.moveSound();
  },
  goRight: function goRight() {
    Emitter.instance.emit("RIGHT");
    this.moveSound();
  },
  goLeft: function goLeft() {
    Emitter.instance.emit("LEFT");
    this.moveSound();
  }
});

cc._RF.pop();