class Animal {
    constructor(name) {
        this.name = name;
    }
speak () {
    console.log(`${this.name} makes a noise.`);
   }
}


class Dog extends Animal { 
    constructor(name) {
        super(name);///calll the super class
        ///constructor and pass in the parameter
    }


    
}

let d = new Dog ('German Shepherd');
d.speak(); ///German Shepherd barks.