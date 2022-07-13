import { WSInitailState } from "../../types/initial-state";
import { TOrderFeedData } from "../../types/types";
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WsActions
} from "../actions/ws-action-types";

const initialState: WSInitailState = {
    wsConnected: false,
    orders: {} as TOrderFeedData,
}

export const wsReducer = (state = initialState, action: WsActions): WSInitailState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return { ...state, wsConnected: true }
        case WS_CONNECTION_ERROR:
            return { ...state, wsConnected: false }
        case WS_CONNECTION_CLOSED:
            return { ...state, wsConnected: false, orders: {} as TOrderFeedData }
        case WS_GET_ORDERS:
            return { ...state, orders: action.payload }
        default:
            return state
    }
}