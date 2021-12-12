
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/keyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6815jdGDpOYbGVKQJ55IKv', 'keyController');
// Script/keyController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  "extends": cc.Component,
  properties: {
    keyMove: true
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    Emitter.instance.registerEvent("DISABLE KEY", this.disableKey.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
  onKeyDown: function onKeyDown(event) {
    if (!this.keyMove) return;

    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.goAttack();
        break;

      case cc.macro.KEY.left:
        this.goLeft();
        break;

      case cc.macro.KEY.right:
        this.goRight();
        break;

      case cc.macro.KEY.up:
        this.goJump();
        break;

      case cc.macro.KEY.down:
        this.resetPos();
        break;
    }
  },
  goAttack: function goAttack() {
    Emitter.instance.emit("ATTACK");
  },
  goLeft: function goLeft() {
    Emitter.instance.emit("LEFT");
  },
  goRight: function goRight() {
    Emitter.instance.emit("RIGHT");
  },
  goJump: function goJump() {
    Emitter.instance.emit("JUMP");
  },
  resetPos: function resetPos() {
    Emitter.instance.emit("RESET");
  },
  disableKey: function disableKey(value) {
    this.keyMove = value;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxrZXlDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJrZXlNb3ZlIiwib25Mb2FkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJpbnN0YW5jZSIsInJlZ2lzdGVyRXZlbnQiLCJkaXNhYmxlS2V5IiwiYmluZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJnb0F0dGFjayIsImxlZnQiLCJnb0xlZnQiLCJyaWdodCIsImdvUmlnaHQiLCJ1cCIsImdvSnVtcCIsImRvd24iLCJyZXNldFBvcyIsImVtaXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsT0FBTyxFQUFFO0FBREMsR0FGTDtBQUtQO0FBQ0FDLEVBQUFBLE1BTk8sb0JBTUU7QUFDUEwsSUFBQUEsRUFBRSxDQUFDTSxXQUFILENBQWVDLEVBQWYsQ0FBa0JQLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtBQUNBYixJQUFBQSxPQUFPLENBQUNjLFFBQVIsQ0FBaUJDLGFBQWpCLENBQStCLGFBQS9CLEVBQThDLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQTlDO0FBQ0QsR0FUTTtBQVVQQyxFQUFBQSxLQVZPLG1CQVVDLENBQUUsQ0FWSDtBQVdQQyxFQUFBQSxNQVhPLGtCQVdBQyxFQVhBLEVBV0ksQ0FBRSxDQVhOO0FBWVBQLEVBQUFBLFNBWk8scUJBWUdRLEtBWkgsRUFZVTtBQUNmLFFBQUksQ0FBQyxLQUFLZixPQUFWLEVBQW1COztBQUNuQixZQUFRZSxLQUFLLENBQUNDLE9BQWQ7QUFDRSxXQUFLcEIsRUFBRSxDQUFDcUIsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0UsYUFBS0MsUUFBTDtBQUNBOztBQUNGLFdBQUt4QixFQUFFLENBQUNxQixLQUFILENBQVNDLEdBQVQsQ0FBYUcsSUFBbEI7QUFDRSxhQUFLQyxNQUFMO0FBQ0E7O0FBQ0YsV0FBSzFCLEVBQUUsQ0FBQ3FCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxLQUFsQjtBQUNFLGFBQUtDLE9BQUw7QUFDQTs7QUFDRixXQUFLNUIsRUFBRSxDQUFDcUIsS0FBSCxDQUFTQyxHQUFULENBQWFPLEVBQWxCO0FBQ0UsYUFBS0MsTUFBTDtBQUNBOztBQUNGLFdBQUs5QixFQUFFLENBQUNxQixLQUFILENBQVNDLEdBQVQsQ0FBYVMsSUFBbEI7QUFDRSxhQUFLQyxRQUFMO0FBQ0E7QUFmSjtBQWlCRCxHQS9CTTtBQWdDUFIsRUFBQUEsUUFoQ08sc0JBZ0NJO0FBQ1QxQixJQUFBQSxPQUFPLENBQUNjLFFBQVIsQ0FBaUJxQixJQUFqQixDQUFzQixRQUF0QjtBQUNELEdBbENNO0FBbUNQUCxFQUFBQSxNQW5DTyxvQkFtQ0U7QUFDUDVCLElBQUFBLE9BQU8sQ0FBQ2MsUUFBUixDQUFpQnFCLElBQWpCLENBQXNCLE1BQXRCO0FBQ0QsR0FyQ007QUFzQ1BMLEVBQUFBLE9BdENPLHFCQXNDRztBQUNSOUIsSUFBQUEsT0FBTyxDQUFDYyxRQUFSLENBQWlCcUIsSUFBakIsQ0FBc0IsT0FBdEI7QUFDRCxHQXhDTTtBQXlDUEgsRUFBQUEsTUF6Q08sb0JBeUNFO0FBQ1BoQyxJQUFBQSxPQUFPLENBQUNjLFFBQVIsQ0FBaUJxQixJQUFqQixDQUFzQixNQUF0QjtBQUNELEdBM0NNO0FBNENQRCxFQUFBQSxRQTVDTyxzQkE0Q0k7QUFDVGxDLElBQUFBLE9BQU8sQ0FBQ2MsUUFBUixDQUFpQnFCLElBQWpCLENBQXNCLE9BQXRCO0FBQ0QsR0E5Q007QUErQ1BuQixFQUFBQSxVQS9DTyxzQkErQ0lvQixLQS9DSixFQStDVztBQUNoQixTQUFLOUIsT0FBTCxHQUFlOEIsS0FBZjtBQUNEO0FBakRNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwibUVtaXR0ZXJcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGtleU1vdmU6IHRydWUsXHJcbiAgfSxcclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIEVtaXR0ZXIuaW5zdGFuY2UucmVnaXN0ZXJFdmVudChcIkRJU0FCTEUgS0VZXCIsIHRoaXMuZGlzYWJsZUtleS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge30sXHJcbiAgdXBkYXRlKGR0KSB7fSxcclxuICBvbktleURvd24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5rZXlNb3ZlKSByZXR1cm47XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICB0aGlzLmdvQXR0YWNrKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgdGhpcy5nb0xlZnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgdGhpcy5nb1JpZ2h0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgIHRoaXMuZ29KdW1wKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ29BdHRhY2soKSB7XHJcbiAgICBFbWl0dGVyLmluc3RhbmNlLmVtaXQoXCJBVFRBQ0tcIik7XHJcbiAgfSxcclxuICBnb0xlZnQoKSB7XHJcbiAgICBFbWl0dGVyLmluc3RhbmNlLmVtaXQoXCJMRUZUXCIpO1xyXG4gIH0sXHJcbiAgZ29SaWdodCgpIHtcclxuICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdChcIlJJR0hUXCIpO1xyXG4gIH0sXHJcbiAgZ29KdW1wKCkge1xyXG4gICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KFwiSlVNUFwiKTtcclxuICB9LFxyXG4gIHJlc2V0UG9zKCkge1xyXG4gICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KFwiUkVTRVRcIik7XHJcbiAgfSxcclxuICBkaXNhYmxlS2V5KHZhbHVlKSB7XHJcbiAgICB0aGlzLmtleU1vdmUgPSB2YWx1ZTtcclxuICB9LFxyXG59KTtcclxuIl19