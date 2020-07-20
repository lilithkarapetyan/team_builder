import { createStore } from 'redux';
import { getUser } from './Actions/AuthActions'
export const configStore = (reducer, middleware) => {
    const token = window.sessionStorage.getItem("token");
    const initState = { token };
    const store = createStore(reducer, initState, middleware)

    if (token) {
        store.dispatch(getUser());
    }

    return store;
}
