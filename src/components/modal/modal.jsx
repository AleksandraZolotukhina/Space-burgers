import ReactDOM from "react-dom";
import React from "react";
import styles from "./modal.module.css";
import { modalRoot } from "../../utils/constants";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";


export function Modal(props) {

    React.useEffect(() => {
        const closePopup = (event) => {
            if(event.key === "Escape"){
                props.closeModal();
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
                    {props.title && <h1 className={`text text_type_main-large ${styles.title}`}>{props.title}</h1>}
                    <button className={styles.button} onClick={props.closeModal}>
                        <CloseIcon type="primary" />
                    </button>
                    <div className={styles.container}>
                        {props.children}
                    </div>
                   
                </div>
                <ModalOverlay closeModal={props.closeModal} />
            </div>

        ),
        modalRoot)
}