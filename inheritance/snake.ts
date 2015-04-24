import Animal = require("./animal");

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

export = Snake;