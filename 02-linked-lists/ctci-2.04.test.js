const { LinkedList, SinglyLinkedList, DoublyLinkedList } = require('../classes/LinkedList.js');
const { partition } = require('./ctci-2.04.js');

const listTypes = [
  {classRef: SinglyLinkedList, desc: 'Partition a singly linked list'},
  {classRef: DoublyLinkedList, desc: 'Partition a doubly linked list'}
];

describe('Partition the list where all elements less than x are on the left', () => {
  listTypes.forEach(listType => {
    describe(listType.desc, () => {
      test('Partition successful where first element must remain in the left part', () => {
        const rootToPartition = new listType.classRef(3);
        [5, 8, 5, 10, 2, 1].forEach(value => {
          rootToPartition.append(value);
        });
        const valueToPartitionBy = 5;
        const listToPartition = new LinkedList(rootToPartition);
        console.log(rootToPartition.print())
        partition(listToPartition, valueToPartitionBy);
        let nodeToCheck = listToPartition.root;
        let smallerValuesOnLeft = true;
        while (nodeToCheck !== null) {
          if (nodeToCheck.data < valueToPartitionBy) {
            expect(smallerValuesOnLeft).toBe(true);
          } else {
            smallerValuesOnLeft = false;
          }
          nodeToCheck = nodeToCheck.next;
        }
      });
      test('Partition successful where first element must move to the right part', () => {
        const rootToPartition = new listType.classRef(3);
        [5, 8, 5, 10, 2, 1].forEach(value => {
          rootToPartition.append(value);
        });
        const valueToPartitionBy = 3;
        const listToPartition = new LinkedList(rootToPartition);
        console.log(rootToPartition.print())
        partition(listToPartition, valueToPartitionBy);
        let nodeToCheck = listToPartition.root;
        let smallerValuesOnLeft = true;
        while (nodeToCheck !== null) {
          if (nodeToCheck.data < valueToPartitionBy) {
            expect(smallerValuesOnLeft).toBe(true);
          } else {
            smallerValuesOnLeft = false;
          }
          nodeToCheck = nodeToCheck.next;
        }
      });
      test('Partition successful when the list is a single element', () => {
        const originalRoot = new listType.classRef(3);
        const originalList = new LinkedList(originalRoot);

        const rootToPartition = new listType.classRef(3);
        const listToPartition = new LinkedList(rootToPartition);
        let valueToPartitionBy = 5;
        partition(listToPartition, valueToPartitionBy);
        expect(listToPartition).toStrictEqual(originalList);

        valueToPartitionBy = 1;
        partition(listToPartition, valueToPartitionBy);
        expect(listToPartition).toStrictEqual(originalList);
      });
    });
  });
});