test('测试HashTable', () => {
  const HashTable = require('../hash-table.js');
  const table = new HashTable();
  table.put('Gandalf', 'gandalf@email.com');
  table.put('John', 'johnsnow@email.com');
  table.put('Tyrion', 'tyrion@email.com');
  expect(table.hashCode('Gandalf')).toBe(19);
  expect(table.hashCode('John')).toBe(29);
  expect(table.hashCode('Tyrion')).toBe(16);
  expect(table.get('John')).toBe('johnsnow@email.com');
  table.remove('John');
  expect(table.get('John')).toBe(undefined);
})