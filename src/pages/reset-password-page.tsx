import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate } from "react-router-dom";
import { handlerInputChange } from '../utils/functions';
import { useState, FormEvent } from 'react';
import { resetPassword } from '../services/actions/user-information';
import {NotFoundPage} from "./no-found-page/not-found-page";
import style_page from "./page.module.css";
import "./page.css";
import { useDispatch, useSelector } from '../types/hooks';

export const ResetPasswordPage = () => {
    const [codeValue, setCodeValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");

    const [errorCode, setErrorCode] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");

    const dispatch = useDispatch();
    const {isLoadingResetPassword, hasErrorResetPassword, errorMessageResetPassword, successResetPassword, successForgotPassword} = useSelector(store=>store.userInformation);
    if (!successForgotPassword && !successResetPassword && !hasErrorResetPassword) return <NotFoundPage />
    if (successResetPassword) return <Navigate to="/login" />
    
    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(resetPassword(passwordValue, codeValue));
    };

    return (
        <section className={style_page.registration}>
            <form className={style_page.registration__form} onSubmit={handlerSubmit}>
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <label className={style_page.registration__input}>
                    <Input
                        type="password"
                        placeholder="Введите новый пароль"
                        value={passwordValue}
                        error={errorPassword ? true : false}
                        errorText={errorPassword}
                        onChange={(e) => handlerInputChange(e, setPasswordValue, setErrorPassword)}
                    />
                </label>
                <label className={style_page.registration__input}>
                    <Input
                        type="text"
                        placeholder="Введите код из письма"
                        value={codeValue}
                        error={errorCode? true : false}
                        errorText={errorCode}
                        onChange={(e) => handlerInputChange(e, setCodeValue, setErrorCode)}
                    />
                </label>
                <Button type="primary" size="medium" disabled={(errorCode || errorPassword) || 
                    (!codeValue || !passwordValue) ? true : false}>
                    {!isLoadingResetPassword ? "Сохранить" : "Сохранение..."}
                </Button>
                {
                    !isLoadingResetPassword &&
                    hasErrorResetPassword &&
                    <p className = {style_page.registration__error_request}>{errorMessageResetPassword}</p>
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