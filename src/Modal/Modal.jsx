import React from 'react';
import './Modal.scss';

const Modal = (props) => {
  const { handleClose, show, imageSource } = props;
  const toggleModalClassName = show ? 'show-div' : 'hide-div';
  return (
    <div className={toggleModalClassName}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>×</span>
          <img className="modal-body" src={imageSource} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Modal;