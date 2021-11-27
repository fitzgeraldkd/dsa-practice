function tripleStep(steps) {
  let [a, b, c] = [0, 0, 1];
  for (let i=1; i<steps; i++) {
    const d = a + b + c;
    [a, b, c] = [b, c, d];
  }
  return a + b + c;
}

module.exports = { tripleStep };