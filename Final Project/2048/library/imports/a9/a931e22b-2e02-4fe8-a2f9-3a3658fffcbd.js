"use strict";
cc._RF.push(module, 'a931eIrLgJP6KL5OjZY//y9', 'mainController');
// Script/mainController.js

"use strict";

var Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    canMove: false,
    limit: 165,
    score: 0,
    newItem: null,

    scoreLabel: cc.Label,
    bestLabel: cc.Label,
    item: cc.Node,
    table: cc.Node,
    tableChild: cc.Prefab,
    itemPrefab: cc.Prefab,
    deckItem: cc.Node,

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

    this.posArr = [cc.v2(-165, 65), cc.v2(-55, 65), cc.v2(55, 65), cc.v2(165, 65), cc.v2(-165, -45), cc.v2(-55, -45), cc.v2(55, -45), cc.v2(165, -45), cc.v2(-165, -155), cc.v2(55, -155), cc.v2(-55, -155), cc.v2(165, -155), cc.v2(-165, -265), cc.v2(-55, -265), cc.v2(55, -265), cc.v2(165, -265)];
    this.createTable();
    this.createPreFab();
    // if (this.newItemLevel.string == 0) {
    //   this.newItem.color = "#8D8D8C";
    // }
  },
  start: function start() {},
  update: function update(dt) {
    this.positionCheck();
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
    // this.newItem = cc.instantiate(this.itemPrefab);
    // this.deckItem.addChild(this.newItem);
    // let newItemLevel = this.newItem.children[0].getComponent(cc.Label);
    // newItemLevel.string = 0;
    // let randomArr = [2, 4];
    // newItemLevel.string =
    //   randomArr[Math.floor(Math.random() * randomArr.length)];
    // let itemPos = this.posArr[Math.floor(Math.random() * this.posArr.length)];
    // cc.log(itemPos);
    // this.newItem.position = itemPos;
    for (var i = 0; i < 16; i++) {
      this.newItem = cc.instantiate(this.itemPrefab);
      this.deckItem.addChild(this.newItem);
      this.newItem.children[0].getComponent(cc.Label).string = 0;
      this.indexArr.push(this.newItem);
      this.newItem.position = this.posArr[i];
    }
    // cc.log(this.deckItem.children);
    cc.log(this.indexArr);
    this.createRandomItem();
    this.createRandomItem();
  },
  createRandomItem: function createRandomItem() {
    var randomNumber = Math.floor(Math.random() * this.indexArr.length);
    if (this.indexArr[randomNumber].children[0].getComponent(cc.Label).string == 0) {
      this.indexArr[randomNumber].children[0].getComponent(cc.Label).string = 2;
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
        this.scoreLabel.string = "Score:\n" + this.score;
      }
    }
    this.checkForWin();
  },
  matchItemCol: function matchItemCol() {
    for (var i = 0; i < 12; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string === this.indexArr[i + 4].children[0].getComponent(cc.Label).string) {
        var matchTotal = parseInt(this.indexArr[i].children[0].getComponent(cc.Label).string) + parseInt(this.indexArr[i + 4].children[0].getComponent(cc.Label).string);
        this.indexArr[i].children[0].getComponent(cc.Label).string = matchTotal;
        this.indexArr[i + 4].children[0].getComponent(cc.Label).string = 0;
        this.score += matchTotal;
        this.scoreLabel.string = "Score:\n" + this.score;
      }
    }
    this.checkForWin();
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
    // let goRight = cc.moveBy(0.2, -this.limit * 2, 0);
    // this.item.runAction(goRight);
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

        var missingRow = 4 - filteredRow.length;
        var zeros = Array(missingRow).fill(0);

        var newRow = zeros.concat(filteredRow);

        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goLeft: function goLeft() {
    // let goLeft = cc.moveBy(0.2, this.limit * -2, 0);
    // this.item.runAction(goLeft);
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

        var missingRow = 4 - filteredRow.length;
        var zeros = Array(missingRow).fill(0);

        var newRow = filteredRow.concat(zeros);

        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goUp: function goUp() {
    // let goUp = cc.moveBy(0.2, 0, 330);
    // this.item.runAction(goUp);
    for (var i = 0; i < 4; i++) {
      var colOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
      var colTwo = this.indexArr[i + 4].children[0].getComponent(cc.Label).string;
      var colThree = this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      var colFour = this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      var cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];

      var filteredCol = cols.filter(function (num) {
        return num;
      });

      var missingCol = 4 - filteredCol.length;
      var zeros = Array(missingCol).fill(0);

      var newCol = filteredCol.concat(zeros);

      this.indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this.indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  goDown: function goDown() {
    // let goDown = cc.moveBy(0.2, 0, -330);
    // this.item.runAction(goDown);

    for (var i = 0; i < 4; i++) {
      var colOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
      var colTwo = this.indexArr[i + 4].children[0].getComponent(cc.Label).string;
      var colThree = this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      var colFour = this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      var cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];

      var filteredCol = cols.filter(function (num) {
        return num;
      });

      var missingCol = 4 - filteredCol.length;
      var zeros = Array(missingCol).fill(0);

      var newCol = zeros.concat(filteredCol);

      this.indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this.indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  checkForWin: function checkForWin() {
    for (var i = 0; i < this.indexArr.length; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 2048) {
        cc.log("You Win!");
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
      cc.log("You Lose!");
    }
  }
});

cc._RF.pop();