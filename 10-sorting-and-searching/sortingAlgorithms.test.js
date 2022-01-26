const { mergeSort, quickSort, bucketSort, bubbleSort } = require('./sortingAlgorithms.js');

const sortingAlgorithms = [
  {functionRef: mergeSort, desc: 'Merge Sort'},
  {functionRef: quickSort, desc: 'Quick Sort'},
  {functionRef: bubbleSort, desc: 'Bubble Sort'},
  // {functionRef: bucketSort, desc: 'Bucket Sort'},
]

describe('Test sorting algorithms', () => {
  sortingAlgorithms.forEach(sortingAlgorithm => {
    describe(sortingAlgorithm.desc, () => {
      test('Does not raise an error when an empty array is passed', () => {
        const arr = [];
        sortingAlgorithm.functionRef(arr);
        expect(arr).toStrictEqual([]);
      });

      test('Makes no changes when the array has one element', () => {
        const arr = [42];
        sortingAlgorithm.functionRef(arr);
        expect(arr).toStrictEqual([42]);
      });

      test('Sorts an array of unique numbers', () => {
        const arr = [5, 1, 42, 13, 100, 50];
        sortingAlgorithm.functionRef(arr);
        expect(arr).toStrictEqual([1, 5, 13, 42, 50, 100]);
      });

      test('Sorts an array of numbers with duplicates', () => {
        const arr = [17, 5, 1, 42, 17, 13, 100, 50, 13, 17];
        sortingAlgorithm.functionRef(arr);
        expect(arr).toStrictEqual([1, 5, 13, 13, 17, 17, 17, 42, 50, 100]);
      });

    });
  });
});