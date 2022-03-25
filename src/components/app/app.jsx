import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import {dataIngredients, dataComposition} from "../../utils/data";

export function App() {
    return (
        <>
            <AppHeader />
            <main className={`${styles.main} mt-10`}>
                <section className="mt-4">
                    <h1 className="text text_type_main-large">Соберите бургер</h1>
                    <div className={`${styles.menu_and_order} mt-5`}>
                        <BurgerIngredients ingredients = {dataIngredients} />
                        <BurgerConstructor composition = {dataComposition} />
                    </div>
                    
                </section>
            </main>
        </>
    );
}