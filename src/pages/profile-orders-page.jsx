import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { OrderFeedItem } from "../components/order-feed-item/order-feed-item"
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/actions/ws-action-types"
import styles from "./order-feed-page/order-feed-page.module.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const ProfileOrdersPage = () => {
    const dispatch = useDispatch();
    const { wsConnected, orders } = useSelector(store => store.ws);
    const { ingredients } = useSelector(store => store.listIngredients);
    const { success, orders: ordersArray } = orders;
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, token: true })
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED })
        }
    }, [])
    if (!wsConnected) return "Загрузка..."
    if (success) return (
        <>
            {
                ordersArray.length ? (
                    <ul className={`${styles.list_orders} ${styles.scrollbar}`} style={{ marginTop: '-56px', }}>
                        {
                            ordersArray?.map(order => {
                                return <OrderFeedItem key={order._id} {...order} listIngredients={ingredients} isStatus={true} />
                            })
                        }
                    </ul>
                ) : (
                    <div className={styles.list_description}>
                        <p className={`text ${styles.description_text}`}>Здесь будет список ваших заказов</p>
                        <Link to="/" className={styles.link}>Сделать заказ</Link>
                    </div>
                )
            }

        </>
    )
    return <></>
}