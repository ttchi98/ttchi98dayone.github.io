cc.Class({
  extends: cc.Component,

  properties: {
    canMove: true,
    goLeft: false,
    goRight: false,
    jumpAngle: false,
    count: 0,
    frames: 40,
    limit: 375,
    leftButton: cc.Button,
    rightButton: cc.Button,
    jumpButton: cc.Button,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {},

  start() {},

  moveLeft() {
    this.goLeft = true;
    this.count = 0;
  },
  moveRight() {
    this.goRight = true;
    this.count = 0;
  },
  jumpAndAngle() {
    this.jumpAngle = true;
    this.count = 0;
  },
  reset() {
    this.node.x = 0;
    this.node.y = -75;
    this.node.scaleX = 0.5;
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
        this.node.x -= 2;
        this.node.scaleX = 0.5;
      }
      if (this.goRight) {
        this.node.x += 2;
        this.node.scaleX = -0.5;
      }
      if (this.jumpAngle) {
        if (this.count < this.frames / 2) {
          this.node.y += 5;
        } else this.node.y -= 5;

        if (this.count >= this.frames / 4 && this.count < this.frames) {
          this.node.angle += 360 / ((this.frames * 3) / 4);
        }
      }
      this.resetButton(false);
      this.count++;
    }
    if (this.node.x <= -this.limit) {
      this.node.x = -this.limit;
    } else if (this.node.x >= this.limit) {
      this.node.x = this.limit;
    }
  },
});
