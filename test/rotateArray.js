function rotate(nums, k) {
  const lastItems = nums.splice(k, nums.length);
  console.log(lastItems);
  for (let i = lastItems.length - 1; i >= 0; i--) {
    nums.unshift(lastItems[i]);
  }
  console.log(nums);
}

function printTwoElements(arr, size) {
  let reapeating;
  let missing;
  var i;

  for (i = 0; i < size; i++) {
    var abs_value = Math.abs(arr[i]);
    console.log(abs_value);
    if (arr[abs_value - 1] > 0) {
      arr[abs_value - 1] = -arr[abs_value - 1];
    } else {
      reapeating = abs_value;
    }
  }

  for (i = 0; i < size; i++) {
    console.log(arr[i]);
    if (arr[i] > 0) {
      missing = i + 1;
    }
  }
  console.log(reapeating, missing);
  return arr;
}

/* Driver code */
arr = new Array(2, 3, 4, 1, 4, 5, 6);
n = arr.length;
console.log(printTwoElements(arr, n));

console.log(rotate([-1, -100, 3, 99], 2));
