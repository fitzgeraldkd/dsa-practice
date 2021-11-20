function commonComparison(baseline, values, allowEqual=false) {
  return (
    values.every(value => value > baseline) ||
    values.every(value => value < baseline) ||
    (allowEqual && values.every(value => value === baseline))
  );
}

module.exports = { commonComparison }