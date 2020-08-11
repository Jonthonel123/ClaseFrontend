// destructuracion de objetos

let restaurant = {
    nombre: "El pollo real",
    tipo: "Polleria",
    aforo: 500,
    geo: {
        lat: -70,
        lng: -16,
    }
}

//creando una variable "nombre" q es copia de restaurant.nombre
let { nombre, aforo: capacidad } = restaurant
console.log(nombre);
// console.log(aforo);
console.log(capacidad);

let { geo: { lat: latitud, lng: longitud } } = restaurant
console.log(latitud);
console.log(longitud);

const nombreYAforo = ({ nombre, aforo }) => {
    console.log(nombre, aforo);

}
nombreYAforo(restaurant)

//forma correcta de copiar un objeto por completo 
let copiaRest = {...restaurant }
console.log(copiaRest);

const modificarAforo = (objRestaurant, nuevoAforo) => {
    return {
        ...objRestaurant,
        aforo: nuevoAforo
    }
}
let restaurantGrande = modificarAforo(restaurant, 5000)
console.log(restaurantGrande);