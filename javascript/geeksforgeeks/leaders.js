/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
  //Function to find the leaders in the array.
  leaders(arr, n) {
    let leaders = [];

    let max = 0;

    for (let i = n - 1; i >= 0; i--) {
      if (arr[i] >= max) {
        leaders.push(arr[i]);
        max = arr[i];
      }
    }

    return leaders.reverse();
  }
}

const s1 = new Solution();
const arr = [16, 17, 4, 3, 5, 2];
console.log(s1.leaders(arr, arr.length));
