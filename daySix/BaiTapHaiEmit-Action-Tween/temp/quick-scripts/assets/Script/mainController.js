(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/mainController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9dffegMTbdFA7rfltJFTQ5S', 'mainController', __filename);
// Script/mainController.js

"use strict";

var Emitter = require("mEmitter");
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
    attackSound: cc.AudioSource
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("ATTACK_ACTION", this.goAttack_Action.bind(this));
    Emitter.instance.registerEvent("LEFT_ACTION", this.goLeft_Action.bind(this));
    Emitter.instance.registerEvent("RIGHT_ACTION", this.goRight_Action.bind(this));
    Emitter.instance.registerEvent("JUMP_ACTION", this.goJump_Action.bind(this));
    Emitter.instance.registerEvent("RESET_ACTION", this.resetPos_Action.bind(this));

    Emitter.instance.registerEvent("ATTACK_TWEEN", this.goAttack_Tween.bind(this));
    Emitter.instance.registerEvent("LEFT_TWEEN", this.goLeft_Tween.bind(this));
    Emitter.instance.registerEvent("RIGHT_TWEEN", this.goRight_Tween.bind(this));
    Emitter.instance.registerEvent("JUMP_TWEEN", this.goJump_Tween.bind(this));
    Emitter.instance.registerEvent("RESET_TWEEN", this.resetPos_Tween.bind(this));
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
    if (this.goAttackFlag || this.goLeftFlag || this.goRightFlag || this.goJumpFlag) {
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
  goAttack_Action: function goAttack_Action() {
    this.goAttackFlag = true;
    this.counter = 0;
    this.mainItemSkeleton.setAnimation(0, "shoot", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
    this.attackSound.play();
  },
  goLeft_Action: function goLeft_Action() {
    this.goLeftFlag = true;
    this.counter = 0;
    var goLeft = cc.spawn(cc.moveBy(0.5, -80, 0), cc.scaleTo(0, -0.3, 0.3));
    this.mainItem.runAction(goLeft);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goRight_Action: function goRight_Action() {
    this.goRightFlag = true;
    this.counter = 0;
    var goRight = cc.spawn(cc.moveBy(0.5, +80, 0), cc.scaleTo(0, 0.3, 0.3));
    this.mainItem.runAction(goRight);
    this.mainItemSkeleton.setAnimation(0, "walk", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goJump_Action: function goJump_Action() {
    var _this2 = this;

    this.goJumpFlag = true;
    this.counter = 0;
    if (this.mainItem.scaleX == -0.3) {
      this.currentDirection = -80;
    } else this.currentDirection = +80;
    var goJump = cc.sequence(cc.callFunc(function () {
      _this2.mainItemSkeleton.setAnimation(0, "jump", false);
      _this2.mainItemSkeleton.addAnimation(0, "idle", false);
    }), cc.moveBy(0.4, 0, +120), cc.moveBy(0.4, this.currentDirection, 0), cc.moveBy(0.4, 0, -120));
    goJump.easing(cc.easeExponentialIn(3.0));
    this.mainItem.runAction(goJump);
  },
  resetPos_Action: function resetPos_Action() {
    var resetPos = cc.spawn(cc.moveTo(0, 0, -200), cc.scaleTo(0, 0.3, 0.3), cc.rotateTo(0, 0));
    this.mainItem.runAction(resetPos);

    this.mainItemSkeleton.setAnimation(0, "idle", false);
  },
  goAttack_Tween: function goAttack_Tween() {
    this.goAttackFlag = true;
    this.counter = 0;
    this.mainItemSkeleton.setAnimation(0, "shoot", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
    this.attackSound.play();
  },
  goLeft_Tween: function goLeft_Tween() {
    this.goLeftFlag = true;
    this.counter = 0;
    cc.tween(this.mainItem).to(0, { scaleX: -0.3 }).by(0.5, { position: cc.v2(-80, 0) }).start();
    this.mainItemSkeleton.setAnimation(0, "run", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goRight_Tween: function goRight_Tween() {
    this.goRightFlag = true;
    this.counter = 0;
    cc.tween(this.mainItem).to(0, { scaleX: +0.3 }).by(0.5, { position: cc.v2(+80, 0) }).start();
    this.mainItemSkeleton.setAnimation(0, "run", false);
    this.mainItemSkeleton.addAnimation(0, "idle", false);
  },
  goJump_Tween: function goJump_Tween() {
    var _this3 = this;

    this.goJumpFlag = true;
    this.counter = 0;
    if (this.mainItem.scaleX == -0.3) {
      this.currentDirection = -120;
    } else this.currentDirection = +120;
    cc.tween(this.mainItem).call(function () {
      _this3.mainItemSkeleton.setAnimation(0, "jump", false);
      _this3.mainItemSkeleton.addAnimation(0, "idle", false);
    }).by(0.4, { position: cc.v2(0, +80) }).by(0.4, { position: cc.v2(this.currentDirection, 0) }).by(0.4, { position: cc.v2(0, -80) }).start();
  },
  resetPos_Tween: function resetPos_Tween() {
    cc.tween(this.mainItem).to(0, {
      position: cc.v2(0, -200),
      scale: 0.3,
      angle: 0
    }).start();
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=mainController.js.map
        