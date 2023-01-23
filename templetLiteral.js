var heading="beast choching clasess";
var schName=`the class name,"${heading}"`;
let text =
`The quick
brown fox
jumps over
the lazy dog`;

let price = 1000;
let VAT = 0.25;
// console.log("wellcome",`${schName},${text}`);
// Automatic replacing of variables with real values is called string interpolation.

let total = `Total: ${(price * (1 + VAT).toFixed(2))}`;
console.log(total);
