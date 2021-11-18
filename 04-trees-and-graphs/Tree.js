class Tree {
  constructor(value, children=[]) {
    this.value = value;
    this.children = children;
  }

  append(tree) {
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
}

// export { Tree };
module.exports = Tree;