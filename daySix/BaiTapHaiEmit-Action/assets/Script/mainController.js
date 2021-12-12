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
    mainItem: cc.Node,
    mainItemSkeleton: sp.Skeleton,
    footstepSound: cc.AudioSource,
    attackSound: cc.AudioSource,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("ATTACK", this.goAttack.bind(this));
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goRight.bind(this));
    Emitter.instance.registerEvent("JUMP", this.goJump.bind(this));
    Emitter.instance.registerEvent("RESET", this.resetPos.bind(this));

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
      this.goAttack ||
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
  goAttack() {
    this.goAttackFlag = true;
    this.counter = 0;
    this.mainItemSkeleton.setAnimation(0, "shoot", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
    this.attackSound.play();
  },
  goLeft() {
    this.goLeftFlag = true;
    this.counter = 0;
    let goLeft = cc.spawn(cc.moveBy(0.5, -80, 0), cc.scaleTo(0, -0.3, 0.3));
    this.mainItem.runAction(goLeft);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goRight() {
    this.goRightFlag = true;
    this.counter = 0;
    let goRight = cc.spawn(cc.moveBy(0.5, +80, 0), cc.scaleTo(0, 0.3, 0.3));
    this.mainItem.runAction(goRight);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goJump() {
    this.goJumpFlag = true;
    this.counter = 0;

    let goJump = cc.sequence(
      cc.callFunc(() => {
        this.mainItemSkeleton.setAnimation(0, "jump", false);
        this.mainItemSkeleton.addAnimation(0, "idle", false);
      }),
      cc.moveBy(0.5, 0, +120),
      cc.moveBy(0.5, 0, -120)
    );
    this.mainItem.runAction(goJump);
  },
  resetPos() {
    let resetPos = cc.spawn(
      cc.moveTo(0, 0, -200),
      cc.scaleTo(0, 0.3, 0.3),
      cc.rotateTo(0, 0)
    );
    this.mainItem.runAction(resetPos);

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
