/**
 * las promesas nos ayudan a esperar el resultado de un proceso asincrono
 */

let miPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(["70", "55", "11", "12"])
    }, 2000);
})

miPromesa.then((respuesta) => {
    console.log(respuesta);
}).catch((error) => {
    console.log(error);
})