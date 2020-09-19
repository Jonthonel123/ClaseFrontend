import React from 'react'

const AuthRecover = () => {
    return (
        <main className="login">
        <div className="login__form">
          <h1>Recuperar Contraseña</h1>
          <form className="formulario">
            <label for="">Email:</label>
            <input
              type="email"
              className="formulario__input"
              placeholder="Email"
            />
            <label for="">Codigo de Recuperación:</label>
            <input
              type="number"
              className="formulario__input"
              placeholder="codigo"
            />
            <label for="">Nuevo Password:</label>
            <input
              type="password"
              className="formulario__input"
              placeholder="codigo"
            />
            <label for="">Repita Password:</label>
            <input
              type="password"
              className="formulario__input"
              placeholder="codigo"
            />
         
            <button className="formulario__submit" type="submit">
              Recuperar Contraseña
            </button>
           
          </form>
        </div>
      </main>
      
    )
}

export default AuthRecover
