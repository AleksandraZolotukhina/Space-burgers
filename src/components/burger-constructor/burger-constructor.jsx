import styles from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerCost } from "../burger-cost/burger-cost";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT, INCREASE_INGREDIENT, DECREASE_INGREDIENT } from "../../services/actions/data-ingredients";
import { ConstructorIngredient } from "../constructor-ingredient/constructor-ingredient";

export function BurgerConstructor() {
    const orderIngredients = useSelector(store => store.listIngredients.constructorIngredients);
    const bun = orderIngredients.find(el => el.type === "bun");
    const bunPrice = bun ? bun.price * 2  : 0;
    const burgerPrice = orderIngredients.reduce((current, next) => (next.type !== 'bun') ? current + next.price : current, 0) + bunPrice;
    const dispatch = useDispatch();

    const [{ isHover }, ref] = useDrop({
        accept: "ingredient",
        drop(item) {
            if(item.type === "bun"){
                const newOrderIngredients = bun ? [...orderIngredients].filter(el => el._id !== bun._id) : [...orderIngredients]
                bun && dispatch({ type: DECREASE_INGREDIENT, id: bun._id })
                dispatch({ type: ADD_INGREDIENT, item: [...newOrderIngredients, item]}) 
                dispatch({ type: INCREASE_INGREDIENT, id: item._id})
            }
            else{
                dispatch({ type: ADD_INGREDIENT, item: [...orderIngredients, item] })
                dispatch({ type: INCREASE_INGREDIENT, id: item._id })
            }

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
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />

                }

                <ul className={`${styles.list} ${styles.scrollbar} mt-4 mb-4`}>
                    {
                        orderIngredients.length === 0 ?
                            <div className={`${styles.tip} ${isHover && styles.tip_invisible}`}>
                                <p>Перетащите ингредиент для добавления в бургер</p> 
                                <p>Примечание: Булочка обязательна</p> 
                            </div>
                            : orderIngredients.map((ingredient, index) => ingredient.type !== "bun" && <ConstructorIngredient key={ingredient.uuid} data={ingredient} index={index}/> 
                            )
                    }
                </ul>

                {bun &&
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }
            </div>
            <BurgerCost cost={burgerPrice} hasBun={bun ? true : false}/>
        </div>
    )
}