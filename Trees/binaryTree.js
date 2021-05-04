class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let parentNode = this.root;
    let currentNode = parentNode;
    while (currentNode) {
      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
    }
    if (value > parentNode.value) {
      parentNode.right = newNode;
    } else if (value < parentNode.value) {
      parentNode.left = newNode;
    }
    return this;
  }
  insert2(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        //Right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        // Left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return this;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (!currentNode.right) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.left;
            } else if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.left;
            }
          }
        } else if (!currentNode.left) {
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            parentNode.right = currentNode.right;
          }
        }  
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert2(10);
tree.insert(12);
tree.insert(9);
tree.insert(32);
console.log(tree.lookup(9));
console.log(tree);
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
