//Object

let emp1 = {empId:101,name:"Vamsy Kiran",salary:45600.0,getTa:() => (this.salary*0.5)};
let emp2 = {empId:102,name:"Sagar",salary:35600.0,getTa:() => (this.salary*0.5)};
let emp3 = {empId:103,name:"Srinu",salary:25600.0,getTa:() => (this.salary*0.5)};
console.log(emp1); console.log(emp1.getTa());
console.log(emp2); console.log(emp2.getTa());
console.log(emp3); console.log(emp3.getTa());

