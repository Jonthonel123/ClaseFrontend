import React from 'react'
import ProductoFormulario from '../components/ProductoFormulario'
import ProductoTabla from '../components/ProductoTabla'

const AdminProductos = () => {
    return (
        <>
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center text-white">Mantenimiento de Productos</h1>
          </div>
        </div>
  
        <ProductoFormulario
        />
        <ProductoTabla
        />
      </>
    )
}

export default AdminProductos
