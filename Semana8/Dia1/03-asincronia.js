/**
 * setTimeout
 */

let resultados = []
const traerDatos = () => {
    console.log("conectadose a la BD ...");
    console.log("los datos llegaron del servidor");
    resultados = [50, 70, 80, 90, 100]
}

console.log("log 1");

setTimeout(traerDatos, 2000)

console.log("log 2");
console.log(resultados);

console.log("log 3");
// setTimeout(() => {
//     console.log("se trajeron datos mas pesados");
// }, 3000)

/**
 * promesas
 */



/**
 * fetch(ajax)
 */





/**
 * Importaciones y exportaciones
 */