import styles from "./burger-constructor.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerCost } from "../burger-cost/burger-cost";
import PropTypes from 'prop-types';
export function BurgerConstructor({ composition }) {
    const isBun = composition.find(el =>
        el.type === "bun"
    );
    let index = 0;
    let burgerPrice = isBun.price * 2;
    return (
        <div>
            <div className={styles.content}>

                <ConstructorElement
                    type="top"
                    key={index}
                    isLocked={true}
                    text={`${isBun.name} (верх)`}
                    price={isBun.price}
                    thumbnail={isBun.image}
                />
                <ul className={`${styles.list} ${styles.scrollbar} mt-4 mb-4`}>
                    {
                        
                        composition.map(ingredient => {
                            let element;
                            index++
                            if (ingredient.type !== "bun") {
                                element = <li key={index} className={styles.ingredient_with_drag}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={ingredient.name}
                                        price={ingredient.price}
                                        thumbnail={ingredient.image}
                                    />

                                </li>
                                burgerPrice += ingredient.price;
                            } else {
                                index--
                            }

                            return element
                        })
                    }
                </ul>

                <ConstructorElement
                    type="bottom"
                    key={composition.length}
                    isLocked={true}
                    text={`${isBun.name} (низ)`}
                    price={isBun.price}
                    thumbnail={isBun.image}
                />
            </div>
            <BurgerCost cost = {burgerPrice} />
        </div>
    )
}

BurgerConstructor.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string
}