const { Stack } = require('../classes/Stack.js');

class QueueViaStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(value) {
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack2.push(value);
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
  }

  remove() {
    return this.stack2.pop();
  }

  peek() {
    return this.stack2.peek();
  }

  isEmpty() {
    return this.stack2.isEmpty();
  }
}

module.exports = { QueueViaStacks };