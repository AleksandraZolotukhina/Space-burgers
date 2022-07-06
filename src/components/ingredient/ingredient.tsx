import styles from "./ingredient.module.css";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from '../../types/types';
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import { FC } from "react";

export const Ingredient: FC<{ data: Readonly<TIngredient>, count: number }> = ({ data, count }) => {
    const { image, name, price } = data;
    const [, ref] = useDrag({
        type: "ingredient",
        item: { ...data, uuid: uuidv4() },
    });

    return (
        <li ref={ref} className={`text_type_main-default ${styles.list_ingredients_item} ${count ? styles.list_ingredients_item_active : ""}`}>
            {count ? <Counter count={count} size="default" /> : ""}
            <img src={image} alt={name} />
            <div className={styles.cost}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text mt-2">{name}</p>
        </li>
    )
}