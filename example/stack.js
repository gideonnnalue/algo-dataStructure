class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LIFO (Last in first Out)
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  printList() {
    const array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  peek() {
    return this.top;
  }

  // add at the beginning
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    if (!this.bottom) {
      this.bottom = newNode;
    }
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    const node = this.top.next;
    this.top = node;
    if (!this.top) {
      this.bottom = null;
    }
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push("discord");
myStack.push("udemy");
myStack.push("google");

myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek());
console.log(myStack.printList());
console.log(myStack);
