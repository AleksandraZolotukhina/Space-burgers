import React from "react";
import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { url } from "../../utils/constants";
import { BurgerContext } from "../../utils/appContext";

export function App() {
    const [state, setState] = React.useState({ isLoading: false, hasError: false, errorMessage: "", data: [] });
    React.useEffect(() => {
        setState({ ...state, isLoading: true });
        fetch(`${url}/ingredients`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then(data => setState({ ...state, isLoading: false, data: data.data }))
            .catch(error => setState({ ...state, isLoading: false, hasError: true, errorMessage: error }))
    }, []);

    const { isLoading, data, hasError, errorMessage } = state;
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
                            <BurgerContext.Provider value={data}>
                                <BurgerIngredients />
                                <BurgerConstructor />
                            </BurgerContext.Provider>

                        }

                    </div>

                </section>
            </main>
        </>
    );
}