import { HYDRATE } from 'next-redux-wrapper';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';
import { products } from '../products';
import { ProductState } from './ProductsReducer';

interface ProductModalState {
    display: boolean;
    product: ProductState;
    amountFromShoppingBag?: number | undefined;
    amount: number;
}

const initialState: ProductModalState = {
    display: false,
    amountFromShoppingBag: undefined,
    product: products[0],
    amount: 1,
};

const reducer = (
    state: ProductModalState = initialState,
    action: Action,
): ProductModalState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state };
        case ActionTypes.ADD_PRODUCT_IN_PRODUCT_MODAL:
            return { ...state, product: action.payload };
        case ActionTypes.TOGGLE_PRODUCT_MODAL:
            return {
                ...state,
                display: action.payload.display,
                amountFromShoppingBag: action.payload.amountFromShoppingBag
                    ? action.payload.amountFromShoppingBag
                    : undefined,
                amount: action.payload.amountFromShoppingBag
                    ? action.payload.amountFromShoppingBag
                    : 1,
            };
        case ActionTypes.PRODUCT_MODAL_AMOUNT_ADD:
            if (state.amountFromShoppingBag)
                return {
                    ...state,
                    amount:
                        state.amount === state.amountFromShoppingBag
                            ? state.amountFromShoppingBag
                            : state.amount + 1,
                };

            return { ...state, amount: state.amount + 1 };
        case ActionTypes.PRODUCT_MODAL_AMOUNT_SUBTRACT:
            return {
                ...state,
                amount: state.amount >= 2 ? state.amount - 1 : 1,
            };
        default:
            return state;
    }
};

export default reducer;
