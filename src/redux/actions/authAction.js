import * as type from '../types'

// auth register for adding a user to the db

export function registerUser(formValues){
    return {
        type: type.REGISTER_USER,
        payload: formValues
    }
}

export function loginUser(formValues){
    return{
        type: type.LOGIN_USER,
        payload: formValues
    }
}

export function registerSuccess(){
    return {
        type: type.REGISTER_SUCCESS
    }
}

export function loginSuccess(){
    return {
        type: type.LOGIN_SUCCESS
    }
}

export function logoutUser(){
    return{
        type: type.LOGOUT_USER
    }
}

