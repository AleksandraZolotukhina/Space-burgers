import styles from "./orders-details-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const OrdersDetailsItem = ({ ingredient }) => {
    const { image, name, price } = ingredient;
    return (
        <li className={styles.item}>
            <div className={styles.item__image_title}>
                <div className={styles.item_picture_wrapper}>
                    <img className={styles.item_picture} src={image} alt={name} />
                </div>
                <h3>{name}</h3>
            </div>

            <div className={styles.cost}>
                <p className="text text_type_digits-default">{`1 x ${price}`}</p>
                <CurrencyIcon type="primary" />
            </div>

        </li>
    )
}