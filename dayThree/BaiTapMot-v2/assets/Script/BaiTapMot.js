cc.Class({
  extends: cc.Component,

  properties: {
    userNameFlag: false,
    passWordFlag: false,
    confirmPassWordFlag: false,
    emailFlag: false,
    phoneNumberFlag: false,

    formRegisterFlag: false,
    formSuccessFlag: false,
    formMainFlag: false,

    inforMenu: [],
    inforAccount: [],

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

    userNameCheck: cc.Label,
    passWordCheck: cc.Label,
    confirmPassWordCheck: cc.Label,
    emailCheck: cc.Label,
    phoneNumberCheck: cc.Label,

    userNameRichText: cc.RichText,
    passWordRichText: cc.RichText,
    emailRichText: cc.RichText,
    phoneNumberRichText: cc.RichText,

    formRegister: cc.Node,
    formSuccess: cc.Node,
    formMain: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {},

  start() {},

  validateUserName() {
    this.userName = this.userNameEditBox.string;
    if (
      this.userName == "" ||
      this.userName.length < 5 ||
      !/^[a-zA-Z0-9]+$/.test(this.userName)
    ) {
      this.userNameCheck.string = "PLEASE CHECK USERNAME, MAX LENGTH OF 5!";
    } else {
      this.userNameCheck.string = "";
      this.userNameRichText.string = `<color=#ffffff>USER NAME: </c><color=#0fffff>${this.userName}</color>`;
      this.userNameFlag = true;
    }
  },
  validatePassWord() {
    this.passWord = this.passWordEditBox.string;
    this.cfPassWord = this.confirmPassWordEditBox.string;
    if (this.passWord == "" || this.passWord.length < 8) {
      this.passWordCheck.string = "PLEASE CHECK PASSWORD, MAX LENGTH OF 8!";
    }
    if (this.passWord.length >= 8) {
      this.passWordCheck.string = "";
    }
    if (this.cfPassWord == "" || this.passWord != this.cfPassWord) {
      this.confirmPassWordCheck.string = "PLEASE CONFIRM PASSWORD!";
    } else {
      this.confirmPassWordCheck.string = "";
      this.passWordRichText.string = `<color=#ffffff>PASSWORD: </c><color=#0fffff>${this.passWord}</color>`;
      this.passWordFlag = true;
    }
  },
  validateEmail() {
    this.emailFlag = false;

    this.email = this.emailEditBox.string;
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(this.email)) {
      this.emailCheck.string = "PLEASE CHECK EMAIL!";
    } else {
      this.emailCheck.string = "";
      this.emailRichText.string = `<color=#ffffff>EMAIL: </c><color=#0fffff>${this.email}</color>`;
      this.emailFlag = true;
    }
  },
  validatePhoneNumber() {
    this.phoneNumberFlag = false;
    this.phoneNumber = this.phoneNumberEditBox.string;
    if (
      this.phoneNumber == "" ||
      !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(this.phoneNumber)
    ) {
      this.phoneNumberCheck.string = "PLEASE CHECK PHONENUMBER!";
    } else {
      this.phoneNumberCheck.string = "";
      this.phoneNumberRichText.string = `<color=#ffffff>PHONE NUMBER: </c><color=#0fffff>${this.phoneNumber}</color>`;
      this.phoneNumberFlag = true;
    }
  },
  activeFormRegister() {
    this.formRegister.active = true;
  },
  deActiveFormRegister() {
    this.formRegister.active = false;
  },
  activeFormSuccess() {
    for (let i = 0; i <= this.inforAccount.length; i++) {
      if (this.userName == this.inforAccount[i]) {
        this.userNameFlag = false;
        this.userNameCheck.string = "THIS USER NAME HAS CREATED!";
      }
      if (this.email == this.inforAccount[i]) {
        this.emailFlag = false;
        this.emailCheck.string = "THIS EMAIL HAS CREATED!";
      }
      if (this.phoneNumber == this.inforAccount[i]) {
        this.phoneNumberFlag = false;
        this.phoneNumberCheck.string = "THIS PHONE NUMBER HAS CREATED!";
      }
    }
    if (
      this.userNameFlag &&
      this.passWordFlag &&
      this.phoneNumberFlag &&
      this.emailFlag
    ) {
      this.formSuccess.active = true;
      this.inforAccount.push([
        this.userName,
        this.passWord,
        this.email,
        this.phoneNumber,
      ]);
      cc.log(this.inforAccount);
    } else this.formSuccess.active = false;
  },
  deActiveFormSuccess() {
    this.formSuccess.active = false;
  },
  activeFormMain() {
    this.formMain.active = true;
  },
  deActiveFormMain() {
    this.formMain.active = false;
  },
  resetFlag() {
    this.userNameFlag = false;
    this.passWordFlag = false;
  },
  update(dt) {},
});
