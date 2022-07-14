import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export function makeStore() {
    const store = createStore(reducers, composeWithDevTools());

    return store;
}

export const store = makeStore();

export const storeWrapper = createWrapper(makeStore, { debug: true });
