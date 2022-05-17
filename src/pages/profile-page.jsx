import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react';
import { handlerInputChange } from '../utils/functions';
import styles from "./profile-page.module.css";
import { NavLink } from "react-router-dom";
export const ProfilePage = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [userNameValue, setUserNameValue] = useState("");
    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    return (
        <section className={styles.profile}>
        <nav className={styles.navigation}>
            <NavLink to="">Профиль</NavLink>
            <NavLink to="orders">История заказов</NavLink>
            <NavLink to="orders/:id">Выход</NavLink>
        </nav>
            <div className="registration">
            <div className="registration__input">
                    <Input
                        type="text"
                        placeholder="Имя"
                        icon="EditIcon"
                        value={userNameValue}
                        onChange={e => handlerInputChange(e, setUserNameValue, setErrorUserName)}
                        error={errorUserName ? true : false}
                        errorText={errorUserName}
                    />
                </div>
                <div className="registration__input">
                    <Input
                        type="email"
                        placeholder="Логин"
                        icon="EditIcon"
                        value={emailValue}
                        onChange={e => handlerInputChange(e, setEmailValue, setErrorEmail)}
                        error={errorEmail ? true : false}
                        errorText={errorEmail}
                    />
                </div>
                <div className="registration__input">
                    <Input
                        type="password"
                        placeholder="Пароль"
                        icon="EditIcon"
                        value={passwordValue}
                        onChange={e => handlerInputChange(e, setPasswordValue, setErrorPassword)}
                        error={errorPassword ? true : false}
                        errorText={errorPassword}
                    />
                </div>
            </div>
        </section>
    )
}