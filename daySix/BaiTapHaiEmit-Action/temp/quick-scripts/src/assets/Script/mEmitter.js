"use strict";
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