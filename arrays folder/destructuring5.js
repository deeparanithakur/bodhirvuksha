///Object destructuring
const obj = {x: 123,y: 'Yo Yo',myColor:'Orange'};
const {x, y, myColor} = obj;

console.log(x);
console.log(y);
console.log(myColor);

const {a,b} = obj;  ////a & b value will be undefined
///as there is no variable callled a or b present in obj
console.log(a);
console.log(b);

///op:123
//Yo Yo
//undefined
///undefined