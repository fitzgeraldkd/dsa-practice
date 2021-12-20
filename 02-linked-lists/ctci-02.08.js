function loopDetection(list) {
  /*
  Time: O(A)
  Space: O(1)

  Where:
    A = length of list
  */

  if (list.next && list.next.next) {
    let pointerA = list.next;
    let pointerB = list.next.next;
    while (pointerA !== pointerB) {
      pointerA = pointerA.next;
      if (pointerB.next && pointerB.next.next) pointerB = pointerB.next.next;
      else return false;
    }
    pointerA = list;
    while (pointerA !== pointerB) {
      pointerA = pointerA.next;
      pointerB = pointerB.next;
    }
    return pointerA;
  }
  return false;
}

module.exports = { loopDetection };
