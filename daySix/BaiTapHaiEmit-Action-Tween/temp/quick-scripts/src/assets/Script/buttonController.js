"use strict";
cc._RF.push(module, 'a35bc4W925AbZc6U6UlY3Bg', 'buttonController');
// Script/buttonController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  "extends": cc.Component,
  properties: {
    attackBtn: cc.Button,
    leftBtn: cc.Button,
    rightBtn: cc.Button,
    jumpBtn: cc.Button,
    resetBtn: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.attackBtn.node.on("click", this.goAttack, this);
    this.leftBtn.node.on("click", this.goLeft, this);
    this.rightBtn.node.on("click", this.goRight, this);
    this.jumpBtn.node.on("click", this.goJump, this);
    this.resetBtn.node.on("click", this.resetPos, this);
    Emitter.instance.registerEvent("DISABLE BUTTON", this.disableBtn.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
  goAttack: function goAttack() {
    Emitter.instance.emit("ATTACK");
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
  },
  disableBtn: function disableBtn(value) {
    this.attackBtn.interactable = value;
    this.leftBtn.interactable = value;
    this.rightBtn.interactable = value;
    this.jumpBtn.interactable = value;
  }
});

cc._RF.pop();