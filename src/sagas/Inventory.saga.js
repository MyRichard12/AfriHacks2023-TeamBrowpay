import {
  call,
  put,
  take,
  takeEvery,
  takeLatest,
  delay,
  select,
  takeLeading,
} from "redux-saga/effects";
import * as type from "../redux/types.js";

import {
  addProductToInventoryApi,
  getAllProductsFromInventoryApi,
  deleteProductFromInventoryApi,
  updateProductFromInventoryApi,
  AdjustStockByIdApi,
} from "../apis/inventory.api.js";
import { toast } from "react-hot-toast";

// add product to inventory sagas
function* addProductToInventory(action) {
  try {
    const response = yield call(addProductToInventoryApi, action.payload);

    yield put({ type: type.ADD_PRODUCT_TO_INVENTORY_SUCCESS, payload: response });

    toast.success(response.message);
  } catch (error) {
    yield put({ type: type.ADD_PRODUCT_TO_INVENTORY_FAILED });

    toast.error(response.error);
  }
}

export function* addProductToInventorySaga() {
  yield takeEvery(type.ADD_PRODUCT_TO_INVENTORY_REQUESTED, addProductToInventory);
}

// get all products from inventory sagas
function* getAllProductsFromInventory() {
    try {
      const response = yield call(getAllProductsFromInventoryApi);
      yield put({ type: type.GET_ALL_PRODUCTS_FROM_INVENTORY_SUCCESS, payload: response});
    } catch (error) {
      yield put({ type: type.GET_ALL_PRODUCTS_FROM_INVENTORY_FAILED });

      toast.error(response.error);
    }

}

export function* getAllProductsFromInventorySaga() {
  yield takeEvery(
    type.GET_ALL_PRODUCTS_FROM_INVENTORY_REQUESTED,
    getAllProductsFromInventory
  );
}

// delete product from inventory sagas
function* deleteProductFromInventory(action) {
  try {
    const response = yield call(deleteProductFromInventoryApi, action.payload);

    yield put({
      type: type.DELETE_PRODUCT_FROM_INVENTORY_SUCCESS,
      payload: response,
    });

    toast.success(response.message);
  } catch (error) {
    console.log("saga :", error);
    toast.error(error.message);
    yield put({ type: type.DELETE_PRODUCT_FROM_INVENTORY_FAILED });
  }
}

export function* deleteProductFromInventorySaga() {
  yield takeEvery(
    type.DELETE_PRODUCT_FROM_INVENTORY_REQUESTED,
    deleteProductFromInventory
  );
}

// Update product from inventory sagas
function* updateProductFromInventory(action) {
  try {
    const response = yield call(updateProductFromInventoryApi, action.payload);

    yield put({
      type: type.UPDATE_PRODUCT_FROM_INVENTORY_SUCCESS,
      payload: response,
    });

    toast.success(response.message);
  } catch (error) {
    console.log("saga :", error);
    toast.error(error.message);
    yield put({ type: type.UPDATE_PRODUCT_FROM_INVENTORY_FAILED });
  }
}

export function* updateProductFromInventorySaga() {
  yield takeEvery(
    type.UPDATE_PRODUCT_FROM_INVENTORY_REQUESTED,
    updateProductFromInventory
  );
}

// Adjust Stock sagas
function* AdjustStockById(action) {
  try {
    const response = yield call(AdjustStockByIdApi, action.payload);

    yield put({ type: type.ADJUST_STOCK_SUCCESS, payload: response });

    toast.success(response.message);
  } catch (error) {
    console.log("saga :", error);
    toast.error(error.message);
    yield put({ type: type.ADJUST_STOCK_FAILED });
  }
}

export function* AdjustStockByIdSaga() {
  yield takeEvery(type.ADJUST_STOCK_REQUESTED, AdjustStockById);
}
