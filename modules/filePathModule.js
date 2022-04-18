const path = require("path");

var tempFldPath = "";

var filePath = class{
    constructor(){};

    displayDirectory(filePath){
        console.log(`Showing the Directory for..${filePath}`);
        console.log(path.dirname(filePath));
    };
    displayFileName(filePath){
        console.log(`Showing the FileName for..${filePath}`);
        console.log(path.basename(filePath));
    };
    displayExtension(filePath){
        console.log(`Showing the Extension for..${filePath}`);
        console.log(path.extname(filePath));
    };

    mergePath(basePath, subject){
        console.log(`Merging path for..${basePath} and ${subject}`);
        tempFldPath = path.join(basePath, subject);
        console.log(tempFldPath);
    };

    normalizePath(basePath){
        console.log(`Normalizing path for..${basePath}`);
        console.log(path.normalize(basePath));
    };
}
module.exports = filePath;