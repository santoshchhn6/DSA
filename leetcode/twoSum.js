function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) return [i, j];
    }
  }
  return [-1];
}

const nums = [3, 2, 3],
  target = 6;

console.log(twoSum(nums, target));
