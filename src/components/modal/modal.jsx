import ReactDOM from "react-dom";
import React from "react";
import styles from "./modal.module.css";
import { modalRoot } from "../../utils/constants";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

export function Modal({ closeModal, title, children }) {

    React.useEffect(() => {
        const closePopup = (event) => {
            if(event.key === "Escape"){
                closeModal();
            }
        };
        document.addEventListener("keydown", closePopup);
        return () => {
            document.removeEventListener("keydown", closePopup);
        }
    }, [])



    return ReactDOM.createPortal(
        (
            <div className={styles.popup_container} >

                <div className={`${styles.popup} pb-15`}>
                    {title && <h1 className={`text text_type_main-large ${styles.title}`}>{title}</h1>}
                    <button className={styles.button} onClick={closeModal}>
                        <CloseIcon type="primary" />
                    </button>
                    <div className={styles.container}>
                        {children}
                    </div>
                   
                </div>
                <ModalOverlay closeModal={closeModal} />
            </div>

        ),
        modalRoot)
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}