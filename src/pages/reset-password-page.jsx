import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate } from "react-router-dom";
import { handlerInputChange } from '../utils/functions';
import { useState } from 'react';
import { resetPassword } from '../services/actions/user-information';
import { useDispatch, useSelector } from 'react-redux';
import {NotFoundPage} from "./no-found-page/not-found-page";
import style_page from "./page.module.css";
import "./page.css";

export const ResetPasswordPage = () => {
    const [codeValue, setCodeValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const [errorCode, setErrorCode] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const dispatch = useDispatch();
    const {isLoadingResetPassword, hasErrorResetPassword, errorMessageResetPassword, successResetPassword, successForgotPassword} = useSelector(store=>store.userInformation);
    if (!successForgotPassword && !successResetPassword && !hasErrorResetPassword) return <NotFoundPage />
    if (successResetPassword) return <Navigate to="/login" />
    
    return (
        <section className={style_page.registration}>
            <div className={style_page.registration__form}>
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <div className={style_page.registration__input}>
                    <Input
                        type="password"
                        placeholder="Введите новый пароль"
                        value={passwordValue}
                        error={errorPassword ? true : false}
                        errorText={errorPassword}
                        onChange={(e) => handlerInputChange(e, setPasswordValue, setErrorPassword)}
                    />
                </div>
                <div className={style_page.registration__input}>
                    <Input
                        type="text"
                        placeholder="Введите код из письма"
                        value={codeValue}
                        error={errorCode? true : false}
                        errorText={errorCode}
                        onChange={(e) => handlerInputChange(e, setCodeValue, setErrorCode)}
                    />
                </div>
                <Button type="primary" size="primary" disabled={(errorCode || errorPassword) || 
                    (!codeValue || !passwordValue) ? true : false} onClick={() => dispatch(resetPassword(passwordValue, codeValue))}>
                    {!isLoadingResetPassword ? "Сохранить" : "Сохранение..."}
                </Button>
                {
                    !isLoadingResetPassword &&
                    hasErrorResetPassword &&
                    <p className = {style_page.registration__error_request}>{errorMessageResetPassword}</p>
                }
            </div>
            <div className={`${style_page.registration__questions} mt-20`}>
                <div className={style_page.registration__question}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link className={style_page.link} to="/login">Войти</Link>
                </div>
            </div>
        </section>
    )
}