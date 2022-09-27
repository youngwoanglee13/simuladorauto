import ejecutarComando from "./Auto";

const cD = new ejecutarComando();
describe("Ejecutar comandos", () => {
    it("Posicion inicial", () => {
      expect(cD.ejecutarComando()).toEqual("0,0N");
    });
    it("Avanzar", () => {
      expect(cD.ejecutarComando("A")).toEqual("0,1N");
    });
    it("Girar Derecha", () => {
      expect(cD.ejecutarComando("D")).toEqual("0,1E");
    });
    it("Girar Izquierda", () => {
      expect(cD.ejecutarComando("I")).toEqual("0,1N");
    });
    

   
  });
  