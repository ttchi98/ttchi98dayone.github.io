(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/touchController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b998ftnAXdPiKWXt0NnAPHA', 'touchController', __filename);
// Script/touchController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  extends: cc.Component,

  properties: {
    touchNode: cc.Node,
    _xStart: 0,
    _xEnd: 0,
    _yStart: 0,
    _yEnd: 0,
    canTouch: true
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    Emitter.instance.registerEvent("DISABLE TOUCH", this.disableTouch.bind(this));
    this.disableTouch(false);
  },
  start: function start() {},
  update: function update(dt) {},
  touchStart: function touchStart(event) {
    this._xStart = event.getLocationX();
    this._yStart = event.getLocationY();
  },
  touchEnd: function touchEnd(event) {
    this._xEnd = event.getLocationX();
    this._yEnd = event.getLocationY();
    this.touchMove();
  },
  touchMove: function touchMove() {
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
  disableTouch: function disableTouch(value) {
    this.canTouch = value;
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
        //# sourceMappingURL=touchController.js.map
        