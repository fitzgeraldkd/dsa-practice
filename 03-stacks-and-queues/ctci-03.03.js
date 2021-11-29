const { Stack } = require('../classes/Stack.js');

class StackWithLimit extends Stack {
  constructor({ data, limit }) {
    super(data);
    this.limit = limit;
    this.length = data === undefined ? 0 : 1;
  }

  push(data) {
    this.length++;
    super.push(data);
  }

  pop() {
    this.length--;
    return super.pop();
  }

  isFull() {
    return this.length === this.limit;
  }
}

class SetOfStacks {
  constructor(limit) {
    this.limit = limit;
    this.stacks = [new StackWithLimit({limit: this.limit})];
  }

  lastStack() {
    return this.stacks.at(-1);
  }

  push(value) {
    this.lastStack().push(value);
    if (this.lastStack().isFull()) {
      this.stacks.push(new StackWithLimit({limit: this.limit}));
    }
  }

  pop() {
    if (this.lastStack().isEmpty()) this.stacks.pop();
    // const poppedValue = this.lastStack().pop();
    return this.lastStack().pop();
  }

  popAt(index) {
    return this.stacks[index].pop();
  }
}

module.exports = { SetOfStacks };