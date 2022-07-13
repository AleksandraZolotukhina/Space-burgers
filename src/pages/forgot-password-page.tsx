import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, FormEvent } from 'react';
import { Link, Navigate  } from "react-router-dom";
import { sendForgotPassword } from '../services/actions/user-information';
import { handlerInputChange } from '../utils/functions';
import style_page from "./page.module.css";
import "./page.css";
import { useDispatch, useSelector } from '../types/hooks';

export const ForgotPasswordPage = () => {
    const [emailValue, setEmailValue] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const dispatch = useDispatch();
    const {isLoadingForgotPassword, hasErrorForgotPassword, errorMessageForgotPassword, successForgotPassword, data} = useSelector(store=>store.userInformation);
    
    if (successForgotPassword) return <Navigate to="/reset-password" />
    if (data.success) return <Navigate to="/" />

    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(sendForgotPassword(emailValue));
    };

    return (
        <section className={style_page.registration}>
            <form className={style_page.registration__form} onSubmit={handlerSubmit}>
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <label className={style_page.registration__input}>
                    <Input
                        type="email"
                        placeholder="Укажите e-mail"
                        value={emailValue}
                        onChange={e => handlerInputChange(e, setEmailValue, setErrorMessage)}
                        error={errorMessage ? true : false}
                        errorText={errorMessage}
                    />
                </label>
                <Button type="primary" size="large" disabled={errorMessage || !emailValue ? true : false}>
                    {!isLoadingForgotPassword ? "Восстановить" : "Загрузка..."}
                </Button>
                {
                    !isLoadingForgotPassword &&
                    hasErrorForgotPassword &&
                    <p className = {style_page.registration__error_request}>{errorMessageForgotPassword}</p>
                }
            </form>
            <div className={`${style_page.registration__questions} mt-20`}>
                <div className={style_page.registration__question}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link className={style_page.link} to="/login">Войти</Link>
                </div>
            </div>
        </section>
    )
}