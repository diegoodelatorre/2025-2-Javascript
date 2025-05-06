const { ask } = require('../helpers/input.js'); // El ask se pone entre llaves porque es un objeto y se importa de la carpeta helpers/input.js
// El ask es una función que se encarga de preguntar al usuario y esperar la respuesta

async function main() {
    const name = await ask('¿Cuál es tu nombre? '); // El await es para esperar la respuesta del usuario
    const age = Number(await ask('¿Cuál es tu edad? '));
    // TODO : Agregar pregunta para comida favorita
    const comidaFav = await ask('¿Cuál es tu comida favorita? ');
    console.log(`Hola ${name}, tienes ${age} años y tu comida favorita es ${comidaFav}.`); // Se ponen comillas invertidas(``) para poder usar ${} y concatenar variables
}

async function calculadora(){
    const num1 = Number(await ask('Dame el primer número: '));
    const num2 = Number(await ask('Dame el segundo número: '));

    console.log(`La suma de ${num1} + ${num2} es ${num1+num2}`)
    console.log(`La resta de ${num1} - ${num2} es ${num1-num2}`)
    console.log(`La multiplicación de ${num1} x ${num2} es ${num1*num2}`)
    console.log(`La división de ${num1} / ${num2} es ${num1/num2}`)
}
// Se ejecuta en la terminal, estando en la carpeta semana1, con el comando node ejercicio1
calculadora();