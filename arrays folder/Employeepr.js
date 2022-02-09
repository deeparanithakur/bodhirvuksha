class Employee {
    id=-1;
    #salary = 1234;

    get empSalary() {
        return this.#salary;
    }
constructor(id, name , salary) {
    this.id = id;
    this.name = name;
    this.#salary = salary;
}
}


let emp1 = new Employee(12345,'Rama', 505050);
console.log(emp1);
console.log(emp1.empSalary);