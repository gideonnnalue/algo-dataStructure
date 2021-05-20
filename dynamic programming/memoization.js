let calculations = 0;

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;

    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();
console.log("DP", fasterFib(100));

console.log("we did " + calculations + " calculations");

console.log([3, 1].slice(2));

function rob(nums) {
  if (nums.length === 2) {
    return nums[1];
  }
  if (nums.length < 2) {
    return 0;
  }
  return nums[0] + rob(nums.slice(2));
}

console.log(rob([1, 2]));
