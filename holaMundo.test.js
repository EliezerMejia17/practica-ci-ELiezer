// Importar la función a probar
const holaMundo = require('./hola_Mundo');

// Definir la prueba unitaria
test('la función holaMundo devuelve "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});