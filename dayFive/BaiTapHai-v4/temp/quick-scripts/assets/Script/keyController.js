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
      case cc.macro.KEY.left:
        this.goLeft();
        break;
      case cc.macro.KEY.right:
        this.goRight();
        break;
      case cc.macro.KEY.up:
        this.goJump();
        break;
      case cc.macro.KEY.down:
        this.resetPos();
        break;
    }
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
        