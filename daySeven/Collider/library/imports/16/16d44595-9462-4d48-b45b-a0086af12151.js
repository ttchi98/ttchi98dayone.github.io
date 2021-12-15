"use strict";
cc._RF.push(module, '16d44WVlGJNSLRboAhq8SFR', 'objectC');
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