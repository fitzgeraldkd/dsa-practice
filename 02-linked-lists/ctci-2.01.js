function removeDups(list, values = {}) {
  /*
  Time: O(n)
  Space: O(n)

  Where:
    n = number of nodes in linked list
  
  Notes:
    Uses additional data structure to optimize time
  */
  if (list === null || list.next === null) return list;
  values[list.data] = true;
  if (values[list.next.data]) {
    if (list.constructor.name === 'DoublyLinkedList' && list.next.next !== null) {
      list.next.next.prev = list;
    }
    list.next = list.next.next === null ? null : list.next.next;
    removeDups(list, values);
  } else {
    removeDups(list.next, values);
  }
  return list;
}

function removeDupsNoDS(leftPointer) {
  /* 
  Time: O(n^2)
  Space: O(1)

  Where:
    n = number of nodes in linked list
  
    Notes:
      Does not use additional data structures
  */
  const list = leftPointer;
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
  return list;
}

module.exports = { removeDups, removeDupsNoDS };