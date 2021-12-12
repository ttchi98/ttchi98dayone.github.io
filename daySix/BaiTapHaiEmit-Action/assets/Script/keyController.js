const Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,
  properties: {
    keyMove: true,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    Emitter.instance.registerEvent("DISABLE KEY", this.disableKey.bind(this));
  },
  start() {},
  update(dt) {},
  onKeyDown(event) {
    if (!this.keyMove) return;
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.goAttack();
        break;
      case cc.macro.KEY.left:
        this.goLeft();
        break;
      case cc.macro.KEY.right:
        this.goRight();
        break;
      case cc.macro.KEY.up:
        this.goJump();
        break;
      case cc.macro.KEY.down:
        this.resetPos();
        break;
    }
  },
  goAttack() {
    Emitter.instance.emit("ATTACK");
  },
  goLeft() {
    Emitter.instance.emit("LEFT");
  },
  goRight() {
    Emitter.instance.emit("RIGHT");
  },
  goJump() {
    Emitter.instance.emit("JUMP");
  },
  resetPos() {
    Emitter.instance.emit("RESET");
  },
  disableKey(value) {
    this.keyMove = value;
  },
});
