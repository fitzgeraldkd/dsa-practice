import { SinglyLinkedList, DoublyLinkedList } from './Node.js';

const list1 = new DoublyLinkedList(1);
list1.appendToTail(5);
list1.appendToTail(2);
list1.appendToTail(13);
list1.appendToTail(5);
list1.appendToTail(3);

function removeDups(node) {
  const values = {};
  while (node.next !== null) {
    if (node.data in values) {
      deleteMiddleNode(node);
    } else {
      values[node.data] = true;
      node = node.next;
    }
  }
}

function deleteMiddleNode(node) {
  if (node.constructor.name === 'DoublyLinkedList') {
    node.next.prev = node.prev;
  }
  node.data = node.next.data;
  node.next = node.next.next;
}


list1.print();

removeDups(list1);

list1.print();