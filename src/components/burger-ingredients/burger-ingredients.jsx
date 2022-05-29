import React, { createRef } from "react";
import styles from "./burger-ingredients.module.css"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../ingredient/ingredient";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function BurgerIngredients() {

    const ingredients = useSelector(store => store.listIngredients.ingredients);
    const [current, setCurrent] = React.useState('one');
    const bunRef = createRef();
    const sauceRef = createRef();
    const mainRef = createRef();
    const location = useLocation();

    const scroll = () => {
        if (bunRef.current.getBoundingClientRect().top > 0) {
            setCurrent("one");

        } else if (sauceRef.current.getBoundingClientRect().top > 0) {
            setCurrent("two");
        } else if (mainRef.current.getBoundingClientRect().top > 0) {
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
                            {ingredients.map(ingredient =>
                                ingredient.type === "bun" &&
                                <Link key={ingredient._id} style={{ textDecoration: 'none', color: '#F2F2F3' }} to={`ingredients/${ingredient._id}`} state={{ backgroundLocation: location }}>
                                    <Ingredient data={ingredient}
                                        count={ingredient.count} />
                                </Link>
                            )}
                        </ul>
                    </li>

                    <li className={styles.list_item} ref={sauceRef}>
                        <h2 className="text text_type_main-medium" id="sauce">Соусы</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient =>
                                ingredient.type === "sauce" &&
                                <Link key={ingredient._id} style={{ textDecoration: 'none', color: '#F2F2F3' }} to={`ingredients/${ingredient._id}`} state={{ backgroundLocation: location }}>
                                    <Ingredient data={ingredient}
                                        count={ingredient.count} />
                                </Link>
                            )}
                        </ul>
                    </li>

                    <li className={styles.list_item} ref={mainRef}>
                        <h2 className="text text_type_main-medium" id="filling">Начинки</h2>
                        <ul className={`${styles.list} ${styles.list_ingredients} mt-6`}>
                            {ingredients.map(ingredient =>
                                ingredient.type === "main" &&
                                <Link key={ingredient._id} style={{ textDecoration: 'none', color: '#F2F2F3' }} to={`ingredients/${ingredient._id}`} state={{ backgroundLocation: location }}>
                                    <Ingredient data={ingredient}
                                        count={ingredient.count} />
                                </Link>
                            )}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}