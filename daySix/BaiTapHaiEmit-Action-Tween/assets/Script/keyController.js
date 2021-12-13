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
      case cc.macro.KEY.space:
        this.goAttack_Action();
        break;
      case cc.macro.KEY.left:
        this.goLeft_Action();
        break;
      case cc.macro.KEY.right:
        this.goRight_Action();
        break;
      case cc.macro.KEY.up:
        this.goJump_Action();
        break;
      case cc.macro.KEY.down:
        this.resetPos_Action();
        break;

      case cc.macro.KEY.e:
        this.goAttack_Tween();
        break;
      case cc.macro.KEY.a:
        this.goLeft_Tween();
        break;
      case cc.macro.KEY.d:
        this.goRight_Tween();
        break;
      case cc.macro.KEY.w:
        this.goJump_Tween();
        break;
      case cc.macro.KEY.s:
        this.resetPos_Tween();
        break;
    }
  },
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
  disableKey(value) {
    this.keyMove = value;
  },
});
