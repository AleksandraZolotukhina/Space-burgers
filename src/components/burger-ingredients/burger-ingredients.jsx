import React, { createRef } from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../ingredient/ingredient";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { SEE_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from "../../services/actions/burger-ingredients";

export function BurgerIngredients() {

    const ingredients = useSelector(store => store.listIngredients.ingredients);
    const [current, setCurrent] = React.useState('one');
    const [isOpenModal, setModal] = React.useState(false);
    const constructorIngredients = useSelector(state => state.listIngredients.constructorIngredients);
    const dispatch = useDispatch();
    const bunRef = createRef();
    const sauceRef = createRef();
    const mainRef = createRef();

    const openModal = (data) => {
        setModal(true);
        dispatch({ type: SEE_INGREDIENT_DETAILS, data: data });
    }

    const closeModal = () => {
        setModal(false);
        dispatch({ type: DELETE_INGREDIENT_DETAILS, data: {} });
    }

    const scroll = () => {
        if(bunRef.current.getBoundingClientRect().top > 0 ){
            setCurrent("one");
            
        } else if(sauceRef.current.getBoundingClientRect().top > 0 ){ 
            setCurrent("two");
        } else if(mainRef.current.getBoundingClientRect().top > 0 ){ 
            setCurrent("three");
        }

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
                <ul className={`${styles.list} ${styles.scrollbar}`} onScroll={scroll}>
                    <li className={styles.list_item} ref={bunRef}>
                        <h2 className="text text_type_main-medium" id="bun">Булки</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients}`}>
                            {ingredients.map(ingredient => {
                                const constructorIngredient = constructorIngredients.find(el => el._id === ingredient._id);
                                return ingredient.type === "bun" && <Ingredient key={ingredient._id} data={ingredient} openModal={openModal} 
                                count={constructorIngredient ? constructorIngredient.count : 0} />
                            })}
                        </ul>
                    </li>

                    <li className={styles.list_item} ref={sauceRef}>
                        <h2 className="text text_type_main-medium" id="sauce">Соусы</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient => {
                                const constructorIngredient = constructorIngredients.find(el => el._id === ingredient._id);
                                return ingredient.type === "sauce" && <Ingredient key={ingredient._id} data={ingredient} openModal={openModal} 
                                count={constructorIngredient ? constructorIngredient.count : 0} />
                            })}
                        </ul>
                    </li>

                    <li className={styles.list_item} ref={mainRef}>
                        <h2 className="text text_type_main-medium" id="filling">Начинки</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient => {
                                const constructorIngredient = constructorIngredients.find(el => el._id === ingredient._id);
                                return ingredient.type === "main" && <Ingredient key={ingredient._id} data={ingredient} openModal={openModal} 
                                count={constructorIngredient ? constructorIngredient.count : 0} />
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