// Import Module
const http = require("http");

// Declare Class
var httpClient = class{
    constructor(){};
    runGet(){ requestGet.end(); };
    runPost(){ 
        requestPost.end(data); 
        requestPost.on("error", (err) => {console.log(err.message);});
    };
    runPostErr(){ 
        requestPostErr.end(data); 
        requestPostErr.on("error", (err) => {console.log(err.message);});
    };
}
// Declare Variables
var data = "Hello World !";
var url = "http:localhost:3000/";
var urlError = "http:localhost:3001/";
var optionGet = {method: "GET"};
var optionPost = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(data)
  }
};

var requestGet = http.request(
    url, optionGet, (res) => {res.pipe(process.stdout);}
);

var requestPost = http.request(
    url, optionPost, (res) => {res.pipe(process.stdout);}
);
var requestPostErr = http.request(
    urlError, optionPost, (res) => {res.pipe(process.stdout);}
);
// Declare Functions

// Export Line
module.exports = httpClient;