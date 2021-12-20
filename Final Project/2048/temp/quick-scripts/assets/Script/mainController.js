(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/mainController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a931eIrLgJP6KL5OjZY//y9', 'mainController', __filename);
// Script/mainController.js

"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    limit: 165,
    score: 0,
    best: [],
    newItem: null,
    timer: 0,
    notification: cc.Node,
    notificationLabel: cc.RichText,
    scoreLabel: cc.Label,
    bestLabel: cc.Label,
    item: cc.Node,
    table: cc.Node,
    tableChild: cc.Prefab,
    itemPrefab: cc.Prefab,
    deckItem: cc.Node,
    tutorialForm: cc.Node,
    tutorialFormFlag: false,
    leaderBoardForm: cc.Node,
    leaderBoardFormFlag: false,
    gameOverForm: cc.Node,
    gameOverParticles: cc.Node,
    gameOverSadFace: cc.Node,
    gameOverHappyFace: cc.Node,
    gameOverLabel: cc.Label,
    posArr: [],
    indexArr: []
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("DOWN", this.goDown.bind(this));
    Emitter.instance.registerEvent("UP", this.goUp.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goRight.bind(this));
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
    Emitter.instance.registerEvent("CREATE RANDOM ITEM", this.createRandomItem.bind(this));
    Emitter.instance.registerEvent("MATCH ROW", this.matchItemRow.bind(this));
    Emitter.instance.registerEvent("MATCH COL", this.matchItemCol.bind(this));
    Emitter.instance.registerEvent("NEW GAME", this.newGameEvent.bind(this));
    Emitter.instance.registerEvent("TUTORIAL", this.tutorialEvent.bind(this));
    Emitter.instance.registerEvent("CLOSE TUTORIAL", this.closeTutorialEvent.bind(this));
    Emitter.instance.registerEvent("LEADER BOARD", this.leaderBoardEvent.bind(this));
    Emitter.instance.registerEvent("CLOSE LEADER BOARD", this.closeLeaderBoardEvent.bind(this));
    Emitter.instance.registerEvent("COLOR CHECK", this.colorCheck.bind(this));

    this.posArr = [cc.v2(-165, 65), cc.v2(-55, 65), cc.v2(55, 65), cc.v2(165, 65), cc.v2(-165, -45), cc.v2(-55, -45), cc.v2(55, -45), cc.v2(165, -45), cc.v2(-165, -155), cc.v2(55, -155), cc.v2(-55, -155), cc.v2(165, -155), cc.v2(-165, -265), cc.v2(-55, -265), cc.v2(55, -265), cc.v2(165, -265)];
    this.createTable();
    this.createPreFab();
    this.colorCheck();
    this.updateLeaderBoard();

    // if (this.newItemLevel.string == 0) {
    //   this.newItem.color = "#8D8D8C";
    // }
  },
  start: function start() {},
  update: function update(dt) {
    this.positionCheck();
    this.timer == 500 ? this.notificationEvent() : this.timer++;
    this.notificationLabel.string = "<color=#ffffff>Best Score is: </c><color=#0fffff>" + this.bestLabel.string + " </color><color=#ffffff>!!!</c>";
  },
  createTable: function createTable() {
    for (var i = 1; i <= 4; i++) {
      for (var j = 1; j <= 4; j++) {
        var newTableChild = cc.instantiate(this.tableChild);
        this.table.addChild(newTableChild);
      }
    }
  },
  createPreFab: function createPreFab() {
    for (var i = 0; i < 16; i++) {
      this.newItem = cc.instantiate(this.itemPrefab);
      this.deckItem.addChild(this.newItem);
      this.newItem.children[0].getComponent(cc.Label).string = 0;
      this.indexArr.push(this.newItem);
      this.newItem.position = this.posArr[i];
    }
    // cc.log(this.deckItem.children);
    cc.log(this.indexArr);
    this.colorCheck();
    this.createRandomItem();
    this.createRandomItem();
  },
  createRandomItem: function createRandomItem() {
    var randomNumber = Math.floor(Math.random() * this.indexArr.length);
    if (this.indexArr[randomNumber].children[0].getComponent(cc.Label).string == 0) {
      this.indexArr[randomNumber].children[0].getComponent(cc.Label).string = 2;
      this.indexArr[randomNumber].setScale(0.3);
      var action = cc.scaleTo(0.2, 1);
      this.indexArr[randomNumber].runAction(action);

      this.checkForLose();
    } else this.createRandomItem();
  },
  matchItemRow: function matchItemRow() {
    for (var i = 0; i < 15; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string === this.indexArr[i + 1].children[0].getComponent(cc.Label).string) {
        var matchTotal = parseInt(this.indexArr[i].children[0].getComponent(cc.Label).string) + parseInt(this.indexArr[i + 1].children[0].getComponent(cc.Label).string);
        this.indexArr[i].children[0].getComponent(cc.Label).string = matchTotal;
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = 0;
        this.score += matchTotal;
        this.scoreLabel.string = this.score;
      }
      // let action = cc.sequence(cc.scaleTo(0.5, 1.5), cc.scaleTo(0.5, 1));
      // this.indexArr[i].runAction(action);
    }
    this.checkForWin();
  },
  matchItemCol: function matchItemCol() {
    for (var i = 0; i < 12; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string === this.indexArr[i + 4].children[0].getComponent(cc.Label).string) {
        var matchTotal = parseInt(this.indexArr[i].children[0].getComponent(cc.Label).string) + parseInt(this.indexArr[i + 4].children[0].getComponent(cc.Label).string);
        this.indexArr[i].children[0].getComponent(cc.Label).string = 0;
        this.indexArr[i + 4].children[0].getComponent(cc.Label).string = matchTotal;
        this.score += matchTotal;
        this.scoreLabel.string = this.score;
      }
    }
    this.checkForWin();
  },
  colorCheck: function colorCheck() {
    var grey = new cc.Color(204, 110, 101);
    var color0 = new cc.Color(204, 193, 179);
    var color2 = new cc.Color(238, 228, 218);
    var color4 = new cc.Color(237, 224, 200);
    var color8 = new cc.Color(242, 177, 120);
    var color16 = new cc.Color(245, 150, 98);
    var color32 = new cc.Color(246, 125, 95);
    var color64 = new cc.Color(246, 94, 59);
    var color128 = new cc.Color(237, 207, 113);
    var color256 = new cc.Color(237, 204, 97);
    var color512 = new cc.Color(237, 200, 80);
    var color1024 = new cc.Color(237, 196, 62);
    var color2048 = new cc.Color(237, 194, 45);

    for (var i = 0; i <= 15; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 0) {
        this.indexArr[i].color = color0;
        this.indexArr[i].children[0].color = color0;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 2) {
        this.indexArr[i].color = color2;
        this.indexArr[i].children[0].color = grey;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 4) {
        this.indexArr[i].color = color4;
        this.indexArr[i].children[0].color = grey;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 8) {
        this.indexArr[i].color = color8;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 16) {
        this.indexArr[i].color = color16;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 32) {
        this.indexArr[i].color = color32;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 64) {
        this.indexArr[i].color = color64;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 128) {
        this.indexArr[i].color = color128;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 256) {
        this.indexArr[i].color = color256;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 512) {
        this.indexArr[i].color = color512;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 1024) {
        this.indexArr[i].color = color1024;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 2048) {
        this.indexArr[i].color = color2048;
        this.indexArr[i].children[0].color = cc.Color.WHITE;
      }
      // switch (this.indexArr[i].children[0].getComponent(cc.Label).string == value) {
      //   case 0:
      //     this.indexArr[i].color = cc.Color.GRAY;
      //     this.indexArr[i].children[0].color = cc.Color.GRAY;
      //     break;
      //   case 2:
      //     this.indexArr[i].color = "#ffb759";
      //     break;
      // }
    }
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
  goRight: function goRight() {
    for (var i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        var rowOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
        var rowTwo = this.indexArr[i + 1].children[0].getComponent(cc.Label).string;
        var rowThree = this.indexArr[i + 2].children[0].getComponent(cc.Label).string;
        var rowFour = this.indexArr[i + 3].children[0].getComponent(cc.Label).string;
        var rows = [parseInt(rowOne), parseInt(rowTwo), parseInt(rowThree), parseInt(rowFour)];
        var filteredRow = rows.filter(function (num) {
          return num;
        });
        var zeros = Array(4 - filteredRow.length).fill(0);
        var newRow = zeros.concat(filteredRow);
        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goLeft: function goLeft() {
    for (var i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        var rowOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
        var rowTwo = this.indexArr[i + 1].children[0].getComponent(cc.Label).string;
        var rowThree = this.indexArr[i + 2].children[0].getComponent(cc.Label).string;
        var rowFour = this.indexArr[i + 3].children[0].getComponent(cc.Label).string;
        var rows = [parseInt(rowOne), parseInt(rowTwo), parseInt(rowThree), parseInt(rowFour)];
        var filteredRow = rows.filter(function (num) {
          return num;
        });
        var zeros = Array(4 - filteredRow.length).fill(0);
        var newRow = filteredRow.concat(zeros);
        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goUp: function goUp() {
    for (var i = 0; i < 4; i++) {
      var colOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
      var colTwo = this.indexArr[i + 4].children[0].getComponent(cc.Label).string;
      var colThree = this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      var colFour = this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      var cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];
      var filteredCol = cols.filter(function (num) {
        return num;
      });
      var zeros = Array(4 - filteredCol.length).fill(0);
      var newCol = filteredCol.concat(zeros);
      this.indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this.indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  goDown: function goDown() {
    for (var i = 0; i < 4; i++) {
      var colOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
      var colTwo = this.indexArr[i + 4].children[0].getComponent(cc.Label).string;
      var colThree = this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      var colFour = this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      var cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];
      var filteredCol = cols.filter(function (num) {
        return num;
      });
      var zeros = Array(4 - filteredCol.length).fill(0);
      var newCol = zeros.concat(filteredCol);
      this.indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this.indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  checkForWin: function checkForWin() {
    for (var i = 0; i < this.indexArr.length; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 64) {
        this.gameOverWinEvent();
        this.best.push(this.scoreLabel.string);
        cc.sys.localStorage.setItem("best", JSON.stringify(this.best));
        this.bestLabel.string = Math.max.apply(Math, _toConsumableArray(JSON.parse(cc.sys.localStorage.getItem("best"))));
      }
    }
  },
  checkForLose: function checkForLose() {
    var zeros = 0;
    for (var i = 0; i < this.indexArr.length; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 0) {
        zeros++;
      }
    }
    if (zeros === 0) {
      this.gameOverLoseEvent();
    }
  },
  gameOverWinEvent: function gameOverWinEvent() {
    this.gameOverForm.active = true;
    this.gameOverForm.setScale(0, 0);
    var winSpawn = cc.scaleTo(0.5, 1);
    this.gameOverForm.runAction(winSpawn);
    this.gameOverParticles.active = true;
    this.gameOverHappyFace.active = true;
    this.gameOverSadFace.active = false;
    this.gameOverLabel.string = "You Win!";
    this.disableKey(false);
  },
  gameOverLoseEvent: function gameOverLoseEvent() {
    this.gameOverForm.active = true;
    this.gameOverForm.setScale(0, 0);
    var loseSpawn = cc.scaleTo(0.5, 1);
    this.gameOverForm.runAction(loseSpawn);
    this.gameOverParticles.active = false;
    this.gameOverHappyFace.active = false;
    this.gameOverSadFace.active = true;
    this.gameOverLabel.string = "Game Over!";
    this.disableKey(false);
  },
  newGameEvent: function newGameEvent() {
    this.deckItem.removeAllChildren(this.newItem);
    this.score = 0;
    this.scoreLabel.string = this.score;
    this.indexArr = [];
    this.createPreFab();
    this.colorCheck();
    this.gameOverForm.active = false;
    this.disableKey(true);
  },
  tutorialEvent: function tutorialEvent() {
    if (this.tutorialFormFlag == false) {
      this.tutorialFormFlag = true;
      this.tutorialForm.active = true;
      this.tutorialForm.setScale(0, 0);
      this.tutorialForm.setPosition(75, 320);
      var spawnOpen = cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, 2.5, -50));
      this.tutorialForm.runAction(spawnOpen);
      this.disableKey(false);
    } else this.closeTutorialEvent();
  },
  closeTutorialEvent: function closeTutorialEvent() {
    var spawnClose = cc.spawn(cc.scaleTo(0.5, 0), cc.moveTo(0.5, 75, 320));
    this.tutorialForm.runAction(spawnClose);
    this.tutorialFormFlag = false;
    this.disableKey(true);
  },
  leaderBoardEvent: function leaderBoardEvent() {
    if (this.leaderBoardFormFlag == false) {
      this.leaderBoardFormFlag = true;
      this.leaderBoardForm.active = true;
      this.leaderBoardForm.setScale(0, 0);
      this.leaderBoardForm.setPosition(85, 275);
      var spawnOpen = cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, 2.5, -50));
      this.leaderBoardForm.runAction(spawnOpen);
      this.disableKey(false);
    } else this.closeLeaderBoardEvent();
  },
  closeLeaderBoardEvent: function closeLeaderBoardEvent() {
    var spawnClose = cc.spawn(cc.scaleTo(0.5, 0), cc.moveTo(0.5, 75, 275));
    this.leaderBoardForm.runAction(spawnClose);
    this.leaderBoardFormFlag = false;
    this.disableKey(true);
  },
  updateLeaderBoard: function updateLeaderBoard() {
    this.bestLabel.string = Math.max.apply(Math, _toConsumableArray(JSON.parse(cc.sys.localStorage.getItem("best"))));
  },
  notificationEvent: function notificationEvent() {
    this.notification.setPosition(1500, 300);
    var action = cc.moveTo(10, -1500, 300);
    this.notification.runAction(action);
    this.timer = 0;
  },
  disableKey: function disableKey(value) {
    Emitter.instance.emit("DISABLE KEY", value);
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
        //# sourceMappingURL=mainController.js.map
        