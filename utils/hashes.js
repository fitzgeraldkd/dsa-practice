function countElements(arr) {
  const count = {};
  arr.forEach(value => {
    if (count[value]) {
      count[value]++;
    } else {
      count[value] = 1;
    }
  });
  return count;
}

module.exports = { countElements };