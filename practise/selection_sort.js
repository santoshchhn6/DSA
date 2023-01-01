function selection_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const num = [11, 56, 23, 6, 24, 23, 78, 3, 1];

const result = selection_sort(num);
console.log(result);
