const { SinglyLinkedList, DoublyLinkedList } = require('../classes/LinkedList.js');
const { sumListsReverse, sumListsForward } = require('./ctci-2.05.js');

const listTypes = [
  {classRef: SinglyLinkedList, desc: 'Sum values from singly linked lists'},
  {classRef: DoublyLinkedList, desc: 'Sum values from doubly linked lists'}
];

describe('Sums linked lists where each list holds the digits', () => {
  listTypes.forEach(listType => {
    describe(listType.desc, () => {
      describe('Successful when digits are stored in reverse order', () => {
        test('Add lists with equal number of digits', () => {
          const list1 = new listType.classRef(7);
          [1, 6].forEach(value => {
            list1.append(value);
          });
          const list2 = new listType.classRef(5);
          [9, 2].forEach(value => {
            list2.append(value);
          });
          const sum = new listType.classRef(2);
          [1, 9].forEach(value => {
            sum.append(value);
          });
          expect(sumListsReverse(list1, list2).print()).toStrictEqual(sum.print());
          expect(sumListsReverse(list1, list2)).toStrictEqual(sum);
        });
        test('Add lists with a different number of digits', () => {
          const list1 = new listType.classRef(8);
          [3, 1, 7].forEach(value => {
            list1.append(value);
          });
          const list2 = new listType.classRef(2);
          [4].forEach(value => {
            list2.append(value);
          });
          const sum = new listType.classRef(0);
          [8, 1, 7].forEach(value => {
            sum.append(value);
          });
          expect(sumListsReverse(list1, list2).print()).toStrictEqual(sum.print());
          expect(sumListsReverse(list1, list2)).toStrictEqual(sum);
          expect(sumListsReverse(list2, list1).print()).toStrictEqual(sum.print());
          expect(sumListsReverse(list2, list1)).toStrictEqual(sum);
        });
        test('Add lists when sum has an additional digit', () => {
          const list1 = new listType.classRef(4);
          [3, 2, 1].forEach(value => {
            list1.append(value);
          });
          const list2 = new listType.classRef(6);
          [6, 7, 8].forEach(value => {
            list2.append(value);
          });
          const sum = new listType.classRef(0);
          [0, 0, 0, 1].forEach(value => {
            sum.append(value);
          });
          expect(sumListsReverse(list1, list2).print()).toStrictEqual(sum.print());
          expect(sumListsReverse(list1, list2)).toStrictEqual(sum);
        });
      });
      describe('Successful when digits are stored in forward order', () => {
        test('Add lists with equal number of digits', () => {
          const list1 = new listType.classRef(6);
          [1, 7].forEach(value => {
            list1.append(value);
          });
          const list2 = new listType.classRef(2);
          [9, 5].forEach(value => {
            list2.append(value);
          });
          const sum = new listType.classRef(9);
          [1, 2].forEach(value => {
            sum.append(value);
          });
          expect(sumListsForward(list1, list2).print()).toStrictEqual(sum.print());
          expect(sumListsForward(list1, list2)).toStrictEqual(sum);
        });
        test('Add lists with a different number of digits', () => {
          const list1 = new listType.classRef(7);
          [1, 3, 8].forEach(value => {
            list1.append(value);
          });
          const list2 = new listType.classRef(4);
          [2].forEach(value => {
            list2.append(value);
          });
          const sum = new listType.classRef(7);
          [1, 8, 0].forEach(value => {
            sum.append(value);
          });
          expect(sumListsForward(list1, list2).print()).toStrictEqual(sum.print());
          expect(sumListsForward(list1, list2)).toStrictEqual(sum);
          expect(sumListsForward(list2, list1).print()).toStrictEqual(sum.print());
          expect(sumListsForward(list2, list1)).toStrictEqual(sum);
        });
        test('Add lists when sum has an additional digit', () => {
          const list1 = new listType.classRef(1);
          [2, 3, 4].forEach(value => {
            list1.append(value);
          });
          const list2 = new listType.classRef(8);
          [7, 6, 6].forEach(value => {
            list2.append(value);
          });
          const sum = new listType.classRef(1);
          [0, 0, 0, 0].forEach(value => {
            sum.append(value);
          });
          expect(sumListsForward(list1, list2).print()).toStrictEqual(sum.print());
          expect(sumListsForward(list1, list2)).toStrictEqual(sum);
        });
      });
    });
  });
})