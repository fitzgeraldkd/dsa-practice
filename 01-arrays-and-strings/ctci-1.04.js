function palindromePermutation(str) {
  const chars = {};
  for (let i=0; i<str.length; i++) {
    str[i] in chars ? chars[str[i]]++ : chars[str[i]] = 1;
  }

  let oddCount = false;
  for (const char in chars) {
    if (chars[char] % 2 !== 0 && char !== ' ') {
      if (oddCount) {
        return false;
      } else {
        oddCount = true;
      }
    }
  }
  return true;
}

module.exports = { palindromePermutation };