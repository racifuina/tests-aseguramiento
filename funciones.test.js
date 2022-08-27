const funciones = require("./funciones");
describe("test de funciones", () => {
  test("1 + 1 =  2", () => {
    const resultado = funciones.sumar(1, 1);
    expect(resultado).toEqual(2);
  });
  test("1 - 1 =  0", () => {
    const resultado = funciones.restar(1, 1);
    expect(resultado).toEqual(0);
  });
});
