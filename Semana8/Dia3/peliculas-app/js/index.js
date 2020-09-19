import { getPopulares, limitarCaracteres, buscarPeliculasPorNombre } from "./funciones.js";
import { URL_IMG } from "./variables.js";


const contenedorCarrusel = document.getElementById("contenedor-carrusel");
const inputBuscador = document.getElementById("input-buscador")
const resultados = document.getElementById("resultados")

inputBuscador.onkeyup = (e) => {
    if (inputBuscador.value.length < 3) {
        resultados.innerHTML = ""
            //todo: limpiar la zona de resultados
        return
    }
    buscarPeliculasPorNombre(inputBuscador.value).then((rpta) => {
        console.log(rpta);
        dibujarBusqueda(rpta)
    })
}

const flickity = new Flickity(contenedorCarrusel, {
    freeScroll: true,
});
const dibujarBusqueda = ({ results }) => {
    resultados.innerHTML = ""
    results.forEach((objPelicula) => {
        let col = document.createElement("div");
        col.classList.add("col-md-2");
        col.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${URL_IMG}${objPelicula.poster_path}" alt="img de las
            peliculas">
            <div class="card-body">
                <h4 class="card-title">${objPelicula.title}</h4>
                <p class="card-text">${limitarCaracteres(objPelicula)}</p>
            </div>
        </div>`;
        resultados.appendChild(col)
    });
}
const dibujarPopulares = ({ results }) => {
    results.forEach((objPelicula) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("text-left");
        card.classList.add("card-flickity")
        card.innerHTML = `
        <img class="card-img-top" src="${URL_IMG}${objPelicula.poster_path}" alt="img de las
        peliculas">
        <div class="card-body">
            <h4 class="card-title">${objPelicula.title}</h4>
            <p class="card-text">${limitarCaracteres(objPelicula)}</p>
        </div>`;

        flickity.append(card);
    });
    flickity.select(results.length / 2)
};

getPopulares().then((rpta) => {
    console.log(rpta);
    dibujarPopulares(rpta);
});