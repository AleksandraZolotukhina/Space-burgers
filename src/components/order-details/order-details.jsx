import styles from "./order-details.module.css";
import icon from "../../images/graphics.svg";
import PropTypes from 'prop-types';

export function OrderDetails({data}) {
    const {idOrder, status, statusInfo} = data;
    return (
        <>
            <h2 className={`text text_type_digits-large ${styles.id}`}>{idOrder}</h2>
            <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
            <img className={`mt-15`} src={icon} alt="Изображение того, что Ваш заказ приняли в обработку" />
            <p className={`text text_type_main-default mt-15`}>{status}</p>
            <p className={`text ${styles.order_statusInfo} text_type_main-default mt-2`}>{statusInfo}</p>
        </>
    )
}

OrderDetails.propTypes = {
    data: PropTypes.shape({
        idOrder: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        statusInfo: PropTypes.string.isRequired,
    })
};