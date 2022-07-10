
import { Middleware } from "redux";
import { RootState } from "../../types";
import { getCookie } from "../../utils/functions";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS,
    WS_CONNECTION_CLOSE
} from "../actions/ws-action-types";

export const socketMiddleware = (soketUrl: string): Middleware<{}, RootState> => {
    return store => {
        let socket: WebSocket | null = null;
        return next => action => {
            const { type, token } = action;
            const { dispatch } = store;
            if (type === WS_CONNECTION_START) {
                socket = token ? new WebSocket(`${soketUrl}?token=${getCookie("token")}`) : new WebSocket(`${soketUrl}/all`);
            }
            if (socket) {

                socket.onopen = event => {
                    dispatch({ type: WS_CONNECTION_SUCCESS, payload: event })
                }

                socket.onerror = event => {
                    dispatch({ type: WS_CONNECTION_ERROR, payload: event })
                }

                socket.onmessage = event => {
                    dispatch({ type: WS_GET_ORDERS, payload: JSON.parse(event.data) })
                }
                if (type === WS_CONNECTION_CLOSE) {
                    socket.close();
                }
                socket.onclose = event => {
                    dispatch({ type: WS_CONNECTION_CLOSED, payload: event })
                }
            }
            next(action)
        }
    }
}
