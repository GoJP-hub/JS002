// import module
var path = require("path");
var fs = require("fs");

//variable
var outputFileFld = path.join(__dirname, "../static");
var message = "";

// create stream for read & write
var reader = fs.createReadStream(path.join(outputFileFld, "sample.txt"), "utf8");
var writerNew = fs.createWriteStream(path.join(outputFileFld, "created.txt"), "utf8");
var writerCopy = fs.createWriteStream(path.join(outputFileFld, "sample-copy.txt"), "utf8");

// create methods in class
var fileOpStream = class {
    constructor(){};

    displayConsole(){
        reader.on("data", (chunk) => {message += chunk;});
        reader.on("end", () => {console.log(message);});
        reader.resume();
    }

    writeText(text){
        writerNew.end(text);
    };

    copyText(){
        reader.pipe(writerCopy);
        reader.resume();
    };
};

module.exports = fileOpStream;