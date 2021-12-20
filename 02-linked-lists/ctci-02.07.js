function intersection(list1, list2) {
  /*
  Time: O(A + B)
  Space: O(1)

  Where:
    A = length of list1
    B = length of list2
  */

  let n = list1;
  let length1 = 1;
  while (n.next !== null) {
    length1++;
    n = n.next;
  }

  let m = list2;
  let length2 = 1;
  while (m.next !== null) {
    length2++;
    m = m.next;
  }

  if (n !== m) return false;

  [n, m] = [list1, list2];
  while (length1 > length2) {
    n = n.next;
    length1--;
  }
  while (length1 < length2) {
    m = m.next;
    length2--;
  }
  while (n !== m) {
    n = n.next;
    m = m.next;
  }
  return n;
}

function intersectionSuboptimal(list1, list2) {
  /*
  Time: O(A + B)
  Space: O(A)

  Where:
    A = length of list1
    B = length of list2
  */
  const nodes = [];
  let n = list1;
  while (n !== null) {
    nodes.push(n);
    n = n.next;
  }
  let m = list2;
  while (m !== null) {
    if (nodes.includes(m)) return m;
    m = m.next;
  }
  return false;
}

module.exports = { intersection };