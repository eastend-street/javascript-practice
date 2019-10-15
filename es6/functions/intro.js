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
// const age = 26;
// console.log(`My age is ${age}.`);

// Destructuring
const arr = ["Jun", "Yamada"];
const [firstName, lastName] = arr;

console.log({ firstName });
console.log({ lastName });

const sampleObj = {
  nameSample: "Jun",
  age: 20,
  profession: "Student",
  pets: ["cats", "dogs"]
};

const profession = "profession";
console.log(sampleObj.profession);
console.log(sampleObj[profession]);
console.log(sampleObj["profession"]);

const keyName = "webDev";

const classes = {
  [keyName]: "This is web dev"
};

console.log(classes.webDev);

const { pets, nameSample, age } = sampleObj;
console.log({ nameSample, pets, age });
