class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek(){
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    if(!this.bottom) {
        this.bottom = newNode;
    }
    this.top = newNode;
    this.length++;
    return this
  }
  pop() {
    if(this.length === 0) {
        return this;
    }
    const nextNode = this.top.next;
    this.top = nextNode;
    if(this.length === 1) {
        this.bottom = this.top
    }
    this.length--;
    return this
  }
}

const myStack = new Stack();
myStack.push('discord');
myStack.push('udemy');
myStack.push('google');

// myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack.peek());
console.log(myStack)