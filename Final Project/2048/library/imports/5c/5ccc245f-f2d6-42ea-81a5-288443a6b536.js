"use strict";
cc._RF.push(module, '5ccc2Rf8tZC6oGlKIRDprU2', 'buttonController');
// Script/buttonController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    musicBtn: cc.Button,
    effectBtn: cc.Button,
    newGameBtn: cc.Button,
    quitBtn: cc.Button,
    backgroundSound: cc.AudioSource,
    effectSound: cc.AudioSource
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.musicBtn.node.on("click", this.backgroundSoundEvent, this);
    this.effectBtn.node.on("click", this.effectSoundEvent, this);
    this.quitBtn.node.on("click", this.quitEvent, this);
    // this.backgroundSound.play();
    Emitter.instance.registerEvent("MOVE SOUND", this.moveSound.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
  backgroundSoundEvent: function backgroundSoundEvent() {
    this.backgroundSound.isPlaying ? this.backgroundSound.pause() : this.backgroundSound.play();
  },
  effectSoundEvent: function effectSoundEvent() {
    this.effectSound.mute == false ? this.effectSound.mute = true : this.effectSound.mute = false;
  },
  quitEvent: function quitEvent() {
    cc.game.end();
  },
  moveSound: function moveSound() {
    this.effectSound.play();
  }
});

cc._RF.pop();