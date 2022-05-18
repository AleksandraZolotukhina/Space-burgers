import { SEND_FORGOT_PASSWORD_REQUEST,
    SEND_FORGOT_PASSWORD_SUCCESS,
    SEND_FORGOT_PASSWORD_ERROR } from "../actions/forgot-password";

const initialState = {
    isLoading: false,
    hasError: false,
    errorText: "",
    dataForgotPassword: {},
}

export const userDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_FORGOT_PASSWORD_REQUEST: {
            return { ...state, isLoading: true, hasError: false, errorText: "" }
        } 
        case SEND_FORGOT_PASSWORD_SUCCESS: {
            return { ...state, isLoading: false, dataForgotPassword: action.data }
        }
        case SEND_FORGOT_PASSWORD_ERROR: {
            return { ...state, isLoading: false, hasError: true, errorText: action.error }
        }
        default: {
            return state
        }
    }
}