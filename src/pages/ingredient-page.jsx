import { IngredientDetails } from "../components/ingredient-details/ingredient-details";

export const IngredientPage = () => {

    return (
        <section style={{display:"flex", flexDirection: "column", alignItems: "center"}} className="mt-30">
            <h1 className="text text_type_main-large ">Детали ингредиента</h1>
            <IngredientDetails />
        </section>
    )
}