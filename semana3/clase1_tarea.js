// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

async function agregarAlumno(alumnos){
    const alumno = {
        nombre: "",
        edad: 0,
        calificacion: 0
    };

    alumno.nombre = await ask("Ingresa el nombre del alumno: ");
    alumno.edad = Number(await ask("Ingresa la edad del alumno: "));
    alumno.calificacion = Number(await ask("Ingresa la calificación del alumno: "));
    alumnos.push(alumno);
    console.log("Alumno agregado\n");
}

function obtenerPromedio(alumnos){
    let suma = 0;
    for (let i = 0; i < alumnos.length; i++) {
        suma += alumnos[i].calificacion;
    }

    return suma/alumnos.length;
}

function obtenerMayor(alumnos){
    let mayor = alumnos[0].calificacion;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].calificacion > mayor) {
            mayor = alumnos[i].calificacion;
        }
    }

    return mayor;
}

function obtenerMenor(alumnos){
    let menor = alumnos[0].calificacion;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].calificacion < menor) {
            menor = alumnos[i].calificacion;
        }
    }

    return menor;
}

function mostrarDatos(alumnos){
    if (alumnos.length === 0) {
        console.log("No hay alumnos registrados\n");
        return;
    }
    console.log(`Alumnos aprobados: ${alumnos.filter(alumno => alumno.calificacion >= 70).length}
Alumnos que pueden votar: ${alumnos.filter(alumno => alumno.edad >= 18).length}
Promedio general de califiaciones: ${obtenerPromedio(alumnos)}
Calificación mayor: ${obtenerMayor(alumnos)}
Calificación menor: ${obtenerMenor(alumnos)}\n`); // el .filter() devuelve un nuevo arreglo con los elementos que cumplen la condición
// si no se usara el filter se usaría una función aparte con un ciclo que recorra siempre alumnos[i].calificacion y verifique si aprobó
}

async function main(){
    let opc = 0;
    let alumnos = [];
    do {
        console.log("---Menú---\n1. Agregar alumnos\n2. Mostrar datos de los alumnos\n3. Salir");
        opc = Number(await ask('Ingresa una opción: '));
        switch (opc) {
            case 1: await agregarAlumno(alumnos); break;
            case 2: await mostrarDatos(alumnos); break;
            case 3: console.log("Saliendo..."); break;
        
            default: console.log("Opción no válida\n"); break;
        }
    } while (opc !== 3);
};

main();