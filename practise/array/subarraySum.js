class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    let sum = arr[0];
    if (sum == s) return [1, 1];

    if (s == 0) {
      let k = 0;
      while (k < n - 1) {
        if (arr[k] == s) return [k + 1, k + 1];
        k++;
      }
    } else {
      let i = 0,
        j = 0;

      while (j < n - 1) {
        if (sum + arr[j + 1] <= s) {
          sum += arr[j + 1];
          j++;
        } else {
          sum -= arr[i];
          i++;
        }
        if (sum == s) {
          return [i + 1, j + 1];
        }
      }
    }
    return [-1];
  }
}

const s = new Solution();
const r = s.subarraySum([2, 7, 11, 15], 4, 13);
console.log(r);
