var groceries =['wheat-flour', 'rice', 'lentils', 'rice-bran oil','groundnuts'];
console.log(groceries);
console.log('--------------');


/////using filter method
var filteredGroceries =[];
var filteredGroceries= groceries.filter(function(item) {
    return item.toLowerCase().includes('rice');
});
console.log(filteredGroceries);
console.log('---------');




////using=> arrow function
var plants =['rose','lily','marigold','hibiscus'];
console.log(plants);
console.log('------------');

var filteredPlants =[];
var filteredPlants = plants.filter(item=>item.toLowerCase().includes('rose'));
console.log(filteredPlants);



