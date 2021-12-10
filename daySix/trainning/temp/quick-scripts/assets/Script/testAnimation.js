(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/testAnimation.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fed93bMIWZNlK+VKu7OSiG6', 'testAnimation', __filename);
// Script/testAnimation.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    spAnim: sp.Skeleton
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.spAnim.setEventListener(function (entry, event) {
      var data = event.data;

      cc.log(data.name);
    });
  },
  start: function start() {
    this.spAnim.setAnimation(0, "idle", false);
    this.spAnim.addAnimation(0, "aim", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "death", false);
    this.spAnim.addAnimation(0, "hoverboard", false);
    this.spAnim.addAnimation(0, "idle-turn", false);
    this.spAnim.addAnimation(0, "portal", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run-to-idle", false);
    this.spAnim.addAnimation(0, "shoot", false);
    this.spAnim.addAnimation(0, "walk", false);
  }
}

// update (dt) {},
);

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
        //# sourceMappingURL=testAnimation.js.map
        