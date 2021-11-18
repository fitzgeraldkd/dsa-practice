// import { Tree } from './Tree.js';
// import { Graph, Node} from './Graph.js';

// // const node1 = new Tree(1);
// // const node2 = new Tree(2);
// // const node3 = new Tree(3, [node1, node2]);
// // const node4 = new Tree(4);
// // const node5 = new Tree(5, [node3, node4]);
// // // const node1 = new Tree(6);

// // node5.print();

// const node0 = new Node(0);
// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const node5 = new Node(5);
// const node6 = new Node(6);

// // node0.children = node1;
// node0.addChild(node1);
// node1.addChild(node2);
// node2.addChild(node0);
// node2.addChild(node3);
// node3.addChild(node2);
// node4.addChild(node6);
// node5.addChild(node4);
// node6.addChild(node5);

// const graph = new Graph([node0, node1, node2, node3, node4, node5, node6]);

// console.log(routeBetweenNodes(node3, node6))

function routeBetweenNodes(node1, node2) {
  const queue1 = [node1.children];
  const checked1 = [];
  const queue2 = [node2.children];
  const checked2 = [];
  while (queue1.length > 0 || queue2.length > 0) {
    if (queue1.length > 0) {
      if (search(queue1, node2, checked1)) return true;
    }
    if (queue2.length > 0) {
      if (search(queue2, node1, checked2)) return true;
    }
  }
  // console.log((checked1))
  // console.log((checked2))
  return false;
}

function search(queue, goal, checked) {
  const nodes = queue.shift();
  for (const node of nodes) {
    if (node === goal) return true;
    checked.push(node);
    queue.push(node.children.filter(newNode => !(checked.includes(newNode))));
  }
}

// export { routeBetweenNodes };
module.exports = { routeBetweenNodes };