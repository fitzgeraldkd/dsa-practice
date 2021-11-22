function binaryTreeFromArrs(inOrder, postOrder) {
  const binaryTree = [];
  const queue = [{ inOrder, postOrder }];
  while (queue.length > 0) {
    const arrs = queue.shift();
    const root = arrs.postOrder.at(-1);
    binaryTree.push(root);
    const inOrderRootIndex = arrs.inOrder.indexOf(root);
    const inOrderLeft = arrs.inOrder.slice(0, inOrderRootIndex);
    const inOrderRight = arrs.inOrder.slice(inOrderRootIndex+1);
    const postOrderLeft = arrs.postOrder.slice(0, inOrderLeft.length);
    const postOrderRight = arrs.postOrder.slice(inOrderLeft.length, -1);
    if (inOrderLeft.length > 0) {
      queue.push({inOrder: inOrderLeft, postOrder: postOrderLeft});
    }
    if (inOrderRight.length > 0) {
      queue.push({inOrder: inOrderRight, postOrder: postOrderRight});
    }
  }

  // const leftTree = inOrderLeft.length > 1 ? binaryTreeFromArrs(inOrderLeft, postOrderLeft) : 'a'
  return binaryTree;
}

module.exports = { binaryTreeFromArrs };