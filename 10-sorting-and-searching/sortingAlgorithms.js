
function mergeSort(arr) {
  const sort = (arr, start, end) => {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      sort(arr, start, middle);
      sort(arr, middle + 1, end);
      merge(arr, start, middle, end);
    }
  };

  const merge = (arr, start, middle, end) => {
    const helper = [...arr];
    let [helperLeft, helperRight, current] = [start, middle + 1, start];

    while (helperLeft <= middle && helperRight <= end) {
      if (helper[helperLeft] <= helper[helperRight]) {
        arr[current] = helper[helperLeft];
        helperLeft++;
      } else {
        arr[current] = helper[helperRight];
        helperRight++;
      }
      current++;
    }

    const remaining = middle - helperLeft;
    for (let i=0; i <= remaining; i++) {
      arr[current + i] = helper[helperLeft + i];
    }

  };

  sort(arr, 0, arr.length - 1);
}

function quickSort(arr) {
  const sort = (arr, start, end) => {
    const partitionIndex = partition(arr, start, end);
    if (start < partitionIndex - 1) {
      sort(arr, start, partitionIndex - 1);
    }
    if (partitionIndex < end) {
      sort(arr, partitionIndex, end);
    }
  };

  const partition = (arr, start, end) => {
    const pivot = arr[Math.floor((start + end) / 2)];
    while (start <= end) {
      while (arr[start] < pivot) start++;
      while (arr[end] > pivot) end--;
      if (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
    return start;
  };

  sort(arr, 0, arr.length - 1);
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let changed = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        changed = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
    if (!changed) {
      break;
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = (arr[j] < arr[minIndex]) ? j : minIndex;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

function bucketSort(arr) {

}

module.exports = { mergeSort, quickSort, bucketSort, bubbleSort, selectionSort };