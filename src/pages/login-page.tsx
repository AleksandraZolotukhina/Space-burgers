import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginRequest } from '../services/actions/user-information';
import { useEffect, useState } from 'react';
import { handlerInputChange } from '../utils/functions';
import style_page from "./page.module.css";
import "./page.css";
import { useDispatch, useSelector } from '../types/hooks';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const { state } = useLocation();
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const {isLoadingLogIn, hasErrorLogIn, errorMessageLogIn, data} = useSelector(store => store.userInformation);

    const handlerSubmit = (e:Event) => {
        e.preventDefault();
        dispatch(loginRequest(emailValue, passwordValue));
    };
    
    useEffect(()=>{
        if (data.success) navigate(state?.path || "/")
    }, [data.success])

    return (
        <section className={style_page.registration}>
            <form className={style_page.registration__form} onSubmit={(e)=>handlerSubmit(e)}>
                <h1 className="text text_type_main-medium">Вход</h1>
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
                <Button type="primary" size="large" disabled={(errorEmail || errorPassword) || 
                    (!emailValue || !passwordValue) ? true : false} >
                    {isLoadingLogIn ? "Загрузка..." : "Войти"}
                </Button>
                {hasErrorLogIn&& <p className={style_page.registration__error_request}>{errorMessageLogIn}</p>}
            </form>
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