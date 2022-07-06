import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { FormEvent, useState } from 'react';
import { handlerInputChange } from '../../utils/functions';
import style_page from "../../pages/page.module.css";
import styles from "./profile-form.module.css";
import { updateUserInformation } from '../../services/actions/user-information';
import "../../pages/page.css";
import { useSelector, useDispatch } from '../../types/hooks';

export const ProfileForm = () => {
    const dispatch = useDispatch();
    const {isLoadingUpdateUser, hasErrorUpdateUser, errorMessageUpdateUser, data} = useSelector(store => store.userInformation);
    const {email, name} = data.user;
    const [emailValue, setEmailValue] = useState<string>(email);
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [userNameValue, setUserNameValue] = useState<string>(name);

    const [errorUserName, setErrorUserName] = useState<string>("");
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");

    const handleClickCancel = () => {
        setEmailValue(email);
        setUserNameValue(name);
        setPasswordValue("");
    }

    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateUserInformation(emailValue, userNameValue, passwordValue))
    }

    return (
        <form className={`registration ${styles.registration}`} onSubmit={handlerSubmit}>
            <label className={`${style_page.registration__input} mb-6`}>
                <Input
                    type="text"
                    placeholder="Имя"
                    icon="EditIcon"
                    value={userNameValue}
                    onChange={e => handlerInputChange(e, setUserNameValue, setErrorUserName)}
                    error={errorUserName ? true : false}
                    errorText={errorUserName}
                />
            </label>
            <label className={`${style_page.registration__input} mb-6`}>
                <Input
                    type="email"
                    placeholder="Логин"
                    icon="EditIcon"
                    value={emailValue}
                    onChange={e => handlerInputChange(e, setEmailValue, setErrorEmail)}
                    error={errorEmail ? true : false}
                    errorText={errorEmail}
                />
            </label>
            <label className={style_page.registration__input}>
                <Input
                    type="password"
                    placeholder="Пароль"
                    icon="EditIcon"
                    value={passwordValue}
                    onChange={e => handlerInputChange(e, setPasswordValue, setErrorPassword)}
                    error={errorPassword ? true : false}
                    errorText={errorPassword}
                />
            </label>
            <div className={styles.buttons}>
                <input className={`text text_type_main-default ${styles.button}`} type="button"
                    onClick={handleClickCancel} value="Отмена" />


                <Button type="primary" size="large"
                    disabled={(errorUserName || errorEmail || errorPassword) ||
                        (!userNameValue || !emailValue || !passwordValue) ? true : false}>
                    {!isLoadingUpdateUser ? "Сохранить" : "Загрузка..."}
                </Button>
            </div>
            {hasErrorUpdateUser && <p className={style_page.registration__error_request}>{errorMessageUpdateUser}</p>}
            
        </form>
    )
}