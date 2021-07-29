test('测试进制转换算法', () => {
  const baseConverter = require('../case/baseConverter.js');
  expect(baseConverter(200, 16)).toBe('C8');
  expect(baseConverter(100345, 16)).toBe('187F9')
  expect(baseConverter(100345, 35)).toBe('2BW0');
})