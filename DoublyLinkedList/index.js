let DoublyLinkedList = require("./doublyLinkedList");

let list = new DoublyLinkedList();

console.clear();
list.removeTail();
list.removeHead();
list.insertHead(5);
list.insertHead(10);
list.insertHead(15);
list.insertHead(20);
console.log(list.size);
list.printList();
list.removeHead();
list.printList();
console.log(list.size);
list.removeTail();
list.printList();
console.log(list.size);
