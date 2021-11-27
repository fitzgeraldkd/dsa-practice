function groupAnagrams(arr) {
  /*
  Time: O(kn log k)   ~~~   n sorts needed, each sort k log k
  Space: O(kn)

  Where:
    n = arr.length
    k = length of longest word
  */
  const helper = {};
  let anagramFound = false;

  const anagramId = (str) => {
    return str.split('').sort().join('');
  };

  arr.forEach(str => {
    const strId = anagramId(str);
    if (helper[strId]) {
      helper[strId].push(str);
      anagramFound = true;
    } else {
      helper[strId] = [str];
    }
  });

  // no changes needed if no anagrams found
  if (anagramFound) {
    let index = 0;
    for (anagramGroup of Object.values(helper)) {
      for (str of anagramGroup) {
        arr[index] = str;
        index++;
      }
    }
  }

}

module.exports = { groupAnagrams };