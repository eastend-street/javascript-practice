let first = 1;
let second = 1;
let output = 1;

for (let counter = 2; counter <= 15; counter++) {
  // while (counter < 15) {
  if (output == 1) {
    document.write(first + ", " + second+ ", "  );
  } else if (counter == 15){
    document.write(output);
  }
  else {
    document.write(output + ", ");
  }
  output = first + second;
  first = second;
  second = output;
}
