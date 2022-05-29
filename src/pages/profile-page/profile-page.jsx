import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react';
import { handlerInputChange } from '../../utils/functions';
import style_page from "../page.module.css";
import styles from "./profile-page.module.css";
import { Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInformation, logoutRequest } from '../../services/actions/user-information';
import "../page.css";

export const ProfilePage = () => {

    const dispatch = useDispatch();
    const {isLoadingUpdateUser, hasErrorUpdateUser, errorMessageUpdateUser, 
        isLoadingLogOut, hasErrorLogOut, errorMessageLogOut, logOutSuccess, data} = useSelector(store => store.userInformation);
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
    const handleClickCancel = () => {
        setEmailValue(email);
        setUserNameValue(name);
        setPasswordValue("");
    }

    return (
        <section className={`${styles.profile} mt-30`}>
            <div className={styles.main_navigation}>
                <nav className={`${styles.navigation} text_type_main-medium`}>
                    <NavLink className={styles.link} to="" style={({ isActive }) => isActive ? activeStyle : undefined}>Профиль</NavLink>
                    <NavLink className={styles.link} to="orders">История заказов</NavLink>
                    <a className={styles.link} onClick={()=>dispatch(logoutRequest())}>{isLoadingLogOut ? "Выходим...": "Выход"}</a>
                    {logOutSuccess && <Navigate to="/" />}
                </nav>
                <p className={`text text_type_main-default text_color_inactive ${styles.message_tip}`}>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            
            <div className={`registration ${styles.registration}`}>
                <div className={`${style_page.registration__input} mb-6`}>
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
                <div className={`${style_page.registration__input} mb-6`}>
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
                <div className={style_page.registration__input}>
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
                    <Button type="secondary" size="large"
                    onClick={handleClickCancel}>
                        Отмена
                    </Button>

                    <Button type="primary" size="large" 
                    disabled={(errorUserName || errorEmail || errorPassword) || 
                    (!userNameValue || !emailValue || !passwordValue) ? true : false} 
                    onClick={()=>dispatch(updateUserInformation(emailValue, userNameValue, passwordValue))}>
                        {!isLoadingUpdateUser ? "Сохранить" : "Загрузка..."}
                    </Button>
                </div>
                {hasErrorUpdateUser && <p className={style_page.registration__error_request}>{errorMessageUpdateUser}</p>}
                {hasErrorLogOut && <p className={style_page.registration__error_request}>{errorMessageLogOut}</p>}
            </div>
        </section>
    )
}