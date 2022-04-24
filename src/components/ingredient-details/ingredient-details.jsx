import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

export function IngredientDetails() {
    const data = useSelector(store=>store.ingredientDetails.details);
    const {calories, carbohydrates, fat, image_large, name, proteins} = data;
    return (
        <>
            <img className={styles.picture} src={image_large} alt={name} />
            <h2 className={`text text_type_main-medium ${styles.subtitle}`}>{name}</h2>

            <ul className={`${styles.list_bju} mt-8`}>
                <li className={styles.list_bju_item}>
                    <p className={`text text_type_main-default ${styles.name_bju}`}>Калории,ккал</p>
                    <p className={`text text_type_digits-default ${styles.count_bju} mt-2`}>{calories}</p>
                </li>
                <li className={styles.list_bju_item}>
                    <p className={`text text_type_main-default ${styles.name_bju}`}>Белки, г</p>
                    <p className={`text text_type_digits-default ${styles.count_bju} mt-2`}>{proteins}</p>
                </li>
                <li className={styles.list_bju_item}>
                    <p className={`text text_type_main-default ${styles.name_bju}`}>Жиры, г</p>
                    <p className={`text text_type_digits-default ${styles.count_bju} mt-2`}>{fat}</p>
                </li>
                <li className={styles.list_bju_item}>
                    <p className={`text text_type_main-default ${styles.name_bju}`}>Углеводы, г</p>
                    <p className={`text text_type_digits-default ${styles.count_bju} mt-2`}>{carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}