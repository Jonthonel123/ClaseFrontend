//funciones con parametros por defecto

function trinomioCuadrado(a, b, c) {

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    let rpta = (a * a * a) + (b * b * b) + (c * c * c);
    return rpta;

}
let resultado = trinomioCuadrado(4, 2, 2)

console.log(resultado)