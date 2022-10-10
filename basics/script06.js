//arrow functions

//const welcome = function() { return "Hello All! You are welcome! "};
const welcome = () =>  "Hello All! You are welcome! ";

//const welcomeUser = function(userName) { return `Hello ${userName}! You are welcome! `};
const welcomeUser = userName => `Hello ${userName}! You are welcome! `;

const simpleInterest = (p,t,r) => (p*t*r)/100;

console.log(welcome());
console.log(welcomeUser("Srinivas"));
console.log(simpleInterest(100,10,10));

//write an arrow function isEven that accepts a number n and returns boolean.
const isEven = n => n%2===0 ;

console.log(`25 is ${isEven(25)?"Even":"Odd"}`)
console.log(`26 is ${isEven(26)?"Even":"Odd"}`)

//write an arrow function countFactors that accepts a number n and returns number of factors
const countFactors = n => {
    let count = 2;
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            count++;
        }
    }
    return count;
};

console.log(`169 has ${countFactors(169)} factors!`);