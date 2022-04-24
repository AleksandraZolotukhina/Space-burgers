import { SEE_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from "../actions/burger-ingredients";

const initialState = {
    details: {},
}

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEE_INGREDIENT_DETAILS:
            return {...state, details: action.data}
        case DELETE_INGREDIENT_DETAILS:
            return {...state, details: action.data}        
        default:
            return {...state}    
    }
    
}