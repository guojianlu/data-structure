test('测试用两个栈实现一个队列', () => {
  const StackQueue = require('../case/stackQueue.js');
  const stackQueue = new StackQueue();
  stackQueue.enqueue(1);
  stackQueue.enqueue(2);
  expect(stackQueue.dequeue()).toBe(1);
  expect(stackQueue.dequeue()).toBe(2);
  expect(stackQueue.dequeue()).toBe(undefined);
})