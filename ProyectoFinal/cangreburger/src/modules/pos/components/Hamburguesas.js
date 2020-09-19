import React from 'react'

const Hamburguesas = () => {
    return (
        <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-light">HAMBURGUESAS</h2>
          <section className="cards">
            <div className="card__inicio">
              <div className="card__imagen">
                <img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/duo-queso-tocino.webp" alt="" />
                <p className="card__photos">S/ 15.00</p>
                <p className="card__fecha">
                  <span> -25% </span>
                </p>
              </div>
              <div className="card__info">
                <h2 className="card__titulo">Duo Queso Tocino</h2>
                <h3 className="card__subtitulo">Hamburguesa Doble carne + queso + tocino</h3>
                <p className="card__feed">
                  <div className="mt-2 btn btn-block boton">Comprar</div>
                </p>
              </div>
              
            </div>
            <div className="card__inicio">
              <div className="card__imagen">
                <img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-royal-base.webp" alt="" />
                <p className="card__photos">S/ 15.00</p>
                <p className="card__fecha">
                  <span> -25% </span>
                </p>
              </div>
              <div className="card__info">
                <h2 className="card__titulo">Royal + Chesse</h2>
                <h3 className="card__subtitulo">Hamburguesa con huevo + queso</h3>
                <p className="card__feed">
                  <div className="btn boton btn-block">Comprar</div>
                </p>
              </div>
            </div>
            <div className="card__inicio">
              <div className="card__imagen">
                <img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-a-lo-pobre_1.webp" alt="" />
                <p className="card__photos">S/ 15.00</p>
                <p className="card__fecha">
                  <span> -25% </span>
                </p>
              </div>
              <div className="card__info">
                <h2 className="card__titulo">A lo Pobre</h2>
                <h3 className="card__subtitulo">Hamburguesa clasica + huevo + platano</h3>
                <p className="card__feed">
                  <div className="btn boton btn-block">Comprar</div>
                </p>
              </div>
            </div>
            <div className="card__inicio">
              <div className="card__imagen">
                <img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-clasica.webp" alt="" />
                <p className="card__photos">S/ 15.00</p>
                <p className="card__fecha">
                  <span> -25% </span>
                </p>
              </div>
              <div className="card__info">
                <h2 className="card__titulo">Clasica</h2>
                <h3 className="card__subtitulo">Hamburguesa clasica</h3>
                <p className="card__feed">
                  <div className="btn boton btn-block">Comprar</div>
                </p>
             </div>
            </div>
            <div className="card__inicio">
              <div className="card__imagen">
                <img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-parrillera.webp" alt="" />
                <p className="card__photos">S/ 15.00</p>
                <p className="card__fecha">
                  <span> -25% </span>
                </p>
              </div>
              <div className="card__info">
                <h2 className="card__titulo">Parrillera</h2>
                <h3 className="card__subtitulo">Hamburguesa a la parrila + chorizo</h3>
                <p className="card__feed">
                  <div className="btn boton btn-block">Comprar</div>
                </p>
              </div>
            </div>
            <div className="card__inicio">
              <div className="card__imagen">
                <img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-extrema.webp" alt="" />
                <p className="card__photos">S/ 15.00</p>
                <p className="card__fecha">
                  <span> -25% </span>
                </p>
              </div>
              <div className="card__info">
                <h2 className="card__titulo">Extrema</h2>
                <h3 className="card__subtitulo">Hamburguesa doble carne + 2 huevo + 2 tocino</h3>
                <p className="card__feed">
                  <div className="btn boton btn-block">Comprar</div>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    )
}

export default Hamburguesas
