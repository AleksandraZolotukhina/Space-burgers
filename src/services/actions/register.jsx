import { url } from "../../utils/constants";
import { checkResponce, updateCookies } from "../../utils/functions";

export const SEND_REGISTER_REQUEST = "SEND_REGISTER_REQUEST";
export const SEND_REGISTER_SUCCESS = "SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_ERROR = "SEND_REGISTER_ERROR";

export const sendRegister = (email, name, password) => {
    return function (dispatch) {
        dispatch({ type: SEND_REGISTER_REQUEST });

        fetch(`${url}/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            })
        })
        .then(checkResponce)
        .then(data => {
            const {user} = data;
            document.cookie="";
            updateCookies(data);
            dispatch({ type: SEND_REGISTER_SUCCESS, data: user })
        })
        .catch(error => dispatch({type: SEND_REGISTER_ERROR, error: error}))
    }
}