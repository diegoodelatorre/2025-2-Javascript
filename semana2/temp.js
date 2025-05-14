const { ask } = require('../helpers/input');

async function main(){
    let opcion = '';
    let frutas = [];

    while (opcion !== '3') {
        opcion = await ask('---¿Qué deseas hacer?---\n1. Agregar una fruta\n2. Eliminar fruta\n3. Salir\n: ');
        if (opcion  === '1') {
            // Agregar
            let frutaNueva = await ask('¿Qué fruta deseas agregar? ')
            frutas.push(frutaNueva); // El push ingresa el elemento al final del arreglo y pop elimina el último elemento del mismo
            console.log('Fruta agregada: ', frutaNueva);
            console.log('Frutas disponibles: ', frutas);
        } else if (opcion === '2') {
            // Eliminar
            if (frutas.length === 0) {
                console.log('No hay frutas disponibles');
                continue;
            } else {
                let frutaEliminar = await ask('¿Qué fruta deseas eliminar? ');
                let index = frutas.indexOf(frutaEliminar); // indexOf encuentra el índice del elemento

                if (index !== -1) {
                    frutas.splice(index,1); // Con splice puedes borrar varios elementos a partir del que quieras, en este caso
                    // solo queremos eliminar 1
                    console.log('Frutas disponibles: ', frutas);
                } else {
                    console.log('Fruta no encontrada');
                }
            }
        } else if (opcion === '3') {
            // Salir
            console.log('Gracias por usar el programa');
        } else {
            console.log("Opción no válida");
        }
    }
}

main();