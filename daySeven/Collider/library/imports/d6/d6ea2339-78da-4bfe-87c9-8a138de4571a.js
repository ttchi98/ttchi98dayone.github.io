"use strict";
cc._RF.push(module, 'd6ea2M5eNpL/ofJihON5Fca', 'objectB');
// Script/objectB.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,

  properties: {
    timer: 0,
    canMove: false,
    canJump: false,
    currentDirection: null,
    mainCharacterSp: sp.Skeleton,
    mainCharacter: cc.Node,
    mainBackground: cc.Node,
    bulletPrefab: cc.Prefab,
    attackSound: cc.AudioSource,
    footstepSound: cc.AudioSource
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    var _this = this;

    this.mainCharacterSp.addAnimation(0, "run", true);

    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    // manager.enabledDebugDraw = true;
    Emitter.instance = new Emitter();

    Emitter.instance.registerEvent("ATTACK_ACTION", this.goAttack_Action.bind(this));
    Emitter.instance.registerEvent("LEFT_ACTION", this.goLeft_Action.bind(this));
    Emitter.instance.registerEvent("RIGHT_ACTION", this.goRight_Action.bind(this));
    Emitter.instance.registerEvent("JUMP_ACTION", this.goJump_Action.bind(this));
    Emitter.instance.registerEvent("RESET_ACTION", this.resetPos_Action.bind(this));
    this.mainCharacterSp.setEventListener(function (entry, event) {
      var data = event.data;

      if (data.name = "footstep") {
        _this.footstepSound.play();
      }
    });
  },
  start: function start() {},
  update: function update(dt) {
    if (this.node.y <= 270) {
      this.node.y = 170;
    }
  },
  goAttack_Action: function goAttack_Action() {
    cc.log("shoot");
    this.mainCharacterSp.setAnimation(0, "shoot", false);
    this.attackSound.play();
    var newBullet = cc.instantiate(this.bulletPrefab);
    this.mainBackground.addChild(newBullet);
    newBullet.position = this.mainCharacter.getPosition();
    newBullet.y += 50;
    if (this.mainCharacter.scaleX > 0) {
      newBullet.scaleX = 0.12;
      newBullet.x += 75;
      var fireBullet = cc.moveBy(5, 3000, 0);
      newBullet.runAction(fireBullet);
    } else {
      newBullet.x -= 75;
      newBullet.scaleX = -0.12;
      var _fireBullet = cc.moveBy(5, -3000, 0);
      newBullet.runAction(_fireBullet);
    }
    this.mainCharacterSp.addAnimation(0, "idle", true);
  },
  goLeft_Action: function goLeft_Action() {
    var goLeft = cc.spawn(cc.moveBy(0.5, -150, 0), cc.scaleTo(0, -0.4, 0.4));
    this.mainCharacter.runAction(goLeft);
    this.mainCharacterSp.setAnimation(0, "run", true);
  },
  goRight_Action: function goRight_Action() {
    var goRight = cc.spawn(cc.moveBy(0.5, +150, 0), cc.scaleTo(0, 0.4, 0.4));
    this.mainCharacter.runAction(goRight);
    this.mainCharacterSp.setAnimation(0, "run", true);
  },
  goJump_Action: function goJump_Action() {
    var _this2 = this;

    if (this.mainCharacter.scaleX == -0.4) {
      this.currentDirection = -250;
    } else this.currentDirection = +250;
    var goJump = cc.spawn(cc.callFunc(function () {
      _this2.mainCharacterSp.setAnimation(0, "jump", false);
    }), cc.moveBy(1, this.currentDirection, +150), cc.moveBy(1.5, 0, -150), cc.callFunc(function () {
      _this2.mainCharacterSp.addAnimation(0, "idle", false);
    }));
    this.mainCharacter.runAction(goJump);
  },
  resetPos_Action: function resetPos_Action() {
    var resetPos = cc.spawn(cc.moveTo(0, -700, 170), cc.scaleTo(0, 0.4, 0.4), cc.rotateTo(0, 0));
    this.mainCharacter.runAction(resetPos);

    this.mainCharacterSp.setAnimation(0, "idle", false);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log("on collision enter");
    if (self.tag === 0) this.goJump_Action();
    if (other.tag === 0) this.goAttack_Action();
  },
  onCollisionStay: function onCollisionStay(other, self) {
    console.log("on collision stay");
  },
  onCollisionExit: function onCollisionExit(other, self) {
    console.log("on collision exit");
    this.mainCharacterSp.setAnimation(0, "idle", false);
  }
});

cc._RF.pop();