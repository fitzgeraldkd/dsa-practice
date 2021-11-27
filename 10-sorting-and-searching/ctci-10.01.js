function sortedMerge(arrA, arrB) {
  /*
  Time: O(m+n)
  Space: O(m+n)

  Where:
    m = number of elements in arrA
    n = number of elements in arrB
  */
  let pointerA = 0, pointerB = 0;
  const helper = [];

  while (pointerB < arrB.length && pointerA < arrA.length) {
    if (arrA[pointerA] <= arrB[pointerB]) {
      helper.push(arrA[pointerA]);
      pointerA++;
    }
    if (arrA[pointerA] >= arrB[pointerB]) {
      helper.push(arrB[pointerB]);
      pointerB++;
    }
  }

  while (pointerA < arrA.length) {
    helper.push(arrA[pointerA]);
    pointerA++;
  }
  while (pointerB < arrB.length) {
    helper.push(arrB[pointerB]);
    pointerB++;
  }

  for (let i=0; i<helper.length; i++) {
    arrA[i] = helper[i];
  }
}

function sortedMergeNoDS(arrA, arrB) {
  /*
  Time: O((m + n)^2)
  Space: O(1)

  Where:
    m = number of elements in arrA
    n = number of elements in arrB
  */
  let pointerA = 0, pointerB = 0;
  while (pointerB < arrB.length && pointerA < arrA.length) {
    if (arrB[pointerB] <= arrA[pointerA]) {
      arrA.splice(pointerA, 0, arrB[pointerB]);
      pointerB++;
    }
    pointerA++;
  }
  arrA.splice(arrA.length, 0, ...arrB.slice(pointerB))
}

module.exports = { sortedMerge, sortedMergeNoDS };