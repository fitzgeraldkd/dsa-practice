const { ThreeInOne } = require('./ctci-3.01.js');

describe('ThreeInOne implements three stacks in one array', () => {
  describe('Can pop from a stack in the array', () => {
    const stacksToPop = new ThreeInOne([[0, 1, 2, 3], [], ['foo', 'bar']]);
    test('Pop from stack with items', () => {
      expect(stacksToPop.pop(0)).toBe(3);
      expect(stacksToPop.pop(0)).toBe(2);
      expect(stacksToPop.pop(0)).toBe(1);
    });
    test('Throw error when popping from empty stack', () => {
      expect(() => {
        stacksToPop.pop(1);
      }).toThrow();
    });
    test('Pop from stack with items until empty, then throw error', () => {
      expect(stacksToPop.pop(2)).toBe('bar');
      expect(stacksToPop.pop(2)).toBe('foo');
      expect(() => {
        stacksToPop.pop(2);
      }).toThrow();
    });
  });

  describe('Can push into a stack in the array', () => {
    const stacksToPush = new ThreeInOne();
    test('Can push to stacks', () => {
      stacksToPush.push(0, 0);
      stacksToPush.push(0, 1);
      stacksToPush.push(0, 2);
      stacksToPush.push(0, 3);
      stacksToPush.push(2, 'foo');
      stacksToPush.push(2, 'bar');
    });
    test('Can pop from stacks after push', () => {
      expect(stacksToPush.pop(0)).toBe(3);
      expect(stacksToPush.pop(2)).toBe('bar');
      expect(stacksToPush.pop(2)).toBe('foo');
      expect(() => {
        stacksToPush.pop(2);
      }).toThrow();
    });
  });

  describe('Can peek at top item in stack in the array', () => {
    const stacksToPeek = new ThreeInOne([[0, 1, 2, 3], [], ['foo', 'bar']]);
    test('Can peek into stack that contain value(s)', () => {
      expect(stacksToPeek.peek(0)).toBe(3);
      expect(stacksToPeek.peek(2)).toBe('bar');
      stacksToPeek.pop(2);
      expect(stacksToPeek.peek(2)).toBe('foo');
    });
    test('Throw error when peeking into an empty stack', () => {
      expect(() => {
        stacksToPeek.peek(1);
      }).toThrow();
    });
  });

  describe('Can check if stack in the array is empty', () => {
    const stacksToCheckIfEmpty = new ThreeInOne([[0, 1, 2, 3], [], ['foo', 'bar']]);
    test('Return false if the stack contains at least one item', () => {
      expect(stacksToCheckIfEmpty.isEmpty(0)).toBe(false);
      expect(stacksToCheckIfEmpty.isEmpty(2)).toBe(false);
    });
    test('Return true if the stack contains no items', () => {
      expect(stacksToCheckIfEmpty.isEmpty(1)).toBe(true);
      stacksToCheckIfEmpty.pop(2);
      stacksToCheckIfEmpty.pop(2);
      expect(stacksToCheckIfEmpty.isEmpty(2)).toBe(true);
    });
  })
});