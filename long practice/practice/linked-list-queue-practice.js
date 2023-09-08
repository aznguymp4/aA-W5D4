// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head
        this.length = head?1:0
    }
    addToHead(val) {
        const n = new SinglyLinkedNode(val)
        if(!this.length) {
            this.head = n
        } else {
            n.next = this.head
        }
        this.head = n
        this.length++
    }
    addToTail(val) {
        const n = new SinglyLinkedNode(val)
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

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here
        return this.length
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let sum = 0
        let last = this.head
        while(last.next) {
            sum += last.value
            last = last.next
        }
        sum += last.value
        return sum
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        return this.sumOfNodes()/this.length
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        let last = this.head
        for(let i=0;i<n;i++) last = last.next
        return last

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        return this.findNthNode(~~(this.length/2) - (this.length%2?0:1))

        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // Your code here
        let newList = new SinglyLinkedList()
        let last = this.head
        while(last.next) {
            newList.addToHead(last.value)
            last = last.next
        }
        newList.addToHead(last.value)
        return newList

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        this.head = this.reverse().head

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
        this.length = 0;
    }

    addToHead(val) {
        const n = new DoublyLinkedNode(val)
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
        const n = new DoublyLinkedNode(val)
        if(!this.length) {
            this.head = n
        } else {
            n.prev = this.tail
            this.tail.next = n
        }
        this.tail = n
        this.length++
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        let last = this.head
        for(let i=0;i<n;i++) last = last.next
        return last

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        return this.findNthNode(~~(this.length/2) - (this.length%2?0:1))

        
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here
        let newList = new DoublyLinkedList()
        let last = this.head
        while(last.next) {
            newList.addToHead(last.value)
            last = last.next
        }
        newList.addToHead(last.value)
        return newList

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        this.head = this.reverse().head

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}