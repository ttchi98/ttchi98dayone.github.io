cc.Class({
  extends: cc.Component,

  properties: {
    sprite: cc.Node,
    resetBtn: cc.Button,

    easeInShineBtn: cc.Button,
    easeOutShineBtn: cc.Button,
    easeInOutShineBtn: cc.Button,

    easeInQuadBtn: cc.Button,
    easeOutQuadBtn: cc.Button,
    easeInOutQuadBtn: cc.Button,

    easeInCubicBtn: cc.Button,
    easeOutCubicBtn: cc.Button,
    easeInOutCubicBtn: cc.Button,

    easeInQuartBtn: cc.Button,
    easeOutQuartBtn: cc.Button,
    easeInOutQuartBtn: cc.Button,

    easeInQuintBtn: cc.Button,
    easeOutQuintBtn: cc.Button,
    easeInOutQuintBtn: cc.Button,

    easeInExpoBtn: cc.Button,
    easeOutExpoBtn: cc.Button,
    easeInOutExpoBtn: cc.Button,

    easeInCircBtn: cc.Button,
    easeOutCircBtn: cc.Button,
    easeInOutCircBtn: cc.Button,

    easeInBackBtn: cc.Button,
    easeOutBackBtn: cc.Button,
    easeInOutBackBtn: cc.Button,

    easeInElasticBtn: cc.Button,
    easeOutElasticBtn: cc.Button,
    easeInOutElasticBtn: cc.Button,

    easeInBounceBtn: cc.Button,
    easeOutBounceBtn: cc.Button,
    easeInOutBounceBtn: cc.Button,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.resetBtn.node.on("click", this.resetPos, this);
    this.easeInShineBtn.node.on("click", this.easeInShine, this);
    this.easeOutShineBtn.node.on("click", this.easeOutShine, this);
    this.easeInOutShineBtn.node.on("click", this.easeInOutShine, this);

    this.easeInQuadBtn.node.on("click", this.easeInQuad, this);
    this.easeOutQuadBtn.node.on("click", this.easeOutQuad, this);
    this.easeInOutQuadBtn.node.on("click", this.easeInOutQuad, this);

    this.easeInCubicBtn.node.on("click", this.easeInCubic, this);
    this.easeOutCubicBtn.node.on("click", this.easeOutCubic, this);
    this.easeInOutCubicBtn.node.on("click", this.easeInOutCubic, this);

    this.easeInQuartBtn.node.on("click", this.easeInQuart, this);
    this.easeOutQuartBtn.node.on("click", this.easeOutQuart, this);
    this.easeInOutQuartBtn.node.on("click", this.easeInOutQuart, this);

    this.easeInQuintBtn.node.on("click", this.easeInQuint, this);
    this.easeOutQuintBtn.node.on("click", this.easeOutQuint, this);
    this.easeInOutQuintBtn.node.on("click", this.easeInOutQuint, this);

    this.easeInExpoBtn.node.on("click", this.easeInExpo, this);
    this.easeOutExpoBtn.node.on("click", this.easeOutExpo, this);
    this.easeInOutExpoBtn.node.on("click", this.easeInOutExpo, this);

    this.easeInCircBtn.node.on("click", this.easeInCirc, this);
    this.easeOutCircBtn.node.on("click", this.easeOutCirc, this);
    this.easeInOutCircBtn.node.on("click", this.easeInOutCirc, this);

    this.easeInBackBtn.node.on("click", this.easeInBack, this);
    this.easeOutBackBtn.node.on("click", this.easeOutBack, this);
    this.easeInOutBackBtn.node.on("click", this.easeInOutBack, this);

    this.easeInElasticBtn.node.on("click", this.easeInElastic, this);
    this.easeOutElasticBtn.node.on("click", this.easeOutElastic, this);
    this.easeInOutElasticBtn.node.on("click", this.easeInOutElastic, this);

    this.easeInBounceBtn.node.on("click", this.easeInBounce, this);
    this.easeOutBounceBtn.node.on("click", this.easeOutBounce, this);
    this.easeInOutBounceBtn.node.on("click", this.easeInOutBounce, this);
  },

  start() {},

  update(dt) {},
  resetPos() {
    let action = cc.moveTo(0.5, -300, 40);
    this.sprite.runAction(action);
  },
  easeInShine() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutShine() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutShine() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeInOut(3.0));
    this.sprite.runAction(action);
  },
  easeInQuad() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuadraticActionIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutQuad() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuadraticActionOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutQuad() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuadraticActionInOut(3.0));
    this.sprite.runAction(action);
  },
  easeInCubic() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeCubicActionIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutCubic() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeCubicActionOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutCubic() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeCubicActionInOut(3.0));
    this.sprite.runAction(action);
  },
  easeInQuart() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuarticActionIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutQuart() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuarticActionOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutQuart() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuarticActionInOut(3.0));
    this.sprite.runAction(action);
  },

  easeInQuint() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuinticActionIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutQuint() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuinticActionOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutQuint() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeQuinticActionInOut(3.0));
    this.sprite.runAction(action);
  },

  easeInExpo() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeExponentialIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutExpo() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeExponentialOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutExpo() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeExponentialInOut(3.0));
    this.sprite.runAction(action);
  },

  easeInCirc() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeCircleActionIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutCirc() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeCircleActionOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutCirc() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeCircleActionInOut(3.0));
    this.sprite.runAction(action);
    3.0;
  },
  easeInBack() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeBackIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutBack() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeBackOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutBack() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeBackInOut(3.0));
    this.sprite.runAction(action);
  },
  Elastic() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeElasticIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutElastic() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeElasticOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutElastic() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeElasticInOut(3.0));
    this.sprite.runAction(action);
  },

  easeInBounce() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeBounceIn(3.0));
    this.sprite.runAction(action);
  },
  easeOutBounce() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeBounceOut(3.0));
    this.sprite.runAction(action);
  },
  easeInOutBounce() {
    let action = cc.moveBy(3.0, 200, 0);
    action.easing(cc.easeBounceInOut(3.0));
    this.sprite.runAction(action);
  },
});
