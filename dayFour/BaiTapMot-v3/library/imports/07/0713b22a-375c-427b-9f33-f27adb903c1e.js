"use strict";
cc._RF.push(module, '0713bIqN1xCe58z8nrbkDwe', 'main');
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
      this.userNameCheck.node.color = cc.Color.RED;
      this.userNameCheck.string = "PLEASE CHECK USERNAME, MAX LENGTH OF 5!";
    } else {
      this.userNameCheck.node.color = cc.Color.GREEN;
      this.userNameCheck.string = "VALID USERNAME";
      this.userNameRichText.string = "<color=#ffffff>USER NAME: </c><color=#ff9900>" + this.userName + "</color>";
      this.userNameFlag = true;
    }
  },
  validatePassWord: function validatePassWord() {
    this.passWord = this.passWordEditBox.string;
    this.cfPassWord = this.confirmPassWordEditBox.string;
    if (this.passWord == "" || this.passWord.length < 8) {
      this.passWordFlag = false;
      this.passWordCheck.node.color = cc.Color.RED;

      this.passWordCheck.string = "PLEASE CHECK PASSWORD, MAX LENGTH OF 8!";
    } else {
      this.passWordCheck.node.color = cc.Color.GREEN;
      this.passWordCheck.string = "VALID PASSWORD";
      this.passWordFlag = true;
    }
    if (this.cfPassWord == "" || this.passWord != this.cfPassWord) {
      this.confirmPassWordFlag = false;
      this.confirmPassWordCheck.node.color = cc.Color.RED;
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
      this.emailCheck.node.color = cc.Color.RED;
      this.emailCheck.string = "PLEASE CHECK EMAIL!";
    } else {
      this.emailCheck.node.color = cc.Color.GREEN;
      this.emailCheck.string = "VALID EMAIL";
      this.emailRichText.string = "<color=#ffffff>EMAIL: </c><color=#ff9900>" + this.email + "</color>";
      this.emailFlag = true;
    }
  },
  validatePhoneNumber: function validatePhoneNumber() {
    this.phoneNumberFlag = false;
    this.phoneNumber = this.phoneNumberEditBox.string;
    if (this.phoneNumber == "" || !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(this.phoneNumber)) {
      this.phoneNumberCheck.node.color = cc.Color.RED;
      this.phoneNumberCheck.string = "PLEASE CHECK PHONE NUMBER!";
    } else {
      this.phoneNumberCheck.node.color = cc.Color.GREEN;
      this.phoneNumberCheck.string = "VALID PHONE NUMBER";
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
        this.userNameCheck.node.color = cc.Color.RED;
        this.userNameCheck.string = "THIS USER NAME HAS CREATED!";
      }
      if (this.email == this.infoAccount[[i]]) {
        this.emailFlag = false;
        this.emailCheck.node.color = cc.Color.RED;
        this.emailCheck.string = "THIS EMAIL HAS CREATED!";
      }
      if (this.phoneNumber == this.infoAccount[[i]]) {
        this.phoneNumberFlag = false;
        this.phoneNumberCheck.node.color = cc.Color.RED;
        this.phoneNumberCheck.string = "THIS PHONE NUMBER HAS CREATED!";
      }
    }

    if (this.userNameFlag && this.passWordFlag && this.confirmPassWordFlag && this.emailFlag && this.phoneNumberFlag) {
      this.activeFormSuccess();
      this.createPreFab();
      this.infoAccount = [this.userName, this.passWord, this.email, this.phoneNumber];

      this.infoList.push(this.infoAccount);
      this.createSound.play();
    } else this.wrongSound.play();
  },
  createPreFab: function createPreFab() {
    this.accountNumber += 1;
    var newAccount = cc.instantiate(this.accountPrefab);
    this.listOfAccount.addChild(newAccount);
    var stringPrefab = newAccount.getComponent(cc.Label);
    stringPrefab.string = this.accountNumber + " | " + this.userName + " | " + this.passWord + " | " + this.email + " | " + this.phoneNumber + "\n      ";
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
        this.signInUserNameCheck.string = "CORRECT USERNAME";
        this.signInUserNameFlag = true;
        return;
      } else {
        this.signInUserNameCheck.string = "";
        this.signInUserNameFlag = false;
        return;
      }
    }
  },
  validateSignInPassWordCheck: function validateSignInPassWordCheck() {
    this.signInPassWord = this.signInPassWordEditBox.string;
    for (var i = 0; i <= this.infoAccount.length; i++) {
      if (this.signInPassWord == this.infoAccount[i]) {
        this.signInCheck.string = "";
        this.signInPassWordCheck.string = "CORRECT PASSWORD";
        this.signInPassWordFlag = true;
        return;
      } else {
        this.signInPassWordCheck.string = "";
        this.signInPassWordFlag = false;
        return;
      }
    }
  },
  signInAccountCheck: function signInAccountCheck() {
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
    this.userNameCheck.string = "";
    this.passWordCheck.string = "";
    this.confirmPassWordCheck.string = "";
    this.emailCheck.string = "";
    this.phoneNumberCheck.string = "";
  }
});

cc._RF.pop();