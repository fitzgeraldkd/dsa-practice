function isUnique(str) {
  const chars = {};
  for (let i=0; i<str.length; i++) {
    if (str[i] in chars) {
      return false;
    } else {
      chars[str[i]] = true;
    }
  }
  return true;
}

function isUnique2(str) {
  for (let i=0; i<str.length-1; i++) {
    for (let j=i+1; j<str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

console.log(isUnique(''));
console.log(isUnique('a'));
console.log(isUnique('abcdef'));
console.log(isUnique('asdflksja'));
console.log(isUnique('aabbcc'));
console.log(isUnique('abc'));
console.log(isUnique('a b'));

console.log('');

console.log(isUnique2(''));
console.log(isUnique2('a'));
console.log(isUnique2('abcdef'));
console.log(isUnique2('asdflksja'));
console.log(isUnique2('aabbcc'));
console.log(isUnique2('abc'));
console.log(isUnique2('a b'));