// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir
const { ask } = require('../helpers/input');

async function menu(){
    let opc = '';
    let frutas = [];
    while (opc !== '4') {
        opc = await ask('---Menú---\n1. Agregar fruta\n2. Eliminar fruta\n3. Ver lista de frutas\n4. Salir');
        switch (opc) {
            case '1':
                let frutaNueva = await ask('Dime la fruta que deseas agregar: ');
                frutas.push(frutaNueva);
                console.log(frutas);
                break;
            case '2':
                if (frutas.length === 0) {
                    console.log('No hay frutas');
                    continue;
                } else {
                    let frutaEliminar = await ask('Dime la fruta que deseas eliminar: ');
                    let index = frutas.indexOf(frutaEliminar);

                    if (index !== -1) {
                        frutas.splice(index,1);
                        console.log('Frutas disponibles: ', frutas);
                    } else {
                        console.log('Fruta no encontrada');
                    }
                }
                break;
            case '3':
                console.log('La lista de frutas es: ',frutas);
                break;
            case '4': console.log('Saliendo...'); break;
        
            default:
                break;
        }
    }
}

async function main(){
    menu();
}

main();