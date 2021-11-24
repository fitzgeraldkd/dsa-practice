const { listOfDepths } = require('./ctci-4.03.js');
const { BinaryTree } = require('../classes/Tree.js');
const { SinglyLinkedList } = require('../classes/LinkedList.js');

describe('Create linked lists for each depth in the tree', () => {
  test('Perfect Tree', () => {
    const perfectBinaryTree = new BinaryTree(10, [
      new BinaryTree(5, [
        new BinaryTree(9),
        new BinaryTree(18)
      ]),
      new BinaryTree(20, [
        new BinaryTree(3),
        new BinaryTree(7)
      ])
    ]);
    const listDepth0 = new SinglyLinkedList(10);
    const listDepth1 = new SinglyLinkedList(5);
    listDepth1.append(20);
    const listDepth2 = new SinglyLinkedList(9);
    [18, 3, 7].forEach(value => listDepth2.append(value));
    expect(listOfDepths(perfectBinaryTree)).toStrictEqual([listDepth0, listDepth1, listDepth2])
  });
  test('Complete Tree', () => {
    const completeBinaryTree = new BinaryTree(10, [
      new BinaryTree(5, [
        new BinaryTree(3),
        new BinaryTree(7)
      ]),
      new BinaryTree(20, [
        new BinaryTree(15)
      ])
    ]);
    const listDepth0 = new SinglyLinkedList(10);
    const listDepth1 = new SinglyLinkedList(5);
    listDepth1.append(20);
    const listDepth2 = new SinglyLinkedList(3);
    listDepth2.append(7);
    listDepth2.append(15);
    expect(listOfDepths(completeBinaryTree)[2].print()).toBe(listDepth2.print())
    expect(listOfDepths(completeBinaryTree)).toStrictEqual([listDepth0, listDepth1, listDepth2])
  });
});

// const completeBinaryTree = new BinaryTree(10, [
//   new BinaryTree(5, [
//     new BinaryTree(3),
//     new BinaryTree(7)
//   ]),
//   new BinaryTree(20, [
//     new BinaryTree(15)
//   ])
// ]);

// const fullBinaryTree = new BinaryTree(10, [
//   new BinaryTree(5),
//   new BinaryTree(20, [
//     new BinaryTree(3, [
//       new BinaryTree(9),
//       new BinaryTree(18)
//     ]),
//     new BinaryTree(7)
//   ])
// ]);

