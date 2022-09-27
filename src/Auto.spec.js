import ejecutarComando from "./Auto";

const cD = new ejecutarComando();
describe("Ejecutar comandos", () => {
    /*it("Posicion inicial", () => {
      expect(cD.ejecutarComando()).toEqual("0,0N");
    });*/
    it("Avanzar", () => {
      expect(cD.ejecutarComando("A")).toEqual("0,1N");
    });
    it("Girar Derecha", () => {
      expect(cD.ejecutarComando("D")).toEqual("0,1E");
    });
    it("Girar Izquierda", () => {
      expect(cD.ejecutarComando("I")).toEqual("0,1N");
    });
    it("Avanzar mas de una vez", () => {
      expect(cD.ejecutarComando("AAA")).toEqual("0,4N");
    });
    it("Realizar multiples movimientos y giros", () => {
      expect(cD.ejecutarComando("DDAAAIADADAD")).toEqual("0,0N");
    });
    it("Realizar movimientos validos sin desbordarse del plano 10x10", () => {
      expect(cD.ejecutarComando("IADAAAAAAAAAADAAAAAAAAAAADAAAAAAAAAA")).toEqual("9,0S");
    });
  });
  