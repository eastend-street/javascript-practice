// map
const map = new Map();
map
  .set("key1", "student1")
  .set(2, 40)
  .set("isHere", true);
console.log("map", map);

console.log(map.get(2));
console.log(map.has("isHere"));
console.log(map.size);

const map2 = new Map([
  ["Canada", "Toronto"],
  ["Japan", "Tokyo"],
  ["England", "London"]
]);

for (let country of map2.keys()) {
  console.log("country", country);
}

for (let city of map2.values()) {
  console.log("city", city);
}

for (let item of map2) {
  console.log(item);
}

// set
let set = new Set();
set.add(1);
set.add({ name: "Jun" });
set.add({ name: "Shin" });

console.log("set", set);

set.add(1);

console.log("set", set);

set.forEach((value, value2, set) => {
  console.log("forEach", value, value2, set);
});

// Rest parameters

const addition = (className, ...students) => {
  console.log(`These are students for the ${className} class:`, students);
};

addition("WMAD", "Shin", "James", "Ayako");

const addition2 = (className, ...students) => {
  students.map(student => {
    student.gender === "female" && console.log("female student: ", student);
  });
};

addition2(
  "WMAD2",
  { name: "Shin", gender: "male" },
  { name: "Ayako", gender: "female" },
  { name: "James", gender: "male" }
);

// Spread operator
let numArr = [5, 7, 8, 9, 5, 3];
console.log("spreadArr", ...numArr);

console.log("add extra element with new array", [...numArr]);

let seagull = {
  color: "white",
  sound: "noisy",
  floatOnSea: true
};

console.log("add new property to spread obj", {
  ...seagull,
  beakColor: "yellow"
});
console.log("override key to spread obj", { ...seagull, color: "black" });

// Set timeout
const alertMe = message => {
  alert(message);
};

// setTimeout(alertMe, 4000, "ahhhhhhhhhh"); // 引数は後ろに書く！（)をつけない

const returnString = () => {
  return "Hiiiiiiiiiiii";
};

console.log(setTimeout(returnString(), 2000));
