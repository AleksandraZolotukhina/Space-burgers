import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerCost } from "../burger-cost/burger-cost";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT, DELETE_BUNS, INCREASE_INGREDIENT, DECREASE_INGREDIENT } from "../../services/actions/data-ingredients";
import { ConstructorIngredient } from "../constructor-ingredient/constructor-ingredient";

export function BurgerConstructor() {
    const orderIngredients = useSelector(store => store.listIngredients.constructorIngredients);
    const bun = orderIngredients.find(el => el.type === "bun");
    const burgerPrice = bun ? bun.price * 2 + orderIngredients.reduce((current, next) => (next.type !== 'bun') ? current + next.price : current, 0) : 0;
    const dispatch = useDispatch();

    const [{ isHover }, ref] = useDrop({
        accept: "ingredient",
        drop({ id, type }) {
            type === "bun" && dispatch({ type: DELETE_BUNS, id: bun._id }) && dispatch({ type:DECREASE_INGREDIENT, id: bun._id })
            dispatch({ type: ADD_INGREDIENT, id: id })
            dispatch({ type: INCREASE_INGREDIENT, id: id})
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    return (
        <div>
            <div ref={ref}>
                {bun &&
                    <ConstructorElement
                        type="top"
                        key={0}
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }

                <ul className={`${styles.list} ${styles.scrollbar} mt-4 mb-4`}>
                    {
                        orderIngredients.length === 1 ?
                            <p className={`${styles.tip} ${isHover && styles.tip_invisible}`}>Перетащите ингредиент для добавления в бургер</p> :
                            orderIngredients.map((ingredient, index) => ingredient.type !== "bun" && <ConstructorIngredient key={index} data={ingredient} index={index} />)
                    }
                </ul>

                {bun &&
                    <ConstructorElement
                        type="bottom"
                        key={orderIngredients.length}
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }
            </div>
            <BurgerCost cost={burgerPrice} />
        </div>
    )
}