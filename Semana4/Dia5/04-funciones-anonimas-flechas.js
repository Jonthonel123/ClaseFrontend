//funciones anonimas son funciones cuyo valor
// se guarda en una variable
let sumar = function(a, b) {

    return a + b;
}
let rpta = sumar(7, 8);
console.log(rpta);

//funciones de flecha

const sumarFlecha = (a, b) => {
    return a + b
}
let calcular = sumarFlecha(5, 8);
console.log(calcular);

const miFuncion = (Variables) => { body };