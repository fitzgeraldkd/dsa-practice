class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = value === undefined ? null : new QueueNode(value);
    this.last = this.first;
  }

  add(value) {
    const newNode = new QueueNode(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  remove() {
    const removedValue = this.first.value;
    this.first = this.first.next;
    if (this.first === null) this.last = this.first;
    return removedValue;
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    return this.first === null;
  }
}

module.exports = { Queue };