const { groupAnagrams } = require('./ctci-10.02.js');

const anagramsGrouped = (arr) => {
  const sortString = (str) => str.split('').sort().join('');
  const instances = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]
  // arr.forEach((str, i) => {
    const strSorted = sortString(str);
    // console.log(strSorted);
    // if (i > 0) console.log(strSorted, sortString(arr[i - 1]))
    if (instances[strSorted] && strSorted !== sortString(arr[i - 1])) {
      return false;
    }
    instances[strSorted] = true;
  }
  return true;
};

describe('groupAnagrams rearranges a list of strings so anagrams are adjacent to each other', () => {
  test('Array unchanged when no anagrams exist', () => {
    const testcases = [
      [],
      ['foo'],
      ['foo', 'bar'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    ];

    testcases.forEach(testcase => {
      const originalCase = [...testcase];
      groupAnagrams(testcase);
      expect(testcase).toStrictEqual(originalCase);
      expect(anagramsGrouped(testcase)).toBe(true);
    });
  });

  test('Anagrams grouped together after sorting', () => {
    const testcases = [
      ['word', 'test', 'hello', 'sett', 'drow', 'world']
    ];

    testcases.forEach(testcase => {
      groupAnagrams(testcase);
      expect(anagramsGrouped(testcase)).toBe(true);
    });
  });
});