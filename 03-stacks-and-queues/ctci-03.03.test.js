const { SetOfStacks } = require('./ctci-03.03.js');

describe('Creates a set of stacks where each stack is limited in size', () => {
  test('Can push to SetOfStacks', () => {
    const stacks = new SetOfStacks(5);
    stacks.push(5);
    expect(stacks.stacks[0].peek()).toBe(5);
    stacks.push('foo');
    expect(stacks.stacks[0].peek()).toBe('foo');
  });
  test('Can pop from SetOfStacks', () => {
    const stacks = new SetOfStacks(5);
    stacks.push('foo');
    stacks.push('bar');
    expect(stacks.pop()).toBe('bar');
    expect(stacks.pop()).toBe('foo');
  });
  test('When one stack is full, another stack is added', () => {
    const stacks = new SetOfStacks(5);
    for(let i=0; i<42; i++) {
      stacks.push(i);
    }
    expect(stacks.stacks.length).toBe(9);
    for (let i=0; i<8; i++) {
      expect(stacks.stacks[i].length).toBe(5);
    }
  });
  test('The pop method pops from the last stack in the set', () => {
    const stacks = new SetOfStacks(5);
    for(let i=0; i<42; i++) {
      stacks.push(i);
    }
    expect(stacks.lastStack().length).toBe(2);
    expect(stacks.pop()).toBe(41);
    expect(stacks.lastStack().length).toBe(1);
  });
  test('Pop will remove empty stacks at the end of the set', () => {
    const stacks = new SetOfStacks(5);
    for(let i=0; i<42; i++) {
      stacks.push(i);
    }
    expect(stacks.stacks.length).toBe(9);
    stacks.pop();
    stacks.pop();
    expect(stacks.stacks.length).toBe(9);
    stacks.pop();
    expect(stacks.stacks.length).toBe(8);
  });
  test('popAt pops from a stack at a specified index', () => {
    const stacks = new SetOfStacks(5);
    for(let i=0; i<42; i++) {
      stacks.push(i);
    }
    expect(stacks.popAt(0)).toBe(4);
    expect(stacks.popAt(1)).toBe(9);
    expect(stacks.popAt(1)).toBe(8);
  });
});