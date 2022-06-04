import styles from "./order-feed-page.module.css";
import { OrderFeedItem } from "../../components/order-feed-item/order-feed-item";
import { NumbersOrder } from "../../components/numbers-order/numbers-order";

export const OrderFeedPage = () => {
    return (
        <section className="mt-10">
            <h1 className="text text_type_main-large">Лента заказов</h1>
            <div className={styles.orders_feed}>
                <ul className={`${styles.list_orders} ${styles.scrollbar}`}>
                    <OrderFeedItem />
                    <OrderFeedItem />
                    <OrderFeedItem />
                    <OrderFeedItem />
                </ul>
                <NumbersOrder />
            </div>
        </section>
    )
}