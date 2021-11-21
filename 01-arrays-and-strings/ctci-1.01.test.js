const { isUnique, isUniqueNoDS } = require('./ctci-1.01.js');

const options = [
  {functionRef: isUnique, desc: 'With additional data structures'},
  {functionRef: isUniqueNoDS, desc: 'Without additional data structures'}
];

describe('Determine if all characters in string are unique', () => {
  options.forEach(option => {
    describe(option.desc, () => {
      test('Return true when no duplicate characters exist', () => {
        expect(option.functionRef('')).toBe(true);
        expect(option.functionRef('a')).toBe(true);
        expect(option.functionRef('abcdef')).toBe(true);
        expect(option.functionRef('abc')).toBe(true);
        expect(option.functionRef('a A')).toBe(true);
      });
      test('Return false when duplicate characters exist', () => {
        expect(option.functionRef('asdflksja')).toBe(false);
        expect(option.functionRef('aabbcc')).toBe(false);
      });
    });
  });
});