const { urlify } = require('./ctci-1.03.js');

describe('Replace all space characters with \'%20\'', () => {
  test('Return a new string', () => {
    expect(urlify('')).toBe('');
    expect(urlify('test')).toBe('test');
    expect(urlify('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?')).toBe('The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog.%20If%20the%20dog%20reacted,%20was%20it%20really%20lazy?');
    expect(urlify('Hello World!')).toBe('Hello%20World!');
    expect(urlify('    what?     ')).toBe('%20%20%20%20what?%20%20%20%20%20');
  })
});