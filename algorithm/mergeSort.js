const { defaultCompare, Compare } = require('../util/index.js');

function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THEN ? left[i++] : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle), compareFn);
    return merge(left, right, compareFn);
  }
  return array;
}

module.exports = mergeSort;