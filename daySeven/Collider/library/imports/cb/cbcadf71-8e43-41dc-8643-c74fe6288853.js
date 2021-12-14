"use strict";
cc._RF.push(module, 'cbcad9xjkNB3IZDx0/mKIhT', 'main');
// Script/main.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
  },
  start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();