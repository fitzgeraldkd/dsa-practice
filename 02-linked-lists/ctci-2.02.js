import { SinglyLinkedList, DoublyLinkedList } from './Node.js';

const list1 = new SinglyLinkedList(1);
list1.appendToTail(5);
list1.appendToTail(2);
list1.appendToTail(13);
list1.appendToTail(5);
list1.appendToTail(3);

function returnKthToLast(node, k) {
  let listLength = 1;
  let n = node
  while (n.next !== null) {
    listLength++;
    n = n.next;
  }

  while (k < listLength - 1) {
    node = node.next
    k++;
  }
  return node;
}

console.log(returnKthToLast(list1, 5));