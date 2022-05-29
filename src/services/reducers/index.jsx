import { combineReducers } from 'redux';
import { dataIngredientsReducer } from "../reducers/data-ingredients";
import { sendNewOrderReducer } from './burger-cost';
import { userInformationReducer } from './user-information';

export const rootReducer = combineReducers({
    userInformation: userInformationReducer,
    listIngredients: dataIngredientsReducer,
    order: sendNewOrderReducer
})