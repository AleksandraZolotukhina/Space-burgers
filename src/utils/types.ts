export type TMenuItemProps = {
    readonly _id: string,
    readonly name: string,
    readonly type: string,
    readonly proteins: number,
    readonly fat: number,
    readonly carbohydrates: number,
    readonly calories: number,
    readonly price: number,
    readonly image: string,
    readonly image_mobile: string,
    readonly image_large: string,
    readonly __v: number
}

export type TInitialState = {
    readonly isLoading: boolean,
    readonly hasError: boolean,
    readonly errorMessage: string
}

export type TDataIngredientsInitailState = TInitialState & { 
    ingredients: ReadonlyArray<TMenuItemProps>, 
    constructorIngredients: ReadonlyArray<TMenuItemProps & { count: number }> 
}

export type TSendNewOrderInitialState = TInitialState & {
    orderNumber: undefined | number
}