console.log(
  "<==========================================>\nBinary Search Tree Data Structure\n<==========================================>"
);

let BinaryTree = require("./binaryTree");

let bt = new BinaryTree();
bt.addNode(50);
bt.addNode(25);
bt.addNode(75);
bt.addNode(12);
bt.addNode(37);
bt.addNode(43);
bt.addNode(30);

bt.preOrderTraversal(bt.root);
