import { url } from "../../utils/constants";

export const GET_LIST_INGREDIENTS_REQUEST = "GET_LIST_INGREDIENTS_REQUEST";
export const GET_LIST_INGREDIENTS_ERROR = "GET_LIST_INGREDIENTS_ERROR";
export const GET_LIST_INGREDIENTS_SUCCESS = "GET_LIST_INGREDIENTS_SUCCESS";

export const getDataIngredients = () => {
    return function(dispatch) {
        dispatch({type: GET_LIST_INGREDIENTS_REQUEST});

        fetch(`${url}/ingredients`)
        .then(res=>{
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(data=>{
            dispatch({type: GET_LIST_INGREDIENTS_SUCCESS, data: data.data});
        })
        .catch(err=>{
            dispatch({type:GET_LIST_INGREDIENTS_ERROR, error: err});
        })
    } 
}
