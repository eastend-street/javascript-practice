let firstNumber = parseInt(prompt("Tell me the first number"));
let lastNumber = parseInt(prompt("Tell me the last number"));
let total = 0;
for (firstNumber; firstNumber <= lastNumber; firstNumber++) {
  total += firstNumber;
}

document.write(
  "<h1>The total is " + total + "</h1>"
);

// console.log("The total is " + total);
