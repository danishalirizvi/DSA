const Queue = require("./queue");

let queue = new Queue();

queue.dequeue();

console.log(queue.isEmpty());
console.log(queue.size());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.isEmpty());
console.log(queue.size());

queue.print();

queue.dequeue();

queue.print();
console.log(queue.size());
