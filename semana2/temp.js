const { ask } = require('../helpers/input');

async function main(){
    const nombres = ["Ana", "Roberto", "Luis", "Maria"];

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length >= 5) {
            console.log(`${nombres[i]} tiene más de 5 caracteres`);
        } else {
            console.log(`${nombres[i]} tiene solo ${nombres[i].length} caracteres`);
        }
    }

    const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "María", "Úrsula", "Pedro"];
    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];

    for (let i = 0; i < nombres2.length; i++) {
        const primeraLetra = nombres2[i][0].toLowerCase();
        for (let j = 0; j < vocales.length; j++) {
            if (primeraLetra === vocales[j]) {
                console.log(`${nombres2[i]} empieza con ${vocales[j].toUpperCase()}`);
            }
        }
    }

    const palabraAlReves = await ask("Escribe una palabra: ");
    let resultado = "";

    for (let i = palabraAlReves.length - 1; i >= 0; i--) { // se pone palabraAlReves.length -1 para que coincida con el índice de la última letra
        resultado += palabraAlReves[i];
    }
    console.log("Al revés ", resultado);
}

main();