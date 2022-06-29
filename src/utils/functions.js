export const checkResponce = (res) => {
    if (res.ok) {
        return res.json();
    }
    if (res.status === 401) {
        return Promise.reject(`Ошибка: проверьте корректность введенных данных`);
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const handlerInputChange = (e, setValue, setErrorMessage) => {
    const targetElement = e.target;
    setValue(targetElement.value);
    setErrorMessage(targetElement.validationMessage);
}

export const setCookie = (name, value, props) => {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
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

export const getCookie = (name) => {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const updateCookies = (data) => {
    const token = data.accessToken.split("Bearer ")[1];
    setCookie("token", token);
    setCookie("refreshToken", data.refreshToken);
}

export const getTextTime = (date) => {
    const time = new Date(date)
    const hour = time.getHours();
    const minutes = time.getMinutes();

    let days = (new Date() - time) / (1000 * 60 * 24 * 60);
    if (Math.abs(Math.floor(days) - days) > 0.56) {
        days += 1;
    }
    return `${Math.floor(days) > 0 ? Math.floor(days) + " день назад" : "Сегодня"}, ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes} i-GMT+3`
}

export const getCost = (arrayIngredients) => {
    const cost = arrayIngredients.reduce((current, next) => {
        if (next.type === "bun") {
            return current + next.price * 2
        }
        return current + next.price
    }, 0)
    return cost
}