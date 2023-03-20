class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    let node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      let focusNode = this.root;
      let parent;
      while (true) {
        parent = focusNode;
        if (data < focusNode.data) {
          focusNode = parent.left;
          if (focusNode === null) {
            parent.left = node;
            return;
          }
        } else {
          focusNode = parent.right;
          if (focusNode === null) {
            parent.right = node;
            return;
          }
        }
      }
    }
  }

  preOrderTraversal(node) {
    if (node != null) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }
}

module.exports = BinaryTree;
