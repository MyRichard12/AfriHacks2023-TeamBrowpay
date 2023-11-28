import * as type from '../types.js';

// Initial state for the addProductToInventoryReducer
const initialAddProductToInventoryState = {
    loading: false,
    data: '',
    errorMessage: '',
    success: false
}

// Initial state for the other inventory reducers
const initialInventoryState = {
    loading: false,
    data: [],
    errorMessage: '',
    success: false
}

// Reducer for handling the ADD_PRODUCT_TO_INVENTORY_REQUESTED action
export function addProductToInventoryReducer(state = initialAddProductToInventoryState, action) {
    switch (action.type) {
        case type.ADD_PRODUCT_TO_INVENTORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.ADD_PRODUCT_TO_INVENTORY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                success: action.payload.success
            }
        case type.ADD_PRODUCT_TO_INVENTORY_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}

// Reducer for handling the GET_ALL_PRODUCTS_FROM_INVENTORY_REQUESTED action
export function getAllProductsFromInventoryReducer(state = initialInventoryState, action) {
    switch (action.type) {
        case type.GET_ALL_PRODUCTS_FROM_INVENTORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_ALL_PRODUCTS_FROM_INVENTORY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                success: action.payload.success
            }
        case type.GET_ALL_PRODUCTS_FROM_INVENTORY_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}

// Reducer for handling the DELETE_PRODUCT_FROM_INVENTORY_REQUESTED action
export function deleteProductFromInventoryReducer(state = initialInventoryState, action) {
    switch (action.type) {
        case type.DELETE_PRODUCT_FROM_INVENTORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.DELETE_PRODUCT_FROM_INVENTORY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                success: action.payload.success
            }
        case type.DELETE_PRODUCT_FROM_INVENTORY_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}

// Reducer for handling the UPDATE_PRODUCT_FROM_INVENTORY_REQUESTED action
export function updateProductFromInventoryReducer(state = initialAddProductToInventoryState, action) {
    switch (action.type) {
        case type.UPDATE_PRODUCT_FROM_INVENTORY_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.UPDATE_PRODUCT_FROM_INVENTORY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                success: action.payload.success
            }
        case type.UPDATE_PRODUCT_FROM_INVENTORY_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}

// Reducer for handling the ADJUST_STOCK_REQUESTED action
export function adjustStockByIdReducer(state = initialAddProductToInventoryState, action) {
    switch (action.type) {
        case type.ADJUST_STOCK_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.ADJUST_STOCK_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                success: action.payload.success
            }
        case type.ADJUST_STOCK_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.error
            }
        default:
            return state
    }
}