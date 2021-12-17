const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    musicBtn: cc.Button,
    effectBtn: cc.Button,
    newGameBtn: cc.Button,
    quitBtn: cc.Button,
    backgroundSound: cc.AudioSource,
    effectSound: cc.AudioSource,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.musicBtn.node.on("click", this.backgroundSoundEvent, this);
    this.effectBtn.node.on("click", this.effectSoundEvent, this);
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
  backgroundSoundEvent() {
    this.backgroundSound.isPlaying ? this.backgroundSound.pause() : this.backgroundSound.play();
  },
  effectSoundEvent() {
    this.effectSound.mute == false ? (this.effectSound.mute = true) : (this.effectSound.mute = false);
  },
  newGameEvent() {
    Emitter.instance.emit("NEW GAME");
  },
  quitEvent() {
    cc.game.end();
  },
});
