// function sayHello(name) {
//   return `Hello, ${name}`;
// }

// arrow function
const sayHello = name => `Hello, ${name}`;

console.log(sayHello("Jun"));

// Array
let animalArr = [];
animalArr.push("lion");
console.log(animalArr);

animalArr.pop();
console.log(animalArr);

const classObj = [
  {
    name: "Ayako",
    type: "teacher",
    age: 31
  },
  {
    name: "Risa",
    type: "student",
    age: 25
  },
  {
    name: "Gustavo",
    type: "student",
    age: 20
  },
  null
];

console.log(classObj[3]);
console.table(classObj);

// null and undefined are false when using boolean
console.log(classObj[3] ? "true" : "false");
