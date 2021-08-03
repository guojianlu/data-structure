const { defaultCompare, Compare, swap } = require('../util/index.js');

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 1; i < length; i++) {
    let j = i;
    while (j > 0 && compareFn(array[j], array[j - 1]) === Compare.LESS_THEN) {
      swap(array, j, j - 1);
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;