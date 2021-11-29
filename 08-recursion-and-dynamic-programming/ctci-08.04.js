function powerSet(set) {
  /*
  Time: O(n2^n)
  Space: O(n2^n)

  Where:
    n = set.length
  */
  const results = [];
  let tracker = 0;
  let max = 2 ** set.length;
  while (tracker < max) {
    const subset = [];
    for (let i=0; i<set.length; i++) {
      if (tracker & (1 << i)) subset.push(set[i]);
    }
    results.push(subset);
    tracker++;
  }
  return results;
}

module.exports = { powerSet };