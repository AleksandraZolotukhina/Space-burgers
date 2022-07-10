import styles from "./order-feed-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { orderStatus } from "../../utils/constants";
import { getCost, getTextTime } from "../../utils/functions";
import { FC } from "react";
import { TOrderFeedItemProps, TIngredientsArray, TOrderStatus } from "../../types/types";

export const OrderFeedItem:FC<TOrderFeedItemProps> = ({ ingredients, status, name, number, updatedAt, listIngredients, isStatus=false }) => {
    const arrayIngredients:TIngredientsArray= [];
    ingredients.forEach(ingredient => {
        if(ingredient!==null){
            const listIngredient  = listIngredients.find(el => el._id === ingredient)
            arrayIngredients.push(listIngredient!)
        }
    })

    return (
        <li className={styles.item}>
            <div className={styles.item_number}>
                <p className="text text_type_digits-default">#{number}</p>
                <p className={`text text_type_main-default ${styles.order_date}`}>
                    {getTextTime(updatedAt)}
                </p>
            </div>
            <h2 className="text text_type_main-medium">{name}</h2>
            {isStatus && <p className={`text text_type_main-default ${status === "done" && styles.done}`}>{orderStatus[status as  keyof TOrderStatus]}</p>}
            <div className={styles.item_image_cost}>
                <ul className={styles.item_ingredients}>
                    {
                        arrayIngredients.slice(0, 6).map((ingredient, index) => {
                            if (index < 5) {
                                return (
                                    <li className={styles.item_ingredient} key={index}>
                                        <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
                                    </li>
                                )
                            }
                            return (
                                <li className={`${styles.item_ingredient} ${styles.item_ingredient_more}`} key={index}>
                                    <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
                                    <p className={`text text_type_main-default ${styles.count_ingredient}`}>+{arrayIngredients.length - 5}</p>
                                </li>
                            )

                        })
                    }

                </ul>
                <div className={styles.item_cost}>
                    <p className="text text_type_digits-default">{getCost(arrayIngredients)}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </li>
    )
}