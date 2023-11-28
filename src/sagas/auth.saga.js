import { call, put, takeEvery, takeLeading, takeLatest, take } from "redux-saga/effects";
import * as type from "../redux/types";

import { registerUserApi, loginUserApi } from "../apis/authApi";
import { toast } from "react-hot-toast";
import { registerSuccess } from "../redux/actions/authAction";

function* registerUser(action) {
  try {
    const response = yield call(registerUserApi, action.payload);

    yield put({ type: type.REGISTER_USER, payload: response });

    yield put({ type: type.REGISTER_SUCCESS, payload: response });

    toast.success(response.message);
  } catch (error) {
    // yield put({type: type.REGISTER_USER_ERROR})
    toast.error("User Registration Failed");
    console.log(error.message);
  }
}

export function* registerUserSaga() {
  yield takeLeading(type.REGISTER_USER, registerUser);
}

function* loginUser(action) {
  try {
    const response = yield call(loginUserApi, action.payload);

    yield put({type: type.LOGIN_SUCCESS, payload: response});

    yield put({ type: type.LOGIN_USER, payload: response });    

    // toast.success(response.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export function* loginUserSaga() {
  // yield take(type.LOGIN_USER)
  yield takeLeading(type.LOGIN_USER, loginUser);
}
