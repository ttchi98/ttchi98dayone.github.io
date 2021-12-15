"use strict";
cc._RF.push(module, '84e6dIarrZJoJ4KwqOzR+S4', 'ground');
// Script/ground.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
  },
  start: function start() {},
  update: function update(dt) {}
});

cc._RF.pop();