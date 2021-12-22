(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/buttonController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ccc2Rf8tZC6oGlKIRDprU2', 'buttonController', __filename);
// Script/buttonController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    startBtn: cc.Button,
    leaderBoardStartBtn: cc.Button,
    quitStartBtn: cc.Button,
    tutorialBtn: cc.Button,
    leaderBoardBtn: cc.Button,
    musicOnBtn: cc.Button,
    musicOffBtn: cc.Button,
    effectOnBtn: cc.Button,
    effectOffBtn: cc.Button,
    closeBtn: cc.Button,
    closeLeaderBoardBtn: cc.Button,
    newGameBtn: cc.Button,
    backBtn: cc.Button,
    gameOverButton: cc.Button,
    effectOnNode: cc.Node,
    effectOffNode: cc.Node,
    musicOnNode: cc.Node,
    musicOffNode: cc.Node,
    backgroundSound: cc.AudioSource,
    effectSound: cc.AudioSource,
    clickSound: cc.AudioSource,
    matchSound: cc.AudioSource
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    //form Start
    this.startBtn.node.on("click", this.startEvent, this);
    this.leaderBoardStartBtn.node.on("click", this.leaderBoardEvent, this);
    this.quitStartBtn.node.on("click", this.quitEvent, this);

    //form Begin
    this.tutorialBtn.node.on("click", this.tutorialEvent, this);
    this.leaderBoardBtn.node.on("click", this.leaderBoardEvent, this);
    this.closeBtn.node.on("click", this.closeTutorialEvent, this);
    this.closeLeaderBoardBtn.node.on("click", this.closeLeaderBoardEvent, this);
    this.musicOnBtn.node.on("click", this.musicOnEvent, this);
    this.musicOffBtn.node.on("click", this.musicOffEvent, this);
    this.effectOnBtn.node.on("click", this.effectOnSoundEvent, this);
    this.effectOffBtn.node.on("click", this.effectOffSoundEvent, this);
    this.newGameBtn.node.on("click", this.newGameEvent, this);
    this.backBtn.node.on("click", this.backEvent, this);
    this.gameOverButton.node.on("click", this.playAgainEvent, this);
    Emitter.instance.registerEvent("MOVE SOUND", this.moveSound.bind(this));
    Emitter.instance.registerEvent("MATCH SOUND", this.matchSoundEvent.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
  moveSound: function moveSound() {
    this.effectSound.play();
  },
  startEvent: function startEvent() {
    Emitter.instance.emit("START GAME");
    this.clickSound.play();
    this.backgroundSound.play();
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
    this.matchSound.mute = true;
    this.clickSound.play();
    // this.effectSound.mute == false ? (this.effectSound.mute = true) : this.effectSound.mute = false)
  },
  effectOffSoundEvent: function effectOffSoundEvent() {
    this.effectOnNode.active = true;
    this.effectOffNode.active = false;
    this.effectSound.mute = false;
    this.matchSound.mute = false;
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
  },
  backEvent: function backEvent() {
    Emitter.instance.emit("BACK");
    this.backgroundSound.pause();
  },
  matchSoundEvent: function matchSoundEvent() {
    this.matchSound.play();
  }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=buttonController.js.map
        