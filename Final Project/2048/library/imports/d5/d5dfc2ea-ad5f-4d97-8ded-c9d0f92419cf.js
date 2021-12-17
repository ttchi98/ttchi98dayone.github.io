"use strict";
cc._RF.push(module, 'd5dfcLqrV9Nl43tydD5JBnP', 'colorController');
// Script/colorController.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.node.children[0].children[0].color = "#FFFFFF";
    cc.log(this.node.children[0].children[0]);
  },
  start: function start() {},
  update: function update(dt) {}
});

cc._RF.pop();