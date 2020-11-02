import tip from './tip';
const phoneReg= /^1[345678]\d{9}$/; //手机号码
const telPhoneReg= /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/; //固定电话
const idCard=(^\d{15}$)|(^\d{17}([0-9]|X)$); //身份证15位和18位
const email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //邮箱

module.exports= {
  phoneReg,
  telPhoneReg,
  idCard,
  email,
}
