import styles from "./order-details.module.css";
import icon from "../../images/graphics.svg";
import PropTypes from 'prop-types';

export function OrderDetails({numberOrder}) {
    return (
        <>
            <h2 className={`text text_type_digits-large ${styles.id}`}>{numberOrder}</h2>
            <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
            <img className={`mt-15`} src={icon} alt="Изображение того, что Ваш заказ приняли в обработку" />
            <p className={`text text_type_main-default mt-15`}>Ваш заказ начали готовить</p>
            <p className={`text ${styles.order_statusInfo} text_type_main-default mt-2`}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

OrderDetails.propTypes = {
    numberOrder:  PropTypes.number.isRequired,
};