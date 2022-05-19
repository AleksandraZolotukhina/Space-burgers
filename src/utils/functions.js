import { url } from "./constants";

export const checkResponce = (res) => {
    if(res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const handlerInputChange = (e, setValue, setErrorMessage) => {
    const targetElement = e.target;
    setValue(targetElement.value);
    setErrorMessage(targetElement.validationMessage);
}

export const getAutorizationRequest =  async() => {
    return  await fetch(`${url}/auth/login`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie('token')}`
        }
    })
}

export const setCookie = (name, value) => {
    value = encodeURIComponent(value);
    document.cookie = `${name}=${value}`;
}

export const getCookie = (name) => {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}