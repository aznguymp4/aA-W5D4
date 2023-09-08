class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  addToHead(val) {
    const n = new LinkedListNode(val)
    if(!this.length) {
      this.head = n
    } else {
      n.next = this.head
    }
    this.head = n
    this.length++
  }

  addToTail(val) {
    const n = new LinkedListNode(val)
    if(!this.length) {
      this.head = n
    } else {
      let last = this.head
      while (last.next) {
        last = last.next
      }
      last.next = n
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;