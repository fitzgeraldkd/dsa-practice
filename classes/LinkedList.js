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
    const forward = [n.data];
    while (n.next !== null) {
      n = n.next;
      forward.push(n.data);
    }

    const backward = [n.data];
    while (n.prev !== null) {
      n = n.prev
      backward.unshift(n.data);
      if (n === this) break;
    }

    const logLists = () => {
      console.error(forward);
      console.error(backward);
    };

    if (forward.length !== backward.length) {
      logLists();
      return false;
    }
    for (let i = 0; i < forward.length; i++) {
      if (forward[i] !== backward[i]) {
        logLists();
        return false;
      }
    }
    return true;
  }
}

// export { SinglyLinkedList, DoublyLinkedList };
module.exports = { SinglyLinkedList, DoublyLinkedList };