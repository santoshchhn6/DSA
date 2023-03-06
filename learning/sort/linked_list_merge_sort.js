const LinkedList = require("../linklist/linked_list");

function merge_sort(linked_list) {
  /*
    Sorts a linked list in ascending order
    -Recursively divide linked-list into sublists containing a single Node
    -Recursively merge sublists to produce sorted sublists until one remains

    Returns a sorted linked list
    Take O(kn log n)
    */
  if (linked_list.size() === 1) return linked_list;
  else if (linked_list.head === null) return linked_list;

  let [left_half, right_half] = split(linked_list);
  let left = merge_sort(left_half);
  let right = merge_sort(right_half);

  return merge(left, right);
}

function split(linked_list) {
  //Divide list at midpoint into sublist
  //Take O(k log n) , k time to find midpoint
  if (linked_list === null || linked_list.head === null) {
    let left_half = linked_list;
    let right_half = null;

    return [left_half, right_half];
  } else {
    let size = linked_list.size();
    let mid = Math.floor(size / 2);
    mid_node = linked_list.node_at_index(mid - 1);

    let left_half = linked_list;
    let right_half = new LinkedList();
    right_half.head = mid_node.next;
    mid_node.next = null;

    return [left_half, right_half];
  }
}

function merge(left, right) {
  /*
  Merge two sub linked-list,sorting by data in node
  Return ,new merged list
  Takes O(n) time
  */
  //create new linked_list that contain node from merging merging left and right
  let merged = new LinkedList();

  //Add fake head that is descarded later
  merged.add(0);

  //Set current to head of linked_list
  let current = merged.head;

  //Obtain head from left and right linked lists
  let left_head = left.head;
  let right_head = right.head;

  //Iterate over left and right until we reach tail node
  while (left_head || right_head) {
    //If the head node of left is null,we're past the tail
    //Add tail node from right to merged linked list
    if (left_head === null) {
      current.next = right_head;
      //Call the right_head.next to set loop condition to false
      right_head = right_head.next;
    } else if (right_head === null) {
      //If the head node of right is null,we're past the tail
      //Add tail node from left to merged linked list
      current.next = left_head;
      //Call the left_head.next to set loop condition to false
      left_head = left_head.next;
    } else {
      //Not at either left or right tail node
      //Obtain node data to perform comparison operations
      let left_data = left_head.data;
      let right_data = right_head.data;
      //If data on left is less than right,set current to left node
      if (left_data < right_data) {
        current.next = left_head;
        //Move left head to next node
        left_head = left_head.next;
      } else {
        //If data on left is greated than right,set current to right node
        current.next = right_head;
        //Move right head to next node
        right_head = right_head.next;
      }
    }
    //Move current to next node
    current = current.next;
  }

  //Discard fake head and Set first merged node as head
  let head = merged.head.next;
  merged.head = head;

  return merged;
}

let l = new LinkedList();
l.add(10);
l.add(2);
l.add(44);
l.add(15);
l.add(200);
l.add(0);
l.add(6);
l.add(134);
l.add(804);
console.log(l.printList());

let ml = merge_sort(l);
console.log(ml.printList());
