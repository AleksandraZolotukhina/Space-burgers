import { url } from "../../utils/constants"
import { checkResponce, getAutorizationRequest } from "../../utils/functions"

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const SEND_REGISTER_SUCCESS = "SEND_LOGIN_SUCCESS";
export const SEND_LOGIN_ERROR = "SEND_LOGIN_ERROR";

export const getAuthorization = () => {
    console.log("ttt")
    return  function(dispatch) {
        console.log("fff")
        dispatch({type: SEND_LOGIN_REQUEST})
         getAutorizationRequest()
        .then(checkResponce)
        .then(data=>console.log(data))
        .catch(error => dispatch({type: SEND_LOGIN_ERROR, error: error}))     

    }
}