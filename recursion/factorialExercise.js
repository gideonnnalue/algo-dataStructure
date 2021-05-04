function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  } else {
    return number * findFactorialRecursive(number - 1);
  }
}

function findFactorialIterative(number) {
  let ans = 1;
  for (let i = 1; i <= number; i++) {
    ans *= i;
  }
  return ans;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
