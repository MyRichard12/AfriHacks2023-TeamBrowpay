import { all } from 'redux-saga/effects';
import { addBookToInventorySaga, getAllBooksFromInventorySaga, deleteBookFromInventorySaga, updateBookFromInventorySaga, AdjustStockByIdSaga } from './Inventory.saga.js'

import { loginUserSaga, registerUserSaga } from './auth.saga.js';

import { getUserSaga } from './userSaga.js';

export default function* rootSaga() {
    yield all([
        addBookToInventorySaga(), getAllBooksFromInventorySaga(), deleteBookFromInventorySaga(), updateBookFromInventorySaga(), AdjustStockByIdSaga(),
        loginUserSaga(),
        registerUserSaga(),
        getUserSaga()
    ])
}