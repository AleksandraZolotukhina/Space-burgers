import styles from "./order-details.module.css";
import icon from "../../images/graphics.svg";
import PropTypes from 'prop-types';

export function OrderDetails({data}) {
    const {id_order, status, status_info} = data;
    return (
        <>
            <h2 className={`text text_type_digits-large ${styles.id}`}>{id_order}</h2>
            <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
            <img className={`mt-15`} src={icon} alt="Изображение того, что Ваш заказ приняли в обработку" />
            <p className={`text text_type_main-default mt-15`}>{status}</p>
            <p className={`text ${styles.order_status_info} text_type_main-default mt-2`}>{status_info}</p>
        </>
    )
}

OrderDetails.propTypes = {
    data: PropTypes.shape({
        id_order: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        status_info: PropTypes.string.isRequired,
    })
};