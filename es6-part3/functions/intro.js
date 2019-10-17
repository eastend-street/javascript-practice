// map ---------------------------------
const students = ["Gustavo", "Ronan", "James", "Francois", "Jun"];

students.map(student => console.log(`Hi, ${student}`));

const greetings = students.map(student => `Hi!, ${student}`);

console.log(greetings);

const greetingsReturn = students.map((student, index) => {
  return `Hi!, ${student} No.${index}`;
});

console.log(greetingsReturn);

// filter ---------------------------------
const filteredResult = students.filter(student => student.length < 4);
console.log(filteredResult);

// splice ---------------------------------
const sweets = [
  "chocolate",
  "cake",
  "bubble tea",
  "cheese cake",
  "potato chips"
];

sweets.splice(0, 2, "Hot chocolate");
console.log(sweets);

// slice ---------------------------------
const animals = ["lion", "mink", "parrots", "cats", "snake", "rabbit"];

const slicedAnimals = animals.slice(2, 4);
console.log(animals, slicedAnimals);

// for each ---------------------------------
animals.forEach(animal => console.log(`I love ${animal}`));

// reduce ---------------------------------
const numbers = [2, 5, 7, 7, 9, 10];
const totalNum = numbers.reduce((total, currentNum) => total + currentNum);
console.log(totalNum);

// sort numbers ---------------------------------
numbers.sort(function(number1, number2) {
  return number2 - number1;
});

console.log(numbers);
