const { swap } = require('../util/index.js');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    swap(array, i, randomIndex);
  }
  return array;
}

module.exports = shuffle;