///reduceright() method runs a function on each array element to
//produce a single value fro right-to-left in the array
//substract the  nos in the array, starting from the right


const numbers = [ 175,50,25];
console.log(numbers.reduceRight(myFunc));

function myFunc(total,num) {
    return total-num;
}
