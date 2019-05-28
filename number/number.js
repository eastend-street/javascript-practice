let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  document.write("Your number is the square root of " + theNumber * theNumber);
} else {
  document.write("Hey. Why don't you give me a number?");
}
