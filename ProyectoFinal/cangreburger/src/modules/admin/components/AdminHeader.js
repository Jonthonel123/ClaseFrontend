import React from 'react'
import {Link} from 'react-router-dom'

const AdminHeader = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="!#">Navbar</a>
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
            <Link className="nav-link" href="!#"><b>Hamburguesas</b> <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="!#"><b>Promociones</b></Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" href="!#"><b>Nosotros</b></Link>
          </li>
         
        </ul>
        <form className="form-inline my-2 my-lg-0">
          
            <Link className="navbar-brand" href="!#">Delivery: 452-4851</Link>
          
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </nav>
        </header>
    )
}

export default AdminHeader
