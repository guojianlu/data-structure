test('测试击鼓传花游戏', () => {
  const hotPotato = require('../case/hotPotato.js');
  const names = ['John', 'Jack', 'Tom', 'Bob', 'Carl'];
  const { winner, eliminated } = hotPotato(names, 7);
  // eliminated.forEach(name => {
  //   console.log(`${name} 在击鼓传花游戏中被淘汰`);
  // });
  // console.log(`胜利者：${winner}`);
  expect(winner).toBe('John');
})