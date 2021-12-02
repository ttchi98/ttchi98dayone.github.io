(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/test.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'afcd841199GU7sPweRKsv9I', 'test', __filename);
// Script/test.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    userID: 0,
    userName: "Test",
    frames: [cc.SpriteFrame],
    score: {
      default: 0,
      type: cc.Integer,
      visible: true,
      serializable: false,
      displayName: "Score",
      tooltip: "Đây là Tooltip Score",
      point: 10
    },
    time: {
      default: 0,
      type: cc.Integer,
      visible: true,
      serializable: false,
      displayName: "Time",
      tooltip: "Đây là Tooltip Time",
      point: 10
    },
    width: {
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        this._width = value;
      }
    },
    loaded: true,
    target: null
  },

  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var myObject = cc.Class({
      name: "myObject",
      ctor: function ctor() {
        this.name = "Tui la Object";
        this.width = "100px";
      }
    });
    var myObj = new myObject();
    cc.log(myObj instanceof myObject);
    cc.log(myObj.name, myObj.width);

    var myBabyObject = cc.Class({
      extends: myObject
    });

    var babyOne = new myBabyObject();
    cc.log(babyOne.name);

    //SuperClass Constructor
    var Bag = cc.Class({
      ctor: function ctor() {
        cc.log("Bag");
      }
    });
    var Deck = cc.Class({
      extends: Bag
    });
    var Card = cc.Class({
      extends: Deck,
      ctor: function ctor() {
        cc.log("Card");
      }
    });

    var card = new Card();
    cc.log(card instanceof Bag);
  },
  start: function start() {
    var label = this.getComponent(cc.Label);
    label.string = "HƯỚNG DẪN TÂN THU";
    cc.log(label.string);
    cc.tween(this.node).to(0.5, { scale: 1.5 }).to(0.5, { scale: 0.5 }).start();
  },
  update: function update(dt) {
    // cc.log("Đây là thời gian hiện tại: " + this.time++);
    // cc.log(this.userID++);
    // cc.log(this.score++);
    // cc.log(this.score.point);
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
        //# sourceMappingURL=test.js.map
        