import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { OrderFeedItem } from "../components/order-feed-item/order-feed-item"
import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from "../services/actions/ws-action-types"
import styles from "./order-feed-page/order-feed-page.module.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const ProfileOrdersPage = () => {
    const dispatch = useDispatch();
    const { wsConnected, orders } = useSelector(store => store.ws);
    const { ingredients } = useSelector(store => store.listIngredients);
    const { success, orders: ordersArray } = orders;
    const location = useLocation();

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, token: true })
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSE })
        }
    }, [])
    
    if (!wsConnected) return "Загрузка..."
    if (success) return (
        <>
            {
                ordersArray.length ? (
                    <ul className={`${styles.list_orders} ${styles.scrollbar}`} style={{ marginTop: '-56px', }}>
                        {
                            ordersArray?.reverse().map(order => {
                                return (
                                    <Link to={order._id} key={order._id} className={styles.order_link} state={{ backgroundLocation: location }}>
                                        <OrderFeedItem {...order} listIngredients={ingredients} isStatus={true} />
                                    </Link>
                                )

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