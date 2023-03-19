function minJumps(arr, n) {
  if (arr[0] >= n) return 1;
  let i = 0;
  let count = 0;
  let leftIndex = 0;
  while (true) {
    if (arr[i] === 0) return -1;

    let rightIndex = arr[i];
    let j = leftIndex;
    let maxIndex = arr[leftIndex];
    while (j <= rightIndex) {
      if (maxIndex > arr[j]) maxIndex = arr[j];
      j++;
    }
    i = maxIndex + arr[i];
    leftIndex = i;
    count++;
    if (i >= n - 1) break;
  }
  return count;
}

//by martialCoder
function minJumps2(arr, n) {
  let jumps = 0;
  let curMax = 0;
  let curReach = 0;
  for (let i = 0; i < n - 1; i++) {
    if (i + arr[i] > curMax) curMax = i + arr[i];
    if (i == curReach) {
      jumps++;
      curReach = curMax;
    }
    if (arr[i] == 0 && i == curMax) return -1;
  }
  return jumps;
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log(minJumps(arr, arr.length));
