const { Queue } = require('./Queue.js');

describe('Queue', () => {
  test('Can add item to the queue', () => {
    const queueToAddTo = new Queue();
    queueToAddTo.add('foo');
    expect(queueToAddTo.peek()).toBe('foo');
    queueToAddTo.add('bar');
    expect(queueToAddTo.peek()).toBe('foo');
  });

  test('Can remove item from the queue', () => {
    const queueToRemoveFrom = new Queue();
    queueToRemoveFrom.add('foo');
    queueToRemoveFrom.add('bar');
    expect(queueToRemoveFrom.remove()).toBe('foo');
    expect(queueToRemoveFrom.peek()).toBe('bar');
    expect(queueToRemoveFrom.remove()).toBe('bar');
  });

  test('Can peek at first item in the queue', () => {
    const queueToPeekAt = new Queue();
    queueToPeekAt.add('foo');
    expect(queueToPeekAt.peek()).toBe('foo');
    queueToPeekAt.add('bar');
    expect(queueToPeekAt.peek()).toBe('foo');
  });

  test('Can test if queue is empty', () => {
    const queueToCheckIfEmpty = new Queue();
    expect(queueToCheckIfEmpty.isEmpty()).toBe(true);
    queueToCheckIfEmpty.add(42);
    expect(queueToCheckIfEmpty.isEmpty()).toBe(false);
    queueToCheckIfEmpty.remove();
    expect(queueToCheckIfEmpty.isEmpty()).toBe(true);
  });
})