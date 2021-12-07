(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0713bIqN1xCe58z8nrbkDwe', 'main', __filename);
// Script/main.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    signInUserNameFlag: false,
    signInPassWordFlag: false,

    userNameFlag: false,
    passWordFlag: false,
    confirmPassWordFlag: false,
    emailFlag: false,
    phoneNumberFlag: false,

    formRegisterFlag: false,
    formSuccessFlag: false,
    formMainFlag: false,

    infoAccount: [],
    infoList: [],
    accountNumber: 0,

    signInUserName: null,
    signInPassWord: null,
    userName: null,
    passWord: null,
    cfPassWord: null,
    email: null,
    phoneNumber: null,

    userNameEditBox: cc.EditBox,
    passWordEditBox: cc.EditBox,
    confirmPassWordEditBox: cc.EditBox,
    emailEditBox: cc.EditBox,
    phoneNumberEditBox: cc.EditBox,
    signInUserNameEditBox: cc.EditBox,
    signInPassWordEditBox: cc.EditBox,

    signInCheck: cc.Label,
    signInUserNameCheck: cc.Label,
    signInPassWordCheck: cc.Label,
    userNameCheck: cc.Label,
    passWordCheck: cc.Label,
    confirmPassWordCheck: cc.Label,
    emailCheck: cc.Label,
    phoneNumberCheck: cc.Label,

    createButton: cc.Button,
    listOfAccount: cc.Node,
    accountPrefab: cc.Prefab,

    userNameRichText: cc.RichText,
    passWordRichText: cc.RichText,
    emailRichText: cc.RichText,
    phoneNumberRichText: cc.RichText,

    createSound: cc.AudioSource,
    wrongSound: cc.AudioSource,

    formRegister: cc.Node,
    formSuccess: cc.Node,
    formMain: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.createButton.node.on("click", this.createNewAccount, this);
  },
  start: function start() {},
  update: function update(dt) {},
  validateUserName: function validateUserName() {
    this.userNameFlag = false;
    this.userName = this.userNameEditBox.string;
    if (this.userName == "" || this.userName.length < 5 || !/^[a-zA-Z0-9]+$/.test(this.userName)) {
      this.userNameCheck.string = "PLEASE CHECK USERNAME, MAX LENGTH OF 5!";
    } else {
      this.userNameCheck.string = "";
      this.userNameRichText.string = "<color=#ffffff>USER NAME: </c><color=#ff9900>" + this.userName + "</color>";
      this.userNameFlag = true;
    }
  },
  validatePassWord: function validatePassWord() {
    this.passWord = this.passWordEditBox.string;
    this.cfPassWord = this.confirmPassWordEditBox.string;
    if (this.passWord == "" || this.passWord.length < 8) {
      this.passWordFlag = false;
      this.passWordCheck.string = "PLEASE CHECK PASSWORD, MAX LENGTH OF 8!";
    } else {
      this.passWordCheck.string = "";
      this.passWordFlag = true;
    }
    if (this.cfPassWord == "" || this.passWord != this.cfPassWord) {
      this.confirmPassWordFlag = false;
      this.confirmPassWordCheck.string = "PLEASE CONFIRM PASSWORD!";
    } else {
      this.confirmPassWordCheck.string = "";
      this.passWordRichText.string = "<color=#ffffff>PASSWORD: </c><color=#ff9900>" + this.passWord + "</color>";
      this.confirmPassWordFlag = true;
    }
  },
  validateEmail: function validateEmail() {
    this.emailFlag = false;
    this.email = this.emailEditBox.string;
    var formatMail = /\S+@\S+\.\S+/;
    if (!formatMail.test(this.email)) {
      this.emailCheck.string = "PLEASE CHECK EMAIL!";
    } else {
      this.emailCheck.string = "";
      this.emailRichText.string = "<color=#ffffff>EMAIL: </c><color=#ff9900>" + this.email + "</color>";
      this.emailFlag = true;
    }
  },
  validatePhoneNumber: function validatePhoneNumber() {
    this.phoneNumberFlag = false;
    this.phoneNumber = this.phoneNumberEditBox.string;
    if (this.phoneNumber == "" || !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(this.phoneNumber)) {
      this.phoneNumberCheck.string = "PLEASE CHECK PHONENUMBER!";
    } else {
      this.phoneNumberCheck.string = "";
      this.phoneNumberRichText.string = "<color=#ffffff>PHONE NUMBER: </c><color=#ff9900>" + this.phoneNumber + "</color>";
      this.phoneNumberFlag = true;
    }
  },
  createNewAccount: function createNewAccount() {
    if (this.infoAccount.length == 0) {
      this.validateUserName();
      this.validatePassWord();
      this.validateEmail();
      this.validatePhoneNumber();
    }
    for (var i = 0; i <= this.infoAccount.length; i++) {
      if (this.userName == this.infoAccount[[i]]) {
        this.userNameFlag = false;
        this.userNameCheck.string = "THIS USER NAME HAS CREATED!";
      }
      if (this.email == this.infoAccount[[i]]) {
        this.emailFlag = false;
        this.emailCheck.string = "THIS EMAIL HAS CREATED!";
      }
      if (this.phoneNumber == this.infoAccount[[i]]) {
        this.phoneNumberFlag = false;
        this.phoneNumberCheck.string = "THIS PHONE NUMBER HAS CREATED!";
      }
    }
    if (this.userNameFlag && this.passWordFlag && this.confirmPassWordFlag && this.phoneNumberFlag && this.emailFlag) {
      this.activeFormSuccess();
      this.accountNumber += 1;
      var newAccount = cc.instantiate(this.accountPrefab);

      this.listOfAccount.addChild(newAccount);
      var stringPrefab = newAccount.getComponent(cc.Label);
      stringPrefab.string = "ACCOUNT: " + this.accountNumber + "\nUSER NAME: " + this.userName + "\nPASSWORD: " + this.passWord + "\nEMAIL: " + this.email + "\nPHONE NUMBER: " + this.phoneNumber + "\n      ";
      this.infoAccount = [this.userName, this.passWord, this.email, this.phoneNumber];

      this.infoList.push(this.infoAccount);
      this.createSound.play();

      cc.log(this.infoList);
    } else {
      this.wrongSound.play();
    }
  },
  activeFormSuccess: function activeFormSuccess() {
    this.formSuccess.active = true;
  },
  deActiveFormSuccess: function deActiveFormSuccess() {
    this.formSuccess.active = false;
    this.resetValue();
  },
  activeFormRegister: function activeFormRegister() {
    this.formRegister.active = true;
  },
  deActiveFormRegister: function deActiveFormRegister() {
    this.formRegister.active = false;
    this.resetValue();
  },
  activeFormMain: function activeFormMain() {
    this.formMain.active = true;
  },
  deActiveFormMain: function deActiveFormMain() {
    this.formMain.active = false;
  },
  validateSignInUserName: function validateSignInUserName() {
    this.signInUserName = this.signInUserNameEditBox.string;
    for (var i = 0; i <= this.infoAccount.length; i++) {
      if (this.signInUserName == this.infoAccount[i]) {
        this.signInCheck.string = "";
        this.signInUserNameCheck.string = "Correct UserName";
        this.signInUserNameFlag = true;
      } else {
        this.signInUserNameCheck.string = "";
        this.signInUserNameFlag = false;
      }
    }
  },
  validateSignInPassWordCheck: function validateSignInPassWordCheck() {
    this.signInPassWord = this.signInPassWordEditBox.string;
    for (var i = 0; i <= this.infoAccount.length; i++) {
      if (this.signInPassWord == this.infoAccount[i]) {
        this.signInCheck.string = "";
        this.signInPassWordCheck.string = "Correct PassWord";
        this.signInPassWordFlag = true;
      } else {
        this.signInPassWordCheck.string = "";
        this.signInPassWordFlag = false;
      }
    }
  },
  signInAccountCheck: function signInAccountCheck() {
    // if()
    if (this.signInUserNameFlag && this.signInPassWordFlag) {
      this.formMain.active = true;
    } else {
      this.signInCheck.string = "TO SIGN IN, PLEASE CREATE NEW ACCOUNT";
      this.formSuccess.active = false;
    }
  },
  resetValue: function resetValue() {
    this.userNameEditBox.string = "";
    this.passWordEditBox.string = "";
    this.confirmPassWordEditBox.string = "";
    this.emailEditBox.string = "";
    this.phoneNumberEditBox.string = "";
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
        //# sourceMappingURL=main.js.map
        