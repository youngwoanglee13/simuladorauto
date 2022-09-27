import ejecutarComando from "./Auto.js";

const comando = document.querySelector("#idcomandos");

const cD = new ejecutarComando();
const form = document.querySelector("#simulador-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = "<p>Posicion actual: "+ cD.ejecutarComando(comando.value)  + "</p>";
});
