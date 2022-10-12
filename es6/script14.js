var emps = [
    { empId: 101, name: "Vamsy", salary: 45000, joinDate: new Date("2022-01-01") },
    { empId: 102, name: "Varun", salary: 25000, joinDate: new Date("2022-02-01") },
    { empId: 103, name: "Vinitha", salary: 35000, joinDate: new Date("2022-02-01") },
    { empId: 104, name: "Vindhya", salary: 65000, joinDate: new Date("2022-01-01") },
    { empId: 105, name: "Vasu", salary: 75000, joinDate: new Date("2022-03-01") },
    { empId: 106, name: "Vasudha", salary: 95000, joinDate: new Date("2022-02-01") },
    { empId: 107, name: "Venky", salary: 15000, joinDate: new Date("2022-01-04") },
    { empId: 108, name: "Vinodh", salary: 35000, joinDate: new Date("2022-01-01") }
];

console.log(emps);
emps.push({ empId: 109, name: "Anoop", salary: 45000, joinDate: new Date("2022-01-01") })
console.log(emps);
emps.splice(3, 2);
console.log(emps);

console.log(emps.find(e => e.name.endsWith("u")));
console.log(emps.findIndex(e => e.name.endsWith("u")));
console.log(emps.find(e => e.name.endsWith("a")));
console.log(emps.findIndex(e => e.name.endsWith("a")));

console.log(emps.sort((e1, e2) => (e1.salary > e2.salary ? 1 : (e1.salary < e2.salary ? -1 : 0))));

emps.forEach(e => e.ta = e.salary * 0.5);
console.log(emps);

console.log(emps.map(e => `${e.name} earns ${e.salary} per month`));

console.log(emps.reduce((e1, e2) => (e1.salary < e2.salary ? e1 : e2)));
