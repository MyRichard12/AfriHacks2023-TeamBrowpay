import * as type from '../types'

export function currentUser(){
    return{
        type: type.CURRENT_USER
    }
}

export function loadBaseData(){
    return{
        type: type.BASE_DATA
    }
}