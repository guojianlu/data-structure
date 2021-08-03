function quickSort(arr) {
  const { length } = arr;
  if (length > 1) {
    const mid = Math.floor(length / 2);
    const pivot = arr[mid];
    const left = arr.filter(item => item < pivot);
    const right = arr.filter(item => item > pivot);
    return quickSort(left).concat([pivot], quickSort(right));
  }
  return arr;
}

module.exports = quickSort;