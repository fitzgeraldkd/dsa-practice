const { Stack } = require('../classes/Stack.js');

class StackMin extends Stack {
  constructor(value) {
    super(value);
    this.minStack = new Stack(value);
  }

  pop() {
    this.minStack.pop();
    return super.pop();
  }

  push(item) {
    this.minStack.push(Math.min(item, this.minStack.peek()))
    super.push(item);
  }

  min() {
    return this.minStack.peek();
  }
}

module.exports = { StackMin }