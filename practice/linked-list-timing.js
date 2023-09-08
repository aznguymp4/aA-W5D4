const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here 

const list1 = new LinkedList()
const list2 = new DoublyLinkedList()

console.time('Singly addToHead')
list1.addToHead(1)
console.timeEnd('Singly addToHead')

console.time('Singly addToTail')
list1.addToTail(2)
console.timeEnd('Singly addToTail')

console.time('Doubly addToHead')
list2.addToHead(1)
console.timeEnd('Doubly addToHead')

console.time('Doubly addToTail')
list2.addToTail(2)
console.timeEnd('Doubly addToTail')