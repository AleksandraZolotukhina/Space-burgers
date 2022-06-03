import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./not-found-page.module.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <section className={styles.page_error}>
            <div className={styles.burger}>
                <BurgerIcon type="success" />
            </div>
            <h1 className="text text_type_main-large">Извините страница не найдена</h1>
            {/* <div className={styles.navigation}>
                <Link to="/" className={styles.link}>Сделать заказ</Link>
            </div> */}
        </section>
    )
}