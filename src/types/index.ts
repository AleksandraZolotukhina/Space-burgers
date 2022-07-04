import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../services/store';
import { TSendOrderActions } from '../services/actions/burger-cost';
import { TGetListIngredientsActions } from '../services/actions/data-ingredients';
import { TSendForgotPasswordActions } from '../services/actions/user-information';

type TApplicationActions = TSendOrderActions | TGetListIngredientsActions | TSendForgotPasswordActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
export type AppDispatch = typeof store.dispatch;