class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  addToHead(val) {
    const n = new DoublyLinkedListNode(val)
    if(!this.length) {
      this.tail = n
    } else {
      n.next = this.head
      this.head.prev = n
    }
    this.head = n
    this.length++
  }

  addToTail(val) {
    const n = new DoublyLinkedListNode(val)
    if(!this.length) {
      this.head = n
    } else {
      n.prev = this.tail
      this.tail.next = n
    }
    this.tail = n
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;