let calculate = 1;

const fibonacci = (n) => {
  const seq = [0, 1];
  if (n < 2) {
    return seq[n];
  }
  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]); // seq[3] + seq[2]
  }
  return seq.pop();
};

const fibonacciRec = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};

// [0,1,1,2,3]

console.log(calculate);

console.log(fibonacci(5));
console.log(fibonacciRec(10));
