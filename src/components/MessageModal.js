import Modal from 'react-modal';
import React from 'react';

const MessageModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={!!props.showMessage}
        contentLabel="Sorry"
        onRequestClose={props.handleClearMessage}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Sorry</h3>
        {props.message && <p className="modal__body">{props.message}</p>}
        <button className="button" onClick={props.handleClearMessage}>okay</button>
        <a className="button__link" href={props.url}>GitHub</a>
    </Modal>
)

export default MessageModal

