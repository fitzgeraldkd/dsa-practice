const { Tree } = require('../classes/Tree.js');
const { Graph, Node } = require('../classes/Graph.js')
const { routeBetweenNodes } = require('./ctci-4.01.js')

const case1node0 = new Node(0);
const case1node1 = new Node(1);
const case1node2 = new Node(2);
const case1node3 = new Node(3);
const case1node4 = new Node(4);
const case1node5 = new Node(5);
const case1node6 = new Node(6);

case1node0.addChild(case1node1);
case1node1.addChild(case1node2);
case1node2.addChild(case1node0);
case1node2.addChild(case1node3);
case1node3.addChild(case1node2);
case1node4.addChild(case1node6);
case1node5.addChild(case1node4);
case1node6.addChild(case1node5);

const case1 = new Graph([case1node0, case1node1, case1node2, case1node3, case1node4, case1node5, case1node6])

const case2node0 = new Node(0);

const case2 = new Graph([case2node0]);

// case1.print();
describe('routeBetweenNodes determines if there is a path between two nodes', () => {
  describe(`Case 1: ${case1.print()}`, () => {
    test('Node 3 and Node 6 (false)', () => {
      expect(routeBetweenNodes(case1node3, case1node6)).toBe(false);
    });
    test('Node 4 and Node 6 (true)', () => {
      expect(routeBetweenNodes(case1node4, case1node6)).toBe(true);
    });
    test('Node 4 and Node 4 (true)', () => {
      expect(routeBetweenNodes(case1node4, case1node4)).toBe(true);
    });
  });
  describe(`Case 2: ${case2.print()}`, () => {
    test('Node 0 and Node 0 (false)', () => {
      expect(routeBetweenNodes(case2node0, case2node0)).toBe(false);
    });
  });
});