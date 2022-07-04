export type TMenuItemProps = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

export type TInitialState = {
    readonly isLoading: boolean,
    readonly hasError: boolean,
    readonly errorMessage: string
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

    data: object //correct
}
export type TDataIngredientsInitailState = TInitialState & { 
    ingredients: ReadonlyArray<Readonly<TMenuItemProps>>, 
    constructorIngredients: ReadonlyArray<Readonly<TMenuItemProps>> 
}

export type TSendNewOrderInitialState = TInitialState & {
    readonly orderNumber: undefined | number
}
 export type TIngredientsStore = Readonly<TMenuItemProps> & {
    readonly count: number
}
export type TIngredientsReadOnlyArray = ReadonlyArray<{[fw in keyof TIngredientsStore]: TIngredientsStore[fw]}>
export type TIngredientsArray = Array<{[fw in keyof TIngredientsStore]: TIngredientsStore[fw]}>

export type TOrderFeed = {
    ingredients: ReadonlyArray<string>,
    readonly _id: string,
    readonly status: string,
    readonly number: number,
    readonly createdAt: string,
    readonly updatedAt: string,
    readonly name: string
}
export type TOrderFeedData = {
    readonly success: boolean,
    readonly orders: ReadonlyArray<{[fw in keyof TOrderFeed]: TOrderFeed[fw]}>,
    readonly total: number,
    readonly totalToday: number
}