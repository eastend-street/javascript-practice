const students = ["Gustavo", "Ronan", "James", "Francois", "Jun"];

students.map(student => console.log(`Hi, ${student}`));

const greetings = students.map(student => `Hi!, ${student}`);

console.log(greetings);

const greetingsReturn = students.map(student => {
  return `Hi!, ${student}`;
});

console.log(greetingsReturn);
