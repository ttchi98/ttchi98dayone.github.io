(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/touchController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b998ftnAXdPiKWXt0NnAPHA', 'touchController', __filename);
// Script/touchController.js

// const Emitter = require("mEmitter");

// cc.Class({
//   extends: cc.Component,

//   properties: {
//     touchNode: cc.Node,
//     x: 0,
//     y: 0,
//     canTouch: true,
//   },

//   // LIFE-CYCLE CALLBACKS:

//   onLoad() {
//     this.touchNode.on("touchstart", this.touchStart, this);
//   },

//   start() {},

//   update(dt) {},

//   touchStart() {
//     if (!this.canTouch) return;
//     this.canTouch = false;
//     this.touchNode.on(
//       "touchmove",
//       (event) => {
//         //   cc.log(event.getDelta());
//         let position = event.getDelta();
//         this.x = position.x;
//         this.y = position.y;
//         cc.log(this.x, this.y);
//       },
//       this
//     );
//   },
// });
"use strict";

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
        //# sourceMappingURL=touchController.js.map
        