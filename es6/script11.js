//Class

class Emp {
    constructor(empId, name, salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }
    
    getTa() {
        return (this.salary * 0.5); 
    }

    getNetPay(){
        return (this.salary + this.getTa());
    }

    toString(){
        return `Emp#${this.empId}\tName:${this.name}\tSal:${this.salary}\tTA:${this.getTa()}\tNet:${this.getNetPay()}`
    }
}

let emp1 = new Emp(101, "Vamsy Kiran", 45600);
let emp2 = new Emp(102, "Sagar", 35600);
let emp3 = new Emp(103, "Srinu", 25600);
console.log(emp1.toString());
console.log(emp2.toString());
console.log(emp3.toString());

