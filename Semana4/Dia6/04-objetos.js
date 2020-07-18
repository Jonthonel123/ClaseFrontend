//objetos -> Es un elemento que abstrae caracteristicas
//o atributos en comun

//como se crea ?

let persona = {
    nombre: "jonthonel",
    apellido: "requena",
    edad: 25,
    talla: 1.65,
    peso: 60,
    casado: false,
    cazado: true
};

//forma de acceder los atributos

//forma uno de acceder a los atributos
console.log(persona.nombre);
//forma dos de acceder a los atributos
console.log(persona["apellido"]);

//forma 1 de modificar un atributo
persona.casado = true
persona.peso = 80
console.log(persona);

//forma 1 de crear atributos a un objeto
persona.platos_favoritos = ["ceviche", "aji de gallina", "rocoto relleno"]

console.log(persona);

for (let i = 0; i < persona.platos_favoritos.length; i++) {
    console.log(persona.platos_favoritos[i]);

}

let producto = [{
        nombre: "Tv Samsung 50",
        precio: 8000.0,
        codigo: "10101",
        colores_disponible: ["azul", "plomo", "blanco", "negro"]
    },
    {
        nombre: "Tv Samsung 40",
        precio: 7000.0,
        codigo: "10102",
        colores_disponible: ["azul", "plomo"]
    },
    {
        nombre: "Tv Samsung 30",
        precio: 6000.0,
        codigo: "10103",
        colores_disponible: ["negro"]
    },
    {
        nombre: "Tv Samsung 25",
        precio: 5000.0,
        codigo: "10104",
        colores_disponible: []
    },
];
for (let i = 0; i < producto.length; i++) {
    console.log(`---Producto ${i+1}----`);
    console.log(`Nombre: ${producto[i].nombre}`);
    console.log(`Precio: ${producto[i].precio}`);
    console.log(`Codigo: ${producto[i].codigo}`);
    console.log(`Colores Disponibles: `);
    for (let j = 0; j < producto[i].colores_disponible.length; j++) {
        console.log(`${producto[i].colores_disponible[j]}`);
    }

}