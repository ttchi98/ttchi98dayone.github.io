const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    canMove: false,
    limit: 165,
    score: 0,
    newItem: null,

    scoreLabel: cc.Label,
    item: cc.Node,
    table: cc.Node,
    tableChild: cc.Prefab,
    itemPrefab: cc.Prefab,
    deckItem: cc.Node,

    gameOverForm: cc.Node,
    gameOverLabel: cc.Label,

    posArr: [],
    indexArr: [],
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("DOWN", this.goDown.bind(this));
    Emitter.instance.registerEvent("UP", this.goUp.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goRight.bind(this));
    Emitter.instance.registerEvent("LEFT", this.goLeft.bind(this));
    Emitter.instance.registerEvent("CREATE RANDOM ITEM", this.createRandomItem.bind(this));
    Emitter.instance.registerEvent("MATCH ROW", this.matchItemRow.bind(this));
    Emitter.instance.registerEvent("MATCH COL", this.matchItemCol.bind(this));
    Emitter.instance.registerEvent("NEW GAME", this.newGameEvent.bind(this));

    this.posArr = [
      cc.v2(-165, 65),
      cc.v2(-55, 65),
      cc.v2(55, 65),
      cc.v2(165, 65),
      cc.v2(-165, -45),
      cc.v2(-55, -45),
      cc.v2(55, -45),
      cc.v2(165, -45),
      cc.v2(-165, -155),
      cc.v2(55, -155),
      cc.v2(-55, -155),
      cc.v2(165, -155),
      cc.v2(-165, -265),
      cc.v2(-55, -265),
      cc.v2(55, -265),
      cc.v2(165, -265),
    ];
    this.createTable();
    this.createPreFab();
    // if (this.newItemLevel.string == 0) {
    //   this.newItem.color = "#8D8D8C";
    // }
  },

  start() {},

  update(dt) {
    this.positionCheck();
  },
  createTable() {
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
        let newTableChild = cc.instantiate(this.tableChild);
        this.table.addChild(newTableChild);
      }
    }
  },
  createPreFab() {
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
    for (let i = 0; i < 16; i++) {
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
  createRandomItem() {
    let randomNumber = Math.floor(Math.random() * this.indexArr.length);
    if (this.indexArr[randomNumber].children[0].getComponent(cc.Label).string == 0) {
      this.indexArr[randomNumber].children[0].getComponent(cc.Label).string = 2;
      this.checkForLose();
    } else this.createRandomItem();
  },
  matchItemRow() {
    for (let i = 0; i < 15; i++) {
      if (
        this.indexArr[i].children[0].getComponent(cc.Label).string ===
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string
      ) {
        let matchTotal =
          parseInt(this.indexArr[i].children[0].getComponent(cc.Label).string) +
          parseInt(this.indexArr[i + 1].children[0].getComponent(cc.Label).string);
        this.indexArr[i].children[0].getComponent(cc.Label).string = matchTotal;
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = 0;
        this.score += matchTotal;
        this.scoreLabel.string = this.score;
      }
    }
    this.colorCheck();
    this.checkForWin();
  },
  matchItemCol() {
    for (let i = 0; i < 12; i++) {
      if (
        this.indexArr[i].children[0].getComponent(cc.Label).string ===
        this.indexArr[i + 4].children[0].getComponent(cc.Label).string
      ) {
        let matchTotal =
          parseInt(this.indexArr[i].children[0].getComponent(cc.Label).string) +
          parseInt(this.indexArr[i + 4].children[0].getComponent(cc.Label).string);
        this.indexArr[i].children[0].getComponent(cc.Label).string = 0;
        this.indexArr[i + 4].children[0].getComponent(cc.Label).string = matchTotal;
        this.score += matchTotal;
        this.scoreLabel.string = this.score;
      }
    }
    this.colorCheck();
    this.checkForWin();
  },
  colorCheck() {
    for (let i = 0; i <= 15; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 0) {
        this.indexArr[i].opacity = 230;
        this.indexArr[i].children[0].opacity = 230;
      } else if (this.indexArr[i].children[0].getComponent(cc.Label).string == 2) {
        this.indexArr[i].opacity = 220;
        this.indexArr[i].children[0].opacity = 220;
      }
    }
  },
  positionCheck() {
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
  goRight() {
    // let goRight = cc.moveBy(0.2, -this.limit * 2, 0);
    // this.item.runAction(goRight);
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let rowOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
        let rowTwo = this.indexArr[i + 1].children[0].getComponent(cc.Label).string;
        let rowThree = this.indexArr[i + 2].children[0].getComponent(cc.Label).string;
        let rowFour = this.indexArr[i + 3].children[0].getComponent(cc.Label).string;
        let rows = [parseInt(rowOne), parseInt(rowTwo), parseInt(rowThree), parseInt(rowFour)];

        let filteredRow = rows.filter((num) => num);
        let zeros = Array(4 - filteredRow.length).fill(0);

        let newRow = zeros.concat(filteredRow);

        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goLeft() {
    // let goLeft = cc.moveBy(0.2, this.limit * -2, 0);
    // this.item.runAction(goLeft);
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let rowOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
        let rowTwo = this.indexArr[i + 1].children[0].getComponent(cc.Label).string;
        let rowThree = this.indexArr[i + 2].children[0].getComponent(cc.Label).string;
        let rowFour = this.indexArr[i + 3].children[0].getComponent(cc.Label).string;
        let rows = [parseInt(rowOne), parseInt(rowTwo), parseInt(rowThree), parseInt(rowFour)];

        let filteredRow = rows.filter((num) => num);
        let zeros = Array(4 - filteredRow.length).fill(0);

        let newRow = filteredRow.concat(zeros);

        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goUp() {
    // let goUp = cc.moveBy(0.2, 0, 330);
    // this.item.runAction(goUp);
    for (let i = 0; i < 4; i++) {
      let colOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
      let colTwo = this.indexArr[i + 4].children[0].getComponent(cc.Label).string;
      let colThree = this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      let colFour = this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      let cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];

      let filteredCol = cols.filter((num) => num);
      let zeros = Array(4 - filteredCol.length).fill(0);

      let newCol = filteredCol.concat(zeros);

      this.indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this.indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },
  goDown() {
    // let goDown = cc.moveBy(0.2, 0, -330);
    // this.item.runAction(goDown);

    cc.log("Down");
    for (let i = 0; i < 4; i++) {
      let colOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
      let colTwo = this.indexArr[i + 4].children[0].getComponent(cc.Label).string;
      let colThree = this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string;
      let colFour = this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string;
      let cols = [parseInt(colOne), parseInt(colTwo), parseInt(colThree), parseInt(colFour)];
      cc.log(cols);

      let filteredCol = cols.filter((num) => num);
      let zeros = Array(4 - filteredCol.length).fill(0);

      let newCol = zeros.concat(filteredCol);

      this.indexArr[i].children[0].getComponent(cc.Label).string = newCol[0];
      this.indexArr[i + 4].children[0].getComponent(cc.Label).string = newCol[1];
      this.indexArr[i + 4 * 2].children[0].getComponent(cc.Label).string = newCol[2];
      this.indexArr[i + 4 * 3].children[0].getComponent(cc.Label).string = newCol[3];
    }
  },

  checkForWin() {
    for (let i = 0; i < this.indexArr.length; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 2048) {
        this.gameOverForm.active = true;
        this.gameOverLabel.string = "You Win!";
      }
    }
  },
  checkForLose() {
    let zeros = 0;
    for (let i = 0; i < this.indexArr.length; i++) {
      if (this.indexArr[i].children[0].getComponent(cc.Label).string == 0) {
        zeros++;
      }
    }
    if (zeros === 0) {
      this.gameOverForm.active = true;
      this.gameOverLabel.string = "Game Over!";
    }
  },
  newGameEvent() {
    this.deckItem.removeAllChildren(this.newItem);
    this.score = 0;
    this.scoreLabel.string = this.score;
    this.indexArr = [];
    this.createPreFab();
    this.gameOverForm.active = false;
  },
});
