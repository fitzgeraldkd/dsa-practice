function stringRotation(str1, str2, isSubstring) {
  /*
  Time: O(n)
  Space: O(1)

  Where:
    n = str1.length
  */
  if (str1.length != str2.length || str2.length === 0) return false;
  return isSubstring(str1+str1, str2);
}

module.exports = { stringRotation };