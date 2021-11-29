const { palindrome } = require('./ctci-02.06.js');
const { SinglyLinkedList } = require('../classes/LinkedList.js');

describe('Check if a linked list is a palindrome', () => {
  test('Return true when the linked list is a palindrome', () => {
    {
      const list = new SinglyLinkedList(1);
      [2, 3, 4, 3, 2, 1].forEach(value => {
        list.append(value);
      });
      expect(palindrome(list)).toBe(true);
    }
    {
      const list = new SinglyLinkedList(1);
      [2, 3, 4, 4, 3, 2, 1].forEach(value => {
        list.append(value);
      });
      expect(palindrome(list)).toBe(true);
    }
  });
  test('Return false when the linked list is not a palindrome', () => {
    const list = new SinglyLinkedList(1);
    [2, 3, 4, 3, 2, 1, 2].forEach(value => {
      list.append(value);
    });
    expect(palindrome(list)).toBe(false);
  });
});