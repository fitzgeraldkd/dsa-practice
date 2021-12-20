const { loopDetection } = require('./ctci-02.08.js');
const { SinglyLinkedList } = require('../classes/LinkedList.js');

describe('Returns the node at the start of a loop in a linked list', () => {
  test('Returns the starting node if a loop exists', () => {
    {
      const list = new SinglyLinkedList('A');
      list.append('B');
      list.append('C');
      list.append('D');
      list.append('E');
      const startingNode = list.next.next;
      let n = list;
      while (n.next !== null) {
        n = n.next;
      }
      n.next = startingNode;
      expect(loopDetection(list)).toBe(startingNode);
    }
    {
      const list = new SinglyLinkedList('A');
      list.append('B');
      list.append('C');
      const startingNode = list.next.next;
      startingNode.next = startingNode;
      expect(loopDetection(list)).toBe(startingNode);
    }
    {
      const list = new SinglyLinkedList('A');
      list.next = list;
      expect(loopDetection(list)).toBe(list);
    }
  });
  test('Returns false if no loop exists', () => {
    {
      const list = new SinglyLinkedList('A');
      list.append('B');
      list.append('C');
      list.append('D');
      list.append('E');
      expect(loopDetection(list)).toBe(false);
    }
    {
      const list = new SinglyLinkedList('A');
      expect(loopDetection(list)).toBe(false);
    }
  });
})