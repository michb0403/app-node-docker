function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Si usas este archivo en navegador, ignora esto.
// Si usas en Node.js y Jest, necesitas exportarlo:
if (typeof module !== 'undefined') {
  module.exports = { saludar };
}
