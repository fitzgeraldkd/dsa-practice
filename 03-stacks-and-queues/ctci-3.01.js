class ThreeInOne {
  constructor(stackArrs = [[], [], []]) {
    this.values = [];
    this.lengths = [0, 0, 0];
    stackArrs.forEach((stackArr, stackIndex) => {
      stackArr.forEach((item) => {
        this.push(stackIndex, item);
      });
    });
  }

  pop(stackIndex) {
    if (this.lengths[stackIndex] === 0 ) throw 'Cannot pop from empty stack';
    const poppedIndex = stackIndex + (this.lengths[stackIndex] - 1) * 3;
    this.lengths[stackIndex]--;
    return this.values.splice(poppedIndex, 1, null)[0]; 
  }

  push(stackIndex, value) {
    const pushedIndex = stackIndex + this.lengths[stackIndex] * 3; 
    this.lengths[stackIndex]++;
    this.values[pushedIndex] = value;
  }

  peek(stackIndex) {
    if (this.lengths[stackIndex] === 0) throw 'Cannot peek into empty stack';
    return this.values[stackIndex + (this.lengths[stackIndex] - 1) * 3];
  }

  isEmpty(stackIndex) {
    return this.lengths[stackIndex] === 0;
  }
}

module.exports = { ThreeInOne }