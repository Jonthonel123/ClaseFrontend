import React from 'react'

const CategoriaFormulario = () => {

    return (
        <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="">Nombre de la Categoria:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="nombre Categoria"
                  />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary" type="submit">
                    Crear
                  </button>
                  <button className="btn btn-secondary ml-3" type="button">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
    )
}

export default CategoriaFormulario
