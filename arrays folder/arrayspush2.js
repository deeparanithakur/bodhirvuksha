//lastIndexof()= last index occurance of an element
let Countriesnames = ['Paris','London','Dubai','New York'];
const position1 = Countriesnames.lastIndexOf('Paris');
console.log(position1);
/////index starts with[0,1,2,3.....]
////Note: If the element is not in  an array, lastIndexof() gives -1.

    ///x////

    //join method=(output: Paris+London+Dubai+New York)
  const position2 = Countriesnames.join("+");
  console.log(position2);

     ////x///
///splice() method removes or replaces existing elements and/or adds new elements

let array2 =['Deepa','Samishka','Tatiksha',1,2,3,5,6,7,9];
console.log(array2.splice(4,8));
console.log(array2);
///console.log(array2.splice(2,4));
         /////x////

//map = returns array by mapping elements using given func
const number1 =numbers.map(myFunction);
function myFunction(value) {
    return value*2;

}
console.log(number1);   ////(NOT CORRECTLY done)
        ////x///
///forEach()= calls a function for each element
const  number2 = numbers.forEach(myFunction);
function myFunction(value) {
    return value;

}
console.log(number2);   ////(NOT CORRECTLY DONE)

////FILTER() =creates a new array with array elements that passes a test
////DONE CORRECTLY IN ARRAYSFILTER.JS)









  
  

