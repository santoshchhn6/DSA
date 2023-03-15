/**
 * @param {Node} head
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  //Function to remove a loop in the linked list.

  removeLoop(head) {
    //your code here
    let i = 0;
    let current = head;
    let uniq = [];
    while (!uniq.includes(current.next.data) && current.next) {
      console.log(current.data);
      uniq.push(current.data);
      current = current.next;
    }

    current.next = null;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(4);
n1.next = n2;
n2.next = n3;
n3.next = n2;

console.log(n1);
const s1 = new Solution();
s1.removeLoop(n1);
console.log(n1);
