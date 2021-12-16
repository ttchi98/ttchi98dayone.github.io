const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    canMove: false,
    limit: 165,
    newItem: null,
    item: cc.Node,
    table: cc.Node,
    tableChild: cc.Prefab,
    itemPrefab: cc.Prefab,
    deckItem: cc.Node,
    newItemLevel: null,

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
    Emitter.instance.registerEvent("MATCH", this.matchItem.bind(this));

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
    for (let i = 0; i <= 15; i++) {
      this.newItem = cc.instantiate(this.itemPrefab);
      this.deckItem.addChild(this.newItem);
      this.newItemLevel = this.newItem.children[0].getComponent(cc.Label);
      this.newItemLevel.string = 0;
      this.indexArr.push(this.newItem);
      this.newItem.position = this.posArr[i];
    }
    cc.log(this.indexArr);
    cc.log(this.newItemLevel);
    this.createRandomItem();
    this.createRandomItem();
    this.goLeft();
  },
  createRandomItem() {
    let randomNumber = Math.floor(Math.random() * this.indexArr.length);
    if (this.indexArr[randomNumber].children[0].getComponent(cc.Label).string == 0) {
      this.indexArr[randomNumber].children[0].getComponent(cc.Label).string = 2;
    } else this.createRandomItem();
  },
  matchItem() {
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
  moveController() {},
  goRight() {
    // let goRight = cc.moveBy(0.2, -this.limit * 2, 0);
    // this.item.runAction(goRight);
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let totalOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
        let totalTwo = this.indexArr[i + 1].children[0].getComponent(cc.Label).string;
        let totalThree = this.indexArr[i + 2].children[0].getComponent(cc.Label).string;
        let totalFour = this.indexArr[i + 3].children[0].getComponent(cc.Label).string;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

        let filteredRow = row.filter((num) => num);

        let missingRow = 4 - filteredRow.length;
        let zeros = Array(missingRow).fill(0);

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
        let totalOne = this.indexArr[i].children[0].getComponent(cc.Label).string;
        let totalTwo = this.indexArr[i + 1].children[0].getComponent(cc.Label).string;
        let totalThree = this.indexArr[i + 2].children[0].getComponent(cc.Label).string;
        let totalFour = this.indexArr[i + 3].children[0].getComponent(cc.Label).string;
        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

        let filteredRow = row.filter((num) => num);

        let missingRow = 4 - filteredRow.length;
        let zeros = Array(missingRow).fill(0);

        let newRow = filteredRow.concat(zeros);

        this.indexArr[i].children[0].getComponent(cc.Label).string = newRow[0];
        this.indexArr[i + 1].children[0].getComponent(cc.Label).string = newRow[1];
        this.indexArr[i + 2].children[0].getComponent(cc.Label).string = newRow[2];
        this.indexArr[i + 3].children[0].getComponent(cc.Label).string = newRow[3];
      }
    }
  },
  goUp() {
    let goUp = cc.moveBy(0.2, 0, 330);
    this.item.runAction(goUp);
  },
  goDown() {
    let goDown = cc.moveBy(0.2, 0, -330);
    this.item.runAction(goDown);
  },
});
