class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(data) {
    let new_node = new Node(data);
    //check if list is empty
    if (this.head == null) {
      this.tail = new_node;
    } else {
      let current = this.head;
      new_node.next = current;
      current.prev = new_node;
    }
    // in any case
    this.head = new_node;
    this.size++;
  }

  append(data) {
    let new_node = new Node(data);
    //if list is empty
    if (this.head == null) {
      this.head = new_node;
    } else {
      let current = this.tail;
      current.next = new_node;
      new_node.prev = current;
    }
    this.tail = new_node;
    this.size++;
  }

  dataAt(index) {
    if (this.size == 0) return "list does not contain any element";
    else {
      if (index < 0 || index >= this.size) return "invalid index";
      else if (index == 0) return this.head.data;
      else {
        let i = 0;
        let current = this.head;
        while (i < index) {
          current = current.next;
          i++;
        }
        return current.data;
      }
    }
  }

  insertAt(data, index) {
    if (index < 0 || index >= this.size) console.log("invalid index");
    else if (index == 0) this.prepend(data);
    else {
      let i = 0;
      let current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      let new_node = new Node(data);
      let prev_node = current.prev;

      prev_node.next = new_node;
      new_node.next = current;
      this.size++;
    }
  }

  removeFront() {
    //if list is not empty
    if (this.head !== null) {
      if (this.size == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
    }
  }

  removeEnd() {
    //if list is not empty
    if (this.head !== null) {
      if (this.size == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
    }
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
      else if (current === this.tail) nodes.push(`[Tail:${current.data}]`);
      else nodes.push(`[${current.data}]`);

      current = current.next;
    }
    return nodes.join("-> ");
  }
}

const l = new LinkedList();
l.prepend(23);
l.prepend(45);
l.prepend(6);

l.append(7);
l.append(8);
l.append(9);

console.log(l.printList());

console.log(l.size);
console.log(l.dataAt(5));
