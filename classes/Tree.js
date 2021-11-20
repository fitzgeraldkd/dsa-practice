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

  testIsBinarySearch(tree = this, min = null, max = null) {
    return this.testCheckBinarySearchChild(tree).isBinarySearch;


    // ~~~~~~~~~~~~~~~~~~~~~~

    if (tree === this && !this.testIsBinary()) return false;

    if (tree.children.length === 2) {
      {
        const node = tree.children[0];
        if (node.value > tree.value) return false;
        if (!this.testIsBinarySearch(node, min, tree.value)) return false;
      }
      {
        const node = tree.children[1];
        if (node.value < tree.value) return false;
        if (!this.testIsBinarySearch(node, tree.value, max)) return false;
      }
      // if (tree.children[0].value > tree.value) return false;
      // if (!this.testIsBinarySearch(tree.children[0])) return false;
    }
    if (tree.children.length === 1) {
      if (!this.testIsBinarySearch(tree.children[0], min, max)) return false;
    }
    // tree.children.forEach((node, index) => {
    //   // if (index === 0) {
    //   //   if (node.value > tree.value) return false;

    //   // }
    //   if (index === 0 && node.value > tree.value) return false;
    //   if (index === 1 && node.value < tree.value) return false;
    //   if (!this.testIsBinarySearch(node, min, max)) return false;
    // });
    return true;
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.children.length < 2) continue;
      if (node.children[0].value > node.value && node.children[1] < node.value) {
        return false
      }
    }
    return true;
  }

  // testIsBinarySearch() {
  //   if (!this.testIsBinary()) return false;
  //   const queue = [this];
  //   while (queue.length > 0) {
  //     const node = queue.shift();
  //     if (node.children.length < 2) continue;
  //     if (node.children[0].value > node.value && node.children[1] < node.value) {
  //       return false
  //     }
  //   }
  //   return true;
  // }
}

// export { Tree };
module.exports = { Tree };