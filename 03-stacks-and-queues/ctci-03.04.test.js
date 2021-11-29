const { QueueViaStacks } = require('./ctci-03.04.js');

describe('Creates a queue data structure using two stacks', () => {
  test('Can add items to the queue with add', () => {
    const queue = new QueueViaStacks();
    queue.add('foo');
    // expect(queue.stack1.peek() === 'foo' || queue.stack2.peek() === 'foo').toBe(true);
    expect(queue.peek()).toBe('foo');
  });
  test('Can remove items to the queue with remove', () => {
    const queue = new QueueViaStacks();
    queue.add('foo');
    queue.add('bar');
    expect(queue.remove()).toBe('foo');
    expect(queue.remove()).toBe('bar');
  });
  test('Can peek at first item in queue', () => {
    const queue = new QueueViaStacks();
    queue.add('foo');
    queue.add('bar');
    expect(queue.peek()).toBe('foo');
    queue.remove();
    expect(queue.peek()).toBe('bar');
  });
  test('Can check if queue is empty', () => {
    const queue = new QueueViaStacks();
    expect(queue.isEmpty()).toBe(true);
    queue.add('foo');
    expect(queue.isEmpty()).toBe(false);
  });
});