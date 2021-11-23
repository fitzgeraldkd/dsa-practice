function partition(list, x) {
  /*
  Time: O(n)
  Space: O(1)
  */
  let node = list.root;
  let firstRightNode = null;
  let root = list.root;
  const singlyLinked = list.root.constructor.name === 'SinglyLinkedList';

  const getLastNode = (node) => {
    while (node.next !== null) node = node.next;
    return node;
  };

  let prevNode = null;
  while (node !== firstRightNode) {
    const nextNode = node.next;
    
    if (node.data >= x && node.next !== null) {
      const lastNode = getLastNode(node);

      if (firstRightNode === null) firstRightNode = node;

      if (!singlyLinked) {
        nextNode.prev = (node === root) ? null : node.prev;
        node.prev = lastNode;
      }

      node.next = null;
      
      lastNode.next = node;
      if (node === root) { list.root = nextNode; }
      else if (prevNode !== null) { prevNode.next = nextNode; } 
    } else {
      prevNode = node;
    }

    node = nextNode;
  }
}

module.exports = { partition };