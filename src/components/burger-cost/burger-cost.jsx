import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-cost.module.css"
import PropTypes from 'prop-types';
export function BurgerCost({cost}) {
    return(
        <div className={`${styles.content} text_type_digits-medium`}>
            <div className={styles.price}>
                <p>{cost}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    )
}

BurgerCost.propTypes = {
    cost: PropTypes.number
}