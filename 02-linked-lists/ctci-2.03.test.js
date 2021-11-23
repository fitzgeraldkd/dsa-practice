const { SinglyLinkedList, DoublyLinkedList } = require('../classes/LinkedList.js');
const { deleteMiddleNode } = require('./ctci-2.03.js');

const listTypes = [
  {classRef: SinglyLinkedList, desc: 'Remove node from a singly linked list'},
  {classRef: DoublyLinkedList, desc: 'Remove node from a doubly linked list'}
];

describe('Delete a node from the middle linked list only with access to that node', () => {
  listTypes.forEach(listType => {
    test(listType.desc, () => {
      const list = new listType.classRef('a');
      ['b', 'c', 'd', 'e', 'f'].forEach(value => {
        list.append(value);
      });
      const listWithNodeDeleted = new listType.classRef('a');
      ['b', 'd', 'e', 'f'].forEach(value => {
        listWithNodeDeleted.append(value);
      });
      deleteMiddleNode(list.next.next);
      expect(list.print()).toBe(listWithNodeDeleted.print());
      expect(list).toStrictEqual(listWithNodeDeleted);
    });
  });
});