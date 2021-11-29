function palindrome(list) {
  /*
  Time: O(n)
  Space: O(n)

  Where:
    n = number of items in list
  */
  const elements = [];
  let slowNode = list;
  let fastNode = list;
  let firstHalf = true;
  while (slowNode !== null) {
    if (firstHalf) {
      elements.push(slowNode.data)
      fastNode = fastNode.next;
      if (fastNode === null) elements.pop();
      else fastNode = fastNode.next;
      if (fastNode === null) firstHalf = false;
    } else {
      if (slowNode.data !== elements.pop()) return false;
    }
    slowNode = slowNode.next;
  }
  return true;
}

module.exports = { palindrome };