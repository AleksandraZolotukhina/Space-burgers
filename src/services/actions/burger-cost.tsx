import { AppDispatch, AppThunk } from "../../types";
import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";
import { getCookie } from "../../utils/functions";

export const SEND_ORDER_REQUEST: "SEND_ORDER_REQUEST" = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS: "SEND_ORDER_SUCCESS" = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_ERROR: "SEND_ORDER_ERROR" = "SEND_ORDER_ERROR";

type TSendOrderRequestAction = {
    readonly type: typeof SEND_ORDER_REQUEST
}
type TSendOrderSuccessAction = {
    readonly type: typeof SEND_ORDER_SUCCESS,
    readonly orderNumber: number
}

type TSendOrderErrorAction = {
    readonly type: typeof SEND_ORDER_ERROR,
    readonly error: string
}
export type TSendOrderActions = TSendOrderRequestAction | TSendOrderSuccessAction | TSendOrderErrorAction

export const sendNewOrder: AppThunk = (idIngredients: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: SEND_ORDER_REQUEST });

        fetch(`${url}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + getCookie("token")
            },
            body: JSON.stringify({ ingredients: idIngredients })
        })
            .then(checkResponce)
            .then(data => dispatch({ type: SEND_ORDER_SUCCESS, orderNumber: data.order.number }))
            .catch(error => dispatch({ type: SEND_ORDER_ERROR, error: error }))
    }
}