class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }

  addNode(node) {
    this.nodes.push(node);
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

export { Graph, Node };