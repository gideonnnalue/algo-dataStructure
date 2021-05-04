class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
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
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length - 1) {
      this.append(value);
    }

    let previousNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next;
    }
    const nodeAfter = previousNode.next;
    const newNode = new Node(value);
    newNode.next = nodeAfter;
    previousNode.next = newNode;
    this.length++;
    return this;
  }

  delete(index) {
    if (index > this.length - 1) {
      return new Error(`Index should be between 0 and ${this.length - 1}`);
    }
    let previousNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next;
    }
    let nodeToDelete = previousNode.next;
    previousNode.next = nodeToDelete.next;
    this.length--;
    return this;
  }
  reverse() {
    let first = this.head;
    // this.tail = first;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

// 3 --> 5 --> 6 --> 7 --> 8 --> 9
const myList = new LinkedList("Gideon");
// myList.prepend("Victor");
myList.append("Jude");
myList.append("Victor");
myList.append("Faith");

console.log(myList.insert(2, "Patrick"));
myList.delete(2);
console.log(myList.printList());
console.log(myList);

myList.reverse();
console.log(myList.printList());
console.log(myList);
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
