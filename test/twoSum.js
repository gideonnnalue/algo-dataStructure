function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!isNaN(map[target - nums[i]])) {
      console.log("yess");
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
}

// var twoSum = function (nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length - 1; i++) {
//     map[target - nums[i]] = i;
//     if (nums[i + 1] in map) return [map[nums[i + 1]], i + 1];
//   }
// };

console.log(twoSum([3, 2, 4], 6));
