const Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  start() {},
  update(dt) {},
  onKeyLeft(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.left:
        this.goLeft();
      case cc.macro.KEY.a:
        this.goLeft();
    }
  },
  onKeyRight(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.right:
        this.goRight();
      case cc.macro.KEY.d:
        this.goRight();
    }
  },
  onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        this.goJump();
      case cc.macro.KEY.w:
        this.goJump();
    }
  },
  onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.down:
        this.resetPos();
      case cc.macro.KEY.s:
        this.resetPos();
    }
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
});
