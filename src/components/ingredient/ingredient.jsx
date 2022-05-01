import PropTypes from 'prop-types';
import styles from "./ingredient.module.css";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { menuItemPropTypes } from "../../utils/constants";
import { useDrag } from "react-dnd";
export function Ingredient({ data, openModal, count }) {
    const { image, name, _id: id, type, price} = data;
    const [,ref] = useDrag({
        type:"ingredient",
        item: {id, type},
    }); 
    return (
        <li ref={ref} className={`text_type_main-default ${styles.list_ingredients_item} ${count ? styles.list_ingredients_item_active : ""}`} onClick={() => { openModal(data) }}>
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

Ingredient.propTypes = {
    data: menuItemPropTypes.isRequired,
    openModal: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
}