// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x = 999999999999999;   
// x will be 999999999999999
let y = 9999999999999999;  
// y will be 10000000000000000
console.log(`${x},${y}`);
let x2 = 0.2 + 0.1;
console.log(x2);
let x3 = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x3);
let y4 = "20";
let x4 = 100;
// If you add a number and a string, the result will be a string concatenation:
// If you add two strings, the result will be a string concatenation:
let z = x4 + y4;
console.log(z);

let x5 = 10;
let y5 = 20;
let z5 = "The result is: " + x5 + y5;
console.log(z5);

let x6 = 10;
let y6 = 20;
let z6 = "30";
let result = x6 + y6+ z6; 
console.log(result);
// The JavaScript interpreter works from left to right.
// First 10 + 20 is added because x and y are both numbers.
// Then 30 + "30" is concatenated because z is a string.

let x7 = NaN;
let y7 = 5;
let z7 = x7 + y7;
console.log(z7);

let x8 =  2 / 0;
let y8 = -2 / 0;

console.log(x8)
console.log(y8)

let x9 = new Number(500);
let y9 = new Number(500);
// Comparing two JavaScript objects always returns false.
let z9=x9==y9;
console.log(z9)