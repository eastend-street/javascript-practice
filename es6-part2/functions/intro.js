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

const whichIsYoung = (person1, person2) => {
  return person1.age < person2.age
    ? `${person1.name} is younger than ${person2.name}`
    : `${person2.name} is younger than ${person1.name}`;
};

console.log(classObj[3]);
console.table(classObj);

// null and undefined are false when using boolean
console.log(classObj[3] ? "true" : "false");

console.log(whichIsYoung(classObj[1], classObj[2]));
