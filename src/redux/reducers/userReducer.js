import * as type from '../types'


const initialUserState = {
    data: '',
    loading: false
}


export function mainUserReducer(state = initialUserState, action){
    switch(action.type){
        case type.CURRENT_USER : 
        return {
            ...state,
            data: action.payload,
            loading: false
        }
    
        default: 
        return state
    }
}