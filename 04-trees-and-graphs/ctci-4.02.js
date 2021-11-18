import { Tree } from './Tree.js';

function minimalTree(nums) {
  const numOfLevels = Math.ceil(Math.log(nums.length + 1) / Math.log(2));
  const middleIndex = (2 ** (numOfLevels - 1)) - 1;
  const children = [];
  if (middleIndex > 0) {
    children.push(minimalTree(nums.slice(0, middleIndex)));
  }
  if (middleIndex < nums.length - 1) {
    children.push(minimalTree(nums.slice(middleIndex+1)));
  }
  return new Tree(nums[middleIndex], children);
}

minimalTree([...Array(3).keys()]).print();
minimalTree([...Array(7).keys()]).print();
minimalTree([...Array(15).keys()]).print();

minimalTree([...Array(1).keys()]).print();
minimalTree([...Array(12).keys()]).print();
minimalTree([...Array(50).keys()]).print();