import PropTypes from 'prop-types';
import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

import { Apps } from '../Icons';

import { SystemLayuotContext } from '../../Context/SystemLayuotContext';

import './SignOut.css';

export const Modal = forwardRef(({ children }, ref) => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = 'hidden';
      if (location.pathname === '/') {
        setShowModal(true);
      }
    },
    close: closeModal,
  }));

  const closeModal = () => {
    document.body.style.overflow = 'auto';
      setShowModal(false);
  };

  return (
    showModal &&
    createPortal(
      <>
        <div className="modal-wrapper" onClick={closeModal}>
          <div className="modal">{children}</div>
        </div>
      </>,
      document.body,
    )
  );
});

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
};

export const SignOut = forwardRef((_, ref) => {
  const { setUser } = useContext(SystemLayuotContext);

  const singOut = () => {
    setUser(null);
  };

  console.log(ref);

  return (
    <Modal ref={ref} >
      <div className="modal-content" onClick={singOut}>
        <Apps className="sign-out" id="#sign-out" />
        <p>Sing out</p>
      </div>
    </Modal>
  );
});


