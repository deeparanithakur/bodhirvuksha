let num = 20;
for( i=2 ; i<=num; i++) {
    if(num%i==0)
    break;
}

if(num==i)
console.log("its prime");
else
console.log("its not Prime");


///////ex2:
let num1 = 57;
for( i=2; i<=num1 ; i++) {
    if(num1%i ==0)
    break;
}                          ////op: not prime

if(num1==i)
console.log("Prime");   
else
console.log("not Prime");


////ex3:3

let num2 = 17;
for( i=2 ;i<=num2; i++) {     
    if(num2%i==0)
    break;
}                            ////op: not prime

if(num2==i)
console.log("prime");     
else  
console.log("not prime");

