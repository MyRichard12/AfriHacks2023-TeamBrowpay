import { all } from 'redux-saga/effects';
import { addProductToInventorySaga, getAllProductsFromInventorySaga, deleteProductFromInventorySaga, updateProductFromInventorySaga, AdjustStockByIdSaga } from './Inventory.saga.js'

import { loginUserSaga, registerUserSaga } from './auth.saga.js';

import { getUserSaga } from './userSaga.js';

export default function* rootSaga() {
    yield all([
        addProductToInventorySaga(), getAllProductsFromInventorySaga(), deleteProductFromInventorySaga(), updateProductFromInventorySaga(), AdjustStockByIdSaga(),
        loginUserSaga(),
        registerUserSaga(),
        getUserSaga()
    ])
}