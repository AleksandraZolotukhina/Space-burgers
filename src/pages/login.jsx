import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <section className="registration">
            <div className="registration__form">
                <h1 className="text text_type_main-medium">Вход</h1>
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
                    Войти
                </Button>
            </div>
            <div className="registration__questions  mt-20">
                <div className="registration__question">
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <Link className="link" to="/register">Зарегистрироваться</Link>
                </div>
                <div className="registration__question">
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <Link className="link" to="/forgot-password">Восстановить пароль</Link>
                </div>
            </div>

        </section>
    )
}