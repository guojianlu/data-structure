// 用两个队列实现栈

const Queue = require('../queue.js');

class QueueStack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
    this.dataQueue = null;
    this.emptyQueue = null;
  }

  initQueue() {
    if (this.queue1.isEmpty() && this.queue2.isEmpty()) {
      this.dataQueue = this.queue1;
      this.emptyQueue = this.queue2;
    } else if (this.queue1.isEmpty()) {
      this.dataQueue = this.queue2;
      this.emptyQueue = this.queue1;
    } else {
      this.dataQueue = this.queue1;
      this.emptyQueue = this.queue2;
    }
  }

  push(element) {
    this.initQueue();
    this.dataQueue.enqueue(element);
  }

  pop() {
    this.initQueue();
    
    while (this.dataQueue.size() > 1) {
      this.emptyQueue.enqueue(this.dataQueue.dequeue());
    }

    return this.dataQueue.dequeue();
  }
}

module.exports = QueueStack;