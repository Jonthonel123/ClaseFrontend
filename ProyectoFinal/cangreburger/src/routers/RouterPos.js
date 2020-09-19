import React from 'react'
import {Route,Switch} from "react-router-dom"
import Pos from '../modules/pos/screens/Pos'
import  "./../modules/pos/styles/estilos.css"
import  "./../modules/pos/styles/card2.css"
import Header from '../modules/pos/components/Header'

const RouterPos = () => {
    return (
        <>
        <Header />
         <Switch>
                <Route path={"/pos"} component={Pos}/>
            </Switch>

            <footer className="page-footer font-small blue pt-4 bg-dark text-light mt-5">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 mt-md-0 mt-3">

                        {/* <!-- Content --> */}
                        <h5 className="text-uppercase">CATEGORIAS</h5>
                        
                        <ul className="list-unstyled ">
                            <li><a className="text-light text-decoration-none" href="">hamburguesa</a></li>
                            <li><a className="text-light text-decoration-none" href="">Promociones</a></li>
                            <li><a className="text-light text-decoration-none" href="">Delivery</a></li>
                            <li><a className="text-light text-decoration-none" href="">Nosotros</a></li>
                        </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Redes Sosiales</h5>

                        <ul className="list-unstyled">
                            <li>
                            <a href="#!" className="text-decoration-none text-light"><i class="fab fa-facebook-square icono"></i></a>
                            </li>
                            <li>
                            <a href="#!" className="text-decoration-none text-light"><i class="fab fa-instagram-square icono"></i></a>
                            </li>
                            <li>
                            <a href="#!" className="text-decoration-none text-light"><i class="fab fa-linkedin icono"></i></a>
                            </li>
                            <li>
                            <a href="#!" className="text-decoration-none text-light"><i class="fab fa-whatsapp-square icono"></i></a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Formas de Pago</h5>

                        <ul className="list-unstyled ">
                            <li className="mt-2">
                            <a href="#!"><img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/visa.svg" alt="" /></a>
                            </li>
                            <li className="mt-2">
                            <a href="#!"><img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/mastercard.svg" alt="" /></a>
                            </li>
                            <li className="mt-2">
                            <a href="#!"><img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/american.svg" alt="" /></a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Lirbo de Reclamaciones</h5>

                        <ul className="list-unstyled ">
                            <li className="mt-2">
                            <a href="#!"><img src="https://pe-soapros-ripley-eci.s3.amazonaws.com/imagenes/estaticas/Cangreburger/visa.svg" alt="" /></a>
                            </li>
                            <li className="mt-2">
                            <a href="#!" className="text-danger"><h4>As tus reclamaciones aquí</h4></a>
                            </li>
                        
                        </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>

                    </div>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> soaprofessionals</a>
                    </div>
            </footer>
        </>
    )
}

export default RouterPos
