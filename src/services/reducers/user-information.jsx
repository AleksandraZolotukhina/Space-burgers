import { GET_USER_INFORMATION_REQUEST, GET_USER_INFORMATION_SUCCESS, GET_USER_INFORMATION_ERROR } from "../actions/user-information";

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: "",

    data: {}
}

export const userInformationReducer = (state=initialState, action) => {
    switch (action.type) {

        case GET_USER_INFORMATION_REQUEST: {
            return {...state, isLoading: true, hasError: false, errorMessage: ""};
        }

        case GET_USER_INFORMATION_SUCCESS: {
            return {...state, isLoading: false, data: action.data};
        }

        case GET_USER_INFORMATION_ERROR: {
            return {...state, isLoading: false, hasError: true, errorMessage: action.error};
        }

        default: {
            return state;
        }
    }
}