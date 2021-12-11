(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/buttonController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a35bc4W925AbZc6U6UlY3Bg', 'buttonController', __filename);
// Script/buttonController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,
  properties: {
    leftBtn: cc.Button,
    rightBtn: cc.Button,
    jumpBtn: cc.Button,
    resetBtn: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.leftBtn.node.on("click", this.goLeft, this);
    this.rightBtn.node.on("click", this.goRight, this);
    this.jumpBtn.node.on("click", this.goJump, this);
    this.resetBtn.node.on("click", this.resetPos, this);
    Emitter.instance.registerEvent("DISABLE BUTTON", this.disableBtn.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
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
    this.leftBtn.interactable = value;
    this.rightBtn.interactable = value;
    this.jumpBtn.interactable = value;
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
        