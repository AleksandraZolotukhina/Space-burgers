import styles from "./modal-overlay.module.css";

export function ModalOverlay(props) {  
    return (
        <div className={styles.modal_overlay} onClick={props.closeModal}>
        </div>
    )
};