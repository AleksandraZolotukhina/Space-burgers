import styles from "./order-feed-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderFeedItem = ({ ingredients, status, name, number, updatedAt, listIngredients, isStatus }) => {
    const arrayIngredients = [];
    ingredients.forEach(ingredient => {
        arrayIngredients.push(listIngredients.find(el => el._id === ingredient))
    })

    const cost = arrayIngredients.reduce((current, next) => {
        if (next.type === "bun") {
            return current + next.price * 2
        }
        return current + next.price
    }, 0)

    const time = new Date(updatedAt)
    const hour = time.getHours();
    const minutes = time.getMinutes();

    let days = (new Date() - time) / (1000 * 60 * 24 * 60);
    if (Math.abs(Math.floor(days) - days) > 0.56) {
        days += 1;
    }

    return (
        <li className={styles.item}>
            <div className={styles.item_number}>
                <p className="text text_type_digits-default">#{number}</p>
                <p className={`text text_type_main-default ${styles.order_date}`}>{`${Math.floor(days) > 0 ? Math.floor(days) + " день назад" : "Сегодня"}, ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes} i-GMT+3`}</p>
            </div>
            <h2 className="text text_type_main-medium">{name}</h2>
            {isStatus && <p className="text text_type_main-default">{status === "done" && "Выполнен" || status === "pending" && "Готовится"}</p>}
            <div className={styles.item_image_cost}>
                <ul className={styles.item_ingredients}>
                    {
                        arrayIngredients.slice(0, 6).map((ingredient, index) => {
                            if (index < 5) {
                                return (
                                    <li className={styles.item_ingredient} key={index}>
                                        <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
                                    </li>
                                )
                            }
                            return (
                                <li className={`${styles.item_ingredient} ${styles.item_ingredient_more}`} key={index}>
                                    <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
                                    <p className={`text text_type_main-default ${styles.count_ingredient}`}>+{arrayIngredients.length - 5}</p>
                                </li>
                            )

                        })
                    }

                </ul>
                <div className={styles.item_cost}>
                    <p className="text text_type_digits-default">{cost}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </li>
    )
}