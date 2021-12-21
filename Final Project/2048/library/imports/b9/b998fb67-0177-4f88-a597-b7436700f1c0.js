"use strict";
cc._RF.push(module, 'b998ftnAXdPiKWXt0NnAPHA', 'touchController');
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