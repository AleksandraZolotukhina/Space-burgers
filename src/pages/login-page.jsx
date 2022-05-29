import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginRequest } from '../services/actions/user-information';
import { useState } from 'react';
import { handlerInputChange } from '../utils/functions';
import style_page from "./page.module.css";
import "./page.css";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const {isLoadingLogIn, hasErrorLogIn, errorMessageLogIn, data} = useSelector(store => store.userInformation);
    return (
        <section className={style_page.registration}>
            {data.success && navigate(-1)}
            <div className={style_page.registration__form}>
                <h1 className="text text_type_main-medium">Вход</h1>
                <div className={style_page.registration__input}>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={emailValue}
                        error={errorEmail ? true : false}
                        errorText={errorEmail}
                        onChange={(e) => handlerInputChange(e, setEmailValue, setErrorEmail)}
                    />
                </div>
                <div className={style_page.registration__input}>
                    <Input
                        type="password"
                        placeholder="Пароль"
                        icon="ShowIcon"
                        value={passwordValue}
                        error={errorPassword ? true : false}
                        errorText={errorPassword}
                        onChange={(e) => handlerInputChange(e, setPasswordValue, setErrorPassword)}
                    />
                </div>
                <Button type="primary" size="large" disabled={(errorEmail || errorPassword) || 
                    (!emailValue || !passwordValue) ? true : false} 
                    onClick={()=>dispatch(loginRequest(emailValue, passwordValue))}>
                    {isLoadingLogIn ? "Загрузка..." : "Войти"}
                </Button>
                {hasErrorLogIn&& <p className={style_page.registration__error_request}>{errorMessageLogIn}</p>}
            </div>
            <div className={`${style_page.registration__questions} mt-20`}>
                <div className={style_page.registration__question}>
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <Link className={style_page.link} to="/register">Зарегистрироваться</Link>
                </div>
                <div className={style_page.registration__question}>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <Link className={style_page.link} to="/forgot-password">Восстановить пароль</Link>
                </div>
            </div>

        </section>
    )
}