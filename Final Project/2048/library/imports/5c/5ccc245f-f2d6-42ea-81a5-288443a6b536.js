"use strict";
cc._RF.push(module, '5ccc2Rf8tZC6oGlKIRDprU2', 'buttonController');
// Script/buttonController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    tutorialBtn: cc.Button,
    leaderBoardBtn: cc.Button,
    musicOnBtn: cc.Button,
    musicOffBtn: cc.Button,
    effectOnBtn: cc.Button,
    effectOffBtn: cc.Button,
    closeBtn: cc.Button,
    closeLeaderBoardBtn: cc.Button,
    newGameBtn: cc.Button,
    quitBtn: cc.Button,
    gameOverButton: cc.Button,
    effectOnNode: cc.Node,
    effectOffNode: cc.Node,
    musicOnNode: cc.Node,
    musicOffNode: cc.Node,
    backgroundSound: cc.AudioSource,
    effectSound: cc.AudioSource,
    clickSound: cc.AudioSource
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.tutorialBtn.node.on("click", this.tutorialEvent, this);
    this.leaderBoardBtn.node.on("click", this.leaderBoardEvent, this);
    this.closeBtn.node.on("click", this.closeTutorialEvent, this);
    this.closeLeaderBoardBtn.node.on("click", this.closeLeaderBoardEvent, this);
    this.musicOnBtn.node.on("click", this.musicOnEvent, this);
    this.musicOffBtn.node.on("click", this.musicOffEvent, this);
    this.effectOnBtn.node.on("click", this.effectOnSoundEvent, this);
    this.effectOffBtn.node.on("click", this.effectOffSoundEvent, this);
    this.newGameBtn.node.on("click", this.newGameEvent, this);
    this.quitBtn.node.on("click", this.quitEvent, this);
    this.gameOverButton.node.on("click", this.playAgainEvent, this);
    Emitter.instance.registerEvent("MOVE SOUND", this.moveSound.bind(this));
    // this.backgroundSound.play();
  },
  start: function start() {},
  update: function update(dt) {},
  moveSound: function moveSound() {
    this.effectSound.play();
  },
  leaderBoardEvent: function leaderBoardEvent() {
    Emitter.instance.emit("LEADER BOARD");
    this.clickSound.play();
  },
  closeLeaderBoardEvent: function closeLeaderBoardEvent() {
    Emitter.instance.emit("CLOSE LEADER BOARD");
    this.clickSound.play();
  },
  tutorialEvent: function tutorialEvent() {
    Emitter.instance.emit("TUTORIAL");
    this.clickSound.play();
  },
  closeTutorialEvent: function closeTutorialEvent() {
    Emitter.instance.emit("CLOSE TUTORIAL");
    this.clickSound.play();
  },
  musicOnEvent: function musicOnEvent() {
    this.musicOnNode.active = false;
    this.musicOffNode.active = true;
    this.backgroundSound.pause();
    this.clickSound.play();

    // this.backgroundSound.isPlaying ? this.backgroundSound.pause() : this.backgroundSound.play();
  },
  musicOffEvent: function musicOffEvent() {
    this.musicOnNode.active = true;
    this.musicOffNode.active = false;
    this.backgroundSound.play();
    this.clickSound.play();
  },
  effectOnSoundEvent: function effectOnSoundEvent() {
    this.effectOnNode.active = false;
    this.effectOffNode.active = true;
    this.effectSound.mute = true;
    this.clickSound.play();

    // this.effectSound.mute == false ? (this.effectSound.mute = true) : this.effectSound.mute = false)
  },
  effectOffSoundEvent: function effectOffSoundEvent() {
    this.effectOnNode.active = true;
    this.effectOffNode.active = false;
    this.effectSound.mute = false;
    this.clickSound.play();
  },
  playAgainEvent: function playAgainEvent() {
    Emitter.instance.emit("PLAY AGAIN");
    this.clickSound.play();
  },
  newGameEvent: function newGameEvent() {
    Emitter.instance.emit("NEW GAME");
    this.clickSound.play();
  },
  quitEvent: function quitEvent() {
    cc.game.end();
    this.clickSound.play();
  }
});

cc._RF.pop();