(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/buttonController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ccc2Rf8tZC6oGlKIRDprU2', 'buttonController', __filename);
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
        