cc.Class({
  extends: cc.Component,

  properties: {
    canMove: true,
    goLeft: false,
    goRight: false,
    jumpAngle: false,
    moveStep: 2,
    count: 0,
    frames: 40,
    leftButton: cc.Button,
    rightButton: cc.Button,
    jumpButton: cc.Button,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {},

  start() {},

  moveLeft() {
    this.goLeft = true;
    this.goRight = false;
    this.jumpAngle = false;
    this.count = 0;
  },
  moveRight() {
    this.goLeft = false;
    this.goRight = true;
    this.jumpAngle = false;
    this.count = 0;
  },
  jumpAndAngle() {
    this.goLeft = false;
    this.goRight = false;
    this.jumpAngle = true;
    this.count = 0;
  },
  reset() {
    this.node.x = 0;
    this.node.y = -75;
    this.node.scaleX = 0.75;
    this.node.angle = 0;
  },
  resetButton(value) {
    this.leftButton.interactable = value;
    this.rightButton.interactable = value;
    this.jumpButton.interactable = value;
  },
  resetMove() {
    this.goLeft = false;
    this.goRight = false;
    this.jumpAngle = false;
  },

  update(dt) {
    if (this.goLeft || this.goRight || this.jumpAngle) {
      if (this.count >= this.frames) {
        this.resetButton(true);
        this.resetMove();
        return;
      }

      if (this.goLeft) {
        this.node.x -= this.moveStep;
        this.node.scaleX = 0.75;
        this.resetButton(false);
        cc.log("goLeft");
      }
      if (this.goRight) {
        this.node.x += this.moveStep;
        this.node.scaleX = -0.75;
        this.resetButton(false);
        cc.log("goRight");
      }
      if (this.jumpAngle) {
        this.node.y += this.moveStep;
        this.node.angle += 360 / this.frames;
        this.resetButton(false);
        // setTimeout(() => {
        //   this.node.y -= this.moveStep;
        // }, 1000);
        cc.log("jump");
      } else !this.jumpAngle;
      this.node.y -= this.moveStep;

      this.count++;
    }
    if (this.node.x <= -350) {
      this.node.x = -350;
    } else if (this.node.x >= 350) {
      this.node.x = 350;
    }
  },
});
