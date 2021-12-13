const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,
  properties: {
    attackBtn_Action: cc.Button,
    leftBtn_Action: cc.Button,
    rightBtn_Action: cc.Button,
    jumpBtn_Action: cc.Button,
    resetBtn_Action: cc.Button,

    attackBtn_Tween: cc.Button,
    leftBtn_Tween: cc.Button,
    rightBtn_Tween: cc.Button,
    jumpBtn_Tween: cc.Button,
    resetBtn_Tween: cc.Button,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    this.attackBtn_Action.node.on("click", this.goAttack_Action, this);
    this.leftBtn_Action.node.on("click", this.goLeft_Action, this);
    this.rightBtn_Action.node.on("click", this.goRight_Action, this);
    this.jumpBtn_Action.node.on("click", this.goJump_Action, this);
    this.resetBtn_Action.node.on("click", this.resetPos_Action, this);

    this.attackBtn_Tween.node.on("click", this.goAttack_Tween, this);
    this.leftBtn_Tween.node.on("click", this.goLeft_Tween, this);
    this.rightBtn_Tween.node.on("click", this.goRight_Tween, this);
    this.jumpBtn_Tween.node.on("click", this.goJump_Tween, this);
    this.resetBtn_Tween.node.on("click", this.resetPos_Tween, this);
    Emitter.instance.registerEvent(
      "DISABLE BUTTON",
      this.disableBtn.bind(this)
    );
  },
  start() {},
  update(dt) {},
  goAttack_Action() {
    Emitter.instance.emit("ATTACK_ACTION");
  },
  goLeft_Action() {
    Emitter.instance.emit("LEFT_ACTION");
  },
  goRight_Action() {
    Emitter.instance.emit("RIGHT_ACTION");
  },
  goJump_Action() {
    Emitter.instance.emit("JUMP_ACTION");
  },
  resetPos_Action() {
    Emitter.instance.emit("RESET_ACTION");
  },

  goAttack_Tween() {
    Emitter.instance.emit("ATTACK_TWEEN");
  },
  goLeft_Tween() {
    Emitter.instance.emit("LEFT_TWEEN");
  },
  goRight_Tween() {
    Emitter.instance.emit("RIGHT_TWEEN");
  },
  goJump_Tween() {
    Emitter.instance.emit("JUMP_TWEEN");
  },
  resetPos_Tween() {
    Emitter.instance.emit("RESET_TWEEN");
  },
  disableBtn(value) {
    this.attackBtn_Action.interactable = value;
    this.leftBtn_Action.interactable = value;
    this.rightBtn_Action.interactable = value;
    this.jumpBtn_Action.interactable = value;
    this.attackBtn_Tween.interactable = value;
    this.leftBtn_Tween.interactable = value;
    this.rightBtn_Tween.interactable = value;
    this.jumpBtn_Tween.interactable = value;
  },
});
