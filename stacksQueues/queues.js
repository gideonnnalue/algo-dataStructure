class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
      return this;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this
  }
  dequeue() {
    if(this.length === 0) {
        return this;
    }
    const nextNode = this.first.next;
    this.first = nextNode;
    if(this.length === 1) {
        this.last = this.first
    }
    this.length--;
    return this
  }
}

const myQueue = new Queue();

myQueue.enqueue("discord");
myQueue.enqueue("udemy");
myQueue.enqueue("google");

myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);
