//Constructor Function

function Emp(empId,name,salary){
    this.empId=empId;
    this.name=name;
    this.salary=salary;
    this.getTa = () => (this.salary*0.5);
}

let emp1 = new Emp(101,"Vamsy Kiran",45600);
let emp2 = new Emp(102,"Sagar",35600);
let emp3 = new Emp(103,"Srinu",25600);
console.log(emp1); console.log(emp1.getTa());
console.log(emp2); console.log(emp2.getTa());
console.log(emp3); console.log(emp3.getTa());

