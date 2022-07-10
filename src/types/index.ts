import { TUserInformationActions } from './../services/actions/user-information';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../services/store';
import { TSendOrderActions } from '../services/actions/burger-cost';
import { TDataIngredientsActions } from '../services/actions/data-ingredients';
import { rootReducer } from '../services/reducers';
import { WsActions } from '../services/actions/ws-action-types';

type TApplicationActions = TSendOrderActions | TDataIngredientsActions | TUserInformationActions | WsActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
    >;
export type AppDispatch = typeof store.dispatch;