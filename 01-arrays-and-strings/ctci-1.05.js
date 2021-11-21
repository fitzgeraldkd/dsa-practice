function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    let swapCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) swapCount++;
    }
    return swapCount < 2;
  } else if (Math.abs(str1.length - str2.length) === 1) {
    if (str1.length > str2.length) [str1, str2] = [str2, str1];
    let addedChar = false;
    for (let i = 0; i < str2.length; i++) {
      if (str1[i - (addedChar ? 1 : 0)] !== str2[i]) {
        if (addedChar) return false;
        addedChar = true;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = { oneAway };