import React from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../ingredient/ingredient";
import PropTypes from 'prop-types';
export function BurgerIngredients({ ingredients }) {
    const [current, setCurrent] = React.useState('one');
    return (
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
                            return ingredient.type === "bun" && <Ingredient key={ingredient._id} name={ingredient.name} image={ingredient.image} count={0} />
                        })}
                    </ul>
                </li>

                <li className={styles.list_item}>
                    <h2 className="text text_type_main-medium">Соусы</h2>
                    <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                        {ingredients.map(ingredient => {
                            return ingredient.type === "sauce" && <Ingredient key={ingredient._id} name={ingredient.name} image={ingredient.image} count={0} />
                        })}
                    </ul>
                </li>

                <li className={styles.list_item}>
                    <h2 className="text text_type_main-medium">Начинки</h2>
                    <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                        {ingredients.map(ingredient => {
                            return ingredient.type === "sauce" && <Ingredient key={ingredient._id} name={ingredient.name} image={ingredient.image} count={0} />
                        })}
                    </ul>
                </li>
            </ul>
        </div>

    )
}

BurgerIngredients.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
}