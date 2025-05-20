const { saludar } = require('../scripts/funciones');

test('debe saludar correctamente', () => {
  expect(saludar('Michelle')).toBe('Hola, Michelle');
});
