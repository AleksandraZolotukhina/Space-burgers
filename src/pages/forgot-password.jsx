import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { sendForgotPassword } from '../services/actions/forgot-password';
import { handlerInputChange } from '../utils/functions';

export const ForgotPasswordPage = () => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading, hasError, errorText, dataForgotPassword} = useSelector(store=>store.userData);
    return (
        <section className="registration">
            {
                isLoading && navigate("/reset-password")
            }
            <div className="registration__form">
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <div className="registration__input">
                    <Input
                        type="email"
                        placeholder="Укажите e-mail"
                        value={value}
                        onChange={e => handlerInputChange(e, setValue, setErrorMessage)}
                        error={errorMessage ? true : false}
                        errorText={errorMessage}
                    />
                </div>
                <Button type="primary" size="large" disabled={errorMessage || value.length === 0 ? true : false} onClick={()=>dispatch(sendForgotPassword(value))}>
                    {dataForgotPassword.success ? "Восстановить" : "Загрузка..."}
                </Button>
                {
                    !isLoading &&
                    hasError &&
                    <p class = "registration__error-request">{errorText}</p>
                }
            </div>
            <div className="registration__questions  mt-20">
                <div className="registration__question">
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link className="link" to="/login">Войти</Link>
                </div>
            </div>
        </section>
    )
}