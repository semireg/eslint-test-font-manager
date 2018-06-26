"use strict";

var _usb = require("usb");

var _usb2 = _interopRequireDefault(_usb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FontManager from "font-manager";
// var FontManager = require("font-manager");

console.log("get the fonts");
// console.log(FontManager.getAvailableFontsSync());

console.log(_usb2.default.getDeviceList());