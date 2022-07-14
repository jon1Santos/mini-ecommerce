import { ActionTypes } from '../action-types';
import { ProductState } from '../reducers/ProductsReducer';

export interface AddProductInShoppingBag {
    type: ActionTypes.ADD_PRODUCT_IN_SHOPPING_BAG;
    payload: {
        id: string;
        price: number;
        name: string;
    };
}

export interface AddProductInShoppingBagByAmount {
    type: ActionTypes.ADD_PRODUCT_IN_SHOPPING_BAG_BY_AMOUNT;
    payload: {
        id: string;
        amount: number;
        price: number;
        name: string;
    };
}

export interface RemoveProductInShoppingBagByAmount {
    type: ActionTypes.REMOVE_PRODUCT_IN_SHOPPING_BAG_BY_AMOUNT;
    payload: {
        id: string;
        amount: number;
    };
}

export interface ShoppingBagModalDisplay {
    type: ActionTypes.TOGGLE_SHOPPING_BAG_MODAL;
    payload: boolean;
}

export interface ProductModalDisplay {
    type: ActionTypes.TOGGLE_PRODUCT_MODAL;
    payload: {
        display: boolean;
        amountFromShoppingBag: number | undefined;
    };
}

export interface AddProductInProductModal {
    type: ActionTypes.ADD_PRODUCT_IN_PRODUCT_MODAL;
    payload: ProductState;
}

export interface HYDRATE {
    type: HYDRATE;
}

export interface SubtractAmountOfProductInProductModal {
    type: ActionTypes.PRODUCT_MODAL_AMOUNT_SUBTRACT;
}

export interface AddAmountOfProductInProductModal {
    type: ActionTypes.PRODUCT_MODAL_AMOUNT_ADD;
}

export type Action =
    | HYDRATE
    | ShoppingBagModalDisplay
    | AddProductInShoppingBag
    | AddProductInShoppingBagByAmount
    | ProductModalDisplay
    | AddProductInProductModal
    | AddAmountOfProductInProductModal
    | SubtractAmountOfProductInProductModal
    | RemoveProductInShoppingBagByAmount;
