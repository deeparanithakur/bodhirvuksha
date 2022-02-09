///Employee using Object() Constructor

function employee(name,id, age, salary, designation) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.salary = salary;
    this.designation = designation;
this.work = function() {
    console.log(this.name + "is working");

},
this.stop = function() {
    console.log(this.id +"stopped working");
}

}
let employee1 = new employee('Deepa',5451, 25, 102545, 'Data Analyst');
let employee2 = new employee ('Rahul', 4154, 24, 10121, 'Tester');
let employee3 = new employee('Vrinda', 1021, 20 ,12421, 'developer');
let employee4 = new employee('Smita', 1201, 24, 12014, 'admin');
let employee5 = new employee('John', 2101, 26, 12011, 'store keeper');

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);

employee1.work();
employee1.stop();

employee5.work();
employee5.stop();

