import styles from "./app-header.module.css";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink } from "react-router-dom";

export function AppHeader() {
    const activeStyle = {
        color: "#F2F2F3",
    }

    return (
        <header className={`text_type_main-default ${styles.header}`}>
            <nav className={`${styles.main_nav} pt-4 pb-4`}>

                <ul className={styles.list}>
                    <NavLink to="/" className={`${styles.list_item} ${styles.link} mr-10`} style={({isActive})=> isActive ? activeStyle : undefined} >
                        <BurgerIcon type="secondary" />
                        <p className={`text ${styles.link_text} ${styles.active} pl-2`}>Конструктор</p>
                    </NavLink>

                    <NavLink to="feed" className={`${styles.list_item} ${styles.link}`} style={({isActive})=> isActive ? activeStyle : undefined}>
                        <ListIcon type="secondary" />
                        <p className={`text ${styles.link_text} pl-2`}>Лента заказов</p>
                    </NavLink>
                </ul>

                <Link to="/" className={`${styles.link} ${styles.logo}`}>
                    <Logo />
                </Link>

                <NavLink to="profile" className={`${styles.list_item} ${styles.link}`} style={({isActive})=> isActive ? activeStyle : undefined}>
                    <ProfileIcon type="secondary" />
                    <p className={`text ${styles.link_text} pl-2`}>Личный кабинет</p>
                </NavLink>

            </nav>

        </header>
    )
}