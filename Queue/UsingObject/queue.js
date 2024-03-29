class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    } else {
      console.log("Queue already empty");
      return null;
    }
  }

  isEmpty() {
    return this.front - this.rear === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

module.exports = Queue;
