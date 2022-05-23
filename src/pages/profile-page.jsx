import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react';
import { handlerInputChange } from '../utils/functions';
import styles from "./profile-page.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export const ProfilePage = () => {
    const {data} = useSelector(store => store.userInformation);
    const {email, name} = data.user;

    const [emailValue, setEmailValue] = useState(email);
    const [passwordValue, setPasswordValue] = useState("");
    const [userNameValue, setUserNameValue] = useState(name);

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const activeStyle = {
        color: "#F2F2F3",
    }

    return (
        <section className={`${styles.profile} mt-30`}>
            <div className={styles.main_navigation}>
                <nav className={`${styles.navigation} text_type_main-medium`}>
                    <NavLink className={styles.link} to="" style={({ isActive }) => isActive ? activeStyle : undefined}>Профиль</NavLink>
                    <NavLink className={styles.link} to="orders">История заказов</NavLink>
                    <NavLink className={styles.link} to="orders/:id">Выход</NavLink>
                </nav>
                <p className={`text text_type_main-default text_color_inactive ${styles.message_tip}`}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <div className={`registration ${styles.registration}`}>
                <div className="registration__input mb-6">
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
                <div className="registration__input mb-6">
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
                <div className={styles.buttons}>
                    <Button type="secondary" size="large">
                        Отмена
                    </Button>
                    <Button type="primary" size="large">
                        Сохранить
                    </Button>
                </div>
            </div>
        </section>
    )
}