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

function isUniqueNoDS(str) {
  for (let i=0; i<str.length-1; i++) {
    for (let j=i+1; j<str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

module.exports = { isUnique, isUniqueNoDS };