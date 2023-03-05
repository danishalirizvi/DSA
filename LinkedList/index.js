let LinkedList = require("./linkedlist");

let list = new LinkedList();

console.clear();

console.log(list.isEmpty());

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

list.insertAt(20, 1);
console.log(list.printList());

list.removeFrom(2);
console.log(list.printList());

list.removeElement(20);
console.log(list.printList());

console.log(list.indexOf(40));
console.log(list.isEmpty());
console.log(list.sizeOfList());
