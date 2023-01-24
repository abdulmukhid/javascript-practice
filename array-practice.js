const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars);
// You can also create an array, and then provide the elements:
const cars1 = ["Saab", "Volvo", "BMW"];
let car = cars1[3] = "mukhid";
console.log(cars1);
var len = cars1.length;
// The length property is always one more than the highest array index.
console.log(len);

var length = cars1[cars1.length - 2];
// Accessing the Last Array Element
console.log(length);

var fruit=["apple","mango","custerd","orange","pea"];
var flenth=fruit.length;

var text= "<ul>";
    for (let i = 0; i < flenth; i++) {
        text += "<li>"+ fruit[i] + "</li>";
        
    }


text += "</ul>";
document.write(text)

// You can also use the Array.forEach() function:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

var text = "<ul>"
fruits.forEach(foreachFunction)  
text += "</ul>";

function foreachFunction(value){
    text ="<li>" +value + "</li>";
};
console.log(text);
