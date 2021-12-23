const { Stack } = require('../classes/Stack.js');
const { sortStack } = require('./ctci-03.05.js');

describe('Sort a stack so smallest numbers are on top', () => {
  test('Returns original stack if already sorted', () => {
    const inputStack = new Stack();
    const expectedStack = new Stack();
    [4, 3, 2, 1].forEach(val => inputStack.push(val));
    [4, 3, 2, 1].forEach(val => expectedStack.push(val));
    expect(sortStack(inputStack)).toStrictEqual(expectedStack);
  });
  test('Returns sorted stack', () => {
    const inputStack = new Stack();
    const expectedStack = new Stack();
    [1, 4, 2, 3].forEach(val => inputStack.push(val));
    [4, 3, 2, 1].forEach(val => expectedStack.push(val));
    expect(sortStack(inputStack)).toStrictEqual(expectedStack);
  });
  test('Returns sorted stack (with duplicated items)', () => {
    const inputStack = new Stack();
    const expectedStack = new Stack();
    [1, 5, 4, 2, 3, 5].forEach(val => inputStack.push(val));
    [5, 5, 4, 3, 2, 1].forEach(val => expectedStack.push(val));
    expect(sortStack(inputStack)).toStrictEqual(expectedStack);
  });
});