const number = parseInt(prompt("Enter the number"));

for (let i = 2; i <= number - 1; i++) {
  if (number % i == 0) {
    document.write(number + " is not a prime number.");
    exit;
  }
}
document.write(number + " is a prime number.");
