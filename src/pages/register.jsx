import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./register.module.css";
import { Link } from "react-router-dom";
export const RegisterPage = () => {
    return (
        <section className="registration">
            <div className="registration__form">
                <h1 className="text text_type_main-medium">Регистрация</h1>
                <div className="registration__input">
                    <Input
                        type="text"
                        placeholder="Имя"
                    />
                </div>
                <div className="registration__input">
                    <Input
                        type="email"
                        placeholder="E-mail"
                    />
                </div>
                <div className="registration__input">
                    <Input
                        type="password"
                        placeholder="Пароль"
                        icon="ShowIcon"
                    />
                </div>
                <Button type="primary" size="large">
                    Зарегистрироваться
                </Button>
            </div>
            <div className="registration__questions  mt-20">
                <div className="registration__question">
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <Link className="link" to="/login">Войти</Link>
                </div>
            </div>
        </section>
    )
}