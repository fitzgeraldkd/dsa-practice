const { commonComparison } = require('../utils/comparisons.js');

class Tree {
  constructor(value, children=[], allowDuplicates=true) {
    this.value = value;
    this.allowDuplicates = allowDuplicates;
    this.children = children.map(child => {
      child.allowDuplicates = allowDuplicates;
      return child;
    });
  }

  append(tree) {
    tree.allowDuplicates = this.allowDuplicates;
    this.children.push(tree);
  }

  print() {
    const printTree = (tree, tier) => {
      console.log(`${"   ".repeat(tier)}${tree.value}`);
      for (const child of tree.children) {
        printTree(child, tier+1);
      }
    };
    printTree(this, 0);
  }

  testCountNodes() {

  }

  testDepth() {

  }

  testIsValid() {
    // TODO: verify no loops
    // TODO: check if duplicates exist and are prohibited
    return true;
  }

  testIsBinary() {
    if (!this.testIsValid()) return false;
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.children.length > 2) return false;
      queue.push(...node.children);
    }
    return true;
  }

  testCheckBinarySearchChild(child) {
    let isBinarySearch, min, max;
    if (child.children.length === 2) {
      {
        const grandchildData = this.testCheckBinarySearchChild(child.children[0]);
        isBinarySearch = (
          grandchildData.isBinarySearch &&
          grandchildData.min < child.value &&
          grandchildData.max < child.value
        );
        [min, max] = [
          Math.min(grandchildData.min, child.value),
          Math.max(grandchildData.max, child.value)
        ];
      }
      {
        const grandchildData = this.testCheckBinarySearchChild(child.children[1]);
        isBinarySearch = (
          isBinarySearch &&
          grandchildData.isBinarySearch &&
          grandchildData.min > child.value &&
          grandchildData.max > child.value
        );
        [min, max] = [
          Math.min(grandchildData.min, child.value, min),
          Math.max(grandchildData.max, child.value, max)
        ];
      }
    } else if (child.children.length === 1) {
      const grandchildData = this.testCheckBinarySearchChild(child.children[0]);
      isBinarySearch = (
        grandchildData.isBinarySearch && 
        commonComparison(child.value, [grandchildData.min, grandchildData.max])
      );
      [min, max] = [
        Math.min(grandchildData.min, child.value),
        Math.max(grandchildData.max, child.value)
      ];
    } else if (child.children.length === 0) {
      [isBinarySearch, min, max] = [true, child.value, child.value]
    }
    console.log({ isBinarySearch, min, max })
    return { isBinarySearch, min, max };
  }

  testIsBinarySearch() {
    if (!this.testIsBinary()) return false;
    return this.testCheckBinarySearchChild(this).isBinarySearch;
  }

  testIsCompleteBinary() {
    
  }

}

// export { Tree };
module.exports = { Tree };