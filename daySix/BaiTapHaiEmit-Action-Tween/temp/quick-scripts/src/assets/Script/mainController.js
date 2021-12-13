"use strict";
cc._RF.push(module, '9dffegMTbdFA7rfltJFTQ5S', 'mainController');
// Script/mainController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  "extends": cc.Component,
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
    attackSound: cc.AudioSource
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("ATTACK", this.goAttack.bind(this));
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goRight.bind(this));
    Emitter.instance.registerEvent("JUMP", this.goJump.bind(this));
    Emitter.instance.registerEvent("RESET", this.resetPos.bind(this));
    this.mainItemSkeleton.setEventListener(function (entry, event) {
      var data = event.data;
      cc.log(data.name);

      if (data.name = "footstep") {
        _this.footstepSound.play();
      }
    });
  },
  start: function start() {},
  update: function update(dt) {
    this.checkMove();
    this.limitPos();
  },
  checkMove: function checkMove() {
    if (this.goAttack || this.goLeftFlag || this.goRightFlag || this.goJumpFlag) {
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
  goAttack: function goAttack() {
    this.goAttackFlag = true;
    this.counter = 0;
    this.mainItemSkeleton.setAnimation(0, "shoot", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
    this.attackSound.play();
  },
  goLeft: function goLeft() {
    this.goLeftFlag = true;
    this.counter = 0;
    var goLeft = cc.spawn(cc.moveBy(0.5, -80, 0), cc.scaleTo(0, -0.3, 0.3));
    this.mainItem.runAction(goLeft);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goRight: function goRight() {
    this.goRightFlag = true;
    this.counter = 0;
    var goRight = cc.spawn(cc.moveBy(0.5, +80, 0), cc.scaleTo(0, 0.3, 0.3));
    this.mainItem.runAction(goRight);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goJump: function goJump() {
    var _this2 = this;

    this.goJumpFlag = true;
    this.counter = 0;
    var goJump = cc.sequence(cc.callFunc(function () {
      _this2.mainItemSkeleton.setAnimation(0, "jump", false);

      _this2.mainItemSkeleton.addAnimation(0, "idle", false);
    }), cc.moveBy(0.5, 0, +120), cc.moveBy(0.5, 0, -120));
    this.mainItem.runAction(goJump);
  },
  resetPos: function resetPos() {
    var resetPos = cc.spawn(cc.moveTo(0, 0, -200), cc.scaleTo(0, 0.3, 0.3), cc.rotateTo(0, 0));
    this.mainItem.runAction(resetPos);
    this.mainItemSkeleton.setAnimation(0, "idle", false);
  },
  resetMove: function resetMove() {
    this.goAttackFlag = false;
    this.goLeftFlag = false;
    this.goRightFlag = false;
    this.goJumpFlag = false;
  },
  disableButton: function disableButton(value) {
    Emitter.instance.emit("DISABLE BUTTON", value);
  },
  disableKey: function disableKey(value) {
    Emitter.instance.emit("DISABLE KEY", value);
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