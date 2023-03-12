// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
var mergeTwoLists = function (list1, list2) {
  let mergedHead = { data: -1, next: null };
  let current = mergedHead;

  while (list1 && list2) {
    if (list1.data > list2.data) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }

    current = current.next;
  }
  current.next = list1 || list2;

  return mergedHead.next;
};

function printList(list) {
  let nodes = [];
  let current = list;

  while (current) {
    if (current === list) nodes.push(`[Head:${current.data}]`);
    else if (current.next === null) nodes.push(`[Tail:${current.data}]`);
    else nodes.push(`[${current.data}]`);

    current = current.next;
  }
  return nodes.join("-> ");
}

const list1 = { data: 4, next: { data: 2, next: { data: 1, next: null } } };
const list2 = { data: 5, next: { data: 3, next: { data: 6, next: null } } };
console.log(printList(mergeTwoLists(list1, list2)));
