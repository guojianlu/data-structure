// 用两个栈实现一个队列

const Stack = require('../../stack/stack.js');

class StackQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  enqueue(element) {
    this.pushStack.push(element);
  }

  dequeue() {
    if (this.popStack.isEmpty()) {
      if (this.pushStack.isEmpty()) {
        return undefined;
      }

      while (this.pushStack.size() > 0) {
        this.popStack.push(this.pushStack.pop());
      }

      return this.popStack.pop();
    }
    return this.popStack.pop();
  }
}

module.exports = StackQueue;