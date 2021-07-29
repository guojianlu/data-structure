const Stack = require('../stack.js');

// 判断字符串里的括号是否合法
module.exports = function isLeaglBrackets(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      stack.push(char);
    }

    if (char === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}