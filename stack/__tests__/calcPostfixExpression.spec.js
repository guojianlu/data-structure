test('测试计算后缀表达式', () => {
  const calcPostfixExpression = require('../case/calcPostfixExpression.js');
  expect(calcPostfixExpression(['4', '13', '5', '/', '+'])).toBe('6');
})