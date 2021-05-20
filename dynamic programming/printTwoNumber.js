function printTwoElements(arr, size) {
  let repeated;
  let missing;
  for (let i = 0; i < size; i++) {
    const absNum = Math.abs(arr[i]);
    if (arr[absNum - 1] > 0) {
      arr[absNum - 1] = -arr[absNum - 1];
    } else {
      repeated = absNum;
    }
  }
  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      missing = i + 1;
    }
  }
  return [repeated, missing];
}

arr = new Array(2, 3, 4, 1, 4, 5, 6);
n = arr.length;
console.log(printTwoElements(arr, n));
