let paises = [
  { id: 1, nombre: "Perú" },
  { id: 2, nombre: "Bolivia" },
  { id: 3, nombre: "Chile" },
  { id: 4, nombre: "Argentina" },
];

let departamentos = [
  { id: 1, nombre: "Lima", paisId: 1 },
  { id: 2, nombre: "Arequipa", paisId: 1 },
  { id: 3, nombre: "Puno", paisId: 1 },
  { id: 4, nombre: "La Paz", paisId: 2 },
  { id: 5, nombre: "Cochabamba", paisId: 2 },
  { id: 6, nombre: "Santa Cruz", paisId: 2 },
];

const getPaisById = (id) => {
  let buscando = new Promise((resolve, reject) => {
    setTimeout(() => {
      let pais = paises.find((objPais) => {
        if (objPais.id === id) {
          return objPais;
        }
      });
      if (pais) {
        resolve(pais);
      } else {
        reject("No se encontro el país buscado joven");
      }
    }, 2000);
  });
  return buscando;
};

const getDepartamentosByPaisId = (id) => {
  const buscando = new Promise((resolve, reject) => {
    setTimeout(() => {
      const dptos = departamentos.filter((objDpto) => {
        if (objDpto.paisId === id) {
          return objDpto;
        }
      });
      resolve(dptos);
    }, 3000);
  });
  return buscando;
};

getPaisById(1)
  .then((paisEncontrado) => {
    console.log(paisEncontrado);
    return getDepartamentosByPaisId(1);
  })
  .then((dptos) => {
    console.log(dptos);
  })
  .catch((mensajeError) => {
    console.log("=(");
    console.log(mensajeError);
  });

// getDepartamentosByPaisId(2)
//   .then((dptos) => {
//     console.log("llegaron los departamentos");
//     console.log(dptos);
//   })
//   .catch(() => {});
