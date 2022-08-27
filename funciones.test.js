const funciones = require("./funciones");
describe("test de funciones", () => {
  test("sumar", () => {
    const resultado = funciones.sumar(1, 1);
    expect(resultado).toEqual(2);
  });
});
