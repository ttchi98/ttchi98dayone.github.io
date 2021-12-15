const Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,

  properties: {
    canMove: false,
    time: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    let manager = cc.director.getCollisionManager();
    manager.enabled = true;
    // manager.enabledDebugDraw = true;
    Emitter.instance = new Emitter();
    // Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
  },

  start() {},

  update(dt) {
    if (this.canMove == false) {
      this.node.y -= dt * 100;
    } else {
      this.time += dt;
      if (this.time >= 2) {
        this.node.y += dt * 100;
        this.node.scaleY = 0.75;
      }
    }
  },

  onCollisionEnter(other, self) {
    console.log("on collision enter");
  },
  onCollisionStay(other, self) {
    console.log("on collision stay");
    this.canMove = true;
  },
  onCollisionExit(other, self) {
    console.log("on collision exit");
  },
});
