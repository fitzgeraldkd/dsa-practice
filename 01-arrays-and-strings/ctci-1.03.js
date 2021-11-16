function urlify(str) {
  return str.replaceAll(' ', '%20');
}

console.log(urlify(''));
console.log(urlify('test'));
console.log(urlify('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'));
console.log(urlify('Hello World!'));
console.log(urlify('    what?     '));