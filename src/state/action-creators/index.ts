import {
    AddProductInProductModal,
    AddProductInShoppingBagByAmount,
    ProductModalDisplay,
    ShoppingBagModalDisplay,
    AddAmountOfProductInProductModal,
    SubtractAmountOfProductInProductModal,
    RemoveProductInShoppingBagByAmount,
    AddProductInShoppingBag,
} from '../actions';
import { ActionTypes } from '../action-types';
import { ProductState } from '../reducers/ProductsReducer';

export const addProductInShoppingBag = (
    id: string,
    price: number,
    name: string,
): AddProductInShoppingBag => {
    return {
        type: ActionTypes.ADD_PRODUCT_IN_SHOPPING_BAG,
        payload: {
            id,
            price,
            name,
        },
    };
};

export const addProductInShoppingBagByAmount = (
    id: string,
    amount: number,
    price: number,
    name: string,
): AddProductInShoppingBagByAmount => {
    return {
        type: ActionTypes.ADD_PRODUCT_IN_SHOPPING_BAG_BY_AMOUNT,
        payload: {
            id,
            amount,
            price,
            name,
        },
    };
};

export const removeProductInShoppingBagByAmount = (
    id: string,
    amount: number,
): RemoveProductInShoppingBagByAmount => {
    return {
        type: ActionTypes.REMOVE_PRODUCT_IN_SHOPPING_BAG_BY_AMOUNT,
        payload: {
            id: id,
            amount: amount,
        },
    };
};

export const toggleShoppingBagModal = (
    display: boolean,
): ShoppingBagModalDisplay => {
    return {
        type: ActionTypes.TOGGLE_SHOPPING_BAG_MODAL,
        payload: display,
    };
};

export const toggleProductModal = (
    display: boolean,
    amountFromShoppingBag?: number | undefined,
): ProductModalDisplay => {
    return {
        type: ActionTypes.TOGGLE_PRODUCT_MODAL,
        payload: {
            display: display,
            amountFromShoppingBag: amountFromShoppingBag
                ? amountFromShoppingBag
                : undefined,
        },
    };
};

export const addProductInProductModal = (
    product: ProductState,
): AddProductInProductModal => {
    return {
        type: ActionTypes.ADD_PRODUCT_IN_PRODUCT_MODAL,
        payload: product,
    };
};

export const addAmountOfProductInProductModal =
    (): AddAmountOfProductInProductModal => {
        return {
            type: ActionTypes.PRODUCT_MODAL_AMOUNT_ADD,
        };
    };

export const subtractAmountOfProductInProductModal =
    (): SubtractAmountOfProductInProductModal => {
        return {
            type: ActionTypes.PRODUCT_MODAL_AMOUNT_SUBTRACT,
        };
    };
