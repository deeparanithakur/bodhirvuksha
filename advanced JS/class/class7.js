////extends keyword is used to class declarations or class expressions to 
///create as a child of another

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() { 
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);///call the super class
        //constructor and pass in the name parameter
    }

    spak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('German Shepherd');
d.speak(); ///German Shepherd barks.

///op:German Shepherd makes a noise