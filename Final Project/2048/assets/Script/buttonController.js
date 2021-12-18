const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    tutorialBtn: cc.Button,
    musicOnBtn: cc.Button,
    musicOffBtn: cc.Button,
    effectOnBtn: cc.Button,
    effectOffBtn: cc.Button,
    closeBtn: cc.Button,
    newGameBtn: cc.Button,
    quitBtn: cc.Button,
    effectOnNode: cc.Node,
    effectOffNode: cc.Node,
    musicOnNode: cc.Node,
    musicOffNode: cc.Node,
    backgroundSound: cc.AudioSource,
    effectSound: cc.AudioSource,
    clickSound: cc.AudioSource,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.tutorialBtn.node.on("click", this.tutorialEvent, this);
    this.closeBtn.node.on("click", this.closeTutorialEvent, this);
    this.musicOnBtn.node.on("click", this.musicOnEvent, this);
    this.musicOffBtn.node.on("click", this.musicOffEvent, this);
    this.effectOnBtn.node.on("click", this.effectOnSoundEvent, this);
    this.effectOffBtn.node.on("click", this.effectOffSoundEvent, this);
    this.newGameBtn.node.on("click", this.newGameEvent, this);
    this.quitBtn.node.on("click", this.quitEvent, this);
    // this.backgroundSound.play();
    Emitter.instance.registerEvent("MOVE SOUND", this.moveSound.bind(this));
  },

  start() {},

  update(dt) {},
  moveSound() {
    this.effectSound.play();
  },
  tutorialEvent() {
    Emitter.instance.emit("TUTORIAL");
    this.clickSound.play();
  },
  closeTutorialEvent() {
    Emitter.instance.emit("CLOSE TUTORIAL");
    this.clickSound.play();
  },
  musicOnEvent() {
    this.musicOnNode.active = false;
    this.musicOffNode.active = true;
    this.backgroundSound.pause();
    this.clickSound.play();

    // this.backgroundSound.isPlaying ? this.backgroundSound.pause() : this.backgroundSound.play();
  },
  musicOffEvent() {
    this.musicOnNode.active = true;
    this.musicOffNode.active = false;
    this.backgroundSound.play();
    this.clickSound.play();
  },
  effectOnSoundEvent() {
    this.effectOnNode.active = false;
    this.effectOffNode.active = true;
    this.effectSound.mute = true;
    this.clickSound.play();

    // this.effectSound.mute == false ? (this.effectSound.mute = true) : this.effectSound.mute = false)
  },
  effectOffSoundEvent() {
    this.effectOnNode.active = true;
    this.effectOffNode.active = false;
    this.effectSound.mute = false;
    this.clickSound.play();
  },
  newGameEvent() {
    Emitter.instance.emit("NEW GAME");
    this.clickSound.play();
  },
  quitEvent() {
    cc.game.end();
    this.clickSound.play();
  },
});
