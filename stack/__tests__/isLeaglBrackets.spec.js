test('测试括号是否合法', () => {
  const isLeaglBrackets = require('../case/isLeaglBrackets.js');
  expect(isLeaglBrackets('a(b(c(1)))')).toBe(true);
  expect(isLeaglBrackets('a(b(c())))')).toBe(false);
})