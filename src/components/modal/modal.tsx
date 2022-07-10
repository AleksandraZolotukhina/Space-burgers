import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { modalRoot } from "../../utils/constants";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ReactNode, useEffect } from "react";

export const Modal = ({ closeModal, title, children }:Readonly<{closeModal:()=>boolean | void, title?: string, children: ReactNode}>) => {

    useEffect(() => {
        const closePopup = (event:{ readonly key: string}) => {
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