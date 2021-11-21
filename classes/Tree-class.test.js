const { Tree, BinaryTree } = require('../classes/Tree.js');

const testBT = new BinaryTree(1);
testBT.left = new BinaryTree(0);
// console.log(testBT.left, testBT.right);
// console.log(testBT);

const case1 = new Tree(1);
const case2 = new Tree(1, [new Tree(0)]);
const case3 = new Tree(8, [
  new Tree(4, [
    new Tree(2), new Tree(6)
  ]),
  new Tree(10, [
    new Tree(20)
  ])
]);
const case4 = new Tree(8, [
  new Tree(4, [
    new Tree(2), new Tree(12)
  ]),
  new Tree(10, [
    new Tree(20)
  ])
]);

const binaryTest = new BinaryTree(8, [
  new BinaryTree(4, [
    new BinaryTree(2), new BinaryTree(6)
  ]),
  new BinaryTree(10, [
    undefined, new BinaryTree(20)
  ])
]);
console.log(binaryTest.testIsBinarySearch());

const testCases = [
  {
    name: 'Case 1:',
    tree: case1,
    isValid: true,
    isBinary: true,
    isBinarySearch: true,
    isComplete: true,
    isBinarySearchComplete: true,
    isFull: true,
    isPerfect: true
  },
  {
    name: 'Case 2:',
    tree: case2,
    isValid: true,
    isBinary: true,
    isBinarySearch: true,
    isCompleteBinary: true,
    isBinarySearchComplete: true,
    isFullBinary: false,
    isPerfectBinary: false
  },
  {
    name: 'Case 3:',
    tree: case3,
    isValid: true,
    isBinary: true,
    isBinarySearch: true,
    isCompleteBinary: true,
    isBinarySearchComplete: false,
    isFullBinary: false,
    isPerfectBinary: false
  },
  {
    name: 'Case 4:',
    tree: case4,
    isValid: true,
    isBinary: true,
    isBinarySearch: false,
    isCompleteBinary: true,
    isBinarySearchComplete: false,
    isFullBinary: false,
    isPerfectBinary: false
  }
]

describe('Tree', () => {
  testCases.forEach(testCase => {
    describe(testCase.name, () => {
      test('Is valid tree', () => {
        expect(testCase.tree.testIsValid()).toBe(testCase.isValid);
      });
      test('Is binary tree', () => {
        expect(testCase.tree.testIsBinary()).toBe(testCase.isBinary);
      });
      test('Is binary search tree', () => {
        expect(testCase.tree.testIsBinarySearch()).toBe(testCase.isBinarySearch);
      });
    })
  })
})