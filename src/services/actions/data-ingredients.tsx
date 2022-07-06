import { AppDispatch, AppThunk } from "../../types";
import { url } from "../../utils/constants";
import { checkResponce } from "../../utils/functions";
import { TIngredient } from "../../types/types";
import { Ttype, TSuccess, TError } from "../../types/generics";
import { TArrayObjects } from "../../types/generics";

export const GET_LIST_INGREDIENTS_REQUEST: "GET_LIST_INGREDIENTS_REQUEST" = "GET_LIST_INGREDIENTS_REQUEST";
export const GET_LIST_INGREDIENTS_ERROR: "GET_LIST_INGREDIENTS_ERROR" = "GET_LIST_INGREDIENTS_ERROR";
export const GET_LIST_INGREDIENTS_SUCCESS: "GET_LIST_INGREDIENTS_SUCCESS" = "GET_LIST_INGREDIENTS_SUCCESS";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const UPDATE_ORDER_INGREDIENTS: "UPDATE_ORDER_INGREDIENTS" = "UPDATE_ORDER_INGREDIENTS";

export const INCREASE_INGREDIENT: "INCREASE_INGREDIENT" = "INCREASE_INGREDIENT";
export const DECREASE_INGREDIENT: "DECREASE_INGREDIENT" = "DECREASE_INGREDIENT";


type TGetListIngreeientsRequestAction = Ttype<typeof GET_LIST_INGREDIENTS_REQUEST>
type TGetListIngreeientsSuccessAction = TSuccess<typeof GET_LIST_INGREDIENTS_SUCCESS, TArrayObjects<TIngredient>>
type TGetListIngreeientsErrorAction = TError<typeof GET_LIST_INGREDIENTS_ERROR>

//think
type TAddIngredientAction = {
    readonly type: typeof ADD_INGREDIENT,
    readonly item: TArrayObjects<TIngredient>
}
type TDeleteIngredientAction = {
    readonly type: typeof DELETE_INGREDIENT,
    readonly index: number
}
type TUpdateOrderIngredientsAction = {
    readonly type: typeof UPDATE_ORDER_INGREDIENTS,
    readonly dragIndex: number,
    readonly hoverIndex: number
}
type TIncreaseIngredientAction = {
    readonly type: typeof INCREASE_INGREDIENT,
    readonly id: string
}
type TDecreaseIngredientAction = {
    readonly type: typeof DECREASE_INGREDIENT,
    readonly id: string
}
export type TDataIngredientsActionsThunk = TGetListIngreeientsRequestAction | TGetListIngreeientsSuccessAction | TGetListIngreeientsErrorAction;

export type TDataIngredientsActions = TDataIngredientsActionsThunk | TAddIngredientAction | TDeleteIngredientAction |
    TUpdateOrderIngredientsAction | TIncreaseIngredientAction | TDecreaseIngredientAction;

export const getDataIngredients: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({ type: GET_LIST_INGREDIENTS_REQUEST });

        fetch(`${url}/ingredients`)
            .then(checkResponce)
            .then(data => {
                dispatch({ type: GET_LIST_INGREDIENTS_SUCCESS, data: data.data });
            })
            .catch(err => {
                dispatch({ type: GET_LIST_INGREDIENTS_ERROR, error: err });
            })
    }
}
