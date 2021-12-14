const Emitter = require("mEmitter");
cc.Class({
  extends: cc.Component,

  properties: {
    isMove: true,
    limit: 165,
    newItem: null,
    item: cc.Node,
    table: cc.Node,
    tableChild: cc.Prefab,
    itemPrefab: cc.Prefab,
    deckItem: cc.Node,

    posArr: [],
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent("DOWN", this.goDown.bind(this));
    Emitter.instance.registerEvent("UP", this.goUp.bind(this));
    Emitter.instance.registerEvent("LEFT", this.goRight.bind(this));
    Emitter.instance.registerEvent("RIGHT", this.goLeft.bind(this));
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
    let itemPos = this.posArr[Math.floor(Math.random() * this.posArr.length)];
    cc.log(itemPos);

    // for (let i = 0; i <= posArr.length; i++) {
    //   for (let j = 0; i <= posArr.length; j++) {}
    // }

    this.newItem = cc.instantiate(this.itemPrefab);
    this.deckItem.addChild(this.newItem);

    this.newItem.position = itemPos;
  },
  matchItem() {
    this.newItem.getComponent(cc.Label);
    for (let i = 0; i <= 2; i++) {
      cc.warn(this.newItem.string);
      if (this.newItem.children[0] == this.newItem.children[1]) {
        cc.log("Match");
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
  goDown() {
    cc.tween(this.item)
      .by(0.2, { position: cc.v2(0, -330) })
      .start();
    this.createPreFab();
    // this.matchItem();
  },
  goUp() {
    cc.tween(this.item)
      .by(0.2, { position: cc.v2(0, 330) })
      .start();
    this.createPreFab();
  },
  goRight() {
    cc.tween(this.item)
      .by(0.2, { position: cc.v2(-this.limit * 2, 0) })
      .start();
    this.createPreFab();
  },
  goLeft() {
    cc.tween(this.item)
      .by(0.2, { position: cc.v2(this.limit * 2, 0) })
      .start();
    this.createPreFab();
  },
});