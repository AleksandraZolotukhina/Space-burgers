import { OrderFeedItem } from "../components/order-feed-item/order-feed-item"
import styles from "./order-feed-page/order-feed-page.module.css"
export const ProfileOrdersPage = () => {
    return (

        <ul className={`${styles.list_orders} ${styles.scrollbar}`} style={{marginTop: '-56px',}}>
            <OrderFeedItem />
            <OrderFeedItem />
            <OrderFeedItem />
            <OrderFeedItem />
        </ul>
    )
}