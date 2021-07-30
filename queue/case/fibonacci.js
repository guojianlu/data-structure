// 斐波那契数列

const Queue = require('../queue.js');

module.exports = function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(1);

  let i = 0;
  while (i < n -2) {
    i++;
    const delItem = queue.dequeue();
    const firstItem = queue.peek();
    const nextItem = delItem + firstItem;
    queue.enqueue(nextItem);
  }

  queue.dequeue();

  return queue.dequeue();
}