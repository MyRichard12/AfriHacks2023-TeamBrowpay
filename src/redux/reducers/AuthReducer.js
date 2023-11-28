import * as type from '../types'

const initialState = {
    loading: false,
    data: '',
    errorMessage: '',
    success: false,
    isLoggedIn: false
}

export function authReducer(state = initialState, action){
    switch(action.type){
        case type.REGISTER_USER:
            return {
                ...state,
                loading: true
            }
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                isLoggedIn: true
            }
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                isLoggedIn: true
            }
        case type.LOGIN_USER:
            return {
                ...state,
                loading: true
            }
        // case type.CURRENT_USER:
        //     console.log('current')
        //     return {
        //         ...state,
        //         loading: false
        //     }
        case type.LOGOUT_USER:
            return {
                ...state,
                data: null,
                loading: false,
                isLoggedIn: false
            }
        default: 
            return state
        }
    }