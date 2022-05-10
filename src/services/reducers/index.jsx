import { combineReducers } from 'redux';
import { dataIngredientsReducer } from "../reducers/data-ingredients";
import { sendNewOrderReducer } from './burger-cost';
import { ingredientDetailsReducer } from './burger-ingredients';

export const rootReducer = combineReducers({
    listIngredients: dataIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: sendNewOrderReducer,
})