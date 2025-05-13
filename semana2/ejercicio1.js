const { ask } = require('../helpers/input');

function saludar(nombre){
    console.log(`Hola estimado ${nombre}, espero tengas un buen día...`);
}

async function main(){
    let limite = Number(await ask("Hasta qué número quieres contar: "));
    let i = 0;

    while (i <= limite) {
        console.log(i);
        i++;
    }
    i = limite-1;
    while (i >= 0) {
        console.log(i);
        i--;
    }

    const personas = [
        "Diego",
        "Alexa",
        "Max",
        "Daniel"
    ];

    console.log("Ascendente");
    for (let i = 0; i < personas.length; i++) {
        saludar(personas[i]);
    }
    console.log("Descendente");
    for (let i = personas.length -1; i >= 0; i--) {
        saludar(personas[i]);
        
    }
}

main();