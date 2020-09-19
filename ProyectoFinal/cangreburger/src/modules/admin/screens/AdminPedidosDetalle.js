import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPedidosById } from '../../../services/pedidos'
import Cargando from '../components/Cargando'

const AdminPedidosDetalle = (props) => {
    // console.log(props.match.params.pedido_id);
    const {pedido_id}=useParams()

    const [pedido,setPedido]=useState({})

    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        getPedidosById(pedido_id).then((rpta)=>{
            
            if(rpta.ok){
                setPedido(rpta.pedido)
            }
            setLoading(false)
        })
    },[])
    return (
        <>
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center text-light">Detalle de pedido</h1>
            {loading && <Cargando />}
          </div>
        </div>
        {
            !loading &&(
                <>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-header">
                                <h5 className="card-title">Pedido</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    <strong>Nro Pedido: </strong> Pedido 01
                                </p>
                                <p className="card-text">
                                    <strong>Estado: </strong> Pagado
                                </p>
                                <p className="card-text">
                                    <strong>Fecha: </strong> 17-09-2020
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-header">
                            <h5 className="card-title">Mesa</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                    <strong>Nro Mesa: </strong> 01
                                </p>
                                <p className="card-text">
                                    <strong>Capacidad: </strong> 10 personas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-header">
                            <h5 className="card-title">Trabajador</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                    <strong>Nombre: </strong> Jonthonel
                                </p>
                                <p className="card-text">
                                    <strong>Apellido: </strong> Requena
                                </p>
                                <p className="card-text">
                                    <strong>Tipo: </strong> Mozo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="card-header bg-light">
                            <h4 className="card-title text-center">Detalle de la Compra</h4>
                        </div>
                        <div className="card shadow">
                        <div className="card-body">
                            <table className="table text-center table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Cant.</th>
                                        <th>Descripccion</th>
                                        <th>Imagen</th>
                                        <th>P. Unitario</th>
                                        <th>P. Total</th>
                                        <th>Direccion</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>2</td>
                                            <td>Hamburguesa Clasica</td>
                                            <td><img height={50} src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-clasica.webp" alt={"img del plato"}/></td>
                                            <td>S/ 15.00</td>
                                            <td>S/ 30.00</td>
                                            <td>AS. Pedro Portillo A-11</td>
                                        </tr>

                                        <tr>
                                            <td>01</td>
                                            <td>2</td>
                                            <td>Hamburguesa Clasica</td>
                                            <td><img height={50} src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-clasica.webp" alt={"img del plato"}/></td>
                                            <td>S/ 15.00</td>
                                            <td>S/ 30.00</td>
                                            <td>Milagros N 157</td>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>2</td>
                                            <td>Hamburguesa Clasica</td>
                                            <td><img height={50} src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-clasica.webp" alt={"img del plato"}/></td>
                                            <td>S/ 15.00</td>
                                            <td>S/ 30.00</td>
                                            <td>Preciones Comercializadora n 157</td>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>2</td>
                                            <td>Hamburguesa Clasica</td>
                                            <td><img height={50} src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-clasica.webp" alt={"img del plato"}/></td>
                                            <td>S/ 15.00</td>
                                            <td>S/ 30.00</td>
                                            <td>Calle Mangales 154</td>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td>2</td>
                                            <td>Hamburguesa Clasica</td>
                                            <td><img height={50} src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/hamburguesa-bembos-clasica.webp" alt={"img del plato"}/></td>
                                            <td>S/ 15.00</td>
                                            <td>S/ 30.00</td>
                                            <td>AS. Luis Gallo E-81</td>
                                        </tr>

                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3 justify-content-end">
                    <div className="col-md-3">
                        <button className="btn btn-block btn-warning"><i className="fas fa-chevron-left"></i> Volver</button>
                    </div>
                </div>

                </>
            )
        }
        </>
    )
}

export default AdminPedidosDetalle
