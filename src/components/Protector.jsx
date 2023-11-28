import React from "react"
import Cookies from "universal-cookie"
import {Route, redirect, Navigate} from "react-router-dom"


const cookie = new Cookies() 

const Protector = ({component: Component,  ...rest}) => {

    const token = cookie.get('SECRETKEY') 

    if(token){
    return(
    <Component {...rest} />
    )
    } else {
        return (
            <Navigate 
            to="/"
            replace
            />
        )
    }
}

export default Protector;