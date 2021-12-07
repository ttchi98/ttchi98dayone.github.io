(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/BaiTap.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '91fa0XMm6RG67FEE0U4gw8t', 'BaiTap', __filename);
// Script/BaiTap.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    canMove: true,
    goLeft: false,
    goRight: false,
    jumpAngle: false,
    count: 0,
    frames: 40,
    limit: 375,
    leftButton: cc.Button,
    rightButton: cc.Button,
    jumpButton: cc.Button
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {},
  start: function start() {},
  moveLeft: function moveLeft() {
    this.goLeft = true;
    this.count = 0;
  },
  moveRight: function moveRight() {
    this.goRight = true;
    this.count = 0;
  },
  jumpAndAngle: function jumpAndAngle() {
    this.jumpAngle = true;
    this.count = 0;
  },
  reset: function reset() {
    this.node.x = 0;
    this.node.y = -75;
    this.node.scaleX = 0.5;
    this.node.angle = 0;
  },
  resetButton: function resetButton(value) {
    this.leftButton.interactable = value;
    this.rightButton.interactable = value;
    this.jumpButton.interactable = value;
  },
  resetMove: function resetMove() {
    this.goLeft = false;
    this.goRight = false;
    this.jumpAngle = false;
  },
  update: function update(dt) {
    if (this.goLeft || this.goRight || this.jumpAngle) {
      if (this.count >= this.frames) {
        this.resetButton(true);
        this.resetMove();
        return;
      }

      if (this.goLeft) {
        this.node.x -= 2;
        this.node.scaleX = 0.5;
      }
      if (this.goRight) {
        this.node.x += 2;
        this.node.scaleX = -0.5;
      }
      if (this.jumpAngle) {
        if (this.count < this.frames / 2) {
          this.node.y += 5;
        } else this.node.y -= 5;

        if (this.count >= this.frames / 4 && this.count < this.frames) {
          this.node.angle += 360 / (this.frames * 3 / 4);
        }
      }
      this.resetButton(false);
      this.count++;
    }
    if (this.node.x <= -this.limit) {
      this.node.x = -this.limit;
    } else if (this.node.x >= this.limit) {
      this.node.x = this.limit;
    }
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
        //# sourceMappingURL=BaiTap.js.map
        