// 回文检查器
// 最简单的方式是将字符串反向排列并检查它和原字符串是否相等
const Deque = require('../deque.js');

module.exports = function palindromeChecker(str) {
  if (str === undefined || str === null || (str !== null && str.length === 0)) {
    return false;
  }

  const deque = new Deque();
  const lowerString = str.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}