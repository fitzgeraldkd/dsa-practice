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

module.exports = { routeBetweenNodes };