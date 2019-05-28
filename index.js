let person = "Steve Jobs";
// window.alert(person);

// another way of showing element
/*
This is
multi-line comment
*/

document.write(
  "<h1>The name of the person who created Apple is " + person + "</h1>"
);

let total = 0;
let even_total = 0;
let odd_total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
  if (i % 2 === 0) {
    even_total += i;
  } else if (i % 2 === 1) {
    odd_total += i;
  }
}

document.write(
  "<p> The total of 1-100 is " +
    total +
    ". <br>The even total is " +
    even_total +
    ". <br>The odd total is " +
    odd_total +
    ". </p>"
);


if (2 % 2 === 0) {
  even_total += 2;
} else if (3 % 2 === 1) {
  odd_total += i;
}
