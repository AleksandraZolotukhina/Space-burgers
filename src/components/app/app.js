import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import {data} from "../../utils/data";

export function App() {
    return (
        <>
            <AppHeader />
            <main className={`${styles.main} mt-10`}>
                <section className={`${styles.constructor_burger} mt-4`}>
                    <h1 className="text text_type_main-large">Соберите бургер</h1>
                    <div className={`${styles.menu_and_order} mt-5`}>
                        <BurgerIngredients ingredients={data} />
                    </div>
                    
                </section>
            </main>
        </>
    );
}