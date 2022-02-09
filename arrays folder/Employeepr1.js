///CLASSES


class Employee {
    id = -1;
    name = 'Not Specified';
    #salary = 1234;
    ////# means private property, without # is public property,
    ///#property should be given in class only, otherwise o/p comes 
    ///here #salary is private property, given under class

    get empSalary(){ 
        return this.#salary;
    }
    constructor(id,name,salary) {
        this.id=id;
        this.name= name;
        this.salary=salary;
    }
}

let emp1 = new Employee(12345,'Rama',505050);
console.log(emp1);
console.log(emp1.empSalary);