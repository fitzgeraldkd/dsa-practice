function stringCompression(str) {
  let prevChar = null;
  let prevCharCount = 0;
  let compressed = '';
  for (let i=0; i<str.length; i++) {
    if (str[i] === prevChar) {
      prevCharCount++
    } else {
      if (prevChar) compressed += prevChar + prevCharCount;
      prevChar = str[i];
      prevCharCount = 1;
    }
  }
  compressed += prevChar + prevCharCount;
  return str.length <= compressed.length ? str : compressed;
}

module.exports = { stringCompression };