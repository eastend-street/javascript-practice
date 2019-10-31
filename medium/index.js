var sampleVar = 1; // I don' t know whether var is reassigned or not
sampleVar = 2; // oh, reassigned… I'm not sure it will happen again

const sampleConst = 3; // Okay, this will be never reassigned

let sampleLet = 4; // It will be reassigned, I'll be careful!
sampleLet = 5;




console.log("1" == 1); // true. because it doesn't check the data type.
console.log("1" === 1); // false. It checks the data type.







const name = "David";
const age = 30;
const place= "Vancouver";

console.log(name + " is " + age + " years old, living in " + place + ".");
console.log(`${name} is ${age} years old, living in ${place}.`);
// → David is 30 years old, living in Vancouver.