cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.children[0].children[0].color = "#FFFFFF";
    cc.log(this.node.children[0].children[0]);
  },

  start() {},

  update(dt) {},
});
