"use strict";
cc._RF.push(module, 'c1a47biIDJK/YjrAM/Aoa/W', 'keyController');
// Script/keyController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    keyMove: true,
    timer: 0,
    count: 30
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    Emitter.instance.registerEvent("DISABLE KEY", this.disableKey.bind(this));
    Emitter.instance.registerEvent("KEY DOWN", this.keyDown.bind(this));
    Emitter.instance.registerEvent("KEY UP", this.keyUp.bind(this));
    Emitter.instance.registerEvent("KEY RIGHT", this.keyRight.bind(this));
    Emitter.instance.registerEvent("KEY LEFT", this.keyLeft.bind(this));
    this.disableKey(false);
  },
  start: function start() {},
  update: function update(dt) {},
  onKeyDown: function onKeyDown(event) {
    if (!this.keyMove) return;
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
    this.colorCheck();
  },
  keyUp: function keyUp() {
    this.goUp();
    this.matchItemCol();
    this.goUp();
    this.createRandomItem();
    this.colorCheck();
  },
  keyRight: function keyRight() {
    this.goRight();
    this.matchItemRow();
    this.goRight();
    this.createRandomItem();
    this.colorCheck();
  },
  keyLeft: function keyLeft() {
    this.goLeft();
    this.matchItemRow();
    this.goLeft();
    this.createRandomItem();
    this.colorCheck();
  },
  colorCheck: function colorCheck() {
    Emitter.instance.emit("COLOR CHECK");
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
  },
  disableKey: function disableKey(value) {
    this.keyMove = value;
  }
});

cc._RF.pop();