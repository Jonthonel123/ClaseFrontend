import React from 'react'
import { Form } from 'react-bootstrap'

const ProductoFormulario = () => {
    return (
        <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form>
                <div className="form-group">
                <Form>
                 <Form.Group controlId="formGridState">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select" defaultValue="HAMBURGUESA">
                            <option>HAMURGUESA</option>
                            <option>PROMOCIONES</option>
                            <option>BEBIDAS</option>
                        </Form.Control>
                </Form.Group>
                </Form>
                </div>
                <div className="form-group">
                  <label htmlFor="">Nombre del Producto:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="nombre Producto"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Detalle del Producto:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="detalle producto"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Precio:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="precio"
                  />
                </div>
                <div className="form-group">
                  <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Imagen" />
                    </Form.Group>
                </Form>
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

export default ProductoFormulario
