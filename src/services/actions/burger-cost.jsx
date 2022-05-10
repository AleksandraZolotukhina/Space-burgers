import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_ERROR = "SEND_ORDER_ERROR";

export const sendNewOrder = (idIngredients) => {
    return function(dispatch){
        dispatch({ type: SEND_ORDER_REQUEST });

        fetch(`${url}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients: idIngredients })
        })
        .then(checkResponce)
        .then(data => dispatch({ type: SEND_ORDER_SUCCESS, orderNumber: data.order.number }))
        .catch(error => dispatch({ type: SEND_ORDER_ERROR, error: error }))
    }
}