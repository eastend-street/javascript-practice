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

// find ---------------------------------
const cars = ["Mitsubishi", "Toyota", "Ford", "Benz", "Ferrari"];
const found = cars.find(car => car === "Ford");
console.log(found);

// includes ---------------------------------
console.log("Is there Toyota?", cars.includes("Toyota"));
console.log("Is there Honda?", cars.includes("Honda"));

// some ---------------------------------
const isFound = cars.some(car => car === "Ford");
console.log(isFound);

// indexOf ---------------------------------
const indexOfBenz = cars.indexOf("Benz");
const indexOfTesla = cars.indexOf("Tesla");
console.log(indexOfBenz, indexOfTesla);
