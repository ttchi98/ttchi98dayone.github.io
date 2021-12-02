(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/scale.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c59188ebGJMWKICU7ibgGc5', 'scale', __filename);
// Script/scale.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {},

  start: function start() {
    cc.tween(this.node).to(0.5, { scale: 1.5 }).to(0.5, { scale: 0.5 }).start();
  },
  update: function update(dt) {}
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
        //# sourceMappingURL=scale.js.map
        