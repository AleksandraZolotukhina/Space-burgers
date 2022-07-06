import { TArrayObjects } from "./generics"

export type TIngredient = {
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
    __v: number,
    count?: number
}
export type TLocationState = {
    state: {
        background?: string;
    }
}

export type TIngredientsArray = Array<{ [fw in keyof Readonly<TIngredient>]: TIngredient[fw] }>

export type TOrderFeed = {
    readonly ingredients: ReadonlyArray<string>,
    readonly _id: string,
    readonly status: string,
    readonly number: number,
    readonly createdAt: string,
    readonly updatedAt: string,
    readonly name: string
}
export type TOrderFeedData = {
    readonly success: boolean,
    readonly orders: TArrayObjects<TOrderFeed>,
    readonly total: number,
    readonly totalToday: number
}

export type TOrderFeedItemProps = Omit<TOrderFeed, "_id" & "createdAt"> & { 
    readonly listIngredients: TArrayObjects<TIngredient>, 
    readonly isStatus: boolean 
}