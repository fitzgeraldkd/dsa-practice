import { SinglyLinkedList, DoublyLinkedList } from './LinkedList.js';

const list1 = new DoublyLinkedList(1);
list1.append(5);
list1.append(2);
list1.append(13);
list1.append(5);
list1.append(5);
list1.append(3);
list1.append(3);
list1.append(5);

// FIXME: not removing the last 5
function removeDups(node) {
  const values = {};
  while (node !== null) {
    const next = node.next;
    if (node.data in values) {
      deleteMiddleNode(node);
    } else {
      values[node.data] = true;
    }
    node = next;
  }  
}

function deleteMiddleNode(node) {
  if (node.constructor.name === 'DoublyLinkedList') {
    if (node.next) node.next.prev = node.prev;
    node.prev.next = node.next ? node.next : null;
  }
  node.data = node.next ? node.next.data : null;
  node.next = node.next ? node.next.next : null;
}


list1.print();

removeDups(list1);

list1.print();