import {call, put, takeEvery, take, takeLeading, takeLatest} from 'redux-saga/effects'
import * as type from '../redux/types'
import { fetchCurrentUser } from '../apis/userApi'

function* getUser(action){
    try {
        const response = yield call(fetchCurrentUser, action.payload)
        
        yield put({type: type.CURRENT_USER, payload: response})

    } catch (error) {
        console.log(error)
    }
}


export function* getUserSaga(){
    yield takeLeading(type.CURRENT_USER, getUser)
}