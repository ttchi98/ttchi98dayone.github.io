cc.Class({
  extends: cc.Component,

  properties: {
    spAnim: sp.Skeleton,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.spAnim.setEventListener((entry, event) => {
      const { data } = event;
      cc.log(data.name);
    });
  },

  start() {
    this.spAnim.setAnimation(0, "idle", false);
    this.spAnim.addAnimation(0, "aim", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "death", false);
    this.spAnim.addAnimation(0, "hoverboard", false);
    this.spAnim.addAnimation(0, "idle-turn", false);
    this.spAnim.addAnimation(0, "portal", false);
    this.spAnim.addAnimation(0, "run", false);
    this.spAnim.addAnimation(0, "run-to-idle", false);
    this.spAnim.addAnimation(0, "shoot", false);
    this.spAnim.addAnimation(0, "walk", false);
  },

  // update (dt) {},
});
