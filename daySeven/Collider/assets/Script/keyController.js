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
});
