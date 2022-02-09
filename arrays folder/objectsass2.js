////Car Factory...
///Create 2 objects car1, car2, with 8 properties and 3 behaviors using objetc literal

const car1 ={
    make : 'tiago',
    model: 'XE',
    year: 2022,
    color:'Red',
    owner:'Deepa',
    fuel:'petrol',
    engine:'1199cc',
    speed:0,

    move:function() {
        console.group("car is moving");
    },
    stop:function() {
         console.log("Car stopped");

    },
    break: function() {
        console.log("Car can break");
    },
};

const car2 ={
    make : 'Land Rover',
    model: 'Defender 3-door s',
    year: 2022,
    color:'black',
    owner:'Deepa',
    fuel:'Petrol',
    engine:'1997cc',
    speed:0,

    move : function() {
        console.log("Car is moving");
    },

    stop : function() {
        console.log("car stopped");
    },

    break : function() {
        console.log("Car can break");
    },
};

console.log(car1);
car1.move();
car1.stop();
car1.break();


console.log(car2);
car2.move();
car2.stop();
car2.break();




////same on this using on other thing
const mobile= {
    make: "oppo",
    model: "F17",
    year: 2021,
    color: "black",
    owner:"Pihu",

    voice:function() {
        console.log("Good voice communication");
    },

    style: function() {
        console.log("Awesome style");
    },

    cost: function() {
        console.log("low cost");
    },
};
console.log(mobile);
mobile.voice();
mobile.style();
mobile.cost();





