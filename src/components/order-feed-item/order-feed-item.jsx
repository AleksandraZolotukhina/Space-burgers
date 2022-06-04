import styles from "./order-feed-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import bun from "../../images/bun-01.png";
export const OrderFeedItem = () => {
    return (
        <li className={styles.item}>
            <div className={styles.item_number}>
                <p className="text text_type_digits-default">#034535</p>
                <p className={`text text_type_main-default ${styles.order_date}`}>Сегодня, 16:20 i-GMT+3</p>
            </div>
            <h2 className="text text_type_main-medium">Death Star Starship Main бургер</h2>
            <div className={styles.item_image_cost}>
                <ul className={styles.item_ingredients}>
                    <li className={styles.item_ingredient}>
                        <img src={bun} alt="" className={styles.image} />
                    </li>
                    <li className={styles.item_ingredient}>
                        <img src={bun} alt="" className={styles.image} />
                    </li>
                    <li className={styles.item_ingredient}></li>
                    <li className={styles.item_ingredient}></li>
                    <li className={styles.item_ingredient}></li>
                    <li className={`${styles.item_ingredient} ${styles.item_ingredient_more}`}>
                        <img src={bun} alt="" className={styles.image} />
                        <p className={`text text_type_main-default ${styles.count_ingredient}`}>+3</p>
                    </li>
                </ul>
                <div className={styles.item_cost}>
                    <p className="text text_type_digits-default">480</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </li>
    )
}