import { TUserInitialState } from "../../types/initial-state";
import { TAllUserInfromation, TUserInfromation } from "../../types/types";
import {
    GET_USER_INFORMATION_REQUEST,
    GET_USER_INFORMATION_SUCCESS,
    GET_USER_INFORMATION_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    SEND_REGISTER_REQUEST,
    SEND_REGISTER_SUCCESS,
    SEND_REGISTER_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SEND_FORGOT_PASSWORD_ERROR,
    SEND_FORGOT_PASSWORD_SUCCESS,
    SEND_FORGOT_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    UPDATE_TOKEN_ERROR,
    TUserInformationActions
} from "../actions/user-information";

const initialState: Readonly<TUserInitialState> = {
    isLoaded: false,
    hasErrorGetUser: false,
    errorMessageGetUser: "",

    isLoadingUpdateUser: false,
    hasErrorUpdateUser: false,
    errorMessageUpdateUser: "",

    hasErrorUpdateToken: false,

    isLoadingRegisterUser: false,
    hasErrorRegisterUser: false,
    errorMessageRegisterUser: "",

    isLoadingLogOut: false,
    hasErrorLogOut: false,
    errorMessageLogOut: "",
    logOutSuccess: false,

    isLoadingLogIn: false,
    hasErrorLogIn: false,
    errorMessageLogIn: "",

    isLoadingForgotPassword: false,
    hasErrorForgotPassword: false,
    errorMessageForgotPassword: "",
    successForgotPassword: false,

    isLoadingResetPassword: false,
    hasErrorResetPassword: false,
    errorMessageResetPassword: "",
    successResetPassword: false,

    data: {} as TUserInfromation | TAllUserInfromation
}

export const userInformationReducer = (state = initialState, action: TUserInformationActions): Readonly<TUserInitialState> => {
    switch (action.type) {

        case GET_USER_INFORMATION_REQUEST: {
            return { ...state, isLoaded: false, hasErrorGetUser: false, errorMessageGetUser: "" }
        }
        case GET_USER_INFORMATION_SUCCESS: {
            return { ...state, isLoaded: true, data: action.data }
        }
        case GET_USER_INFORMATION_ERROR: {
            return { ...state, isLoaded: true, hasErrorGetUser: true, errorMessageGetUser: action.error }
        }


        case UPDATE_USER_REQUEST: {
            return { ...state, isLoadingUpdateUser: true }
        }
        case UPDATE_USER_SUCCESS: {
            return { ...state, isLoadingUpdateUser: false, hasErrorUpdateUser: false, data: action.data }
        }
        case UPDATE_USER_ERROR: {
            return { ...state, isLoadingUpdateUser: false, hasErrorUpdateUser: true, errorMessageUpdateUser: action.error }
        }


        case SEND_REGISTER_REQUEST: {
            return { ...state, isLoadingRegisterUser: true, hasErrorRegisterUser: false, errorMessageRegisterUser: "", logOutSuccess: false }
        }
        case SEND_REGISTER_SUCCESS: {
            return { ...state, isLoadingRegisterUser: false, data: action.data }
        }
        case SEND_REGISTER_ERROR: {
            return { ...state, isLoadingRegisterUser: false, hasErrorRegisterUser: true, errorMessageRegisterUser: action.error }
        }


        case LOGOUT_REQUEST: {
            return { ...state, isLoadingLogOut: true, hasErrorLogOut: false, errorMessageLogOut: "" }
        }
        case LOGOUT_SUCCESS: {
            return { ...state, isLoadingLogOut: false, logOutSuccess: action.success, data: {} as TUserInfromation }
        }
        case LOGOUT_ERROR: {
            return { ...state, isLoadingLogOut: false, hasErrorLogOut: true, errorMessageLogOut: action.error }
        }


        case LOGIN_REQUEST: {
            return { ...state, isLoadingLogIn: true, hasErrorLogIn: false, errorMessageLogIn: "" }
        }
        case LOGIN_SUCCESS: {
            return { ...state, isLoadingLogIn: false, data: action.data, logOutSuccess: false }
        }
        case LOGIN_ERROR: {
            return { ...state, isLoadingLogIn: false, hasErrorLogIn: true, errorMessageLogIn: action.error }
        }


        case SEND_FORGOT_PASSWORD_REQUEST: {
            return { ...state, isLoadingForgotPassword: true, hasErrorForgotPassword: false, errorMessageForgotPassword: "" }
        }
        case SEND_FORGOT_PASSWORD_SUCCESS: {
            return { ...state, isLoadingForgotPassword: false, successForgotPassword: action.success }
        }
        case SEND_FORGOT_PASSWORD_ERROR: {
            return { ...state, isLoadingForgotPassword: false, hasErrorForgotPassword: true, errorMessageForgotPassword: action.error }
        }


        case RESET_PASSWORD_REQUEST: {
            return { ...state, isLoadingResetPassword: true, hasErrorResetPassword: false, successResetPassword: false, errorMessageResetPassword: "" }
        }
        case RESET_PASSWORD_SUCCESS: {
            return { ...state, isLoadingResetPassword: false, successResetPassword: action.success }
        }
        case RESET_PASSWORD_ERROR: {
            return { ...state, isLoadingResetPassword: false, hasErrorResetPassword: true, errorMessageResetPassword: action.error }
        }

        case UPDATE_TOKEN_ERROR: {
            return { ...state, hasErrorUpdateToken: true }
        }
        default: {
            return state;
        }
    }
}