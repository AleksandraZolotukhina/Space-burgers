import { SEND_REGISTER_REQUEST, SEND_REGISTER_SUCCESS, SEND_REGISTER_ERROR } from "../actions/register"
const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: "",

    email: "",
    userName: "",
    token: ""
}

export const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_REGISTER_REQUEST: {
            return {...state, isLoading: true, hasError: false, errorMessage: ""}
        }

        case SEND_REGISTER_SUCCESS: {
            return {...state, isLoading: false, email: action.email, userName: action.userName, token: action.token}
        }

        case SEND_REGISTER_ERROR: {
            return {...state, isLoading: false, hasError: true, errorMessage: action.error}
        }

        default: {
            return state
        }
    }
} 