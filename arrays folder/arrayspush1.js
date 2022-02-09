///shift() method REMOVES the FIRST element and also returns the removes element.
let namesList = ['Pihu','Deepa','Mishti','Nihu'];
////removes the first element
namesList.shift();

console.log(namesList);

          ////x////

///Length = Using length property we can find the length of an element(the number of
///elements in an array)

console.log(namesList.length);
//this gives the total number of elements in an array  ..op:3


            ////x/////

////sort() method of array sorts the elements alphabetically in strings and in ascending order
let Employeesnames = ['Neha','Abhijeet','Deepa','Prerna','Shubham'];
Employeesnames.sort();

console.log(Employeesnames);


                ////x////
///slice() method of array selects the part of an array and return the new array
///i.e slice a piece of array into a new array
let  dailyActivities =['sleep','eat', 'work'];
let newDailyActivities = dailyActivities.slice(1);

console.log(newDailyActivities);       ////op: [ 'eat,'work' ]

             ///x//////

///concat() method joins 2 or more arryas and returns a result

let Carslist =[' Tiago','BMW','Benz'];
let newItem = ['Mercedes'];

let item = Carslist.concat(newItem);
console.log(item);

       ///xx////

///reverse() method =reverse the order

let reverse = Carslist.reverse();
console.log(reverse);
