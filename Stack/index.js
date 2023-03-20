const Stack = require("./stack");

let stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.size());

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);

console.log(stack.isEmpty());
console.log(stack.size());

stack.print();

stack.pop();

stack.print();

console.log(stack.peek());
