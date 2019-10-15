// before es6
var name = "before es6";
console.log({ name });

name = "changed before es6";
console.log({ name });

// ES6
let animal = "dog-let";
console.log({ animal });

animal = "cat";
console.log({ animal });

const animalConst = "dog-const";
console.log({ animalConst });

// animalConst = "cat";
// console.log({ animalConst }); // error

// template literals
const age = 26;
console.log(`My age is ${age}.`);
