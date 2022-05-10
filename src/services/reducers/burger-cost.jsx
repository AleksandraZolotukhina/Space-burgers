import {SEND_ORDER_REQUEST, SEND_ORDER_SUCCESS, SEND_ORDER_ERROR} from "../actions/burger-cost";

const initialState = {
    hasError: false, 
    isLoading: false, 
    errorMessage: "", 
    orderNumber: undefined
}

export const sendNewOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER_REQUEST: 
            return {...state, isLoading: true}
        case SEND_ORDER_SUCCESS:
            return {...state, isLoading: false, hasError: false, orderNumber: action.orderNumber}
        case SEND_ORDER_ERROR:
            return {...state, isLoading: false, hasError: true, errorMessage: action.error}
        default: {
            return state
        }
    }
}