const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,
  properties: {
    goLeftFlag: false,
    goRightFlag: false,
    goJumpFlag: false,
    counter: 0,
    frames: 40,
    limitX: 377,
    mainItem: cc.Node,
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goRight.bind(this));
    Emitter.instance.registerEvent("JUMP", this.goJump.bind(this));
    Emitter.instance.registerEvent("RESET", this.resetPos.bind(this));
  },
  start() {},
  update(dt) {
    this.checkMove();
    this.limitPos();
  },
  checkMove() {
    if (this.goLeftFlag || this.goRightFlag || this.goJumpFlag) {
      if (this.counter >= this.frames) {
        this.disableButton(true);
        this.disableKey(true);
        this.resetMove();
        return;
      }
      // if (this.goLeftFlag)
      //   if (this.goRightFlag)
      //     if (this.goJumpFlag) {
      //       if (this.counter < this.frames / 2) {
      //         this.mainItem.y += 5;
      //       } else this.mainItem.y -= 5;

      //       if (this.counter >= this.frames / 4 && this.counter < this.frames) {
      //         this.mainItem.angle += 360 / ((this.frames * 3) / 4);
      //       }
      //     }
      this.disableButton(false);
      this.disableKey(false);
      this.counter++;
    }
  },
  goLeft() {
    this.goLeftFlag = true;
    this.counter = 0;
    let goLeft = cc.moveBy(0.5, -80, 0);
    this.mainItem.runAction(goLeft);
  },
  goRight() {
    this.goRightFlag = true;
    this.counter = 0;
    let goRight = cc.moveBy(0.5, +80, 0);
    this.mainItem.runAction(goRight);
  },
  goJump() {
    this.goJumpFlag = true;
    this.counter = 0;
  },
  resetPos() {
    this.mainItem.x = 0;
    this.mainItem.y = -150;
    this.mainItem.scaleX = 1;
    this.mainItem.angle = 0;
  },
  resetMove() {
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
