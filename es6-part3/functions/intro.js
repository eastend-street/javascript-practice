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
