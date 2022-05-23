import { url } from "../../utils/constants"
import { checkResponce, getCookie, updateCookies } from "../../utils/functions"

export const GET_USER_INFORMATION_REQUEST = "GET_USER_INFORMATION_REQUEST";
export const GET_USER_INFORMATION_SUCCESS = "GET_USER_INFORMATION_SUCCESS";
export const GET_USER_INFORMATION_ERROR = "GET_USER_INFORMATION_ERROR";
export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";
export const UPDATE_TOKEN_REQUEST  = "UPDATE_TOKEN_REQUEST ";

export const updateToken = () => {
    return  (dispatch) => {
        dispatch({type: UPDATE_TOKEN_REQUEST})
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
        .then(data=>{
            document.cookie = "";
            updateCookies(data);
            dispatch({type: UPDATE_TOKEN_ERROR})
        })
        .catch(error => dispatch({type: UPDATE_TOKEN_ERROR, error: error}))
    }
}

export const getUserInformationRequest =  () => {
    return async dispatch => {
        dispatch({ type: GET_USER_INFORMATION_REQUEST })

        fetch(`${url}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getCookie("token")}`
            }
        })
        .then(res => res.json())
        .then(async (data) => {
            if(data.message === "jwt expired") {
                await dispatch(updateToken());
            }
            dispatch({ type: GET_USER_INFORMATION_SUCCESS, data: data })
        })
        .catch(error => dispatch({ type: GET_USER_INFORMATION_ERROR, error: error }))
    }
}