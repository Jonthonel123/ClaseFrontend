import React from 'react'
import CategoriaFormulario from '../components/CategoriaFormulario'
import CategoriaTabla from '../components/CategoriaTabla'

const AdminCategorias = () => {

    return (
        <>
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center text-white">Mantenimiento de Categorias</h1>
          </div>
        </div>
  
        <CategoriaFormulario
        />
        <CategoriaTabla
        />
      </>
   
    )
}

export default AdminCategorias
