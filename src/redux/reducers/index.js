import { combineReducers } from 'redux';
import { addBookToInventoryReducer, getAllBooksFromInventoryReducer, deleteBookFromInventoryReducer, updateBookFromInventoryReducer, adjustStockByIdReducer } from './Inventory.reducer.js'
import { authReducer } from './AuthReducer.js';
import { mainUserReducer } from './userReducer.js';

//defining root reducer
const rootReducer = combineReducers({
    addBookToInventoryReducer, getAllBooksFromInventoryReducer, deleteBookFromInventoryReducer, updateBookFromInventoryReducer, adjustStockByIdReducer, authReducer, mainUserReducer
})

export default rootReducer;