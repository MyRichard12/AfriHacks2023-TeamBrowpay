import * as type from '../types';

// Action creator for adding a product to the inventory
export function addProductToInventory(formValues) {
    return {
        type: type.ADD_PRODUCT_TO_INVENTORY_REQUESTED,
        payload: formValues,
    }
}

// Action creator for getting all products from the inventory
export function getAllProductsFromInventory() {
    return {
        type: type.GET_ALL_PRODUCTS_FROM_INVENTORY_REQUESTED,
    }
}

// Action creator for deleting a product from the inventory
export function deleteProductFromInventory(selected) {
    return {
        type: type.DELETE_PRODUCT_FROM_INVENTORY_REQUESTED,
        payload: selected,
    }
}

// Action creator for updating a product in the inventory
export function updateProductFromInventory(formValues) {
    return {
        type: type.UPDATE_PRODUCT_FROM_INVENTORY_REQUESTED,
        payload: formValues,
    }
}

// Action creator for adjusting the stock of a product by ID
export function adjustStockById(id, formValues) {
    return {
        type: type.ADJUST_STOCK_REQUESTED,
        payload: { id, formValues },
    }
}