
import { Middleware } from "redux";
import { RootState } from "../../types";
import { getCookie } from "../../utils/functions";

export const socketMiddleware = (soketUrl: string, payload: string, wsActions: { 
        start: string, success: string, error: string, getInfromation: string, close: string, closed: string 
    }):Middleware<{}, RootState> => {
    return store => {
        let socket: WebSocket | null = null;
        return next => action => {
            const { type, token } = action;
            const { dispatch } = store;
            if (type === wsActions.start) {
                socket = token ? new WebSocket(`${soketUrl}?token=${getCookie("token")}`) : new WebSocket(`${soketUrl}${payload}`);
            }
            if (socket) {

                socket.onopen = event => {
                    dispatch({ type: wsActions.success, payload: event })
                }

                socket.onerror = event => {
                    dispatch({ type: wsActions.error, payload: event })
                }

                socket.onmessage = event => {
                    dispatch({ type: wsActions.getInfromation, payload: JSON.parse(event.data) })
                }
                if (type === wsActions.close) {
                    socket.close();
                }
                socket.onclose = event => {
                    dispatch({ type: wsActions.closed, payload: event })
                }
            }
            next(action)
        }
    }
}
