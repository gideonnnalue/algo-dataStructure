// function moveZeroes(nums) {
//   const zeroes = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       zeroes.push(0);
//       nums.splice(i, 1);
//     }
//   }
//   for (let i = 0; i < zeroes.length; i++) {
//     nums.push(0);
//   }
//   return nums
// }

function moveZeroes(nums) {
  const zeroes = [];
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes.push(0);
      // nums.splice(i, 1);
    } else {
      newNums.push(nums[i]);
    }
  }
  newNums = newNums.concat(zeroes);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newNums[i];
  }
}

console.log(moveZeroes([0, 0, 1]));
