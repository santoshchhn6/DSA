/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */
class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    let max = -Infinity;
    let maxsum = -Infinity;
    for (let i = 0; i < N; i++) {
      let sum = 0;
      for (let j = i; j < N; j++) {
        sum += arr[j];
        if (max < sum) max = sum;
      }
      if (maxsum < max) maxsum = max;
    }
    return maxsum;
  }
}
