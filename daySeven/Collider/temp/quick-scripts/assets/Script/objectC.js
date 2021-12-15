(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/objectC.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '16d44WVlGJNSLRboAhq8SFR', 'objectC', __filename);
// Script/objectC.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },
  start: function start() {},
  update: function update(dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log("on collision enter");
    this.node.destroy();
  },
  onCollisionStay: function onCollisionStay(other, self) {
    console.log("on collision stay");
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
        //# sourceMappingURL=objectC.js.map
        