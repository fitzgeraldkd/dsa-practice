const { oneAway } = require('./ctci-1.05.js');

describe('Check if two strings are one or zero edit(s) away from being equal (can add, remove, or swap a character)', () => {
  test('Return true if strings are identical', () => {
    expect(oneAway('foo', 'foo')).toBe(true);
    expect(oneAway('bar', 'bar')).toBe(true);
  });
  test('Return true if only one swap is needed', () => {
    expect(oneAway('bar', 'ban')).toBe(true);
    expect(oneAway('bar', 'brr')).toBe(true);
    expect(oneAway('tough', 'cough')).toBe(true);
  });
  test('Return true if only one addition needed', () => {
    expect(oneAway('bar', 'barn')).toBe(true);
    expect(oneAway('foo', 'food')).toBe(true);
    expect(oneAway('tough', 'trough')).toBe(true);
    expect(oneAway('light', 'slight')).toBe(true);
  });
  test('Return true if only one removal needed', () => {
    expect(oneAway('barn', 'bar')).toBe(true);
    expect(oneAway('food', 'foo')).toBe(true);
    expect(oneAway('trough', 'tough')).toBe(true);
    expect(oneAway('slight', 'light')).toBe(true);
  });
  test('Return false if more than one edit required', () => {
    expect(oneAway('cough', 'trough')).toBe(false);
    expect(oneAway('tough', 'through')).toBe(false);
    expect(oneAway('food', 'fo')).toBe(false);
  });
});