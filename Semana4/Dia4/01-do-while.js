// do while
//hacer un programa en el que se ingrensen N notas
//para calcular el promedio de todas las notas

// el usuario ingresa las notas una a una hasta que
// ingresa el numero -1, el cual es el indicador
// del fin de ingreso

let semaforo = true
let notas = []
let suma = 0
do {

    let nota = +prompt("Ingresa una nueva nota")
    if (nota === -1) {
        semaforo = false
    } else {
        notas.push(nota)
        suma += nota
    }

} while (semaforo === true);
console.log(`Promedio de notas: ${suma/notas.length}`);