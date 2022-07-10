import { TOrderStatus } from "../types/types";

export const modalRoot = <HTMLDivElement> document.querySelector("#react-modals");
export const url: string = "https://norma.nomoreparties.space/api";
export const orderStatus: TOrderStatus = {
    done: "Выполнен",
    created: "Создано",
    pending: "В ожидании"
}

