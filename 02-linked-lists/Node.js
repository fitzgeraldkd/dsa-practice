class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(data) {
    const newNode = new Node(data)
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = newNode;
  }
}

export default Node;