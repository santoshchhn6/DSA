class Solution {
  MissingNumber(array, n) {
    let i = 0,
      sum = 0;
    while (i < n - 1) {
      sum += array[i];
      i++;
    }
    let s = (n * (n + 1)) / 2;
    return s - sum;
  }
}
