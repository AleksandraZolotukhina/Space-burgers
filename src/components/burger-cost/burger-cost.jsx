import React from "react";
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-cost.module.css";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import { BurgerConstructorContext } from "../../utils/appContext";
import { url } from "../../utils/constants";
export function BurgerCost({ cost }) {
    const [isOpenModal, setModal] = React.useState(false);
    const ingredients = React.useContext(BurgerConstructorContext);
    const idIngredients = ingredients.map(ingredient => ingredient._id);
    const [state, setState] = React.useState({ hasError: false, isLoading: false, errorMessage: "", numberOrder: undefined });
    const { hasError, isLoading, errorMessage, numberOrder } = state;

    const sendNewOrder = () => {
        setState({...state, isLoading: true});
        fetch(`${url}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                       ingredients: idIngredients,
            })
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(data => setState({...state, isLoading: false, numberOrder: data.order.number}))
        .catch(error => setState({...state, isLoading: false, hasError: true, errorMessage: error}))
    }


    const openModal = () => {
        setModal(true);
        sendNewOrder();
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
                        numberOrder &&
                        <OrderDetails numberOrder={numberOrder} />
                    }

                </Modal>
            }
        </>
    )
}

BurgerCost.propTypes = {
    cost: PropTypes.number.isRequired
}