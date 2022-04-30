import React from "react";
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-cost.module.css";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { sendNewOrder } from "../../services/actions/burger-cost";
export function BurgerCost({ cost }) {

    const [isOpenModal, setModal] = React.useState(false);
    const ingredients = useSelector(store=>store.listIngredients.constructorIngredients);
    const idIngredients = ingredients.map(ingredient => ingredient._id);
    const { hasError, isLoading, errorMessage, orderNumber } = useSelector(store=>store.order);
    const dispatch = useDispatch();

    const openModal = () => {
        setModal(true);
        dispatch(sendNewOrder(idIngredients));
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
                    {isLoading && "Загрузка ..."}
                    {hasError && `Произошла ошибка: ${errorMessage}`}
                    {
                        !isLoading &&
                        !hasError &&
                        orderNumber &&
                        <OrderDetails />
                    }

                </Modal>
            }
        </>
    )
}

BurgerCost.propTypes = {
    cost: PropTypes.number.isRequired
}