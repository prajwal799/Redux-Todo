import { applyMiddleware, combineReducers, createStore } from "redux";
import { reduce } from "./reduce";
import {appReducer} from "./app/reduces";
import {authReducer} from "./auth/reduces";

const rootReducer = combineReducers({auth : authReducer , app : appReducer})

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("dispatching",action);
    console.log(store.getState());
    const value = next(action);
    console.log(value);
    console.log(store.getState());
}

export const store = createStore(rootReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //  applyMiddleware(loggerMiddleware)
    )
console.log(store.getState());