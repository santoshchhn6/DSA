/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
 */

class Solution {
  sort012(arr, N) {
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    let combine = [];

    for (let i = 0; i < N; i++) {
      if (arr[i] === 0) arr0.push(0);
      else if (arr[i] === 1) arr1.push(1);
      else if (arr[i] === 2) arr2.push(2);
    }

    arr = [...arr0, ...arr1, ...arr2];

    return arr;
  }
}

const s = new Solution();
const arr = [0, 2, 1, 2, 0];
console.log(s.sort012(arr, arr.length));
