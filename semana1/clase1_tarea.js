const { ask } = require('../helpers/input.js');

async function calculadora(){
    const num1 = Number(await ask('Dame el primer número: '));
    const num2 = Number(await ask('Dame el segundo número: '));

    console.log(`La suma de ${num1} + ${num2} es ${num1+num2}`)
    console.log(`La resta de ${num1} - ${num2} es ${num1-num2}`)
    console.log(`La multiplicación de ${num1} x ${num2} es ${num1*num2}`)
    console.log(`La división de ${num1} / ${num2} es ${num1/num2}`)
}

calculadora();