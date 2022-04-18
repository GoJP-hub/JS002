// Import Module
const http = require("http");
const fs = require("fs");
const path = require("path");
// Declare Class
var serverClass = class {
    constructor(){};

    listenServer(){ 
        server.listen(3000);
    };
};

// Declare Variables
var staticFolder = path.join(__dirname, "../static")
var reader = fs.createReadStream(path.join(staticFolder, "sample.txt"), "utf8");
var server = http.createServer(
    (req, res) => { 
        // display request
        // console.log("Display... Enterred Date")
        // console.log(`[${(new Date()).toISOString()}] `)
        // console.log("Display... Method and URL")
        // console.log(`${req.method} ${req.url} - `)
        // console.log("Display... Header")
        // console.log(`${req.headers["user-agent"]}`)
        // give response
        // res.end("HelloWorld!")
        if (req.method === "POST"){
            req.pipe(res)
        } else {
            reader.pipe(res);
        }
    }
);

// Declare Functions

// Export Line
module.exports = serverClass;