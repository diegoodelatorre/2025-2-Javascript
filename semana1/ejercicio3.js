// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número: "));

  if (number % 3 !== 0 && number % 5 !== 0) {
    console.log("No es múltiplo de 3 y 5");
  } else if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Multiplo de 3")
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Multiplo de 5")
  } else {
    console.log("Es múltiplo de 3 y 5");
  }

  const multiplo5 = number % 5 === 0;
  const multiplo3 = number % 3 === 0;
  const ambos = multiplo3 && multiplo5;

  switch (true) {
    case multiplo3: console.log("Múltiplo de 3"); break;
    case multiplo5: console.log("Múltiplo de 5"); break;
    case ambos: console.log("Múltiplo de 3 y de 5"); break;
  
    default:
      break;
  }
}

main();
