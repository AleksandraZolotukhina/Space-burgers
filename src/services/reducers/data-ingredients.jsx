import {
    GET_LIST_INGREDIENTS_REQUEST,
    GET_LIST_INGREDIENTS_ERROR,
    GET_LIST_INGREDIENTS_SUCCESS,
    ADD_INGREDIENT, DELETE_INGREDIENT,
    DELETE_BUNS,
    UPDATE_ORDER_INGREDIENTS,
    INCREASE_INGREDIENT,
    DECREASE_INGREDIENT
} from "../actions/data-ingredients";
import update from 'immutability-helper';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: "",
    ingredients: [],
    constructorIngredients: [],
}

export const dataIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_INGREDIENTS_REQUEST:{
            return { ...state, isLoading: true }
        }
        case GET_LIST_INGREDIENTS_SUCCESS:{
            return {...state, isLoading: false, ingredients: action.data.map(el => {
                    return { ...el, count: 0 }})
            }
        }
        case GET_LIST_INGREDIENTS_ERROR: {
            return { ...state, isLoading: false, hasError: true, errorMessage: action.error }
        }
        case ADD_INGREDIENT: {
            return { ...state, constructorIngredients: [...state.constructorIngredients, {...state.ingredients.find(el => el._id === action.id), uuid:uuidv4()}] }
        }
        case DELETE_INGREDIENT: {
            return { ...state, constructorIngredients: [...state.constructorIngredients.slice(0, action.index), ...state.constructorIngredients.slice(action.index + 1)] }
        }
        case DELETE_BUNS: {
            return { ...state, constructorIngredients: state.constructorIngredients.filter(el => el._id !== action.id) }
        }
        case UPDATE_ORDER_INGREDIENTS: {
            return {
                ...state, constructorIngredients: update(state.constructorIngredients, {
                    $splice: [
                        [action.dragIndex, 1],
                        [action.hoverIndex, 0, state.constructorIngredients[action.dragIndex]],
                    ]
                })
            }
        }
        case INCREASE_INGREDIENT: {
            return {
                ...state, ingredients: [...state.ingredients].map(el => 
                    el._id === action.id ?
                    { ...el, count: el.count+1} :
                    el
                )  
            }
        }
        case DECREASE_INGREDIENT: {
            return {
                ...state, ingredients: [...state.ingredients].map(el => 
                    el._id === action.id ? 
                    { ...el, count: el.count-1 } : 
                    el
                )
            }
        }
        default: {
            return state
        }
    }
}