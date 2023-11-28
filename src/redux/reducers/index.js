import { combineReducers } from 'redux';
import { addProductToInventoryReducer, getAllProductsFromInventoryReducer, deleteProductFromInventoryReducer, updateProductFromInventoryReducer, adjustStockByIdReducer } from './Inventory.reducer.js'
import { authReducer } from './AuthReducer.js';
import { mainUserReducer } from './userReducer.js';

//defining root reducer
const rootReducer = combineReducers({
    addProductToInventoryReducer, getAllProductsFromInventoryReducer, deleteProductFromInventoryReducer, updateProductFromInventoryReducer, adjustStockByIdReducer, authReducer, mainUserReducer
})

export default rootReducer;