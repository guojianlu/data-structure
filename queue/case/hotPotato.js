// 击鼓传花
const Queue = require('../queue.js');

module.exports = function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = []; // 淘汰者列表

  elementsList.forEach(element => queue.enqueue(element));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}