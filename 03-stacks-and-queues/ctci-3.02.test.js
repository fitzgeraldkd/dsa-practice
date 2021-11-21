const { StackMin } = require('./ctci-3.02.js');

describe('StackMin.min() returns the min value in the stack', () => {
  describe('After instantiation', () => {
    test('Throw error with empty stack', () => {
      const emptyStack = new StackMin();
      expect(() => {
        emptyStack.min();
      }).toThrow();
    });
    test('Access min when initial value assigned', () => {
      const minValue = 5;
      const stackWithItem = new StackMin(minValue);
      expect(stackWithItem.min()).toBe(minValue);
    });
  });
  describe('After pushing', () => {
    test('Result of min() is unchanged when adding larger numbers', () => {
      const minValue = 12;
      const stackToPush = new StackMin(minValue);
      [15, 20, 90, 1000].forEach(value => {
        stackToPush.push(value);
        expect(stackToPush.min()).toBe(minValue);
      });
    });
    test('Result of min() changes when adding smaller numbers', () => {
      const stackToPush = new StackMin(50);
      expect(stackToPush.min()).toBe(50);

      stackToPush.push(25);
      expect(stackToPush.min()).toBe(25);
      
      stackToPush.push(42);
      expect(stackToPush.min()).toBe(25);

      stackToPush.push(37);
      expect(stackToPush.min()).toBe(25);

      stackToPush.push(12);
      expect(stackToPush.min()).toBe(12);
    });
  });
  describe('After popping', () => {
    test('Result of min() is unchanged when popping larger numbers', () => {
      const stackToPop = new StackMin(25);
      [37, 40, 32, 26, 100].forEach(value => stackToPop.push(value));
      expect(stackToPop.min()).toBe(25);
      for (let i=0; i<5; i++) {
        stackToPop.pop();
        expect(stackToPop.min()).toBe(25);
      }
      stackToPop.pop();
      expect(() => {
        stackToPop.min();
      }).toThrow();
    });
    test('Result of min() changes when popping larger numbers', () => {
      const stackToPop = new StackMin(25);
      [37, 8, 40, 32, 1, 100].forEach(value => stackToPop.push(value));
      expect(stackToPop.min()).toBe(1);

      stackToPop.pop();
      expect(stackToPop.min()).toBe(1);

      stackToPop.pop();
      expect(stackToPop.min()).toBe(8);

      stackToPop.pop();
      expect(stackToPop.min()).toBe(8);

      stackToPop.pop();
      expect(stackToPop.min()).toBe(8);

      stackToPop.pop();
      expect(stackToPop.min()).toBe(25);
    });
  });
});