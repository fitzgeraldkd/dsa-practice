const { SinglyLinkedList, DoublyLinkedList } = require('../classes/LinkedList.js');
const { removeDups, removeDupsNoDS } = require('./ctci-2.01.js');

const testCases = [
  {functionRef: removeDups, desc: 'With the use of additional data structures'},
  {functionRef: removeDupsNoDS, desc: 'Without the use of additional data structures'}
];

const listTypes = [
  {classRef: SinglyLinkedList, desc: 'Remove duplicates from a singly linked list'},
  {classRef: DoublyLinkedList, desc: 'Remove duplicates from a doubly linked list'}
]

describe('Remove duplicates from an unsorted linked list', () => {
  testCases.forEach(testCase => {
    describe(testCase.desc, () => {
      listTypes.forEach(listType => {
        test(listType.desc, () => {
          const inputCase1 = new listType.classRef(1);
          [5, 2, 13, 5, 5, 3, 3, 5].forEach(value => {
            inputCase1.append(value);
          });
          const resultCase1 = new listType.classRef(1);
          [5, 2, 13, 3].forEach(value => {
            resultCase1.append(value);
          });
          expect(testCase.functionRef(inputCase1).print()).toBe(resultCase1.print());
          expect(testCase.functionRef(inputCase1)).toStrictEqual(resultCase1);
        });
      });
    });
  });
});