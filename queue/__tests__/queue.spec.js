test('测试队列', () => {
  const Queue = require('../queue.js');
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue('John');
  queue.enqueue('Jack');
  expect(queue.toString()).toBe('John, Jack');
  expect(queue.size()).toBe(2);
  queue.dequeue();
  expect(queue.toString()).toBe('Jack');
})