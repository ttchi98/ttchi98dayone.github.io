"use strict";
cc._RF.push(module, 'a931eIrLgJP6KL5OjZY//y9', 'mainController');
// Script/mainController.js

"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    _score: 0,
    best: [],
    _newItem: null,
    _timer: 0,
    mainCamera: cc.Node,
    title: cc.Node,
    notification: cc.Node,
    notificationLabel: cc.RichText,
    scoreContainer: cc.Node,
    scoreLabel: cc.Label,
    scoreUpdatePrefab: cc.Prefab,
    bestLabel: cc.Label,
    item: cc.Node,
    table: cc.Node,
    tableChild: cc.Prefab,
    itemPrefab: cc.Prefab,
    deckItem: cc.Node,
    settingForm: cc.Node,
    settingFormFlag: false,
    tutorialForm: cc.Node,
    tutorialFormFlag: false,
    leaderBoardForm: cc.Node,
    leaderBoardFormFlag: false,
    leaderBoardItemPrefab: cc.Prefab,
    gameOverForm: cc.Node,
    gameOverParticles: cc.Node,
    gameOverLabel: cc.Label,
    gameOverMenu: cc.Node,
    gameOverEditBox: cc.EditBox,
    _posArr: [],
    _indexArr: []
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
    Emitter.instance.registerEvent("CLOSE LEADER BOARD", this.closeLeaderBoardEvent.bind(this));
    Emitter.instance.registerEvent("CLOSE SETTING", this.closeSettingEvent.bind(this));
    Emitter.instance.registerEvent("SETTING", this.settingEvent.bind(this));
    Emitter.instance.registerEvent("LEADER BOARD", this.leaderBoardEvent.bind(this));
    Emitter.instance.registerEvent("COLOR CHECK", this.colorCheck.bind(this));
    Emitter.instance.registerEvent("PLAY AGAIN", this.playAgainEvent.bind(this));
    Emitter.instance.registerEvent("START GAME", this.startGameEvent.bind(this));
    Emitter.instance.registerEvent("BACK", this.backEvent.bind(this));

    this._posArr = [cc.v2(-165, 65), cc.v2(-55, 65), cc.v2(55, 65), cc.v2(165, 65), cc.v2(-165, -45), cc.v2(-55, -45), cc.v2(55, -45), cc.v2(165, -45), cc.v2(-165, -155), cc.v2(55, -155), cc.v2(-55, -155), cc.v2(165, -155), cc.v2(-165, -265), cc.v2(-55, -265), cc.v2(55, -265), cc.v2(165, -265)];
    this.createTable();
    this.createPreFab();
    this.colorCheck();
    this.updateBestScore();
  },
  start: function start() {},
  update: function update(dt) {
    this._timer == 500 ? this.notificationEvent() : this._timer++;
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
      this._newItem = cc.instantiate(this.itemPrefab);
      this.deckItem.addChild(this._newItem);
      this._newItem.children[0].getComponent(cc.Label).string = 0;
      this._indexArr.push(this._newItem);
      this._newItem.position = this._posArr[i];
    }
    this.colorCheck();
    this.createRandomItem();
    this.createRandomItem();
  },
  createRandomItem: function createRandomItem() {
    var randomNumber = Math.floor(Math.random() * this._indexArr.length);
    if (this._indexArr[randomNumber].children[0].getComponent(cc.Label).string == 0) {
      this._indexArr[randomNumber].children[0].getComponent(cc.Label).string = 2;
      this._indexArr[randomNumber].setScale(0.3);
      var action = cc.scaleTo(0.2, 1);
      this._indexArr[randomNumber].runAction(action);

      this.checkForLose();
    } else this.createRandomItem();
  },
  matchItemRow: function matchItemRow() {
    for (var i = 0; i < 15; i++) {
      if (this._indexArr[i].children[0].getComponent(cc.Label).string === this._indexArr[i + 1].children[0].getComponent(cc.Label).string) {
        var matchTotal = parseInt(this._indexArr[i].children[0].getComponent(cc.Label).string) + parseInt(this._indexArr[i + 1].children[0].getComponent(cc.Label).string);
        this._indexArr[i].children[0].getComponent(cc.Label).string = matchTotal;
        this._indexArr[i + 1].children[0].getComponent(cc.Label).string = 0;
        this._score += matchTotal;
        this.scoreLabel.string = this._score;
        this.scoreUpdate(matchTotal);
      }
    }
    this.checkForWin();
  },
  matchItemCol: function matchItemCol() {
    for (var i = 0; i < 12; i++) {
      if (this._indexArr[i].children[0].getComponent(cc.Label).string === this._indexArr[i + 4].children[0].getComponent(cc.Label).string) {
        var matchTotal = parseInt(this._indexArr[i].children[0].getComponent(cc.Label).string) + parseInt(this._indexArr[i + 4].children[0].getComponent(cc.Label).string);
        this._indexArr[i].children[0].getComponent(cc.Label).string = 0;
        this._indexArr[i + 4].children[0].getComponent(cc.Label).string = matchTotal;
        this._score += matchTotal;
        this.scoreLabel.string = this._score;
        this.scoreUpdate(matchTotal);
      }
    }
    this.checkForWin();
  },
  scoreUpdate: function scoreUpdate(value) {
    if (value != 0) {
      var updateScore = cc.instantiate(this.scoreUpdatePrefab);
      this.scoreContainer.addChild(updateScore);
      updateScore.children[0].getComponent(cc.Label).string = "+" + value;
      var moveUp = cc.sequence(cc.moveTo(0.5, 0, 50), cc.fadeOut(0.5), cc.delayTime(1), cc.callFunc(function () {
        updateScore.destroy();
      }));
      moveUp.easing(cc.easeQuadraticActionOut());
      updateScore.runAction(moveUp);
      Emitter.instance.emit("MATCH SOUND");
    }
  },
  colorCheck: function colorCheck() {
    var grey = new cc.Color(119, 110, 101);
    var white = new cc.Color(255, 255, 255);
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

    this.colorNode(0, color0, color0);
    this.colorNode(2, color2, grey);
    this.colorNode(4, color4, grey);
    this.colorNode(8, color8, white);
    this.colorNode(16, color16, white);
    this.colorNode(32, color32, white);
    this.colorNode(64, color64, white);
    this.colorNode(128, color128, white);
    this.colorNode(256, color256, white);
    this.colorNode(512, color512, white);
    this.colorNode(1024, color1024, white);
    this.colorNode(2048, color2048, white);
  },
  colorNode: function colorNode(string, value1, value2) {
    for (var i = 0; i <= 15; i++) {
      if (this._indexArr[i].children[0].getComponent(cc.Label).string == string) {
        this._indexArr[i].color = value1;
        this._indexArr[i].children[0].color = value2;
        this._indexArr[i].children[0].getComponent(cc.LabelOutline).color = value2;
      }
    }
  },
  goRight: function goRight() {
    for (var i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        var rowOne = this._indexArr[i].children[0].getComponent(cc.Label).string;
        var rowTwo = this._indexArr[i + 1].children[0].getComponent(cc.Label).string;
        var rowThree = this._indexArr[i + 2].children[0].getComponent(cc.Label).string;
        var rowFour = this._indexArr[i + 3].children[0].getComponent(cc.Label).string;
        var rows = [parseInt(rowOne), parseInt(rowTwo), parseInt(rowThree), parseInt(rowFour)];
        var filteredRow = rows.filter(function (num) {
          return num;
        });
        var zeros = Array(4 - filteredRow.length).fill(0);
        var newRow = zeros.concat(filteredRow);
        this._indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this._indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this._indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this._indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goLeft: function goLeft() {
    for (var i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        var rowOne = this._indexArr[i].children[0].getComponent(cc.Label).string;
        var rowTwo = this._indexArr[i + 1].children[0].getComponent(cc.Label).string;
        var rowThree = this._indexArr[i + 2].children[0].getComponent(cc.Label).string;
        var rowFour = this._indexArr[i + 3].children[0].getComponent(cc.Label).string;
        var rows = [parseInt(rowOne), parseInt(rowTwo), parseInt(rowThree), parseInt(rowFour)];
        var filteredRow = rows.filter(function (num) {
          return num;
        });
        var zeros = Array(4 - filteredRow.length).fill(0);
        var newRow = filteredRow.concat(zeros);
        this._indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this._indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this._indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this._indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goUp: function goUp() {
    for (var i = 0; i < 4; i++) {
      var colOne = this._indexArr[i].children[0].getComponent(cc.Label).string;
      var colTwo = this._indexArr[i + 4].children[0].getComponent(cc.Label).string;
      var colThree = this._indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      var colFour = this._indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      var cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];
      var filteredCol = cols.filter(function (num) {
        return num;
      });
      var zeros = Array(4 - filteredCol.length).fill(0);
      var newCol = filteredCol.concat(zeros);
      this._indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this._indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this._indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this._indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  goDown: function goDown() {
    for (var i = 0; i < 4; i++) {
      var colOne = this._indexArr[i].children[0].getComponent(cc.Label).string;
      var colTwo = this._indexArr[i + 4].children[0].getComponent(cc.Label).string;
      var colThree = this._indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      var colFour = this._indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      var cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];
      var filteredCol = cols.filter(function (num) {
        return num;
      });
      var zeros = Array(4 - filteredCol.length).fill(0);
      var newCol = zeros.concat(filteredCol);
      this._indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this._indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this._indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this._indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  checkForWin: function checkForWin() {
    for (var i = 0; i < this._indexArr.length; i++) {
      if (this._indexArr[i].children[0].getComponent(cc.Label).string == 128) {
        this.gameOverWinEvent();
        this.best.push(this.scoreLabel.string);
        cc.sys.localStorage.setItem("best", JSON.stringify(this.best));
        this.bestLabel.string = Math.max.apply(Math, _toConsumableArray(JSON.parse(cc.sys.localStorage.getItem("best"))));
      }
    }
  },
  checkForLose: function checkForLose() {
    var zeros = 0;
    for (var i = 0; i < this._indexArr.length; i++) {
      if (this._indexArr[i].children[0].getComponent(cc.Label).string == 0) {
        zeros++;
      }
    }
    if (zeros === 0) {
      this.gameOverLoseEvent();
    }
  },
  startGameEvent: function startGameEvent() {
    var startGame = cc.moveTo(0.5, -500, 0);
    this.mainCamera.runAction(startGame);
    var moveTitle = cc.spawn(cc.moveTo(0.5, -600, 300), cc.scaleTo(0.5, 0.8));
    this.title.runAction(moveTitle);
    this.gameOverForm.active = false;
    this.newGameEvent();
  },
  backEvent: function backEvent() {
    var backToStartGame = cc.moveTo(0.5, 0, 0);
    this.mainCamera.runAction(backToStartGame);
    var moveTitle = cc.spawn(cc.moveTo(0.5, 0, 200), cc.scaleTo(0.5, 1));
    this.title.runAction(moveTitle);
    this.disableKey(false);
  },
  gameOverWinEvent: function gameOverWinEvent() {
    this.gameOverForm.active = true;
    this.gameOverForm.setScale(0, 0);
    var winSpawn = cc.scaleTo(0.5, 1);
    this.gameOverForm.runAction(winSpawn);
    this.gameOverParticles.active = true;
    this.gameOverMenu.active = true;
    this.gameOverLabel.string = "You Win!";
    Emitter.instance.emit("WIN SOUND");
    this.disableKey(false);
  },
  gameOverLoseEvent: function gameOverLoseEvent() {
    this.gameOverForm.active = true;
    this.gameOverForm.setScale(0, 0);
    var loseSpawn = cc.scaleTo(0.5, 1);
    this.gameOverForm.runAction(loseSpawn);
    this.gameOverParticles.active = false;
    this.gameOverMenu.active = false;
    this.gameOverLabel.string = "Game Over!";
    Emitter.instance.emit("LOSE SOUND");
    this.disableKey(false);
  },
  newGameEvent: function newGameEvent() {
    this.deckItem.removeAllChildren(this._newItem);
    this._score = 0;
    this.scoreLabel.string = this._score;
    this._indexArr = [];
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
      this.tutorialForm.setPosition(-425, 280);
      var spawnOpen = cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, -505, -50));
      this.tutorialForm.runAction(spawnOpen);
      this.disableKey(false);
    } else this.closeTutorialEvent();
  },
  closeTutorialEvent: function closeTutorialEvent() {
    var spawnClose = cc.spawn(cc.scaleTo(0.5, 0), cc.moveTo(0.5, -425, 280));
    this.tutorialForm.runAction(spawnClose);
    this.tutorialFormFlag = false;
    this.tutorialForm.getComponent(cc.PageView).scrollToPage(0, 0.5);
    this.disableKey(true);
  },
  leaderBoardEvent: function leaderBoardEvent() {
    if (this.leaderBoardFormFlag == false) {
      this.leaderBoardFormFlag = true;
      this.leaderBoardForm.active = true;
      this.leaderBoardForm.setScale(0, 0);
      this.leaderBoardForm.setPosition(-355, 275);
      var spawnOpen = cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, -505, -50));
      this.leaderBoardForm.runAction(spawnOpen);
      this.disableKey(false);
    } else this.closeLeaderBoardEvent();
  },
  closeLeaderBoardEvent: function closeLeaderBoardEvent() {
    var spawnClose = cc.spawn(cc.scaleTo(0.5, 0), cc.moveTo(0.5, -355, 275));
    this.leaderBoardForm.runAction(spawnClose);
    this.leaderBoardFormFlag = false;
    this.disableKey(true);
  },
  settingEvent: function settingEvent() {
    if (this.settingFormFlag == false) {
      this.settingFormFlag = true;
      this.settingForm.active = true;
      this.settingForm.setScale(0, 0);
      var spawnOpen = cc.scaleTo(0.5, 1);
      this.settingForm.runAction(spawnOpen);
    } else this.closeSettingEvent();
  },
  closeSettingEvent: function closeSettingEvent() {
    var spawnClose = cc.scaleTo(0.5, 0);
    this.settingForm.runAction(spawnClose);
    this.settingFormFlag = false;
  },
  playAgainEvent: function playAgainEvent() {
    var newItem = cc.instantiate(this.leaderBoardItemPrefab);
    this.leaderBoardForm.children[2].children[0].addChild(newItem);
    var stringLeaderBoard = newItem.getComponent(cc.Label);
    stringLeaderBoard.string = "___\u2606\u2606\u2606\u2606\u2606___ \n " + this.gameOverEditBox.string + " : " + this._score;
    this.gameOverEditBox.string = "";
    this.newGameEvent();
  },
  updateBestScore: function updateBestScore() {
    this.bestLabel.string = Math.max.apply(Math, _toConsumableArray(JSON.parse(cc.sys.localStorage.getItem("best"))));
  },
  notificationEvent: function notificationEvent() {
    this.notification.setPosition(1500, 300);
    var action = cc.moveTo(10, -1500, 300);
    this.notification.runAction(action);
    this._timer = 0;
  },
  disableKey: function disableKey(value) {
    Emitter.instance.emit("DISABLE KEY", value);
    Emitter.instance.emit("DISABLE TOUCH", value);
  }
});

cc._RF.pop();