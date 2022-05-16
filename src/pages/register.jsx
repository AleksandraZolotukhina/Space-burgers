import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./register.module.css";
import { Link } from "react-router-dom";
export const RegisterPage = () => {
    return (
        <section className="registration">
            <div className="registration__form">
                <h1 className="text text_type_main-medium">Регистрация</h1>
                <Input
                    type="text"
                    placeholder="Имя"
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                />
                <Input
                    type="password"
                    placeholder="Пароль"
                    icon="ShowIcon"
                />
                <Button type="primary" size="small">
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