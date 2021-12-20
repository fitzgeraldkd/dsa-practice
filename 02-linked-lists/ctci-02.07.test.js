const { intersection } = require('./ctci-02.07.js');
const { SinglyLinkedList } = require('../classes/LinkedList.js');

describe('Check if two singly linked lists intersect', () => {
  test('Return true if the two lists intersect', () => {
    expect(true).toBe(true);
    {
      // Intersecting node is the first node
      const list1 = new SinglyLinkedList(1);
      const list2 = list1;
      list1.append(2);
      list1.append(3);
      list2.append(4);
      list2.append(5);
      list2.append(6);
      expect(intersection(list1, list2)).toBe(list1);
    }
    {
      // Intersecting node is the last node
      const list1 = new SinglyLinkedList(1);
      const list2 = new SinglyLinkedList('a');
      list1.append(2);
      list1.append(3);
      list2.append(4);
      list2.append(5);
      list2.append(6);
      list2.next.next.next.next = list1.next.next;
      expect(intersection(list1, list2)).toBe(list1.next.next);

    }
    {
      // Intersecting node is in the middle
      const list1 = new SinglyLinkedList(1);
      const list2 = new SinglyLinkedList('a');
      list1.append(2);
      list1.append(3);
      list2.append(4);
      list1.next.next.next = list2.next;
      list2.append(5);
      list2.append(6);
      expect(intersection(list1, list2)).toBe(list2.next);
    }
  });
  test('Return false if the two lists do not intersect', () => {
    {
      // Unique values in both lists
      const list1 = new SinglyLinkedList(1);
      list1.append(2);
      list1.append(3);
      const list2 = new SinglyLinkedList('a');
      list2.append('b');
      list2.append('c');
      list2.append('d');
      expect(intersection(list1, list2)).toBe(false);
    }
    {
      // Unique values in both lists
      const list1 = new SinglyLinkedList('foo');
      list1.append('bar');
      const list2 = new SinglyLinkedList('foo');
      list2.append('bar');
      expect(intersection(list1, list2)).toBe(false);
    }
  });
});