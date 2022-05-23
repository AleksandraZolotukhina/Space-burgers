import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataIngredients } from "../services/actions/data-ingredients";
import styles from "./main.module.css";

export const MainPage = () => {
    const dispatch = useDispatch();
    const { isLoading, ingredients, hasError, errorMessage } = useSelector(store => store.listIngredients);

    useEffect(() => {
       dispatch(getDataIngredients());
    }, []);

    return (
        <section className="mt-10">
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={`${styles.menu_and_order} mt-5`}>
                {isLoading && "Загрузка..."}
                {hasError && `Произошла ошибка: ${errorMessage}`}
                {
                    !isLoading &&
                    !hasError &&
                    ingredients.length &&
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
                }
            </div>
        </section>
    )
}