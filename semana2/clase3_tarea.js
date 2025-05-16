// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main(){
    let num = await ask("Cúantas edades quieres agregar? ");
    let edades = [];
    let contador = 0;
    for (let i = 0; i < num; i++) {
        let edad = await ask("Ingresa le edad: ");
        edades.push(edad);
    }

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            contador++;
        }
    }
    console.log(`${contador} personas son mayores de edad`);
}

main();