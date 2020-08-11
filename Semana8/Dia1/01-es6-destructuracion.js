/**
 * destructurar arreglos
 */

let nombres = ["Jonthonel", "Carlos", "Manuel", "Paula", "Diego"]

let [a, b, c, d, e] = nombres
console.log(e); //Diego
console.log(a); //Jonthonel


//Operador rest => ... 

let [ele1, ele2, ...resto] = nombres
console.log(ele1);
console.log(ele2);
console.log(resto);

let nombresCopia = ["jontho", ...nombres]
console.log(nombresCopia)
console.log(nombres);

const dosPrimeros = ([a, b]) => {
    console.log(a);
    console.log(b);
}
dosPrimeros(nombres)