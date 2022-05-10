import styles from "./modal-overlay.module.css";
import PropTypes from 'prop-types';
export function ModalOverlay({closeModal}) {  
    return (
        <div className={styles.modal_overlay} onClick={closeModal}>
        </div>
    )
};

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
}