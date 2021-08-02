const { Compare, defaultCompare } = require('../util/index.js');

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THEN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  // 中序遍历的一种应用就是对树进行排序操作
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THEN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THEN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    // TODO
  }
}

module.exports = { BinarySearchTree, Node };