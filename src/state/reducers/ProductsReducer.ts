import { HYDRATE } from 'next-redux-wrapper';
import { StaticImageData } from 'next/image';
import { Action } from '../actions';
import { products } from '../products';

export interface ProductState {
    id: string;
    price: number;
    image: StaticImageData;
    description: string;
}

interface ProductListState {
    products: ProductState[];
}

const initialState: ProductListState = {
    products: products,
};

const reducer = (
    state: ProductListState = initialState,
    action: Action,
): ProductListState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
