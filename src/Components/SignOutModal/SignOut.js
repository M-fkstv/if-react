import PropTypes from 'prop-types';
import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { Apps } from '../Icons';

import { SystemLayuotContext } from '../../Context/SystemLayuotContext';

import './SignOut.css';

export const Modal = forwardRef(({ children }, ref) => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (location.pathname === '/') {
        document.body.style.overflow = 'hidden';
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
  children: PropTypes.node,
  ref: PropTypes.obj,
};

export const SignOut = forwardRef((_, ref) => {
  const { setUser } = useContext(SystemLayuotContext);

  const navigate = useNavigate();

  const signOut = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Modal ref={ref}>
      <div className="modal-content" onClick={signOut}>
        <Apps className="sign-out" id="#sign-out" />
        <p>Sing out</p>
      </div>
    </Modal>
  );
});

SignOut.propTypes = {
  ref: PropTypes.func,
};
