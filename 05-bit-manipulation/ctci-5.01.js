// function getBit(number, bit) {
//   return (number & (1 << bit)) != 0
// }

// function setBit(number, bit) {
//   return number | (1 << bit)
// }

// function clearBit(number, bit) {
//   const mask = ~(1 << bit);
//   return number & mask;
// }

function insertion({ n, m, i, j}) {
  let mask = ~(~0 << (31 - j));
  mask = mask << (j - i);
  mask = ~(~mask << i)
  n = (n & mask) | (m << i);
  console.log(mask.toString(2));
  console.log(n.toString(2));
  return n;
}

module.exports = { insertion };