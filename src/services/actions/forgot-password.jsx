import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";

export const SEND_FORGOT_PASSWORD_REQUEST = "SEND_FORGOT_PASSWORD_REQUEST";
export const SEND_FORGOT_PASSWORD_SUCCESS = "SEND_FORGOT_PASSWORD_SUCCESS";
export const SEND_FORGOT_PASSWORD_ERROR = "SEND_FORGOT_PASSWORD_ERROR";

export const sendForgotPassword = (email) => {
    return function (dispatch) {
        dispatch({ type: SEND_FORGOT_PASSWORD_REQUEST });

        fetch(`${url}/password-reset`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "email": email
            })
        })
        .then(checkResponce)
        .then(data => dispatch({ type: SEND_FORGOT_PASSWORD_SUCCESS, data: data }))
        .catch(error => dispatch({ type: SEND_FORGOT_PASSWORD_ERROR, error: error }))
    }

} 