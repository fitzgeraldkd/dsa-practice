class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }

  addNode(node) {
    this.nodes.push(node);
  }

  print() {
    let results = '';
    this.nodes.forEach(node => {
      results += `\n${node.value}: `;
      node.children.forEach((child, index) => {
        results += index === 0 ? child.value : `, ${child.value}`;
      })
    })
    return results;
  }
}

class Node {
  constructor(value, children=[]) {
    this.value = value;
    this.children = children;
  }

  addChild(node) {
    this.children.push(node);
  }
}

// export { Graph, Node };
module.exports = { Graph, Node };