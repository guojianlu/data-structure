/**
 * ES6 原生Set
 */

// 并集
const union = (setA, setB) => {
  const unionAb = new Set();
  setA.forEach(value => unionAb.add(value));
  setB.forEach(value => unionAb.add(value));
  return unionAb;
};

// 交集
const intersection = (setA, setB) => {
  const intersectionSet = new Set();
  setA.forEach(value => {
    if (setB.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};

// 差集
const difference = (setA, setB) => {
  const differenceSet = new Set();
  setA.forEach(value => {
    if (!setB.has(value)) {
      differenceSet.add(value);
    }
  });
  return differenceSet;
};

/**
 * 使用扩展运算符
 */

const setA = new Set([1,2,3]);
const setB = new Set([2,3,4]);
// 1. 并集
console.log(new Set([...setA, ...setB]));

// 2. 交集
console.log(new Set([...setA].filter(x => setB.has(x))));

// 3. 差集
console.log(new Set([...setA].filter(x => !setB.has(x))));