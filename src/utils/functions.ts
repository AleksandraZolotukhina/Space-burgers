import { TIngredientsArray } from './../types/types';
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const checkResponce = (res:  Response) => {
    if (res.ok) {
        return res.json();
    }
    if (res.status === 401) {
        return Promise.reject(`Ошибка: проверьте корректность введенных данных`);
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const handlerInputChange = (e: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>, setErrorMessage: Dispatch<SetStateAction<string>>) => {
    const targetElement = e.target;
    setValue(targetElement.value);
    setErrorMessage(targetElement.validationMessage);
}

export const setCookie = (name: string, value: string | null, props: { [key: string]: any } & { expires?: Date | number | string } = {}) => {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && (exp as Date).toUTCString) {
        props.expires = (exp as Date).toUTCString();
    }
    if (value !== null) {
        value = encodeURIComponent(value);
    }

    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie + ";path=/";
}

export const getCookie = (name: string): string | undefined => {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const updateCookies = (data: { accessToken: string, refreshToken: string }) => {
    const token = data.accessToken.split("Bearer ")[1];
    setCookie("token", token);
    setCookie("refreshToken", data.refreshToken);
}

export const getTextTime = (date: string) => {
    const time = new Date(date)
    const hour = time.getHours();
    const minutes = time.getMinutes();

    let days = ((new Date() as any) - (time as any)) / (1000 * 60 * 24 * 60);
    if (Math.abs(Math.floor(days) - days) > 0.56) {
        days += 1;
    }
    return `${Math.floor(days) > 0 ? Math.floor(days) + " день назад" : "Сегодня"}, ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes} i-GMT+3`
}

export const getCost = (arrayIngredients: TIngredientsArray) => {
    const cost = arrayIngredients.reduce((current, next) => {
        if (next.type === "bun") {
            return current + next.price * 2
        }
        return current + next.price
    }, 0)
    return cost
}