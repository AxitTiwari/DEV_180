
class Troop {
    
    // properties
    type = "all rounder";
    hp = 24000;
    dps = 300;
    #height = 30; // private member

    // behavious
    run() {
        console.log("troop is running");
    }

    get get_height() {
        return this.#height;
    }

    set set_height(height) {
        this.#height = height;
    }
}

let troop1 = new Troop();

console.log(troop1.dps);
console.log(troop1.hp);

troop1.run();

// console.log(troop1.#height);

console.log(troop1.get_height); // no brackets <---
troop1.set_height = 20;
console.log(troop1.get_height);

function say_name(name="khan") {
    console.log("my name is, ", name);
}

say_name();