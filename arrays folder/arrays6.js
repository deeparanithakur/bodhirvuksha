var products =['Tulsi','cow dung cake','Doopam','Panchagavya','Desi','cow ghee'];
console.log(products);
console.log('--------');

///suppose if we wnt to find all products whoes name contains cow then e
///achieve this using loops like below:

var filteredProducts =[];
for(var item of products) {
    //console.log(item);
    if(item.toLowerCase().includes('cow')) {
        filteredProducts.push(item)
    }
}

console.log(filteredProducts);
console.log('------------');


///same can be achieved in more simple manner if we use filter method:
var filteredProducts2 = products.filter(function(item) {
    return item.toLowerCase().includes('cow');

});
console.log(filteredProducts2);

///same as above but using arrow fucntion
var filteredProducts3 = products.filter(item=>item.toLowerCase().includes('cow'));
console.log(filteredProducts3);