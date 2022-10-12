/* Spread Operator (...) on arrays */

var a1 = [0, 1, 2, 3, 4]
var a2 = [6, 7, 8, 9]
var a3 = [a1, a2]
var a4 = [...a1, 5, ...a2];

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

/* Spread Operator (...) on json */

let personalData = { id: 101, name: "Vamsy", fee: 45678 }
let performenceData = { math: 90, computer: 80, electronics: 50 }
let student1 = { personalData, performenceData }
let student2 = { ...personalData, ...performenceData }

console.log(student1)
console.log(student2)

/*rest params*/

let sum = (...nums) => (nums.length === 0 ? 0 : (nums.length === 1 ? nums[0] : nums.reduce((a1, a2) => (a1 + a2))));
console.log(sum(10))
console.log(sum(10, 20))
console.log(sum(10, 20, 30))
console.log(sum(10, 20, 30, 40))

/*destructured assignment */

let arr = [10,20,30,40];
let [n1,n2,n3,n4]= arr;
let emp = {empId:101,name:"vamsy",salary:90000};
let {empId,name,salary} = emp;

