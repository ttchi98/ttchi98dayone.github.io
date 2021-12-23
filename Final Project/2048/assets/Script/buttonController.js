const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    startBtn: cc.Button,
    quitStartBtn: cc.Button,
    tutorialBtn: cc.Button,
    leaderBoardBtn: cc.Button,
    settingBtn: cc.Button,
    closeBtn: cc.Button,
    closeLeaderBoardBtn: cc.Button,
    closeSettingBtn: cc.Button,
    newGameBtn: cc.Button,
    backBtn: cc.Button,
    gameOverButton: cc.Button,
    musicOnNode: cc.Node,
    musicOffNode: cc.Node,
    musicOnBtn: cc.Button,
    musicOffBtn: cc.Button,
    musicSlider: cc.Slider,
    effectOnNode: cc.Node,
    effectOffNode: cc.Node,
    effectOnBtn: cc.Button,
    effectOffBtn: cc.Button,
    effectSlider: cc.Slider,
    backgroundSound: cc.AudioSource,
    effectSound: cc.AudioSource,
    clickSound: cc.AudioSource,
    matchSound: cc.AudioSource,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    //form Start
    this.startBtn.node.on("click", this.startEvent, this);
    this.quitStartBtn.node.on("click", this.quitEvent, this);
    this.musicOnBtn.node.on("click", this.musicOnEvent, this);
    this.musicOffBtn.node.on("click", this.musicOffEvent, this);
    this.musicSlider.node.on("slide", this.musicSliderEvent, this);
    this.effectOnBtn.node.on("click", this.effectOnSoundEvent, this);
    this.effectOffBtn.node.on("click", this.effectOffSoundEvent, this);
    this.effectSlider.node.on("slide", this.effectSliderEvent, this);
    this.settingBtn.node.on("click", this.settingEvent, this);
    this.closeSettingBtn.node.on("click", this.closeSettingEvent, this);

    //form Begin
    this.tutorialBtn.node.on("click", this.tutorialEvent, this);
    this.leaderBoardBtn.node.on("click", this.leaderBoardEvent, this);
    this.closeBtn.node.on("click", this.closeTutorialEvent, this);
    this.closeLeaderBoardBtn.node.on("click", this.closeLeaderBoardEvent, this);
    this.newGameBtn.node.on("click", this.newGameEvent, this);
    this.backBtn.node.on("click", this.backEvent, this);
    this.gameOverButton.node.on("click", this.playAgainEvent, this);
    Emitter.instance.registerEvent("MOVE SOUND", this.moveSound.bind(this));
    Emitter.instance.registerEvent("MATCH SOUND", this.matchSoundEvent.bind(this));
  },

  start() {},

  update(dt) {},
  moveSound() {
    this.effectSound.play();
  },
  startEvent() {
    Emitter.instance.emit("START GAME");
    this.clickSound.play();
    this.backgroundSound.play();
  },
  leaderBoardEvent() {
    Emitter.instance.emit("LEADER BOARD");
    this.clickSound.play();
  },
  closeLeaderBoardEvent() {
    Emitter.instance.emit("CLOSE LEADER BOARD");
    this.clickSound.play();
  },
  tutorialEvent() {
    Emitter.instance.emit("TUTORIAL");
    this.clickSound.play();
  },
  closeTutorialEvent() {
    Emitter.instance.emit("CLOSE TUTORIAL");
    this.clickSound.play();
  },
  musicSliderEvent() {
    this.backgroundSound.volume = this.musicSlider.progress;
  },
  musicOnEvent() {
    this.musicOnNode.active = false;
    this.musicOffNode.active = true;
    this.backgroundSound.mute = true;
    this.clickSound.play();
  },
  musicOffEvent() {
    this.musicOnNode.active = true;
    this.musicOffNode.active = false;
    this.backgroundSound.mute = false;
    this.clickSound.play();
  },
  effectSliderEvent() {
    this.effectSound.volume = this.effectSlider.progress;
    this.matchSound.volume = this.effectSlider.progress;
    this.clickSound.volume = this.effectSlider.progress;
  },
  effectOnSoundEvent() {
    this.effectOnNode.active = false;
    this.effectOffNode.active = true;
    this.effectSound.mute = true;
    this.matchSound.mute = true;
    this.clickSound.mute = true;
    this.clickSound.play();
  },
  effectOffSoundEvent() {
    this.effectOnNode.active = true;
    this.effectOffNode.active = false;
    this.effectSound.mute = false;
    this.matchSound.mute = false;
    this.clickSound.mute = false;
    this.clickSound.play();
  },
  settingEvent() {
    Emitter.instance.emit("SETTING");
    this.clickSound.play();
  },
  closeSettingEvent() {
    Emitter.instance.emit("CLOSE SETTING");
    this.clickSound.play();
  },
  playAgainEvent() {
    Emitter.instance.emit("PLAY AGAIN");
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
  backEvent() {
    Emitter.instance.emit("BACK");
    this.backgroundSound.pause();
  },
  matchSoundEvent() {
    this.matchSound.play();
  },
});
