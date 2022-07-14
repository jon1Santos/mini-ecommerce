import { combineReducers } from 'redux';
import shoppingBagReducer from './ShoppingBagReducer';
import productsReducer from './ProductsReducer';
import productModalReducer from './ProductModalReducer';

const reducers = combineReducers({
    shoppingBag: shoppingBagReducer,
    products: productsReducer,
    productModal: productModalReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
