const Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,

  properties: {
    canMove: false,
    canJump: false,
    objectSb: sp.Skeleton,
    mainCharacter: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    let manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
    // let move = cc.moveBy(100, 10000, 0);
    // this.node.runAction(move);
    Emitter.instance = new Emitter();

    Emitter.instance.registerEvent(
      "ATTACK_ACTION",
      this.goAttack_Action.bind(this)
    );
    Emitter.instance.registerEvent(
      "LEFT_ACTION",
      this.goLeft_Action.bind(this)
    );
    Emitter.instance.registerEvent(
      "RIGHT_ACTION",
      this.goRight_Action.bind(this)
    );
    Emitter.instance.registerEvent(
      "JUMP_ACTION",
      this.goJump_Action.bind(this)
    );
    Emitter.instance.registerEvent(
      "RESET_ACTION",
      this.resetPos_Action.bind(this)
    );
  },

  start() {},

  update(dt) {
    // this.node.x += dt * 100;
    if (this.node.y <= 270) {
      this.node.y = 170;
    }
  },
  goAttack_Action() {
    this.objectSb.setAnimation(0, "shoot", false);
    this.objectSb.addAnimation(0, "run", false);
    this.objectSb.addAnimation(0, "run", false);
    // this.attackSound.play();
  },
  goLeft_Action() {
    let goLeft = cc.spawn(cc.moveBy(0.5, -80, 0), cc.scaleTo(0, -0.4, 0.4));
    this.mainCharacter.runAction(goLeft);
    this.objectSb.setAnimation(0, "run", false);
    this.objectSb.addAnimation(0, "idle", false);
  },
  goRight_Action() {
    let goRight = cc.spawn(cc.moveBy(0.5, +80, 0), cc.scaleTo(0, 0.4, 0.4));
    this.mainCharacter.runAction(goRight);
    this.objectSb.setAnimation(0, "run", false);
    this.objectSb.addAnimation(0, "idle", false);
  },
  goJump_Action() {
    if (this.mainCharacter.scaleX == -0.4) {
      this.currentDirection = -80;
    } else this.currentDirection = +80;
    let goJump = cc.sequence(
      cc.callFunc(() => {
        this.objectSb.setAnimation(0, "jump", false);
        this.objectSb.addAnimation(0, "idle", false);
      }),
      cc.moveBy(0.4, 0, +120),
      cc.moveBy(0.4, this.currentDirection, 0),
      cc.moveBy(0.4, 0, -120)
    );
    goJump.easing(cc.easeExponentialIn(3.0));
    this.mainCharacter.runAction(goJump);
  },
  resetPos_Action() {
    let resetPos = cc.spawn(
      cc.moveTo(0, -700, 170),
      cc.scaleTo(0, 0.4, 0.4),
      cc.rotateTo(0, 0)
    );
    this.mainCharacter.runAction(resetPos);

    this.objectSb.setAnimation(0, "idle", false);
  },
  goShoot() {
    // let stop = cc.moveBy(0.5, 0, 0);
    // let stop = cc.sequence(
    //   cc.delayTime(0.5),
    //   cc.callFunc(() => {
    //     this.objectSb.setAnimation(0, "shoot", false);
    //   })
    // );
    // this.node.runAction(stop);
    cc.log("shoot");
    this.objectSb.setAnimation(0, "shoot", false);
    this.objectSb.addAnimation(0, "run", false);
    this.objectSb.addAnimation(0, "run", false);
  },
  goJump() {
    let sequence = cc.sequence(
      cc.moveBy(0.5, cc.v2(120, 150)),
      cc.moveBy(0.5, cc.v2(0, -150))
    );
    this.node.runAction(sequence);

    this.objectSb.setAnimation(0, "jump", false);
  },
  onCollisionEnter(other, self) {
    console.log("on collision enter");
    if (self.tag === 0) this.goJump();
    if (other.tag === 0) this.goAttack_Action();
  },

  onCollisionStay(other, self) {
    console.log("on collision stay");
  },
  onCollisionExit(other, self) {
    console.log("on collision exit");
    this.objectSb.setAnimation(0, "run", true);
  },
});
