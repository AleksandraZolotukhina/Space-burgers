import styles from "./constructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_INGREDIENT, UPDATE_ORDER_INGREDIENTS, DECREASE_INGREDIENT } from "../../services/actions/data-ingredients";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import PropTypes from 'prop-types';
import { menuItemPropTypes } from "../../utils/constants";

export const ConstructorIngredient = ({data, index}) => {
    const {name, price, image, _id} = data;
    const dispatch = useDispatch();
    const ref = useRef(null);

    const [,drag] = useDrag({
        type: "constructor-ingredient",
        item: {index}
    });

    const [, drop] = useDrop({
        accept: "constructor-ingredient",
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            //индекс текущего элемента
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch({ type: UPDATE_ORDER_INGREDIENTS, dragIndex, hoverIndex })
            item.index = hoverIndex;
        }
    })

    drag(drop(ref))
    
    return (
        <li className={styles.ingredient_with_drag} ref={ref}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                handleClose={() => {
                    dispatch({ type: DELETE_INGREDIENT, index }); 
                    dispatch({ type: DECREASE_INGREDIENT, id: _id });
                }}
            />
        </li>
    )
}

ConstructorIngredient.propTypes = {
    data: menuItemPropTypes.isRequired,
    index: PropTypes.number.isRequired
}
