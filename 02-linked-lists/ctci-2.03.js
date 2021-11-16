import { SinglyLinkedList, DoublyLinkedList } from './Node.js';

const list1 = new DoublyLinkedList('a');
list1.appendToTail('b');
list1.appendToTail('c');
// let nodeToRemove = new SinglyLinkedList('c');
// list1.next.next = nodeToRemove;
list1.appendToTail('d');
list1.appendToTail('e');
list1.appendToTail('f');

function deleteMiddleNode(node) {
  if (node.constructor.name === 'DoublyLinkedList') {
    node.next.prev = node.prev;
  }
  node.data = node.next.data;
  node.next = node.next.next;
}


// console.log(list1);
list1.print();
// list1.validate();

deleteMiddleNode(list1.next.next);
// nodeToRemove = nodeToRemove.next;
// deleteMiddleNode(nodeToRemove);

// console.log(list1);
list1.print();
// list1.validate();
// console.log(nodeToRemove);