import styles from "./order-feed-page.module.css";
import { OrderFeedItem } from "../../components/order-feed-item/order-feed-item";
import { NumbersOrder } from "../../components/numbers-order/numbers-order";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../types/hooks";
import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from "../../services/actions/ws-action-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TIngredientsReadOnlyArray, TOrderFeedData } from "../../types/types";

export const OrderFeedPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { wsConnected, orders } = useSelector(store => store.ws);
    const { ingredients } = useSelector(store => store.listIngredients);
    const { success, total, totalToday, orders: ordersArray }:TOrderFeedData = orders;

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, token: false })
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSE })
        }
    }, [])

    if (!wsConnected) return <div>"Загрузка"</div>

    if (success) return (
        <section className="mt-10">
            <h1 className="text text_type_main-large">Лента заказов</h1>
            <div className={styles.orders_feed}>
                <ul className={`${styles.list_orders} ${styles.scrollbar}`}>
                    {ordersArray.map(order => {
                        return (
                            <Link to={order._id} key={order._id} className={styles.orders_feed_link} state={{ backgroundLocation: location }}>
                                <OrderFeedItem {...order} listIngredients={ingredients} />
                            </Link>
                        )
                    })}
                </ul>
                <NumbersOrder totalToday={totalToday} total={total} ordersArray={ordersArray} />
            </div>
        </section>
    )
    return <></>
}