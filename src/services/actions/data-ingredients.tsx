import { AppDispatch, AppThunk } from "../../types";
import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";
import { Readonly<TMenuItemProps> } from "../../types/types";

export const GET_LIST_INGREDIENTS_REQUEST: "GET_LIST_INGREDIENTS_REQUEST" = "GET_LIST_INGREDIENTS_REQUEST";
export const GET_LIST_INGREDIENTS_ERROR: "GET_LIST_INGREDIENTS_ERROR" = "GET_LIST_INGREDIENTS_ERROR";
export const GET_LIST_INGREDIENTS_SUCCESS: "GET_LIST_INGREDIENTS_SUCCESS" = "GET_LIST_INGREDIENTS_SUCCESS";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const DELETE_INGREDIENT:"DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const UPDATE_ORDER_INGREDIENTS:"UPDATE_ORDER_INGREDIENTS" = "UPDATE_ORDER_INGREDIENTS";

export const INCREASE_INGREDIENT:"INCREASE_INGREDIENT" = "INCREASE_INGREDIENT";
export const DECREASE_INGREDIENT:"DECREASE_INGREDIENT" = "DECREASE_INGREDIENT";

type TGetListIngredientsRequestAction = {
    readonly type: string
}
type TGetListIngredientsSuccessAction = {
    readonly type: string,
    readonly data: ReadonlyArray<{[fw in keyof Readonly<TMenuItemProps>]: Readonly<TMenuItemProps>[fw]}>
}
type TGetListIngredientsErrorAction = {
    readonly type: string,
    readonly error: string
}
export type TGetListIngredientsActions = TGetListIngredientsRequestAction | TGetListIngredientsSuccessAction | TGetListIngredientsErrorAction

export const getDataIngredients:AppThunk = () => {
    return function(dispatch:AppDispatch) {
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
