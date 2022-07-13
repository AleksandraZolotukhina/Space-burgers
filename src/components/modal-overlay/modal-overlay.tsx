import styles from "./modal-overlay.module.css";

export const ModalOverlay = ({closeModal}: {closeModal:()=>boolean | void}) => {  
    return (
        <div className={styles.modal_overlay} onClick={closeModal}>
        </div>
    )
};
