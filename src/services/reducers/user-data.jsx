import { SEND_FORGOT_PASSWORD_REQUEST,
    SEND_FORGOT_PASSWORD_SUCCESS,
    SEND_FORGOT_PASSWORD_ERROR } from "../actions/forgot-password";

const initialState = {
    email: "",
    isLoading: false,
    hasError: false,
    errorText: ""
}

export const userDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_FORGOT_PASSWORD_REQUEST: {
            return { ...state, isLoading: true, hasError: false, errorText: "" }
        } 
        case SEND_FORGOT_PASSWORD_SUCCESS: {
            return { ...state, isLoading: false, data: action.data }
        }
        case SEND_FORGOT_PASSWORD_ERROR: {
            return { ...state, isLoading: false, hasError: true, errorText: action.error }
        }
        default: {
            return state
        }
    }
}