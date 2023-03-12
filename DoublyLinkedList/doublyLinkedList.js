class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertHead(value) {
    let node = new Node(value);

    node.next = this.head;

    if (this.head != null) {
      this.head.previous = node;
    }
    this.head = node;
    this.size++;
    if (this.size == 1) {
      this.tail = node;
    }
  }

  insertTail(value) {
    let node = new Node(value);
    node.previous = this.tail;
    if (this.tail != null) {
      this.tail.next = node;
      this.tail = node;
    }
    this.tail = node;
    this.size++;
    if (this.size == 1) {
      this.head = node;
    }
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      console.log("Enter valid inde.");
    } else {
      let node = new Node(value);
      let previous, current;
      current = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head.previous = node;
        this.head = node;
      } else {
        let iteration = 0;
        while (iteration < index) {
          iteration++;
          previous = current;
          current = current.next;
        }
        node.next = current;
        node.previous = previous;
        previous.next = node;
        if (this.size == iteration) {
          this.tail = node;
        }
      }
      this.size++;
    }
  }

  removeHead() {
    if (this.size != 0) {
      if (this.size == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.previous = null;
      }
      this.size--;
    }
  }

  removeTail() {
    if (this.size != 0) {
      if (this.size == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.previous;
        this.tail.next = null;
      }
      this.size--;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid Index");
    } else {
      let previous, current;
      current = this.head;
      if (index == 0) {
        this.head = current.next;
        this.head.previous = null;
      } else {
        let iteration = 0;
        while (iteration != index) {
          iteration++;
          previous = current;
          current = current.next;
        }
        if (current.next) {
          previous.next = current.next;
          current.next.previous = previous;
        } else {
          previous.next = null;
          this.tail = previous;
        }
      }
    }
  }

  printList() {
    let current = this.head;
    let str = "  ";
    while (current) {
      str += current.value + "  ";
      current = current.next;
    }
    console.log(str);
  }
}

module.exports = DoublyLinkedList;
