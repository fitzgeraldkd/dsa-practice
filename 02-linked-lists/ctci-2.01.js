function removeDups(tree, values = {}) {
  if (tree === null || tree.next === null) return tree;
  values[tree.data] = true;
  if (values[tree.next.data]) {
    if (tree.constructor.name === 'DoublyLinkedList' && tree.next.next !== null) {
      tree.next.next.prev = tree;
    }
    tree.next = tree.next.next === null ? null : tree.next.next;
    removeDups(tree, values);
  } else {
    removeDups(tree.next, values);
  }
  return tree;
}

function removeDupsNoDS(leftPointer) {
  const tree = leftPointer;
  while (leftPointer !== null) {
    let rightPointer = leftPointer;
    while (rightPointer.next !== null) {
      const next = rightPointer ? rightPointer.next : null;
      if (rightPointer.next.data === leftPointer.data) {
        if (rightPointer.constructor.name === 'DoublyLinkedList' && rightPointer.next.next !== null) {
          rightPointer.next.next.prev = rightPointer;
        }
        rightPointer.next = rightPointer.next.next === null ? null : rightPointer.next.next;
      } else {
        rightPointer = next
      }
    }
    leftPointer = leftPointer.next;
  }
  return tree;
}

module.exports = { removeDups, removeDupsNoDS };