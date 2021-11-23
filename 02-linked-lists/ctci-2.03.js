function deleteMiddleNode(node) {
  /*
  Time: O(1)
  Space: O(1)
  */
  if (node.constructor.name === 'DoublyLinkedList') {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  } else {
    node.data = node.next.data;
    node.next = node.next.next;
  }
}

module.exports = { deleteMiddleNode };