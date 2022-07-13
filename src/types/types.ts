import { TArrayObjects } from "./generics"
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR, 
    WS_GET_ORDERS,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED
} from "../services/actions/ws-action-types"

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
        backgroundLocation?: {};
        path?: string
    }
}

export type TIngredientsArray = Array<{ [fw in keyof Readonly<TIngredient>]: TIngredient[fw] }>

export type TOrderFeed = { //+
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
    readonly isStatus?: boolean
}

export type TOrderStatus = {
    readonly done: string,
    readonly created: string,
    readonly pending: string
}

export type TUserInfromation = {
    readonly success: boolean,
    readonly user: {
        readonly email: string,
        readonly name: string
    }
}

export type TAllUserInfromation = TUserInfromation & {
    readonly accessToken: string,
    readonly refreshToken: string
}

export type TWSOrdersActions = Readonly<{
    start: typeof WS_CONNECTION_START,
    success: typeof WS_CONNECTION_SUCCESS,
    error: typeof WS_CONNECTION_ERROR,
    getInfromation: typeof WS_GET_ORDERS,
    close: typeof WS_CONNECTION_CLOSE,
    closed: typeof WS_CONNECTION_CLOSED
}>