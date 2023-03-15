/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */
//Function to find the sum of contiguous subarray with maximum sum.
//my solution
function maxSubarraySum(arr, N) {
  N = N ? N : arr.length;
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

//   kadane's Algo
function maxSubarraySum2(arr, N) {
  N = N ? N : arr.length;
  let msf = arr[0],
    sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i];
    if (sum > msf) msf = sum;
    if (sum <= 0) sum = 0;
  }
  return msf;
}

console.log(maxSubarraySum2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
