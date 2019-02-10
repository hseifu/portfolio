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
        <a className="button-link" href="https://github.com/hseifu/Machine_Learning/tree/master/NeuralNet_Python">Checkout on GitHub</a>
    </Modal>
)

export default MessageModal

