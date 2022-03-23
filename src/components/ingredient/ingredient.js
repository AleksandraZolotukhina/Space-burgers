import styles from "./ingredient.module.css";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

export function Ingredient(props) {
    const classActive = props.count ?  styles.list_ingredients_item_active : "";
    const counter = props.count ?  <Counter count={props.count} size="default" /> : "";
    return (
        
        <li className={`text_type_main-default ${styles.list_ingredients_item} ${classActive}`}>
            {counter}
            <img src={props.image} alt={props.name} />
            <div className={styles.cost}>
                <p className="text text_type_digits-default mr-2">20</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text mt-2">{props.name}</p>
        </li>
    )
}