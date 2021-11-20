const { Tree } = require('../classes/Tree.js');
const { Graph, Node } = require('../classes/Graph.js');
const { minimalTree } = require('./ctci-4.02.js');

const case1 = [...Array(3).keys()];
const case1results = new Tree(1, [0, 2])
console.log(JSON.stringify(case1results));

console.log((new Tree(1, [new Tree(1)]).testIsBinary()))

describe('minimalTree ', () => {
  describe(`Case 1:`, () => {
    test('Is binary tree', () => {
      expect(minimalTree(case1).testIsBinary()).toBe(true);
    })
  })
})