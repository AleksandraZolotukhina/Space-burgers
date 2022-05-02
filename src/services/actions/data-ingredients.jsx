import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";

export const GET_LIST_INGREDIENTS_REQUEST = "GET_LIST_INGREDIENTS_REQUEST";
export const GET_LIST_INGREDIENTS_ERROR = "GET_LIST_INGREDIENTS_ERROR";
export const GET_LIST_INGREDIENTS_SUCCESS = "GET_LIST_INGREDIENTS_SUCCESS";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const DELETE_BUNS = "DELETE_BUNS";
export const UPDATE_ORDER_INGREDIENTS = "UPDATE_ORDER_INGREDIENTS";

export const INCREASE_INGREDIENT = "INCREASE_INGREDIENT";
export const DECREASE_INGREDIENT = "DECREASE_INGREDIENT";

export const getDataIngredients = () => {
    return function(dispatch) {
        dispatch({type: GET_LIST_INGREDIENTS_REQUEST});

        fetch(`${url}/ingredients`)
        .then(checkResponce)
        .then(data=>{
            dispatch({type: GET_LIST_INGREDIENTS_SUCCESS, data: data.data});
        })
        .catch(err=>{
            dispatch({type:GET_LIST_INGREDIENTS_ERROR, error: err});
        })
    } 
}
