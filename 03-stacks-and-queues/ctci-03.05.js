const { Stack } = require('../classes/Stack');

const sortStack = (stack) => {
  /*
  Time: O(n^2)
  Space: O(n)

  Where:
    n = number of nodes in the stack
  */
  const tempStack = new Stack();
  let changed = true;
  while (changed) {
    changed = false;
    let tempNode = stack.pop();
    while (!stack.isEmpty()) {
      if (stack.peek() < tempNode) {
        tempStack.push(stack.pop());
        changed = true;
      } else {
        tempStack.push(tempNode);
        tempNode = stack.pop();
      }
    }
    tempStack.push(tempNode);
    while (!tempStack.isEmpty()) stack.push(tempStack.pop())
  }
  return stack;
};

module.exports = { sortStack };