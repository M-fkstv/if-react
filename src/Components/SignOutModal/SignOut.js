import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { Apps } from '../Icons';

import { authStatuses } from '../../Constants/authStatuses';
import { setStatus } from '../../store/slices/auth.slice';
import { setAvailableHotels } from '../../store/slices/available.slice';
import { setUser } from '../../store/slices/user.slice';

import './SignOut.css';

export const Modal = forwardRef(({ children }, ref) => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

  const openModal = () => {
    if (location.pathname === '/') {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    }
  };

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
  ref: PropTypes.func,
};

export const SignOut = forwardRef((_, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(setStatus(authStatuses.loggedOut));
    console.log(setStatus(authStatuses.loggedOut));
    dispatch(setUser({ email: null, password: null }));
    dispatch(setAvailableHotels(null));

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
