// 约瑟夫环

const Queue = require('../queue.js');

module.exports = function josephRing(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return undefined;
  }
  
  const queue = new Queue();

  list.forEach(item => queue.enqueue(item));

  let i = 0;
  while (queue.size() !== 1) {
    i++;
    const item = queue.dequeue();
    if (i % 3 !== 0) {
      queue.enqueue(item);
    }
  }

  return queue.dequeue();
}