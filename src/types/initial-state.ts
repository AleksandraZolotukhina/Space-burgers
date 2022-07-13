import { TAllUserInfromation, TIngredient, TOrderFeedData, TUserInfromation } from "./types"

export type TInitialState = {
    isLoading: boolean,
    hasError: boolean,
    errorMessage: string
}

export type TDataIngredientsInitailState = TInitialState & {
    ingredients: ReadonlyArray<TIngredient>,
    constructorIngredients: ReadonlyArray<TIngredient>
}

export type TSendNewOrderInitialState = TInitialState & {
    orderNumber: undefined | number
}

export type TUserInitialState = {
    isLoaded: boolean,
    hasErrorGetUser: boolean,
    errorMessageGetUser: string,

    isLoadingUpdateUser: boolean,
    hasErrorUpdateUser: boolean,
    errorMessageUpdateUser: string,

    hasErrorUpdateToken: boolean,

    isLoadingRegisterUser: boolean,
    hasErrorRegisterUser: boolean,
    errorMessageRegisterUser: string,

    isLoadingLogOut: boolean,
    hasErrorLogOut: boolean,
    errorMessageLogOut: string,
    logOutSuccess: boolean,

    isLoadingLogIn: boolean,
    hasErrorLogIn: boolean,
    errorMessageLogIn: string,

    isLoadingForgotPassword: boolean,
    hasErrorForgotPassword: boolean,
    errorMessageForgotPassword: string,
    successForgotPassword: boolean,

    isLoadingResetPassword: boolean,
    hasErrorResetPassword: boolean,
    errorMessageResetPassword: string,
    successResetPassword: boolean,

    data: TUserInfromation | TAllUserInfromation
}

export type WSInitailState = {
    readonly wsConnected: boolean,
    readonly orders: TOrderFeedData
}