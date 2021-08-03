// https://www.bilibili.com/video/BV1Eb41147dK?from=search&seid=5296629224571433396

function swap(tree, i, j) {
  const temp = tree[i];
  tree[i] = tree[j];
  tree[j] = temp;
}

function heapify(tree, n, i) {
  if (i >= n) {
    return;
  }
  const c1 = 2 * i + 1;
  const c2 = 2 * i + 2;
  let max = i;
  if (c1 < n && tree[c1] > tree[max]) {
    max = c1;
  }
  if (c2 < n && tree[c2] > tree[max]) {
    max = c2;
  }
  if (max !== i) {
    swap(tree, max, i);
    heapify(tree, n, max);
  }
}

function buildHeap(tree, n) {
  const lastNode = n - 1;
  const parent = Math.floor((lastNode - 1) / 2);
  for (let i = parent; i >= 0; i--) {
    heapify(tree, n, i);
  }
}

function heapSort(tree, n) {
  buildHeap(tree, n);
  for (let i = n - 1; i >= 0; i--) {
    swap(tree, i, 0);
    heapify(tree, i, 0);
  }
}


function testHeapify() {
  const tree = [4, 10, 3, 5, 1, 2];
  const n = 6;
  heapify(tree, n, 0)
  console.log(tree);
}

function testBuildHeap() {
  const tree = [2, 5, 3, 1, 10, 4];
  const n = 6;
  buildHeap(tree, n);
  console.log(tree);
}

function testHeapSort() {
  const tree = [2, 5, 3, 1, 10, 4];
  const n = 6;
  heapSort(tree, n);
  console.log(tree);
}

testHeapSort();
