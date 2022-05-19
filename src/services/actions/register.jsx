import { url } from "../../utils/constants";
import { checkResponce, setCookie } from "../../utils/functions";

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
            const token = data.accessToken.split("Bearer ")[1];
            setCookie("token", token);
            dispatch({ type: SEND_REGISTER_SUCCESS, data: user })
        })
        .catch(error => dispatch({type: SEND_REGISTER_ERROR, error: error}))
    }
}