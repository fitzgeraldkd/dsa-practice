const { Tree } = require('../classes/Tree.js');

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

const testCases = [
  {
    name: 'Case 1:',
    tree: case1,
    isValid: true,
    isBinary: true,
    isBinarySearch: true
  },
  {
    name: 'Case 2:',
    tree: case2,
    isValid: true,
    isBinary: true,
    isBinarySearch: true
  },
  {
    name: 'Case 3:',
    tree: case3,
    isValid: true,
    isBinary: true,
    isBinarySearch: true
  },
  {
    name: 'Case 4:',
    tree: case4,
    isValid: true,
    isBinary: true,
    isBinarySearch: false
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