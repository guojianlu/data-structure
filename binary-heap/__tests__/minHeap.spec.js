test('测试最小堆', () => {
  const MinHeap = require('../min-heap.js');
  const minHeap = new MinHeap();
  for (let i = 1; i < 10; i++) {
    minHeap.insert(i);
  }
  expect(minHeap.extract()).toBe(1);
  expect(minHeap.heap).toEqual([2,3,4,5,6,7,8,9]);
})