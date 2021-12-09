"use strict";
cc._RF.push(module, '9dffegMTbdFA7rfltJFTQ5S', 'mainController');
// Script/mainController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,
  properties: {
    canMove: true,
    goLeftFlag: false,
    goRightFlag: false,
    goJumpFlag: false,
    counter: 0,
    frames: 40,
    limitX: 377,
    mainItem: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goRight.bind(this));
    Emitter.instance.registerEvent("JUMP", this.goJump.bind(this));
    Emitter.instance.registerEvent("RESET", this.resetPos.bind(this));
  },
  start: function start() {},
  update: function update(dt) {
    this.checkMove();
    this.limitPos();
  },
  checkMove: function checkMove() {
    if (this.goLeftFlag || this.goRightFlag || this.goJumpFlag) {
      if (this.counter >= this.frames) {
        this.disableButton(true);
        this.resetMove();
        return;
      }
      if (this.goLeftFlag) {
        this.mainItem.x -= 2;
        this.mainItem.scaleX = 1;
      }
      if (this.goRightFlag) {
        this.mainItem.x += 2;
        this.mainItem.scaleX = -1;
      }
      if (this.goJumpFlag) {
        if (this.counter < this.frames / 2) {
          this.mainItem.y += 5;
        } else this.mainItem.y -= 5;

        if (this.counter >= this.frames / 4 && this.counter < this.frames) {
          this.mainItem.angle += 360 / (this.frames * 3 / 4);
        }
      }
      this.disableButton(false);
      this.counter++;
    }
  },
  goLeft: function goLeft() {
    this.goLeftFlag = true;
    this.counter = 0;
  },
  goRight: function goRight() {
    this.goRightFlag = true;
    this.counter = 0;
  },
  goJump: function goJump() {
    this.goJumpFlag = true;
    this.counter = 0;
  },
  resetPos: function resetPos() {
    this.mainItem.x = 0;
    this.mainItem.y = -150;
    this.mainItem.scaleX = 1;
    this.mainItem.angle = 0;
  },
  resetMove: function resetMove() {
    this.goLeftFlag = false;
    this.goRightFlag = false;
    this.goJumpFlag = false;
  },
  disableButton: function disableButton(value) {
    Emitter.instance.emit("DISABLE", value);
  },
  limitPos: function limitPos() {
    if (this.mainItem.x <= -this.limitX) {
      this.mainItem.x = -this.limitX;
    } else if (this.mainItem.x >= this.limitX) {
      this.mainItem.x = this.limitX;
    }
  }
});

cc._RF.pop();