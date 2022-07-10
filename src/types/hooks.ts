import {
    useSelector as selectorHook,
    useDispatch as dispatchHook,
    TypedUseSelectorHook
} from "react-redux";
import { AppDispatch, AppThunk, RootState } from ".";

export const useDispatch: () => AppDispatch | AppThunk = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;   