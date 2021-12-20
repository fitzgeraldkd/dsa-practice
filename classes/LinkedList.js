class LinkedList {
  constructor(root) {
    this.root = root;
  }
}

class SinglyLinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  append(data) {
    const newNode = new SinglyLinkedList(data);
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = newNode;
  }

  closeLoop() {
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = this;
  }

  print(separator=' -> ') {
    let n = this;
    let results = n.data;
    while (n.next !== null) {
      if (n.next === this) {
        results += separator + "[loop]";
        break;
      }
      n = n.next;
      results += separator + n.data;
    }
    // console.log(results);
    return results;
  }
}

class DoublyLinkedList extends SinglyLinkedList {
  constructor(data) {
    super(data);
    this.prev = null;
  }

  append(data) {
    const newNode = new DoublyLinkedList(data);
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = newNode;
    newNode.prev = n;
  }

  closeLoop() {
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = this;
    this.prev = n;
  }

  print() {
    let results = super.print(' <-> ');
    // if (!this.validate()) console.log('Invalid list.')
    if (!this.validate()) results = 'Invalid list: ' + results;
    return results;
  }

  validate() {
    let n = this;
    let valid = true;
    while (n.next !== null) {
      if (n.next === this) {
        valid &&= this.prev === n;
        break;
      }
      valid &&= n.next.prev === n;
      n = n.next;
    }
    return valid;
  }
}

// export { SinglyLinkedList, DoublyLinkedList };
module.exports = { LinkedList, SinglyLinkedList, DoublyLinkedList };