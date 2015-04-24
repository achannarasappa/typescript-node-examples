import Animal = require("./animal");

class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

export = Horse;