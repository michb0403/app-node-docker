const { sumar } = require('./math');

test('suma 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});