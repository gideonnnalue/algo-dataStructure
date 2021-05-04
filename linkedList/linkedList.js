// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
//10-->5-->6-->9-->4

//4-->
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === this.length - 1) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index > this.length - 1 || index < 0) {
      return new Error(`Index should be between 0 and ${this.length - 1}`);
    }
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const nextNode = currentNode.next;
    const newNode = new Node(value);
    currentNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }

  delete(index) {
    if (index >= this.length - 1) {
    }
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    let nodeToRemove = currentNode.next;
    currentNode.next = nodeToRemove.next;
    this.length--;
    return this;
  }

  reverse() {
    if(!this.head.next) {
        return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this
  }

  reverse2() {
      if(!this.head.next) {
          return this;
      }
      let first = this.head;
      this.tail = first;
      let second = first.next;
      while (second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this

  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.prepend(6);
myLinkedList.append(5);
myLinkedList.append(16);
// console.log(myLinkedList.insert(2, 45));
// console.log(myLinkedList.delete(2));
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse2())
console.log(myLinkedList.printList());
// console.log(myLinkedList);

// [6, 5, 10, 5, 16]
// --> first iteration
// first 6 --> 5, second 5 --> 10
// third(temp) 10 --> 5
// second 5 --> 6
// first 5 --> 6;
// second 10 --> 5

// [5, 6, 10, 5, 16]
// --> second iteration
// first 5 --> 6, second 10 --> 5
// third(temp) 5 --> 16 
// second 10 --> 5 --> 6
// first 10 --> 5 --> 6
// second 5 --> 16

// --> thrid iteration
// first 10 --> 5 --> 6, second 5 --> 16
// third(temp) 16 --> null
// second 5 --> 10 --> 5 --> 6
// first 5 --> 10 --> 5 --> 6
// second 16

// [16, 5, 10, 5, 6]
// --> forth iteration
// first 5 --> 10 --> 5 --> 6, second 16 --> null
// third(temp) null
// second 16 --> 5 --> 10 --> 5 --> 6
// first 16 --> 5 --> 10 --> 5 --> 6
// second null

