import React from 'react'

const Header = () => {
    return (
        <header classNameName="header">
        <nav className="navbar navbar-expand-sm navbar-light bg-nav fixed-top">
        <a className="navbar-brand" href="#">Cangreburger</a>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#"><b>Hamburguesas</b> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><b>Promociones</b></a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="#"><b>Nosotros</b></a>
            </li>
            
            </ul>
            <form className="form-inline my-2 my-lg-0">
            
                <a className="navbar-brand" href="#">Delivery: 452-4851</a>
            
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
                Iniciar Sesión
            </button>
            </form>
        </div>
        </nav>
    </header>
   
    )
}

export default Header
