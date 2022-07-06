import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';
import { socketMiddleware } from "./widdleware/socketMiddleware";

const composeEnhancers =
  typeof window === 'object' && (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose
    ? (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})'] as typeof compose || compose
    : compose; //think

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware("wss://norma.nomoreparties.space/orders")))
export const store = createStore(rootReducer, enhancer);
