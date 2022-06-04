import { OrderFeedItem } from "../components/order-feed-item/order-feed-item"
import styles from "./order-feed-page/order-feed-page.module.css"
export const ProfileOrdersPage = () => {
    return (

        <ul className={`${styles.list_orders} ${styles.scrollbar}`}>
            <OrderFeedItem />
            <OrderFeedItem />
            <OrderFeedItem />
            <OrderFeedItem />
        </ul>
    )
}