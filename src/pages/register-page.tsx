import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate} from "react-router-dom";
import { handlerInputChange } from '../utils/functions';
import { sendRegister } from '../services/actions/user-information';
import { FormEvent, useState} from 'react';
import style_page from "./page.module.css";
import "./page.css";
import { useDispatch, useSelector } from '../types/hooks';

export const RegisterPage = () => {
    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [userNameValue, setUserNameValue] = useState<string>("");

    const [errorUserName, setErrorUserName] = useState<string>("");
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const dispatch = useDispatch();
    const {isLoadingRegisterUser, hasErrorRegisterUser, errorMessageRegisterUser, data} = useSelector(store => store.userInformation);

    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(sendRegister(emailValue, userNameValue, passwordValue));
    };
    
    return (
        <section className={style_page.registration}>
             {data.success && <Navigate to="/" />}
            <form className={style_page.registration__form} onSubmit={handlerSubmit}>
                <h1 className="text text_type_main-medium">Регистрация</h1>
                <label className={style_page.registration__input}>
                    <Input
                        type="text"
                        placeholder="Имя"
                        value={userNameValue}
                        error={errorUserName ? true : false}
                        errorText={errorUserName}
                        onChange={(e) => handlerInputChange(e, setUserNameValue, setErrorUserName)}
                    />
                </label>
                <label className={style_page.registration__input}>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={emailValue}
                        error={errorEmail ? true : false}
                        errorText={errorEmail}
                        onChange={(e) => handlerInputChange(e, setEmailValue, setErrorEmail)}
                    />
                </label>
                <label className={style_page.registration__input}>
                    <Input
                        type="password"
                        placeholder="Пароль"
                        icon="ShowIcon"
                        value={passwordValue}
                        error={errorPassword ? true : false}
                        errorText={errorPassword}
                        onChange={(e) => handlerInputChange(e, setPasswordValue, setErrorPassword)}
                    />
                </label>
                <Button type="primary" size="large" disabled={(errorUserName || errorEmail || errorPassword) || 
                    (!userNameValue || !emailValue || !passwordValue) ? true : false}>
                    {!isLoadingRegisterUser ? "Зарегистрироваться" : "Загрузка..."}
                </Button>
                {hasErrorRegisterUser && <p className={style_page.registration__error_request}>{errorMessageRegisterUser}</p>}
            </form>
            <div className={`${style_page.registration__questions} mt-20`}>
                <div className={style_page.registration__question}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <Link className={style_page.link} to="/login">Войти</Link>
                </div>
            </div>
        </section>
    )
}