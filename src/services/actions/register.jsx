import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";

export const SEND_REGISTER_REQUEST = "SEND_REGISTER_REQUEST";
export const SEND_REGISTER_SUCCESS = "SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_ERROR = "SEND_REGISTER_ERROR";

export const sendRegister = (email, name, password) => {

    return function (dispatch) {
        dispatch({ type: SEND_REGISTER_REQUEST });

        fetch(`${url}/auth/register`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            })
        })
        .then(checkResponce)
        .then(data => {console.log(data)})
        .catch(error => {console.log(error)})
    }
}