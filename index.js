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
// const path = require("path");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(__dirname);
// var subFold = path.join(__dirname, "modules");
// console.log(subFold);
// console.log(path.join(subFold, "..\\index.js"));

// var homeUnnormal = subFold + "\\..\\index.js"
// console.log(homeUnnormal);
// console.log(path.normalize(homeUnnormal));

// Lesson03-2: file reader
// const path = require("path");
// const fs = require("fs");
// // variables
// var message = "";
// var staticPath = path.join(__dirname, "static")

// // set reader stream
// var reader = fs.createReadStream(path.join(staticPath, "sample.txt"), "utf8");

// // start the stream
// reader.on("data", (chunk) => {message += chunk;});
// reader.on("end", () => {
//     console.log(message);
// });
// reader.resume();

// Lesson03-3: file writer
// import module
var path = require("path");
var fs = require("fs");

//variable
var outputFileFld = path.join(__dirname, "static")

// simple write method
var writer = fs.createWriteStream(path.join(outputFileFld, "created.txt"), "utf8");
writer.end("Hello World !");

var reader = fs.createReadStream(path.join(outputFileFld, "sample.txt"), "utf8");
var writer = fs.createWriteStream(path.join(outputFileFld, "sample-copy.txt"), "utf8");
reader.pipe(writer);
reader.resume();
