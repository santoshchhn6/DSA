/**
 * @param {number[]} nums
 * @return {number}
 */
//  Input: nums = [0,0,1,1,1,2,2,3,3,4]
//  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// var removeDuplicates = function (nums) {
//   console.log(nums);
//   let prevElem = [];
//   let curElem = null;
//   let k = 0;
//   let duplicate = false;
//   for (let i = 0; i < nums.length; i++) {
//     curElem = nums[i];
//     if (prevElem.includes(curElem)) {
//       duplicate = true;
//       for (let j = i + 1; j < nums.length; j++) {
//         curElem = nums[j];
//         if (prevElem.includes(curElem)) continue;
//         else {
//           nums[i] = nums[j];
//           k = i;
//           break;
//         }
//       }
//     }
//     prevElem.push(curElem);
//   }

//   if (!duplicate) return nums.length;
//   return k + 1;
// };

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};

const n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const n2 = [1, 2, 2];
let result = removeDuplicates(n2);

console.log(result);
console.log(n2.slice(0, result));
