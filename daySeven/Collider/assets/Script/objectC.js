cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    let manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },

  start() {},

  update(dt) {},
  onCollisionEnter(other, self) {
    console.log("on collision enter");
    this.node.destroy();
  },
  onCollisionStay(other, self) {
    console.log("on collision stay");
  },
  onCollisionExit(other, self) {
    console.log("on collision exit");
  },
});
