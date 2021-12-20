const { SinglyLinkedList, DoublyLinkedList } = require('./LinkedList.js');

describe('Singly Linked List', () => {
  test('Can be instantiated', () => {
    const nodeValue = 42;
    const linkedList = new SinglyLinkedList(nodeValue);
    expect(linkedList.data).toBe(nodeValue);
    expect(linkedList.next).toBe(null);
    expect(linkedList.prev).toBe(undefined);
  });
  test('Can append a node', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const linkedList = new SinglyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    expect(linkedList.next.data).toBe(nodeValue2);
    expect(linkedList.next.next).toBe(null);
    expect(linkedList.next.prev).toBe(undefined);
  });
  test('Can print terminal-friendly string', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const linkedList = new SinglyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    expect(linkedList.print()).toBe('foo -> bar');
  });
  test('Can print terminal-friendly string (closed loop)', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const nodeValue3 = 42;
    const linkedList = new SinglyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    linkedList.append(nodeValue3);
    linkedList.closeLoop();
    expect(linkedList.print()).toBe(`${nodeValue1} -> ${nodeValue2} -> ${nodeValue3} -> [loop]`);
  });
});

describe('Doubly Linked List', () => {
  test('Can be instantiated', () => {
    const nodeValue = 42;
    const linkedList = new DoublyLinkedList(nodeValue);
    expect(linkedList.data).toBe(nodeValue);
  });
  test('Can append a node', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const linkedList = new DoublyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    expect(linkedList.next.data).toBe(nodeValue2);
    expect(linkedList.next.next).toBe(null);
    expect(linkedList.next.prev).toBe(linkedList);
  });
  test('Can print terminal-friendly string', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const linkedList = new DoublyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    expect(linkedList.print()).toBe('foo <-> bar');
  });
  test('Can print terminal-friendly string (closed loop)', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const nodeValue3 = 42;
    const linkedList = new DoublyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    linkedList.append(nodeValue3);
    linkedList.closeLoop();
    expect(linkedList.print()).toBe(`${nodeValue1} <-> ${nodeValue2} <-> ${nodeValue3} <-> [loop]`);
  });
  test('Can detect an invalid list', () => {
    const nodeValue1 = 'foo';
    const nodeValue2 = 'bar';
    const nodeValue3 = 42;
    const linkedList = new DoublyLinkedList(nodeValue1);
    linkedList.append(nodeValue2);
    linkedList.append(nodeValue3);
    linkedList.next.next.prev = linkedList;
    expect(linkedList.print()).toBe(`Invalid list: ${nodeValue1} <-> ${nodeValue2} <-> ${nodeValue3}`);
  });
});