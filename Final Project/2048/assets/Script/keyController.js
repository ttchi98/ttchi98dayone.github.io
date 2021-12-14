const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },

  start() {},

  update(dt) {},

  onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.down:
        this.goDown();
        break;
      case cc.macro.KEY.up:
        this.goUp();
        break;
      case cc.macro.KEY.right:
        this.goRight();
        break;
      case cc.macro.KEY.left:
        this.goLeft();
        break;
    }
  },

  moveSound() {
    Emitter.instance.emit("MOVE SOUND");
  },
  goDown() {
    Emitter.instance.emit("DOWN");
    this.moveSound();
  },
  goUp() {
    Emitter.instance.emit("UP");
    this.moveSound();
  },
  goRight() {
    Emitter.instance.emit("RIGHT");
    this.moveSound();
  },
  goLeft() {
    Emitter.instance.emit("LEFT");
    this.moveSound();
  },
});