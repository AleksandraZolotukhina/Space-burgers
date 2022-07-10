import styles from "./constructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_INGREDIENT, UPDATE_ORDER_INGREDIENTS, DECREASE_INGREDIENT } from "../../services/actions/data-ingredients";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "../../types/hooks";
import { useRef, FC } from "react";
import { TIngredient } from "../../types/types";

export const ConstructorIngredient: FC<{ data: Readonly<TIngredient>, readonly index: number }> = ({ data, index }) => {
    const { name, price, image, _id } = data;
    const dispatch = useDispatch();
    const ref = useRef<HTMLLIElement>(null);

    const [, drag] = useDrag({
        type: "constructor-ingredient",
        item: { index }
    });

    const [, drop] = useDrop({
        accept: "constructor-ingredient",
        hover(item: { index: number }, monitor) {
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
            const hoverClientY = clientOffset !== null && clientOffset.y - hoverBoundingRect.top;
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