test('测试Set', () => {
  const Set = require('../set.js');
  const set = new Set();
  set.add(1);
  set.add(2);
  expect(set.values()).toEqual([1,2]);
  expect(set.has(1)).toBe(true);
  expect(set.size()).toBe(2);
  set.delete(1);
  expect(set.values()).toEqual([2]);
  expect(set.size()).toBe(1);
})