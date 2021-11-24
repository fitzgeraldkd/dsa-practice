const { SinglyLinkedList } = require('../classes/LinkedList.js');

function listOfDepths(tree) {
  const makeList = (nodes) => {
    // nodes is an array of all nodes for a single depth
    // return an array of all linked lists made so far
    // if nodes have children, create another nodes array and recursively call makeList
    const children = [];
    let allLists;
    let thisList;
    for (const node of nodes) {
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
      if (thisList) {
        thisList.append(node.value);
      } else {
        thisList = new SinglyLinkedList(node.value);
      }
    }
    if (children.length > 0) {
      allLists = [thisList, ...makeList(children)];
    } else {
      allLists = [thisList];
    }
    return allLists;
  };
  const depthLists = makeList([tree]);
  return depthLists;
}

module.exports = { listOfDepths };