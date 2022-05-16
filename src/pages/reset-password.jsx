import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";

export const ResetPasswordPage = () => {
    return (
        <section className="registration">
            <div className="registration__form">
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <Input
                    type="password"
                    placeholder="Введите новый пароль"
                />
                <Input
                    type="text"
                    placeholder="Введите код из письма"
                />
                <Button type="primary" size="small">
                    Сохранить
                </Button>
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