// Lesson00: HelloWorld
// console.log("Hello World!");

// Lesson01-1: Basic Module
// const message = require("./modules/helloModules")
// console.log(message)

// Lesson01-2: Types of Modules: Object
// const objMod = require("./modules/objectModule");
// console.log(JSON.stringify(objMod));
// console.log(objMod.text)

// Lesson01-3: Types of Modules: Function
// const funcMod = require("./modules/functionModule")
// funcMod.echo("Hello Function");
// var result = funcMod.area(2,5);
// console.log(result);

// Lesson01-4: Types of Modules: Class
// const classMod = require("./modules/toyotaClassModule");
// var myCar = new classMod("Lexus");
// myCar.drive();
// myCar.echo();

// Lesson02: EventEmitter
// const Clock = require("./modules/clockEvent")
// var i = 0;
// var clock = new Clock();
// clock.on("tick", () => {
//     console.log(++i);
//     if(i>3){
//         clock.stop();
//     }
// })
// clock.start();

// Lesson03-1: passモジュール
// const filePathMod = require("./modules/filePathModule");
// const path = require("path");

// var subFld = path.join(__dirname, "modules");
// var irrFlName = subFld + "/../index.js"

// var filePathM = new filePathMod();
// filePathM.displayDirectory(__filename);
// filePathM.displayFileName(__filename);
// filePathM.displayExtension(__filename);
// filePathM.mergePath(__dirname, "modules");
// filePathM.mergePath(subFld, "../index.js");
// filePathM.normalizePath(irrFlName);


// Lesson03-2: stream--file reader & writer
// const fileOpStream = require("./modules/fileStreamModule");
// var flOps = new fileOpStream();
// flOps.displayConsole();
// flOps.writeText("Hello World!");
// flOps.copyText();
