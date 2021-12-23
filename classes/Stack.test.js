const { Stack } = require('./Stack.js');

describe('Stack', () => {
  test('Can instantiate an empty stack', () => {
    const emptyStack = new Stack();
    expect(emptyStack.top).toBe(null);
  });
  test('Can instantiate a stack with a node', () => {
    const nodeValue = 5;
    const stackWithNode = new Stack(nodeValue);
    expect(stackWithNode.top.value).toBe(nodeValue);
  });
  test('Can pop items out of stack', () => {
    const nodeValue = 7;
    const stackToPop = new Stack(nodeValue);
    expect(stackToPop.pop()).toBe(nodeValue);
    expect(stackToPop.top).toBe(null);
  });
  test('Can push items into an empty stack', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const stackToPush = new Stack();
    stackToPush.push(nodeValue1);
    expect(stackToPush.top.value).toBe(nodeValue1);
    stackToPush.push(nodeValue2);
    expect(stackToPush.top.value).toBe(nodeValue2);
  });
  test('Can push items into stack', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const stackToPush = new Stack(nodeValue1);
    expect(stackToPush.top.value).toBe(nodeValue1);
    stackToPush.push(nodeValue2);
    expect(stackToPush.top.value).toBe(nodeValue2);
  });
  test('Can peek top item of stack', () => {
    const nodeValue = '42';
    const stackToPeek = new Stack(nodeValue);
    expect(stackToPeek.peek()).toBe(nodeValue);
  });
  test('Can check if stack is empty', () => {
    const emptyStack = new Stack();
    expect(emptyStack.isEmpty()).toBe(true);

    const stackWithValue = new Stack(1);
    expect(stackWithValue.isEmpty()).toBe(false);
  })
});