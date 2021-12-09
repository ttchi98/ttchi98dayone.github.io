const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,
  properties: {
    leftBtn: cc.Button,
    rightBtn: cc.Button,
    jumpBtn: cc.Button,
    resetBtn: cc.Button,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    this.leftBtn.node.on("click", this.goLeft, this);
    this.rightBtn.node.on("click", this.goRight, this);
    this.jumpBtn.node.on("click", this.goJump, this);
    this.resetBtn.node.on("click", this.resetPos, this);
    Emitter.instance.registerEvent("DISABLE", this.disableBtn.bind(this));
  },
  start() {},
  update(dt) {},
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
  disableBtn(value) {
    this.leftBtn.interactable = value;
    this.rightBtn.interactable = value;
    this.jumpBtn.interactable = value;
  },
});
