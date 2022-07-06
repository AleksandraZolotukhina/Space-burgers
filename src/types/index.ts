import { TUserInformationActionsThunk } from './../services/actions/user-information';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../services/store';
import { TSendOrderActions } from '../services/actions/burger-cost';
import { TDataIngredientsActionsThunk } from '../services/actions/data-ingredients';
import { rootReducer } from '../services/reducers';

type TApplicationActions = TSendOrderActions | TDataIngredientsActionsThunk | TUserInformationActionsThunk;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;
export type AppDispatch = typeof store.dispatch;