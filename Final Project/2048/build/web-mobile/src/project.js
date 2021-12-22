window.__require=function t(e,n,i){function r(o,s){if(!n[o]){if(!e[o]){var a=o.split("/");if(a=a[a.length-1],!e[a]){var h="function"==typeof __require&&__require;if(!s&&h)return h(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+o+"'")}}var l=n[o]={exports:{}};e[o][0].call(l.exports,function(t){return r(e[o][1][t]||t)},l,l.exports,t,e,n,i)}return n[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,e,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function c(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if(!c(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,n,i,c,a,h;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var l=new Error('Uncaught, unspecified "error" event. ('+e+")");throw l.context=e,l}if(s(n=this._events[t]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),n.apply(this,c)}else if(o(n))for(c=Array.prototype.slice.call(arguments,1),i=(h=n.slice()).length,a=0;a<i;a++)h[a].apply(this,c);return!0},i.prototype.addListener=function(t,e){var n;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(n=s(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(t,e){if(!r(e))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(t,i),n||(n=!0,e.apply(this,arguments))}return i.listener=e,this.on(t,i),this},i.prototype.removeListener=function(t,e){var n,i,c,s;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(c=(n=this._events[t]).length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(s=c;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){i=s;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},i.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},i.listenerCount=function(t,e){return t.listenerCount(e)}},{}],buttonController:[function(t,e,n){"use strict";cc._RF.push(e,"5ccc2Rf8tZC6oGlKIRDprU2","buttonController");var i=t("mEmitter");cc.Class({extends:cc.Component,properties:{startBtn:cc.Button,leaderBoardStartBtn:cc.Button,quitStartBtn:cc.Button,tutorialBtn:cc.Button,leaderBoardBtn:cc.Button,musicOnBtn:cc.Button,musicOffBtn:cc.Button,effectOnBtn:cc.Button,effectOffBtn:cc.Button,closeBtn:cc.Button,closeLeaderBoardBtn:cc.Button,newGameBtn:cc.Button,backBtn:cc.Button,gameOverButton:cc.Button,effectOnNode:cc.Node,effectOffNode:cc.Node,musicOnNode:cc.Node,musicOffNode:cc.Node,backgroundSound:cc.AudioSource,effectSound:cc.AudioSource,clickSound:cc.AudioSource,matchSound:cc.AudioSource},onLoad:function(){this.startBtn.node.on("click",this.startEvent,this),this.leaderBoardStartBtn.node.on("click",this.leaderBoardEvent,this),this.quitStartBtn.node.on("click",this.quitEvent,this),this.tutorialBtn.node.on("click",this.tutorialEvent,this),this.leaderBoardBtn.node.on("click",this.leaderBoardEvent,this),this.closeBtn.node.on("click",this.closeTutorialEvent,this),this.closeLeaderBoardBtn.node.on("click",this.closeLeaderBoardEvent,this),this.musicOnBtn.node.on("click",this.musicOnEvent,this),this.musicOffBtn.node.on("click",this.musicOffEvent,this),this.effectOnBtn.node.on("click",this.effectOnSoundEvent,this),this.effectOffBtn.node.on("click",this.effectOffSoundEvent,this),this.newGameBtn.node.on("click",this.newGameEvent,this),this.backBtn.node.on("click",this.backEvent,this),this.gameOverButton.node.on("click",this.playAgainEvent,this),i.instance.registerEvent("MOVE SOUND",this.moveSound.bind(this)),i.instance.registerEvent("MATCH SOUND",this.matchSoundEvent.bind(this))},start:function(){},update:function(t){},moveSound:function(){this.effectSound.play()},startEvent:function(){i.instance.emit("START GAME"),this.clickSound.play(),this.backgroundSound.play()},leaderBoardEvent:function(){i.instance.emit("LEADER BOARD"),this.clickSound.play()},closeLeaderBoardEvent:function(){i.instance.emit("CLOSE LEADER BOARD"),this.clickSound.play()},tutorialEvent:function(){i.instance.emit("TUTORIAL"),this.clickSound.play()},closeTutorialEvent:function(){i.instance.emit("CLOSE TUTORIAL"),this.clickSound.play()},musicOnEvent:function(){this.musicOnNode.active=!1,this.musicOffNode.active=!0,this.backgroundSound.pause(),this.clickSound.play()},musicOffEvent:function(){this.musicOnNode.active=!0,this.musicOffNode.active=!1,this.backgroundSound.play(),this.clickSound.play()},effectOnSoundEvent:function(){this.effectOnNode.active=!1,this.effectOffNode.active=!0,this.effectSound.mute=!0,this.matchSound.mute=!0,this.clickSound.play()},effectOffSoundEvent:function(){this.effectOnNode.active=!0,this.effectOffNode.active=!1,this.effectSound.mute=!1,this.matchSound.mute=!1,this.clickSound.play()},playAgainEvent:function(){i.instance.emit("PLAY AGAIN"),this.clickSound.play()},newGameEvent:function(){i.instance.emit("NEW GAME"),this.clickSound.play()},quitEvent:function(){cc.game.end(),this.clickSound.play()},backEvent:function(){i.instance.emit("BACK"),this.backgroundSound.pause()},matchSoundEvent:function(){this.matchSound.play()}}),cc._RF.pop()},{mEmitter:"mEmitter"}],keyController:[function(t,e,n){"use strict";cc._RF.push(e,"c1a47biIDJK/YjrAM/Aoa/W","keyController");var i=t("mEmitter");cc.Class({extends:cc.Component,properties:{keyMove:!0,timer:0,count:30},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),i.instance.registerEvent("DISABLE KEY",this.disableKey.bind(this)),i.instance.registerEvent("KEY DOWN",this.keyDown.bind(this)),i.instance.registerEvent("KEY UP",this.keyUp.bind(this)),i.instance.registerEvent("KEY RIGHT",this.keyRight.bind(this)),i.instance.registerEvent("KEY LEFT",this.keyLeft.bind(this))},start:function(){},update:function(t){},onKeyDown:function(t){if(this.keyMove)switch(t.keyCode){case cc.macro.KEY.down:this.keyDown();break;case cc.macro.KEY.up:this.keyUp();break;case cc.macro.KEY.right:this.keyRight();break;case cc.macro.KEY.left:this.keyLeft()}},keyDown:function(){this.goDown(),this.matchItemCol(),this.goDown(),this.createRandomItem(),this.colorCheck()},keyUp:function(){this.goUp(),this.matchItemCol(),this.goUp(),this.createRandomItem(),this.colorCheck()},keyRight:function(){this.goRight(),this.matchItemRow(),this.goRight(),this.createRandomItem(),this.colorCheck()},keyLeft:function(){this.goLeft(),this.matchItemRow(),this.goLeft(),this.createRandomItem(),this.colorCheck()},colorCheck:function(){i.instance.emit("COLOR CHECK")},matchItemRow:function(){i.instance.emit("MATCH ROW")},matchItemCol:function(){i.instance.emit("MATCH COL")},createRandomItem:function(){i.instance.emit("CREATE RANDOM ITEM")},moveSound:function(){i.instance.emit("MOVE SOUND")},goDown:function(){i.instance.emit("DOWN"),this.moveSound()},goUp:function(){i.instance.emit("UP"),this.moveSound()},goRight:function(){i.instance.emit("RIGHT"),this.moveSound()},goLeft:function(){i.instance.emit("LEFT"),this.moveSound()},disableKey:function(t){this.keyMove=t}}),cc._RF.pop()},{mEmitter:"mEmitter"}],mEmitter:[function(t,e,n){"use strict";cc._RF.push(e,"f0a211Il2pEmq6hLM6ooITv","mEmitter");var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=t("events"),o=function(){function t(){r(this,t),this._emiter=new c,this._emiter.setMaxListeners(100)}return i(t,[{key:"emit",value:function(){var t;(t=this._emiter).emit.apply(t,arguments)}},{key:"registerEvent",value:function(t,e){this._emiter.on(t,e)}},{key:"registerOnce",value:function(t,e){this._emiter.once(t,e)}},{key:"removeEvent",value:function(t,e){this._emiter.removeListener(t,e)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,t.instance=null}}]),t}();o.instance=null,e.exports=o,cc._RF.pop()},{events:1}],mainController:[function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}cc._RF.push(e,"a931eIrLgJP6KL5OjZY//y9","mainController");var r=t("mEmitter");cc.Class({extends:cc.Component,properties:{_score:0,best:[],_newItem:null,_timer:0,mainCamera:cc.Node,title:cc.Node,notification:cc.Node,notificationLabel:cc.RichText,scoreContainer:cc.Node,scoreLabel:cc.Label,scoreUpdatePrefab:cc.Prefab,bestLabel:cc.Label,item:cc.Node,table:cc.Node,tableChild:cc.Prefab,itemPrefab:cc.Prefab,deckItem:cc.Node,tutorialForm:cc.Node,tutorialFormFlag:!1,leaderBoardForm:cc.Node,leaderBoardFormFlag:!1,leaderBoardItemPrefab:cc.Prefab,gameOverForm:cc.Node,gameOverParticles:cc.Node,gameOverSadFace:cc.Node,gameOverHappyFace:cc.Node,gameOverLabel:cc.Label,gameOverMenu:cc.Node,gameOverEditBox:cc.EditBox,_posArr:[],_indexArr:[]},onLoad:function(){r.instance=new r,r.instance.registerEvent("DOWN",this.goDown.bind(this)),r.instance.registerEvent("UP",this.goUp.bind(this)),r.instance.registerEvent("RIGHT",this.goRight.bind(this)),r.instance.registerEvent("LEFT",this.goLeft.bind(this)),r.instance.registerEvent("CREATE RANDOM ITEM",this.createRandomItem.bind(this)),r.instance.registerEvent("MATCH ROW",this.matchItemRow.bind(this)),r.instance.registerEvent("MATCH COL",this.matchItemCol.bind(this)),r.instance.registerEvent("NEW GAME",this.newGameEvent.bind(this)),r.instance.registerEvent("TUTORIAL",this.tutorialEvent.bind(this)),r.instance.registerEvent("CLOSE TUTORIAL",this.closeTutorialEvent.bind(this)),r.instance.registerEvent("LEADER BOARD",this.leaderBoardEvent.bind(this)),r.instance.registerEvent("CLOSE LEADER BOARD",this.closeLeaderBoardEvent.bind(this)),r.instance.registerEvent("COLOR CHECK",this.colorCheck.bind(this)),r.instance.registerEvent("PLAY AGAIN",this.playAgainEvent.bind(this)),r.instance.registerEvent("START GAME",this.startGameEvent.bind(this)),r.instance.registerEvent("BACK",this.backEvent.bind(this)),this._posArr=[cc.v2(-165,65),cc.v2(-55,65),cc.v2(55,65),cc.v2(165,65),cc.v2(-165,-45),cc.v2(-55,-45),cc.v2(55,-45),cc.v2(165,-45),cc.v2(-165,-155),cc.v2(55,-155),cc.v2(-55,-155),cc.v2(165,-155),cc.v2(-165,-265),cc.v2(-55,-265),cc.v2(55,-265),cc.v2(165,-265)],this.createTable(),this.createPreFab(),this.colorCheck(),this.updateBestScore()},start:function(){},update:function(t){500==this._timer?this.notificationEvent():this._timer++,this.notificationLabel.string="<color=#ffffff>Best Score is: </c><color=#0fffff>"+this.bestLabel.string+" </color><color=#ffffff>!!!</c>"},createTable:function(){for(var t=1;t<=4;t++)for(var e=1;e<=4;e++){var n=cc.instantiate(this.tableChild);this.table.addChild(n)}},createPreFab:function(){for(var t=0;t<16;t++)this._newItem=cc.instantiate(this.itemPrefab),this.deckItem.addChild(this._newItem),this._newItem.children[0].getComponent(cc.Label).string=0,this._indexArr.push(this._newItem),this._newItem.position=this._posArr[t];this.colorCheck(),this.createRandomItem(),this.createRandomItem()},createRandomItem:function(){var t=Math.floor(Math.random()*this._indexArr.length);if(0==this._indexArr[t].children[0].getComponent(cc.Label).string){this._indexArr[t].children[0].getComponent(cc.Label).string=2,this._indexArr[t].setScale(.3);var e=cc.scaleTo(.2,1);this._indexArr[t].runAction(e),this.checkForLose()}else this.createRandomItem()},matchItemRow:function(){for(var t=0;t<15;t++)if(this._indexArr[t].children[0].getComponent(cc.Label).string===this._indexArr[t+1].children[0].getComponent(cc.Label).string){var e=parseInt(this._indexArr[t].children[0].getComponent(cc.Label).string)+parseInt(this._indexArr[t+1].children[0].getComponent(cc.Label).string);this._indexArr[t].children[0].getComponent(cc.Label).string=e,this._indexArr[t+1].children[0].getComponent(cc.Label).string=0,this._score+=e,this.scoreLabel.string=this._score,this.scoreUpdate(e)}this.checkForWin()},matchItemCol:function(){for(var t=0;t<12;t++)if(this._indexArr[t].children[0].getComponent(cc.Label).string===this._indexArr[t+4].children[0].getComponent(cc.Label).string){var e=parseInt(this._indexArr[t].children[0].getComponent(cc.Label).string)+parseInt(this._indexArr[t+4].children[0].getComponent(cc.Label).string);this._indexArr[t].children[0].getComponent(cc.Label).string=0,this._indexArr[t+4].children[0].getComponent(cc.Label).string=e,this._score+=e,this.scoreLabel.string=this._score,this.scoreUpdate(e)}this.checkForWin()},scoreUpdate:function(t){if(0!=t){var e=cc.instantiate(this.scoreUpdatePrefab);this.scoreContainer.addChild(e),e.children[0].getComponent(cc.Label).string="+"+t;var n=cc.sequence(cc.moveTo(.5,0,50),cc.fadeOut(.5),cc.delayTime(1),cc.callFunc(function(){e.destroy()}));n.easing(cc.easeQuadraticActionOut()),e.runAction(n),r.instance.emit("MATCH SOUND")}},colorCheck:function(){var t=new cc.Color(119,110,101),e=new cc.Color(255,255,255),n=new cc.Color(204,193,179),i=new cc.Color(238,228,218),r=new cc.Color(237,224,200),c=new cc.Color(242,177,120),o=new cc.Color(245,150,98),s=new cc.Color(246,125,95),a=new cc.Color(246,94,59),h=new cc.Color(237,207,113),l=new cc.Color(237,204,97),d=new cc.Color(237,200,80),u=new cc.Color(237,196,62),m=new cc.Color(237,194,45);this.colorNode(0,n,n),this.colorNode(2,i,t),this.colorNode(4,r,t),this.colorNode(8,c,e),this.colorNode(16,o,e),this.colorNode(32,s,e),this.colorNode(64,a,e),this.colorNode(128,h,e),this.colorNode(256,l,e),this.colorNode(512,d,e),this.colorNode(1024,u,e),this.colorNode(2048,m,e)},colorNode:function(t,e,n){for(var i=0;i<=15;i++)this._indexArr[i].children[0].getComponent(cc.Label).string==t&&(this._indexArr[i].color=e,this._indexArr[i].children[0].color=n,this._indexArr[i].children[0].getComponent(cc.LabelOutline).color=n)},goRight:function(){for(var t=0;t<16;t++)if(t%4==0){var e=this._indexArr[t].children[0].getComponent(cc.Label).string,n=this._indexArr[t+1].children[0].getComponent(cc.Label).string,i=this._indexArr[t+2].children[0].getComponent(cc.Label).string,r=this._indexArr[t+3].children[0].getComponent(cc.Label).string,c=[parseInt(e),parseInt(n),parseInt(i),parseInt(r)].filter(function(t){return t}),o=Array(4-c.length).fill(0).concat(c);this._indexArr[t].children[0].getComponent(cc.Label).string=o[0],this._indexArr[t+1].children[0].getComponent(cc.Label).string=o[1],this._indexArr[t+2].children[0].getComponent(cc.Label).string=o[2],this._indexArr[t+3].children[0].getComponent(cc.Label).string=o[3]}},goLeft:function(){for(var t=0;t<16;t++)if(t%4==0){var e=this._indexArr[t].children[0].getComponent(cc.Label).string,n=this._indexArr[t+1].children[0].getComponent(cc.Label).string,i=this._indexArr[t+2].children[0].getComponent(cc.Label).string,r=this._indexArr[t+3].children[0].getComponent(cc.Label).string,c=[parseInt(e),parseInt(n),parseInt(i),parseInt(r)].filter(function(t){return t}),o=Array(4-c.length).fill(0),s=c.concat(o);this._indexArr[t].children[0].getComponent(cc.Label).string=s[0],this._indexArr[t+1].children[0].getComponent(cc.Label).string=s[1],this._indexArr[t+2].children[0].getComponent(cc.Label).string=s[2],this._indexArr[t+3].children[0].getComponent(cc.Label).string=s[3]}},goUp:function(){for(var t=0;t<4;t++){var e=this._indexArr[t].children[0].getComponent(cc.Label).string,n=this._indexArr[t+4].children[0].getComponent(cc.Label).string,i=this._indexArr[t+8].children[0].getComponent(cc.Label).string,r=this._indexArr[t+12].children[0].getComponent(cc.Label).string,c=[parseInt(e),parseInt(n),parseInt(i),parseInt(r)].filter(function(t){return t}),o=Array(4-c.length).fill(0),s=c.concat(o);this._indexArr[t].children[0].getComponent(cc.Label).string=s[0],this._indexArr[t+4].children[0].getComponent(cc.Label).string=s[1],this._indexArr[t+8].children[0].getComponent(cc.Label).string=s[2],this._indexArr[t+12].children[0].getComponent(cc.Label).string=s[3]}},goDown:function(){for(var t=0;t<4;t++){var e=this._indexArr[t].children[0].getComponent(cc.Label).string,n=this._indexArr[t+4].children[0].getComponent(cc.Label).string,i=this._indexArr[t+8].children[0].getComponent(cc.Label).string,r=this._indexArr[t+12].children[0].getComponent(cc.Label).string,c=[parseInt(e),parseInt(n),parseInt(i),parseInt(r)].filter(function(t){return t}),o=Array(4-c.length).fill(0).concat(c);this._indexArr[t].children[0].getComponent(cc.Label).string=o[0],this._indexArr[t+4].children[0].getComponent(cc.Label).string=o[1],this._indexArr[t+8].children[0].getComponent(cc.Label).string=o[2],this._indexArr[t+12].children[0].getComponent(cc.Label).string=o[3]}},checkForWin:function(){for(var t=0;t<this._indexArr.length;t++)128==this._indexArr[t].children[0].getComponent(cc.Label).string&&(this.gameOverWinEvent(),this.best.push(this.scoreLabel.string),cc.sys.localStorage.setItem("best",JSON.stringify(this.best)),this.bestLabel.string=Math.max.apply(Math,i(JSON.parse(cc.sys.localStorage.getItem("best")))))},checkForLose:function(){for(var t=0,e=0;e<this._indexArr.length;e++)0==this._indexArr[e].children[0].getComponent(cc.Label).string&&t++;0===t&&this.gameOverLoseEvent()},startGameEvent:function(){var t=cc.moveTo(.5,-500,0);this.mainCamera.runAction(t);var e=cc.spawn(cc.moveTo(.5,-600,300),cc.scaleTo(.5,.8));this.title.runAction(e),this.newGameEvent()},backEvent:function(){var t=cc.moveTo(.5,0,0);this.mainCamera.runAction(t);var e=cc.spawn(cc.moveTo(.5,0,200),cc.scaleTo(.5,1));this.title.runAction(e)},gameOverWinEvent:function(){this.gameOverForm.active=!0,this.gameOverForm.setScale(0,0);var t=cc.scaleTo(.5,1);this.gameOverForm.runAction(t),this.gameOverParticles.active=!0,this.gameOverHappyFace.active=!0,this.gameOverSadFace.active=!1,this.gameOverMenu.active=!0,this.gameOverLabel.string="You Win!",this.disableKey(!1),this.disableTouch(!1)},gameOverLoseEvent:function(){this.gameOverForm.active=!0,this.gameOverForm.setScale(0,0);var t=cc.scaleTo(.5,1);this.gameOverForm.runAction(t),this.gameOverParticles.active=!1,this.gameOverHappyFace.active=!1,this.gameOverSadFace.active=!0,this.gameOverMenu.active=!1,this.gameOverLabel.string="Game Over!",this.disableKey(!1),this.disableTouch(!1)},newGameEvent:function(){this.deckItem.removeAllChildren(this._newItem),this._score=0,this.scoreLabel.string=this._score,this._indexArr=[],this.createPreFab(),this.colorCheck(),this.gameOverForm.active=!1,this.disableKey(!0),this.disableTouch(!0)},tutorialEvent:function(){if(0==this.tutorialFormFlag){this.tutorialFormFlag=!0,this.tutorialForm.active=!0,this.tutorialForm.setScale(0,0),this.tutorialForm.setPosition(-425,320);var t=cc.spawn(cc.scaleTo(.5,1),cc.moveTo(.5,-505,-50));this.tutorialForm.runAction(t),this.disableKey(!1),this.disableTouch(!1)}else this.closeTutorialEvent()},closeTutorialEvent:function(){var t=cc.spawn(cc.scaleTo(.5,0),cc.moveTo(.5,-425,320));this.tutorialForm.runAction(t),this.tutorialFormFlag=!1,this.tutorialForm.getComponent(cc.PageView).scrollToPage(0,.5),this.disableKey(!0),this.disableTouch(!0)},leaderBoardEvent:function(){if(0==this.leaderBoardFormFlag){this.leaderBoardFormFlag=!0,this.leaderBoardForm.active=!0,this.leaderBoardForm.setScale(0,0),this.leaderBoardForm.setPosition(-415,275);var t=cc.spawn(cc.scaleTo(.5,1),cc.moveTo(.5,-505,-50));this.leaderBoardForm.runAction(t),this.disableKey(!1),this.disableTouch(!1)}else this.closeLeaderBoardEvent()},closeLeaderBoardEvent:function(){var t=cc.spawn(cc.scaleTo(.5,0),cc.moveTo(.5,-425,275));this.leaderBoardForm.runAction(t),this.leaderBoardFormFlag=!1,this.disableKey(!0),this.disableTouch(!0)},playAgainEvent:function(){var t=cc.instantiate(this.leaderBoardItemPrefab);this.leaderBoardForm.children[2].children[0].addChild(t),t.getComponent(cc.Label).string="______\u2606\u2606\u2606\u2606\u2606______ \n "+this.gameOverEditBox.string+" : "+this._score,this.gameOverEditBox.string="",this.newGameEvent()},updateBestScore:function(){this.bestLabel.string=Math.max.apply(Math,i(JSON.parse(cc.sys.localStorage.getItem("best"))))},notificationEvent:function(){this.notification.setPosition(1500,300);var t=cc.moveTo(10,-1500,300);this.notification.runAction(t),this._timer=0},disableKey:function(t){r.instance.emit("DISABLE KEY",t)},disableTouch:function(t){r.instance.emit("DISABLE TOUCH",t)}}),cc._RF.pop()},{mEmitter:"mEmitter"}],touchController:[function(t,e,n){"use strict";cc._RF.push(e,"b998ftnAXdPiKWXt0NnAPHA","touchController");var i=t("mEmitter");cc.Class({extends:cc.Component,properties:{touchNode:cc.Node,_xStart:0,_xEnd:0,_yStart:0,_yEnd:0,canTouch:!0},onLoad:function(){this.touchNode.on(cc.Node.EventType.TOUCH_START,this.touchStart,this),this.touchNode.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this),i.instance.registerEvent("DISABLE TOUCH",this.disableTouch.bind(this))},start:function(){},update:function(t){},touchStart:function(t){this._xStart=t.getLocationX(),this._yStart=t.getLocationY()},touchEnd:function(t){this._xEnd=t.getLocationX(),this._yEnd=t.getLocationY(),this.touchMove()},touchMove:function(){this.canTouch&&(null!=this._xStart&&null!=this._yStart&&null!=this._xEnd&&null!=this._yEnd?Math.abs(this._xEnd-this._xStart)>Math.abs(this._yEnd-this._yStart)?this._xEnd>this._xStart?i.instance.emit("KEY RIGHT"):i.instance.emit("KEY LEFT"):this._yEnd>this._yStart?i.instance.emit("KEY UP"):i.instance.emit("KEY DOWN"):cc.error("ERROR!!!"))},disableTouch:function(t){this.canTouch=t}}),cc._RF.pop()},{mEmitter:"mEmitter"}]},{},["buttonController","keyController","mEmitter","mainController","touchController"]);