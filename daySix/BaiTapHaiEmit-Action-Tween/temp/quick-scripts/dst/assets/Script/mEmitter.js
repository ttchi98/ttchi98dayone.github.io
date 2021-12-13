
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/mEmitter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da769ZLoytAgrUZSTeg93Up', 'mEmitter');
// Script/mEmitter.js

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter = require("events");

var mEmitter =
/*#__PURE__*/
function () {
  function mEmitter() {
    _classCallCheck(this, mEmitter);

    this._emiter = new EventEmitter();

    this._emiter.setMaxListeners(100);
  }

  _createClass(mEmitter, [{
    key: "emit",
    value: function emit() {
      var _this$_emiter;

      (_this$_emiter = this._emiter).emit.apply(_this$_emiter, arguments);
    }
  }, {
    key: "registerEvent",
    value: function registerEvent(event, listener) {
      this._emiter.on(event, listener);
    }
  }, {
    key: "registerOnce",
    value: function registerOnce(event, listener) {
      this._emiter.once(event, listener);
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(event, listener) {
      this._emiter.removeListener(event, listener);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._emiter.removeAllListeners();

      this._emiter = null;
      mEmitter.instance = null;
    }
  }]);

  return mEmitter;
}();

mEmitter.instance = null;
module.exports = mEmitter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtRW1pdHRlci5qcyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJyZXF1aXJlIiwibUVtaXR0ZXIiLCJfZW1pdGVyIiwic2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsImV2ZW50IiwibGlzdGVuZXIiLCJvbiIsIm9uY2UiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQTVCOztJQUNNQzs7O0FBQ0osc0JBQWM7QUFBQTs7QUFDWixTQUFLQyxPQUFMLEdBQWUsSUFBSUgsWUFBSixFQUFmOztBQUNBLFNBQUtHLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixHQUE3QjtBQUNEOzs7OzJCQUNhO0FBQUE7O0FBQ1osNEJBQUtELE9BQUwsRUFBYUUsSUFBYjtBQUNEOzs7a0NBQ2FDLE9BQU9DLFVBQVU7QUFDN0IsV0FBS0osT0FBTCxDQUFhSyxFQUFiLENBQWdCRixLQUFoQixFQUF1QkMsUUFBdkI7QUFDRDs7O2lDQUNZRCxPQUFPQyxVQUFVO0FBQzVCLFdBQUtKLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkgsS0FBbEIsRUFBeUJDLFFBQXpCO0FBQ0Q7OztnQ0FDV0QsT0FBT0MsVUFBVTtBQUMzQixXQUFLSixPQUFMLENBQWFPLGNBQWIsQ0FBNEJKLEtBQTVCLEVBQW1DQyxRQUFuQztBQUNEOzs7OEJBQ1M7QUFDUixXQUFLSixPQUFMLENBQWFRLGtCQUFiOztBQUNBLFdBQUtSLE9BQUwsR0FBZSxJQUFmO0FBQ0FELE1BQUFBLFFBQVEsQ0FBQ1UsUUFBVCxHQUFvQixJQUFwQjtBQUNEOzs7Ozs7QUFFSFYsUUFBUSxDQUFDVSxRQUFULEdBQW9CLElBQXBCO0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoXCJldmVudHNcIik7XHJcbmNsYXNzIG1FbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2VtaXRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHRoaXMuX2VtaXRlci5zZXRNYXhMaXN0ZW5lcnMoMTAwKTtcclxuICB9XHJcbiAgZW1pdCguLi5hcmdzKSB7XHJcbiAgICB0aGlzLl9lbWl0ZXIuZW1pdCguLi5hcmdzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJFdmVudChldmVudCwgbGlzdGVuZXIpIHtcclxuICAgIHRoaXMuX2VtaXRlci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICB0aGlzLl9lbWl0ZXIub25jZShldmVudCwgbGlzdGVuZXIpO1xyXG4gIH1cclxuICByZW1vdmVFdmVudChldmVudCwgbGlzdGVuZXIpIHtcclxuICAgIHRoaXMuX2VtaXRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xyXG4gIH1cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZW1pdGVyLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZW1pdGVyID0gbnVsbDtcclxuICAgIG1FbWl0dGVyLmluc3RhbmNlID0gbnVsbDtcclxuICB9XHJcbn1cclxubUVtaXR0ZXIuaW5zdGFuY2UgPSBudWxsO1xyXG5tb2R1bGUuZXhwb3J0cyA9IG1FbWl0dGVyO1xyXG4iXX0=