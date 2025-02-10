import "./Modal.css";
import { Fragment } from "react";
import { createPortal } from 'react-dom';

const Backdrop = () => {
    // console.log("I am making Backdrop");
    return <div className="backdrop"></div>
}

const ModalOverlay = (props) => {
    // console.log("I am making Modal Overlay");
    return <div className="modal">
        <div className="content">{props.children}</div>
    </div>
}

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");
    console.log(portalElement, "I am coming in Modal");
    if (props.visibility) {
        return (
            <Fragment>
                {createPortal(<Backdrop />, portalElement)}
                {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            </Fragment>
        );
    }
}

export default Modal;