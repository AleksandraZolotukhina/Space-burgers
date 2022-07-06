import styles from "./order-details-page.module.css";
import { OrdersDetails } from "../../components/orders-details/orders-details";
import { useEffect } from "react";
import { useSelector, useDispatch } from "../../types/hooks";
import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from "../../services/actions/ws-action-types";

export const OrdersDetailsPage = ({ token = false }: {token:boolean}) => {
    const dispatch = useDispatch();
    const { wsConnected } = useSelector(store => store.ws);
    
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, token: token  })
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSE })
        }
    }, [])

    if (wsConnected) return (
        <section className={styles.orders_details}>
            <OrdersDetails center={true} />
        </section>
    )

    return <></>
}