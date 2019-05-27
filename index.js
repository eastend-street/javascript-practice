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

total = 0;
even_total = 0;
odd_total = 0;
for (number = 1; number < 101; number++) {
  total = total + number;
  if (number % 2 === 0) {
    even_total = even_total + number;
  } else if (number % 2 === 1) {
    odd_total = odd_total + number;
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
