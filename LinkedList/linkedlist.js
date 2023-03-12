class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
        previous.next = current.next;
      }
      this.size--;
    }
  }

  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (current.element === element) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
      }
      previous = current;
      current = current.next;
    }
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current != null) {
      str += current.element + "  ";
      current = current.next;
    }
    return str;
  }
}

module.exports = LinkedList;
