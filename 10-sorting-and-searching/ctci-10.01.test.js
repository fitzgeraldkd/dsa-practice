const { sortedMerge, sortedMergeNoDS } = require('./ctci-10.01.js');
const { randomIntegerArray } = require('../utils/random.js');
const { countElements } = require('../utils/hashes.js');

const algorithms = [
  {functionRef: sortedMerge, desc: 'sortedMerge with additional data structures'},
  {functionRef: sortedMergeNoDS, desc: 'sortedMerge without additional data structures'}
]

describe('Given two sorted arrays, merge the second into the first in sorted order', () => {
  algorithms.forEach(algorithm => {
    describe(algorithm.desc, () => {
      const testcases = [];

      testcases.push({
        desc: 'arrA empty',
        arrA: [],
        arrB: randomIntegerArray(50, 25, 50, true)
      });
    
      testcases.push({
        desc: 'arrB empty',
        arrA: randomIntegerArray(50, 25, 50, true),
        arrB: []
      });
    
      testcases.push({
        desc: 'arrA and arrB empty',
        arrA: [],
        arrB: []
      });
    
      testcases.push({
        desc: 'arrA all less than arrB',
        arrA: randomIntegerArray(50, 0, 24, true),
        arrB: randomIntegerArray(50, 25, 50, true)
      });
    
      testcases.push({
        desc: 'arrA all greater than arrB',
        arrA: randomIntegerArray(50, 25, 50, true),
        arrB: randomIntegerArray(50, 0, 24, true)
      });
    
      testcases.push({
        desc: 'arrA and arrB in same range',
        arrA: randomIntegerArray(50, 0, 50, true),
        arrB: randomIntegerArray(50, 0, 50, true)
      });
    
      testcases.forEach(testcase => {
        describe(testcase.desc, () => {
          const { arrA, arrB } = testcase;
          const expectedLength = arrA.length + arrB.length;
          const countedElements = countElements([...arrA, ...arrB]);
          algorithm.functionRef(arrA, arrB);
    
          test('The first array should have the correct number of elements after merging', () => {
            expect(arrA.length).toBe(expectedLength);
          });
    
          test('The first array should have the correct element values after merging', () => {
            expect(countElements(arrA)).toStrictEqual(countedElements);
          });
    
          test('The first array should be sorted after merging', () => {
            for (let i=0; i < arrA.length - 1; i++) {
              expect(arrA[i]).toBeLessThanOrEqual(arrA[i+1]);
            }
          }); 
        });
    
      });
    });
  });
  
})