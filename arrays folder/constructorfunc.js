///constuctor function
function Person () {
    this.name= 'John';
    this.age =23

}
///creating objects
const person1 = new Person();
const person2 = new Person();

////adding a method to the constuctor function
Person.prototype.greet =function() {
     console.log('hello'+' '+ this.name);
}

person1.greet();
person2.greet();///////this is form laptp..not correct