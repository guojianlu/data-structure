const { defaultCompare, Compare, swap } = require('../util/index.js');

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i; j < length; j++) {
      if (compareFn(array[j], array[i]) === Compare.LESS_THEN) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

module.exports = selectionSort;