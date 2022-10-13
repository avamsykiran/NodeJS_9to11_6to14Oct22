import { greetUser, greetUserByTime } from './welcome.mjs';
import arthService from './arth.mjs'
import payableLoanAmount, { simpleInterest } from './loans.mjs';

console.log("This is a new Node JS Project");

console.log(greetUser("Vamsy"));
console.log(greetUserByTime("Vamsy"));

console.log(arthService.sum(10,20));
console.log(arthService.dif(10,20));
console.log(arthService.prd(10,20));
console.log(arthService.rem(10,20));
console.log(arthService.qut(10,20));

console.log(simpleInterest(1000,10,1));
console.log(payableLoanAmount(1000,10,1));