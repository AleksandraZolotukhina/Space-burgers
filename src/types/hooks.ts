import {
    useDispatch as dispatchHook,
    useSelector as selectorHook,
    TypedUseSelectorHook
} from "react-redux";
import { AppDispatch, AppThunk, RootState } from ".";

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;