import styles from "./modal-overlay.module.css";
import { NavigateFunction } from "react-router-dom";

export const ModalOverlay = ({closeModal}: {closeModal:()=>boolean | NavigateFunction}) => {  
    return (
        <div className={styles.modal_overlay} onClick={closeModal}>
        </div>
    )
};
