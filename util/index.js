const Compare = {
  LESS_THEN: -1,
  BIGGER_THEN: 1
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THEN : Compare.BIGGER_THEN;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = { Compare, defaultCompare, swap };