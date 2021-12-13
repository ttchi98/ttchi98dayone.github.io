const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,
  properties: {
    goAttackFlag: false,
    goLeftFlag: false,
    goRightFlag: false,
    goJumpFlag: false,
    counter: 0,
    frames: 40,
    limitX: 377,
    currentDirection: null,
    mainItem: cc.Node,
    mainItemSkeleton: sp.Skeleton,
    footstepSound: cc.AudioSource,
    attackSound: cc.AudioSource,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
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

    Emitter.instance.registerEvent(
      "ATTACK_TWEEN",
      this.goAttack_Tween.bind(this)
    );
    Emitter.instance.registerEvent("LEFT_TWEEN", this.goLeft_Tween.bind(this));
    Emitter.instance.registerEvent(
      "RIGHT_TWEEN",
      this.goRight_Tween.bind(this)
    );
    Emitter.instance.registerEvent("JUMP_TWEEN", this.goJump_Tween.bind(this));
    Emitter.instance.registerEvent(
      "RESET_TWEEN",
      this.resetPos_Tween.bind(this)
    );
    this.mainItemSkeleton.setEventListener((entry, event) => {
      const { data } = event;
      cc.log(data.name);
      if ((data.name = "footstep")) {
        this.footstepSound.play();
      }
    });
  },
  start() {},
  update(dt) {
    this.checkMove();
    this.limitPos();
  },
  checkMove() {
    if (
      this.goAttackFlag ||
      this.goLeftFlag ||
      this.goRightFlag ||
      this.goJumpFlag
    ) {
      if (this.counter >= this.frames) {
        this.disableButton(true);
        this.disableKey(true);
        this.resetMove();
        return;
      }
      this.disableButton(false);
      this.disableKey(false);
      this.counter++;
    }
  },

  goAttack_Action() {
    this.goAttackFlag = true;
    this.counter = 0;
    this.mainItemSkeleton.setAnimation(0, "shoot", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
    this.attackSound.play();
  },
  goLeft_Action() {
    this.goLeftFlag = true;
    this.counter = 0;
    let goLeft = cc.spawn(cc.moveBy(0.5, -80, 0), cc.scaleTo(0, -0.3, 0.3));
    this.mainItem.runAction(goLeft);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goRight_Action() {
    this.goRightFlag = true;
    this.counter = 0;
    let goRight = cc.spawn(cc.moveBy(0.5, +80, 0), cc.scaleTo(0, 0.3, 0.3));
    this.mainItem.runAction(goRight);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goJump_Action() {
    this.goJumpFlag = true;
    this.counter = 0;
    if (this.mainItem.scaleX == -0.3) {
      this.currentDirection = -80;
    } else this.currentDirection = +80;
    let goJump = cc.sequence(
      cc.callFunc(() => {
        this.mainItemSkeleton.setAnimation(0, "jump", false);
        this.mainItemSkeleton.addAnimation(0, "idle", false);
      }),
      cc.moveBy(0.4, 0, +120),
      cc.moveBy(0.4, this.currentDirection, 0),
      cc.moveBy(0.4, 0, -120)
    );
    goJump.easing(cc.easeExponentialIn(3.0));
    this.mainItem.runAction(goJump);
  },
  resetPos_Action() {
    let resetPos = cc.spawn(
      cc.moveTo(0, 0, -200),
      cc.scaleTo(0, 0.3, 0.3),
      cc.rotateTo(0, 0)
    );
    this.mainItem.runAction(resetPos);

    this.mainItemSkeleton.setAnimation(0, "idle", false);
  },
  goAttack_Tween() {
    this.goAttackFlag = true;
    this.counter = 0;
    this.mainItemSkeleton.setAnimation(0, "shoot", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
    this.attackSound.play();
  },
  goLeft_Tween() {
    this.goLeftFlag = true;
    this.counter = 0;
    cc.tween(this.mainItem)
      .to(0, { scaleX: -0.3 })
      .by(0.5, { position: cc.v2(-80, 0) })
      .start();
    this.mainItemSkeleton.setAnimation(0, "run", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goRight_Tween() {
    this.goRightFlag = true;
    this.counter = 0;
    cc.tween(this.mainItem)
      .to(0, { scaleX: +0.3 })
      .by(0.5, { position: cc.v2(+80, 0) })
      .start();
    this.mainItemSkeleton.setAnimation(0, "run", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goJump_Tween() {
    this.goJumpFlag = true;
    this.counter = 0;
    if (this.mainItem.scaleX == -0.3) {
      this.currentDirection = -120;
    } else this.currentDirection = +120;
    cc.tween(this.mainItem)
      .call(() => {
        this.mainItemSkeleton.setAnimation(0, "jump", false);
        this.mainItemSkeleton.addAnimation(0, "idle", false);
      })
      .by(0.4, { position: cc.v2(0, +80) })
      .by(0.4, { position: cc.v2(this.currentDirection, 0) })
      .by(0.4, { position: cc.v2(0, -80) })
      .start();
  },
  resetPos_Tween() {
    cc.tween(this.mainItem)
      .to(0, {
        position: cc.v2(0, -200),
        scale: 0.3,
        angle: 0,
      })
      .start();
    this.mainItemSkeleton.setAnimation(0, "idle", false);
  },

  resetMove() {
    this.goAttackFlag = false;
    this.goLeftFlag = false;
    this.goRightFlag = false;
    this.goJumpFlag = false;
  },
  disableButton(value) {
    Emitter.instance.emit("DISABLE BUTTON", value);
  },
  disableKey(value) {
    Emitter.instance.emit("DISABLE KEY", value);
  },
  limitPos() {
    if (this.mainItem.x <= -this.limitX) {
      this.mainItem.x = -this.limitX;
    } else if (this.mainItem.x >= this.limitX) {
      this.mainItem.x = this.limitX;
    }
  },
});
