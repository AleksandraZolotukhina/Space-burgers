import React, { FC } from "react";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-cost.module.css";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import { sendNewOrder } from "../../services/actions/burger-cost";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../types/hooks";
import { TArrayObjects } from "../../types/generics";
import { TIngredient } from "../../types/types";

export const BurgerCost: FC<{ cost: number, hasBun: boolean }> = ({ cost, hasBun }) => {
    const navigate = useNavigate();
    const user = useSelector(store => store.userInformation.data.success);
    const [isOpenModal, setModal] = React.useState(false);
    const ingredients = useSelector(store => store.listIngredients.constructorIngredients);
    const idIngredients = ingredients.map(ingredient => ingredient._id);
    const { hasError, isLoading, errorMessage, orderNumber } = useSelector(store => store.order);
    const dispatch = useDispatch();

    const openModal = () => {
        if (!user) {
            navigate("/login")
        }
        else {
            setModal(true);
            dispatch(sendNewOrder(idIngredients));
        }

    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            <div className={`${styles.content} text_type_digits-medium`}>
                <div className={styles.price}>
                    <p className="text">{cost}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={openModal} disabled={!hasBun}>
                    Оформить заказ
                </Button>
            </div>
            {
                ingredients.length && !hasBun ?
                    <p className={`text text_type_main-small ${styles.message_tip}`}>Булочка в заказе обязательна</p>
                    : <></>
            }
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