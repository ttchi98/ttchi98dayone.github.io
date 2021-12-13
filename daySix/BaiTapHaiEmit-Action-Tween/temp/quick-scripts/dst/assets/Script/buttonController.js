
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/buttonController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a35bc4W925AbZc6U6UlY3Bg', 'buttonController');
// Script/buttonController.js

"use strict";

var Emitter = require("mEmitter");

cc.Class({
  "extends": cc.Component,
  properties: {
    attackBtn: cc.Button,
    leftBtn: cc.Button,
    rightBtn: cc.Button,
    jumpBtn: cc.Button,
    resetBtn: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.attackBtn.node.on("click", this.goAttack, this);
    this.leftBtn.node.on("click", this.goLeft, this);
    this.rightBtn.node.on("click", this.goRight, this);
    this.jumpBtn.node.on("click", this.goJump, this);
    this.resetBtn.node.on("click", this.resetPos, this);
    Emitter.instance.registerEvent("DISABLE BUTTON", this.disableBtn.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
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
  disableBtn: function disableBtn(value) {
    this.attackBtn.interactable = value;
    this.leftBtn.interactable = value;
    this.rightBtn.interactable = value;
    this.jumpBtn.interactable = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidXR0b25Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkVtaXR0ZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhdHRhY2tCdG4iLCJCdXR0b24iLCJsZWZ0QnRuIiwicmlnaHRCdG4iLCJqdW1wQnRuIiwicmVzZXRCdG4iLCJvbkxvYWQiLCJub2RlIiwib24iLCJnb0F0dGFjayIsImdvTGVmdCIsImdvUmlnaHQiLCJnb0p1bXAiLCJyZXNldFBvcyIsImluc3RhbmNlIiwicmVnaXN0ZXJFdmVudCIsImRpc2FibGVCdG4iLCJiaW5kIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImVtaXQiLCJ2YWx1ZSIsImludGVyYWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXZCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUVQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLE1BREo7QUFFVkMsSUFBQUEsT0FBTyxFQUFFTixFQUFFLENBQUNLLE1BRkY7QUFHVkUsSUFBQUEsUUFBUSxFQUFFUCxFQUFFLENBQUNLLE1BSEg7QUFJVkcsSUFBQUEsT0FBTyxFQUFFUixFQUFFLENBQUNLLE1BSkY7QUFLVkksSUFBQUEsUUFBUSxFQUFFVCxFQUFFLENBQUNLO0FBTEgsR0FGTDtBQVNQO0FBQ0FLLEVBQUFBLE1BVk8sb0JBVUU7QUFDUCxTQUFLTixTQUFMLENBQWVPLElBQWYsQ0FBb0JDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLEtBQUtDLFFBQXJDLEVBQStDLElBQS9DO0FBQ0EsU0FBS1AsT0FBTCxDQUFhSyxJQUFiLENBQWtCQyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixLQUFLRSxNQUFuQyxFQUEyQyxJQUEzQztBQUNBLFNBQUtQLFFBQUwsQ0FBY0ksSUFBZCxDQUFtQkMsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsS0FBS0csT0FBcEMsRUFBNkMsSUFBN0M7QUFDQSxTQUFLUCxPQUFMLENBQWFHLElBQWIsQ0FBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLEtBQUtJLE1BQW5DLEVBQTJDLElBQTNDO0FBQ0EsU0FBS1AsUUFBTCxDQUFjRSxJQUFkLENBQW1CQyxFQUFuQixDQUFzQixPQUF0QixFQUErQixLQUFLSyxRQUFwQyxFQUE4QyxJQUE5QztBQUNBbkIsSUFBQUEsT0FBTyxDQUFDb0IsUUFBUixDQUFpQkMsYUFBakIsQ0FDRSxnQkFERixFQUVFLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBRkY7QUFJRCxHQXBCTTtBQXFCUEMsRUFBQUEsS0FyQk8sbUJBcUJDLENBQUUsQ0FyQkg7QUFzQlBDLEVBQUFBLE1BdEJPLGtCQXNCQUMsRUF0QkEsRUFzQkksQ0FBRSxDQXRCTjtBQXVCUFgsRUFBQUEsUUF2Qk8sc0JBdUJJO0FBQ1RmLElBQUFBLE9BQU8sQ0FBQ29CLFFBQVIsQ0FBaUJPLElBQWpCLENBQXNCLFFBQXRCO0FBQ0QsR0F6Qk07QUEwQlBYLEVBQUFBLE1BMUJPLG9CQTBCRTtBQUNQaEIsSUFBQUEsT0FBTyxDQUFDb0IsUUFBUixDQUFpQk8sSUFBakIsQ0FBc0IsTUFBdEI7QUFDRCxHQTVCTTtBQTZCUFYsRUFBQUEsT0E3Qk8scUJBNkJHO0FBQ1JqQixJQUFBQSxPQUFPLENBQUNvQixRQUFSLENBQWlCTyxJQUFqQixDQUFzQixPQUF0QjtBQUNELEdBL0JNO0FBZ0NQVCxFQUFBQSxNQWhDTyxvQkFnQ0U7QUFDUGxCLElBQUFBLE9BQU8sQ0FBQ29CLFFBQVIsQ0FBaUJPLElBQWpCLENBQXNCLE1BQXRCO0FBQ0QsR0FsQ007QUFtQ1BSLEVBQUFBLFFBbkNPLHNCQW1DSTtBQUNUbkIsSUFBQUEsT0FBTyxDQUFDb0IsUUFBUixDQUFpQk8sSUFBakIsQ0FBc0IsT0FBdEI7QUFDRCxHQXJDTTtBQXNDUEwsRUFBQUEsVUF0Q08sc0JBc0NJTSxLQXRDSixFQXNDVztBQUNoQixTQUFLdEIsU0FBTCxDQUFldUIsWUFBZixHQUE4QkQsS0FBOUI7QUFDQSxTQUFLcEIsT0FBTCxDQUFhcUIsWUFBYixHQUE0QkQsS0FBNUI7QUFDQSxTQUFLbkIsUUFBTCxDQUFjb0IsWUFBZCxHQUE2QkQsS0FBN0I7QUFDQSxTQUFLbEIsT0FBTCxDQUFhbUIsWUFBYixHQUE0QkQsS0FBNUI7QUFDRDtBQTNDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbWl0dGVyID0gcmVxdWlyZShcIm1FbWl0dGVyXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGF0dGFja0J0bjogY2MuQnV0dG9uLFxyXG4gICAgbGVmdEJ0bjogY2MuQnV0dG9uLFxyXG4gICAgcmlnaHRCdG46IGNjLkJ1dHRvbixcclxuICAgIGp1bXBCdG46IGNjLkJ1dHRvbixcclxuICAgIHJlc2V0QnRuOiBjYy5CdXR0b24sXHJcbiAgfSxcclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmF0dGFja0J0bi5ub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5nb0F0dGFjaywgdGhpcyk7XHJcbiAgICB0aGlzLmxlZnRCdG4ubm9kZS5vbihcImNsaWNrXCIsIHRoaXMuZ29MZWZ0LCB0aGlzKTtcclxuICAgIHRoaXMucmlnaHRCdG4ubm9kZS5vbihcImNsaWNrXCIsIHRoaXMuZ29SaWdodCwgdGhpcyk7XHJcbiAgICB0aGlzLmp1bXBCdG4ubm9kZS5vbihcImNsaWNrXCIsIHRoaXMuZ29KdW1wLCB0aGlzKTtcclxuICAgIHRoaXMucmVzZXRCdG4ubm9kZS5vbihcImNsaWNrXCIsIHRoaXMucmVzZXRQb3MsIHRoaXMpO1xyXG4gICAgRW1pdHRlci5pbnN0YW5jZS5yZWdpc3RlckV2ZW50KFxyXG4gICAgICBcIkRJU0FCTEUgQlVUVE9OXCIsXHJcbiAgICAgIHRoaXMuZGlzYWJsZUJ0bi5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7fSxcclxuICB1cGRhdGUoZHQpIHt9LFxyXG4gIGdvQXR0YWNrKCkge1xyXG4gICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KFwiQVRUQUNLXCIpO1xyXG4gIH0sXHJcbiAgZ29MZWZ0KCkge1xyXG4gICAgRW1pdHRlci5pbnN0YW5jZS5lbWl0KFwiTEVGVFwiKTtcclxuICB9LFxyXG4gIGdvUmlnaHQoKSB7XHJcbiAgICBFbWl0dGVyLmluc3RhbmNlLmVtaXQoXCJSSUdIVFwiKTtcclxuICB9LFxyXG4gIGdvSnVtcCgpIHtcclxuICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdChcIkpVTVBcIik7XHJcbiAgfSxcclxuICByZXNldFBvcygpIHtcclxuICAgIEVtaXR0ZXIuaW5zdGFuY2UuZW1pdChcIlJFU0VUXCIpO1xyXG4gIH0sXHJcbiAgZGlzYWJsZUJ0bih2YWx1ZSkge1xyXG4gICAgdGhpcy5hdHRhY2tCdG4uaW50ZXJhY3RhYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmxlZnRCdG4uaW50ZXJhY3RhYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnJpZ2h0QnRuLmludGVyYWN0YWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5qdW1wQnRuLmludGVyYWN0YWJsZSA9IHZhbHVlO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=