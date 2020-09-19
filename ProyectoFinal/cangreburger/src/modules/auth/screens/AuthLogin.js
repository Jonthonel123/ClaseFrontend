import React from 'react'

const AuthLogin = () => {
    return (
        <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario">
          <label for="">Email:</label>
          <input
            type="email"
            className="formulario__input"
            placeholder="Email"
          />
          <label for="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
          />
       
          <button className="formulario__submit" type="submit">
            Iniciar Sesión
          </button>
          <hr></hr>
          <div className="d-flex justify-content-center text-center">
              <button className="btn btn-outline-teal shadow"><i class="fab fa-google-plus-g mr-3"></i>Ingresar con Google</button>
              <button className="btn btn-outline-teal shadow"><i class="fab fa-facebook-f mr-3"></i>Ingresar con Facebook</button>
          </div>
          <div className="text-center mt-4">
              <p>Si aun no te registras <a href="#"><b>ingresa aquí</b></a>  </p>
          </div>
        </form>
      </div>
    </main>
    )
}

export default AuthLogin
