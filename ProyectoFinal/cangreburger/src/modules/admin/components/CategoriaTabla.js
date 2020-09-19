import React from 'react'
import { MDBBadge, MDBDataTable} from "mdbreact";

const CategoriaTabla = () => {
    const datatable = {
        columns: [
          { label: "Nombre Categoria", field: "categoria_nom" },
          { label: "Acciones", field: "categoria_Acciones" },
        ],
        rows:[
            {
                categoria_nom:"PROMOCIONES",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                     <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              },
              {
                categoria_nom:"PROMOCIONES",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                      <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              },
              {
                categoria_nom:"PROMOCIONES",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                      <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              },
              {
                categoria_nom:"BEBIDAS",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                      <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              },
              {
                categoria_nom:"BEBIDAS",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                      <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              },
              {
                categoria_nom:"PROMOCIONES",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                      <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              },
              {
                categoria_nom:"HAMBURGESAS",
                categoria_Acciones:(
                  <>
                    <button 
                    className="btn btn-danger">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button 
                    className="ml-3 btn btn-warning">
                      <i class="far fa-edit"></i>
                    </button>
                  </>
                )
              }
        ]
    }
    const badgesData = {
        columns: [
          {
            label: 'ID',
            field: 'pedido_id',
          },
          ...datatable.columns,
        ],
        rows: [
          ...datatable.rows.map((row, order) => ({
            ...row,
            pedido_id: (
              <MDBBadge pill color='primary' className='p-1 px-2' key={order} searchvalue={order}>
                ID: {order + 1}
              </MDBBadge>
            ),
          })),
        ],
    }
    return (
        <div className="row mt-4">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              {              
                <MDBDataTable
                  searchLabel={"Buscar"}
                  infoLabel={["Mostrando", "al", "de", "registros"]}
                  hover
                  bordered
                  striped
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={datatable,badgesData}
                />
              }
            </div>
          </div>
        </div>
      </div>
   
    )
}

export default CategoriaTabla
