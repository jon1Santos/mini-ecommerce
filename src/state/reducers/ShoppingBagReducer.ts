import { ActionTypes } from '../action-types';
import { HYDRATE } from 'next-redux-wrapper';
import { Action } from '../actions';
import _ from 'lodash';

export interface ShoppingBagState {
    display: boolean;
    totalValue: number;
    products: {
        [key: string]: {
            productName: string;
            amount: number;
            price: number;
        };
    };
}

const initialState: ShoppingBagState = {
    display: false,
    totalValue: 0,
    products: {},
};

const reducer = (
    state: ShoppingBagState = initialState,
    action: Action,
): ShoppingBagState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state };
        case ActionTypes.TOGGLE_SHOPPING_BAG_MODAL:
            return { ...state, display: action.payload };
        case ActionTypes.ADD_PRODUCT_IN_SHOPPING_BAG: {
            const { id, price, name } = action.payload;

            return {
                ...state,
                display: false,
                products: {
                    ...state.products,
                    [id]: {
                        amount: state.products[id]
                            ? state.products[id].amount + 1
                            : 1,
                        price: price,
                        productName: name,
                    },
                },
                totalValue: state.totalValue + price,
            };
        }
        case ActionTypes.ADD_PRODUCT_IN_SHOPPING_BAG_BY_AMOUNT: {
            const { id, amount, price, name } = action.payload;

            if (!amount) return state;

            return {
                ...state,
                display: false,
                products: {
                    ...state.products,
                    [id]: {
                        amount: state.products[id]
                            ? state.products[id].amount + amount
                            : amount,
                        price: price,
                        productName: name,
                    },
                },
                totalValue: state.totalValue + amount * price,
            };
        }

        case ActionTypes.REMOVE_PRODUCT_IN_SHOPPING_BAG_BY_AMOUNT: {
            const { id, amount } = action.payload;

            if (!state.products[id]) return { ...state };

            return {
                ...state,
                products:
                    state.products[id].amount > amount
                        ? {
                              ...state.products,
                              [id]: {
                                  amount: state.products[id].amount - amount,
                                  price: state.products[id].price,
                                  productName: state.products[id].productName,
                              },
                          }
                        : _.omit(state.products, [id]),
                totalValue:
                    amount <= state.products[id].amount
                        ? state.totalValue - state.products[id].price * amount
                        : 0,
            };
        }

        default:
            return state;
    }
};

export default reducer;
