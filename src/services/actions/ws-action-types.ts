import { Ttype } from "../../types/generics";
import { TOrderFeedData } from "../../types/types";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS = "WS_GET_ORDERS";
export const WS_CONNECTION_CLOSE = "WS_CONNECTION_CLOSE";

type WSConnectionStartAction = Ttype<typeof WS_CONNECTION_START>
type WSConnectionSuccessAction = Ttype<typeof WS_CONNECTION_SUCCESS>  & { 
    readonly payload: {
        readonly isTrusted: boolean
    }
}
type WSConnectionErrorAction = Ttype<typeof WS_CONNECTION_ERROR>
type WSConnectionClosedsAction = Ttype<typeof WS_CONNECTION_CLOSED> & { 
    readonly payload: {
        readonly isTrusted: boolean
    }
}
type WSGetOrdersAction = Ttype<typeof WS_GET_ORDERS> & { readonly payload: TOrderFeedData}
type WSConnectionClosesAction = Ttype<typeof WS_CONNECTION_CLOSE>

export type WsActions = 
    WSConnectionStartAction | WSConnectionSuccessAction | WSConnectionErrorAction | 
    WSConnectionClosedsAction | WSGetOrdersAction | WSConnectionClosesAction