import React from "react";
import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { getDataIngredients } from "../../services/actions/data-ingredients";

export function App() {
    const dispatch = useDispatch();
    
    React.useEffect(() => {
       dispatch(getDataIngredients());
    }, []);

    const { isLoading, data, hasError, errorMessage } = useSelector(store => store.listIngredients);
    return (
        <>
            <AppHeader />
            <main className={`${styles.main} mt-10`}>
                <section className="mt-4">
                    <h1 className="text text_type_main-large">Соберите бургер</h1>
                    <div className={`${styles.menu_and_order} mt-5`}>
                        {isLoading && "Загрузка..."}
                        {hasError && `Произошла ошибка: ${errorMessage}`}
                        {
                            !isLoading &&
                            !hasError &&
                            data.length &&
                            <>
                                <BurgerIngredients />
                                <BurgerConstructor />
                            </>

                        }

                    </div>

                </section>
            </main>
        </>
    );
}