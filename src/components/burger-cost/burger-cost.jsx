import React from "react";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from "./burger-cost.module.css";
import { Modal } from "../modal/modal";
import { statusOrder } from "../../utils/constants";
import { OrderDetails } from "../order-details/order-details";

export function BurgerCost({ cost }) {
    const [isOpenModal, setModal] = React.useState(false);
    
    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            <div className={`${styles.content} text_type_digits-medium`}>
                <div className={styles.price}>
                    <p>{cost}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {
                isOpenModal &&
                <Modal closeModal={closeModal}>
                    <OrderDetails data={statusOrder} />
                </Modal>
            }
        </>
    )
}

BurgerCost.propTypes = {
    cost: PropTypes.number.isRequired
}