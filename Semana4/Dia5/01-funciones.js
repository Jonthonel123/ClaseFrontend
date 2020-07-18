//funciones
//1. Funciones que no retornan valor ni reciben parametros
//delcarando una funcion

function imprimir_fecha() {
    let fecha = new Date()
    console.log(fecha);
}
//llamando o invocando una funcion
imprimir_fecha()


//2.Funciones que retornan valor y no recien parametros

function retornar_fecha() {
    let fecha = new Date();
    return fecha;
}
//e metido mi funcion a una variable(fecha)
let nuevafecha = retornar_fecha();
//imprimiendo mi variable--> va traer la fecha
console.log(nuevafecha);

//3.Funciones que reciben parametros y retornan valor
/**
 * Funcion que recibe dos numeros y calcula el 
 * el binomio cuadrado perfecto de ambos
 * @param {number} a primer numero  
 * @param {number} b segundo numero
 * @return {number} el resultado del binomio
 */
function retorno_binomio(a, b) {

    let rpta = (a * a) + (2 * a * b) + (b * b)
    return rpta;
}
let resultado_binomio = retorno_binomio(8, 5);

console.log(`El resultado del binomio es: ${resultado_binomio}`);


//4.Funcones que no retornan valor y q reciben parametros

let arreglo = [2, 4, 25, 1, 2, 69, 4, 5, 3, 1, 2, 8, 6, 10, 0, 2, 5, 4, 3]

function imprimir_pares(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i])
        }
    }
}

imprimir_pares(arreglo);