import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const RutaPrivada = ({path,componente:Componente}) => {
    const autenticado=true
    return autenticado ? (<Route path={path} component={Componente}/>):
                        (<Redirect to={"/"}/>)

    
}

export default RutaPrivada
