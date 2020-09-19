import React from 'react'
import { MDBDataTableV5} from "mdbreact";
const ProductoTabla = () => {
    const datatable = {
        columns: [
            { label: "ID", field: "producto_id" },
          { label: "Categoria", field: "producto_cat" },
          { label: "Nombre Producto", field: "producto_nom" },
          { label: "Detalle", field: "producto_det" },
          { label: "Precio", field: "producto_pre" },
          { label: "Imagen", field: "producto_img" },
          { label: "Acciones", field: "categoria_Acciones" },
        ],
        rows:[
            {
                producto_id:"01",
                producto_cat:"PROMOCIONES",
                producto_nom:"Hamburguesa clasica + Inka Cola",
                producto_det:"Llevate una clasica con su bebida",
                producto_pre:"20",
                producto_img: "Hamburguesa",
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
                producto_id:"02",
                producto_cat:"HAMBURGUESAS",
                producto_nom:"Hamburguesa clasica + Inka Cola",
                producto_det:"Llevate una clasica con su bebida",
                producto_pre:"20",
                producto_img: "Hamburguesa",
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
                producto_id:"03",
                producto_cat:"PROMOCIONES",
                producto_nom:"Hamburguesa clasica + Inka Cola",
                producto_det:"Llevate una clasica con su bebida",
                producto_pre:"20",
                producto_img: "Hamburguesa",
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
                producto_id:"04",
                producto_cat:"PROMOCIONES",
                producto_nom:"Hamburguesa clasica + Inka Cola",
                producto_det:"Llevate una clasica con su bebida",
                producto_pre:"20",
                producto_img: "Hamburguesa",
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
                producto_id:"05",
                producto_cat:"PROMOCIONES",
                producto_nom:"Hamburguesa clasica + Inka Cola",
                producto_det:"Llevate una clasica con su bebida",
                producto_pre:"20",
                producto_img: "Hamburguesa",
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
        ]
    }

    const widerData = {
        columns: [
          ...datatable.columns.map((col) => {
            col.width = 200;
            return col;
          }),
        ],
        rows: [...datatable.rows.map((row)=>{
            row.width=200;
            return row;
        })
        ],
      };
    return (
        <div className="row mt-4">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              {              
                <MDBDataTableV5
                  searchLabel={"Buscar"}
                  infoLabel={["Mostrando", "al", "de", "registros"]}
                  hover
                  scrollX
                  bordered
                  striped
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={datatable,widerData}
                />
              }
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductoTabla
