import { Tree } from './Tree.js';
import { SinglyLinkedList } from '../02-linked-lists/LinkedList.js';

function listOfDepths(tree, lists={}, depth=0) {
  if (depth in lists) {
    lists[depth].append(tree.value)
  } else {
    lists[depth] = new SinglyLinkedList(tree.value);
  }
  for (const child of tree.children) {
    listOfDepths(child, lists, depth+1);
  }
  return lists
}

const completeBinaryTree = new Tree(10, [
  new Tree(5, [
    new Tree(3),
    new Tree(7)
  ]),
  new Tree(20, [
    new Tree(15)
  ])
]);

const fullBinaryTree = new Tree(10, [
  new Tree(5),
  new Tree(20, [
    new Tree(3, [
      new Tree(9),
      new Tree(18)
    ]),
    new Tree(7)
  ])
]);

const perfectBinaryTree = new Tree(10, [
  new Tree(5, [
    new Tree(9),
    new Tree(18)
  ]),
  new Tree(20, [
    new Tree(3),
    new Tree(7)
  ])
]);

completeBinaryTree.print();
fullBinaryTree.print();
perfectBinaryTree.print();

console.log(listOfDepths(completeBinaryTree));

Object.values(listOfDepths(completeBinaryTree)).forEach(list => {
  list.print();
});

Object.values(listOfDepths(fullBinaryTree)).forEach(list => {
  list.print();
});

Object.values(listOfDepths(perfectBinaryTree)).forEach(list => {
  list.print();
});