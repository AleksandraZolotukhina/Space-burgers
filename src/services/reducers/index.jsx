import { combineReducers } from 'redux';
import { dataIngredientsReducer } from "../reducers/data-ingredients";
import { sendNewOrderReducer } from './burger-cost';
import { ingredientDetailsReducer } from './burger-ingredients';
import { registerUserReducer } from './register';
import { userDataReducer } from './user-data';
import { userInformationReducer } from './user-information';

export const rootReducer = combineReducers({
    userInformation: userInformationReducer,
    listIngredients: dataIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: sendNewOrderReducer,
    userData: userDataReducer,
    register: registerUserReducer,
})