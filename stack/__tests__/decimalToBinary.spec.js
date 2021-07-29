test('测试十进制转二进制', () => {
  const decimalToBinary = require('../case/decimalToBinary.js');
  expect(decimalToBinary(10)).toBe('1010');
  expect(decimalToBinary(1000)).toBe('1111101000');
})