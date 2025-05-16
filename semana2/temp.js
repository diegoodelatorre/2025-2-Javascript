const { ask } = require('../helpers/input');

function obtenerPromedio(numeros){
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    const promedio = total / numeros.length;

    return promedio;
}

function obtenerMayor(numeros){
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

function obtenerMenor(numeros){
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

function resumenEstadistico(numeros){
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);
    
    return {menor, mayor, promedio}
    return {'menor': menor, 'mayor': mayor, 'promedio': promedio} // lo mismo pero con un diccionario
}

function nombresVocal(nombres){
    const vocales = ["a", "e", "i", "o", "u", "á", "á", "í", "ó", "ú"];
    let nombresVocal = [];
    for (let i = 0; i < nombres.length; i++) {
        // for (let j = 0; j < vocales.length; j++) {
        //     if (nombres[i][0].toLowerCase() === vocales[j]) {
        //         nombresVocal.push(nombres[i]);
        //     }
        // }

        // Manera más corta y eficiente de hacerlo, el incluides busca dentro de las vocales a ver si la primera letra del nombre está ahí
        let primeraLetra = nombres[i][0].toLowerCase();
        if (vocales.includes(primeraLetra)) {
            nombresVocal.push(nombres[i]);
        }
    }

    return nombresVocal;
}

async function main(){
    const edades = [20, 18, 25, 30, 22];
    const lista = [5, 20, 8, 99, 3];
    const datos = [70, 80, 90, 100, 85];
    const nombres = ["Ana", "Esteban", "Luis", "Oscar", "María"];
    console.log(`Promedio = ${obtenerPromedio(edades)}`);
    console.log(`El número mayor de ${lista} es: ${obtenerMayor(lista)}`);

    const estadistica = resumenEstadistico(datos);
    console.log(`El resumen estadístico de ${datos}`);
    console.log(`El número menor es: ${estadistica.menor}`);
    console.log(`El número mayor es: ${estadistica.mayor}`);
    console.log(`El promedio es: ${estadistica.promedio}`);

    console.log(`De los nombres ${nombres}, solo ${nombresVocal(nombres)} empiezan con una vocal`);
}

main();