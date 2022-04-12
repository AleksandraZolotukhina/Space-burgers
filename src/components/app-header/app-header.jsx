import styles from "./app-header.module.css";
import { BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
export function AppHeader() {
    return (
        <header className={`text_type_main-default ${styles.header}`}>
            <nav className={`${styles.main_nav} pt-4 pb-4`}>
                
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <a href="#" className={`${styles.link} ${styles.list_link}`}>
                            <BurgerIcon type="primary" />
                            <p className={`text ${styles.link_text} ${styles.active} pl-2`}>Конструктор</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" className={`${styles.link} ${styles.list_link}`}>
                            <ListIcon type="secondary" />
                            <p className={`text ${styles.link_text} pl-2`}>Лента заказов</p>
                        </a>
                    </li>
                </ul>
                
                <a href="#" className={`${styles.link} ${styles.logo}`}>
                    <Logo />
                </a>
               
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <a href="#" className={`${styles.link} ${styles.list_link}`}>
                            <ProfileIcon type="secondary" />
                            <p className={`text ${styles.link_text} pl-2`}>Личный кабинет</p>
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}