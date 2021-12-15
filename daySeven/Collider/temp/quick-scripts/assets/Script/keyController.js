(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/keyController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ead70euKABN/oemEzWmYQDq', 'keyController', __filename);
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
        