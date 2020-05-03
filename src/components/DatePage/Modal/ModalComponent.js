import React from 'react';
import { func, bool } from 'prop-types'
import Button from '../../Form/Button'

import './ModalComponent.css'

function ModalComponent(props) {

    function onSubmit(e) {
        e.preventDefault();
        props.onSubmit(new FormData(e.target));
        e.target.reset();
    }

    function onClose(e) {
        props.onClose();
    }

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} >
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">{props.title}</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="text" name="title" required />
                        </div>
                        <div className="form-group">
                            <textarea name="description" required></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type="submit" label="add" onclick={onSubmit} />
                        <Button type="reset" label="cancel" theme="cancel" onClick={onClose} />
                    </div>
                </form>
            </div>
        </div>
    );
}

ModalComponent.defaultProps = {
    show: false,
    onClose: () => { },
    onSubmit: () => { },
};

ModalComponent.propTypes = {
    show: bool,
    onClose: func.isRequired,
    onSubmit: func.isRequired,
};

export default ModalComponent;