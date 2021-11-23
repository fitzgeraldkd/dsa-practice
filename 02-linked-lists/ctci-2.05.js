const { SinglyLinkedList, DoublyLinkedList } = require('../classes/LinkedList.js');

function sumListsReverse(list1, list2) {
  /*
  Time: O(m+n)
  Space: O(m+n)

  Where:
    m = number of nodes in list1
    n = number of nodes in list2
  */
  let sum;
  const singlyLinked = list1.constructor.name === 'SinglyLinkedList';

  let carryover = 0;
  while ((list1 !== null || list2 !== null) || carryover !== 0) {
    let thisSum = carryover;
    if (list1 !== null) {
      thisSum += list1.data;
      list1 = list1.next;
    }
    if (list2 !== null) {
      thisSum += list2.data;
      list2 = list2.next;
    }

    carryover = Math.floor(thisSum / 10);
    thisSum = thisSum % 10;
    if (sum === undefined) {
      const newDigit = singlyLinked ? new SinglyLinkedList(thisSum) : new DoublyLinkedList(thisSum);
      sum = newDigit;
    } else {
      sum.append(thisSum);;
    }
  }

  return sum;
}

function sumListsForward(list1, list2) {
  /*
  Time: O(m+n)
  Space: O(m+n)

  Where:
    m = number of nodes in list1
    n = number of nodes in list2
  */
  const singlyLinked = list1.constructor.name === 'SinglyLinkedList';

  const getListLength = (list) => {
    let length = 0;
    while (list !== null) {
      length++;
      list = list.next;
    }
    return length;
  };

  let listLength1 = getListLength(list1);
  let listLength2 = getListLength(list2);
  if (listLength1 > listLength2) {
    [list1, list2, listLength1, listLength2] = [list2, list1, listLength2, listLength1]
  };
  for (; listLength1 < listLength2; listLength1++) {
    const leadingZero = singlyLinked ? new SinglyLinkedList(0) : new DoublyLinkedList(0);
    leadingZero.next = list1;
    if (!singlyLinked) list1.prev = leadingZero;
    list1 = leadingZero;
  }

  const addNodes = (node1, node2) => {
    let sum = node1.data + node2.data;
    let childDigit = null;
    if (node1.next !== null) {
      let childCarryover;
      [childDigit, childCarryover] = addNodes(node1.next, node2.next);
      sum += childCarryover;
    }
    const carryover = Math.floor(sum / 10);
    sum = sum % 10;
    const thisDigit = singlyLinked ? new SinglyLinkedList(sum) : new DoublyLinkedList(sum);
    thisDigit.next = childDigit;
    if (!singlyLinked && childDigit !== null) childDigit.prev = thisDigit;
    return [ thisDigit, carryover ];
  };

  let [sum, carryover] = addNodes(list1, list2);
  if (carryover > 0) {
    const thisDigit = singlyLinked ? new SinglyLinkedList(carryover) : new DoublyLinkedList(carryover);
    thisDigit.next = sum;
    if (!singlyLinked) sum.prev = thisDigit;
    sum = thisDigit;
  }

  return sum;
}

module.exports = { sumListsReverse, sumListsForward };