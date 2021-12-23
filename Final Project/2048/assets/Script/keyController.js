const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    keyMove: true,
    timer: 0,
    count: 30,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    Emitter.instance.registerEvent("DISABLE KEY", this.disableKey.bind(this));
    Emitter.instance.registerEvent("KEY DOWN", this.keyDown.bind(this));
    Emitter.instance.registerEvent("KEY UP", this.keyUp.bind(this));
    Emitter.instance.registerEvent("KEY RIGHT", this.keyRight.bind(this));
    Emitter.instance.registerEvent("KEY LEFT", this.keyLeft.bind(this));
    this.disableKey(false);
  },

  start() {},

  update(dt) {},

  onKeyDown(event) {
    if (!this.keyMove) return;
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
    this.colorCheck();
  },
  keyUp() {
    this.goUp();
    this.matchItemCol();
    this.goUp();
    this.createRandomItem();
    this.colorCheck();
  },
  keyRight() {
    this.goRight();
    this.matchItemRow();
    this.goRight();
    this.createRandomItem();
    this.colorCheck();
  },
  keyLeft() {
    this.goLeft();
    this.matchItemRow();
    this.goLeft();
    this.createRandomItem();
    this.colorCheck();
  },
  colorCheck() {
    Emitter.instance.emit("COLOR CHECK");
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
  disableKey(value) {
    this.keyMove = value;
  },
});
