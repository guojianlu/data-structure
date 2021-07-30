test('测试回文检查器', () => {
  const palindromeChecker = require('../case/palindromeChecker');
  expect(palindromeChecker('abcba')).toBe(true);
  expect(palindromeChecker('abcdba')).toBe(false);
})