var Car = require("./carClassModule");

var Toyoda = class extends Car {
    constructor(name){
        super(name);
    };

    echo(){
        super.drive();
    };

    drive(){
        console.log(`start ${this.name}!!`);
    };
};

module.exports = Toyoda;