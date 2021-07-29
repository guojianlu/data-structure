test('测试双端队列', () => {
  const Deque = require('../deque.js');
  const deque = new Deque();
  expect(deque.isEmpty()).toBe(true);
  deque.addBack('John');
  deque.addBack('Jack');
  expect(deque.toString()).toBe('John, Jack');
  expect(deque.size()).toBe(2);
  deque.removeFront();
  expect(deque.toString()).toBe('Jack');
  deque.removeBack();
  expect(deque.isEmpty()).toBe(true);
})