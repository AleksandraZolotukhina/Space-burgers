import { url } from "../../utils/constants"
import { checkResponce, getCookie, updateCookies, setCookie } from "../../utils/functions"

export const GET_USER_INFORMATION_REQUEST = "GET_USER_INFORMATION_REQUEST";
export const GET_USER_INFORMATION_SUCCESS = "GET_USER_INFORMATION_SUCCESS";
export const GET_USER_INFORMATION_ERROR = "GET_USER_INFORMATION_ERROR";

export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";
export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST ";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const SEND_REGISTER_REQUEST = "SEND_REGISTER_REQUEST";
export const SEND_REGISTER_SUCCESS = "SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_ERROR = "SEND_REGISTER_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const SEND_FORGOT_PASSWORD_REQUEST = "SEND_FORGOT_PASSWORD_REQUEST";
export const SEND_FORGOT_PASSWORD_SUCCESS = "SEND_FORGOT_PASSWORD_SUCCESS";
export const SEND_FORGOT_PASSWORD_ERROR = "SEND_FORGOT_PASSWORD_ERROR";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

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
        .then(data => dispatch({ type: SEND_FORGOT_PASSWORD_SUCCESS, success: data.success }))
        .catch(error => dispatch({ type: SEND_FORGOT_PASSWORD_ERROR, error: error }))
    }

}
 
export const updateToken = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_TOKEN_REQUEST })
        fetch(`${url}/auth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "token": getCookie("refreshToken")
            })
        })
            .then(checkResponce)
            .then(data => {
                document.cookie = "";
                updateCookies(data);
                dispatch(getUserInformationRequest())
            })
            .catch(error => dispatch({ type: UPDATE_TOKEN_ERROR, error: error }))
    }
}

export const getUserInformationRequest = () => {
    return  dispatch => {
        dispatch({ type: GET_USER_INFORMATION_REQUEST })

        fetch(`${url}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getCookie("token")}`
            }
        })
            .then(checkResponce)
            .then(data => {
                dispatch({ type: GET_USER_INFORMATION_SUCCESS, data: data })
            })
            .catch(error => {
                dispatch({ type: GET_USER_INFORMATION_ERROR, error: error });
                dispatch(updateToken());
            })
    }
}

export const updateUserInformation = (email, name, password) => {
    return function (dispatch) {
        dispatch({ type: UPDATE_USER_REQUEST })
        fetch(`${url}/auth/user`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getCookie("token")}`
            },
            body: JSON.stringify({
                "email": email,
                "name": name,
                "password": password
            })
        })
            .then(checkResponce)
            .then(data => dispatch({ type: UPDATE_USER_SUCCESS, data: data }))
            .catch(error => dispatch({ type: UPDATE_USER_ERROR, error: error }))
    }
}

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
                updateCookies(data);
                dispatch({ type: SEND_REGISTER_SUCCESS, data: data })
            })
            .catch(error => dispatch({ type: SEND_REGISTER_ERROR, error: error }))
    }
}

export const logoutRequest = () => {
    return function (dispatch) {
        dispatch({ type: LOGOUT_REQUEST})
        fetch(`${url}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": getCookie("refreshToken")
            })
        })
            .then(checkResponce)
            .then((data) => {
                setCookie("token", null, { expires: -1 });
                setCookie("refreshToken", null, { expires: -1 });
                dispatch({ type: LOGOUT_SUCCESS, success: data.success});
            })
            .catch(error => dispatch({ type: LOGOUT_ERROR, error: error }))
    }
}

export const loginRequest = (email, password) => {
    return function (dispatch) {
        dispatch({ type: LOGIN_REQUEST})
        fetch(`${url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(checkResponce)
            .then(data => {
                updateCookies(data);
                dispatch({ type: LOGIN_SUCCESS, data: data});
            })
            .catch(error => dispatch({ type: LOGIN_ERROR, error: error }))
    }
    
}

export const resetPassword = (password, code) => {
    return function (dispatch) {
        dispatch({ type: RESET_PASSWORD_REQUEST})
        fetch(`${url}/password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": password,
                "token": code,
            })
        })
            .then(checkResponce)
            .then(data => {
                dispatch({ type: RESET_PASSWORD_SUCCESS, success: data.success});
            })
            .catch(error => dispatch({ type: RESET_PASSWORD_ERROR, error: error }))
    }
    
}