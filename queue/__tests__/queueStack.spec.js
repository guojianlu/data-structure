test('测试用两个队列实现一个栈', () => {
  const QueueStack = require('../case/queueStack.js');
  const queueStack = new QueueStack();
  queueStack.push(1);
  queueStack.push(2);
  expect(queueStack.pop()).toBe(2);
})