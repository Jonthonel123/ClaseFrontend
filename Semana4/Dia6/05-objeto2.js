let tienda = {
    nombre: "Capricho",
    categoria: "postres",
    ruc: 25132542125212,
    descripcion: "Tiendas de postres Peru SAC",
    sucursales: [{
        nombre: "Capricho Huacho",
        telefono: "970793132",
    }, {
        nombre: "Capricho Humaya",
        telefono: "970793132",
    }, {
        nombre: "Capricho Lima",
        telefono: "970793132",
    }],
}

console.log(`----CAPRICHO-----`);
console.log(`Nombre: ${tienda.nombre}`);
console.log(`Categoria: ${tienda.categoria}`);
console.log(`ruc: ${tienda.ruc}`);
console.log(`descripcion: ${tienda.descripcion}`);
console.log(`Sucursales:`);
for (let i = 0; i < tienda.sucursales.length; i++) {
    console.log(`sucursal ${i+1}`);
    console.log(`Nombre ${tienda.sucursales[i].nombre}`);
    console.log(`telefono ${tienda.sucursales[i].telefono}`);
}