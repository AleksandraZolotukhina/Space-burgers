import styles from "./order-feed-page.module.css";
import { OrderFeedItem } from "../../components/order-feed-item/order-feed-item";
import { NumbersOrder } from "../../components/numbers-order/numbers-order";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/ws-action-types";

export const OrderFeedPage = () => {
    const dispatch = useDispatch();
    const { wsConnected, orders } = useSelector(store => store.ws);
    const {ingredients} = useSelector(store => store.listIngredients);
    const {success, total, totalToday, orders: ordersArray} = orders;
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, token: false })
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED })
        }
    }, [])

    if (!wsConnected) return "Загрузка"

    if (success) return (
        <section className="mt-10">
            <h1 className="text text_type_main-large">Лента заказов</h1>
            <div className={styles.orders_feed}>
                <ul className={`${styles.list_orders} ${styles.scrollbar}`}>
                    {ordersArray.map(order => {
                        return <OrderFeedItem key={order._id} {...order} listIngredients={ingredients}/>
                    })}
                </ul>
                <NumbersOrder  totalToday={totalToday} total={total} ordersArray={ordersArray} />
            </div>
        </section>
    )
    return <></>
}