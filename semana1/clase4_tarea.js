// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return edadEnDias;
}

function diffMonths(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnMeses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); // La formula dentro del parentesis se explica a detalle de la siguiente manera: 
  // Primero se obtiene la diferencia en milisegundos, luego se divide por 1000 para convertir a segundos, luego por 60 para convertir a minutos, 
  // luego por 60 para convertir a horas y finalmente por 24 para convertir a días. Luego se divide por 30 para obtener los meses.

  return edadEnMeses;
}

function actualAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

async function main() {
  const actualDate = new Date();

  const birthDateDay = await ask("¿Cuál es el día de tu fecha de nacimiento?");
  const birthDateMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?");
  const birthDateYear = await ask("¿Cuál es el año de tu fecha de nacimiento?");
  //const birthDate = await ask("¿Cuál es tu fecha de nacimiento? (formato YYYY-MM-DD)");
  const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

  console.log("Haz vivido aproximadamente: ");
  console.log(`${diffDays(actualDate, birthDate)} días`);
  console.log(`${diffMonths(actualDate, birthDate)} meses`);
  console.log(`tienes ${actualAge(birthDate)} años`);

}

main();