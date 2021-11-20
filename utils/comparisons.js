function commonComparison(baseline, values, comps=['<', '>']) {
  return (
    (comps.includes('>') && values.every(value => value > baseline)) ||
    (comps.includes('<') && values.every(value => value < baseline)) ||
    (comps.includes('===') && values.every(value => value === baseline))
  );
}

module.exports = { commonComparison }