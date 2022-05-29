import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor";
import styles from "./main.module.css";

export const MainPage = () => {
    return (
        <section className="mt-10">
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={`${styles.menu_and_order} mt-5`}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
            </div>
        </section>
    )
}