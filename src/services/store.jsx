import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';
import { socketMiddleware } from "./widdleware/socketMiddleware";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware()))
export const store = createStore(rootReducer, enhancer);
