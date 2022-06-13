import styles from "./orders-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrdersDetailsItem } from "../orders-details-item/orders-details-item";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { orderStatus } from "../../utils/constants";

export const OrdersDetails = ({ center = false }) => {
    const orders = useSelector(store => store.ws.orders.orders);
    const id = useParams().id;
    const listIngredients = useSelector(store => store.listIngredients.ingredients);
    if (orders === undefined) return <></>
    
    const { name, number, status, ingredients, updatedAt } = orders.find(order => order._id === id)
    const arrayIngredients = [];
    ingredients?.forEach(ingredient => {
        arrayIngredients.push(listIngredients.find(el => el._id === ingredient))
    });
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
        <div className={styles.popup_content}>
            <p className={`text text_type_digits-default ${center && styles.center}`}>{`#${number}`}</p>
            <h1 className={`text text_type_main-medium ${styles.title}`}>{name}</h1>
            <p className={`text text_type_main-default ${styles.status}`}>{orderStatus[status]}</p>
            <h2 className="text text_type_main-medium">Состав:</h2>
            <ul className={`${styles.list} ${styles.scrollbar}`}>
                {
                    arrayIngredients.map(ingredient => {
                        return <OrdersDetailsItem ingredient={ingredient} key={ingredient._id} />
                    })
                }
            </ul>
            <div className={styles.date_cost}>
                <p className={`text text_type_main-default ${styles.date}`}>
                    {`${Math.floor(days) > 0 ? Math.floor(days) + " день назад" : "Сегодня"}, ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes} i-GMT+3`}
                </p>
                <div className={styles.cost}>
                    <p className="text text_type_digits-default">{cost}</p>
                    <CurrencyIcon type="primary" />
                </div>

            </div>

        </div>
    )
}