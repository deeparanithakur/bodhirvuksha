////var vs let vs const(adv JS 1 lesson in notes)
var greeter = "Greetings from Earth";

function newFunction() {
    var hello ="hello";
    console.log(hello);
}
newFunction();
//Here,greeter is globally scoped because 
//it exists outside a functio while hello
//is function scoped.
//so we cannot access the variable hello outside of a function
//So if we do this: 
console.log(hello);
//we get an eror saying hello is undefined
