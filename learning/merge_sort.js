function merge_sort(list) {
  /*
    Sort the list in ascending order
    return new sorted list
    Takes O(n log n) time

    divide: Find midpoint of list and divide list into  subllist
    conquer: Recursively sort sublists created in previos step
    combine: Merge the sorted sublist created in previos step
    */

  if (list.length <= 1) return list;

  let [left_half, right_half] = split(list);
  let left = merge_sort(left_half);
  let right = merge_sort(right_half);

  return merge(left, right);
}

function split(list) {
  /*
    Divide unsorted list at midpoint into sublists
    Returns two sublists- left and right
    Takes O( log n) time 
    */

  let mid = Math.floor(list.length / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid);

  return [left, right];
}

function merge(left, right) {
  /*
        Merge two sublists and sorting them in process
        Return new merge list
        Takes O(n) time
    */

  let arr = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i += 1;
    } else {
      arr.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    arr.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    arr.push(right[j]);
    j += 1;
  }
  return arr;
}

function verify_sorted(list) {
  let n = list.length;

  if (n === 0 || n === 1) return true;

  return list[0] <= list[1] && verify_sorted(list.slice(1));
}

const list = [43, 12, 67, 34, 64, 76, 32, 12, 8];
const l = merge_sort(list);
console.log(verify_sorted(list));
console.log(l);
console.log(verify_sorted(l));
