import styles from "./order-details-page.module.css";
import { OrdersDetails } from "../../components/orders-details/orders-details";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/ws-action-types";

export const OrdersDetailsPage = () => {
    const dispatch = useDispatch();
    const { wsConnected } = useSelector(store => store.ws)
    console.log(wsConnected)
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, token: false })
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED })
        }
    },[])
    if (wsConnected) return (
        <section>
            <OrdersDetails />
        </section>
    )
    return <></>
}