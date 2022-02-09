///push() method ADDS an element at the END of the array


let groceryList =[ 'rice,','lentils','oil', 'groundnuts'];
groceryList.push('Sugar');
console.log(groceryList);  



////unshift() method ADDS an elements at the BEGINNING of the array
groceryList.unshift('peanuts');
console.log(groceryList);




///index value method will ADD the new element 'cashews' at the 2nd index
///array index goes [0,1,2,3...]
groceryList[2] ='cashews';
console.log(groceryList);



///pop()method is used to remove the last element from an array.
//The pop() method also returns the returned value.
//remove the last element
let subjectsList = ['English','Maths','Hindi','Social-Science'];
subjectsList.pop();
console.log(subjectsList);

//remove the last element from ['English','Maths','Hindi','Social-Science']
let removedElement = subjectsList.pop();



