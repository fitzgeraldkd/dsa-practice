function randomInt(min=0, max=10) {
  return Math.floor(Math.random()*(max - min)) + min;
}

function randomIntegerArray(quantity=10, min=0, max=10, sorted=false) {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(randomInt(min, max));
  }
  if (sorted) arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return arr;
}

module.exports = { randomInt, randomIntegerArray };