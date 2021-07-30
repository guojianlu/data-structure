test('测试约瑟夫环', () => {
  const josephRing = require('../case/josephRing.js');
  const list = [1,2,3,4,5,6,7,8,9,10];
  // [1,2,4,5,7,8,10] i=10
  // [1,4,5,8,10] i=17
  // [4,5,10] i=22
  // [4,10]i=25
  // [4]
  expect(josephRing(list)).toBe(4);
})