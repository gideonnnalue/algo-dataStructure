const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // If less than first item
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where the number should go
      for (let j = 1; j < i; j++) {
        if (array[i] < array[j] && array[i] > array[j - 1]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

console.log(insertionSort(numbers));
