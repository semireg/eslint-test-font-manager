console.log("Start");

/* 1. This works fine: */

// import USBManager from "usb"; // OK
// console.log(USBManager.getDeviceList());

/* 2. This doesn't work correctly: */

// import FontManager from "font-manager"; // Can not be resolved, but still runs
// var FontManager = require("font-manager"); // Alternative works OK, too
// console.log(FontManager.getAvailableFontsSync());

console.log("Finish");
