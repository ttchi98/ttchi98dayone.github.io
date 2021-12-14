(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/objectA.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f0432rWXz9D+pyzlEr3eQAv', 'objectA', __filename);
// Script/objectA.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,

  properties: {
    canMove: false,
    time: 0
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    // manager.enabledDebugDraw = true;
    Emitter.instance = new Emitter();
    // Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
  },
  start: function start() {},
  update: function update(dt) {
    if (this.canMove == false) {
      this.node.y -= dt * 100;
    } else {
      this.time += dt;
      if (this.time >= 2) {
        this.node.y += dt * 100;
        this.node.scaleY = 0.75;
      }
    }
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log("on collision enter");
  },
  onCollisionStay: function onCollisionStay(other, self) {
    console.log("on collision stay");
    this.canMove = true;
  },
  onCollisionExit: function onCollisionExit(other, self) {
    console.log("on collision exit");
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
        //# sourceMappingURL=objectA.js.map
        