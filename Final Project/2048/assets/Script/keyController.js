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
        this.keyDown();
        break;
      case cc.macro.KEY.up:
        this.keyUp();
        break;
      case cc.macro.KEY.right:
        this.keyRight();
        break;
      case cc.macro.KEY.left:
        this.keyLeft();
        break;
    }
  },
  keyDown() {
    this.goDown();
    this.matchItemCol();
    this.goDown();
    this.createRandomItem();
  },
  keyUp() {
    this.goUp();
    this.matchItemCol();
    this.goUp();
    this.createRandomItem();
  },
  keyRight() {
    this.goRight();
    this.matchItemRow();
    this.goRight();
    this.createRandomItem();
  },
  keyLeft() {
    this.goLeft();
    this.matchItemRow();
    this.goLeft();
    this.createRandomItem();
  },
  matchItemRow() {
    Emitter.instance.emit("MATCH ROW");
  },
  matchItemCol() {
    Emitter.instance.emit("MATCH COL");
  },
  createRandomItem() {
    Emitter.instance.emit("CREATE RANDOM ITEM");
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
