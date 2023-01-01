class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    //returning number of nodes in list takes O(n) time
    let current = this.head;
    let count = 0;

    while (current) {
      count += 1;
      current = current.next;
    }

    return count;
  }

  add(data) {
    /*
        Add new node at head of list
        this take O(1) time.
    */
    let new_node = new Node(data);
    new_node.next = this.head;
    this.head = new_node;
  }

  insert(data, index) {
    /*
    Insert a node containing a data at index position
    Insertion takes O(1) time,
    But Searching takes O(n) time

    Overall takes O(n) time
    */
    // if (index < 0 || index > this.size())
    //   console.log("please enter valid index.");

    if (index === 0) this.add(data);

    if (index > 0) {
      let new_node = new Node(data);
      let current = this.head;
      let position = index;

      while (position > 1) {
        current = current.next;
        position -= 1;
      }

      let prev_node = current;
      let next_node = current.next;

      prev_node.next = new_node;
      new_node.next = next_node;
    }
  }

  delete(key) {
    /*
    Remove Node containing data that matches the key
    Return Node or Null if not found.
    Takes O(n) times
    */
    let current = this.head;
    let prev_node = null;
    let found = false;

    while (current && !found) {
      if (current.data === key && current === this.head) {
        found = true;
        this.head = current.next;
      } else if (current.data === key) {
        found = true;
        prev_node.next = current.next;
      } else {
        prev_node = current;
        current = current.next;
      }
    }
    return current;
  }

  deleteFrom(index) {
    let current = this.head;

    if (index < 0 || index > this.size()) {
      console.log("Enter valid index");
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    if (index > 0) {
      let prev_node = null;
      let i = 0;
      while (i < index) {
        prev_node = current;
        current = current.next;
        i++;
      }
      prev_node.next = current.next;
    }
    return current;
  }

  search(key) {
    /*
    Search for first node containing data that matches to key  return node or null if not found
    Take O(n) times 
    */
    let current = this.head;
    while (current) {
      if (current.data === key) return current;
      else current = current.next;
    }
    return null;
  }

  printList() {
    /*
    String representation of list node
    Take O(n) time
    */

    let nodes = [];
    let current = this.head;

    while (current) {
      if (current === this.head) nodes.push(`[Head:${current.data}]`);
      else if (current.next === null) nodes.push(`[Tail:${current.data}]`);
      else nodes.push(`[${current.data}]`);

      current = current.next;
    }
    return nodes.join("-> ");
  }
}

const l = new LinkedList();
l.add(34);
l.add(16);
l.add(45);
l.add(8);
console.log(l.printList());
l.insert(23, 2);
console.log(l.printList());
