var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // for(let j=i+1;j<nums.length;j++){
    if (nums[i] + nums[i + 1] == target) {
      return [i, i + 1];
    }
    // }
  }
};

console.log(twoSum([3, 3], 6));
