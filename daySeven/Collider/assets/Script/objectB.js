const Emitter = require("mEmitter");

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
    footstepSound: cc.AudioSource,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.mainCharacterSp.addAnimation(0, "run", true);

    let manager = cc.director.getCollisionManager();
    manager.enabled = true;
    // manager.enabledDebugDraw = true;
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
    this.mainCharacterSp.setEventListener((entry, event) => {
      const { data } = event;
      if ((data.name = "footstep")) {
        this.footstepSound.play();
      }
    });
  },

  start() {},

  update(dt) {
    if (this.node.y <= 270) {
      this.node.y = 170;
    }
  },
  goAttack_Action() {
    cc.log("shoot");
    this.mainCharacterSp.setAnimation(0, "shoot", false);
    this.attackSound.play();
    let newBullet = cc.instantiate(this.bulletPrefab);
    this.mainBackground.addChild(newBullet);
    newBullet.position = this.mainCharacter.getPosition();
    newBullet.y += 50;
    if (this.mainCharacter.scaleX > 0) {
      newBullet.scaleX = 0.12;
      newBullet.x += 75;
      let fireBullet = cc.moveBy(5, 3000, 0);
      newBullet.runAction(fireBullet);
    } else {
      newBullet.x -= 75;
      newBullet.scaleX = -0.12;
      let fireBullet = cc.moveBy(5, -3000, 0);
      newBullet.runAction(fireBullet);
    }
    this.mainCharacterSp.addAnimation(0, "idle", true);
  },
  goLeft_Action() {
    let goLeft = cc.spawn(cc.moveBy(0.5, -150, 0), cc.scaleTo(0, -0.4, 0.4));
    this.mainCharacter.runAction(goLeft);
    this.mainCharacterSp.setAnimation(0, "run", true);
  },
  goRight_Action() {
    let goRight = cc.spawn(cc.moveBy(0.5, +150, 0), cc.scaleTo(0, 0.4, 0.4));
    this.mainCharacter.runAction(goRight);
    this.mainCharacterSp.setAnimation(0, "run", true);
  },
  goJump_Action() {
    if (this.mainCharacter.scaleX == -0.4) {
      this.currentDirection = -250;
    } else this.currentDirection = +250;
    let goJump = cc.spawn(
      cc.callFunc(() => {
        this.mainCharacterSp.setAnimation(0, "jump", false);
      }),
      cc.moveBy(1, this.currentDirection, +150),
      cc.moveBy(1.5, 0, -150),
      cc.callFunc(() => {
        this.mainCharacterSp.addAnimation(0, "idle", false);
      })
    );
    this.mainCharacter.runAction(goJump);
  },

  resetPos_Action() {
    let resetPos = cc.spawn(
      cc.moveTo(0, -700, 170),
      cc.scaleTo(0, 0.4, 0.4),
      cc.rotateTo(0, 0)
    );
    this.mainCharacter.runAction(resetPos);

    this.mainCharacterSp.setAnimation(0, "idle", false);
  },
  onCollisionEnter(other, self) {
    console.log("on collision enter");
    if (self.tag === 0) this.goJump_Action();
    if (other.tag === 0) this.goAttack_Action();
  },

  onCollisionStay(other, self) {
    console.log("on collision stay");
  },
  onCollisionExit(other, self) {
    console.log("on collision exit");
    this.mainCharacterSp.setAnimation(0, "idle", false);
  },
});
