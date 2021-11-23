const { SinglyLinkedList, DoublyLinkedList } = require('../classes/LinkedList.js');
const { returnKthToLast } = require('./ctci-2.02.js');

const listTypes = [
  {classRef: SinglyLinkedList, desc: 'Return element from a singly linked list'},
  {classRef: DoublyLinkedList, desc: 'Return element from a doubly linked list'}
];

describe('Return the kth to last element in a linked list', () => {
  listTypes.forEach(listType => {
    test(listType.desc, () => {
      const list = new listType.classRef(1);
      const nodes = [];
      [5, 2, 13, 5, 3].forEach(value => {
        list.append(value);
      });
      expect(returnKthToLast(list, 2)).toBe(list.next.next.next);
    });
  });
});