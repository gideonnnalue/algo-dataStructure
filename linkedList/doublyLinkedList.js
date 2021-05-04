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

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newNode = new Node(value);
      newNode.prev = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
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
      newNode.prev = currentNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
      return this;
    }
  
    delete(index) {
        if(index >= this.length-1) {
  
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
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.prepend(5);
//   myLinkedList.prepend(6);
  myLinkedList.append(5);
  myLinkedList.append(16);
  console.log(myLinkedList.insert(3, 45));
//   console.log(myLinkedList.delete(2))
  console.log(myLinkedList.printList());
  console.log(myLinkedList);
  