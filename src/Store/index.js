import { createStore, combineReducers } from 'redux';
import { getUser } from './Actions/AuthActions'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import authReducer from './Reducers/AuthReducer'
import dataReducer from './Reducers/DataReducer'

export const configStore = () => {
    const token = window.sessionStorage.getItem("token") || null;
    const initState = {
        auth: {
            token
        },
        data: {}
    };

    console.log(authReducer)
    const reducers = combineReducers({ auth: authReducer, data: dataReducer });
    console.log(reducers)
    const store = createStore(reducers, initState, applyMiddleware(thunk))

    if (token) {
        store.dispatch(getUser());
    }

    return store;
}
