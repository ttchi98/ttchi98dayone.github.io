const Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,

  properties: {
    touchNode: cc.Node,
    _xStart: 0,
    _xEnd: 0,
    _yStart: 0,
    _yEnd: 0,
    canTouch: true,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    Emitter.instance.registerEvent("DISABLE TOUCH", this.disableTouch.bind(this));
    this.disableTouch(false);
  },

  start() {},

  update(dt) {},

  touchStart(event) {
    this._xStart = event.getLocationX();
    this._yStart = event.getLocationY();
  },
  touchEnd(event) {
    this._xEnd = event.getLocationX();
    this._yEnd = event.getLocationY();
    this.touchMove();
  },
  touchMove() {
    if (!this.canTouch) return;

    if (this._xStart != null && this._yStart != null && this._xEnd != null && this._yEnd != null) {
      if (Math.abs(this._xEnd - this._xStart) > Math.abs(this._yEnd - this._yStart)) {
        if (this._xEnd > this._xStart) {
          Emitter.instance.emit("KEY RIGHT");
        } else {
          Emitter.instance.emit("KEY LEFT");
        }
      } else {
        if (this._yEnd > this._yStart) {
          Emitter.instance.emit("KEY UP");
        } else {
          Emitter.instance.emit("KEY DOWN");
        }
      }
    } else cc.error("ERROR!!!");
  },
  disableTouch(value) {
    this.canTouch = value;
  },
});
