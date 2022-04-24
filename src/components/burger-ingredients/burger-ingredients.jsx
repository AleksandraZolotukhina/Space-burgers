import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../ingredient/ingredient";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { SEE_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from "../../services/actions/burger-ingredients";

export function BurgerIngredients() {

    const ingredients = useSelector(store => store.listIngredients.data);
    const [current, setCurrent] = React.useState('one');

    const [isOpenModal, setModal] = React.useState(false);
    const dispatch = useDispatch();

    const openModal = (data) => {
        setModal(true);
        dispatch({ type: SEE_INGREDIENT_DETAILS, data: data });
    }

    const closeModal = () => {
        setModal(false);
        dispatch({ type: DELETE_INGREDIENT_DETAILS, data: {} });
    }

    return (
        <>
            <div>
                <div className={styles.steps}>
                    <a href="#bun" className={styles.links}>
                        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                            Булки
                        </Tab>
                    </a>
                    <a href="#sauce" className={styles.links}>
                        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                            Соусы
                        </Tab>
                    </a>
                    <a href="#filling" className={styles.links}>
                        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                            Начинки
                        </Tab>
                    </a>
                </div>
                <ul className={`${styles.list} ${styles.scrollbar}`}>
                    <li className={styles.list_item}>
                        <h2 className="text text_type_main-medium" id="bun">Булки</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients}`}>
                            {ingredients.map(ingredient => {
                                return ingredient.type === "bun" && <Ingredient key={ingredient._id} data={ingredient} count={0} openModal={openModal} />
                            })}
                        </ul>
                    </li>

                    <li className={styles.list_item}>
                        <h2 className="text text_type_main-medium" id="sauce">Соусы</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient => {
                                return ingredient.type === "sauce" && <Ingredient key={ingredient._id} data={ingredient} count={0} openModal={openModal} />
                            })}
                        </ul>
                    </li>

                    <li className={styles.list_item}>
                        <h2 className="text text_type_main-medium" id="filling">Начинки</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient => {
                                return ingredient.type === "main" && <Ingredient key={ingredient._id} data={ingredient} count={0} openModal={openModal} />
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
            {
                isOpenModal &&
                <Modal closeModal={closeModal} title="Детали ингредиента">
                    <IngredientDetails />
                </Modal>
            }
        </>
    )
}