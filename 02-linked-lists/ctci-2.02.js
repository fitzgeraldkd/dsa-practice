function returnKthToLast(node, k) {
  /*
  Time: O(n)
  Space: O(1)

  Where:
    n = number of nodes in the linked list
  
  Notes:
    Return the last element when k=0
  */
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

module.exports = { returnKthToLast };