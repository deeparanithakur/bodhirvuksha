var myArray =["Modi","DKshe","Rahul","Gandhi","Nikhil","AmithShah","Yedurappa"];
function f1(x) {
    console.log("f1 called");
}

console.log(myArray.findIndex(f1));

var newArray = myArray.splice(2,5);
for (item of newArray)
console.log(item);


myArray.push("Tejaswi Surya");
console.log(myArray.pop());
