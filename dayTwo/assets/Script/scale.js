cc.Class({
  extends: cc.Component,

  properties: {},

  start() {
    cc.tween(this.node).to(0.5, { scale: 1.5 }).to(0.5, { scale: 0.5 }).start();
  },

  update(dt) {},
});
