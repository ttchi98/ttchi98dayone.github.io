const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
  },

  start() {},

  // update (dt) {},
});
