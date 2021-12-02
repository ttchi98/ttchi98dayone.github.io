"use strict";
cc._RF.push(module, 'c59188ebGJMWKICU7ibgGc5', 'scale');
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