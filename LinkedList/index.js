class Node {
  constructor(element) {
    this.element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = o;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index.");
    } else {
      let node = new Node(element);
      let previous, current;
      current = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let iteration = 0;
        while (iteration < index) {
          iteration++;
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index.");
    } else {
      let current = this.head;
      let previous = current;
      let iteration = 0;

      if (index === 0) {
        this.head = current.next;
      } else {
        while (iteration < index) {
          iteration++;
          previous = current;
          current = current.next;
        }
      }
    }
  }
}
