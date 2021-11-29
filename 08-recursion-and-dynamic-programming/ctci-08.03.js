function  magicIndexDistinct(arr) {
  const indecesToCheck = [[0, arr.length-1]];
  while (indecesToCheck.length > 0) {
    const [start, end] = indecesToCheck.pop();
    const middle = Math.floor((start + end) / 2);
    if (middle === arr[middle]) return middle
    else if (middle < arr[middle] && start < middle) {
      indecesToCheck.push([start, middle-1])
    } else if (middle > arr[middle] && middle < end) {
      indecesToCheck.push([middle+1, end])
    }
  }
  return null;
}

function magicIndex(arr) {
  const indecesToCheck = [[0, arr.length-1]];
  while (indecesToCheck.length > 0) {
    const [start, end] = indecesToCheck.pop();
    const middle = Math.floor((start + end) / 2);
    if (middle === arr[middle]) return middle;

    if (arr[start] <= middle-1 && arr[middle-1] >= start && start < middle) {
      indecesToCheck.push([start, Math.min(middle-1, arr[middle])])
    }

    if (arr[middle+1] <= end && arr[end] >= arr[middle+1] && middle < end) {
      indecesToCheck.push([Math.max(middle+1, arr[middle]), end])
    }
  }
  return null;
}

module.exports = { magicIndexDistinct, magicIndex };