const numbers = [1, 2, 3, 4, 5];
const filter = x => {
  return x % 2 === 0 ? x : x * 2;
};
const evens = Array.from(numbers, filter);
console.log(evens);