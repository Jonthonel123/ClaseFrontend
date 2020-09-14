import React from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import AuthLogin from '../modules/auth/screens/AuthLogin'
import AuthRegister from '../modules/auth/screens/AuthRegister'
import AuthRecover from '../modules/auth/screens/AuthRecover'

const RouterAuth = () => {
    return (
       <>
        <Switch>
            <Route path={"/auth/login"} component={AuthLogin}/>
            <Route path={"/auth/register"} component={AuthRegister}/>
            <Route path={"/auth/recover"} component={AuthRecover}/>
            <Redirect to={"/auth/login"}/>
        </Switch>
       </>
    )
}

export default RouterAuth
