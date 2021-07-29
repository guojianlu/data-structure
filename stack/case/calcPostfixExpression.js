// 中缀表达式 1+2 | 2+4+5
// 后缀表达式 12+ | 145++
// ['4', '13', '5', '/', '+'] 等价于 (4 + (13 / 5)) = 6
// 后缀表达式在计算过程中, 从前向后遍历，遇到运算符，将它前面的两个数拿出来参与运算，用运算的结果替换掉当前运算符以及它前面的两个运算数。

const Stack = require('../stack.js');

// 计算后缀表达式
module.exports = function calcPostfixExpression(expArray) {
  const stack = new Stack();
  const operators = ['+', '-', '*', '/'];
  expArray.forEach(char => {
    if (operators.includes(char)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const result = parseInt(eval(`${operand2} ${char} ${operand1}`)); 
      stack.push(result.toString());
    } else {
      stack.push(char);
    }
  });

  return stack.pop();
}