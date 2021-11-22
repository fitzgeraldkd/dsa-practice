const { binaryTreeFromArrs } = require('./lc-0106.js');

describe('Construct binary tree from inOrder and postOrder arrays', () => {
  test('', () => {
    expect(binaryTreeFromArrs([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toBe([3, 9, 20, null, null, 15, 7]);
  });
});