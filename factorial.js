let total = 0;

function factorial(n) {
  if (n == 0) return 1;
  else return (total = factorial(n - 1) * n);
}

console.log(factorial(4));
