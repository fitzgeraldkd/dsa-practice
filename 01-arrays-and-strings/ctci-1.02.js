function checkPermutation(str1, str2) {
  const countChars = (str) => {
    const strChars = {};
    for (let i = 0; i < str.length; i++) {
      if (strChars[str[i]]) { strChars[str[i]]++; } 
      else { strChars[str[i]] = 1; }
    }
    return strChars;
  };

  if (str1.length !== str2.length) return false;
  const str1Chars = countChars(str1);
  const str2Chars = countChars(str2);
  for (const char in str1Chars) {
    if (str1Chars[char] !== str2Chars[char]) return false;
  }
  return true;
}

module.exports = { checkPermutation };