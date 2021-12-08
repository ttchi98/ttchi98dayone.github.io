"use strict";
cc._RF.push(module, 'a931eIrLgJP6KL5OjZY//y9', 'main');
// Script/main.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    musicBtn: cc.Button,
    soundBtn: cc.Button,
    newGameBtn: cc.Button,
    quitBtn: cc.Button,

    formBegin: cc.Node,
    tableGame: cc.Node,
    item: cc.Node,
    limit: 165
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);

    this.quitBtn.node.on("click", this.quitEvent, this);
  },
  start: function start() {},
  update: function update(dt) {
    this.positionCheck();
  },
  positionCheck: function positionCheck() {
    if (this.item.y <= -(this.limit + 100)) {
      this.item.y = -(this.limit + 100);
    }
    if (this.item.y >= this.limit - 100) {
      this.item.y = this.limit - 100;
    }
    if (this.item.x <= -this.limit) {
      this.item.x = -this.limit;
    } else if (this.item.x >= this.limit) {
      this.item.x = this.limit;
    }
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.down:
        cc.log("Key down");
        this.item.y -= 110;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.up:
        cc.log("Key up");
        this.item.y += 110;
        break;
    }
  },
  onKeyRight: function onKeyRight(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.right:
        cc.log("Key right");
        this.item.x += 110;
        break;
    }
  },
  onKeyLeft: function onKeyLeft(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.left:
        cc.log("Key left");
        this.item.x -= 110;
        break;
    }
  },
  quitEvent: function quitEvent() {
    cc.game.end();
  }
});

cc._RF.pop();