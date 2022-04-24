import {GET_LIST_INGREDIENTS_REQUEST, GET_LIST_INGREDIENTS_ERROR, GET_LIST_INGREDIENTS_SUCCESS} from "../actions/data-ingredients";

const initialState = {
    isLoading: false, 
    hasError: false, 
    errorMessage: "", 
    data: [], 
}

export const dataIngredientsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_LIST_INGREDIENTS_REQUEST:
            return { ...state, isLoading: true }
        case GET_LIST_INGREDIENTS_SUCCESS:
            return { ...state, isLoading: false, data: action.data }
        case GET_LIST_INGREDIENTS_ERROR:
            return { ...state, isLoading: false, hasError: true, errorMessage: action.error }         
        default: {
            return state
        }
    }
}