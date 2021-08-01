test('测试Dictionary类', () => {
  const { Dictionary } = require('../dictionary.js');
  const dictionary = new Dictionary();
  dictionary.set('Jack', 'jack@email.com');
  dictionary.set('John', 'john@email.com');
  dictionary.set('Tom', 'tom@email.com');
  expect(dictionary.hasKey('Jack')).toBe(true);
  expect(dictionary.size()).toBe(3);
  expect(dictionary.get('Tom')).toBe('tom@email.com');
  expect(dictionary.keys()).toEqual(['Jack', 'John', 'Tom']);
  dictionary.remove('John');
  expect(dictionary.size()).toBe(2);
})