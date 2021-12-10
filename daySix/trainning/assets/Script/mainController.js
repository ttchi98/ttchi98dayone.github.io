cc.Class({
  extends: cc.Component,

  properties: {
    seqBtn: cc.Button,
    item: cc.Node,
    item2: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.seqBtn.node.on("click", this.seqFunc, this);
  },

  start() {},

  update(dt) {},
  seqFunc() {
    // let seq = cc.sequence(cc.moveBy(0.5, 200, 0), cc.moveBy(0.5, -200, 0));
    // this.item.runAction(seq);
    // let spawn = cc.spawn(
    //   cc.moveBy(0.5, 0, 50),
    //   cc.scaleTo(0.5, 0.8, 1.4),
    //   cc.rotateBy(0.5, 360),
    //   cc.fadeIn(2.0),
    //   cc.blink(2, 10)
    // );
    // this.item.runAction(spawn);
    // let seq = cc.repeat(
    //   cc.sequence(cc.moveBy(2, 200, 0), cc.moveBy(2, -200, 0)),
    //   5
    // );
    // this.item.runAction(seq);
    // let jumpAction = cc
    //   .sequence(
    //     cc.spawn(cc.scaleTo(0.1, 0.8, 1.2), cc.moveTo(0.1, 0, 10)),
    //     cc.spawn(cc.scaleTo(0.2, 1, 1), cc.moveTo(0.2, 0, 0)),
    //     cc.delayTime(0.5),
    //     cc.spawn(cc.scaleTo(0.1, 1.2, 0.8), cc.moveTo(0.1, 0, -10)),
    //     cc.spawn(cc.scaleTo(0.2, 1, 1), cc.moveTo(0.2, 0, 0)),
    //     cc.callFunc(() => {
    //       cc.warn("End Animation");
    //     })
    //     // play the animation at 1/2 speed and repeat 5 times
    //   )
    //   .speed(2)
    //   .repeat(5);
    // this.item.runAction(jumpAction);

    // this.item2.runAction(
    //   cc.sequence(
    //     cc.spawn(cc.moveTo(1, 100, 100), cc.rotateBy(1, 360)),
    //     cc.scaleTo(1, 2)
    //   )
    // );

    ////////-------TWEEN-------////////

    cc.tween(this.item)
      .by(1, { position: cc.v2(100, 100), rotation: 360 })
      .by(1, { scale: 2 })
      .start();
  },
});
