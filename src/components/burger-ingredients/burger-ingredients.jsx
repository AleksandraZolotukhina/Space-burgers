import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../ingredient/ingredient";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { BurgerContext } from "../../utils/appContext";

export function BurgerIngredients() {

    const ingredients = React.useContext(BurgerContext);
    const [current, setCurrent] = React.useState('one');

    const [isOpenModal, setModal] = React.useState(false);
    const [data, setData] = React.useState({});

    const openModal = (data) => {
        setModal(true);
        setData(data);
    }

    const closeModal = () => {
        setModal(false);
    }
    return (
        <>
            <div>
                <div className={styles.steps}>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </div>
                <ul className={`${styles.list} ${styles.scrollbar}`}>
                    <li className={styles.list_item}>
                        <h2 className="text text_type_main-medium">Булки</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients}`}>
                            {ingredients.map(ingredient => {
                                return ingredient.type === "bun" && <Ingredient key={ingredient._id} data={ingredient} count={0} openModal={openModal} />
                            })}
                        </ul>
                    </li>

                    <li className={styles.list_item}>
                        <h2 className="text text_type_main-medium">Соусы</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient => {
                                return ingredient.type === "sauce" && <Ingredient key={ingredient._id} data={ingredient} count={0} openModal={openModal} />
                            })}
                        </ul>
                    </li>

                    <li className={styles.list_item}>
                        <h2 className="text text_type_main-medium">Начинки</h2>
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
                    <IngredientDetails data={data} />
                </Modal>
            }
        </>
    )
}