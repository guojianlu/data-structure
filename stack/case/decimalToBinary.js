const Stack = require('../stack.js');

// 十进制转二进制
module.exports = function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let binaryString = '';
  let rem;

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}