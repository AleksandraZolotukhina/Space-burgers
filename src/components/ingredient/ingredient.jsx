
import PropTypes from 'prop-types';
import styles from "./ingredient.module.css";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { menuItemPropTypes } from "../../utils/constants";

export function Ingredient({ data, count, openModal }) {
    const { image, name } = data;
    const classActive = count ? styles.list_ingredients_item_active : "";
    const counter = count ? <Counter count={count} size="default" /> : "";

    return (
        <li className={`text_type_main-default ${styles.list_ingredients_item} ${classActive}`} onClick={() => { openModal(data) }}>
            {counter}
            <img src={image} alt={name} />
            <div className={styles.cost}>
                <p className="text text_type_digits-default mr-2">20</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text mt-2">{name}</p>
        </li>
    )
}

Ingredient.propTypes = {
    data: menuItemPropTypes.isRequired,
    count: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired,
}