//breack y contiune

//continue, es un scope de una estructura repititiva
// salta u obvia todas las sentencias de la iterecion en la que
//nos encontramos y contunuamos con la siguiente iteracion




//break; es un scope de un cliclo iterativo, finaliza
//todos los ciclos o iteraciones que restan por hacer
//sin importar en que intereacion nos encontremos

let nombres = ["jonthonel", "maria", "sol", "paula", "lina", "frans"]

let edades = [20, 25, 24, 23, 25, 21]

//que el usuario busque un nombre, y cuando el algoritmo lo encuentre
//se imprima su edad y la posicion de la que encuentre

let buscar = prompt("ingrese el nombre a buscar en la se de gatos")
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    console.log(`i = ${i}`);
    if (nombres[i] === buscar) {
        console.log(`Encontrado ${buscar}`);
        console.log(`Edad ${edades[i]}`);
        encontrado = true;
        break;

    }

}
if (!encontrado) {
    console.log("usuario no encontrado");
}