//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function obtenerMenor(calificaciones){
    let menor = calificaciones[0];
    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] < menor) {
            menor = calificaciones[i];
        }
    }

    return menor;
}

function obtenerMayor(calificaciones){
    let mayor = calificaciones[0];
    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] > mayor) {
            mayor = calificaciones[i];
        }
    }

    return mayor;
}

function analizarCalificaciones(calificaciones) {
    let aprobados = 0;
    let reprobados = 0;
    let sumaCalif = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] >= 70) {
            aprobados++;
        } else {
            reprobados++;
        }
        sumaCalif += calificaciones[i];
    }

    return {'aprobados' : aprobados, 'reprobados' : reprobados, 'promedio' : sumaCalif/calificaciones.length, 'mayor' : obtenerMayor(calificaciones), 'menor' : obtenerMenor(calificaciones)};
}

async function main(){
    const calificaciones = [85, 92, 67, 74, 88, 56, 90, 73, 81, 95];
    const resultado = analizarCalificaciones(calificaciones);
    console.log(`Aprobados: ${resultado.aprobados}\nReprobados: ${resultado.reprobados}\nPromedio: ${resultado.promedio}\nMayor: ${resultado.mayor}\nMenor: ${resultado.menor}`);
}

main();