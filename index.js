function factorial(n) {
  //guard clause
  if (n < 1) {
    return;
  }
  let sum = 1;
  for (i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}
console.log(factorial(7));

function newFactorial(n) {}
if (n > 0) {
  let result = 1;
}
