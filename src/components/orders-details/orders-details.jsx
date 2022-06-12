import styles from "./orders-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrdersDetailsItem } from "../order-details-item";
export const OrdersDetails = () => {
    const orders = useSelector(store=>store.ws.orders.orders);
    const listIngredients = useSelector(store=>store.listIngredients.ingredients);
    const id = useParams().id;
    const {name, number, status, ingredients, updatedAt} = orders?.find(order=>order._id===id)
    console.log(ingredients);
    const newArray = [];
    ingredients?.forEach(ingredient => {
        newArray.push(listIngredients.find(el=>el._id===ingredient))
    });
    newArray.filter(el=>{
        
    })
    console.log(newArray)
    if(orders) return (
        <div className={styles.popup_content}>
            <p>{`#${number}`}</p>
            <h1 className="text text_type_main-medium">{name}</h1>
            <p className={styles.status}></p>
            <h2>Состав:</h2>
            <ul>
                {
                    ingredients.map(ingredient => {
                        return  <OrdersDetailsItem  />
                    })
                }
            </ul>
        </div>
    )
    return <></>
}