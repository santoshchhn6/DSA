const shuffle = require("../array/suffle_array");

function is_sorted(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i + 1]) return false;
  }
  return true;
}

function bogo_sort(list) {
  let attempt = 0;
  while (!is_sorted(list)) {
    shuffle(list);
    attempt++;
  }
  console.log("attempt:" + attempt);
  return list;
}

const number = [23, 1, 53, 12, 67];
let result = bogo_sort(number);
console.log(result);
