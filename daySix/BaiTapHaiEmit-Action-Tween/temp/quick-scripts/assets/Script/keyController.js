(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/keyController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c6815jdGDpOYbGVKQJ55IKv', 'keyController', __filename);
// Script/keyController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,
  properties: {
    keyMove: true
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    Emitter.instance.registerEvent("DISABLE KEY", this.disableKey.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
  onKeyDown: function onKeyDown(event) {
    if (!this.keyMove) return;
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.goAttack_Action();
        break;
      case cc.macro.KEY.left:
        this.goLeft_Action();
        break;
      case cc.macro.KEY.right:
        this.goRight_Action();
        break;
      case cc.macro.KEY.up:
        this.goJump_Action();
        break;
      case cc.macro.KEY.down:
        this.resetPos_Action();
        break;

      case cc.macro.KEY.e:
        this.goAttack_Tween();
        break;
      case cc.macro.KEY.a:
        this.goLeft_Tween();
        break;
      case cc.macro.KEY.d:
        this.goRight_Tween();
        break;
      case cc.macro.KEY.w:
        this.goJump_Tween();
        break;
      case cc.macro.KEY.s:
        this.resetPos_Tween();
        break;
    }
  },
  goAttack_Action: function goAttack_Action() {
    Emitter.instance.emit("ATTACK_ACTION");
  },
  goLeft_Action: function goLeft_Action() {
    Emitter.instance.emit("LEFT_ACTION");
  },
  goRight_Action: function goRight_Action() {
    Emitter.instance.emit("RIGHT_ACTION");
  },
  goJump_Action: function goJump_Action() {
    Emitter.instance.emit("JUMP_ACTION");
  },
  resetPos_Action: function resetPos_Action() {
    Emitter.instance.emit("RESET_ACTION");
  },
  goAttack_Tween: function goAttack_Tween() {
    Emitter.instance.emit("ATTACK_TWEEN");
  },
  goLeft_Tween: function goLeft_Tween() {
    Emitter.instance.emit("LEFT_TWEEN");
  },
  goRight_Tween: function goRight_Tween() {
    Emitter.instance.emit("RIGHT_TWEEN");
  },
  goJump_Tween: function goJump_Tween() {
    Emitter.instance.emit("JUMP_TWEEN");
  },
  resetPos_Tween: function resetPos_Tween() {
    Emitter.instance.emit("RESET_TWEEN");
  },
  disableKey: function disableKey(value) {
    this.keyMove = value;
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
        //# sourceMappingURL=keyController.js.map
        