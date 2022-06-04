import styles from "./numbers-order.module.css";

export const NumbersOrder = () => {
    return (
        <div className={styles.numbers_order}>
            <div className={styles.numbers}>
                <div>
                    <h2 className="text text_type_main-medium">Готовы:</h2>
                    <ul className={styles.list}>
                        <li className={`text text_type_digits-default ${styles.all_order}`}>034533</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text text_type_main-medium">В работе:</h2>
                    <ul className={styles.list}>
                        <li className="text text_type_digits-default">034538</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
                <p className={`text text_type_digits-large ${styles.count}`}>28 752</p>
            </div>
            <div>
                <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
                <p className={`text text_type_digits-large ${styles.count}`}>138</p>
            </div>
        </div>
    )
}