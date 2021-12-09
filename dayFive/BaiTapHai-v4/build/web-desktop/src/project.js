window.__require=function t(e,i,n){function s(o,c){if(!i[o]){if(!e[o]){var h=o.split("/");if(h=h[h.length-1],!e[h]){var a="function"==typeof __require&&__require;if(!c&&a)return a(h,!0);if(r)return r(h,!0);throw new Error("Cannot find module '"+o+"'")}}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){return s(e[o][1][t]||t)},u,u.exports,t,e,i,n)}return i[o].exports}for(var r="function"==typeof __require&&__require,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(t,e,i){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(t){return"function"==typeof t}function r(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function c(t){return void 0===t}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!r(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,i,n,r,h,a;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(c(i=this._events[t]))return!1;if(s(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:r=Array.prototype.slice.call(arguments,1),i.apply(this,r)}else if(o(i))for(r=Array.prototype.slice.call(arguments,1),n=(a=i.slice()).length,h=0;h<n;h++)a[h].apply(this,r);return!0},n.prototype.addListener=function(t,e){var i;if(!s(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,s(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(i=c(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!s(e))throw TypeError("listener must be a function");var i=!1;function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var i,n,r,c;if(!s(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=(i=this._events[t]).length,n=-1,i===e||s(i.listener)&&i.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(i)){for(c=r;c-- >0;)if(i[c]===e||i[c].listener&&i[c].listener===e){n=c;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[t]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(s(i=this._events[t]))this.removeListener(t,i);else if(i)for(;i.length;)this.removeListener(t,i[i.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?s(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(s(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},{}],buttonController:[function(t,e,i){"use strict";cc._RF.push(e,"a35bc4W925AbZc6U6UlY3Bg","buttonController");var n=t("mEmitter");cc.Class({extends:cc.Component,properties:{leftBtn:cc.Button,rightBtn:cc.Button,jumpBtn:cc.Button,resetBtn:cc.Button},onLoad:function(){this.leftBtn.node.on("click",this.goLeft,this),this.rightBtn.node.on("click",this.goRight,this),this.jumpBtn.node.on("click",this.goJump,this),this.resetBtn.node.on("click",this.resetPos,this),n.instance.registerEvent("DISABLE",this.disableBtn.bind(this))},start:function(){},update:function(t){},goLeft:function(){n.instance.emit("LEFT")},goRight:function(){n.instance.emit("RIGHT")},goJump:function(){n.instance.emit("JUMP")},resetPos:function(){n.instance.emit("RESET")},disableBtn:function(t){this.leftBtn.interactable=t,this.rightBtn.interactable=t,this.jumpBtn.interactable=t}}),cc._RF.pop()},{mEmitter:"mEmitter"}],keyController:[function(t,e,i){"use strict";cc._RF.push(e,"c6815jdGDpOYbGVKQJ55IKv","keyController");var n=t("mEmitter");cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyLeft,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyRight,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyUp,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},start:function(){},update:function(t){},onKeyLeft:function(t){switch(t.keyCode){case cc.macro.KEY.left:this.goLeft();case cc.macro.KEY.a:this.goLeft()}},onKeyRight:function(t){switch(t.keyCode){case cc.macro.KEY.right:this.goRight();case cc.macro.KEY.d:this.goRight()}},onKeyUp:function(t){switch(t.keyCode){case cc.macro.KEY.up:this.goJump();case cc.macro.KEY.w:this.goJump()}},onKeyDown:function(t){switch(t.keyCode){case cc.macro.KEY.down:this.resetPos();case cc.macro.KEY.s:this.resetPos()}},goLeft:function(){n.instance.emit("LEFT")},goRight:function(){n.instance.emit("RIGHT")},goJump:function(){n.instance.emit("JUMP")},resetPos:function(){n.instance.emit("RESET")}}),cc._RF.pop()},{mEmitter:"mEmitter"}],mEmitter:[function(t,e,i){"use strict";cc._RF.push(e,"da769ZLoytAgrUZSTeg93Up","mEmitter");var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=t("events"),o=function(){function t(){s(this,t),this._emiter=new r,this._emiter.setMaxListeners(100)}return n(t,[{key:"emit",value:function(){var t;(t=this._emiter).emit.apply(t,arguments)}},{key:"registerEvent",value:function(t,e){this._emiter.on(t,e)}},{key:"registerOnce",value:function(t,e){this._emiter.once(t,e)}},{key:"removeEvent",value:function(t,e){this._emiter.removeListener(t,e)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,t.instance=null}}]),t}();o.instance=null,e.exports=o,cc._RF.pop()},{events:1}],mainController:[function(t,e,i){"use strict";cc._RF.push(e,"9dffegMTbdFA7rfltJFTQ5S","mainController");var n=t("mEmitter");cc.Class({extends:cc.Component,properties:{canMove:!0,goLeftFlag:!1,goRightFlag:!1,goJumpFlag:!1,counter:0,frames:40,limitX:377,mainItem:cc.Node},onLoad:function(){n.instance=new n,n.instance.registerEvent("LEFT",this.goLeft.bind(this)),n.instance.registerEvent("RIGHT",this.goRight.bind(this)),n.instance.registerEvent("JUMP",this.goJump.bind(this)),n.instance.registerEvent("RESET",this.resetPos.bind(this))},start:function(){},update:function(t){this.checkMove(),this.limitPos()},checkMove:function(){if(this.goLeftFlag||this.goRightFlag||this.goJumpFlag){if(this.counter>=this.frames)return this.disableButton(!0),void this.resetMove();this.goLeftFlag&&(this.mainItem.x-=2,this.mainItem.scaleX=1),this.goRightFlag&&(this.mainItem.x+=2,this.mainItem.scaleX=-1),this.goJumpFlag&&(this.counter<this.frames/2?this.mainItem.y+=5:this.mainItem.y-=5,this.counter>=this.frames/4&&this.counter<this.frames&&(this.mainItem.angle+=360/(3*this.frames/4))),this.disableButton(!1),this.counter++}},goLeft:function(){this.goLeftFlag=!0,this.counter=0},goRight:function(){this.goRightFlag=!0,this.counter=0},goJump:function(){this.goJumpFlag=!0,this.counter=0},resetPos:function(){this.mainItem.x=0,this.mainItem.y=-150,this.mainItem.scaleX=1,this.mainItem.angle=0},resetMove:function(){this.goLeftFlag=!1,this.goRightFlag=!1,this.goJumpFlag=!1},disableButton:function(t){n.instance.emit("DISABLE",t)},limitPos:function(){this.mainItem.x<=-this.limitX?this.mainItem.x=-this.limitX:this.mainItem.x>=this.limitX&&(this.mainItem.x=this.limitX)}}),cc._RF.pop()},{mEmitter:"mEmitter"}]},{},["buttonController","keyController","mEmitter","mainController"]);